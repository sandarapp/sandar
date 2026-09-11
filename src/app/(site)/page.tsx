"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconArrowRight } from "@/components/icons/Icons";

const copy = {
  en: {
    eyebrow: "A warm introduction to community support",
    title: "A gentler way to find the people, pace, and support that fit.",
    description:
      "Discover moderated spaces, a calmer pace, and guided next steps through a first experience that feels warm, structured, and easy to enter.",
    ctaPrimary: "Join Sandar",
    ctaSecondary: "See how it works",
    bullets: [
      "Warm, deliberate entry into support",
      "Structured participation with clear boundaries",
      "Designed for adults 18+",
    ],
    promiseTitle: "The welcome stays warm, but the boundaries never disappear.",
    promiseCards: [
      {
        title: "Sandar shows up early.",
        text: "People can learn how a space works before joining.",
      },
      {
        title: "Privacy can stay part of the process.",
        text: "A softer flow, with room to use a pseudonym if needed.",
      },
      {
        title: "Peer support is framed with care.",
        text: "Warm language stays clear about what Sandar is and is not.",
      },
    ],
    howTitle: "From first glance to first step.",
    howDescription:
      "The homepage is designed to feel like a guided start, not a loud social feed entrance.",
    howCards: [
      "Find communities shaped around adult needs, shared pace, and clearer norms.",
      "See tone, safety cues, and who the space is for before you decide.",
      "Read quietly, join the conversation, or move into community and programmes step by step.",
    ],
    safetyTitle: "A welcoming feel. Clear boundaries.",
    safetyDescription:
      "The experience feels calm and human, while still making safety easy to understand at a glance.",
    safetyCards: [
      {
        title: "Moderation is visible upfront.",
        text: "Guidelines and room tone appear as part of the welcome.",
      },
      {
        title: "Pseudonyms reduce pressure.",
        text: "People can stay present without giving away more than they want to.",
      },
      {
        title: "Concerns have a clear route.",
        text: "Trust feels more credible when safety actions are easy to find.",
      },
      {
        title: "Peer support is framed well.",
        text: "Support remains about shared experience or calm support, not medical advice.",
      },
    ],
    steadierTitle:
      "When someone needs a steadier rhythm, the next step can feel smaller and more supported.",
    steadierText:
      "Small group formats add continuity without feeling overly narrow.",
    steadierPoints: [
      "A calmer format with clear pacing, light structure, and gentle room edges.",
      "Guided by facilitators to keep tone steady and conversations dependable.",
      "People can listen or share at their own pace.",
    ],
    finalTitle: "Take a gentle next step without rushing the decision.",
    finalText:
      "Get updates, early invitation, and programme openings with no pressure to join right away.",
    finalPrimary: "Join the waitlist",
    finalSecondary: "Read about safety",
    sideTitle: "The first step stays gentle",
    sideCards: [
      "Choose what to explore first.",
      "Learn private, pseudonymous, and programme-supported paths.",
      "Move forward without hurry.",
    ],
  },
  id: {
    eyebrow: "Pengantar yang hangat menuju ruang dukungan komunitas",
    title: "Cara yang lebih lembut untuk menemukan orang, ritme, dan dukungan yang terasa pas.",
    description:
      "Temukan ruang yang dimoderasi, ritme yang lebih tenang, dan langkah berikutnya yang lebih terarah lewat pengalaman pertama yang hangat, terstruktur, dan mudah dimasuki.",
    ctaPrimary: "Gabung Sandar",
    ctaSecondary: "Lihat cara kerja",
    bullets: [
      "Masuk ke ruang dukungan dengan ritme yang hangat",
      "Partisipasi terstruktur dengan batas yang jelas",
      "Dirancang untuk dewasa 18+",
    ],
    promiseTitle:
      "Sambutannya tetap hangat, tetapi batas-batasnya tidak hilang.",
    promiseCards: [
      {
        title: "Sandar hadir sejak awal.",
        text: "Orang bisa memahami cara kerja ruang sebelum bergabung.",
      },
      {
        title: "Privasi tetap bisa jadi bagian proses.",
        text: "Alurnya lebih lembut, dengan ruang untuk memakai nama samaran bila perlu.",
      },
      {
        title: "Dukungan sebaya dibingkai dengan hati-hati.",
        text: "Bahasanya hangat, tetapi tetap jelas tentang apa itu Sandar dan apa yang bukan.",
      },
    ],
    howTitle: "Dari pandangan pertama ke langkah pertama.",
    howDescription:
      "Beranda dirancang terasa seperti awal yang dipandu, bukan pintu masuk ke feed sosial yang bising.",
    howCards: [
      "Temukan komunitas yang dibentuk untuk kebutuhan orang dewasa, ritme bersama, dan norma yang lebih jelas.",
      "Lihat nada ruang, isyarat keamanan, dan siapa ruang ini ditujukan sebelum memutuskan.",
      "Membaca dengan tenang, ikut percakapan, atau masuk ke komunitas dan program secara bertahap.",
    ],
    safetyTitle: "Kesan yang ramah. Batas yang jelas.",
    safetyDescription:
      "Pengalaman terasa tenang dan manusiawi, sambil tetap membuat aspek keamanan mudah dipahami sejak awal.",
    safetyCards: [
      {
        title: "Moderasi terlihat sejak awal.",
        text: "Panduan dan nada ruang muncul sebagai bagian dari sambutan.",
      },
      {
        title: "Nama samaran bisa mengurangi tekanan.",
        text: "Orang tetap bisa hadir tanpa harus membuka lebih banyak dari yang mereka mau.",
      },
      {
        title: "Kekhawatiran punya jalur yang jelas.",
        text: "Rasa percaya terasa lebih nyata ketika langkah keamanan mudah ditemukan.",
      },
      {
        title: "Dukungan sebaya dibingkai dengan baik.",
        text: "Dukungan tetap tentang pengalaman bersama dan dukungan yang tenang, bukan nasihat medis.",
      },
    ],
    steadierTitle:
      "Saat seseorang membutuhkan ritme yang lebih stabil, langkah berikutnya bisa terasa lebih kecil dan lebih tertopang.",
    steadierText:
      "Format kelompok kecil menambah kesinambungan tanpa terasa terlalu sempit.",
    steadierPoints: [
      "Format yang lebih tenang dengan ritme jelas, struktur ringan, dan batas ruang yang lembut.",
      "Dipandu fasilitator agar nada ruang tetap stabil dan percakapan lebih terjaga.",
      "Orang bisa mendengar atau berbagi sesuai kecepatannya sendiri.",
    ],
    finalTitle: "Ambil langkah lembut berikutnya tanpa harus terburu-buru.",
    finalText:
      "Dapatkan kabar terbaru, undangan awal, dan pembukaan program tanpa tekanan untuk segera bergabung.",
    finalPrimary: "Gabung daftar tunggu",
    finalSecondary: "Baca soal keamanan",
    sideTitle: "Langkah pertama tetap lembut",
    sideCards: [
      "Pilih apa yang ingin dieksplor lebih dulu.",
      "Pelajari jalur privat, pseudonim, dan dukungan program.",
      "Melangkah tanpa tergesa.",
    ],
  },
} as const;

export default function HomePage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <Container className="py-8 sm:py-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal className="space-y-6">
            <span className="inline-flex rounded-full border border-border bg-white/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted shadow-soft">
              {t.eyebrow}
            </span>
            <h1 className="max-w-xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-tight text-fg sm:text-6xl">
              {t.title}
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
              {t.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/sign-up">
                <Button size="lg">{t.ctaPrimary}</Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="secondary">
                  {t.ctaSecondary}
                </Button>
              </Link>
            </div>
            <div className="grid gap-3 sm:max-w-xl">
              {t.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-border bg-white/70 px-4 py-2 text-sm text-muted shadow-soft"
                >
                  <span className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-primary/70" />
                    <span className="h-2 w-2 rounded-full bg-primary/35" />
                  </span>
                  {bullet}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-border bg-white/70 p-4 shadow-card">
              <div className="absolute inset-y-12 right-0 w-1/3 rounded-l-full bg-primary/10 blur-3xl" />
              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[28px] border border-border bg-surface">
                <Image
                  src="/assets/hero-community-scene.png"
                  alt="Sandar community scene"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-10">
          <Reveal>
            <Card className="overflow-hidden rounded-[32px] p-3 shadow-card">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[320px] overflow-hidden rounded-[26px] border border-border">
                  <Image
                    src="/assets/hero-community-scene.png"
                    alt="Sandar shared support moment"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-5 sm:p-8">
                  <span className="inline-flex w-fit rounded-full border border-border bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                    {locale === "en" ? "A more human first impression" : "Kesan pertama yang lebih manusiawi"}
                  </span>
                  <h2 className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
                    {locale === "en"
                      ? "A visual tone that feels warm, held, and hopeful."
                      : "Tone visual yang terasa hangat, tertopang, dan penuh harapan."}
                  </h2>
                  <p className="text-base leading-7 text-muted">
                    {locale === "en"
                      ? "We can keep adding real supporting imagery like this across the public website, so sections feel less empty and more emotionally grounded."
                      : "Kita bisa terus menambahkan visual pendukung seperti ini di seluruh website publik, agar tiap section terasa lebih terisi dan lebih kuat secara emosional."}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[30px] bg-white/65 p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div className="space-y-3">
                <span className="inline-flex rounded-full border border-border bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {locale === "en"
                    ? "The first step stays warm, but the boundaries stay visible"
                    : "Langkah pertama terasa hangat, dan batasnya tetap terlihat"}
                </span>
                <h2 className="max-w-2xl font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
                  {t.promiseTitle}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {t.promiseCards.map((item) => (
                  <Card
                    key={item.title}
                    variant="glass"
                    className="rounded-[22px] p-5 shadow-soft"
                  >
                    <p className="font-semibold text-fg">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {locale === "en" ? "How it works" : "Cara kerja"}
            </span>
            <h2 className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
              {t.howTitle}
            </h2>
            <p className="text-base leading-7 text-muted">{t.howDescription}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.howCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <Card
                  variant="glass"
                  className="h-full rounded-[24px] p-5 shadow-soft"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-6 text-muted">{item}</p>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="sm:col-span-2">
              <Card className="rounded-[24px] p-5 shadow-soft">
                <p className="text-sm leading-6 text-muted">
                  {locale === "en"
                    ? "Design cues make the landing experience feel held, scenic, and alive, while still making the path through the site simple."
                    : "Isyarat desain membuat pengalaman masuk terasa tertopang, tenang, dan hidup, sambil tetap menjaga jalurnya sederhana."}
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="mt-14">
          <Reveal className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {locale === "en" ? "Safety & support" : "Keamanan & dukungan"}
            </span>
            <h2 className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
              {t.safetyTitle}
            </h2>
            <p className="max-w-3xl text-base leading-7 text-muted">
              {t.safetyDescription}
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.safetyCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <Card className="h-full rounded-[24px] p-5 shadow-soft">
                  <p className="font-semibold text-fg">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              {locale === "en"
                ? "Small-group programmes"
                : "Program kelompok kecil"}
            </span>
            <h2 className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
              {t.steadierTitle}
            </h2>
            <p className="text-base leading-7 text-muted">{t.steadierText}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="rounded-[28px] p-6 shadow-soft">
              <div className="space-y-4">
                {t.steadierPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm leading-6 text-muted">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </section>

        <Reveal className="mt-14">
          <Card className="rounded-[32px] p-6 shadow-card sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  {locale === "en" ? "The next gentle step" : "Langkah lembut berikutnya"}
                </span>
                <h2 className="font-[var(--font-display)] text-3xl leading-tight text-fg sm:text-4xl">
                  {t.finalTitle}
                </h2>
                <p className="max-w-2xl text-base leading-7 text-muted">
                  {t.finalText}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/sign-up">
                    <Button size="lg">{t.finalPrimary}</Button>
                  </Link>
                  <Link href="/safety">
                    <Button variant="secondary" size="lg">
                      {t.finalSecondary}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-3">
                <Card variant="glass" className="rounded-[22px] p-5">
                  <p className="font-semibold text-fg">{t.sideTitle}</p>
                </Card>
                {t.sideCards.map((card) => (
                  <Card key={card} variant="glass" className="rounded-[22px] p-5">
                    <p className="text-sm leading-6 text-muted">{card}</p>
                  </Card>
                ))}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-1 text-sm font-medium text-primary hover:text-primary-600"
                >
                  {locale === "en" ? "Explore Sandar's approach" : "Lihat pendekatan Sandar"}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}
