import React, { useState } from "react";
import { 
  Info, 
  BookOpen, 
  Scale, 
  History, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users,
  Mail,
  Zap
} from "lucide-react";
import { Header } from "../components/Header";

const SobreNosotros = () => {
  const [tabActiva, setTabActiva] = useState("Información");

  const tabs = ["Información", "Manual", "Reglamento", "Historia", "Contacto"];

  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      <Header title="Sobre Nosotros" />

      <main>
        <p className="text-gray-500 font-medium mb-6">
          Información del condominio, manuales y normativas
        </p>

        {/* Navegación por Pestañas - Estilo exacto de la imagen */}
        <div className="bg-[#E5DDB8] p-1.5 rounded-2xl flex mb-8 w-full max-w-4xl shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setTabActiva(tab)}
              className={`flex-1 py-2.5 rounded-xl font-bold text-sm transition-all ${
                tabActiva === tab
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Contenedor Principal de Contenido */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-white/50 min-h-[550px]">
          {tabActiva === "Información" && <TabInformacion />}
          {tabActiva === "Manual" && <TabManual />}
          {tabActiva === "Reglamento" && <TabReglamento />}
          {tabActiva === "Historia" && <TabHistoria />}
          {tabActiva === "Contacto" && <TabContacto />}
        </div>
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTES DE LAS PESTAÑAS --- */

const TabInformacion = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in duration-300">
    <div className="space-y-10">
      <div className="flex items-start gap-4">
        <div className="bg-[#f1f8e9] p-3 rounded-2xl">
          <Info className="text-[#94b43b]" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-800 mb-1 tracking-tight">Condominio Parque Roraima</h3>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">
            Información general del conjunto residencial
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="flex items-center gap-2 text-[#94b43b] font-black text-sm uppercase tracking-widest">
          <MapPin size={18} /> Ubicación
        </h4>
        <p className="text-gray-600 font-semibold leading-relaxed">
          Urbanización Parque Roraima, Sector Norte<br />
          Ciudad, Estado - Código Postal
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-[#94b43b] font-black text-sm uppercase tracking-widest">Características</h4>
        <div className="flex flex-wrap gap-3">
          <BadgeInfo value="120" label="Unidades residenciales" />
          <BadgeInfo value="6" label="Torres" />
          <BadgeInfo value="15,000 m²" label="Área total" />
        </div>
      </div>
    </div>

    <div className="space-y-10">
      <div>
        <h4 className="text-[#94b43b] font-black text-sm uppercase tracking-widest mb-4">Amenidades</h4>
        <div className="grid grid-cols-2 gap-3">
          {["Piscina", "Gimnasio", "Salón de eventos", "Parque infantil", "Cancha deportiva", "Vigilancia 24/7", "Estacionamiento", "Áreas verdes"].map((item) => (
            <div key={item} className="flex items-center gap-2 bg-[#f1f8e9] px-4 py-2.5 rounded-xl text-[#94b43b] font-bold text-[11px] uppercase tracking-wide">
              <ShieldCheck size={14} /> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f9f9f9] p-6 rounded-[2rem] border border-gray-100">
        <h4 className="flex items-center gap-2 text-gray-700 font-black text-sm uppercase tracking-widest mb-4">
          <Clock size={18} /> Horarios de Áreas Comunes
        </h4>
        <ul className="space-y-3 text-sm font-bold text-gray-500">
          <li className="flex justify-between border-b border-gray-100 pb-2"><span>Piscina:</span> <span className="text-gray-800 font-black">6:00 AM - 8:00 PM</span></li>
          <li className="flex justify-between border-b border-gray-100 pb-2"><span>Gimnasio:</span> <span className="text-gray-800 font-black">5:00 AM - 10:00 PM</span></li>
          <li className="flex justify-between"><span>Parque infantil:</span> <span className="text-gray-800 font-black">6:00 AM - 7:00 PM</span></li>
        </ul>
      </div>
    </div>
  </div>
);

const TabManual = () => (
  <div className="max-w-4xl animate-in fade-in duration-300">
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-[#e3f2fd] p-3 rounded-2xl">
        <BookOpen className="text-blue-500" size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-800 mb-1 tracking-tight">Manual de Usuario</h3>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Guía para residentes del Condominio</p>
      </div>
    </div>
    
    <div className="space-y-12">
      <section>
        <h4 className="text-xl font-black text-gray-800 mb-4">1. Bienvenida</h4>
        <p className="text-gray-500 font-medium leading-relaxed text-lg">
          Bienvenido a Condominio Parque Roraima. Este manual tiene como objetivo facilitar su estadía y convivencia dentro del conjunto residencial. Aquí encontrará información importante sobre servicios, normativas y procedimientos.
        </p>
      </section>

      <section className="space-y-6">
        <h4 className="text-xl font-black text-gray-800">2. Acceso y Seguridad</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#fcfcfc] p-6 rounded-[1.8rem] border border-gray-100">
            <h5 className="font-black text-[#94b43b] text-sm uppercase tracking-widest mb-3">Tarjetas de acceso</h5>
            <p className="text-gray-500 font-medium">Cada unidad recibe 2 tarjetas de acceso. Para solicitar adicionales, dirigirse a la administración con un costo de $10 por tarjeta.</p>
          </div>
          <div className="bg-[#fcfcfc] p-6 rounded-[1.8rem] border border-gray-100">
            <h5 className="font-black text-[#94b43b] text-sm uppercase tracking-widest mb-3">Visitantes</h5>
            <p className="text-gray-500 font-medium">Los visitantes deben registrarse en la portería presentando su identificación. El residente será notificado y deberá autorizar el ingreso.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const TabReglamento = () => (
  <div className="max-w-4xl animate-in fade-in duration-300">
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-[#fff3e0] p-3 rounded-2xl">
        <Scale className="text-orange-500" size={28} />
      </div>
      <div>
        <h3 className="text-2xl font-black text-gray-800 mb-1 tracking-tight">Reglamento Interno</h3>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Normas de convivencia del condominio</p>
      </div>
    </div>

    <div className="bg-[#FFF9E6] border border-[#FFE082] p-5 rounded-2xl mb-10 flex items-center gap-3">
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <Zap className="text-orange-400" size={18} />
      </div>
      <p className="text-sm text-gray-700 font-bold">
        <span className="font-black uppercase mr-2 text-orange-600">Nota:</span> 
        El cumplimiento de este reglamento es obligatorio para todos los residentes y visitantes.
      </p>
    </div>

    <div className="space-y-10">
      <div>
        <h4 className="text-xl font-black text-gray-800 mb-6">Artículo 1: Convivencia</h4>
        <div className="space-y-4 ml-2">
          <p className="flex gap-4 text-gray-500 font-medium"><span className="text-[#94b43b] font-black">1.1</span> Respetar el descanso de los vecinos. Evitar ruidos molestos entre 10:00 PM y 7:00 AM.</p>
          <p className="flex gap-4 text-gray-500 font-medium"><span className="text-[#94b43b] font-black">1.2</span> Mantener un trato cordial y respetuoso con todos los residentes y personal.</p>
          <p className="flex gap-4 text-gray-500 font-medium"><span className="text-[#94b43b] font-black">1.3</span> Las reuniones o fiestas deben notificarse con 48 horas de anticipación.</p>
        </div>
      </div>
    </div>
  </div>
);

const TabContacto = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in duration-300">
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <div className="bg-[#f1f8e9] p-3 rounded-2xl">
          <Phone className="text-[#94b43b]" size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-800 mb-1">Información de Contacto</h3>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Canales de comunicación con la administración</p>
        </div>
      </div>

      <div className="space-y-8">
        <ContactRow icon={<Phone size={20}/>} title="Teléfono" content="+58 123-456-7890" sub="Lun - Vie: 8:00 AM - 5:00 PM" />
        <ContactRow icon={<Mail size={20}/>} title="Email" content="admin@parqueroraima.com" sub="Respuesta en 24-48 horas" />
        <ContactRow icon={<MapPin size={20}/>} title="Oficina" content="Torre A, Planta Baja" sub="Lun - Sab: 9:00 AM - 4:00 PM" />
      </div>

      <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
        <h4 className="text-red-600 font-black text-sm uppercase tracking-widest mb-2">Emergencias 24/7</h4>
        <p className="text-red-900 font-black text-xl">+58 911-000-0000</p>
      </div>
    </div>

    <div className="space-y-6">
      <h4 className="text-gray-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Departamentos</h4>
      <div className="space-y-4">
        <DeptCard name="Contabilidad" email="contabilidad@parqueroraima.com" ext="102" />
        <DeptCard name="Mantenimiento" email="mantenimiento@parqueroraima.com" ext="103" />
        <DeptCard name="Seguridad" email="seguridad@parqueroraima.com" ext="104" />
      </div>
    </div>
  </div>
);

const TabHistoria = () => (
  <div className="flex flex-center items-center justify-center h-full py-20 animate-in fade-in duration-300">
    <div className="text-center space-y-4">
      <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
        <History className="text-gray-300" size={40} />
      </div>
      <p className="text-gray-400 font-black uppercase tracking-widest text-sm">Contenido en construcción</p>
    </div>
  </div>
);

/* --- PEQUEÑOS COMPONENTES DE APOYO --- */

const BadgeInfo = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-white border border-gray-100 px-4 py-2 rounded-xl shadow-sm">
    <span className="font-black text-gray-800 text-sm">{value}</span>
    <span className="ml-2 text-gray-400 font-bold text-[11px] uppercase tracking-wide">{label}</span>
  </div>
);

const ContactRow = ({ icon, title, content, sub }: any) => (
  <div className="flex items-start gap-4">
    <div className="bg-[#fcfcfc] p-2 rounded-lg text-[#94b43b] border border-gray-50 shadow-sm">{icon}</div>
    <div>
      <h5 className="font-black text-gray-400 text-[10px] uppercase tracking-widest mb-1">{title}</h5>
      <p className="text-gray-700 font-black text-sm">{content}</p>
      <p className="text-xs text-gray-400 font-medium">{sub}</p>
    </div>
  </div>
);

const DeptCard = ({ name, email, ext }: any) => (
  <div className="bg-white border border-gray-100 p-6 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all group">
    <h5 className="font-black text-gray-800 text-lg mb-1 group-hover:text-[#94b43b] transition-colors">{name}</h5>
    <p className="text-sm text-gray-500 font-medium mb-3">{email}</p>
    <div className="inline-block bg-gray-50 px-3 py-1 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest">
      Extensión: {ext}
    </div>
  </div>
);

export default SobreNosotros;