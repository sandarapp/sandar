"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/cn";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/70 p-1 shadow-soft",
        className
      )}
      aria-label="Language switcher"
    >
      {(["en", "id"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] transition",
            locale === item
              ? "bg-primary text-white"
              : "text-muted hover:text-fg"
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

