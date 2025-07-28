"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex  items-center gap-[0_8px] justify-center whitespace-nowrap transition-all ease-in-out  disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid:
          "bg-[var(--gray7)] hover:bg-[var(--gray6)] active:bg-[var(--gray5)] text-[var(--inkwhite)] outline-none disabled:bg-[var(--gray2)] disabled:text-[var(--gray4)] focus:shadow-[var(--focus-light)]",
        subtle:
          "bg-[var(--gray2)]  hover:bg-[var(--gray3)] active:bg-[var(--gray1)] outline-none text-[var(--gray6)] disabled:bg-[var(--gray2)] disabled:text-[var(--gray4)] focus:shadow-[var(--focus-light)]",
        outline:
          "border bg-transparent border-[var(--gray1)] hover:border-[var(--gray8)] active:bg-[var(--gray1)] text-[var(--gray6)] focus:bg-[var(--gray2)] text-[var(--gray6)] disabled:bg-[var(--gray2)] disabled:text-[var(--gray4)] focus:shadow-[var(--focus-light)]",
        ghost:
          "bg-transparent hover:bg-[var(--gray3)] active:bg-[var(--gray1)] focus:bg-[var(--gray2)] text-[var(--gray6)]  disabled:text-[var(--gray4)] focus:shadow-[var(--focus-light)]",
        "red-solid":
          "bg-[var(--red5)] hover:bg-[var(--red6)] active:bg-[var(--red7)] text-[var(--inkred1)] outline-none disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-subtle":
          "bg-[var(--red2)] hover:bg-[var(--red3)] active:bg-[var(--red4)] text-[var(--red6)] outline-none disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-outline":
          "bg-transparent border border-[var(--outlinered2)] hover:border-[var(--outlinered3)] active:bg-[var(--red4)] text-[var(--red6)] focus:bg-[var(--red2)] disabled:text-[var(--inkred2)] disabled:bg-[var(--red2)] focus:shadow-[var(--focus-red)]",
        "red-ghost":
          "bg-transparent hover:bg-[var(--red3)] active:bg-[var(--red4)] focus:bg-[var(--red2)] text-[var(--inkred4)]  disabled:text-[var(--inkred4)] focus:shadow-[var(--focus-red)]",
      },
      size: {
        sm: "h-7 rounded-lg text-sm font-[var(--font-variation-420)]  tracking-[0.28px]",
        md: "h-8 rounded-lg text-sm font-[var(--font-variation-500)]  tracking-[0.28px] ",
        lg: "h-10 rounded-[10px] text-base font-[var(--font-variation-500)]  tracking-[0.24px]",
        xl: "h-[46px] rounded-[10px] text-lg font-[var(--font-variation-500-30)]  tracking-[0.18px]",
        xxl: "h-[52px] rounded-[14px] text-xl font-[var(--font-variation-500-30)]  tracking-[0.2px] ",
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
      variant: "solid",
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
    src="/images/spinner.png"
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
      if (disabled) {
        if (
          variant === "red-solid" ||
          variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost"
        ) {
          return <SvgIcon {...iconSize} fill="var(--inkred2)" />;
        }
        return <SvgIcon {...iconSize} fill="var(--gray4)" />;
      }

      const getVariantIcon = () => {
        if (variant === "solid") {
          return (
            <SvgIcon
              {...iconSize}
              fill={isDark ? "var(--inkwhite)" : "var(--inkwhite)"}
            />
          );
        }
        if (variant === "red-solid") {
          return (
            <SvgIcon
              {...iconSize}
              fill={isDark ? "var(--inkred1)" : "var(--inkwhite)"}
            />
          );
        }
        return variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost" ? (
          <SvgIcon
            {...iconSize}
            fill={isDark ? "var(--inkred4)" : "var(--red6)"}
          />
        ) : (
          <SvgIcon
            {...iconSize}
            fill={isDark ? "var(--gray6)" : "var(--gray6)"}
          />
        );
      };

      if (position === "left" && loading) {
        return variant === "solid" || variant === "red-solid" ? (
          <Spinner {...iconSize} />
        ) : variant === "red-subtle" ||
          variant === "red-outline" ||
          variant === "red-ghost" ? (
          <SpinnerRed {...iconSize} />
        ) : (
          <SpinnerGray {...iconSize} />
        );
      }

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
