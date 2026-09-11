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
    eyebrow: "For partners",
    title: "Launch a trusted pilot with community partners.",
    description:
      "Sandar helps trusted organisations run peer support experiences with clearer structure, safer entry, and a calmer member journey. This page outlines what a pilot can support and what makes the experience easier for participants to enter.",
    heroPoints: ["Built for pilots", "Focused partner process", "Clear member journey"],
    featureTitle: "What partners receive, and what users feel.",
    featureCards: [
      "Partner alignment tools that frame who the community is for, what the experience offers, and how people should enter it.",
      "Trust cues and room framing that explain purpose, audience, and boundaries before someone participates.",
      "Adult-only pilot safety framing that keeps context appropriate and easier to trust.",
    ],
    systemsTitle: "What partners receive from Sandar",
    systemsCards: [
      "Clear intake parameters for audience, pacing, support tone, and participation design.",
      "Partner-facing guidance on what will be surfaced to users and how support gets framed.",
      "Operational support to help members move through discovery, joining, and follow-up with more clarity.",
      "Lighter-weight administration for organisations that need structure without building a full custom platform.",
    ],
    trustTitle: "What the partnership makes possible for users.",
    trustCards: [
      "Clearer discovery of who the space is for.",
      "Safer expectations around boundaries and participation.",
      "Structured joining experiences without heavy onboarding friction.",
      "Gentler support flow from arrival to next step.",
    ],
    finalTitle:
      "If your organisation wants a better support experience for its community, let us talk.",
    finalText:
      "Sandar is looking for a small number of trusted pilots where calm structure, user clarity, and safer entry matter.",
    finalPrimary: "Start the conversation",
    finalSecondary: "Refer to partner deck later",
  },
  id: {
    back: "Kembali",
    eyebrow: "Untuk mitra",
    title: "Luncurkan pilot yang terpercaya bersama mitra komunitas.",
    description:
      "Sandar membantu organisasi tepercaya menjalankan pengalaman peer support dengan struktur yang lebih jelas, pintu masuk yang lebih aman, dan perjalanan member yang lebih tenang. Halaman ini menjelaskan apa yang dapat didukung sebuah pilot dan mengapa pengalamannya lebih mudah dimasuki peserta.",
    heroPoints: ["Dibuat untuk pilot", "Proses mitra yang fokus", "Journey member yang jelas"],
    featureTitle: "Apa yang diterima mitra, dan apa yang dirasakan pengguna.",
    featureCards: [
      "Alat penyelarasan mitra untuk menjelaskan siapa komunitas ini ditujukan, apa yang ditawarkan, dan bagaimana orang seharusnya masuk ke dalamnya.",
      "Trust cue dan framing ruang yang menjelaskan tujuan, audiens, dan batas sebelum seseorang berpartisipasi.",
      "Framing keamanan dewasa 18+ yang menjaga konteks tetap tepat dan lebih mudah dipercaya.",
    ],
    systemsTitle: "Apa yang diterima mitra dari Sandar",
    systemsCards: [
      "Parameter intake yang jelas untuk audiens, ritme, tone dukungan, dan desain partisipasi.",
      "Panduan untuk mitra mengenai apa yang akan ditampilkan ke pengguna dan bagaimana dukungan dibingkai.",
      "Dukungan operasional untuk membantu anggota bergerak melalui penemuan, bergabung, dan tindak lanjut dengan lebih jelas.",
      "Administrasi yang lebih ringan bagi organisasi yang butuh struktur tanpa harus membangun platform kustom penuh.",
    ],
    trustTitle: "Apa yang dimungkinkan kemitraan ini untuk pengguna.",
    trustCards: [
      "Penemuan yang lebih jelas tentang siapa ruang ini ditujukan.",
      "Ekspektasi yang lebih aman mengenai batas dan partisipasi.",
      "Pengalaman bergabung yang terstruktur tanpa onboarding yang terlalu berat.",
      "Alur dukungan yang lebih lembut dari kedatangan hingga langkah berikutnya.",
    ],
    finalTitle:
      "Kalau organisasimu ingin pengalaman dukungan yang lebih baik untuk komunitasnya, mari bicara.",
    finalText:
      "Sandar sedang mencari sejumlah kecil pilot tepercaya di mana struktur yang tenang, kejelasan pengguna, dan pintu masuk yang lebih aman benar-benar penting.",
    finalPrimary: "Mulai percakapan",
    finalSecondary: "Baca partner deck nanti",
  },
} as const;

export default function PartnersPage() {
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
            <div className="flex flex-wrap gap-3">
              {t.heroPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-border bg-white/70 px-4 py-2 text-sm text-muted shadow-soft"
                >
                  {point}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="overflow-hidden rounded-[32px] p-3 shadow-card">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] border border-border">
                <Image
                  src="/assets/page-heroes/partners-hero.png"
                  alt="Partners visual"
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
              {t.featureTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.featureCards.map((card, index) => (
              <Reveal key={card} delay={index * 0.04}>
                <Card className="h-full rounded-[22px] p-5 shadow-soft">
                  <p className="text-sm leading-6 text-muted">{card}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.systemsTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.systemsCards.map((card, index) => (
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
              {t.trustTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.trustCards.map((card, index) => (
              <Reveal key={card} delay={index * 0.04}>
                <Card className="h-full rounded-[22px] p-5 shadow-soft">
                  <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-6 text-muted">{card}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[30px] p-6 shadow-card sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
                  {t.finalTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  {t.finalText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/sign-up">
                  <Button>{t.finalPrimary}</Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary">{t.finalSecondary}</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}
