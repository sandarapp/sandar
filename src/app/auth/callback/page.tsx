"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { createClient } from "@/lib/supabase/client";

const copy = {
  en: {
    back: "Back to sign in",
    badge: "Email verification",
    title: "Finishing your sign in.",
    description:
      "We are confirming the secure link from your email. This only takes a moment.",
    panelTitle: "Confirming your account",
    working: "Verifying your link…",
    failed: "We could not confirm that link.",
    expired:
      "The link may have expired or already been used. Request a fresh verification email and try again.",
    signIn: "Return to sign in",
  },
  id: {
    back: "Kembali ke masuk",
    badge: "Verifikasi email",
    title: "Menyelesaikan proses masuk.",
    description:
      "Kami sedang memeriksa tautan aman dari email kamu. Ini hanya butuh sebentar.",
    panelTitle: "Mengonfirmasi akun kamu",
    working: "Memverifikasi tautan…",
    failed: "Kami tidak dapat mengonfirmasi tautan itu.",
    expired:
      "Tautan mungkin sudah kedaluwarsa atau pernah dipakai. Minta email verifikasi baru lalu coba lagi.",
    signIn: "Kembali ke halaman masuk",
  },
} as const;

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={null}>
      <AuthCallbackPageClient />
    </Suspense>
  );
}

function AuthCallbackPageClient() {
  const router = useRouter();
  const params = useSearchParams();
  const { locale } = useLocale();
  const t = copy[locale];

  const [error, setError] = React.useState<string | null>(null);

  const code = params.get("code");
  const linkError = params.get("error_description") ?? params.get("error");
  const nextParam = params.get("next");
  // Only ever follow internal paths back into the app.
  const next = nextParam && nextParam.startsWith("/") ? nextParam : "/";

  React.useEffect(() => {
    let active = true;

    async function run() {
      if (linkError) {
        if (active) setError(linkError);
        return;
      }

      try {
        const supabase = createClient();

        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

          // The browser client also auto-detects the code in the URL, so an
          // error here can simply mean it got there first. Trust the session.
          if (exchangeError) {
            const { data } = await supabase.auth.getSession();
            if (!data.session) throw exchangeError;
          }
        } else {
          const { data } = await supabase.auth.getSession();
          if (!data.session) throw new Error(t.expired);
        }

        if (active) router.replace(next);
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : t.expired);
      }
    }

    void run();

    return () => {
      active = false;
    };
  }, [code, linkError, next, router, t.expired]);

  return (
    <AuthShell
      backLabel={t.back}
      badge={t.badge}
      title={t.title}
      description={t.description}
    >
      <div className="space-y-1">
        <p className="font-[var(--font-display)] text-3xl text-fg">{t.panelTitle}</p>
        <p className="text-sm leading-6 text-muted">
          {error ? t.failed : t.working}
        </p>
      </div>

      {error ? (
        <>
          <p className="rounded-[18px] border border-border bg-surface px-4 py-3 text-sm text-fg">
            {error}
          </p>
          <p className="text-sm leading-6 text-muted">{t.expired}</p>
          <Link href="/sign-in" className="text-sm font-semibold text-fg underline">
            {t.signIn}
          </Link>
        </>
      ) : null}
    </AuthShell>
  );
}
