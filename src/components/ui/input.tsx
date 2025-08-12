import * as React from "react";
import { cn } from "@/lib/utils";

type VariantType = "default" | "outline";
type StatusType = "default" | "success" | "error" | "warning";

type InputProps = Omit<
  React.ComponentProps<"input">,
  "size" | "prefix" | "suffix"
> & {
  variant?: VariantType;
  status?: StatusType;
  size?: "sm" | "md" | "lg" | "xl";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

const baseStyles =
  "w-full min-w-0 transition-[color,box-shadow,border] outline-none placeholder:text-primary/50 file:inline-flex file:pr-1 file:border-r file:border-r-[1px] file:border-primary/20 file:bg-transparent file:font-medium aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&:-webkit-autofill]:bg-autofill [&:-webkit-autofill]:text-accent-foreground";

const variantBaseMap: Record<VariantType, string> = {
  default:
    "bg-secondary border border-transparent hover:bg-accent text-secondary-foreground active:bg-transparent active:shadow-lg active:border-primary/50 active:border active:text-accent-foreground focus:border focus:border-primary/50 focus:shadow-lg focus:bg-white focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:active:border-0 focus-visible:border-0",
  outline:
    "border bg-background text-secondary-foreground hover:border-primary/25 active:border-primary/50 active:bg-background active:shadow-lg focus:border-primary/50 focus:text-accent-foreground",
};

const statusMap: Record<VariantType, Record<StatusType, string>> = {
  default: {
    default: "",
    success:
      "bg-success text-accent-foreground hover:bg-success active:bg-success active:border-success-border focus:bg-success disabled:bg-primary/5 disabled:text-primary/20",
    warning:
      "bg-warning text-accent-foreground hover:bg-warning active:bg-warning active:border-warning-border focus:bg-warning disabled:bg-primary/5 disabled:text-primary/20",
    error:
      "bg-error text-accent-foreground hover:bg-error active:bg-error active:border-error-border focus:bg-error disabled:bg-primary/5 disabled:text-primary/20",
  },
  outline: {
    default: "",
    success:
      "border-success-border hover:border-success-border active:border-success-border focus:border-success-border disabled:border-transparent",
    warning:
      "border-warning-border hover:border-warning-border active:border-warning-border focus:border-warning-border disabled:border-transparent",
    error:
      "border-error-border hover:border-error-border active:border-error-border focus:border-error-border disabled:border-transparent",
  },
};

const sizeMap = {
  sm: "h-7 text-base font-normal rounded-lg tracking-3 file:h-6 file:text-xs px-2 py-1.5",
  md: "h-8 text-base font-normal rounded-lg tracking-3 file:h-7 file:text-sm px-2.5 py-2",
  lg: "h-10 text-lg font-normal rounded-xl tracking-3 file:h-9 file:text-base px-3 py-[11px]",
  xl: "h-10 text-xl font-normal rounded-xl tracking-3 file:h-9 file:text-base px-3 py-[9.5px]",
};

const iconSizeMap = {
  sm: "size-4",
  md: "size-4",
  lg: "size-4",
  xl: "size-[18px]",
};

function Input({
  className,
  type,
  variant = "default",
  status = "default",
  size = "sm",
  prefix,
  suffix,
  ...props
}: InputProps) {
  const statusClasses = statusMap[variant]?.[status] ?? "";
  const iconSize = iconSizeMap[size];

  return (
    <div
      data-variant={variant}
      data-status={status}
      className={cn(
        "flex items-center gap-2 has-[input:disabled]:bg-primary/5 has-[input:disabled]:pointer-events-none has-[input:disabled]:text-primary/20 has-[input:disabled]:cursor-not-allowed",
        variantBaseMap[variant],
        statusClasses,
        sizeMap[size]
      )}
    >
      {prefix && (
        <span className={cn("flex items-center text-inherit", iconSize)}>
          {prefix}
        </span>
      )}

      <input
        type={type}
        className={cn(
          "flex-1 bg-transparent border-none focus:outline-none p-0",
          baseStyles,
          className
        )}
        {...props}
      />

      {suffix && (
        <span className={cn("flex items-center text-inherit", iconSize)}>
          {suffix}
        </span>
      )}
    </div>
  );
}

export { Input };
