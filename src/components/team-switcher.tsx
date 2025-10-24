"use client";

import * as React from "react";
import {
  ChevronsUpDown,
  Moon,
  Sun,
  Settings,
  User,
  LogOut,
  BadgeCheck,
  Bell,
  CreditCard,
  Sparkles,
} from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
  const { theme, setTheme } = useTheme();

  if (!activeTeam) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarHeader className="cursor-pointer">
              <activeTeam.logo className="size-8" />

              <div className="grid flex-1 gap-y-1 flex-col text-left text-sm">
                <span className="truncate font-medium text-base text-sidebar-primary-foreground">
                  {activeTeam.name}
                </span>
                <span className="truncate text-xs font-normal text-sidebar-foreground">
                  {activeTeam.plan}
                </span>
              </div>

              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarHeader>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-[220px]">
            {/* User Info Section */}
            <DropdownMenuLabel className="flex  gap-1.5 items-center">
              <activeTeam.logo className="size-8" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm text-foreground">
                  {activeTeam.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {activeTeam.plan}
                </span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <User className="mr-2 size-4" />
              My Profile
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles className="size-4" />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck className="size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="size-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="size-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 size-4" />
              Light Mode
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 size-4" />
              Dark Mode
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Logout */}
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
