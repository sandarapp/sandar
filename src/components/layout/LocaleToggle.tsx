"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[12px] border border-border bg-card p-0.5",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {(["en", "id"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          className={cn(
            "min-h-10 min-w-11 rounded-[10px] px-2 text-xs font-semibold uppercase tracking-[0.12em] transition",
            locale === item
              ? "bg-surface-2 text-primary-600"
              : "text-muted hover:text-fg"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

