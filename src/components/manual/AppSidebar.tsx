import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  BarChart2,
  Briefcase,
  DollarSign,
  Activity,
  User,
  LineChart,
} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="w-50 min-h-screen bg-white flex flex-col ">
      {/* Logo/Header */}
      <SidebarHeader className="flex items-center justify-center py-6">
        <img src="src/assets/Simfrom.svg" alt="Simform" className="h-5" />
      </SidebarHeader>
      {/* Navigation */}
      <SidebarContent className="flex-1 px-0">
        <nav className="flex flex-col gap-1 mt-8">
          <SidebarNavItem
            icon={<BarChart2 className="w-6 h-6" />}
            label="Dashboard"
            active={false}
          />
          <SidebarNavItem
            icon={<Briefcase className="w-6 h-6" />}
            label="Projects"
            active={true}
          />
          <SidebarNavItem
            icon={<DollarSign className="w-6 h-6" />}
            label="Revenue"
            active={false}
          />
          <SidebarNavItem
            icon={<LineChart className="w-6 h-6" />}
            label="Prediction"
            active={false}
          />
          <SidebarNavItem
            icon={<Activity className="w-6 h-6" />}
            label="Activity"
            active={false}
          />
          <SidebarNavItem
            icon={<User className="w-6 h-6" />}
            label="User"
            active={false}
          />
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}

// SidebarNavItem component
function SidebarNavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-3 px-8 py-3 cursor-pointer transition-all
        ${
          active
            ? "bg-[#FFF0F0] text-[#F75C5C] font-semibold sidebar-active-curve hover:bg-[#ffeaea] hover:text-[#d94444]"
            : "text-gray-300 hover:bg-[#FFF0F0] hover:text-[#F75C5C]"
        }`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
