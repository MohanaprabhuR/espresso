"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

const statusRingMap = {
  success:
    "data-[status=success]:bg-success data-[status=success]:text-accent-foreground hover:data-[status=success]:bg-success active:data-[status=success]:bg-success focus:data-[status=success]:bg-success ",
  warning:
    "data-[status=warning]:bg-warning data-[status=warning]:text-accent-foreground hover:data-[status=warning]:bg-warning active:data-[status=warning]:bg-warning focus:data-[status=warning]:bg-warning ",
  error:
    "data-[status=error]:bg-error data-[status=error]:text-accent-foreground hover:data-[status=error]:bg-error active:data-[status=error]:bg-error focus:data-[status=error]:bg-error ",
};

const variantClassMap = {
  default:
    "data-[disabled]:bg-primary/3 data-[disabled]:text-primary/20 disabled:cursor-not-allowed disabled:bg-primary/3 disabled:pointer-events-none disabled:cursor-not-allowed bg-secondary text-secondary-foreground hover:bg-accent hover:text-secondary-foreground active:bg-primary/12 active:text-accent-foreground focus:text-accent-foreground",
  outline:
    "data-[disabled]:bg-primary/3 data-[disabled]:text-primary/20 disabled:cursor-not-allowed disabled:bg-primary/3 disabled:pointer-events-none disabled:cursor-not-allowed border bg-background text-secondary-foreground hover:border-primary/25 active:border-primary/50 active:bg-background active:text-accent-foreground focus:border-background focus:text-accent-foreground",
  ghost:
    "data-[disabled]:bg-primary/3 data-[disabled]:text-primary/20 disabled:cursor-not-allowed disabled:bg-primary/3 disabled:pointer-events-none disabled:cursor-not-allowed bg-transparent text-secondary-foreground hover:bg-accent active:bg-primary/12 active:text-accent-foreground focus:bg-primary/15 focus:text-accent-foreground focus-visible:bg-primary/3",
};

const statusOutlineMap = {
  success:
    "data-[status=success]:border-success-border hover:data-[status=success]:border-success-border active:data-[status=success]:border-success-border focus:data-[status=success]:border-none ",
  warning:
    "data-[status=warning]:border-warning-border hover:data-[status=warning]:border-warning-border active:data-[status=warning]:border-warning-border focus:data-[status=warning]:border-none ",
  error:
    "data-[status=error]:border-error-border hover:data-[status=error]:border-error-border active:data-[status=error]:border-error-border focus:data-[status=error]:border-none ",
};

const sizeClassMap = {
  sm: "h-7 px-2 py-1.5 text-base tracking-3 font-normal rounded-lg",
  md: "h-8 px-2.5 py-2 text-base tracking-3 font-normal rounded-lg",
  lg: "h-10 px-3 py-[11px] text-lg tracking-3 font-normal rounded-xl",
};

function SelectTrigger({
  className,
  size = "sm",
  status,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "md" | "lg";
  status?: "success" | "warning" | "error";
  variant?: "default" | "outline" | "ghost";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-variant={variant}
      data-size={size}
      data-status={status}
      className={cn(
        "flex w-fit items-center justify-between gap-2 px-3 py-2 text-base whitespace-nowrap transition-[color,box-shadow] outline-none  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 aria-invalid:ring-destructive/20 aria-invalid:border-destructive data-[size=default]:h-9 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[placeholder]:text-primary/50",
        variantClassMap[variant],
        sizeClassMap[size],
        variant === "outline" && status ? statusOutlineMap[status] : null,
        variant !== "outline" && status ? statusRingMap[status] : null,
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.85355 10.6464C5.65829 10.4512 5.34171 10.4512 5.14645 10.6464C4.95118 10.8417 4.95118 11.1583 5.14645 11.3536L7.64645 13.8536C7.84171 14.0488 8.15829 14.0488 8.35355 13.8536L10.8536 11.3536C11.0488 11.1583 11.0488 10.8417 10.8536 10.6464C10.6583 10.4512 10.3417 10.4512 10.1464 10.6464L8 12.7929L5.85355 10.6464ZM5.85355 5.35355C5.65829 5.54882 5.34171 5.54882 5.14645 5.35355C4.95118 5.15829 4.95118 4.84171 5.14645 4.64645L7.64645 2.14645C7.84171 1.95118 8.15829 1.95118 8.35355 2.14645L10.8536 4.64645C11.0488 4.84171 11.0488 5.15829 10.8536 5.35355C10.6583 5.54882 10.3417 5.54882 10.1464 5.35355L8 3.20711L5.85355 5.35355Z"
            fill="currentcolor"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring rounded-2xl bg-popover p-1 shadow-sm text-secondary-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label> & {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      data-size={size}
      className={cn(
        "text-secondary-foreground px-2 py-1.5 font-medium relative flex w-full cursor-default items-center",
        className
      )}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  size = "md",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item> & {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      data-size={size}
      className={cn(
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "text-secondary-foreground hover:bg-secondary font-normal relative flex w-full cursor-default items-center gap-2 py-1.5 px-2 text-base leading-none outline-hidden select-none     [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        sizeClassMap[size],
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0831 3.3823C13.2637 3.17362 13.5793 3.15113 13.7882 3.33152C13.9969 3.51206 14.0204 3.82772 13.84 4.0366L6.42885 12.6167C6.33507 12.7253 6.19926 12.789 6.0558 12.7905C5.91228 12.792 5.77486 12.7312 5.67885 12.6245L2.1681 8.7241L2.54018 8.39012L2.91225 8.05516L6.04213 11.5337L13.0831 3.3823ZM2.20521 8.01805C2.41047 7.83332 2.72752 7.8499 2.91225 8.05516L2.1681 8.7241C1.98378 8.51889 2.00023 8.20268 2.20521 8.01805Z"
              fill="currentcolor"
            />
          </svg>
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

// function SelectItem({
//   className,
//   children,
//   size = "md",
//   ...props
// }: React.ComponentProps<typeof SelectPrimitive.Item> & {
//   size?: "sm" | "md" | "lg";
// }) {
//   return (
//     <SelectPrimitive.Item
//       {...props}
//       data-size={size}
//       className={cn(
//         "relative flex w-full cursor-pointer items-center gap-2 select-none rounded-md px-2 py-1.5 text-base leading-none outline-none",
//         "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
//         "data-[state=checked]:font-semibold",
//         sizeClassMap[size],
//         className
//       )}
//     >
//       <span className="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
//         <SelectPrimitive.ItemIndicator>✔</SelectPrimitive.ItemIndicator>
//       </span>
//       <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//     </SelectPrimitive.Item>
//   );
// }

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none  my-4  h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.092 10.3648C11.8905 10.5536 11.5741 10.5434 11.3852 10.342L8 6.73106L4.61477 10.342C4.4259 10.5434 4.10948 10.5536 3.90803 10.3648C3.70657 10.1759 3.69636 9.85948 3.88523 9.65803L7.63523 5.65803C7.72975 5.5572 7.86179 5.5 8 5.5C8.1382 5.5 8.27024 5.5572 8.36477 5.65803L12.1148 9.65803C12.3036 9.85948 12.2934 10.1759 12.092 10.3648Z"
          fill="currentColor"
        />
      </svg>
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.90803 5.63523C4.10949 5.44637 4.42591 5.45657 4.61477 5.65803L8 9.26894L11.3852 5.65803C11.5741 5.45658 11.8905 5.44637 12.092 5.63523C12.2934 5.8241 12.3036 6.14052 12.1148 6.34197L8.36477 10.342C8.27025 10.4428 8.13821 10.5 8 10.5C7.8618 10.5 7.72976 10.4428 7.63523 10.342L3.88523 6.34197C3.69637 6.14052 3.70657 5.8241 3.90803 5.63523Z"
          fill="currentColor"
        />
      </svg>
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
