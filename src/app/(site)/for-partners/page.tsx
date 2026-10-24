"use client";

import * as React from "react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp, MaskWord } from "@/components/landing/motion";
import { PhotoWithCard } from "@/components/landing/PhotoWithCard";
import { Thread } from "@/components/landing/Thread";
import { logInHref, registerCommunityHref } from "@/lib/site";

const copy = {
  id: {
    title: "Kamu mengelola kelompok dukungan?",
    intro:
      "Daftarkan di Sandar. Orang yang mencari kelompok seperti punyamu jadi lebih gampang menemukannya, dan kamu nggak menjaga ruangnya sendirian.",
    cta: "Daftarkan komunitas",
    steps: "Lihat caranya",
    small: "Gratis. Kelompok informal juga bisa.",
    thread: {
      space: "Ruang komunitasmu",
      members: "Tampilan pengelola",
      caption: "Contoh. Begini kira-kira saat ada laporan di ruangmu.",
      labels: { support: "Dukung", relate: "Relate", typing: "" },
      messages: [
        { author: "Laporan baru", time: "21.40", text: "Seorang anggota melaporkan postingan yang berisi saran obat." },
        { author: "Tim keamanan Sandar", time: "21.52", text: "Sudah kami tinjau. Postingan disembunyikan dan penulisnya dapat pengingat aturan.", mod: true },
        { author: "Kamu", time: "22.05", text: "Makasih, aku tambahin juga di pengumuman ruang." },
      ],
    },
    whatTitle: "Yang kamu dapat",
    what: [
      { t: "Lebih gampang ditemukan", d: "Ruangmu muncul untuk orang yang memilih topik yang sama." },
      { t: "Ada yang bantu jaga", d: "Laporan sampai juga ke tim keamanan Sandar, bukan cuma ke moderatormu." },
      { t: "Satu halaman yang jelas", d: "Tujuan, aturan, dan moderator terlihat sebelum orang bergabung." },
    ],
    later: "Acara, program, dan pelatihan untuk pendamping menyusul setelah peluncuran.",
    howTitle: "Cara daftar",
    how: [
      { t: "Buat akun", d: "Pilih \"Komunitas\" waktu daftar." },
      { t: "Ceritakan kelompokmu", d: "Untuk siapa, tujuannya apa, dan aturannya." },
      { t: "Kami verifikasi", d: "Kami cek data pengelola dan moderatornya." },
      { t: "Ruangmu tayang", d: "Mulai muncul di halaman Jelajah." },
    ],
    prepTitle: "Siapkan dulu",
    prep: [
      "Nama dan deskripsi singkat kelompokmu",
      "Untuk siapa, dan topik utamanya",
      "Aturan kelompok",
      "Kontak minimal satu moderator",
      "Link media sosial atau website, kalau ada",
    ],
    faqTitle: "Pertanyaan",
    faq: [
      { q: "Ada biayanya?", a: "Nggak. Daftar dan mengelola ruang gratis." },
      { q: "Harus berbadan hukum?", a: "Nggak. Kelompok informal bisa daftar. Yang kami verifikasi adalah orang-orang yang mengelolanya." },
      { q: "Anggota kami bisa posting?", a: "Untuk sekarang anggota bisa membaca dan memberi reaksi. Posting dibuka setelah tim moderasi kami lengkap." },
    ],
    have: "Sudah terdaftar?",
    logIn: "Masuk",
  },
  en: {
    title: "Do you run a support group?",
    intro:
      "Register it on Sandar. People looking for a group like yours can find it more easily, and you don't have to look after the space alone.",
    cta: "Register a community",
    steps: "See how",
    small: "Free. Informal groups welcome.",
    thread: {
      space: "Your community space",
      members: "Admin view",
      caption: "Example. Roughly what you see when someone reports a post in your space.",
      labels: { support: "Support", relate: "Relate", typing: "" },
      messages: [
        { author: "New report", time: "21:40", text: "A member reported a post that gives medication advice." },
        { author: "Sandar safety team", time: "21:52", text: "We've reviewed it. The post is hidden and the author got a reminder about the rules.", mod: true },
        { author: "You", time: "22:05", text: "Thanks, I'll mention it in the space announcement too." },
      ],
    },
    whatTitle: "What you get",
    what: [
      { t: "Easier to find", d: "Your space shows up for people who picked the same topics." },
      { t: "Help looking after it", d: "Reports also reach Sandar's safety team, not only your moderators." },
      { t: "One clear page", d: "Purpose, rules and moderators, visible before anyone joins." },
    ],
    later: "Events, programs and helper training come after launch.",
    howTitle: "How to register",
    how: [
      { t: "Create an account", d: "Choose \"Community\" when you sign up." },
      { t: "Tell us about your group", d: "Who it's for, what it's for, and its rules." },
      { t: "We verify you", d: "We check the people who run it and its moderators." },
      { t: "Your space goes live", d: "It starts showing up in Discover." },
    ],
    prepTitle: "Have these ready",
    prep: [
      "Your group's name and a short description",
      "Who it's for, and its main topics",
      "Your group rules",
      "Contact for at least one moderator",
      "Social media or website link, if you have one",
    ],
    faqTitle: "Questions",
    faq: [
      { q: "Does it cost anything?", a: "No. Registering and running a space is free." },
      { q: "Do we need a legal entity?", a: "No. Informal groups can register. We verify the people who run them." },
      { q: "Can our members post?", a: "For now members can read and react. Posting opens once our moderation team is complete." },
    ],
    have: "Already registered?",
    logIn: "Log in",
  },
} as const;

export default function PartnersPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="bg-bg">
      <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp onLoad>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-tight text-fg">
            {t.title.split(" ").map((word, i) => (
              <React.Fragment key={i}>
                <MaskWord delay={0.08 * i}>{word}</MaskWord>{" "}
              </React.Fragment>
            ))}
          </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">{t.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href={registerCommunityHref} size="lg">{t.cta}</ButtonLink>
              <Link href="#steps" className="inline-flex min-h-11 items-center font-semibold text-fg underline decoration-primary/40 underline-offset-[6px] hover:decoration-primary">
                {t.steps}
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">{t.small}</p>
          </FadeUp>
          <FadeUp onLoad delay={0.15}>
            <PhotoWithCard src="/assets/sandar/circle.jpg" aspect="aspect-[16/10]" overlap="-mt-28" priority revealDelay={0.2}>
              <Thread space={t.thread.space} members={t.thread.members} messages={t.thread.messages} labels={t.thread.labels} />
              <p className="mt-3 text-xs text-muted">{t.thread.caption}</p>
            </PhotoWithCard>
          </FadeUp>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <FadeUp>
            <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.whatTitle}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{t.later}</p>
          </FadeUp>
          <dl className="divide-y divide-border border-y border-border">
            {t.what.map((w) => (
              <FadeUp key={w.t} className="grid gap-1 py-5 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
                <dt className="font-display text-xl text-fg">{w.t}</dt>
                <dd className="text-base leading-7 text-muted">{w.d}</dd>
              </FadeUp>
            ))}
          </dl>
        </Container>
      </section>

      <section id="steps" className="scroll-mt-20 bg-surface py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <FadeUp>
              <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.howTitle}</h2>
            </FadeUp>
            <ol className="mt-8 space-y-6">
              {t.how.map((s, i) => (
                <FadeUp key={s.t}>
                  <li className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-fg">{s.t}</p>
                      <p className="mt-0.5 text-muted">{s.d}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
          <FadeUp delay={0.1}>
            <div className="rounded-[24px] bg-card p-6 sm:p-8">
              <h3 className="font-display text-2xl text-fg">{t.prepTitle}</h3>
              <ul className="mt-5 space-y-3">
                {t.prep.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-6 text-fg">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-primary/50 text-[11px] text-primary" aria-hidden="true">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <ButtonLink href={registerCommunityHref} className="mt-7 w-full">{t.cta}</ButtonLink>
              <p className="mt-3 text-center text-sm text-muted">
                {t.have}{" "}
                <Link href={logInHref} className="font-semibold text-fg underline underline-offset-4">{t.logIn}</Link>
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <FadeUp>
            <h2 className="font-display text-3xl text-fg sm:text-4xl">{t.faqTitle}</h2>
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
    </div>
  );
}
