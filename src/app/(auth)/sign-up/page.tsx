"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { absoluteUrl } from "@/lib/site";
import { createClient } from "@/lib/supabase/client";

const copy = {
  en: {
    back: "Back",
    badge: "Adults 18+ entry",
    title: "Create your account and join carefully structured support.",
    description:
      "Sandar offers a calmer way in: thoughtful peer spaces, clear boundaries, and optional structure when you want support that feels more guided than a public feed.",
    highlights: [
      "Warm, deliberate onboarding for adults seeking steadier support",
      "You can choose a display name or pseudonym before participating",
    ],
    rightTop: "Create account",
    formTitle: "A quiet first step into Sandar",
    formText:
      "Tell us how you would like to be known and we will guide you into the right kind of support space.",
    fullName: "Full name",
    displayName: "Display name or pseudonym",
    email: "Email address",
    password: "Password",
    age: "I confirm that I am 18 or older.",
    ageHelp:
      "Sandar is designed for adults and is not available to children or teens.",
    boundary: "I understand Sandar sets clear boundaries around support.",
    boundaryHelp:
      "Peer support can complement care, but it is not crisis response or emergency treatment.",
    updates: "Send me thoughtful updates about onboarding and community openings.",
    updatesHelp:
      "Occasional emails only, with a calm pace and clear relevance.",
    submit: "Create my account",
    loading: "Creating account…",
    supportTitle: "Support with clearer edges",
    supportText:
      "We make room for warmth, but we also explain what Sandar can and cannot hold so adults can enter with more confidence.",
    supportPoints: [
      "Structured welcome",
      "Clear boundaries",
      "Adults 18+",
    ],
    footer: "Already have an account?",
    signIn: "Sign in",
  },
  id: {
    back: "Kembali",
    badge: "Pintu masuk dewasa 18+",
    title: "Buat akunmu dan masuk ke ruang dukungan yang terstruktur dengan hati-hati.",
    description:
      "Sandar menawarkan cara masuk yang lebih tenang: ruang peer support yang lebih dipikirkan, batas yang jelas, dan struktur opsional saat kamu menginginkan dukungan yang lebih terpandu dibanding feed publik.",
    highlights: [
      "Onboarding yang hangat dan sengaja dibuat untuk orang dewasa yang mencari dukungan lebih stabil",
      "Kamu bisa memilih nama tampilan atau pseudonim sebelum berpartisipasi",
    ],
    rightTop: "Buat akun",
    formTitle: "Langkah pertama yang tenang ke Sandar",
    formText:
      "Beri tahu kami bagaimana kamu ingin dikenali dan kami akan membantu mengarahkannya ke ruang dukungan yang tepat.",
    fullName: "Nama lengkap",
    displayName: "Nama tampilan atau pseudonim",
    email: "Alamat email",
    password: "Kata sandi",
    age: "Saya mengonfirmasi bahwa umur saya 18 tahun atau lebih.",
    ageHelp:
      "Sandar dirancang untuk orang dewasa dan tidak tersedia untuk anak-anak atau remaja.",
    boundary: "Saya memahami bahwa Sandar punya batas yang jelas dalam dukungan.",
    boundaryHelp:
      "Peer support dapat melengkapi care, tetapi bukan respons krisis atau penanganan darurat.",
    updates: "Kirimkan update seperlunya tentang onboarding dan pembukaan komunitas.",
    updatesHelp: "Email sesekali saja, dengan ritme yang tenang dan relevansi yang jelas.",
    submit: "Buat akun saya",
    loading: "Sedang membuat akun…",
    supportTitle: "Dukungan dengan batas yang lebih jelas",
    supportText:
      "Kami memberi ruang untuk kehangatan, tetapi juga menjelaskan dengan jelas apa yang bisa dan tidak bisa ditampung Sandar.",
    supportPoints: ["Sambutan terstruktur", "Batas yang jelas", "Dewasa 18+"],
    footer: "Sudah punya akun?",
    signIn: "Masuk",
  },
} as const;

export default function SignUpPage() {
  const router = useRouter();
  const { locale } = useLocale();
  const t = copy[locale];

  const [fullName, setFullName] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [ageConfirmed, setAgeConfirmed] = React.useState(false);
  const [understandsBoundary, setUnderstandsBoundary] = React.useState(false);
  const [wantsUpdates, setWantsUpdates] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!ageConfirmed || !understandsBoundary) {
      setError(
        locale === "en"
          ? "Please confirm the required statements before continuing."
          : "Konfirmasi pernyataan yang wajib sebelum melanjutkan."
      );
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();
      const redirectTo = absoluteUrl("/auth/callback/?next=/");

      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectTo,
          data: {
            full_name: fullName,
            display_name: displayName,
            wants_updates: wantsUpdates,
          },
        },
      });

      if (signUpError) throw signUpError;

      router.push(`/verify-email?email=${encodeURIComponent(email)}`);
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
      highlights={t.highlights}
      rightTopLabel={t.rightTop}
      lowerPanel={
        <div className="rounded-[28px] border border-border bg-white/70 p-6 shadow-soft">
          <p className="font-[var(--font-display)] text-3xl leading-tight text-fg">
            {t.supportTitle}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">{t.supportText}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {t.supportPoints.map((point) => (
              <div
                key={point}
                className="rounded-[18px] border border-border bg-surface px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.12em] text-muted"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      }
      footer={
        <>
          {t.footer}{" "}
          <Link className="font-semibold text-fg underline" href="/sign-in">
            {t.signIn}
          </Link>
        </>
      }
    >
      <div className="space-y-1">
        <p className="font-[var(--font-display)] text-3xl text-fg">{t.formTitle}</p>
        <p className="text-sm leading-6 text-muted">{t.formText}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted">
            {t.fullName}
            <div className="mt-1">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={locale === "en" ? "Alya Rahman" : "Alya Rahman"}
                required
              />
            </div>
          </label>
          <label className="block text-sm text-muted">
            {t.displayName}
            <div className="mt-1">
              <Input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder={
                  locale === "en" ? "Alya R. or Morning Tide" : "Alya R. atau Morning Tide"
                }
              />
            </div>
          </label>
        </div>

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
                locale === "en"
                  ? "Create a secure password"
                  : "Buat kata sandi yang aman"
              }
              required
              minLength={8}
              autoComplete="new-password"
            />
          </div>
        </label>

        <div className="space-y-3">
          {[
            {
              checked: ageConfirmed,
              onChange: setAgeConfirmed,
              label: t.age,
              help: t.ageHelp,
            },
            {
              checked: understandsBoundary,
              onChange: setUnderstandsBoundary,
              label: t.boundary,
              help: t.boundaryHelp,
            },
            {
              checked: wantsUpdates,
              onChange: setWantsUpdates,
              label: t.updates,
              help: t.updatesHelp,
            },
          ].map((item) => (
            <label
              key={item.label}
              className="flex items-start gap-3 rounded-[18px] border border-border bg-white/55 p-4 text-sm"
            >
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-border accent-primary"
                checked={item.checked}
                onChange={(e) => item.onChange(e.target.checked)}
              />
              <span>
                <span className="font-semibold text-fg">{item.label}</span>
                <span className="mt-1 block leading-6 text-muted">{item.help}</span>
              </span>
            </label>
          ))}
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
    </AuthShell>
  );
}

