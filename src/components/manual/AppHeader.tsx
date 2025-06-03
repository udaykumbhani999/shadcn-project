import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-white gap-6">
      <div>
        <SidebarTrigger className="cursor-pointer" />
      </div>
      <div className="flex items-center gap-6">
        <Button
          variant="outline"
          className="border-[#F75C5C] cursor-pointer text-[#F75C5C] rounded-lg px-6 py-2 font-medium hover:bg-[#FFF0F0] hover:border-[#F75C5C] hover:text-[#F75C5C] transition"
        >
          Received Invoices
        </Button>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-[#F75C5C] rounded-full w-3 h-3 border-2 border-white" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="src/assets/Avatar.png"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
}
