import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex w-full rounded-lg outline-none placeholder:text-primary/50 text-sm tracking-3 font-normal disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-accent-foreground border border-transparent hover:bg-accent active:border active:border-primary/86 active:placeholder:text-accent-foreground active:text-accent-foreground focus:bg-transparent focus:border focus:shadow-xxs focus:border-primary/86 disabled:bg-primary/5 disabled:text-primary/20 disabled:border-transparent focus-visible:ring-2 focus-visible:ring-ring",
        outline:
          "border border-primary/12 hover:border-primary/20 active:border-primary/86 active:placeholder:text-accent-foreground active:text-accent-foreground bg-transparent text-accent-foreground focus:border focus:shadow-xxs focus:border-primary/86 focus-visible:ring-2 focus-visible:ring-ring disabled:bg-secondary disabled:text-primary/20 disabled:border-primary/12",
        ghost:
          "bg-transparent border border-transparent text-accent-foreground active:text-accent-foreground active:placeholder:text-accent-foreground focus-visible:ring-2 focus-visible:border focus-visible:border-primary/86 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:bg-transparent disabled:text-primary/20 disabled:border-transparent",
      },
      size: {
        sm: "min-h-[72px] px-2 py-1.5 text-sm",
        md: "min-h-[102px] px-3 py-2.5 text-base",
        lg: "min-h-[126px] px-3.5 py-3 text-lg rounded-xl",
      },
      state: {
        default: "",
        success: "",
        error: "",
        warning: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default",
    },
    compoundVariants: [
      // SUCCESS
      {
        state: "success",
        variant: ["default", "ghost"],
        className: "bg-success text-accent-foreground hover:bg-success",
      },
      {
        state: "success",
        variant: "outline",
        className:
          "border-success-border text-accent-foreground hover:border-success-border",
      },
      // ERROR
      {
        state: "error",
        variant: ["default", "ghost"],
        className: "bg-error text-accent-foreground hover:bg-error",
      },
      {
        state: "error",
        variant: "outline",
        className:
          "border-error-border text-accent-foreground hover:border-error-border",
      },
      // WARNING
      {
        state: "warning",
        variant: ["default", "ghost"],
        className: "bg-warning text-accent-foreground hover:bg-warning",
      },
      {
        state: "warning",
        variant: "outline",
        className:
          "border-warning-border text-accent-foreground hover:border-warning-border",
      },
    ],
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, state, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        aria-invalid={state === "error" ? true : undefined}
        className={cn(textareaVariants({ variant, size, state }), className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
