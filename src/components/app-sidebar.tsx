"use client";
import * as React from "react";
import {
  AlertCircleIcon,
  Bell,
  FileSlidersIcon,
  FormInputIcon,
  Search,
  Tablet,
  User2Icon,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { LogoIcon } from "../../public/images/svg/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Badge } from "./ui/badge";

// This is sample data.
const data = {
  user: {
    name: "Frapper",
    email: "m@example.com",
    avatar: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
  teams: [
    {
      name: "Frappe",
      logo: LogoIcon,
      plan: "Frappe Inc.",
    },
  ],
  navPrimary: [
    {
      title: "Search",
      icon: Search,
    },
    {
      title: "Notification",
      icon: Bell,
      badge: "2",
    },
  ],

  navMain: [
    {
      title: "Form Components",
      icon: FormInputIcon,
      isActive: true,
      items: [
        { title: "Avatar", url: "/avatar", badge: "1" },
        { title: "Badge", url: "/badges", badge: "2" },
        { title: "Breadcrumb", url: "/breadcrumb", badge: "3" },
        { title: "Button", url: "/button", badge: "4" },
        { title: "Button Group", url: "/buttongroup", badge: "5" },
        { title: "Checkbox", url: "/checkbox" },
        { title: "Select", url: "/select" },
        { title: "Input", url: "/input" },
        { title: "Text Area", url: "/textarea" },
        { title: "Radio Group", url: "/radio" },
        { title: "Slider", url: "/slider" },
        { title: "Switch", url: "/switch" },
      ],
    },
    {
      title: "Display Components",
      icon: Tablet,
      items: [
        { title: "Divider", url: "/divider" },
        { title: "Progress Bar", url: "/progress" },
        { title: "Spinner", url: "/spinner" },
        { title: "Tabs", url: "/tabs" },
        { title: "Tags", url: "/tags" },
        { title: "Tooltip", url: "/tooltip" },
        { title: "Empty", url: "/empty" },
        { title: "Kbd", url: "/kbd" },
      ],
    },
    {
      title: "Feedback",
      icon: AlertCircleIcon,
      items: [
        { title: "Alert", url: "/alert" },
        { title: "Notification", url: "/notification" },
        { title: "DropDown", url: "/dropdown" },
      ],
    },
    {
      title: "Layout & Utilities",
      icon: FileSlidersIcon,
      items: [
        { title: "Input Group", url: "/input-group" },
        { title: "Field", url: "/field" },
        { title: "Item", url: "/item" },
        { title: "Spacer", url: "/spacer", badge: "new" },
        { title: "Calendar", url: "/calendar", badge: "new" },
      ],
    },
    {
      title: "My Profile",
      icon: User2Icon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navPrimary} />

        <SidebarSeparator />
        <NavMain items={data.navMain} />

        <SidebarSeparator />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
