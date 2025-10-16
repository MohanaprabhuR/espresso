import {
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
  Calendar1Icon,
  ChevronDown,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
    icon: Calendar1Icon,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar1Icon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <aside className="">
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <div className="relative w-full">
            <button className="flex w-full items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-black">
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.47953 2.9432H0.519531V0.416016H9.47953V2.9432Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.515625 6.43848H8.77921V8.96566H3.0428V13.5821H0.515625V6.43848Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="flex-1 text-left">
                <div className="text-sm font-semibold">Name</div>
                <div className="text-xs text-muted-foreground">Name</div>
              </div>

              {/* Chevron */}
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform `}
              />
            </button>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
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
        <SidebarFooter>v0.1.0</SidebarFooter>
      </Sidebar>
    </aside>
  );
}
