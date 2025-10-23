import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam] = React.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarHeader>
          <activeTeam.logo className="size-8" />

          <div className="grid flex-1 gap-y-1 flex-col text-left  text-sm  tracking-2 ">
            <span className="truncate font-medium text-base text-sidebar-primary-foreground tracking-3">
              {activeTeam.name}
            </span>
            <span className="truncate text-xs font-normal tracking-4 text-sidebar-foreground">
              {activeTeam.plan}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarHeader>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
