import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Header } from "../components/Header";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";

registerLocale("es", es);

const EstadisticasFinancieras = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Datos para las barras de tendencia
  const tendencias = [
    { mes: "Julio", ingresos: 14500, egresos: 19400, balance: -4900 },
    { mes: "Agosto", ingresos: 15200, egresos: 20300, balance: -5100 },
    { mes: "Septiembre", ingresos: 14800, egresos: 20800, balance: -6000 },
    { mes: "Octubre", ingresos: 15500, egresos: 20500, balance: -5000 },
  ];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Estadísticas Financieras" />

      <main>
        {/* Selector de Mes Superior */}
        <div className="flex justify-end items-center mb-6">
          <div className="relative flex items-center bg-white rounded-2xl shadow-sm px-4 border-none hover:ring-1 hover:ring-[#94b43b] transition-all">
            <CalendarIcon size={18} className="text-gray-400 mr-2" />
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date as Date)}
              locale="es"
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              className="bg-transparent border-none outline-none py-3 font-medium text-gray-600 cursor-pointer w-32"
            />
          </div>
        </div>

        {/* Tarjetas de Resumen Estilo "Foto 1" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            label="Total Ingresos"
            value="$14.950"
            subtext="vs. mes anterior"
            percentage="7.7%"
            trend="down"
            icon={<TrendingUp className="text-[#94b43b]" />}
            iconBg="bg-[#f1f8e9]"
            color="text-[#94b43b]"
          />
          <StatCard
            label="Total Egresos"
            value="$22.350"
            subtext="vs. mes anterior"
            percentage="2.3%"
            trend="up"
            icon={<TrendingDown className="text-red-500" />}
            iconBg="bg-red-50"
            color="text-red-600"
          />
          <StatCard
            label="Balance Neto"
            value="$7.400"
            subtext="Déficit"
            icon={<DollarSign className="text-red-500" />}
            iconBg="bg-red-50"
            color="text-red-600"
          />
        </div>

        {/* Sección de Tendencia Mensual */}
        <div className="bg-white/50 p-8 rounded-[2rem] shadow-sm border border-white/20">
          <h3 className="text-gray-800 font-bold text-lg mb-8">
            Tendencia Mensual (Últimos 7 meses)
          </h3>

          <div className="space-y-8">
            {tendencias.map((data, index) => (
              <div key={index} className="space-y-2">
                {/* Etiquetas de datos */}
                <div className="flex justify-between items-end">
                  <span className="text-gray-500 font-medium text-sm">
                    {data.mes}
                  </span>
                  <div className="flex gap-4 text-[11px] font-bold">
                    <span className="text-[#94b43b]">
                      +{formatCurrency(data.ingresos)}
                    </span>
                    <span className="text-red-500">
                      -{formatCurrency(data.egresos)}
                    </span>
                    <span className="text-red-600 bg-red-50 px-2 rounded-md">
                      {formatCurrency(data.balance)}
                    </span>
                  </div>
                </div>

                {/* Barras Comparativas */}
                <div className="flex h-8 gap-1 w-full">
                  <div
                    className="bg-[#dcedc8] rounded-l-lg transition-all duration-500"
                    style={{ width: "40%" }} // Ajustar proporcionalmente según datos reales
                  >
                    <div className="flex h-full items-center justify-end pr-3 text-[10px] font-bold text-[#94b43b]">
                      Ingresos
                    </div>
                  </div>
                  <div
                    className="bg-red-100 rounded-r-lg transition-all duration-500"
                    style={{ width: "60%" }} // Ajustar proporcionalmente según datos reales
                  >
                    <div className="flex h-full items-center justify-end pr-3 text-[10px] font-bold text-red-500">
                      Egresos
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Estilos del Calendario */}
      <style>{`
        .react-datepicker { border-radius: 1.5rem; border: none; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); font-family: inherit; }
        .react-datepicker__header { background: white; border: none; }
        .react-datepicker__month-text--keyboard-selected { background-color: #94b43b !important; border-radius: 0.5rem; }
        .react-datepicker__month-text:hover { border-radius: 0.5rem; }
      `}</style>
    </div>
  );
};

// Helper para formatear moneda
const formatCurrency = (val: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
    .format(val)
    .replace("$", "$");

// Componente StatCard con la estética de la Foto 1
interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  percentage?: string;
  trend?: "up" | "down";
  icon: React.ReactNode;
  iconBg: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  percentage,
  trend,
  icon,
  iconBg,
  color,
}) => (
  <div className="bg-white p-6 rounded-[1.8rem] shadow-sm border border-white/50 flex justify-between items-start">
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">
          {label}
        </p>
        {percentage && (
          <span
            className={`text-[10px] flex items-center font-bold ${trend === "up" ? "text-red-500" : "text-red-500"}`}
          >
            {trend === "up" ? "↗" : "↘"} {percentage}
          </span>
        )}
      </div>
      <p className={`text-3xl font-black ${color} mb-1`}>{value}</p>
      {subtext && <p className="text-gray-400 text-xs">{subtext}</p>}
    </div>
    <div className={`p-3 ${iconBg} rounded-2xl`}>{icon}</div>
  </div>
);

export default EstadisticasFinancieras;
