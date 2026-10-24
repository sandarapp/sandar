"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { getSiteCopy } from "@/content/site";
import { createAccountHref, logInHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const { locale } = useLocale();
  const copy = getSiteCopy(locale);
  const navItems = copy.header.nav;
  // The centred wordmark already links home, so the desktop nav skips "Home".
  const desktopNav = navItems.filter((item) => item.href !== "/");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/95 backdrop-blur supports-[backdrop-filter]:bg-bg/85">
      <Container className="grid grid-cols-[1fr_auto] items-center gap-3 py-3 xl:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main" className="hidden min-w-0 items-center gap-6 xl:flex">
          {desktopNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "group relative inline-flex min-h-11 items-center whitespace-nowrap text-sm transition-colors",
                isActive(item.href) ? "text-fg" : "text-muted hover:text-fg"
              )}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 bottom-2.5 h-[1.5px] origin-right scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:origin-left group-hover:scale-x-100",
                  isActive(item.href) && "scale-x-100"
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-self-start font-display text-3xl text-primary xl:justify-self-center"
        >
          Sandar
        </Link>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <LocaleToggle />
          <ButtonLink href={logInHref} variant="ghost" size="sm">
            {copy.common.signIn}
          </ButtonLink>
          <ButtonLink href={createAccountHref} size="sm">
            {copy.common.createAccount}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-border bg-card text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1" aria-hidden="true">
            <span className={cn("h-[2px] w-4 bg-fg transition-transform", open && "translate-y-[3px] rotate-45")} />
            <span className={cn("h-[2px] w-4 bg-fg transition-opacity", open && "opacity-0")} />
            <span className={cn("h-[2px] w-4 bg-fg transition-transform", open && "-translate-y-[5px] -rotate-45")} />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border/70 bg-bg md:hidden">
          <Container className="py-4">
            <nav aria-label="Main" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-[12px] px-3 font-display text-lg",
                    isActive(item.href)
                      ? "bg-surface-2 text-primary-600"
                      : "text-fg hover:bg-surface"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3">
                <LocaleToggle className="w-full justify-center" />
              </div>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <ButtonLink href={logInHref} variant="secondary" onClick={() => setOpen(false)}>
                  {copy.common.signIn}
                </ButtonLink>
                <ButtonLink href={createAccountHref} onClick={() => setOpen(false)}>
                  {copy.common.createAccount}
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
