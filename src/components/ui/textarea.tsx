import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex w-full rounded-lg outline-none disabled:cursor-not-allowed placeholder:text-primary/50 min-h-19.5 px-2 py-1.5 text-sm tracking-3 font-normal",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-accent-foreground hover:bg-accent active:border-primary/86 active:placeholder:text-accent-foreground  active:text-accent-foreground disabled:bg-primary/5 disabled:text-primary/20 active:bg-transparent focus:bg-transparent focus:border focus:shadow-xxs focus:border-primary/86 focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:active:border-transparent focus-visible:focus:border-transparent disabled:border-transparent disabled:ring-0 disabled:text-primary/20",
        outline:
          "border border-primary/12 hover:border-primary/20 active:border-primary/86 active:placeholder:text-accent-foreground active:text-accent-foreground bg-transparent text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 disabled:active:text-primary/20 disabled:bg-secondary disabled:border-primary/12 disabled:text-primary/20 focus:border focus:shadow-xxs focus:border-primary/86 focus-visible:active:border-transparent focus-visible:border-transparent focus-visible:focus:border-transparent disabled:border-transparent disabled:ring-0 disabled:text-primary/20",
        ghost:
          "bg-transparent text-accent-foreground active:text-accent-foreground active:placeholder:text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 disabled:text-primary/20 disabled:active:text-primary/20 disabled:border-transparent disabled:ring-0 disabled:text-primary/20",
      },
      size: {
        sm: "min-h-[72px] text-sm tracking-3 font-normal px-2 py-1.5",
        md: "min-h-[102px] text-lg tracking-3 font-normal px-3 py-2.5",
        lg: "min-h-[126px] text-xl tracking-2 font-normal px-3.5 py-3 rounded-xl",
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
      {
        variant: "default",
        state: "success",
        className:
          "bg-success text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-success active:bg-success focus:bg-success",
      },
      {
        variant: "default",
        state: "error",
        className:
          "bg-error text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-error active:bg-error focus:bg-error",
      },
      {
        variant: "default",
        state: "warning",
        className:
          "bg-warning text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-warning active:bg-warning focus:bg-warning",
      },
      {
        variant: "outline",
        state: "success",
        className:
          "border-success-border text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:border-success-border active:border-success-border focus:border-success-border",
      },
      {
        variant: "outline",
        state: "error",
        className:
          "border-error-border text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:border-error-border active:border-error-border focus:border-error-border",
      },
      {
        variant: "outline",
        state: "warning",
        className:
          "border-warning-border text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:border-warning-border active:border-warning-border focus:border-warning-border",
      },
      {
        variant: "ghost",
        state: "success",
        className:
          "bg-success text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-success active:bg-success focus:bg-success",
      },
      {
        variant: "ghost",
        state: "error",
        className:
          "bg-error text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-error active:bg-error focus:bg-error",
      },
      {
        variant: "ghost",
        state: "warning",
        className:
          "bg-warning text-accent-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-0 hover:bg-warning active:bg-warning focus:bg-warning",
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
        className={cn(textareaVariants({ variant, size, state }), className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
