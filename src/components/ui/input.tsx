// import * as React from "react";
// import { cn } from "@/lib/utils";

// type VariantType = "default" | "outline";
// type StatusType = "default" | "success" | "error" | "warning";

// type InputProps = React.ComponentProps<"input"> & {
//   variant?: VariantType;
//   status?: StatusType;
//   size?: "sm" | "md" | "lg" | "xl";
//   prefix?: React.ReactNode; // Avatar, icon, etc.
//   suffix?: React.ReactNode; // Button, icon, etc.
// };

// const baseStyles =
//   "w-full min-w-0 transition-[color,box-shadow,border] outline-none placeholder:text-primary/50 file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary/5 disabled:text-primary/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&:-webkit-autofill]:bg-autofill [&:-webkit-autofill]:text-accent-foreground";

// const variantBaseMap: Record<VariantType, string> = {
//   default:
//     "bg-secondary border border-transparent hover:bg-accent text-secondary-foreground active:bg-transparent active:shadow-lg active:border-primary/50 active:border active:text-accent-foreground focus:border focus:border-primary/50 focus:shadow-lg focus:bg-white focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:active:border-0 focus-visible:border-0",
//   outline:
//     "border bg-background text-secondary-foreground hover:border-primary/25 active:border-primary/50 active:bg-background focus:border-primary/50 focus:text-accent-foreground",
// };

// const statusMap: Record<VariantType, Record<StatusType, string>> = {
//   default: {
//     default: "",
//     success:
//       "bg-success text-accent-foreground hover:bg-success active:bg-success focus:bg-success disabled:bg-primary/5 disabled:text-primary/20",
//     warning:
//       "bg-warning text-accent-foreground hover:bg-warning active:bg-warning focus:bg-warning disabled:bg-primary/5 disabled:text-primary/20",
//     error:
//       "bg-error text-accent-foreground hover:bg-error active:bg-error focus:bg-error disabled:bg-primary/5 disabled:text-primary/20",
//   },
//   outline: {
//     default: "",
//     success:
//       "border-success-border text-success hover:border-success-border active:border-success-border focus:border-success-border disabled:border-transparent",
//     warning:
//       "border-warning-border text-warning hover:border-warning-border active:border-warning-border focus:border-warning-border disabled:border-transparent",
//     error:
//       "border-error-border text-error hover:border-error-border active:border-error-border focus:border-error-border disabled:border-transparent",
//   },
// };

// const sizeMap = {
//   sm: "h-7 px-2 py-1.5 text-base font-normal rounded-lg tracking-3 file:h-6 file:text-xs",
//   md: "h-8 px-2.5 py-2 text-base font-normal rounded-lg tracking-3 file:h-7 file:text-sm",
//   lg: "h-10 px-3 py-[11px] text-lg font-normal rounded-xl tracking-3 file:h-9 file:text-base",
//   xl: "h-10 px-3 py-[9.5px] text-xl font-normal rounded-xl tracking-3 file:h-9 file:text-base",
// };

// function Input({
//   className,
//   type,
//   variant = "default",
//   status = "default",
//   size = "sm",
//   prefix,
//   suffix,
//   ...props
// }: InputProps) {
//   const statusClasses =
//     statusMap[variant as VariantType]?.[status as StatusType] ?? "";

//   return (
//     <div
//       data-variant={variant}
//       data-status={status}
//       className={cn(
//         "flex items-center gap-2 rounded-md",
//         variantBaseMap[variant],
//         statusClasses,
//         sizeMap[size]
//       )}
//     >
//       {prefix && (
//         <span className="flex items-center shrink-0 text-inherit">
//           {prefix}
//         </span>
//       )}

//       <input
//         type={type}
//         data-slot="input"
//         className={cn(
//           baseStyles,
//           "flex-1 bg-transparent border-none focus:outline-none px-0",
//           type === "search" &&
//             "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
//           type === "file" &&
//             "text-accent-foreground file:border-input file:text-foreground file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-1 file:not-italic",
//           className
//         )}
//         {...props}
//       />

//       {suffix && (
//         <span className="flex items-center shrink-0 text-inherit">
//           {suffix}
//         </span>
//       )}
//     </div>
//   );
// }

// export { Input };

import * as React from "react";
import { cn } from "@/lib/utils";

type VariantType = "default" | "outline";
type StatusType = "default" | "success" | "error" | "warning";

type InputProps = React.ComponentProps<"input"> & {
  variant?: VariantType;
  status?: StatusType;
  size?: "sm" | "md" | "lg" | "xl";
  prefix?: React.ReactNode; // Avatar, icon, etc.
  suffix?: React.ReactNode; // Button, icon, etc.
};

const baseStyles =
  "w-full min-w-0 transition-[color,box-shadow,border] outline-none placeholder:text-primary/50 file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-primary/5 disabled:text-primary/20 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&:-webkit-autofill]:bg-autofill [&:-webkit-autofill]:text-accent-foreground";

const variantBaseMap: Record<VariantType, string> = {
  default:
    "bg-secondary border border-transparent hover:bg-accent text-secondary-foreground active:bg-transparent active:shadow-lg active:border-primary/50 active:border active:text-accent-foreground focus:border focus:border-primary/50 focus:shadow-lg focus:bg-white focus:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:active:border-0 focus-visible:border-0",
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
      "border-success-border text-success hover:border-success-border active:border-success-border focus:border-success-border disabled:border-transparent",
    warning:
      "border-warning-border text-warning hover:border-warning-border active:border-warning-border focus:border-warning-border disabled:border-transparent",
    error:
      "border-error-border text-error hover:border-error-border active:border-error-border focus:border-error-border disabled:border-transparent",
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
  prefix,
  suffix,
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
      {prefix && (
        <span className="flex items-center shrink-0 text-inherit">
          {prefix}
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          baseStyles,
          "flex-1 bg-transparent border-none focus:outline-none px-0",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "text-accent-foreground file:border-input file:text-foreground file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-1 file:not-italic",
          className
        )}
        {...props}
      />

      {suffix && (
        <span className="flex items-center shrink-0 text-inherit">
          {suffix}
        </span>
      )}
    </div>
  );
}

export { Input };
