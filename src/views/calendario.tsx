import React, { useState } from "react";
import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  MessageSquare, 
  Pin
} from "lucide-react";
import { Header } from "../components/Header";

// Definición de tipos para los eventos
interface Evento {
  id: number;
  titulo: string;
  tipo: "Reunión" | "Mantenimiento" | "Evento" | "Aviso";
  descripcion: string;
  fecha: string;
  hora: string;
  comentarios: number;
  publicadoPor: string;
}

const CalendarioEvents = () => {
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  const categorias = ["Todos", "Reuniones", "Mantenimiento", "Eventos", "Avisos"];

  const eventos: Evento[] = [
    {
      id: 1,
      titulo: "Asamblea General de Propietarios",
      tipo: "Reunión",
      descripcion: "Reunión extraordinaria para discutir mejoras en las áreas comunes y aprobación del presupuesto 2026.",
      fecha: "14 de febrero de 2026",
      hora: "10:00 AM",
      comentarios: 12,
      publicadoPor: "Administración",
    },
    {
      id: 2,
      titulo: "Corte de Agua Programado",
      tipo: "Aviso",
      descripcion: "Hidroven realizará trabajos de mantenimiento. El servicio se restablecerá a las 2:00 PM.",
      fecha: "7 de febrero de 2026",
      hora: "09:00 AM",
      comentarios: 8,
      publicadoPor: "Administración",
    },
  ];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Calendario y Eventos" />

      <main>
        {/* Botón Superior - Estilo "Agregar Empleado" */}
        <div className="flex justify-end items-center mb-6">
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-6 py-2.5 rounded-xl transition-colors shadow-sm font-bold text-sm">
            <Plus size={20} />
            Nuevo Evento
          </button>
        </div>

        {/* Filtros de Categoría - Estilo Chips de la imagen 1 adaptados a colores de la imagen 2 */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltroActivo(cat)}
              className={`px-6 py-2 rounded-xl font-bold text-sm transition-all shadow-sm ${
                filtroActivo === cat
                  ? "bg-[#94b43b] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de Eventos - Estilo Tarjetas de la imagen 1 con acabado de la imagen 2 */}
        <div className="space-y-6">
          {eventos.map((evento) => (
            <div 
              key={evento.id} 
              className="bg-white rounded-[1.8rem] p-8 shadow-sm border border-white/50 relative overflow-hidden transition-hover hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                {/* Icono de Pin Lateral */}
                <div className="mt-1">
                  <Pin size={22} className="text-[#94b43b] rotate-45" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-black text-gray-800 tracking-tight">
                      {evento.titulo}
                    </h3>
                    <CategoryBadge type={evento.tipo} />
                  </div>

                  <p className="text-gray-500 font-medium mb-6 leading-relaxed max-w-3xl">
                    {evento.descripcion}
                  </p>

                  {/* Meta información - Iconos y datos */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <CalendarIcon size={18} className="text-[#94b43b]/70" />
                      <span className="text-sm font-bold">{evento.fecha}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-[#94b43b]/70" />
                      <span className="text-sm font-bold">{evento.hora}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={18} className="text-[#94b43b]/70" />
                      <span className="text-sm font-bold">{evento.comentarios} comentarios</span>
                    </div>
                  </div>

                  {/* Footer de la tarjeta */}
                  <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                      Publicado por <span className="text-gray-500">{evento.publicadoPor}</span>
                    </p>
                    <button className="text-[#94b43b] font-black text-xs hover:underline uppercase tracking-widest">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// Componente para las etiquetas de categoría (Badge)
const CategoryBadge = ({ type }: { type: Evento["tipo"] }) => {
  const styles = {
    Reunión: "bg-[#f1f8e9] text-[#94b43b]",
    Aviso: "bg-[#e3f2fd] text-[#1e88e5]",
    Mantenimiento: "bg-[#fff3e0] text-[#fb8c00]",
    Evento: "bg-[#f3e5f5] text-[#8e24aa]",
  };

  return (
    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${styles[type] || "bg-gray-100 text-gray-500"}`}>
      {type}
    </span>
  );
};

export default CalendarioEvents;