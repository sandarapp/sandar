import type { Locale } from "@/components/i18n/LocaleProvider";

export const siteCopy = {
  en: {
    common: {
      brandTagline: "Adult peer-support communities. Not an emergency service.",
      signIn: "Log in",
      createAccount: "Create account",
      partner: "Apply as a community",
      back: "Back",
      language: "Language",
    },
    header: {
      nav: [
        { href: "/", label: "Home" },
        { href: "/how-it-works", label: "How it works" },
        { href: "/safety", label: "Safety" },
        { href: "/for-partners", label: "For communities" },
        { href: "/about", label: "About" },
      ],
    },
    footer: {
      intro:
        "Sandar helps adults find peer-support communities, take part at their own pace, and see safety before they join.",
      product: ["How it works", "Safety", "For communities"],
      company: ["About", "Create account"],
      crisis:
        "Sandar is not an emergency service. In an emergency call 119. For emotional crisis support visit Healing119.id or call 119 ext. 8.",
      copyright: "Peer support, not therapy.",
    },
  },
  id: {
    common: {
      brandTagline: "Komunitas dukungan sebaya untuk dewasa. Bukan layanan darurat.",
      signIn: "Masuk",
      createAccount: "Buat akun",
      partner: "Daftar sebagai komunitas",
      back: "Kembali",
      language: "Bahasa",
    },
    header: {
      nav: [
        { href: "/", label: "Beranda" },
        { href: "/how-it-works", label: "Cara kerja" },
        { href: "/safety", label: "Keamanan" },
        { href: "/for-partners", label: "Untuk komunitas" },
        { href: "/about", label: "Tentang" },
      ],
    },
    footer: {
      intro:
        "Sandar membantu orang dewasa menemukan komunitas dukungan sebaya, berpartisipasi sesuai ritmenya, dan melihat aspek keamanan sebelum bergabung.",
      product: ["Cara kerja", "Keamanan", "Untuk komunitas"],
      company: ["Tentang", "Buat akun"],
      crisis:
        "Sandar bukan layanan darurat. Dalam keadaan darurat hubungi 119. Untuk dukungan krisis emosional kunjungi Healing119.id atau hubungi 119 ext. 8.",
      copyright: "Dukungan sebaya, bukan terapi.",
    },
  },
} as const;

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
