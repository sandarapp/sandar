"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createClient } from "@/lib/supabase/client";

const copy = {
  en: {
    back: "Back",
    badge: "Member sign in",
    title:
      "Return to the calm, focused space where Sandar conversations continue.",
    description:
      "Pick up your upcoming programmes, partnership notes, and member invitations in a calm workspace designed to feel considered from the first click.",
    leftBottomTitle: "Evening salon access",
    leftBottomText:
      "Your member space keeps invitations, updates, and shared context close at hand.",
    rightTop: "Returning users",
    formTitle: "Sign in to continue",
    formText:
      "Use the email connected to your Sandar membership, event registration, or partner profile.",
    email: "Email address",
    password: "Password",
    remember: "Remember me on this device",
    forgot: "Forgot password?",
    submit: "Sign in",
    loading: "Signing in…",
    noteTitle: "A reassuring detail",
    noteText:
      "Your account helps keep member conversations, invitations, and programme details private, secure, and easy to return to.",
    footerLead: "New to Sandar and ready to join the conversation?",
    footerLink: "Create an account",
  },
  id: {
    back: "Kembali",
    badge: "Masuk member",
    title:
      "Kembali ke ruang yang tenang dan fokus, tempat percakapan Sandar berlanjut.",
    description:
      "Lanjutkan program, catatan kemitraan, dan undangan membermu di ruang kerja yang tenang dan terasa dipikirkan sejak klik pertama.",
    leftBottomTitle: "Akses evening salon",
    leftBottomText:
      "Ruang membermu menyimpan undangan, update, dan konteks bersama agar tetap dekat.",
    rightTop: "Pengguna kembali",
    formTitle: "Masuk untuk melanjutkan",
    formText:
      "Gunakan email yang terhubung dengan membership Sandar, pendaftaran event, atau profil mitramu.",
    email: "Alamat email",
    password: "Kata sandi",
    remember: "Ingat saya di perangkat ini",
    forgot: "Lupa kata sandi?",
    submit: "Masuk",
    loading: "Sedang masuk…",
    noteTitle: "Detail yang menenangkan",
    noteText:
      "Akunmu membantu menjaga percakapan member, undangan, dan detail program tetap privat, aman, dan mudah diakses kembali.",
    footerLead: "Baru di Sandar dan siap ikut percakapan?",
    footerLink: "Buat akun",
  },
} as const;

export default function SignInPage() {
  return (
    <Suspense fallback={null}>
      <SignInPageClient />
    </Suspense>
  );
}

function SignInPageClient() {
  const router = useRouter();
  const params = useSearchParams();
  const { locale } = useLocale();
  const t = copy[locale];

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(
    params.get("error") ? decodeURIComponent(params.get("error") as string) : null
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      backLabel={t.back}
      badge={t.badge}
      title={t.title}
      description={t.description}
      rightTopLabel={t.rightTop}
      leftBottom={
        <div className="rounded-[26px] border border-border bg-white/40 p-5">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/65" />
            <div>
              <p className="font-semibold text-fg">{t.leftBottomTitle}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{t.leftBottomText}</p>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-1">
        <p className="font-[var(--font-display)] text-3xl text-fg">{t.formTitle}</p>
        <p className="text-sm leading-6 text-muted">{t.formText}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block text-sm text-muted">
          {t.email}
          <div className="mt-1">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
        </label>

        <label className="block text-sm text-muted">
          {t.password}
          <div className="mt-1">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={
                locale === "en" ? "Enter your password" : "Masukkan kata sandi"
              }
              required
              autoComplete="current-password"
            />
          </div>
        </label>

        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-border accent-primary"
            />
            {t.remember}
          </label>
          <a href="#" className="font-medium text-fg underline">
            {t.forgot}
          </a>
        </div>

        {error ? (
          <p className="rounded-[18px] border border-border bg-surface px-4 py-3 text-sm text-fg">
            {error}
          </p>
        ) : null}

        <Button className="w-full" size="lg" type="submit" disabled={loading}>
          {loading ? t.loading : t.submit}
        </Button>
      </form>

      <div className="rounded-[22px] border border-border bg-surface p-5">
        <p className="font-semibold text-fg">{t.noteTitle}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{t.noteText}</p>
      </div>

      <p className="text-sm text-muted">
        {t.footerLead}{" "}
        <Link className="font-semibold text-fg underline" href="/sign-up">
          {t.footerLink}
        </Link>
      </p>
    </AuthShell>
  );
}
