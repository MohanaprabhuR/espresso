import { Calendar, Home, Inbox, Search } from "lucide-react";

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

// Menu items.
const items = [
  {
    title: "Avatar",
    url: "/avatar",
    icon: Home,
  },
  {
    title: "Badge",
    url: "/badges",
    icon: Inbox,
  },
  {
    title: "Breadcrumb",
    url: "/breadcrumb",
    icon: Inbox,
  },
  {
    title: "Button",
    url: "/button",
    icon: Calendar,
  },
  {
    title: "Button Group",
    url: "/buttongroup",
    icon: Calendar,
  },
  {
    title: "Checkbox",
    url: "/checkbox",
    icon: Calendar,
  },
  {
    title: "Divider",
    url: "/divider",
    icon: Search,
  },
  {
    title: "Select",
    url: "/select",
    icon: Search,
  },
  {
    title: "Input",
    url: "/input",
    icon: Search,
  },
  {
    title: "Text Area",
    url: "/textarea",
    icon: Search,
  },
  {
    title: "Progress Bar",
    url: "/progress",
    icon: Search,
  },
  {
    title: "Radio Group",
    url: "/radio",
    icon: Search,
  },
  // {
  //   title: "Slider",
  //   url: "/slider",
  //   icon: Search,
  // },
];

export function AppSidebar() {
  return (
    <aside className="w-64 bg-muted border-r border-border p-4">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </aside>
  );
}
