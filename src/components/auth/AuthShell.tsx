"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BackButton } from "@/components/navigation/BackButton";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function AuthShell({
  backLabel,
  badge,
  title,
  description,
  highlights,
  leftBottom,
  children,
  lowerPanel,
  footer,
  rightTopLabel,
  className,
}: {
  backLabel: string;
  badge: string;
  title: string;
  description: string;
  highlights?: readonly string[];
  leftBottom?: ReactNode;
  children: ReactNode;
  lowerPanel?: ReactNode;
  footer?: ReactNode;
  rightTopLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 xl:grid-cols-[1fr_0.95fr]", className)}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-white/80 px-3 py-2 shadow-soft"
          >
            <Image
              src="/assets/sandar-logo.png"
              alt="Sandar logo"
              width={30}
              height={30}
              priority
            />
            <span className="tracking-[0.35em] text-[11px] font-semibold text-fg">
              SANDAR
            </span>
          </Link>
          <BackButton fallbackHref="/" label={backLabel} className="hidden sm:inline-flex" />
        </div>

        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {badge}
          </span>
          <h1 className="max-w-lg font-[var(--font-display)] text-5xl leading-[0.93] tracking-tight text-fg sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-lg text-base leading-7 text-muted">{description}</p>
          <BackButton fallbackHref="/" label={backLabel} className="sm:hidden" />
          {highlights?.length ? (
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-border bg-white/70 px-4 py-2 text-sm text-muted shadow-soft"
                >
                  <span className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-primary/70" />
                    <span className="h-2 w-2 rounded-full bg-primary/35" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {leftBottom ? (
          <Card className="rounded-[28px] bg-white/55 p-5 shadow-soft backdrop-blur">
            {leftBottom}
          </Card>
        ) : (
          <div className="relative hidden min-h-[180px] overflow-hidden rounded-[32px] border border-border bg-white/30 sm:block">
            <div className="absolute inset-x-10 top-12 h-14 rounded-full border border-primary/20 bg-white/20" />
            <div className="absolute right-14 top-6 h-28 w-28 rounded-full border border-primary/15 bg-primary/5" />
            <div className="absolute bottom-10 left-18 h-22 w-22 rounded-full border border-primary/15 bg-primary/8" />
            <div className="absolute bottom-10 right-10 h-18 w-18 rounded-full border border-primary/15 bg-primary/12" />
          </div>
        )}
      </div>

      <div className="space-y-4">
        <Card className="rounded-[32px] p-6 shadow-card sm:p-8">
          {rightTopLabel ? (
            <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              {rightTopLabel}
            </span>
          ) : null}
          <div className={cn(rightTopLabel ? "mt-4" : "", "space-y-5")}>{children}</div>
        </Card>
        {lowerPanel}
        {footer ? <div className="px-2 text-center text-sm text-muted">{footer}</div> : null}
      </div>
    </div>
  );
}
