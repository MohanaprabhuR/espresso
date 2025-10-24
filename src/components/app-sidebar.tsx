"use client";
import * as React from "react";
import {
  Bell,
  Search,
  FolderMinusIcon,
  Home,
  InboxIcon,
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
  Plus,
  RegexIcon,
  SwitchCameraIcon,
  Tablet,
  ToolCase,
  Tags,
  SplinePointer,
  AlertCircleIcon,
  DropletIcon,
  FormInputIcon,
  EclipseIcon,
  NotepadTextIcon,
  FileSlidersIcon,
  IndentDecreaseIcon,
  SquareChevronRightIcon,
  SpaceIcon,
  Calendar1Icon,
  Zap,
  MessageCircleQuestionMark,
  CloudIcon,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { LogoIcon } from "../../public/images/svg/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

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
  navMainDropDown: [
    {
      title: "Form Components",
      icon: FolderMinusIcon,
      isActive: true,
      items: [
        { title: "General", url: "#" },
        { title: "Standups", url: "#" },
        { title: "Training", url: "#" },
        { title: "Update", url: "#" },
      ],
    },
  ],

  navMain: [
    {
      title: "Avatar",
      url: "/avatar",
      icon: Home,
      badge: "1",
    },
    {
      title: "Badge",
      url: "/badges",
      icon: Badge,
      badge: "2",
    },
    {
      title: "Breadcrumb",
      url: "/breadcrumb",
      icon: LinkIcon,
      badge: "3",
    },
    {
      title: "Button",
      url: "/button",
      icon: RegexIcon,
      badge: "4",
    },
    {
      title: "Button Group",
      url: "/buttongroup",
      icon: InboxIcon,
      badge: "5",
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
    {
      title: "Spinner",
      url: "/spinner",
      icon: SplinePointer,
    },
    {
      title: "Switch",
      url: "/switch",
      icon: SwitchCameraIcon,
    },
    {
      title: "Tabs",
      url: "/tabs",
      icon: Tablet,
    },
    {
      title: "Tags",
      url: "/tags",
      icon: Tags,
    },
    {
      title: "Tooltip",
      url: "/tooltip",
      icon: ToolCase,
    },
    {
      title: "Alert",
      url: "/alert",
      icon: AlertCircleIcon,
    },
    {
      title: "Notification",
      url: "/notification",
      icon: NotepadTextIcon,
    },
    {
      title: "DropDwon",
      url: "/dropdown",
      icon: DropletIcon,
    },
    {
      title: "Input Group",
      url: "/input-group",
      icon: FormInputIcon,
    },

    {
      title: "Empty",
      url: "/empty",
      icon: EclipseIcon,
    },

    {
      title: "Field",
      url: "/field",
      icon: FileSlidersIcon,
    },

    {
      title: "Item",
      url: "/item",
      icon: IndentDecreaseIcon,
    },

    {
      title: "Kbd",
      url: "/kbd",
      icon: SquareChevronRightIcon,
    },
    { title: "Spacer", url: "/spacer", badge: "new", icon: SpaceIcon },
    { title: "Calendar", url: "/calendar", badge: "new", icon: Calendar1Icon },
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
        <SidebarGroupLabel>
          Teams
          <SidebarMenuButton>
            <Plus className="size-4" />
          </SidebarMenuButton>
        </SidebarGroupLabel>
        <NavMain items={data.navMainDropDown} />
        <SidebarSeparator />
        <NavMain items={data.navMain} />
        <SidebarSeparator />
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between gap-1">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
