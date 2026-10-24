"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "min-h-12 w-full rounded-[10px] border border-border-strong bg-[#fffdf9] px-4 text-[15px] text-fg placeholder:text-subtle",
        "focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/25",
        "aria-[invalid=true]:border-2 aria-[invalid=true]:border-danger",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

