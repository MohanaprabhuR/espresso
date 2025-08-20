"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

type SwitchSize = "sm" | "md";

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  size?: SwitchSize;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

function Switch({
  className,
  size = "sm",
  label,
  description,
  checked,
  defaultChecked,
  onCheckedChange,
  ...props
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState(
    defaultChecked ?? false
  );

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleChange = (val: boolean) => {
    if (!isControlled) setInternalChecked(val);
    onCheckedChange?.(val);
  };

  const sizes = {
    sm: {
      root: "h-4 w-[26px]",
      thumb:
        "size-3 translate-x-[calc(100%-(2px))] data-[state=unchecked]:translate-x-0",
      wrapper: "gap-x-2 p-1.5 text-base tracking-2",
      description: "text-base tracking-2",
    },
    md: {
      root: "h-5 w-8",
      thumb:
        "size-[14px] translate-x-[calc(100%-(0px))] data-[state=unchecked]:translate-x-0",
      wrapper: "gap-x-2.5 px-2 py-1.5 text-lg tracking-1",
      description: "text-lg tracking-1",
    },
  };

  const { root, thumb, wrapper, description: descriptionSize } = sizes[size];

  return (
    <label
      className={cn(
        "inline-flex select-none rounded-lg transition-colors text-secondary-foreground font-medium items-center",
        label &&
          cn(
            wrapper,
            "hover:bg-accent active:bg-primary/12 active:text-accent-foreground focus:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:bg-secondary",
            props.disabled &&
              "hover:bg-transparent cursor-not-allowed pointer-events-none"
          )
      )}
    >
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          "peer p-0.5 inline-flex shrink-0 items-center rounded-full transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
          "data-[state=checked]:bg-primary/98 data-[state=checked]:hover:bg-primary/86 data-[state=checked]:active:bg-primary/74 data-[state=checked]:focus:bg-primary/98",
          "data-[state=unchecked]:bg-primary/12 data-[state=unchecked]:hover:bg-primary/20 data-[state=unchecked]:active:bg-primary/50 data-[state=unchecked]:focus:bg-primary/12",
          "disabled:bg-accent disabled:cursor-not-allowed disabled:pointer-events-none disabled:data-[state=unchecked]:hover:bg-primary/12",
          "disabled:data-[state=checked]:bg-accent",
          root,
          className
        )}
        checked={currentChecked}
        onCheckedChange={handleChange}
        disabled={props.disabled}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            "bg-background shadow-4xl pointer-events-none block rounded-full ring-0 transition-transform",
            thumb
          )}
        />
      </SwitchPrimitive.Root>

      {(label || description) && (
        <span className="flex flex-col items-start">
          {label && (
            <span
              className={cn(
                props.disabled &&
                  "text-primary/50 cursor-not-allowed pointer-events-none"
              )}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={cn(
                "text-secondary-foreground font-normal pt-1",
                descriptionSize,
                props.disabled &&
                  "text-primary/50 cursor-not-allowed pointer-events-none"
              )}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
}

export { Switch };
