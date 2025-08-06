"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  wrapLayout?: boolean;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, wrapLayout = false, ...props }, ref) => {
    const flexWrapClass = wrapLayout
      ? "flex-wrap gap-y-1.5 justify-center"
      : "flex-nowrap";

    const validChildren = React.Children.toArray(children).filter(
      React.isValidElement
    );

    return (
      <div
        ref={ref}
        className={cn("flex flex-row gap-x-1.5", flexWrapClass, className)}
        {...props}
      >
        {validChildren.map((child) => {
          if (!React.isValidElement<{ className?: string }>(child))
            return child;

          return React.cloneElement(child, {
            className: cn(child.props.className),
          });
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
