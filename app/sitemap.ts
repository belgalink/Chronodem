import type { MetadataRoute } from "next";
import { LANGS, t } from "@/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chronodem.vercel.app";
const SECTION: Record<string, { quote: string; services: string }> = {
  nl: { quote: "offerte", services: "diensten" },
  fr: { quote: "devis", services: "services" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    const s = t(lang);
    const seg = SECTION[lang];
    out.push({ url: `${BASE}/${lang}`, lastModified: now, changeFrequency: "monthly", priority: 1 });
    out.push({ url: `${BASE}/${lang}/${seg.quote}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 });
    for (const item of s.services.items) {
      out.push({
        url: `${BASE}/${lang}/${seg.services}/${item.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return out;
}
