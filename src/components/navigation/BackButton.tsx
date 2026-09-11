"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { IconArrowLeft } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";

export function BackButton({
  fallbackHref = "/",
  label = "Back",
  className,
}: {
  fallbackHref?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallbackHref);
      }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 text-sm text-fg shadow-soft hover:bg-surface",
        className
      )}
    >
      <IconArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}

export function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-2 text-sm text-fg shadow-soft hover:bg-surface",
        className
      )}
    >
      <IconArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

