"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-all ease-in-out border w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden",
  {
    variants: {
      variant: {
        solid:
          "bg-[var(--theme-primary)] text-[var(--theme-primary-foreground)] border-transparent",
        soft: "bg-[var(--theme-soft)] text-[var(--theme-soft-foreground)] border-transparent",
        outline:
          "bg-transparent text-[var(--theme-primary)] border-[var(--theme-border)]",
      },
      size: {
        sm: "px-2 py-0.5 text-xs gap-1 [&>svg]:size-3",
        md: "px-3 py-1 text-sm gap-1.5 [&>svg]:size-3.5",
        lg: "px-4 py-1.5 text-base gap-2 [&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

const themeVars: Record<
  "default" | "blue" | "green" | "amber" | "red" | "violet",
  React.CSSProperties
> = {
  default: {
    "--theme-primary": "var(--color-primary)",
    "--theme-primary-foreground": "var(--color-primary-foreground)",
    "--theme-secondary": "var(--color-secondary)",
    "--theme-secondary-foreground": "var(--color-secondary-foreground)",
    "--theme-border": "var(--color-border)",
  } as React.CSSProperties,
  blue: {
    "--theme-primary": "var(--color-blue-primary)",
    "--theme-primary-foreground": "var(--color-blue-primary-foreground)",
    "--theme-secondary": "var(--color-blue-secondary)",
    "--theme-secondary-foreground": "var(--color-blue-secondary-foreground)",
    "--theme-border": "var(--color-blue-border)",
  } as React.CSSProperties,
  green: {
    "--theme-primary": "var(--color-green-primary)",
    "--theme-primary-foreground": "var(--color-green-primary-foreground)",
    "--theme-secondary": "var(--color-green-secondary)",
    "--theme-secondary-foreground": "var(--color-green-secondary-foreground)",
    "--theme-border": "var(--color-green-border)",
  } as React.CSSProperties,
  amber: {
    "--theme-primary": "var(--color-amber-primary)",
    "--theme-primary-foreground": "var(--color-amber-primary-foreground)",
    "--theme-secondary": "var(--color-amber-secondary)",
    "--theme-secondary-foreground": "var(--color-amber-secondary-foreground)",
    "--theme-border": "var(--color-amber-border)",
  } as React.CSSProperties,
  red: {
    "--theme-primary": "var(--color-red-primary)",
    "--theme-primary-foreground": "var(--color-red-primary-foreground)",
    "--theme-secondary": "var(--color-red-secondary)",
    "--theme-secondary-foreground": "var(--color-red-secondary-foreground)",
    "--theme-border": "var(--color-red-border)",
  } as React.CSSProperties,
  violet: {
    "--theme-primary": "var(--color-violet-primary)",
    "--theme-primary-foreground": "var(--color-violet-primary-foreground)",
    "--theme-secondary": "var(--color-violet-secondary)",
    "--theme-secondary-foreground": "var(--color-violet-secondary-foreground)",
    "--theme-border": "var(--color-violet-border)",
  } as React.CSSProperties,
};

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  theme?: keyof typeof themeVars;
  onRemove?: () => void;
  asChild?: boolean;
}

export function Tag({
  className,
  variant,
  size,
  theme = "default",
  asChild = false,
  children,
  onRemove,
  ...props
}: TagProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="tag"
      style={themeVars[theme]}
      className={cn(tagVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 rounded-full hover:bg-black/10 p-0.5 focus:outline-none"
        >
          <X className="size-3" />
        </button>
      )}
    </Comp>
  );
}
