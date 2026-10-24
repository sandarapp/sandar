"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/cn";

// "inverse" and "outlineInverse" sit on coloured panels. cn() doesn't merge
// conflicting classes, so overriding colours through className won't work.
type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";
type ButtonSize = "sm" | "md" | "lg";

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition active:scale-[0.98]",
    "disabled:opacity-50 disabled:pointer-events-none",
    variant === "primary" && "bg-primary text-white hover:bg-primary-600",
    variant === "secondary" &&
      "bg-transparent text-fg border border-fg hover:bg-fg hover:text-bg",
    variant === "ghost" &&
      "bg-transparent text-fg hover:bg-surface border border-transparent hover:border-border",
    variant === "inverse" && "bg-white text-primary-600 hover:bg-surface-2",
    variant === "outlineInverse" &&
      "bg-transparent text-white border border-white/70 hover:bg-white hover:text-primary-600",
    size === "sm" && "min-h-11 px-4 text-sm",
    size === "md" && "min-h-12 px-5 text-sm",
    size === "lg" && "min-h-12 px-6 text-base",
    className
  );
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}

/** A link styled as a button, so we never nest a <button> inside an <a>. */
export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <Link className={buttonClasses({ variant, size, className })} {...props} />
  );
}
