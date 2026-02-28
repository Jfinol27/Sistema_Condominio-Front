import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./views/dashboard";
import Login from "./views/login";
import { Menu } from "lucide-react";
import Residentes from "./views/residentes";
import GastosAdmin from "./views/gastos";
import NominaAdmin from "./views/nomina";
import PagosAdmin from "./views/pagos";
import EstadisticasFinancieras from "./views/estadisticas";
import Calendario from "./views/calendario";
import SobreNosotros from "./views/nosotros";
import Reclamos from "./views/reclamos";

// 1. Definimos el tipo exacto que espera el Sidebar
type MainView =
  | "dashboard"
  | "residentes"
  | "pagos"
  | "nomina"
  | "gastos"
  | "estadisticas"
  | "calendario"
  | "reclamos"
  | "sobre nosotros";
type View = MainView | "login";

function App() {
  const [currentView, setCurrentView] = useState<View>("login");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (currentView === "login") {
    return <Login onLogin={() => setCurrentView("dashboard")} />;
  }

  return (
    // Cambiamos bg-beige-600 por el código hexadecimal exacto
    <div className="flex h-screen bg-[#EDE8D0] text-gray-900 overflow-hidden">
      <Sidebar
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onLogout={() => setCurrentView("login")}
      />

      <main className="flex-1 overflow-y-auto bg-[#EDE8D0]">
        {/* Botón para móviles */}
        <div className="lg:hidden p-4">
          <button
            className="p-2 hover:bg-black/5 rounded-lg"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Renderizado de vistas */}
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "residentes" && <Residentes />}
        {currentView === "pagos" && <PagosAdmin />}
        {currentView === "nomina" && <NominaAdmin />}
        {currentView === "gastos" && <GastosAdmin />}
        {currentView === "estadisticas" && <EstadisticasFinancieras />}
        {currentView === "calendario" && <Calendario />}
        {currentView === "reclamos" && <Reclamos />}
        {currentView === "sobre nosotros" && <SobreNosotros />}
      </main>
    </div>
  );
}

export default App;
