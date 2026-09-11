"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getSiteCopy } from "@/content/site";

export function Footer() {
  const { locale } = useLocale();
  const copy = getSiteCopy(locale);

  return (
    <footer className="border-t border-border/60 bg-bg">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-2">
            <p className="tracking-[0.35em] text-sm font-semibold">SANDAR</p>
            <p className="text-sm text-muted">{copy.footer.intro}</p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">
              {locale === "en" ? "Product" : "Produk"}
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:text-fg" href="/how-it-works">
                  {copy.footer.product[0]}
                </Link>
              </li>
              <li>
                <Link className="hover:text-fg" href="/safety">
                  {copy.footer.product[1]}
                </Link>
              </li>
              <li>
                <Link className="hover:text-fg" href="/for-partners">
                  {copy.footer.product[2]}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">
              {locale === "en" ? "Company" : "Perusahaan"}
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:text-fg" href="/about">
                  {copy.footer.company[0]}
                </Link>
              </li>
              <li>
                <Link className="hover:text-fg" href="/sign-up">
                  {copy.footer.company[1]}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">
              {locale === "en" ? "Language" : "Bahasa"}
            </p>
            <LocaleToggle />
          </div>

          <div className="space-y-2 md:col-span-4">
            <p className="text-sm font-semibold">
              {locale === "en" ? "Legal" : "Legal"}
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a className="hover:text-fg" href="#">
                  {locale === "en" ? "Privacy Policy" : "Kebijakan Privasi"}
                </a>
              </li>
              <li>
                <a className="hover:text-fg" href="#">
                  {locale === "en" ? "Terms of Service" : "Syarat Layanan"}
                </a>
              </li>
              <li>
                <a className="hover:text-fg" href="#">
                  {locale === "en"
                    ? "Community Guidelines"
                    : "Panduan Komunitas"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sandar. All rights reserved.</p>
          <p className="text-muted/90">{copy.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
