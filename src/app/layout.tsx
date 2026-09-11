import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandar.example"),
  title: {
    default: "Sandar",
    template: "%s • Sandar",
  },
  description:
    "A supportive space for today and tomorrow. Real people, real support, brighter days ahead.",
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
  themeColor: "#FAF6F1",
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
