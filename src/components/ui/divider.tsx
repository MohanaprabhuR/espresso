"use client";

import React from "react";
import { cn } from "@/lib/utils";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  align?: "start" | "center" | "end";
  children?: React.ReactNode;
  className?: string;
};

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  align = "center",
  children,
  className,
}) => {
  const isHorizontal = orientation === "horizontal";

  const wrapperClasses = cn(
    "flex items-center",
    isHorizontal ? "flex-row  w-full" : "flex-col  h-full",
    className
  );

  const lineClasses = cn(
    "bg-border",
    isHorizontal ? "h-px flex-1" : "w-px flex-1"
  );
  const contentPositionClasses = isHorizontal
    ? align === "start"
      ? "left-4"
      : align === "end"
      ? "right-4"
      : "px-0"
    : align === "start"
    ? "top-4"
    : align === "end"
    ? "bottom-4"
    : "py-0";

  const contentWrapperClasses = cn(contentPositionClasses, "shrink-0 relative");

  const content = children ? (
    <div className={contentWrapperClasses}>{children}</div>
  ) : null;

  const elements = {
    start: [content, <div key="line-end" className={lineClasses} />],
    center: [
      <div key="line-start" className={lineClasses} />,
      content,
      <div key="line-end" className={lineClasses} />,
    ],
    end: [<div key="line-start" className={lineClasses} />, content],
  };

  return <div className={wrapperClasses}>{elements[align]}</div>;
};
