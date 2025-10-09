import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg justify-between flex max-w-[384px] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-y-0.5 [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card border",
        information: "bg-blue-secondary",
        success: "bg-green-secondary",
        warning: "bg-amber-secondary",
        error: "bg-red-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  action = false,
  longText = false,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    action?: boolean;
    longText?: boolean;
    children?: React.ReactNode;
  }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant }),
        action &&
          longText &&
          "px-3 pt-3 pb-4 items-start [&>svg]:mt-0.75 [&>svg]:mb-0.75",
        action && !longText && "pl-[14px] py-1.5 pr-1.5 items-center",
        !action &&
          longText &&
          "px-4 py-3.5 items-start [&>svg]:mt-0.75 [&>svg]:mb-0.75",
        !action && !longText && "py-2.5 px-3.5 items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
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

function AlertDescription({
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

function AlertContent({
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

export { Alert, AlertTitle, AlertDescription, AlertContent };
