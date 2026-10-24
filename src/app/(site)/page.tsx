"use client";

import Link from "next/link";
import * as React from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, MaskWord } from "@/components/landing/motion";
import { PhotoWithCard } from "@/components/landing/PhotoWithCard";
import { PhoneStory } from "@/components/landing/PhoneStory";
import { RoomSlider } from "@/components/landing/RoomSlider";
import { Thread } from "@/components/landing/Thread";
import Image from "next/image";
import { getLandingCopy } from "@/content/landing";
import { cn } from "@/lib/cn";
import { createAccountHref, logInHref, registerCommunityHref } from "@/lib/site";

type Copy = ReturnType<typeof getLandingCopy>;

const h2 = "font-display text-3xl leading-tight text-fg sm:text-4xl";

export default function HomePage() {
  const { locale } = useLocale();
  const t = getLandingCopy(locale);

  return (
    <div className="bg-bg">
      <Hero t={t} />
      <Inside t={t} />
      <PhoneStory t={t} />
      <Rooms t={t} />
      <Honest t={t} />
      <Join t={t} />
      <Communities t={t} />
      <Help t={t} />
      <Faq t={t} />
    </div>
  );
}

function Hero({ t }: { t: Copy }) {
  return (
    <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] text-fg">
            {t.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <MaskWord delay={0.08 * i}>{word}</MaskWord>{" "}
              </React.Fragment>
            ))}
          </h1>
          <FadeUp onLoad delay={0.45}>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">{t.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href={createAccountHref} size="lg">{t.cta}</ButtonLink>
              <Link href="/for-partners" className="inline-flex min-h-11 items-center text-base font-semibold text-fg underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary">
                {t.community}
              </Link>
            </div>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted">{t.small}</p>
          </FadeUp>
        </div>

        <FadeUp onLoad delay={0.15}>
          <PhotoWithCard src="/assets/sandar/laptop.jpg" aspect="aspect-[16/10]" overlap="-mt-28" side="left" priority revealDelay={0.2}>
            <Thread
              space={t.thread.space}
              members={t.thread.members}
              messages={t.thread.messages}
              labels={t.thread.labels}
            />
            <p className="mt-3 text-xs text-muted">{t.thread.caption}</p>
          </PhotoWithCard>
        </FadeUp>
      </Container>
    </section>
  );
}

function ReactionDemo({ t }: { t: Copy }) {
  const options = [
    { key: "support", label: t.react.support, base: 12 },
    { key: "relate", label: t.react.relate, base: 7 },
    { key: "cheer", label: t.react.cheer, base: 3 },
  ];
  const [picked, setPicked] = React.useState<string | null>(null);
  return (
    <div className="rounded-[20px] border border-border bg-card p-5">
      <p className="text-[15px] leading-6 text-fg">{t.thread.messages[0].text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = picked === o.key;
          return (
            <button
              key={o.key}
              type="button"
              aria-pressed={on}
              onClick={() => setPicked(on ? null : o.key)}
              className={cn(
                "min-h-10 rounded-full border px-4 text-sm transition active:scale-95",
                on ? "border-primary bg-primary text-white" : "border-border bg-bg text-fg hover:border-primary/50"
              )}
            >
              {o.label} <span className="tabular-nums opacity-80">{o.base + (on ? 1 : 0)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Inside({ t }: { t: Copy }) {
  const photos = ["/assets/sandar/window.jpg", "/assets/sandar/tea.jpg", "/assets/sandar/bench.jpg"];
  const visuals = [
    <div key="read" className="rounded-[20px] border border-border bg-card p-5">
      {t.thread.messages.slice(0, 2).map((m) => (
        <div key={m.text} className="border-b border-border py-3 first:pt-0 last:border-0 last:pb-0">
          <p className="text-xs font-semibold text-muted">{m.author}</p>
          <p className="mt-1 text-[15px] leading-6 text-fg">{m.text}</p>
        </div>
      ))}
    </div>,
    <ReactionDemo key="react" t={t} />,
    <div key="mod" className="rounded-[20px] border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 font-display text-lg text-primary-600">D</span>
        <div>
          <p className="font-semibold text-fg">{t.mod.name}</p>
          <p className="text-sm text-muted">{t.mod.role}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-[15px] text-fg">
        {t.mod.rules.map((r) => (
          <li key={r} className="flex gap-2">
            <span className="text-primary">·</span>
            {r}
          </li>
        ))}
      </ul>
    </div>,
  ];

  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container>
        <FadeUp>
          <h2 className={h2}>{t.insideTitle}</h2>
        </FadeUp>
        <div className="mt-12 space-y-14 sm:space-y-20">
          {t.inside.map((row, i) => (
            <FadeUp key={row.title} className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
              <div className={cn(i % 2 === 1 && "md:order-2")}>
                <h3 className="font-display text-2xl text-fg">{row.title}</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-muted">{row.text}</p>
              </div>
              <div className={cn(i % 2 === 1 && "md:order-1")}>
                <PhotoWithCard src={photos[i]} overlap="-mt-16" side={i % 2 === 1 ? "right" : "left"}>
                  {visuals[i]}
                </PhotoWithCard>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Rooms({ t }: { t: Copy }) {
  const { locale } = useLocale();
  return (
    <section className="overflow-hidden bg-surface py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <FadeUp>
          <h2 className={h2}>{t.roomsTitle}</h2>
          <p className="mt-3 max-w-sm text-base leading-7 text-muted">{t.roomsNote}</p>
          <Link href={createAccountHref} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary-600 hover:underline">
            {t.roomsCta} →
          </Link>
        </FadeUp>
        <FadeUp delay={0.1} className="min-w-0">
          <RoomSlider
            rooms={t.rooms}
            href={createAccountHref}
            labels={locale === "id" ? { prev: "Sebelumnya", next: "Berikutnya" } : { prev: "Previous", next: "Next" }}
          />
        </FadeUp>
      </Container>
    </section>
  );
}

function Honest({ t }: { t: Copy }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeUp className="max-w-2xl border-l-2 border-primary pl-6">
          <h2 className="font-display text-2xl text-fg">{t.honestTitle}</h2>
          <p className="mt-3 text-base leading-7 text-muted">{t.honestText}</p>
        </FadeUp>
      </Container>
    </section>
  );
}

function Join({ t }: { t: Copy }) {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <FadeUp className="grid overflow-hidden rounded-[28px] bg-surface-2 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="p-8 sm:p-12">
            <h2 className={h2}>{t.joinTitle}</h2>
            <ol className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
              {t.joinSteps.map((step, i) => (
                <li key={step} className="flex items-center gap-3 text-base text-fg">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-card text-sm font-semibold text-primary-600">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href={createAccountHref} size="lg">{t.cta}</ButtonLink>
              <p className="text-sm text-muted">
                {t.joinHave}{" "}
                <Link href={logInHref} className="font-semibold text-fg underline underline-offset-4">{t.logIn}</Link>
              </p>
            </div>
          </div>
          <div className="relative hidden min-h-[320px] md:block">
            <Image src="/assets/sandar/welcome.jpg" alt="" fill sizes="320px" className="object-cover" />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

function Communities({ t }: { t: Copy }) {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)_auto] md:items-center md:gap-10">
        <div className="relative aspect-[2/1] overflow-hidden rounded-[20px]">
          <Image src="/assets/sandar/illustration.jpg" alt="" fill sizes="220px" className="object-cover" />
        </div>
        <FadeUp>
          <h2 className="font-display text-2xl text-fg sm:text-3xl">{t.commTitle}</h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-muted">{t.commText}</p>
        </FadeUp>
        <ButtonLink href={registerCommunityHref} variant="secondary">{t.commCta}</ButtonLink>
      </Container>
    </section>
  );
}

function Help({ t }: { t: Copy }) {
  return (
    <section className="bg-surface py-14">
      <Container>
        <h2 className="font-display text-2xl text-fg">{t.helpTitle}</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          {t.help.map((item) => (
            <div key={item.n}>
              <dt className="font-display text-3xl text-primary-600">{item.n}</dt>
              <dd className="mt-1 text-sm text-fg">{item.l}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs text-muted">{t.helpNote}</p>
      </Container>
    </section>
  );
}

function Faq({ t }: { t: Copy }) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <FadeUp>
          <h2 className={h2}>{t.faqTitle}</h2>
        </FadeUp>
        <div className="border-t border-fg/15">
          {t.faq.map((item) => (
            <details key={item.q} className="group border-b border-fg/15">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg text-fg [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-2xl text-primary transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-xl pb-6 text-base leading-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
