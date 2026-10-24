"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleToggle } from "@/components/layout/LocaleToggle";
import { BackButton } from "@/components/navigation/BackButton";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { appUrl } from "@/lib/site";

const copy = {
  en: {
    back: "Back",
    eyebrow: "WELCOME BACK",
    title: "Log in or create your account",
    intro:
      "One Sandar account works for members and for people who run a community. This website doesn't hold accounts, so you sign in on the Sandar web app.",
    memberTitle: "I already have an account",
    memberText: "Read your spaces, react to posts and update your preferences.",
    memberCta: "Log in",
    newTitle: "I'm new here",
    newText: "Create an account in a few minutes. You confirm you're 18+ and choose how you want to take part.",
    newCta: "Create account",
    notOpen: "The Sandar web app opens soon. Please check back in a few days.",
    safety:
      "Sandar is not an emergency service. In an emergency call 119. For emotional crisis support visit Healing119.id or call 119 ext. 8.",
  },
  id: {
    back: "Kembali",
    eyebrow: "SELAMAT DATANG KEMBALI",
    title: "Masuk atau buat akunmu",
    intro:
      "Satu akun Sandar dipakai oleh member dan pengelola komunitas. Website ini tidak menyimpan akun, jadi kamu masuk lewat aplikasi web Sandar.",
    memberTitle: "Saya sudah punya akun",
    memberText: "Baca ruangmu, beri reaksi pada postingan, dan atur preferensimu.",
    memberCta: "Masuk",
    newTitle: "Saya baru di sini",
    newText: "Buat akun dalam beberapa menit. Kamu mengonfirmasi usia 18+ dan memilih cara ikut serta.",
    newCta: "Buat akun",
    notOpen: "Aplikasi web Sandar segera dibuka. Coba lagi dalam beberapa hari.",
    safety:
      "Sandar bukan layanan darurat. Dalam keadaan darurat hubungi 119. Untuk dukungan krisis emosional kunjungi Healing119.id atau hubungi 119 ext. 8.",
  },
} as const;

function Destination({
  title,
  text,
  href,
  cta,
  notOpen,
  primary,
}: {
  title: string;
  text: string;
  href: string | null;
  cta: string;
  notOpen: string;
  primary?: boolean;
}) {
  return (
    <Card className="flex flex-col gap-3 p-6">
      <h2 className="text-2xl text-fg">{title}</h2>
      <p className="text-sm leading-6 text-muted">{text}</p>
      {href ? (
        <a
          href={href}
          className={buttonClasses({ variant: primary ? "primary" : "secondary", className: "mt-auto" })}
        >
          {cta}
        </a>
      ) : (
        <p className="mt-auto rounded-[12px] bg-surface-2 px-4 py-3 text-sm text-primary-600">{notOpen}</p>
      )}
    </Card>
  );
}

export default function SignInPage() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="inline-flex min-h-11 items-center font-display text-3xl text-primary">
          Sandar
        </Link>
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <BackButton fallbackHref="/" label={t.back} />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold tracking-[0.16em] text-primary">{t.eyebrow}</p>
        <h1 className="text-4xl leading-tight text-fg sm:text-5xl">{t.title}</h1>
        <p className="max-w-2xl text-base leading-7 text-muted">{t.intro}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Destination
          title={t.memberTitle}
          text={t.memberText}
          href={appUrl("/login")}
          cta={t.memberCta}
          notOpen={t.notOpen}
        />
        <Destination
          title={t.newTitle}
          text={t.newText}
          href={appUrl("/register")}
          cta={t.newCta}
          notOpen={t.notOpen}
          primary
        />
      </div>

      <p className="rounded-[14px] bg-warning-bg px-4 py-3 text-sm leading-6 text-warning">{t.safety}</p>
    </div>
  );
}
