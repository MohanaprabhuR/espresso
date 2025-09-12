import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg justify-center items-center flex has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-y-0.5 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground border tracking-3 text-base font-medium w-full max-w-[384px]",
        error:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        information: "bg-blue-50 text-blue-900 [&>svg]:text-blue-500",
        success: "bg-green-50 text-green-900 [&>svg]:text-green-500",
        warning: "bg-amber-50 text-amber-900 [&>svg]:text-amber-500",
      },
      size: {
        block: "gap-y-1",
        compact: "flex items-center gap-2 p-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "block",
    },
  }
);

function Alert({
  className,
  variant,
  size,
  action = false,
  longText = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    action?: boolean;
    longText?: boolean;
  }) {
  const paddingClasses = longText
    ? `max-w-[344px] flex-wrap px-4 ${
        action ? "py-1.5 pl-3.5 pr-3" : "py-2.5 pl-3.5 pr-3"
      }`
    : `max-w-[384px] px-3.5 ${
        action ? "py-1.5 pl-3.5 pr-3" : "py-2.5 pl-3.5 pr-3"
      }`;
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, size }),
        paddingClasses,
        className
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-medium text-base tracking-2 w-full text-primary",
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
        "text-secondary-foreground pt-0.5 font-normal tracking-3 col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
