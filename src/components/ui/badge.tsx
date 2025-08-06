import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { CommandIcon } from "../../../public/images/svg/commandIcon";
import { cn } from "@/lib/utils";

// Badge style variants using theme CSS variables
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-5xl transition-all ease-in-out border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-transparent",
        secondary: "bg-secondary text-secondary-foreground border-transparent",
        destructive: "bg-destructive text-white border-transparent",
        outline: "text-secondary-foreground border-border",
        ghost: "text-secondary-foreground border-transparent",
      },
      size: {
        sm: "px-1.5 py-px text-xs font-normal tracking-3 [&>svg]:size-2.5",
        md: "px-1.5 py-[3px] text-xs font-normal tracking-3 [&>svg]:size-3",
        lg: "px-2 py-[4.5px] text-sm font-normal tracking-3 [&>svg]:size-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  showIcon = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    showIcon?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {showIcon && <CommandIcon />}
      {children}
      {showIcon && <CommandIcon />}
    </Comp>
  );
}

export { Badge, badgeVariants };
