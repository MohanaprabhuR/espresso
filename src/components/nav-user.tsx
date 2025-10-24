"use client";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CloudIcon,
  CreditCard,
  LogOut,
  MessageCircleQuestionMark,
  Sparkles,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Progress } from "./ui/progress";
import { Label } from "./ui/label";
export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem className="gap-2.5 flex flex-col">
        <Progress value={40} size="xs" showLabel>
          <Label>
            <CloudIcon className="size-4" />
            Label
          </Label>
        </Progress>
        <div className="flex  gap-1 justify-between w-full">
          <div className="flex items-center gap-1">
            <SidebarMenuButton>
              <Zap className="size-4" />
            </SidebarMenuButton>
            <SidebarMenuButton>
              <MessageCircleQuestionMark className="size-4" />
            </SidebarMenuButton>
          </div>
          <SidebarMenuButton className="w-auto">
            <SidebarTrigger className="size-4" />
          </SidebarMenuButton>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
