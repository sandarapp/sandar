"use client";

import * as React from "react";
import Image from "next/image";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, MaskWord } from "@/components/landing/motion";
import { contactEmail, createAccountHref } from "@/lib/site";

const copy = {
  id: {
    title: "Kenapa ada Sandar",
    letter: [
      "Banyak orang tahu mereka butuh teman bicara, tapi nggak tahu harus ke mana. Kelompok dukungan sebenarnya ada, cuma tersebar di grup WhatsApp, poster di kampus, atau cerita dari teman. Susah tahu mana yang aman, dan mana yang masih aktif.",
      "Sandar mengumpulkan kelompok-kelompok itu di satu tempat. Sebelum gabung, kamu bisa lihat ruang itu untuk siapa, apa aturannya, dan siapa yang menjaganya.",
      "Kami bukan psikolog dan Sandar bukan terapi. Yang kami bangun adalah tempat untuk saling dengar, dengan orang-orang yang dilatih untuk menjaga supaya tetap aman.",
    ],
    sign: "Tim Sandar",
    keepTitle: "Yang kami pegang",
    keep: [
      { t: "Nggak tanya diagnosis.", d: "Kamu memilih topik, bukan label." },
      { t: "Data kamu nggak dijual.", d: "Kami simpan seperlunya. Detailnya ada di Kebijakan Privasi." },
      { t: "Setiap ruang ada yang jaga.", d: "Makanya posting baru dibuka setelah tim moderasi lengkap." },
      { t: "Terus terang soal yang belum siap.", d: "Kalau sebuah fitur belum ada, kami bilang belum ada." },
    ],
    contactTitle: "Mau ngobrol dengan kami?",
    contact: "Kirim email, kami baca semuanya.",
    cta: "Buat akun gratis",
  },
  en: {
    title: "Why Sandar exists",
    letter: [
      "A lot of people know they need someone to talk to, but not where to go. Support groups exist, they're just scattered across WhatsApp groups, campus posters and word of mouth. It's hard to tell which ones are safe, or even still active.",
      "Sandar brings those groups into one place. Before you join, you can see who a space is for, what its rules are and who looks after it.",
      "We aren't psychologists and Sandar isn't therapy. What we're building is a place to listen to each other, with people trained to keep it safe.",
    ],
    sign: "The Sandar team",
    keepTitle: "What we hold ourselves to",
    keep: [
      { t: "We don't ask for diagnoses.", d: "You pick topics, not labels." },
      { t: "We don't sell your data.", d: "We keep only what we need. The Privacy Notice has the details." },
      { t: "Every space has someone looking after it.", d: "That's why posting opens only once the moderation team is complete." },
      { t: "We're upfront about what isn't ready.", d: "If a feature isn't there yet, we say so." },
    ],
    contactTitle: "Want to talk to us?",
    contact: "Send us an email. We read all of them.",
    cta: "Create a free account",
  },
} as const;

export default function AboutPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <Container className="max-w-3xl pb-20 pt-12 sm:pt-20">
        <FadeUp onLoad>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-fg">
            {t.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <MaskWord delay={0.08 * i}>{word}</MaskWord>{" "}
              </React.Fragment>
            ))}
          </h1>
        </FadeUp>
        <FadeUp onLoad delay={0.1} className="mt-8 space-y-5">
          {t.letter.map((p) => (
            <p key={p} className="text-lg leading-8 text-fg">{p}</p>
          ))}
          <p className="pt-2 font-semibold text-muted">{t.sign}</p>
        </FadeUp>

        <FadeUp className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[24px]">
          <Image src="/assets/sandar/circle.jpg" alt="" fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
        </FadeUp>

        <FadeUp className="mt-16">
          <h2 className="font-display text-3xl text-fg">{t.keepTitle}</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {t.keep.map((k) => (
              <div key={k.t} className="grid gap-1 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <dt className="font-semibold text-fg">{k.t}</dt>
                <dd className="text-muted">{k.d}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>

        <FadeUp className="mt-16 flex flex-col gap-6 rounded-[24px] bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-fg">{t.contactTitle}</h2>
            <p className="mt-1 text-muted">
              {t.contact}{" "}
              <a href={`mailto:${contactEmail}`} className="font-semibold text-primary-600 underline underline-offset-4">{contactEmail}</a>
            </p>
          </div>
          <ButtonLink href={createAccountHref}>{t.cta}</ButtonLink>
        </FadeUp>
      </Container>
    </div>
  );
}
