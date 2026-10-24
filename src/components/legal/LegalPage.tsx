"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { legalDocs, legalUpdated, legalVersion, type LegalType } from "@/content/legal";
import { cn } from "@/lib/cn";

const tabs: { type: LegalType; href: string }[] = [
  { type: "privacy", href: "/privacy" },
  { type: "terms", href: "/terms" },
  { type: "guidelines", href: "/guidelines" },
];

export function LegalPage({ type }: { type: LegalType }) {
  const { locale } = useLocale();
  const doc = legalDocs[type][locale];

  return (
    <div className="bg-bg py-12 sm:py-16">
      <Container className="max-w-3xl">
        <nav aria-label="Legal" className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab.type}
              href={tab.href}
              aria-current={tab.type === type ? "page" : undefined}
              className={cn(
                "inline-flex min-h-10 items-center rounded-full border px-4 text-sm",
                tab.type === type ? "border-primary bg-primary text-white" : "border-border bg-card text-fg hover:bg-surface"
              )}
            >
              {legalDocs[tab.type][locale].title}
            </Link>
          ))}
        </nav>

        <h1 className="mt-10 font-display text-4xl text-fg sm:text-5xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-muted">
          {legalUpdated[locale]} · {legalVersion}
        </p>
        <p className="mt-6 text-lg leading-8 text-fg">{doc.intro}</p>

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.h}>
              <h2 className="font-display text-2xl text-fg">{section.h}</h2>
              {section.p?.map((para) => (
                <p key={para} className="mt-3 text-base leading-7 text-muted">{para}</p>
              ))}
              {section.list ? (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-muted">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
