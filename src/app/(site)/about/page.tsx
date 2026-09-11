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
    eyebrow: "About Sandar",
    title:
      "Sandar is a calmer way to discover support that feels human, clear, and safe to enter.",
    description:
      "Sandar helps adults in Indonesia explore peer support communities with more clarity before they join. Instead of feeling dropped into something unclear, people can understand tone, boundaries, and support options first, then choose a path that feels right.",
    whyTitle: "Why Sandar exists",
    whyText:
      "Many public support spaces feel too noisy, too exposed, or too hard to trust when someone is just beginning.",
    quote:
      "Sandar is for people who want to be understood without feeling rushed, judged, or pushed into a kind of help that does not fit yet.",
    workTitle: "What you can do on Sandar",
    workCards: [
      "Discover communities that feel relevant and whether Sandar seems like a better fit for you.",
      "Read room tone, audience expectations, privacy, moderation, and limits before joining.",
      "Choose the level of support that fits: open conversation, quieter pacing, or structured programmes.",
      "Stay with more confidence because the route into support is clearer.",
    ],
    diffTitle: "What makes it feel different",
    diffCards: [
      "People can understand the experience before they have to participate.",
      "Safety boundaries are visible instead of hidden behind the product.",
      "Moderation, reporting, and responsibility boundaries live in the experience itself.",
      "An optional guided programme layer exists when someone wants more structure.",
    ],
    beliefTitle: "What Sandar offers users",
    beliefCards: [
      "A clearer first step before public posting or participation.",
      "A warmer onboarding experience that still respects privacy.",
      "Adults-only context for steadier, more contextual support.",
      "More room to decide carefully before speaking.",
    ],
    teamTitle: "Who is building it",
    teamCards: [
      {
        name: "Ratika Subarza",
        role: "Founder",
        text: "Focuses on bringing emotional nuance, clearer boundaries, and real-world support journeys into the product vision.",
      },
      {
        name: "Jenni Rere",
        role: "Community and advisory",
        text: "Helps shape how support tone, safety, and participation feel for people entering carefully.",
      },
      {
        name: "Purnomo",
        role: "Operations and structure",
        text: "Supports the practical systems and partnership thinking that help Sandar stay calm and dependable.",
      },
    ],
    finalTitle: "Start with the path that feels right for you.",
    finalPrimary: "View community journey",
    finalSecondary: "Explore safety & support",
  },
  id: {
    back: "Kembali",
    eyebrow: "Tentang Sandar",
    title:
      "Sandar adalah cara yang lebih tenang untuk menemukan dukungan yang terasa manusiawi, jelas, dan aman untuk dimasuki.",
    description:
      "Sandar membantu orang dewasa di Indonesia menjelajahi komunitas dukungan sebaya dengan lebih jelas sebelum bergabung. Alih-alih langsung dilempar ke ruang yang samar, orang dapat memahami tone, batas, dan pilihan dukungan lebih dulu, lalu memilih jalur yang terasa tepat.",
    whyTitle: "Mengapa Sandar ada",
    whyText:
      "Banyak ruang dukungan publik terasa terlalu bising, terlalu terbuka, atau terlalu sulit dipercaya ketika seseorang baru mulai.",
    quote:
      "Sandar dibuat untuk orang yang ingin dipahami tanpa merasa didorong, dihakimi, atau diarahkan terlalu cepat ke bentuk bantuan yang belum terasa pas.",
    workTitle: "Apa yang bisa dilakukan di Sandar",
    workCards: [
      "Menemukan komunitas yang terasa relevan dan melihat apakah Sandar lebih cocok untukmu.",
      "Membaca tone ruang, ekspektasi audiens, privasi, moderasi, dan batas sebelum bergabung.",
      "Memilih tingkat dukungan yang pas: percakapan terbuka, ritme yang lebih tenang, atau program terstruktur.",
      "Melangkah dengan lebih yakin karena jalur masuk ke dukungan terasa lebih jelas.",
    ],
    diffTitle: "Apa yang membuatnya terasa berbeda",
    diffCards: [
      "Orang bisa memahami pengalaman sebelum harus ikut terlibat.",
      "Batas keamanan terlihat jelas, bukan tersembunyi di balik produk.",
      "Moderasi, pelaporan, dan batas tanggung jawab hadir di dalam pengalaman itu sendiri.",
      "Lapisan program terpandu tersedia saat seseorang menginginkan lebih banyak struktur.",
    ],
    beliefTitle: "Apa yang Sandar tawarkan untuk pengguna",
    beliefCards: [
      "Langkah pertama yang lebih jelas sebelum posting atau partisipasi publik.",
      "Pengalaman awal yang lebih hangat namun tetap menghormati privasi.",
      "Konteks orang dewasa 18+ untuk dukungan yang lebih stabil dan tepat.",
      "Ruang lebih besar untuk memutuskan dengan hati-hati sebelum berbicara.",
    ],
    teamTitle: "Siapa yang membangunnya",
    teamCards: [
      {
        name: "Ratika Subarza",
        role: "Founder",
        text: "Berfokus menghadirkan nuansa emosional, batas yang lebih jelas, dan perjalanan dukungan nyata ke dalam visi produk.",
      },
      {
        name: "Jenni Rere",
        role: "Komunitas dan advisory",
        text: "Membantu membentuk tone dukungan, rasa aman, dan bentuk partisipasi bagi orang yang masuk dengan hati-hati.",
      },
      {
        name: "Purnomo",
        role: "Operasional dan struktur",
        text: "Mendukung sistem praktis dan arah kemitraan agar Sandar tetap tenang dan dapat diandalkan.",
      },
    ],
    finalTitle: "Mulailah dari jalur yang terasa paling tepat bagimu.",
    finalPrimary: "Lihat community journey",
    finalSecondary: "Jelajahi keamanan & dukungan",
  },
} as const;

export default function AboutPage() {
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
            <h1 className="max-w-2xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-tight text-fg sm:text-6xl">
              {t.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {t.description}
            </p>
            <div className="flex gap-3">
              <Link href="/sign-up">
                <Button>{locale === "en" ? "Join Sandar" : "Gabung Sandar"}</Button>
              </Link>
              <Link href="/safety">
                <Button variant="secondary">
                  {locale === "en" ? "Explore safety & support" : "Lihat keamanan & dukungan"}
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="overflow-hidden rounded-[32px] p-3 shadow-card">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] border border-border">
                <Image
                  src="/assets/page-heroes/about-hero.png"
                  alt="About Sandar visual"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </Card>
          </Reveal>
        </section>

        <section className="mt-14 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <Card className="rounded-[24px] p-6 shadow-soft">
              <h2 className="font-[var(--font-display)] text-2xl text-fg">
                {t.whyTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{t.whyText}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="rounded-[24px] p-6 shadow-soft">
              <p className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
                “{t.quote}”
              </p>
            </Card>
          </Reveal>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.workTitle}
            </h2>
            <div className="mt-6 grid gap-4">
              {t.workCards.map((card, index) => (
                <Card key={card} className="rounded-[22px] p-5 shadow-soft">
                  <div className="flex gap-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-6 text-muted">{card}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-4">
              <Card className="rounded-[22px] p-5 shadow-soft">
                <h3 className="font-[var(--font-display)] text-2xl text-fg">
                  {t.diffTitle}
                </h3>
                <div className="mt-4 space-y-3">
                  {t.diffCards.map((card) => (
                    <p key={card} className="text-sm leading-6 text-muted">
                      {card}
                    </p>
                  ))}
                </div>
              </Card>
              <Card className="rounded-[22px] p-5 shadow-soft">
                <h3 className="font-[var(--font-display)] text-2xl text-fg">
                  {t.beliefTitle}
                </h3>
                <div className="mt-4 space-y-3">
                  {t.beliefCards.map((card) => (
                    <p key={card} className="text-sm leading-6 text-muted">
                      {card}
                    </p>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        </section>

        <section className="mt-14">
          <Reveal className="space-y-3">
            <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
              {t.teamTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.teamCards.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <Card className="h-full rounded-[22px] p-5 shadow-soft">
                  <p className="font-semibold text-fg">{member.name}</p>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{member.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[30px] p-6 shadow-card sm:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <h2 className="font-[var(--font-display)] text-3xl text-fg sm:text-4xl">
                {t.finalTitle}
              </h2>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/sign-up">
                  <Button>{t.finalPrimary}</Button>
                </Link>
                <Link href="/safety">
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
