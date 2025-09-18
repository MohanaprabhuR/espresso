import * as React from "react";
import { cn } from "@/lib/utils";

function Notification({
  className,
  action = false,
  ...props
}: React.ComponentProps<"div"> & {
  action?: boolean;
  longText?: boolean;
}) {
  const paddingClasses = action ? "px-3 py-1.5" : "py-2.5 px-3";

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        "relative shadow-2xl rounded-lg justify-between flex items-start w-full max-w-[384px] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-y-0.5 [&>svg]:size-4 [&>svg]:text-current",
        paddingClasses,
        className
      )}
      {...props}
    />
  );
}

function NotificationTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
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
      data-slot="alert-description"
      className={cn(
        "text-secondary-foreground font-normal tracking-4 grid justify-items-start gap-1 text-base leading-6",
        className
      )}
      {...props}
    />
  );
}

// Fixed NotificationContent
function NotificationContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
  return (
    <div data-slot="alert-content" className={cn("", className)} {...props}>
      {children}
    </div>
  );
}

export {
  Notification,
  NotificationTitle,
  NotificationDescription,
  NotificationContent,
};
