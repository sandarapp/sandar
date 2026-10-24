import type { Metadata, Viewport } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { colors } from "@/design/tokens";
import { siteUrl } from "@/lib/site";

const fontSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Noto_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sandar",
    template: "%s • Sandar",
  },
  description:
    "Adult peer-support communities in Indonesia. Find a space that fits, take part at your own pace. Not an emergency service.",
  applicationName: "Sandar",
  keywords: [
    "community",
    "support",
    "mental health",
    "peer support",
    "safety",
    "belonging",
  ],
  openGraph: {
    title: "Sandar",
    description:
      "A supportive space for today and tomorrow. Real people, real support, brighter days ahead.",
    images: [{ url: "/assets/sandar-logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandar",
    description:
      "A supportive space for today and tomorrow. Real people, real support, brighter days ahead.",
    images: ["/assets/sandar-logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: colors.bg,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg selection:bg-primary-200 selection:text-fg">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
