"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";

const copy = {
  en: {
    back: "Back to sign in",
    badge: "Email verification",
    title: "Check your email to continue securely.",
    description:
      "We have sent a fresh verification link to your inbox. Open the latest message from Sandar and select “Verify email” to confirm your address and finish signing in.",
    routineTitle: "This step is routine, not urgent.",
    routineText:
      "If it takes a minute to appear, that is completely normal. Feel free to check your promotions or spam folder before trying again.",
    rightTop: "Ready when you are",
    panelTitle: "Your confirmation email is on its way.",
    panelText:
      "Once you open the email, select the secure link inside to return here automatically. We keep the process simple so you can move forward with confidence.",
    status: "Inbox delivery started",
    resend: "Resend email",
    resendLoading: "Sending…",
    change: "Change email address",
    hint:
      "If nothing arrives after a few minutes, try resending once. There is no penalty for stepping away and coming back when it is convenient.",
    success: "Email sent. Please check your inbox.",
  },
  id: {
    back: "Kembali ke masuk",
    badge: "Verifikasi email",
    title: "Periksa emailmu untuk melanjutkan dengan aman.",
    description:
      "Kami sudah mengirim tautan verifikasi baru ke inbox kamu. Buka pesan terbaru dari Sandar dan pilih “Verify email” untuk mengonfirmasi alamatmu lalu menyelesaikan proses masuk.",
    routineTitle: "Langkah ini rutin, bukan mendesak.",
    routineText:
      "Kalau butuh satu-dua menit untuk muncul, itu normal. Silakan cek tab promosi atau folder spam sebelum mencoba lagi.",
    rightTop: "Siap saat kamu siap",
    panelTitle: "Email konfirmasi sedang dikirimkan.",
    panelText:
      "Begitu kamu membuka email itu, pilih tautan aman di dalamnya untuk kembali ke sini secara otomatis. Proses ini kami buat sederhana agar kamu bisa melangkah dengan yakin.",
    status: "Pengiriman ke inbox dimulai",
    resend: "Kirim ulang email",
    resendLoading: "Mengirim…",
    change: "Ubah alamat email",
    hint:
      "Kalau belum ada apa-apa setelah beberapa menit, coba kirim ulang sekali. Tidak masalah jika kamu ingin menjeda lalu kembali lagi nanti.",
    success: "Email terkirim. Silakan cek inbox kamu.",
  },
} as const;

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailPageClient />
    </Suspense>
  );
}

function VerifyEmailPageClient() {
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const { locale } = useLocale();
  const t = copy[locale];

  const [loading, setLoading] = React.useState(false);
  const [notice, setNotice] = React.useState<string | null>(null);

  async function resend() {
    if (!email) return;
    setNotice(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });
      if (error) throw error;
      setNotice(t.success);
    } catch (err) {
      setNotice(err instanceof Error ? err.message : "Unable to resend email.");
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
        <div className="rounded-[26px] border border-border bg-white/45 p-5">
          <p className="font-semibold text-fg">{t.routineTitle}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{t.routineText}</p>
        </div>
      }
    >
      <div className="space-y-1">
        <p className="font-[var(--font-display)] text-3xl text-fg">{t.panelTitle}</p>
        <p className="text-sm leading-6 text-muted">{t.panelText}</p>
      </div>

      <div className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg">
        {t.status}
      </div>

      {email ? (
        <p className="text-sm leading-6 text-muted">
          {locale === "en" ? "Verification link sent to " : "Tautan verifikasi dikirim ke "}
          <span className="font-medium text-fg">{email}</span>.
        </p>
      ) : null}

      {notice ? (
        <p className="rounded-[18px] border border-border bg-surface px-4 py-3 text-sm text-fg">
          {notice}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button onClick={resend} disabled={!email || loading}>
          {loading ? t.resendLoading : t.resend}
        </Button>
        <Link href="/sign-up" className="text-sm font-semibold text-fg underline">
          {t.change}
        </Link>
      </div>

      <p className="border-t border-border pt-5 text-sm leading-6 text-muted">
        {t.hint}
      </p>
    </AuthShell>
  );
}
