import React from "react";
import { Header } from "../components/Header"; // El componente que ya tienes
import { Search, UserPlus, Mail, Phone } from "lucide-react"; // Usando Lucide para los iconos

// Simulación de datos basada en tu primera imagen
const residentes = [
  {
    id: 1,
    nombre: "Juan Pérez",
    unidad: "A-101",
    email: "juan.perez@email.com",
    tlf: "+58 412 123 4567",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "María García",
    unidad: "A-102",
    email: "maria.garcia@email.com",
    tlf: "+58 414 234 5678",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Carlos López",
    unidad: "B-201",
    email: "carlos.lopez@email.com",
    tlf: "+58 424 345 6789",
    estado: "Activo",
  },
  {
    id: 4,
    nombre: "Ana Martínez",
    unidad: "B-202",
    email: "ana.martinez@email.com",
    tlf: "+58 416 456 7890",
    estado: "Activo",
  },
  {
    id: 5,
    nombre: "Luis Rodríguez",
    unidad: "C-301",
    email: "luis.rodriguez@email.com",
    tlf: "+58 412 567 8901",
    estado: "Activo",
  },
  {
    id: 6,
    nombre: "Carmen Fernández",
    unidad: "C-302",
    email: "carmen.fernandez@email.com",
    tlf: "+58 414 678 9012",
    estado: "Activo",
  },
];

const Residentes = () => {
  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      {/* Header importado */}
      <Header title="Gestión de Residentes" />

      <main>
        <div className="flex justify-end items-center mb-6">
          {/* Botón con el estilo verde de la segunda foto */}
          <button className="flex items-center gap-2 bg-[#94b43b] hover:bg-[#82a032] text-white px-4 py-2 rounded-xl transition-colors shadow-sm font-semibold">
            <UserPlus size={20} />
            Agregar Residente
          </button>
        </div>

        {/* Buscador estilizado como los inputs del Dashboard */}
        <div className="relative mb-8">
          <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre o unidad..."
            className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl shadow-sm focus:ring-2 focus:ring-[#94b43b] outline-none text-gray-600"
          />
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentes.map((residente) => (
            <div
              key={residente.id}
              className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 flex flex-col gap-4 relative overflow-hidden"
            >
              {/* Badge de Estado */}
              <span className="absolute top-6 right-6 bg-[#f1f8e9] text-[#94b43b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {residente.estado}
              </span>

              <div className="mt-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {residente.nombre}
                </h3>
                <p className="text-gray-500 font-medium">
                  Unidad {residente.unidad}
                </p>
              </div>

              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm">{residente.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="text-gray-400" />
                  <span className="text-sm">{residente.tlf}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Residentes;
