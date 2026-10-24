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
        "rounded-[var(--radius-md)] border border-border bg-card",
        variant === "glass" && "bg-card/80",
        className
      )}
      {...props}
    />
  );
}

