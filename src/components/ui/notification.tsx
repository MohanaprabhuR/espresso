import * as React from "react";
import { cn } from "@/lib/utils";

function Notification({
  className,
  action = false,
  longText = false,
  notificationPanel = false,
  splitbutton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  action?: boolean;
  longText?: boolean;
  splitbutton?: boolean;
  notificationPanel?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="notification"
      role="alert"
      className={cn(
        "relative shadow-2xl bg-white dark:bg-[var(--color-dark-gray-100)] rounded-lg flex w-full max-w-[384px] flex-1 has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-x-2.5 gap-y-0.5 [&>svg]:size-4 [&>svg]:text-current",
        action && "px-3 py-1.5",
        longText &&
          "py-3 px-3.5  items-start [&>svg]:mt-0.75 [&>svg]:mb-0.75 [&>img]:mt-0.75 [&>img]:mb-0.75",
        !action && !longText && "py-2.5 px-3 flex-row items-center",
        notificationPanel && "items-start p-3",
        splitbutton && longText && "p-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function NotificationTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="notification-title"
      className={cn(
        "font-medium text-base tracking-2 leading-5 text-primary w-full",
        className
      )}
      {...props}
    />
  );
}

function NotificationDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="notification-description"
      className={cn(
        "text-secondary-foreground font-normal tracking-4 grid justify-items-start gap-1 text-base leading-6",
        className
      )}
      {...props}
    />
  );
}

function NotificationTimeStamp({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="notification-timestamp"
      className={cn(
        "text-muted-foreground font-normal pt-1.5 -tracking-1 grid justify-items-start gap-1 text-sm leading-6",
        className
      )}
      {...props}
    />
  );
}

function NotificationContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
  return (
    <div
      data-slot="notification-content"
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Notification,
  NotificationTitle,
  NotificationDescription,
  NotificationContent,
  NotificationTimeStamp,
};
