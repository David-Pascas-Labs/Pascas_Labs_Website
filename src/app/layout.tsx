import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Removed DefaultSEO to avoid SSR context issues during export. Keep Plausible client-only in pages if needed.
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function safeUrlFromEnv(value: string | undefined): URL | undefined {
  try {
    if (!value || value.trim() === "") return undefined;
    const url = new URL(value);
    if (!(url.protocol === "http:" || url.protocol === "https:"))
      return undefined;
    return url;
  } catch {
    return undefined;
  }
}

export const metadata: Metadata = {
  title: "Pascas Labs – Passion for AI, Software, Creativity & Systems",
  description:
    "Wir entwickeln innovative KI-Lösungen, kreative Software und intelligente Systeme, die Ihr Unternehmen in die Zukunft führen.",
  metadataBase: safeUrlFromEnv(process.env.NEXT_PUBLIC_SITE_URL),
  openGraph: {
    title: "Pascas Labs",
    description:
      "KI, Software & Systems – Innovative Technologielösungen für die digitale Transformation.",
    url: safeUrlFromEnv(process.env.NEXT_PUBLIC_SITE_URL)?.toString(),
    siteName: "Pascas Labs",
    images: [{ url: "/og/og-default.svg" }],
    locale: "de_DE",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-950 text-neutral-200 antialiased`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
