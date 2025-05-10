import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  BookOpen,
  Heart,
  Users,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard/stats",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "News & Articles",
    url: "/dashboard/articles",
    icon: Newspaper,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: BookOpen,
  },
  {
    title: "Donators",
    url: "/dashboard/donators",
    icon: Heart,
  },
  {
    title: "Subscribers",
    url: "/dashboard/subscribers",
    icon: Users,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-16 mt-4">
            <a href="/" className="cursor-pointer">
              <img
                src="/logos/logoAfor.png"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-primary " />
                      <span className="flex-1">{item.title}</span>
                      <ChevronRight className="h-4 w-4 text-secondary" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
