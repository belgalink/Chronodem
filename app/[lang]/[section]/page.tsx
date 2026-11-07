import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, Check, Eyebrow, GoogleG, Phone, Stars } from "@/components/Bits";
import { QuoteTool } from "@/components/QuoteTool";
import { BIZ, isLang, t } from "@/content";

const QUOTE: Record<string, string> = { nl: "offerte", fr: "devis" };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(QUOTE).map(([lang, section]) => ({ lang, section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const s = t(lang);
  return { title: `${s.quotePage.title} | ${BIZ.legal}`, description: s.quotePage.intro };
}

export default async function QuotePage({
  params,
}: {
  params: Promise<{ lang: string; section: string }>;
}) {
  const { lang, section } = await params;
  if (!isLang(lang) || QUOTE[lang] !== section) notFound();
  const s = t(lang);

  return (
    <>
      <section className="noise relative overflow-hidden bg-navy-950 pt-[68px] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/3 h-[26rem] w-[26rem] rounded-full bg-navy-700/35 blur-[120px]" />
        </div>
        <div className="shell relative grid gap-9 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-18">
          <div>
            <Eyebrow tone="light">{s.quotePage.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-[18ch] text-[2.3rem] sm:text-[3rem]">{s.quotePage.title}</h1>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-white/70">{s.quotePage.intro}</p>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {s.hero.fud.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[12.5px] text-white/55">
                  <Check className="text-rust-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-white/12 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <GoogleG size={20} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="tabnum text-[15px] font-bold">{String(BIZ.googleRating).replace(".", ",")}</span>
                  <Stars value={BIZ.googleRating} />
                </div>
                <p className="tabnum text-[11.5px] text-white/45">
                  {BIZ.totalReviews} {s.proof.reviewsWord}
                </p>
              </div>
            </div>
            <p className="rule-dark-t mt-5 pt-5 text-[14px] leading-relaxed text-white/70">{s.closer.sub}</p>
            <a
              href={BIZ.phoneHref}
              className="mt-5 flex items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-[14px] font-bold text-white transition-colors hover:border-white/45"
            >
              <Phone className="text-blue-400" />
              <span className="tabnum">{BIZ.phonePretty}</span>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-sand-100 pt-14">
        <QuoteTool s={s} />
        <div className="shell pb-16">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-navy-800/70 transition-colors hover:text-navy-800"
          >
            <Arrow className="rotate-180" />
            {s.quotePage.back}
          </Link>
        </div>
      </div>
    </>
  );
}
