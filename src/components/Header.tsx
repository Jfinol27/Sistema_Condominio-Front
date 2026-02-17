import { Bell, User as UserIcon, Menu } from "lucide-react";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void; // Para abrir el sidebar en móviles
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    // Agregamos bg-white, padding interno, bordes redondeados y sombra suave
    <header className="flex items-center justify-between mb-8 p-4 bg-white rounded-2xl border border-black/5 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 lg:hidden hover:bg-black/5 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        {/* Notificaciones */}
        <button className="p-2.5 text-gray-500 hover:bg-black/5 rounded-full relative transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-[#FDFBF7]"></span>
        </button>

        {/* Perfil de Usuario */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-200">
          <div className="hidden md:block text-right">
            <p className="text-sm font-bold text-gray-800">Admin Usuario</p>
            <p className="text-xs text-gray-500">Administrador</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#8BAF3B]/20 flex items-center justify-center text-[#8BAF3B] border border-[#8BAF3B]/30">
            <UserIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}
