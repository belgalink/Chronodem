import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, Check, Eyebrow, GoogleG, Phone, Stars } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { BIZ, LANGS, isLang, t } from "@/content";

const BASE: Record<string, string> = { nl: "diensten", fr: "services" };

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    t(lang).services.items.map((it) => ({ lang, section: BASE[lang], slug: it.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const s = t(lang);
  const item = s.services.items.find((i) => i.slug === slug);
  if (!item) return {};
  return { title: `${item.name} | ${BIZ.legal}`, description: item.teaser };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; section: string; slug: string }>;
}) {
  const { lang, section, slug } = await params;
  if (!isLang(lang) || BASE[lang] !== section) notFound();
  const s = t(lang);
  const item = s.services.items.find((i) => i.slug === slug);
  if (!item) notFound();
  const others = s.services.items.filter((i) => i.slug !== slug);
  const base = `/${lang}/${section}`;

  return (
    <>
      <section className="noise relative overflow-hidden bg-navy-950 pt-[68px] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/14 blur-[130px]" />
        </div>
        <div className="shell relative grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-18">
          <div>
            <Link
              href={`/${lang}#diensten`}
              className="mb-6 inline-flex items-center gap-2 text-[12.5px] font-semibold text-white/45 transition-colors hover:text-white"
            >
              <Arrow className="rotate-180" />
              {s.servicePage.back}
            </Link>
            <Eyebrow tone="light">{item.tagline}</Eyebrow>
            <h1 className="mt-4 max-w-[16ch] text-[2.3rem] sm:text-[3.1rem]">{item.name}</h1>
            <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-white/72">{item.teaser}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={s.nav.quoteHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-rust-500 px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-rust-600"
              >
                {s.hero.ctaPrimary}
                <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={BIZ.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:border-white/45"
              >
                <Phone className="text-blue-400" />
                <span className="tabnum">{BIZ.phonePretty}</span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image src={item.image} alt={item.alt} fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-18 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            {item.body.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 max-w-[66ch] text-[16px] leading-[1.75] text-ink-700">
                {p}
              </p>
            ))}

            <h2 className="mt-12 text-2xl">{s.servicePage.faqTitle}</h2>
            <div className="rule-t mt-5">
              {item.faq.map((f) => (
                <details key={f.q} className="rule-b group">
                  <summary className="flex items-start justify-between gap-5 py-4.5">
                    <h3 className="text-[1.02rem] leading-snug font-semibold text-navy-900">{f.q}</h3>
                    <span className="faq-sign font-display mt-0.5 shrink-0 text-xl leading-none text-rust-500 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="max-w-[60ch] pr-8 pb-5 text-[14.5px] leading-relaxed text-ink-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="noise relative overflow-hidden rounded-md bg-navy-900 p-7 text-white">
              <div className="hatch-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative">
                <p className="eyebrow text-blue-400">{s.servicePage.includedTitle}</p>
                <ul className="mt-5 space-y-3.5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[14.5px] leading-snug text-white/85">
                      <Check className="mt-0.5 shrink-0 text-rust-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="rule-dark-t mt-6 pt-5">
                  <div className="flex items-center gap-3">
                    <GoogleG size={18} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="tabnum text-[14px] font-bold">{String(BIZ.googleRating).replace(".", ",")}</span>
                        <Stars value={BIZ.googleRating} size={11} />
                      </div>
                      <p className="tabnum text-[11px] text-white/45">
                        {BIZ.totalReviews} {s.proof.reviewsWord}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href={s.nav.quoteHref}
                  className="mt-6 flex items-center justify-center gap-2 rounded-sm bg-rust-500 px-4 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-rust-600"
                >
                  {s.nav.cta}
                  <Arrow />
                </Link>
                <p className="mt-3 text-center text-[11.5px] text-white/45">{s.hero.fud.join(" · ")}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand-100 py-18 md:py-24">
        <div className="shell">
          <h2 className="text-2xl sm:text-3xl">{s.servicePage.otherTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal as="article" key={o.slug} delay={i * 70}>
                <Link
                  href={`${base}/${o.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-navy-800/10 bg-white transition-[border-color] hover:border-navy-800/28"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[1.25rem]">{o.name}</h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-700">{o.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold text-navy-800">
                      {s.services.readMore}
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-md bg-navy-900 p-7 text-white sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="text-[1.5rem]">{s.servicePage.ctaTitle}</h3>
              <p className="mt-2 max-w-[48ch] text-[14.5px] text-white/65">{s.servicePage.ctaText}</p>
            </div>
            <Link
              href={s.nav.quoteHref}
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-sm bg-rust-500 px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-rust-600"
            >
              {s.nav.cta}
              <Arrow className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
