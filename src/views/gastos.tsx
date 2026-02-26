import React, { useState } from "react";
import {
  Search,
  Download,
  Plus,
  Calendar as CalendarIcon,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import { Header } from "../components/Header";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";

registerLocale("es", es);

const GastosAdmin = () => {
  const [startDate, setStartDate] = useState(new Date());

  const transacciones = [
    {
      fecha: "2026-01-25",
      tipo: "Ingreso",
      concepto: "Cuotas de Mantenimiento",
      categoria: "Cuotas Mensuales",
      descripcion: "Pago mensual residentes",
      monto: "+$10.200",
      estado: "Completado",
    },
    {
      fecha: "2026-01-20",
      tipo: "Ingreso",
      concepto: "Cuotas Extraordinarias",
      categoria: "Cuotas Especiales",
      descripcion: "Mejoras piscina",
      monto: "+$3.500",
      estado: "Completado",
    },
    {
      fecha: "2026-01-18",
      tipo: "Egreso",
      concepto: "Multas",
      categoria: "Sanciones",
      descripcion: "Multas por uso indebido",
      monto: "-$450",
      estado: "Completado",
    },
    {
      fecha: "2026-01-15",
      tipo: "Ingreso",
      concepto: "Alquiler Salón Social",
      categoria: "Servicios",
      descripcion: "Evento privado",
      monto: "+$800",
      estado: "Completado",
    },
  ];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Administración de Gastos" />

      <main>
        {/* Acciones Superiores */}
        <div className="flex justify-end items-center gap-3 mb-6">
          <button className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm font-semibold border border-gray-100 text-sm">
            <Download size={18} />
            Exportar
          </button>
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-4 py-2 rounded-xl transition-colors shadow-sm font-semibold text-sm">
            <Plus size={18} />
            Registrar Transacción
          </button>
        </div>

        {/* Tarjetas de Resumen (Stats con Iconos de la Foto 1) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            label="Total Ingresos"
            value="$14.950"
            icon={<TrendingUp className="text-[#94b43b]" />}
            iconBg="bg-[#f1f8e9]"
            color="text-[#94b43b]"
          />
          <StatCard
            label="Total Egresos"
            value="$13.600"
            icon={<TrendingDown className="text-red-500" />}
            iconBg="bg-red-50"
            color="text-red-500"
          />
          <StatCard
            label="Gastos Externos"
            value="$8.850"
            icon={<DollarSign className="text-blue-500" />}
            iconBg="bg-blue-50"
            color="text-blue-600"
          />
          <StatCard
            label="Balance"
            value="-$7.500"
            icon={<DollarSign className="text-red-400" />}
            iconBg="bg-red-50"
            color="text-red-600"
          />
        </div>

        {/* Buscador y Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[300px]">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Buscar por concepto o categoría..."
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#94b43b] outline-none text-gray-600"
            />
          </div>

          {/* Calendario Desplegable */}
          <div className="relative flex items-center bg-white rounded-2xl shadow-sm px-4 border-none hover:ring-1 hover:ring-[#94b43b] transition-all">
            <CalendarIcon size={18} className="text-gray-400 mr-2" />
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date as Date)}
              locale="es"
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              className="bg-transparent border-none outline-none py-3 font-medium text-gray-600 cursor-pointer w-32"
            />
          </div>

          <select className="bg-white border-none rounded-2xl px-6 shadow-sm outline-none text-gray-600 font-medium focus:ring-2 focus:ring-[#94b43b] cursor-pointer text-sm">
            <option>Todas las categorías</option>
            <option>Cuotas</option>
            <option>Servicios</option>
          </select>

          <select className="bg-white border-none rounded-2xl px-6 shadow-sm outline-none text-gray-600 font-medium focus:ring-2 focus:ring-[#94b43b] cursor-pointer text-sm">
            <option>Todos los estados</option>
            <option>Completado</option>
            <option>Pendiente</option>
          </select>
        </div>

        {/* Tabla Estilo "Isla" (Copiando dimensiones de la Foto 2) */}
        <div className="bg-white/50 p-2 rounded-[2rem] shadow-sm overflow-x-auto border border-white/20">
          <table className="w-full text-left border-separate border-spacing-y-2 min-w-[1100px]">
            <thead>
              <tr className="text-gray-500 text-[11px] uppercase tracking-widest">
                <th className="px-8 py-4 font-bold">Fecha</th>
                <th className="px-6 py-4 font-bold">Tipo</th>
                <th className="px-6 py-4 font-bold">Concepto / Categoría</th>
                <th className="px-6 py-4 font-bold">Descripción</th>
                <th className="px-6 py-4 font-bold text-right">Monto</th>
                <th className="px-10 py-4 font-bold text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {transacciones.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-8 py-5 rounded-l-2xl text-sm font-medium text-gray-500">
                    {item.fecha}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                        item.tipo === "Ingreso"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {item.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-gray-800 text-sm">
                      {item.concepto}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      {item.categoria}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-500 text-sm italic">
                    {item.descripcion}
                  </td>
                  <td
                    className={`px-6 py-5 text-right font-bold text-sm ${
                      item.monto.includes("+")
                        ? "text-[#94b43b]"
                        : "text-red-500"
                    }`}
                  >
                    {item.monto}
                  </td>
                  <td className="px-6 py-5 rounded-r-2xl text-center">
                    <span className="bg-[#f1f8e9] text-[#94b43b] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {item.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

// Componente StatCard Adaptado con Iconos
interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  iconBg,
  color,
}) => (
  <div className="bg-white p-6 rounded-[1.8rem] shadow-sm border border-white/50 flex justify-between items-center">
    <div>
      <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className={`text-2xl font-black ${color}`}>{value}</p>
    </div>
    <div className={`p-3 ${iconBg} rounded-2xl`}>{icon}</div>
  </div>
);

export default GastosAdmin;
