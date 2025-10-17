"use client";
import * as React from "react";
import {
  AlertCircleIcon,
  Badge,
  Calendar1Icon,
  CheckSquare,
  DivideIcon,
  DropletIcon,
  EclipseIcon,
  FileSlidersIcon,
  FormInputIcon,
  InboxIcon,
  IndentDecreaseIcon,
  LinkIcon,
  NotepadTextIcon,
  Projector,
  Radio,
  RegexIcon,
  Sliders,
  SpaceIcon,
  SplinePointer,
  SquareChevronRightIcon,
  SwitchCameraIcon,
  Tablet,
  Tags,
  TextCursorInput,
  TextSearch,
  TextSelect,
  ToolCase,
  UserIcon,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { LogoIcon } from "../../public/images/svg/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
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
  navMain: [
    {
      title: "Avatar",
      url: "/avatar",
      icon: UserIcon,
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
    {
      title: "Spacer",
      url: "/spacer",
      icon: SpaceIcon,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar1Icon,
    },
    // {
    //   title: "Toast",
    //   url: "/sonner",
    //   icon: ToolCaseIcon,
    // },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
