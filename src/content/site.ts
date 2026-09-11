import type { Locale } from "@/components/i18n/LocaleProvider";

export const siteCopy = {
  en: {
    common: {
      brandTagline: "A supportive space, built with clearer boundaries.",
      signIn: "Sign in",
      joinWaitlist: "Join the waitlist",
      partner: "Partner with Sandar",
      back: "Back",
      language: "Language",
    },
    header: {
      nav: [
        { href: "/", label: "Home" },
        { href: "/how-it-works", label: "How it works" },
        { href: "/safety", label: "Safety & Support" },
        { href: "/for-partners", label: "For partners" },
        { href: "/about", label: "About" },
      ],
    },
    footer: {
      intro:
        "Sandar helps adults find more structured peer support, safer participation, and clearer next steps.",
      product: ["How it works", "Safety & Support", "For partners"],
      company: ["About", "Join the waitlist"],
      copyright: "Made for a gentler way into support.",
    },
  },
  id: {
    common: {
      brandTagline: "Ruang dukungan yang lebih tenang, dengan batas yang lebih jelas.",
      signIn: "Masuk",
      joinWaitlist: "Gabung daftar tunggu",
      partner: "Jadi mitra Sandar",
      back: "Kembali",
      language: "Bahasa",
    },
    header: {
      nav: [
        { href: "/", label: "Beranda" },
        { href: "/how-it-works", label: "Cara kerja" },
        { href: "/safety", label: "Keamanan & dukungan" },
        { href: "/for-partners", label: "Untuk mitra" },
        { href: "/about", label: "Tentang" },
      ],
    },
    footer: {
      intro:
        "Sandar membantu orang dewasa menemukan dukungan sebaya yang lebih terstruktur, partisipasi yang lebih aman, dan langkah selanjutnya yang lebih jelas.",
      product: ["Cara kerja", "Keamanan & dukungan", "Untuk mitra"],
      company: ["Tentang", "Gabung daftar tunggu"],
      copyright: "Dibuat untuk perjalanan dukungan yang lebih lembut.",
    },
  },
} as const;

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}

