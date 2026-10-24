"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, MaskWord, ease } from "@/components/landing/motion";
import { PhotoWithCard } from "@/components/landing/PhotoWithCard";
import { cn } from "@/lib/cn";
import { createAccountHref } from "@/lib/site";

const copy = {
  id: {
    title: "Ruangnya dijaga, bukan cuma dibuka.",
    intro: "Setiap ruang punya aturan, moderator terlatih, dan tim keamanan Sandar di belakangnya.",
    cta: "Buat akun gratis",
    how: "Cara kerjanya",
    help: { title: "Butuh bantuan sekarang?", note: "Ada di setiap ruang, satu ketukan." },
    numbers: [
      { n: "119", l: "Gawat darurat medis" },
      { n: "119 ext. 8", l: "Krisis emosional" },
      { n: "1500-567", l: "Halo Kemenkes" },
    ],
    reportTitle: "Kalau kamu tekan Laporkan",
    reportLabel: "Kenapa kamu melaporkan ini?",
    steps: ["Kamu lapor", "Kami tinjau", "Ruang aman lagi"],
    reasons: ["Bikin nggak aman", "Saran obat", "Buka data orang"],
    reviewing: [{ who: "Dimas", role: "Moderator" }, { who: "Tim keamanan", role: "Sandar" }],
    reviewingNote: "sedang meninjau",
    results: ["Postingan disembunyikan", "Penulis dapat pengingat aturan", "Kamu tetap anonim sebagai pelapor"],
    controlTitle: "Kamu yang pegang kendali",
    controls: [
      { label: "Posting tanpa nama", on: "Orang lain lihat \"Anonim\".", off: "Nama tampilanmu terlihat." },
      { label: "Profil tersembunyi", on: "Nggak ada yang bisa buka profilmu.", off: "Anggota bisa lihat profilmu." },
      { label: "Blokir seseorang", on: "Postingannya hilang dari layarmu. Dia nggak tahu.", off: "Kamu masih melihat postingannya." },
    ],
    tryIt: "Coba geser",
    rulesTitle: "Aturan di setiap ruang",
    rules: ["Dengarkan dulu", "Pengalaman, bukan diagnosis", "Tanpa saran obat", "Cerita tetap di sini", "Laporkan yang bikin nggak aman"],
    notTitle: "Yang perlu kamu tahu",
    notText: "Sandar adalah dukungan sebaya. Kami bukan terapi, layanan medis, atau layanan darurat.",
    readGuidelines: "Baca Pedoman Komunitas",
  },
  en: {
    title: "We don't just open spaces. We look after them.",
    intro: "Every space has rules, trained moderators and Sandar's safety team behind it.",
    cta: "Create a free account",
    how: "How it works",
    help: { title: "Need help now?", note: "In every space, one tap away." },
    numbers: [
      { n: "119", l: "Medical emergency" },
      { n: "119 ext. 8", l: "Emotional crisis" },
      { n: "1500-567", l: "Halo Kemenkes" },
    ],
    reportTitle: "When you tap Report",
    reportLabel: "Why are you reporting this?",
    steps: ["You report", "We review", "The space is safe again"],
    reasons: ["Feels unsafe", "Medication advice", "Shares someone's data"],
    reviewing: [{ who: "Dimas", role: "Moderator" }, { who: "Safety team", role: "Sandar" }],
    reviewingNote: "reviewing",
    results: ["Post hidden", "Author gets a rules reminder", "You stay anonymous as the reporter"],
    controlTitle: "You're in control",
    controls: [
      { label: "Post without your name", on: "Others see \"Anonymous\".", off: "Your display name shows." },
      { label: "Hide my profile", on: "Nobody can open your profile.", off: "Members can see your profile." },
      { label: "Block someone", on: "Their posts disappear for you. They aren't told.", off: "You still see their posts." },
    ],
    tryIt: "Try the switches",
    rulesTitle: "The rules in every space",
    rules: ["Listen first", "Experience, not diagnosis", "No medication advice", "What's shared stays here", "Report what feels unsafe"],
    notTitle: "Good to know",
    notText: "Sandar is peer support. We aren't therapy, medical care or an emergency service.",
    readGuidelines: "Read the Community Guidelines",
  },
} as const;

type Copy = (typeof copy)["id" | "en"];

export default function SafetyPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-fg">
              {t.title.split(" ").map((word, i) => (
                <React.Fragment key={i}>
                  <MaskWord delay={0.07 * i}>{word}</MaskWord>{" "}
                </React.Fragment>
              ))}
            </h1>
            <FadeUp onLoad delay={0.4}>
              <p className="mt-6 max-w-md text-lg leading-8 text-muted">{t.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <ButtonLink href={createAccountHref} size="lg">{t.cta}</ButtonLink>
                <Link href="#report" className="inline-flex min-h-11 items-center font-semibold text-fg underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary">
                  {t.how}
                </Link>
              </div>
            </FadeUp>
          </div>

          <FadeUp onLoad delay={0.15}>
            <PhotoWithCard src="/assets/sandar/tea.jpg" aspect="aspect-[4/3]" overlap="-mt-24" priority revealDelay={0.2}>
              <div className="rounded-[22px] border border-border bg-card p-5 shadow-soft">
                <p className="font-display text-xl text-fg">{t.help.title}</p>
                <ul className="mt-3 divide-y divide-border">
                  {t.numbers.map((item) => (
                    <li key={item.n} className="flex items-baseline justify-between gap-4 py-2.5">
                      <span className="font-display text-2xl text-primary-600">{item.n}</span>
                      <span className="text-sm text-muted">{item.l}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-muted">{t.help.note}</p>
              </div>
            </PhotoWithCard>
          </FadeUp>
        </Container>
      </section>

      <ReportFlow t={t} />
      <Controls t={t} />

      <section className="py-16 sm:py-20">
        <Container>
          <FadeUp>
            <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.rulesTitle}</h2>
          </FadeUp>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {t.rules.map((rule, i) => (
              <FadeUp key={rule} delay={i * 0.05}>
                <li className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 text-[15px] text-fg lg:flex-col lg:items-start">
                  <span className="font-display text-2xl text-primary">{i + 1}</span>
                  {rule}
                </li>
              </FadeUp>
            ))}
          </ol>
          <FadeUp className="mt-14 flex flex-col gap-4 border-l-2 border-primary pl-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl text-fg">{t.notTitle}</h2>
              <p className="mt-1 max-w-xl text-base leading-7 text-muted">{t.notText}</p>
            </div>
            <Link href="/guidelines" className="shrink-0 text-sm font-semibold text-primary-600 hover:underline">{t.readGuidelines} →</Link>
          </FadeUp>
        </Container>
      </section>
    </div>
  );
}

/** Three steps of a report, played one after another once in view; each step can also be picked. */
function ReportFlow({ t }: { t: Copy }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!inView || paused || reduce) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % 3), 3200);
    return () => window.clearTimeout(id);
  }, [inView, paused, reduce, step]);

  const screens = [
    <div key="report">
      <p className="text-sm font-semibold text-fg">{t.reportLabel}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {t.reasons.map((r, i) => (
          <span key={r} className={cn("rounded-full border px-3 py-1.5 text-sm", i === 0 ? "border-primary bg-primary text-white" : "border-border bg-bg text-fg")}>{r}</span>
        ))}
      </div>
    </div>,
    <ul key="review" className="space-y-3">
      {t.reviewing.map((r) => (
        <li key={r.who} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 font-display text-primary-600">{r.who[0]}</span>
          <span className="flex-1">
            <span className="block font-semibold text-fg">{r.who}</span>
            <span className="text-xs text-muted">{r.role}</span>
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <motion.span className="h-2 w-2 rounded-full bg-primary" animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
            {t.reviewingNote}
          </span>
        </li>
      ))}
    </ul>,
    <ul key="done" className="space-y-2.5">
      {t.results.map((r) => (
        <li key={r} className="flex items-center gap-3 text-[15px] text-fg">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf2e5] text-xs text-[#3c6044]">✓</span>
          {r}
        </li>
      ))}
    </ul>,
  ];

  return (
    <section id="report" className="scroll-mt-20 bg-surface py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <FadeUp>
          <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.reportTitle}</h2>
          <ol className="mt-8 space-y-2" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {t.steps.map((label, i) => (
              <li key={label}>
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-current={step === i ? "step" : undefined}
                  className={cn("flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition", step === i ? "bg-card shadow-soft" : "hover:bg-card/60")}
                >
                  <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition", step === i ? "bg-primary text-white" : "bg-card text-primary-600")}>{i + 1}</span>
                  <span className={cn("font-display text-xl transition", step === i ? "text-fg" : "text-muted")}>{label}</span>
                </button>
              </li>
            ))}
          </ol>
        </FadeUp>
        <div ref={ref}>
          <PhotoWithCard src="/assets/sandar/bench.jpg" aspect="aspect-[16/10]" overlap="-mt-20" side="right">
            <div className="min-h-[150px] rounded-[22px] border border-border bg-card p-5 shadow-soft" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease }}
                >
                  {screens[step]}
                </motion.div>
              </AnimatePresence>
            </div>
          </PhotoWithCard>
        </div>
      </Container>
    </section>
  );
}

/** Real switches visitors can flip to see what each privacy setting does. */
function Controls({ t }: { t: Copy }) {
  const [on, setOn] = React.useState([true, true, false]);
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <FadeUp>
          <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.controlTitle}</h2>
          <p className="mt-3 text-sm text-muted">{t.tryIt} →</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="divide-y divide-border rounded-[22px] border border-border bg-card px-5">
            {t.controls.map((c, i) => (
              <li key={c.label} className="py-4">
                <label className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="font-semibold text-fg">{c.label}</span>
                  <input
                    type="checkbox"
                    role="switch"
                    checked={on[i]}
                    onChange={(e) => setOn((list) => list.map((v, j) => (j === i ? e.target.checked : v)))}
                    className="relative h-7 w-12 shrink-0 cursor-pointer appearance-none rounded-full bg-[#dcc9bc] transition-colors after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform checked:bg-primary checked:after:translate-x-5"
                  />
                </label>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={String(on[i])}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-1 text-sm text-muted"
                  >
                    {on[i] ? c.on : c.off}
                  </motion.p>
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </FadeUp>
      </Container>
    </section>
  );
}
