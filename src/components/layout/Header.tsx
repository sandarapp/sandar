"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { getSiteCopy } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { locale } = useLocale();
  const copy = getSiteCopy(locale);
  const navItems = copy.header.nav;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/92 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
      <Container className="flex items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-3 rounded-full border border-border bg-white/80 px-3 py-2 shadow-soft"
        >
          <Image
            src="/assets/sandar-logo.png"
            alt="Sandar logo"
            width={28}
            height={28}
            priority
          />
          <span className="tracking-[0.28em] text-[11px] font-semibold">
            SANDAR
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-5">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-[13px] font-medium transition-colors whitespace-nowrap",
                  active ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <LocaleToggle />
          <Link href="/sign-in">
            <Button variant="secondary" size="sm">
              {copy.common.signIn}
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">{copy.common.joinWaitlist}</Button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-fg"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={cn(
                "h-[2px] w-4 bg-fg transition-transform",
                open && "translate-y-[3px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-[2px] w-4 bg-fg transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-[2px] w-4 bg-fg transition-transform",
                open && "-translate-y-[5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-border/60 bg-bg">
          <Container className="py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm",
                    isActive(item.href)
                      ? "bg-surface text-fg"
                      : "text-muted hover:bg-surface hover:text-fg"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2">
                <LocaleToggle className="w-full justify-center" />
              </div>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Link href="/sign-in">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    {copy.common.signIn}
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="w-full" onClick={() => setOpen(false)}>
                    {copy.common.joinWaitlist}
                  </Button>
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
