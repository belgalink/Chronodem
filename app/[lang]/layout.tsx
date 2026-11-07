import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { BIZ, LANGS, isLang, t } from "@/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const s = t(lang);
  return {
    title: s.meta.title,
    description: s.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { "nl-BE": "/nl", "fr-BE": "/fr" },
    },
    openGraph: {
      title: s.meta.title,
      description: s.meta.description,
      locale: s.locale,
      type: "website",
      siteName: BIZ.legal,
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const s = t(lang);
  const home = `/${lang}`;
  const servicesBase = lang === "nl" ? "/nl/diensten" : "/fr/services";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: BIZ.legal,
    url: `https://www.chronodem.be/${lang}`,
    telephone: BIZ.phone,
    email: BIZ.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.street,
      postalCode: BIZ.zip,
      addressLocality: BIZ.city,
      addressCountry: BIZ.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BIZ.lat, longitude: BIZ.lng },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BIZ.googleRating,
      reviewCount: BIZ.googleCount,
      bestRating: 5,
    },
    areaServed: s.zone.regions,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang={lang === "nl" ? "nl-BE" : "fr-BE"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#04152f" />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
        >
          {lang === "nl" ? "Naar de inhoud" : "Aller au contenu"}
        </a>
        <Header s={s} home={home} />
        <main id="main">{children}</main>
        <Footer s={s} home={home} servicesBase={servicesBase} />
        <StickyBar s={s} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
