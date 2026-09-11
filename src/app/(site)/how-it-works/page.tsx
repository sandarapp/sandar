"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { BackButton } from "@/components/navigation/BackButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const copy = {
  en: {
    back: "Back",
    eyebrow: "How it works",
    title: "Understand the journey before you decide to join.",
    description:
      "Sandar is designed to help adults explore support with calm, structure, and choice. This page walks through the shape of the experience before any sign-up, programme step, or participation feels too committed.",
    columns: [
      {
        title: "Discover",
        points: [
          "See what kinds of communities, programmes, and facilitated support exist.",
          "Preview room tone before joining.",
          "Explore support without pressure.",
        ],
      },
      {
        title: "Understand",
        points: [
          "Read how moderation, privacy, and support boundaries work.",
          "Clarify what counts as peer support and what does not.",
          "Understand how Sandar protects adults entering with care.",
        ],
      },
      {
        title: "Choose with steadier context",
        points: [
          "Decide what feels right: open conversation, pseudonymous participation, or facilitated groups.",
          "Choose a route with clearer expectations and less noise.",
        ],
      },
      {
        title: "Join",
        points: [
          "Participate at your own pace.",
          "Start quietly if needed, then move closer when ready.",
          "Find a next step without forcing intensity too early.",
        ],
      },
    ],
    boundaryTitle: "Why boundaries matter",
    boundaryText:
      "People arrive with different histories, sensitivities, and comfort levels. Sandar uses visible boundaries to make early participation feel clearer, kinder, and easier to trust.",
    boundaryCards: [
      "Pseudonym options create space between identity and participation.",
      "Adults-only framing keeps expectations focused and contextual.",
      "Clear support boundaries reduce confusion and pressure.",
      "Guided escalation routes keep urgent needs distinct from peer support.",
    ],
    timingTitle: "Before, during, and after participation",
    timingCards: [
      {
        title: "Before",
        text: "Read room details, safety signals, and whether the format feels grounded enough for you to enter.",
      },
      {
        title: "During",
        text: "Move carefully, follow the room pace, and choose whether to listen, respond, or ask for facilitated structure.",
      },
      {
        title: "After",
        text: "Revisit later, continue gently, or step back without losing the clarity of what comes next.",
      },
    ],
    closingTitle: "After this page, Sandar should feel clearer.",
    closingText:
      "Because the goal is not pressure. It is enough understanding for a person to choose the next step with more confidence.",
    primary: "Join Sandar",
    secondary: "See programmes later",
  },
  id: {
    back: "Kembali",
    eyebrow: "Cara kerja",
    title: "Pahami perjalanannya sebelum memutuskan bergabung.",
    description:
      "Sandar dirancang untuk membantu orang dewasa menjelajahi dukungan dengan tenang, terstruktur, dan tetap punya pilihan. Halaman ini menjelaskan bentuk pengalamannya sebelum pendaftaran atau partisipasi terasa terlalu besar.",
    columns: [
      {
        title: "Menemukan",
        points: [
          "Lihat jenis komunitas, program, dan dukungan terfasilitasi yang tersedia.",
          "Rasakan nada ruang sebelum bergabung.",
          "Menjelajah tanpa tekanan.",
        ],
      },
      {
        title: "Memahami",
        points: [
          "Pelajari cara kerja moderasi, privasi, dan batas dukungan.",
          "Pahami apa yang termasuk dukungan sebaya dan apa yang bukan.",
          "Lihat bagaimana Sandar menjaga proses awal tetap lebih aman bagi orang dewasa.",
        ],
      },
      {
        title: "Memilih dengan konteks yang lebih stabil",
        points: [
          "Tentukan apa yang terasa tepat: percakapan terbuka, partisipasi dengan nama samaran, atau kelompok terfasilitasi.",
          "Pilih jalur dengan ekspektasi yang lebih jelas dan kebisingan yang lebih rendah.",
        ],
      },
      {
        title: "Bergabung",
        points: [
          "Berpartisipasi sesuai kecepatanmu.",
          "Mulai dengan tenang jika perlu, lalu mendekat saat siap.",
          "Menemukan langkah berikutnya tanpa memaksa intensitas terlalu cepat.",
        ],
      },
    ],
    boundaryTitle: "Mengapa batas itu penting",
    boundaryText:
      "Setiap orang datang dengan sejarah, sensitivitas, dan tingkat kenyamanan yang berbeda. Sandar memakai batas yang terlihat agar partisipasi awal terasa lebih jelas, ramah, dan lebih mudah dipercaya.",
    boundaryCards: [
      "Pilihan nama samaran memberi jarak sehat antara identitas dan partisipasi.",
      "Framing dewasa 18+ menjaga konteks tetap tepat.",
      "Batas dukungan yang jelas mengurangi kebingungan dan tekanan.",
      "Jalur eskalasi yang dipandu menjaga kebutuhan mendesak tetap berbeda dari peer support.",
    ],
    timingTitle: "Sebelum, saat, dan sesudah berpartisipasi",
    timingCards: [
      {
        title: "Sebelum",
        text: "Baca detail ruang, isyarat keamanan, dan apakah formatnya terasa cukup stabil untuk dimasuki.",
      },
      {
        title: "Saat",
        text: "Bergerak dengan hati-hati, ikuti ritme ruang, dan pilih apakah kamu ingin membaca, merespons, atau masuk ke format yang lebih terfasilitasi.",
      },
      {
        title: "Sesudah",
        text: "Datang kembali nanti, lanjutkan pelan-pelan, atau jeda tanpa kehilangan kejelasan soal langkah berikutnya.",
      },
    ],
    closingTitle: "Sesudah membaca halaman ini, Sandar seharusnya terasa lebih jelas.",
    closingText:
      "Tujuannya bukan menekan. Cukup memberi pemahaman agar seseorang bisa memilih langkah selanjutnya dengan lebih yakin.",
    primary: "Gabung Sandar",
    secondary: "Program nanti",
  },
} as const;

export default function HowItWorksPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <Container className="py-8 sm:py-12">
        <Reveal className="mb-6">
          <BackButton label={t.back} fallbackHref="/" />
        </Reveal>

        <section className="space-y-6">
          <Reveal className="space-y-5">
            <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {t.eyebrow}
            </span>
            <h1 className="max-w-3xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-tight text-fg sm:text-6xl">
              {t.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg">
              {t.description}
            </p>
            <div className="flex gap-3">
              <Link href="/sign-up">
                <Button>{t.primary}</Button>
              </Link>
              <Link href="/safety">
                <Button variant="secondary">{locale === "en" ? "See safety" : "Lihat keamanan"}</Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="overflow-hidden rounded-[32px] p-3 shadow-card">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] border border-border">
                <Image
                  src="/assets/page-heroes/how-it-works-hero.png"
                  alt="How it works visual"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Card>
          </Reveal>
        </section>

        <section className="mt-14">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {locale === "en"
                ? "How people move through Sandar"
                : "Bagaimana orang bergerak melalui Sandar"}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {t.columns.map((column, index) => (
              <Reveal key={column.title} delay={index * 0.04}>
                <Card className="h-full rounded-[24px] p-5 shadow-soft">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {column.title}
                  </p>
                  <div className="space-y-3">
                    {column.points.map((point) => (
                      <p key={point} className="text-sm leading-6 text-muted">
                        {point}
                      </p>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-4">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.boundaryTitle}
            </h2>
            <p className="text-base leading-7 text-muted">{t.boundaryText}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.boundaryCards.map((card, index) => (
              <Reveal key={card} delay={index * 0.04}>
                <Card className="rounded-[22px] p-5 shadow-soft">
                  <p className="text-sm leading-6 text-muted">{card}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.timingTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.timingCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <Card className="h-full rounded-[24px] p-5 shadow-soft">
                  <p className="font-semibold text-fg">{card.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[28px] p-6 shadow-card sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
                  {t.closingTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  {t.closingText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/sign-up">
                  <Button>{t.primary}</Button>
                </Link>
                <Link href="/">
                  <Button variant="secondary">{t.secondary}</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}
