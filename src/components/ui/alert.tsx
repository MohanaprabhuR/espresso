import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg justify-between flex  items-center  w-full max-w-[384px]  has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-y-0.5 [&>svg]:size-4  [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card  border ",
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
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    action?: boolean;
    longText?: boolean;
  }) {
  const paddingClasses = action ? "pl-[14px] py-1.5 pr-1.5" : "py-2.5 px-3";

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), paddingClasses, className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium text-base tracking-2 leading-5 text-primary w-full ",
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

export { Alert, AlertTitle, AlertDescription };
