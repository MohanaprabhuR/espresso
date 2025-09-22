"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-lg gap-[0_8px] justify-center whitespace-nowrap transition-all ease-in-out disabled:pointer-events-none pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground  hover:bg-primary/86 active:bg-primary/75 disabled:bg-secondary disabled:text-primary/42",
        secondary:
          "bg-secondary text-accent-foreground  hover:bg-accent active:bg-primary/12 focus:bg-secondary focus-visible:bg-secondary disabled:bg-secondary disabled:text-primary/42",
        outline:
          "border bg-background text-accent-foreground hover:border-primary/25 active:bg-primary/12 active:border-primary/15 focus-visible:bg-secondary focus-visible:bg-secondary focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring disabled:bg-secondary disabled:text-primary/42",
        destructive:
          "bg-destructive text-white/99  focus:ring-destructive/20 hover:bg-destructive/85 active:bg-destructive/90 disabled:bg-destructive/25 disabled:text-destructive/50",
        ghost:
          "bg-transparent hover:bg-accent  text-accent-foreground  active:bg-primary/12 focus:bg-secondary focus-visible:bg-secondary  disabled:bg-transparent disabled:text-primary/42",
      },
      size: {
        sm: "h-7 rounded-lg text-base font-normal tracking-[0.28px]",
        md: "h-8 rounded-lg text-base font-normal tracking-[0.28px]",
        lg: "h-10 rounded-[10px] text-lg font-medium tracking-[0.24px]",
        xl: "h-[46px] rounded-[10px] text-xl font-medium-30 tracking-[0.18px]",
        "2xl":
          "h-[52px] rounded-[14px] text-2xl font-medium-30 tracking-[0.2px]",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", iconOnly: false, className: "px-2 py-1.5" },
      { size: "sm", iconOnly: true, className: "p-1.5" },

      { size: "md", iconOnly: false, className: "py-2 px-2.5" },
      { size: "md", iconOnly: true, className: "p-[7px]" },

      { size: "lg", iconOnly: false, className: "py-[11px] px-3" },
      { size: "lg", iconOnly: true, className: "p-2.5" },

      { size: "xl", iconOnly: false, className: "py-[11px] px-[14px]" },
      { size: "xl", iconOnly: true, className: "p-[11px]" },

      { size: "2xl", iconOnly: false, className: "py-[14px] px-4" },
      { size: "2xl", iconOnly: true, className: "p-[14px]" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "sm",
      iconOnly: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showIcon?: boolean;
}

const iconSizeMap: Record<
  NonNullable<ButtonProps["size"]>,
  { width: number; height: number }
> = {
  sm: { width: 16, height: 16 },
  md: { width: 18, height: 18 },
  lg: { width: 20, height: 20 },
  xl: { width: 24, height: 24 },
  "2xl": { width: 24, height: 24 },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "sm",
      iconOnly = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    let content: React.ReactNode = children;

    if (iconOnly) {
      const icons = React.Children.toArray(children).filter((child) =>
        React.isValidElement(child)
      );

      const chosenIcon =
        icons.length > 1 ? icons[icons.length - 1] : icons[0] || null;

      if (React.isValidElement(chosenIcon)) {
        const { width, height } = iconSizeMap[size];
        content = React.cloneElement(chosenIcon, { width, height });
      } else {
        content = null;
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconOnly }), className)}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
