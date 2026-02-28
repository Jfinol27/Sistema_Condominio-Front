import React, { useState } from "react";
import {
  Search,
  Plus,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  Filter
} from "lucide-react";
import { Header } from "../components/Header";

const ReclamosAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reclamos = [
    {
      id: 1,
      titulo: "Fuga de agua en área común",
      usuario: "Juan Pérez",
      apto: "A-101",
      fecha: "2026-01-26 09:30",
      descripcion: "Hay una fuga de agua en el pasillo del piso 1 cerca del ascensor. El agua está acumulándose y representa un riesgo de accidente.",
      estado: "En Proceso",
      prioridad: "Alta",
      categoria: "Mantenimiento"
    },
    {
      id: 2,
      titulo: "Ruido excesivo en horas nocturnas",
      usuario: "María García",
      apto: "B-202",
      fecha: "2026-01-25 23:15",
      descripcion: "El vecino del B-203 tiene música a volumen muy alto fuera del horario permitido según el reglamento interno.",
      estado: "Resuelto",
      prioridad: "Media",
      categoria: "Convivencia"
    }
  ];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Reclamos y Sugerencias" />

      <main>
        {/* Acciones Superiores */}
        <div className="flex justify-end items-center mb-6">
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-6 py-2.5 rounded-xl transition-colors shadow-sm font-bold">
            <Plus size={20} />
            Nuevo Reclamo
          </button>
        </div>

        {/* Tarjetas de Resumen (Mismo estilo que Nómina) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Pendientes" value="1" color="text-orange-500" />
          <StatCard label="En Proceso" value="2" color="text-blue-500" />
          <StatCard label="Resueltos" value="2" color="text-[#94b43b]" />
        </div>

        {/* Buscador y Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[300px]">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Buscar reclamos..."
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#94b43b] outline-none text-gray-600 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select className="bg-white border-none rounded-2xl px-6 shadow-sm outline-none text-gray-600 font-bold focus:ring-2 focus:ring-[#94b43b] cursor-pointer">
            <option>Todos</option>
            <option>Pendientes</option>
            <option>En Proceso</option>
            <option>Resueltos</option>
          </select>
        </div>

        {/* Lista de Reclamos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Columna Izquierda: Lista */}
          <div className="lg:col-span-7 space-y-4">
            {reclamos.map((rec) => (
              <div 
                key={rec.id}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-white/50 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <StatusIcon status={rec.estado} />
                    <div>
                      <h3 className="font-black text-gray-800 text-lg leading-tight">{rec.titulo}</h3>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                        {rec.usuario} • {rec.apto}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-300 hover:text-gray-500">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                  {rec.descripcion}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <Badge text={rec.estado} type={rec.estado} />
                  <Badge text={rec.prioridad} type={rec.prioridad} />
                  <Badge text={rec.categoria} type="default" />
                  <span className="ml-auto text-[11px] text-gray-400 font-bold">
                    {rec.fecha}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Vista Detallada (Simulada según imagen) */}
          <div className="lg:col-span-5 bg-white/50 rounded-[2.5rem] p-8 border border-white/20 hidden lg:block">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm h-full">
               <h2 className="text-2xl font-black text-gray-800 mb-2">Fuga de agua en área común</h2>
               <p className="text-sm text-gray-400 font-bold mb-6">Juan Pérez • A-101 • 2026-01-26 09:30</p>
               
               <div className="bg-[#f9f9f9] p-6 rounded-2xl mb-6">
                 <div className="flex gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">J</div>
                    <div>
                       <p className="font-bold text-sm text-gray-800">Juan Pérez</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">2026-01-26 09:30</p>
                    </div>
                 </div>
                 <p className="text-sm text-gray-600 font-medium leading-relaxed">
                   Hay una fuga de agua en el pasillo del piso 1 cerca del ascensor. El agua está acumulándose y representa un riesgo de accidente.
                 </p>
               </div>

               <div className="flex items-center gap-3 mt-auto">
                 <div className="w-10 h-10 rounded-full bg-[#94b43b] flex items-center justify-center font-bold text-white text-xs">A</div>
                 <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Escribir una respuesta..." 
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-[#94b43b]"
                    />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTES --- */

const StatCard = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-white/50">
    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">{label}</p>
    <p className={`text-4xl font-black ${color}`}>{value}</p>
  </div>
);

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "Resuelto") return <div className="p-2 bg-[#f1f8e9] rounded-xl text-[#94b43b]"><CheckCircle2 size={24} /></div>;
  if (status === "En Proceso") return <div className="p-2 bg-blue-50 rounded-xl text-blue-500"><Clock size={24} /></div>;
  return <div className="p-2 bg-orange-50 rounded-xl text-orange-500"><AlertCircle size={24} /></div>;
};

const Badge = ({ text, type }: { text: string; type: string }) => {
  const styles: any = {
    "Resuelto": "bg-[#f1f8e9] text-[#94b43b]",
    "En Proceso": "bg-blue-50 text-blue-500",
    "Alta": "bg-red-50 text-red-500",
    "Media": "bg-orange-50 text-orange-500",
    "default": "bg-gray-100 text-gray-400"
  };

  return (
    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${styles[type] || styles.default}`}>
      {text}
    </span>
  );
};

export default ReclamosAdmin;