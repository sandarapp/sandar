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
    eyebrow: "Safety & support",
    title: "A calmer, better bounded way to participate in Sandar.",
    description:
      "Sandar is designed to help adults find peer support with more clarity, structure, and room to choose their pace. Safety is not a hidden layer. It is part of how the experience is introduced, moderated, and continued.",
    pillarsTitle: "How Sandar creates a safer support environment",
    pillars: [
      "Clear participation boundaries around adult peer support, guidance, and moderated discussion.",
      "Room tone, pacing, and support expectations explained before someone joins.",
      "Moderation and review processes designed to reduce confusion and make next steps visible.",
    ],
    participationTitle: "People can shape how they participate",
    participationCards: [
      "Pseudonym support means people can enter more privately and still feel part of a thoughtful, human space.",
      "Audience choice creates gentler entry points, with options for listening quietly or participating more actively.",
      "Programmes and facilitated groups offer more supported formats when someone wants extra steadiness.",
    ],
    reviewTitle: "What Sandar reviews, supports, and escalates",
    reviewCards: [
      "Moderation review for room safety, shared clarity, and whether a concern needs wider support.",
      "Reporting pathways that keep safety actions visible without making the experience feel punitive.",
      "Escalation routes when urgent or high-risk needs need to move beyond peer support.",
      "Facilitated support options that can add structure when someone needs more than a conversation thread.",
    ],
    groupsTitle: "Optional facilitated groups are one part of the picture",
    groupsText:
      "Sandar includes open community spaces as well as quieter, guided formats. Both are introduced carefully so people can understand what kind of support they are choosing.",
    ctaTitle: "Build safer support with Sandar",
    ctaText:
      "If you want a calmer structure for peer support, social care, or community programmes, we can explore what that looks like.",
    ctaPrimary: "For partners",
    ctaSecondary: "Join waitlist",
  },
  id: {
    back: "Kembali",
    eyebrow: "Keamanan & dukungan",
    title: "Cara yang lebih tenang dan berbatas jelas untuk berpartisipasi di Sandar.",
    description:
      "Sandar dirancang untuk membantu orang dewasa menemukan dukungan sebaya dengan lebih jelas, terstruktur, dan tetap punya ruang memilih ritmenya. Keamanan bukan lapisan tersembunyi. Ia menjadi bagian dari cara pengalaman ini diperkenalkan, dimoderasi, dan dilanjutkan.",
    pillarsTitle: "Bagaimana Sandar menciptakan lingkungan dukungan yang lebih aman",
    pillars: [
      "Batas partisipasi yang jelas untuk dukungan sebaya dewasa, panduan, dan diskusi yang dimoderasi.",
      "Nada ruang, ritme, dan ekspektasi dukungan dijelaskan sebelum seseorang bergabung.",
      "Proses moderasi dan peninjauan dirancang untuk mengurangi kebingungan dan memperjelas langkah berikutnya.",
    ],
    participationTitle: "Orang dapat membentuk cara mereka berpartisipasi",
    participationCards: [
      "Dukungan nama samaran memungkinkan orang masuk dengan lebih privat namun tetap merasa menjadi bagian dari ruang yang manusiawi.",
      "Pilihan bentuk audiens menciptakan pintu masuk yang lebih lembut, dari sekadar membaca hingga ikut aktif.",
      "Program dan kelompok terfasilitasi memberi format yang lebih tertopang saat seseorang membutuhkan kestabilan tambahan.",
    ],
    reviewTitle: "Apa yang ditinjau, didukung, dan dieskalasi oleh Sandar",
    reviewCards: [
      "Peninjauan moderasi untuk keamanan ruang, kejernihan bersama, dan apakah sebuah kekhawatiran memerlukan dukungan lebih lanjut.",
      "Jalur pelaporan yang membuat tindakan keamanan terlihat tanpa membuat pengalaman terasa menghukum.",
      "Jalur eskalasi saat kebutuhan yang mendesak atau berisiko tinggi perlu bergerak melampaui peer support.",
      "Pilihan dukungan terfasilitasi yang bisa menambah struktur ketika seseorang butuh lebih dari utas percakapan.",
    ],
    groupsTitle: "Kelompok terfasilitasi opsional adalah salah satu bagian dari gambaran besarnya",
    groupsText:
      "Sandar punya ruang komunitas terbuka sekaligus format yang lebih tenang dan dipandu. Keduanya diperkenalkan dengan hati-hati agar orang paham jenis dukungan yang mereka pilih.",
    ctaTitle: "Bangun dukungan yang lebih aman bersama Sandar",
    ctaText:
      "Kalau kamu ingin struktur yang lebih tenang untuk peer support, social care, atau program komunitas, kita bisa eksplor bentuknya bersama.",
    ctaPrimary: "Untuk mitra",
    ctaSecondary: "Gabung waitlist",
  },
} as const;

export default function SafetyPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <Container className="py-8 sm:py-12">
        <Reveal className="mb-6">
          <BackButton label={t.back} fallbackHref="/" />
        </Reveal>

        <section className="grid gap-8 lg:grid-cols-[0.92fr_1fr]">
          <Reveal className="space-y-5">
            <span className="inline-flex rounded-full border border-border bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {t.eyebrow}
            </span>
            <h1 className="max-w-xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-tight text-fg sm:text-6xl">
              {t.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
              {t.description}
            </p>
            <Link href="/for-partners">
              <Button>{locale === "en" ? "Explore support choices" : "Lihat pilihan dukungan"}</Button>
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="overflow-hidden rounded-[28px] p-4 shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-border">
                <Image
                  src="/assets/prototype-v2/safety-v2.png"
                  alt="Safety and support prototype"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </Card>
          </Reveal>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.pillarsTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {t.pillars.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <Card className="rounded-[22px] p-5 shadow-soft">
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.participationTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.participationCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <Card className="h-full rounded-[22px] p-5 shadow-soft">
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.reviewTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.reviewCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <Card className="rounded-[22px] p-5 shadow-soft">
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[28px] p-6 shadow-soft sm:p-8">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.groupsTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
              {t.groupsText}
            </p>
          </Card>
        </Reveal>

        <Reveal className="mt-14">
          <Card className="rounded-[30px] p-6 shadow-card sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  {t.ctaText}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/for-partners">
                  <Button>{t.ctaPrimary}</Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="secondary">{t.ctaSecondary}</Button>
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}

