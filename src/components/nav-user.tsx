"use client";
import { CloudIcon, MessageCircleQuestionMark, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { open } = useSidebar(); // get sidebar state (open / collapsed)

  return (
    <SidebarMenu>
      <SidebarMenuItem
        className={`gap-2.5 flex flex-col transition-all duration-300`}
      >
        {open && (
          <Progress value={40} size="xs" showLabel>
            <Label className="flex items-center gap-1 text-xs">
              <CloudIcon className="size-4" />
              Label
            </Label>
          </Progress>
        )}

        <div
          className={`flex justify-between w-full ${
            !open ? "flex-col items-center gap-1" : ""
          }`}
        >
          {open && (
            <div className="flex items-center gap-1">
              <SidebarMenuButton>
                <Zap className="size-4" />
              </SidebarMenuButton>
              <SidebarMenuButton>
                <MessageCircleQuestionMark className="size-4" />
              </SidebarMenuButton>
            </div>
          )}

          <SidebarMenuButton
            className={`w-auto ${!open ? "mx-auto" : ""}`}
            tooltip="Toggle Sidebar"
          >
            <SidebarTrigger className="size-4 shrink-0" />
          </SidebarMenuButton>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
