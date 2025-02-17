import type { Metadata } from "next";
import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ProtectedRoute } from "./protectedRoute";

export const metadata: Metadata = {
  title: {
    template: "%s | Afor dashboard",
    default: "Afor dashboard",
  },
  description:
    "Afor Dashboard is dedicated to control the all dynamic operation happen to afor web application.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex min-h-screen flex-col">
            <div className="sticky top-0 z-10 border-b bg-background px-4 py-3">
              <SidebarTrigger className="bg-primary hover:bg-secondary transition-all  duration-300 text-white" />
            </div>
            <div className="flex-1 space-y-4 p-8 pt-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
    </ProtectedRoute>
  );
}