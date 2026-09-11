"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "glass" | "solid";
};

export function Card({ className, variant = "solid", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-border",
        variant === "solid" && "bg-white/80 shadow-card",
        variant === "glass" && "bg-white/55 backdrop-blur shadow-soft",
        className
      )}
      {...props}
    />
  );
}

