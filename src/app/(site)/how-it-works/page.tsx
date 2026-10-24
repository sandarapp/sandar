"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, MaskWord } from "@/components/landing/motion";
import { PhotoWithCard } from "@/components/landing/PhotoWithCard";
import { createAccountHref, logInHref } from "@/lib/site";

const copy = {
  id: {
    title: "Minggu pertamamu di Sandar",
    intro: "Kira-kira begini kalau kamu baru daftar hari ini. Nggak ada yang harus buru-buru.",
    days: [
      {
        when: "Hari 1",
        title: "Daftar",
        text: "Pakai email dan kata sandi. Setelah klik tautan di email, ada beberapa pertanyaan singkat: usia, kota, dan topik yang ingin kamu ikuti. Kami nggak tanya soal diagnosis.",
        chips: ["Stres & burnout", "Kesepian", "Kerja & kuliah"],
      },
      {
        when: "Hari 1",
        title: "Lihat ruang yang cocok",
        text: "Sandar menyarankan beberapa ruang dari topik yang kamu pilih, lengkap dengan alasannya.",
        card: { label: "Karena kamu pilih Stres & burnout", name: "Stres Kerja & Burnout" },
      },
      {
        when: "Hari 2",
        title: "Baca dulu",
        text: "Kamu bisa baca isi ruang sebelum memutuskan apa-apa. Banyak orang berhenti di sini untuk sementara, dan itu nggak apa-apa.",
        quote: "Aku kira cuma aku yang kayak gini.",
      },
      {
        when: "Hari 3",
        title: "Gabung ruang",
        text: "Sebelum gabung, kamu lihat aturan ruang dan siapa moderatornya, lalu setuju dengan aturannya.",
        rules: ["Nggak ada saran obat", "Cerita orang lain tetap di sini", "Boleh anonim"],
      },
      {
        when: "Hari 5",
        title: "Kasih reaksi",
        text: "Kalau ada cerita yang terasa dekat, kirim Dukung atau Relate. Orangnya tahu ada yang membaca.",
        reactions: ["Dukung 12", "Relate 7"],
      },
      {
        when: "Nanti",
        title: "Posting dan komentar",
        text: "Belum dibuka. Kami tunggu tim moderasi lengkap dulu. Kamu akan dapat email begitu sudah bisa.",
      },
    ],
    safeTitle: "Kalau ada yang nggak beres",
    safe: [
      "Laporkan postingan atau orang yang bikin nggak nyaman. Laporan masuk ke moderator dan tim keamanan Sandar.",
      "Blokir seseorang, dan kamu nggak akan lihat postingannya lagi.",
      "Tombol \"Butuh bantuan sekarang?\" ada di setiap ruang, isinya nomor layanan darurat resmi.",
    ],
    cta: "Buat akun gratis",
    have: "Sudah punya akun?",
    logIn: "Masuk",
  },
  en: {
    title: "Your first week on Sandar",
    intro: "Roughly what happens if you sign up today. There's no rush.",
    days: [
      {
        when: "Day 1",
        title: "Sign up",
        text: "Use your email and a password. After you click the link we send, there are a few short questions: your age, your city and the topics you'd like to follow. We don't ask about diagnoses.",
        chips: ["Stress & burnout", "Loneliness", "Work & study"],
      },
      {
        when: "Day 1",
        title: "See spaces that fit",
        text: "Sandar suggests a few spaces based on the topics you picked, and tells you why.",
        card: { label: "Because you picked Stress & burnout", name: "Work Stress & Burnout" },
      },
      {
        when: "Day 2",
        title: "Read first",
        text: "You can read a space before deciding anything. Lots of people stay here for a while, and that's okay.",
        quote: "I thought it was just me.",
      },
      {
        when: "Day 3",
        title: "Join a space",
        text: "Before you join, you see the space rules and who moderates it, then agree to the rules.",
        rules: ["No medication advice", "What's shared here stays here", "Anonymous is fine"],
      },
      {
        when: "Day 5",
        title: "React",
        text: "When a story feels close, send Support or Relate. The person knows someone read it.",
        reactions: ["Support 12", "Relate 7"],
      },
      {
        when: "Later",
        title: "Posting and comments",
        text: "Not open yet. We're waiting until the moderation team is complete. You'll get an email when it opens.",
      },
    ],
    safeTitle: "If something feels wrong",
    safe: [
      "Report a post or person that makes you uncomfortable. Reports go to moderators and Sandar's safety team.",
      "Block someone and you won't see their posts again.",
      "Every space has a \"Need help now?\" button with official emergency numbers.",
    ],
    cta: "Create a free account",
    have: "Already have an account?",
    logIn: "Log in",
  },
} as const;

type Day = (typeof copy)["id"]["days"][number] | (typeof copy)["en"]["days"][number];

function Fragment({ day }: { day: Day }) {
  if ("chips" in day)
    return (
      <div className="flex flex-wrap gap-2">
        {day.chips.map((c, i) => (
          <span key={c} className={i === 0 ? "rounded-full bg-primary px-3 py-1.5 text-sm text-white" : "rounded-full border border-border bg-card px-3 py-1.5 text-sm text-fg"}>{c}</span>
        ))}
      </div>
    );
  if ("card" in day)
    return (
      <div className="max-w-sm rounded-2xl border border-border bg-card p-4">
        <p className="text-xs font-semibold text-primary-600">{day.card.label}</p>
        <p className="mt-1 font-display text-lg text-fg">{day.card.name}</p>
      </div>
    );
  if ("quote" in day)
    return (
      <div className="max-w-sm">
        <PhotoWithCard src="/assets/sandar/tea.jpg" aspect="aspect-[3/2]" overlap="-mt-10">
          <p className="rounded-2xl bg-card px-4 py-3 text-[15px] italic text-fg shadow-soft">&ldquo;{day.quote}&rdquo;</p>
        </PhotoWithCard>
      </div>
    );
  if ("rules" in day)
    return (
      <ul className="max-w-sm space-y-1.5 rounded-2xl border border-border bg-card p-4 text-sm text-fg">
        {day.rules.map((r) => <li key={r}>· {r}</li>)}
      </ul>
    );
  if ("reactions" in day)
    return (
      <div className="flex gap-2">
        {day.reactions.map((r, i) => (
          <span key={r} className={i === 0 ? "rounded-full bg-primary px-3 py-1.5 text-sm text-white" : "rounded-full border border-border bg-card px-3 py-1.5 text-sm text-fg"}>{r}</span>
        ))}
      </div>
    );
  return null;
}

export default function HowItWorksPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <Container className="max-w-4xl pb-20 pt-12 sm:pt-20">
        <FadeUp onLoad>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-fg">
            {t.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <MaskWord delay={0.08 * i}>{word}</MaskWord>{" "}
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">{t.intro}</p>
        </FadeUp>
        <FadeUp onLoad delay={0.1} className="relative mt-10 aspect-[2/1] overflow-hidden rounded-[24px]">
          <Image src="/assets/sandar/window.jpg" alt="" fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
        </FadeUp>

        <ol className="mt-14">
          {t.days.map((day, i) => (
            <FadeUp key={day.title} delay={0.05}>
              <li className="grid grid-cols-[72px_1fr] gap-4 sm:grid-cols-[110px_1fr] sm:gap-8">
                <p className="pt-1 text-sm font-semibold text-primary-600">{day.when}</p>
                <div className={i === t.days.length - 1 ? "pb-2" : "border-l border-border pb-12 pl-6 sm:pl-8"}>
                  <div className={i === t.days.length - 1 ? "border-l border-dashed border-border pl-6 sm:pl-8" : ""}>
                    <h2 className="font-display text-2xl text-fg">{day.title}</h2>
                    <p className="mt-2 max-w-xl text-base leading-7 text-muted">{day.text}</p>
                    <div className="mt-4">
                      <Fragment day={day} />
                    </div>
                  </div>
                </div>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp className="mt-16 rounded-[24px] bg-surface p-8">
          <h2 className="font-display text-2xl text-fg">{t.safeTitle}</h2>
          <ul className="mt-4 space-y-3">
            {t.safe.map((s) => (
              <li key={s} className="flex gap-3 text-base leading-7 text-fg">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </FadeUp>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ButtonLink href={createAccountHref} size="lg">{t.cta}</ButtonLink>
          <p className="text-sm text-muted">
            {t.have}{" "}
            <Link href={logInHref} className="font-semibold text-fg underline underline-offset-4">{t.logIn}</Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
