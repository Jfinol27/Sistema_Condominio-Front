import React from "react";
import { Search, Download, Filter } from "lucide-react";
import { Header } from "../components/Header";

const PagosAdmin = () => {
  const pagos = [
    {
      id: "A-101",
      concepto: "Mensualidad Enero",
      monto: "$150",
      fecha: "2026-01-14",
      estado: "Pagado",
    },
    {
      id: "A-102",
      concepto: "Mensualidad Enero",
      monto: "$150",
      fecha: "2026-01-14",
      estado: "Pagado",
    },
    {
      id: "B-201",
      concepto: "Mensualidad Enero",
      monto: "$150",
      fecha: "2026-01-20",
      estado: "Pendiente",
    },
    {
      id: "B-202",
      concepto: "Mantenimiento",
      monto: "$200",
      fecha: "2026-01-18",
      estado: "Pagado",
    },
    {
      id: "C-302",
      concepto: "Mensualidad Enero",
      monto: "$150",
      fecha: "2026-01-10",
      estado: "Pagado",
    },
    {
      id: "D-401",
      concepto: "Mensualidad Enero",
      monto: "$150",
      fecha: "2026-01-25",
      estado: "Vencido",
    },
  ];

  return (
    // bg-[#EDE8D0] y p-8 para igualar al módulo de Residentes
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      {/* Header con las mismas dimensiones y props */}
      <Header title="Gestión de Pagos" />

      <main>
        {/* Botón de Exportar con el estilo verde del botón "Agregar Residente" */}
        <div className="flex justify-end items-center mb-6">
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-4 py-2 rounded-xl transition-colors shadow-sm font-semibold">
            <Download size={20} />
            Exportar Reporte
          </button>
        </div>

        {/* Buscador y Filtro: Copiando el estilo exacto del input de Residentes */}
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre o unidad..."
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#94b43b] outline-none text-gray-600"
            />
          </div>

          {/* Selector de estado con el mismo diseño de bordes */}
          <select className="bg-white border-none rounded-2xl px-6 shadow-sm outline-none text-gray-600 font-medium focus:ring-2 focus:ring-[#94b43b]">
            <option>Todos los estados</option>
            <option>Pagado</option>
            <option>Pendiente</option>
            <option>Vencido</option>
          </select>
        </div>

        {/* Tabla estilizada para encajar en el fondo beige */}
        <div className="bg-white/50 p-2 rounded-[2rem] shadow-sm overflow-hidden border border-white/20">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 text-[11px] uppercase tracking-widest">
                <th className="px-8 py-4 font-bold">Unidad</th>
                <th className="px-6 py-4 font-bold">Concepto</th>
                <th className="px-6 py-4 font-bold">Monto</th>
                <th className="px-6 py-4 font-bold">Fecha</th>
                <th className="px-6 py-4 font-bold text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {pagos.map((pago, index) => (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-8 py-5 rounded-l-2xl font-bold text-gray-800 text-sm">
                    {pago.id}
                  </td>
                  <td className="px-6 py-5 text-gray-600 font-medium text-sm">
                    {pago.concepto}
                  </td>
                  <td className="px-6 py-5 font-bold text-gray-800 text-sm">
                    {pago.monto}
                  </td>
                  <td className="px-6 py-5 text-gray-500 text-sm">
                    {pago.fecha}
                  </td>
                  <td className="px-6 py-5 rounded-r-2xl text-center">
                    <StatusBadge status={pago.estado} />
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

const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    Pagado: "bg-[#f1f8e9] text-[#94b43b]", // Verde Residentes
    Pendiente: "bg-[#fff7e6] text-[#f5a623]", // Naranja suave
    Vencido: "bg-[#ffebee] text-[#e57373]", // Rojo suave
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default PagosAdmin;
