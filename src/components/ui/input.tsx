import * as React from "react";
import { cn } from "@/lib/utils";

type VariantType = "default" | "outline";
type StatusType = "default" | "success" | "error" | "warning";

type InputProps = React.ComponentProps<"input"> & {
  variant?: VariantType;
  status?: StatusType;
  size?: "sm" | "md" | "lg" | "xl";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

const baseStyles =
  "w-full min-w-0 transition-[color,box-shadow,border] outline-none placeholder:text-primary/50 file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary/5 disabled:text-primary/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&:-webkit-autofill]:bg-autofill [&:-webkit-autofill]:text-accent-foreground";

const variantBaseMap: Record<VariantType, string> = {
  default:
    "bg-secondary border border-transparent hover:bg-accent text-secondary-foreground active:bg-white active:shadow-lg active:border-primary/50 active:border active:text-accent-foreground focus:border focus:border-primary/50 focus:shadow-lg focus:bg-white focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:active:border-0 focus-visible:border-0",
  outline:
    "border bg-background text-secondary-foreground hover:border-primary/25 active:border-primary/50 active:bg-background focus:border-primary/50 focus:text-accent-foreground",
};

const statusMap: Record<VariantType, Record<StatusType, string>> = {
  default: {
    default: "",
    success:
      "bg-success text-accent-foreground hover:bg-success active:bg-success focus:bg-success disabled:bg-primary/5 disabled:text-primary/20",
    warning:
      "bg-warning text-accent-foreground hover:bg-warning active:bg-warning focus:bg-warning disabled:bg-primary/5 disabled:text-primary/20",
    error:
      "bg-error text-accent-foreground hover:bg-error active:bg-error focus:bg-error disabled:bg-primary/5 disabled:text-primary/20",
  },
  outline: {
    default: "",
    success:
      "border-success-border text-success text-accent-foreground hover:border-success-border active:border-success-border focus:border-success-border disabled:border-transparent",
    warning:
      "border-warning-border text-warning text-accent-foreground hover:border-warning-border active:border-warning-border focus:border-warning-border disabled:border-transparent",
    error:
      "border-error-border text-error text-accent-foreground hover:border-error-border active:border-error-border focus:border-error-border disabled:border-transparent",
  },
};

const sizeMap = {
  sm: "h-7 px-2 py-1.5 text-base font-normal rounded-lg tracking-3 file:h-6 file:text-xs",
  md: "h-8 px-2.5 py-2 text-base font-normal rounded-lg tracking-3 file:h-7 file:text-sm",
  lg: "h-10 px-3 py-[11px] text-lg font-normal rounded-xl tracking-3 file:h-9 file:text-base",
  xl: "h-10 px-3 py-[9.5px] text-xl font-normal rounded-xl tracking-3 file:h-9 file:text-base",
};

function Input({
  className,
  type,
  variant = "default",
  status = "default",
  size = "sm",
  ...props
}: InputProps) {
  const statusClasses =
    statusMap[variant as VariantType]?.[status as StatusType] ?? "";

  return (
    <div
      data-variant={variant}
      data-status={status}
      className={cn(
        "flex items-center gap-2 rounded-md",
        variantBaseMap[variant],
        statusClasses,
        sizeMap[size]
      )}
    >
      <span className={cn("flex items-center transition-colors")}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 4.25C2 3.42157 2.67157 2.75 3.5 2.75H12.5C13.3284 2.75 14 3.42157 14 4.25L14 4.76393C14 5.1427 13.786 5.48897 13.4472 5.65836L8.44721 8.15836C8.16569 8.29912 7.83431 8.29912 7.55279 8.15836L2.55279 5.65836C2.214 5.48897 2 5.1427 2 4.76393V4.25ZM1 4.76393V4.25C1 2.86929 2.11929 1.75 3.5 1.75H12.5C13.8807 1.75 15 2.86929 15 4.25L15 4.76393L15 11.75C15 13.1307 13.8807 14.25 12.5 14.25H3.5C2.11929 14.25 1 13.1307 1 11.75V4.76393ZM14 6.496V11.75C14 12.5784 13.3284 13.25 12.5 13.25H3.5C2.67157 13.25 2 12.5784 2 11.75V6.496C2.03447 6.51589 2.06967 6.53484 2.10557 6.55279L7.10557 9.05279C7.66863 9.33431 8.33137 9.33431 8.89443 9.05279L13.8944 6.55279C13.9303 6.53484 13.9655 6.51589 14 6.496Z"
          />
        </svg>
      </span>
      <input
        type={type}
        data-slot="input"
        className={cn(
          baseStyles,
          "flex-1 bg-transparent border-none focus:outline-none px-0",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:not-italic",
          className
        )}
        {...props}
      />
      {type === "search" ? (
        <p>S</p>
      ) : (
        <span className="flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.16675C1.72386 4.16675 1.5 4.39061 1.5 4.66675C1.5 4.94289 1.72386 5.16675 2 5.16675H14C14.2761 5.16675 14.5 4.94289 14.5 4.66675C14.5 4.39061 14.2761 4.16675 14 4.16675H2ZM3.49996 7.99761C3.49996 7.72147 3.72382 7.49761 3.99996 7.49761H12C12.2761 7.49761 12.5 7.72147 12.5 7.99761C12.5 8.27375 12.2761 8.49761 12 8.49761H3.99996C3.72382 8.49761 3.49996 8.27375 3.49996 7.99761ZM5.9 11.3289C5.9 11.0527 6.12386 10.8289 6.4 10.8289H9.6C9.87614 10.8289 10.1 11.0527 10.1 11.3289C10.1 11.605 9.87614 11.8289 9.6 11.8289H6.4C6.12386 11.8289 5.9 11.605 5.9 11.3289Z"
            />
          </svg>
        </span>
      )}
    </div>
  );
}

export { Input };
