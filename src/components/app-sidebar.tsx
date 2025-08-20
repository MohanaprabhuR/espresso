import {
  Home,
  InboxIcon,
  SplinePointer,
  Sliders,
  Radio,
  Projector,
  TextSearch,
  TextCursorInput,
  TextSelect,
  DivideIcon,
  CheckSquare,
  Badge,
  LinkIcon,
  RegexIcon,
  SwitchCameraIcon,
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
    icon: Badge,
  },
  {
    title: "Breadcrumb",
    url: "/breadcrumb",
    icon: LinkIcon,
  },
  {
    title: "Button",
    url: "/button",
    icon: RegexIcon,
  },
  {
    title: "Button Group",
    url: "/buttongroup",
    icon: InboxIcon,
  },
  {
    title: "Checkbox",
    url: "/checkbox",
    icon: CheckSquare,
  },
  {
    title: "Divider",
    url: "/divider",
    icon: DivideIcon,
  },
  {
    title: "Select",
    url: "/select",
    icon: TextSelect,
  },
  {
    title: "Input",
    url: "/input",
    icon: TextCursorInput,
  },
  {
    title: "Text Area",
    url: "/textarea",
    icon: TextSearch,
  },
  {
    title: "Progress Bar",
    url: "/progress",
    icon: Projector,
  },
  {
    title: "Radio Group",
    url: "/radio",
    icon: Radio,
  },
  {
    title: "Slider",
    url: "/slider",
    icon: Sliders,
  },
  // {
  //   title: "Spinner",
  //   url: "/spinner",
  //   icon: SplinePointer,
  // },
  {
    title: "Switch",
    url: "/switch",
    icon: SwitchCameraIcon,
  },
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
