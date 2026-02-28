import {
  LayoutDashboard,
  Users,
  CreditCard,
  Wallet,
  TrendingDown,
  BarChart3,
  CalendarDays,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Info,
  BookUser,
} from "lucide-react";
import logororaima from "../assets/Logo_Parque_Roraima.png";

type View =
  | "dashboard"
  | "residentes"
  | "pagos"
  | "nomina"
  | "gastos"
  | "estadisticas"
  | "calendario"
  | "reclamos"
  | "sobre nosotros";

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen: boolean;
  onToggle: () => void;
  onLogout: () => void;
}

export function Sidebar({
  currentView,
  onViewChange,
  isOpen,
  onToggle,
  onLogout,
}: SidebarProps) {
  const menuItems = [
    { id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard },
    { id: "residentes" as View, label: "Residentes", icon: Users },
    { id: "pagos" as View, label: "Pagos", icon: CreditCard },
    { id: "nomina" as View, label: "Nómina", icon: Wallet },
    { id: "gastos" as View, label: "Gastos", icon: TrendingDown },
    { id: "estadisticas" as View, label: "Estadísticas", icon: BarChart3 },
    { id: "calendario" as View, label: "Calendario", icon: CalendarDays },
    { id: "reclamos" as View, label: "Reclamos", icon: MessageSquare },
    { id: "sobre nosotros" as View, label: "Sobre Nosotros", icon: Info },
  ];

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar - Fondo Blanco Aplicado */}
      <div
        className={`fixed lg:relative h-screen bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0 lg:w-20"
        } ${isOpen ? "w-64" : "lg:w-20"}`}
      >
        {/* Botón de colapsar */}
        <button
          onClick={onToggle}
          className="hidden lg:flex items-center justify-center absolute -right-3 top-9 w-7 h-7 bg-[#8BAF3B] border border-[#bbec52] rounded-full shadow-md text-white hover:bg-[#648222] transition-all duration-300 z-50 cursor-pointer stroke-2"
        >
          {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>

        {/* Logo Section */}
        <div
          className={`flex flex-col items-center justify-center p-5 border-b border-gray-100 h-32 ${!isOpen && "lg:p-3"}`}
        >
          <div
            className={`w-40 h-40 flex items-center justify-center transition-all duration-300 ${!isOpen && "lg:w-0 lg:h-0 lg:opacity-0 lg:hidden"}`}
          >
            <img
              src={logororaima}
              alt="Parque Roraima"
              className="w-full h-full object-contain"
            />
          </div>
          {!isOpen && (
            <div className="hidden lg:flex items-center justify-center w-full h-10">
              <div className="w-10 h-10 bg-[#8BAF3B] rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xs">PR</span>
              </div>
            </div>
          )}
        </div>

        {/* Navegación */}
        <nav className={`flex-1 p-4 overflow-y-auto ${!isOpen && "lg:p-2"}`}>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group cursor-default ${
                    currentView === item.id
                      ? "bg-[#8BAF3B] text-white shadow-md"
                      : "text-gray-500 hover:bg-gray-50 hover:shadow-sm hover:text-[#8BAF3B] hover:translate-x-1"
                  } ${!isOpen && "lg:justify-center lg:px-0 lg:hover:translate-x-0"}`}
                  title={!isOpen ? item.label : undefined}
                >
                  <item.icon
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      currentView !== item.id && "group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`transition-opacity duration-300 font-medium ${
                      !isOpen && "lg:opacity-0 lg:hidden"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón Cerrar Sesión */}
        <div
          className={`p-4 border-t border-gray-100 mt-auto ${!isOpen && "lg:p-2 lg:flex lg:justify-center"}`}
        >
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 hover:shadow-sm transition-all cursor-default ${
              !isOpen && "justify-center px-0"
            }`}
            title={!isOpen ? "Cerrar Sesión" : undefined}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span
              className={`${!isOpen && "hidden"} transition-opacity duration-300 font-medium`}
            >
              Cerrar Sesión
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
