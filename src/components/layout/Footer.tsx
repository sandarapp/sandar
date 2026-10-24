"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ButtonLink } from "@/components/ui/Button";
import { getSiteCopy } from "@/content/site";
import { legalDocs } from "@/content/legal";
import { createAccountHref } from "@/lib/site";

export function Footer() {
  const { locale } = useLocale();
  const copy = getSiteCopy(locale);
  const linkClass = "inline-flex min-h-9 items-center text-sm text-muted transition-colors hover:text-primary-600";
  const heading = "text-xs font-semibold uppercase tracking-[0.16em] text-fg";

  const columns = [
    {
      title: locale === "en" ? "Product" : "Produk",
      links: [
        { href: "/how-it-works", label: copy.footer.product[0] },
        { href: "/safety", label: copy.footer.product[1] },
        { href: "/for-partners", label: copy.footer.product[2] },
      ],
    },
    {
      title: locale === "en" ? "Company" : "Perusahaan",
      links: [
        { href: "/about", label: copy.footer.company[0] },
        { href: createAccountHref, label: copy.footer.company[1] },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: legalDocs.privacy[locale].title },
        { href: "/terms", label: legalDocs.terms[locale].title },
        { href: "/guidelines", label: legalDocs.guidelines[locale].title },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-3xl text-primary">Sandar</Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{copy.footer.intro}</p>
            <ButtonLink href={createAccountHref} size="sm" className="mt-5">
              {copy.common.createAccount}
            </ButtonLink>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className={heading}>{col.title}</p>
              <ul className="mt-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link className={linkClass} href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-border bg-card px-4 py-3 text-sm leading-6 text-fg">
          <span className="mr-2 font-semibold text-primary-600">119</span>
          {copy.footer.crisis}
        </p>

        <div className="mt-6 flex flex-col gap-1 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Sandar</p>
          <p>{copy.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
