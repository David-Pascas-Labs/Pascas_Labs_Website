"use client";
import { DefaultSeo } from "next-seo";

export function DefaultSEO() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return (
    <DefaultSeo
      titleTemplate="%s | Pascas Labs"
      defaultTitle="Pascas Labs – KI, Software & Systems"
      description="Wir entwickeln innovative KI-Lösungen, kreative Software und intelligente Systeme."
      openGraph={{
        type: "website",
        locale: "de_DE",
        url: siteUrl,
        siteName: "Pascas Labs",
        images: [{ url: "/og/og-default.png" }],
      }}
      additionalLinkTags={[{ rel: "icon", href: "/favicon.ico" }]}
    />
  );
}
