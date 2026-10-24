"use client";

import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/cn";
import { ease } from "@/components/landing/motion";
import type { landingCopy } from "@/content/landing";

type Copy = (typeof landingCopy)["en" | "id"];

/**
 * The phone stays pinned while the steps scroll past, and the screen inside
 * it changes to match the step in view. On small screens each step simply
 * shows its own screen underneath.
 */
export function PhoneStory({ t }: { t: Copy }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const count = t.story.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(count - 1, Math.max(0, Math.floor(v * count))));
  });

  return (
    <section className="bg-gradient-to-b from-bg via-[#fbe6d6] to-bg py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-xl font-display text-3xl leading-tight text-fg sm:text-4xl">{t.storyTitle}</h2>

        <div ref={ref} className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          <ol className="space-y-12 lg:space-y-0">
            {t.story.map((step, i) => (
              <li key={step.title} className="lg:flex lg:min-h-[60vh] lg:items-center">
                <div className={cn("transition-opacity duration-500", active === i ? "lg:opacity-100" : "lg:opacity-30")}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-fg sm:text-3xl">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-base leading-7 text-muted">{step.text}</p>
                  <div className="mt-6 lg:hidden">
                    <Phone>
                      <Screen index={i} t={t} />
                    </Phone>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-[calc(50vh-310px)]">
              <Phone>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    className="flex h-full flex-col"
                    initial={reduce ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease }}
                  >
                    <Screen index={active} t={t} />
                  </motion.div>
                </AnimatePresence>
              </Phone>
              <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
                {t.story.map((step, i) => (
                  <span key={step.title} className={cn("h-1.5 rounded-full transition-all", active === i ? "w-6 bg-primary" : "w-1.5 bg-primary/25")} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[290px] rounded-[44px] border border-[#e9d3c3] bg-[#fffaf4] p-2.5 shadow-[0_30px_60px_rgba(122,62,35,.18)]">
      <div className="relative h-[570px] overflow-hidden rounded-[36px] bg-bg text-fg">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#2E1D17]" />
        <div className="flex h-full flex-col px-4 pb-3 pt-11">{children}</div>
      </div>
    </div>
  );
}

function TabBar({ t, on }: { t: Copy; on: number }) {
  return (
    <div className="mt-auto grid grid-cols-4 border-t border-border pt-2 text-center text-[10px]">
      {t.phone.tabs.map((tab, i) => (
        <span key={tab} className={i === on ? "font-semibold text-primary" : "text-muted"}>
          <span className={cn("mx-auto mb-1 block h-1.5 w-1.5 rounded-full", i === on ? "bg-primary" : "bg-transparent")} />
          {tab}
        </span>
      ))}
    </div>
  );
}

function Chip({ on, children }: { on?: boolean; children: React.ReactNode }) {
  return (
    <span className={cn("rounded-full border px-3 py-1.5 text-[11px]", on ? "border-primary bg-primary text-white" : "border-border bg-card text-fg")}>
      {children}
    </span>
  );
}

function Thumb({ src, className }: { src: string; className: string }) {
  return (
    <div className={cn("relative shrink-0 overflow-hidden", className)}>
      <Image src={src} alt="" fill sizes="280px" className="object-cover" />
    </div>
  );
}

function Screen({ index, t }: { index: number; t: Copy }) {
  const p = t.phone;
  const [s0, s1, s2, s3] = t.rooms;

  if (index === 0) {
    return (
      <>
        <div className="h-1 rounded-full bg-surface-2">
          <div className="h-1 w-[55%] rounded-full bg-primary" />
        </div>
        <p className="mt-3 text-[11px] text-muted">{p.step}</p>
        <p className="mt-1 font-display text-[22px] leading-tight">{p.topicsTitle}</p>
        <p className="mt-1 text-xs text-muted">{p.topicsHint}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.topics.map((topic, i) => (
            <Chip key={topic} on={i === 0 || i === 3}>{topic}</Chip>
          ))}
        </div>
        <Thumb src="/assets/sandar/tea.jpg" className="mt-5 h-28 rounded-2xl" />
        <div className="mt-auto space-y-2">
          <div className="rounded-full bg-primary py-3 text-center text-sm font-semibold text-white">{p.continue}</div>
          <p className="text-center text-xs text-muted">{p.skip}</p>
        </div>
      </>
    );
  }

  if (index === 1) {
    return (
      <>
        <p className="font-display text-[22px]">{p.greeting}</p>
        <p className="text-xs text-muted">{p.greetingSub}</p>
        <p className="mt-4 text-[11px] font-semibold text-primary">{p.because}</p>
        <div className="mt-2 overflow-hidden rounded-2xl border border-border bg-card">
          <Thumb src={s0.img} className="h-28" />
          <div className="p-3">
            <p className="font-display text-[15px]">{s0.name}</p>
            <p className="text-[11px] text-muted">{s0.meta}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[s1, s2].map((s) => (
            <div key={s.name} className="overflow-hidden rounded-xl border border-border bg-card">
              <Thumb src={s.img} className="h-16" />
              <p className="p-2 font-display text-[12px] leading-tight">{s.name}</p>
            </div>
          ))}
        </div>
        <TabBar t={t} on={1} />
      </>
    );
  }

  if (index === 2) {
    return (
      <>
        <Thumb src={s0.img} className="h-32 rounded-2xl" />
        <p className="mt-3 font-display text-xl">{s0.name}</p>
        <p className="text-[11px] text-muted">{p.online} · {s0.meta}</p>
        <ul className="mt-3 space-y-1.5 rounded-2xl bg-card p-3 text-[13px]">
          {p.checks.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-primary">✓</span>
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs font-semibold text-primary-600">{p.rules} →</p>
        <div className="mt-auto rounded-full bg-primary py-3 text-center text-sm font-semibold text-white">{p.join}</div>
      </>
    );
  }

  if (index === 3) {
    return (
      <>
        <div className="flex items-center gap-2">
          <Thumb src={s0.img} className="h-8 w-8 rounded-full" />
          <p className="font-display text-base">{s0.name}</p>
        </div>
        <div className="mt-3 space-y-2.5">
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="text-[11px] font-semibold text-muted">{p.anon}</p>
            <p className="mt-1 text-[13px] leading-5">{p.post1}</p>
            <div className="mt-2 flex gap-2">
              <Chip on>{p.support} 12</Chip>
              <Chip>{p.relate} 4</Chip>
            </div>
          </div>
          <div className="rounded-2xl bg-surface-2 p-3">
            <p className="text-[11px] font-semibold text-primary">{p.mod}</p>
            <p className="mt-1 text-[13px] leading-5">{p.post2}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-3">
            <p className="text-[11px] font-semibold text-muted">{p.anon2}</p>
            <p className="mt-1 text-[13px] leading-5">{p.post3}</p>
            <div className="mt-2 flex gap-2">
              <Chip>{p.support} 8</Chip>
              <Chip on>{p.relate} 15</Chip>
            </div>
          </div>
        </div>
        <div className="mt-auto rounded-full border border-primary/40 py-2.5 text-center text-xs font-semibold text-primary-600">{p.help}</div>
      </>
    );
  }

  return (
    <>
      <p className="font-display text-[22px]">{p.saved}</p>
      <div className="mt-3 space-y-2.5">
        {[s0, s1, s3].map((s, i) => (
          <div key={s.name} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-2.5">
            <Thumb src={s.img} className="h-12 w-12 rounded-xl" />
            <div className="min-w-0">
              <p className="truncate font-display text-[13px]">{s.name}</p>
              <p className="text-[11px] text-primary">{3 - i} {p.newPosts}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl bg-surface-2 p-3 text-center text-xs font-semibold text-primary-600">{p.soon}</div>
      <TabBar t={t} on={2} />
    </>
  );
}
