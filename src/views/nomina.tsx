import React, { useState } from "react";
import {
  Search,
  Download,
  UserPlus,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Header } from "../components/Header";
// Importamos el DatePicker y sus estilos
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale";

// Configuramos el idioma a español
registerLocale("es", es);

const NominaAdmin = () => {
  const [startDate, setStartDate] = useState(new Date());

  const empleados = [
    {
      nombre: "Roberto Díaz",
      cargo: "Administrador",
      depto: "Administración",
      salario: "$2500",
      ingreso: "2020-03-15",
      pago: "2026-01-30",
      estado: "Pagado",
    },
    {
      nombre: "Miguel Ángel Torres",
      cargo: "Supervisor de Mantenimiento",
      depto: "Mantenimiento",
      salario: "$1800",
      ingreso: "2021-06-01",
      pago: "2026-01-30",
      estado: "Pagado",
    },
    {
      nombre: "Carlos Medina",
      cargo: "Jardinero",
      depto: "Mantenimiento",
      salario: "$1200",
      ingreso: "2022-01-10",
      pago: "2026-01-31",
      estado: "Pendiente",
    },
  ];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Administración de Nómina" />

      <main>
        {/* Acciones Superiores */}
        <div className="flex justify-end items-center gap-3 mb-6">
          <button className="flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm font-semibold border border-gray-100">
            <Download size={18} />
            Exportar
          </button>
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-4 py-2 rounded-xl transition-colors shadow-sm font-semibold">
            <UserPlus size={18} />
            Agregar Empleado
          </button>
        </div>

        {/* Tarjetas de Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="Total Empleados" value="7" />
          <StatCard label="Nómina Total" value="$10.050" />
          <StatCard label="Pagados" value="5" color="text-[#94b43b]" />
          <StatCard label="Pendientes" value="2" color="text-[#f5a623]" />
        </div>

        {/* Buscador y Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[300px]">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre, cargo o departamento..."
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#94b43b] outline-none text-gray-600"
            />
          </div>

          {/* CALENDARIO DESPLEGABLE PERSONALIZADO */}
          <div className="relative flex items-center bg-white rounded-2xl shadow-sm px-4 border-none hover:ring-1 hover:ring-[#94b43b] transition-all">
            <CalendarIcon size={18} className="text-gray-400 mr-2" />
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date as Date)}
              locale="es"
              dateFormat="dd MMMM, yyyy"
              className="bg-transparent border-none outline-none py-3 font-medium text-gray-600 cursor-pointer w-40"
              placeholderText="Seleccionar fecha"
              showPopperArrow={false}
            />
          </div>

          <select className="bg-white border-none rounded-2xl px-6 shadow-sm outline-none text-gray-600 font-medium focus:ring-2 focus:ring-[#94b43b] cursor-pointer">
            <option>Todos los estados</option>
            <option>Pagado</option>
            <option>Pendiente</option>
          </select>
        </div>

        {/* Tabla (Misma lógica anterior) */}
        <div className="bg-white/50 p-2 rounded-[2rem] shadow-sm overflow-x-auto border border-white/20">
          <table className="w-full text-left border-separate border-spacing-y-2 min-w-[1000px]">
            <thead>
              <tr className="text-gray-500 text-[11px] uppercase tracking-widest">
                <th className="px-8 py-4 font-bold">Empleado</th>
                <th className="px-6 py-4 font-bold">Cargo / Depto</th>
                <th className="px-6 py-4 font-bold">Salario</th>
                <th className="px-6 py-4 font-bold">Fecha Pago</th>
                <th className="px-6 py-4 font-bold text-center">Estado</th>
                <th className="px-6 py-4 font-bold text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((emp, index) => (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-50 transition-colors"
                >
                  <td className="px-8 py-5 rounded-l-2xl">
                    <div className="font-bold text-gray-800 text-sm">
                      {emp.nombre}
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      Ingreso: {emp.ingreso}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-gray-700 font-semibold text-sm">
                      {emp.cargo}
                    </div>
                    <div className="text-[11px] text-gray-400">{emp.depto}</div>
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-800 text-sm">
                    {emp.salario}
                  </td>
                  <td className="px-6 py-5 text-gray-500 text-sm font-medium">
                    {emp.pago}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <StatusBadge
                      status={emp.estado as "Pagado" | "Pendiente"}
                    />
                  </td>
                  <td className="px-6 py-5 rounded-r-2xl text-center">
                    <button className="text-[#94b43b] font-bold text-[10px] hover:underline uppercase tracking-wider">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

// ... (Sub-componentes StatCard y StatusBadge se mantienen igual)
type StatCardProps = {
  label: string;
  value: string;
  color?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  color = "text-gray-800",
}) => (
  <div className="bg-white p-6 rounded-[1.8rem] shadow-sm border border-white/50">
    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">
      {label}
    </p>
    <p className={`text-2xl font-black ${color}`}>{value}</p>
  </div>
);

type StatusBadgeProps = {
  status: "Pagado" | "Pendiente";
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = {
    Pagado: "bg-[#f1f8e9] text-[#94b43b]",
    Pendiente: "bg-[#fff7e6] text-[#f5a623]",
  };
  return (
    <span
      className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default NominaAdmin;
