import { Home, DollarSign, AlertCircle } from "lucide-react";
import { Header } from "../components/Header"; // Importamos el nuevo componente

const stats = [
  {
    title: "Saldo pendiente",
    value: "-20$",
    icon: DollarSign,
    bgColor: "bg-orange-500/10",
    iconColor: "text-red-500",
    color: "text-red-500",
  },
  {
    title: "Propiedades",
    value: "68",
    icon: Home,
    bgColor: "bg-[#6B9B2E]/10",
    iconColor: "text-[#6B9B2E]",
  },
  {
    title: "Pagos al Día",
    value: "58",
    icon: DollarSign,
    bgColor: "bg-[#A8C663]/10",
    iconColor: "text-[#A8C663]",
  },
  {
    title: "Pagos Pendientes",
    value: "10",
    icon: AlertCircle,
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
];

const recentActivity = [
  {
    id: 1,
    resident: "Juan Pérez",
    action: "Pago mensualidad",
    date: "2026-01-26",
    status: "Completado",
  },
  {
    id: 2,
    resident: "María García",
    action: "Pago mantenimiento",
    date: "2026-01-25",
    status: "Completado",
  },
  {
    id: 3,
    resident: "Carlos López",
    action: "Pago extraordinario",
    date: "2026-01-24",
    status: "Pendiente",
  },
  {
    id: 4,
    resident: "Ana Martínez",
    action: "Pago mensualidad",
    date: "2026-01-23",
    status: "Completado",
  },
];

export function Dashboard() {
  return (
    <div className="flex-1 bg-[#EDE8D0] min-h-screen font-sans p-8">
      {/* Llamamos al Header reutilizable */}
      <Header title="Panel de Administración" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-[1.8rem] p-6 shadow-sm border border-black/5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">
                {stat.title}
              </p>
              <h3 className="text-2xl font-black text-gray-800">
                {stat.value}
              </h3>
            </div>
            <div
              className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center`}
            >
              <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Actividad Reciente */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-50">
          <h3 className="text-xl font-bold text-gray-800">
            Actividad Reciente
          </h3>
        </div>
        <div className="p-8">
          <div className="space-y-6">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between group border-b border-gray-100 last:border-0 pb-4 last:pb-0"
              >
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-800">
                    {activity.resident}
                  </p>
                  <p className="text-sm text-gray-500">{activity.action}</p>
                </div>
                <div className="flex items-center gap-8 md:gap-12">
                  <p className="text-sm font-medium text-gray-400">
                    {activity.date}
                  </p>
                  <div className="w-28 text-right">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        activity.status === "Completado"
                          ? "bg-[#f1f8e9] text-[#94b43b]"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
