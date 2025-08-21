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

  const switchId = React.useId();

  // core switch button
  const switchControl = (
    <SwitchPrimitive.Root
      id={switchId}
      data-slot="switch"
      // if label exists → hide from tab order
      tabIndex={label || description ? -1 : 0}
      className={cn(
        "peer p-0.5 inline-flex shrink-0 items-center rounded-full transition-all outline-none",
        "data-[state=checked]:bg-primary data-[state=checked]:hover:bg-primary/86 data-[state=checked]:active:bg-primary/74 data-[state=checked]:focus:bg-primary",
        "data-[state=unchecked]:bg-input data-[state=unchecked]:hover:bg-primary/20 data-[state=unchecked]:active:bg-primary/50 data-[state=unchecked]:focus:bg-primary/12",
        "disabled:data-[state=unchecked]:bg-accent disabled:cursor-not-allowed disabled:pointer-events-none disabled:data-[state=unchecked]:hover:bg-accent",
        "disabled:data-[state=checked]:bg-accent",
        root,
        !label && // only when no label, keep focus ring on the switch
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
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
          "bg-background shadow-4xl pointer-events-none block rounded-full transition-transform",
          thumb
        )}
      />
    </SwitchPrimitive.Root>
  );

  // case 1: label or description exists → focus goes to label container
  if (label || description) {
    return (
      <label
        htmlFor={switchId}
        // disable focus if disabled
        tabIndex={props.disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (props.disabled) return;
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            (document.getElementById(switchId) as HTMLButtonElement)?.click();
          }
        }}
        className={cn(
          "inline-flex items-center select-none rounded-lg transition-colors text-secondary-foreground font-medium",
          wrapper,
          !props.disabled &&
            "hover:bg-accent active:bg-primary/12 active:text-accent-foreground focus:bg-secondary focus:ring-ring focus:ring-2 focus:ring-offset-0 focus-visible:ring-ring focus-visible:ring-2 focus-visible:bg-secondary",
          props.disabled &&
            "hover:bg-transparent cursor-not-allowed pointer-events-none text-primary/50"
        )}
      >
        {switchControl}

        <span className="flex flex-col items-start">
          {label && <span>{label}</span>}
          {description && (
            <span
              className={cn(
                "text-secondary-foreground font-normal pt-1",
                descriptionSize,
                props.disabled && "text-primary/50"
              )}
            >
              {description}
            </span>
          )}
        </span>
      </label>
    );
  }

  // case 2: no label → switch alone is focusable
  return switchControl;
}

export { Switch };
