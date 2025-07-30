"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex items-center gap-[0_8px] justify-center whitespace-nowrap transition-all ease-in-out disabled:pointer-events-none pointer-events-auto focus:ring-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary/75  focus:ring-primary/20   disabled:text-secondary-foreground disabled:bg-secondary",
        secondary:
          "bg-secondary outline-none hover:bg-accent text-accent-foreground active:bg-accent-active focus:ring-primary/20  disabled:bg-secondary disabled:text-secondary-foreground",
        outline:
          "border border-border bg-background text-accent-foreground hover:border-40 active:bg-accent-active focus:ring-primary/20  focus:bg-accent disabled:bg-secondary disabled:text-secondary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground focus:ring-destructive/20  disabled:bg-destructive/15 disabled:text-destructive/60",
        ghost:
          "bg-transparent hover:bg-accent text-accent-foreground active:bg-accent-active focus:ring-primary/20 focus:bg-accent",
        "red-solid":
          "bg-[var(--red5)] hover:bg-[var(--red6)] active:bg-[var(--red7)] text-[var(--inkred1)] outline-none disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-subtle":
          "bg-[var(--red2)] hover:bg-[var(--red3)] active:bg-[var(--red4)] text-[var(--red6)] outline-none disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-outline":
          "bg-transparent border border-[var(--outlinered2)] hover:border-[var(--outlinered3)] active:bg-[var(--red4)] text-[var(--red6)] focus:bg-[var(--red2)] disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-ghost":
          "bg-transparent hover:bg-[var(--red3)] active:bg-[var(--red4)] focus:bg-[var(--red2)] text-[var(--inkred4)] disabled:text-[var(--inkred4)] focus:shadow-[var(--focus-red)]",
      },
      size: {
        sm: "h-7 rounded-lg text-base font-var-420 tracking-[0.28px]",
        md: "h-8 rounded-lg text-base font-var-420 tracking-[0.28px]",
        lg: "h-10 rounded-[10px] text-lg font-var-500 tracking-[0.24px]",
        xl: "h-[46px] rounded-[10px] text-xl font-var-500-30 tracking-[0.18px]",
        xxl: "h-[52px] rounded-[14px] text-2xl font-var-500-30 tracking-[0.2px]",
      },
      iconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { size: "sm", iconOnly: false, className: "px-2 py-1.5" },
      { size: "sm", iconOnly: true, className: "p-1.5" },

      { size: "md", iconOnly: false, className: "py-[7px] px-2.5" },
      { size: "md", iconOnly: true, className: "p-[7px]" },

      { size: "lg", iconOnly: false, className: "py-2.5 px-3" },
      { size: "lg", iconOnly: true, className: "p-2.5" },

      { size: "xl", iconOnly: false, className: "py-[11px] px-[14px]" },
      { size: "xl", iconOnly: true, className: "p-[11px]" },

      { size: "xxl", iconOnly: false, className: "py-[14px] px-[16px]" },
      { size: "xxl", iconOnly: true, className: "p-[14px]" },
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
}

const iconSizeMap: Record<
  NonNullable<ButtonProps["size"]>,
  { width: number; height: number }
> = {
  sm: { width: 16, height: 16 },
  md: { width: 18, height: 18 },
  lg: { width: 20, height: 20 },
  xl: { width: 24, height: 24 },
  xxl: { width: 24, height: 24 },
};

const SvgIcon = ({
  width,
  height,
  fill = "white",
}: {
  width: number;
  height: number;
  fill?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    style={{ fill }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.504 0.787a.7.7 0 0 1 .99 0l6.717 6.717a.7.7 0 0 1 0 .99l-6.717 6.717a.7.7 0 0 1-.99 0L0.787 8.494a.7.7 0 0 1 0-.99L7.504 0.787zm.495.919L1.706 7.999l6.293 6.293L14.292 7.999 7.999 1.706z"
      fill={fill}
    />
  </svg>
);

const Spinner = ({ width, height }: { width: number; height: number }) => (
  <Image
    src="/images/spinner-white.png"
    width={width}
    height={height}
    alt="Spinner"
    className="animate-spin"
  />
);

const SpinnerGray = ({ width, height }: { width: number; height: number }) => (
  <Image
    src="/images/spinner-gray.png"
    width={width}
    height={height}
    alt="Spinner"
    className="animate-spin"
  />
);

const SpinnerRed = ({ width, height }: { width: number; height: number }) => (
  <Image
    src="/images/spinner-red.png"
    width={width}
    height={height}
    alt="Spinner"
    className="animate-spin"
  />
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "sm",
      iconOnly = false,
      asChild = false,
      children,
      disabled,
      loading,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const isDark = currentTheme === "dark";
    const iconSize = iconSizeMap[size ?? "sm"];

    const renderIcon = (position: "left" | "right") => {
      if (loading && position === "left") {
        if (variant === "primary" || variant === "destructive") {
          return <Spinner {...iconSize} />;
        } else if (
          variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost"
        ) {
          return <SpinnerRed {...iconSize} />;
        } else {
          return <SpinnerGray {...iconSize} />;
        }
      }

      if (disabled) {
        if (variant === "destructive") {
          return (
            <SvgIcon
              {...iconSize}
              fill={
                isDark
                  ? "var(--color-dark-red-300)"
                  : "var(--color-light-red-400)"
              }
            />
          );
        }
        if (
          variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost"
        ) {
          return <SvgIcon {...iconSize} fill="var(--inkred2)" />;
        }
        return (
          <SvgIcon
            {...iconSize}
            fill={
              isDark
                ? "var(--color-dark-gray-600)"
                : "var(--color-light-gray-500)"
            }
          />
        );
      }

      const getVariantIcon = () => {
        if (variant === "primary") {
          return <SvgIcon {...iconSize} fill="var(--background)" />;
        }
        if (variant === "destructive") {
          return <SvgIcon {...iconSize} fill="var(--color-light-red-50)" />;
        }
        if (
          variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost"
        ) {
          return (
            <SvgIcon
              {...iconSize}
              fill={isDark ? "var(--inkred4)" : "var(--red6)"}
            />
          );
        }
        return <SvgIcon {...iconSize} fill="var(--foreground)" />;
      };

      return getVariantIcon();
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, iconOnly }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {leftIcon ?? renderIcon("left")}
        {!iconOnly && children}
        {!iconOnly && (rightIcon ?? renderIcon("right"))}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
