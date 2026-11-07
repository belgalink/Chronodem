import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Check, Cross, Eyebrow, GoogleG, Phone, SectionIndex, Stars } from "@/components/Bits";
import { Reveal } from "@/components/Reveal";
import { HomeCalculator } from "@/components/HomeCalculator";
import { QuoteForm } from "@/components/QuoteForm";
import { BIZ, isLang, t } from "@/content";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const s = t(lang);
  const servicesBase = lang === "nl" ? "/nl/diensten" : "/fr/services";

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="noise relative overflow-hidden bg-navy-950 pt-[68px] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-navy-700/35 blur-[120px]" />
          <div className="absolute top-1/3 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-600/14 blur-[130px]" />
        </div>

        <div className="shell relative grid gap-8 pt-8 pb-12 sm:pt-12 sm:pb-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-stretch lg:gap-14 lg:pt-16 lg:pb-20">
          <div className="reveal">
            <Eyebrow tone="light">{s.hero.eyebrow}</Eyebrow>

            <h1 className="mt-4 text-[2.05rem] leading-[1.0] sm:text-[3rem] lg:text-[4.1rem]">
              {s.hero.titleTop}
              <br />
              <span className="text-blue-400">{s.hero.titleAccent}</span>
              <br />
              {s.hero.titleBottom}
            </h1>

            <p className="mt-6 max-w-[42rem] text-[15.5px] leading-relaxed text-white/72 sm:text-base">{s.hero.sub}</p>

            {/* two forms of proof, above the fold */}
            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-7">
              <div className="flex items-center gap-3">
                <GoogleG size={21} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="tabnum text-[15px] font-bold">{String(BIZ.googleRating).replace(".", ",")}</span>
                    <Stars value={BIZ.googleRating} />
                  </div>
                  <p className="tabnum text-[11.5px] text-white/45">
                    {BIZ.googleCount} {s.proof.reviewsWord} {s.proof.google}
                  </p>
                </div>
              </div>
              <div className="hidden h-9 w-px bg-white/14 sm:block" />
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="tabnum text-[15px] font-bold">{BIZ.trustRating}</span>
                  <span className="text-[12px] text-white/45">/ 10</span>
                </div>
                <p className="tabnum text-[11.5px] text-white/45">
                  {BIZ.trustCount} {s.proof.reviewsWord} {s.proof.trust}
                </p>
              </div>
              <div className="hidden h-9 w-px bg-white/14 sm:block" />
              <p className="col-span-2 max-w-[18ch] text-[11.5px] leading-snug font-semibold text-rust-400 sm:col-span-1">{s.proof.award}</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={s.nav.quoteHref}
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-rust-500 px-6 py-4 text-center text-[15px] font-bold text-balance text-white transition-colors hover:bg-rust-600"
              >
                {s.hero.ctaPrimary}
                <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <span className="flex items-center justify-center gap-2 whitespace-nowrap text-[14.5px] text-white/55 sm:justify-start">
                {s.hero.ctaSecondary}
                <a href={BIZ.phoneHref} className="tabnum flex items-center gap-1.5 font-bold text-white hover:text-blue-400">
                  <Phone className="text-blue-400" />
                  {BIZ.phonePretty}
                </a>
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {s.hero.fud.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-[12.5px] text-white/55">
                  <Check className="text-rust-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative flex flex-col justify-center" style={{ animationDelay: "140ms" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:min-h-[30rem] lg:flex-1">
              <Image
                src="/images/hero-lift.webp"
                alt={s.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-sm border border-white/12 bg-navy-900/92 px-5 py-4 backdrop-blur-sm sm:left-5">
              <p className="eyebrow text-rust-400">{s.hero.badgeLine1}</p>
              <p className="font-display mt-1 text-xl font-extrabold">{s.hero.badgeLine2}</p>
            </div>
          </div>
        </div>

        {/* stats band */}
        <div className="hatch-light relative border-t border-white/10">
          <div className="shell grid grid-cols-2 divide-x divide-white/8 lg:grid-cols-4">
            {s.bar.map((b, i) => (
              <div key={b.label} className={`px-4 py-6 ${i % 2 === 0 ? "pl-0 lg:pl-4" : ""}`}>
                <p className="font-display tabnum text-3xl leading-none font-extrabold text-white sm:text-4xl">{b.value}</p>
                <p className="mt-2 max-w-[22ch] text-[12.5px] leading-snug text-white/50">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── REVIEWS ───────────────────────── */}
      <section id="beoordelingen" className="scroll-mt-20 bg-sand-50 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[37rem]">
              <Eyebrow>{s.reviews.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.reviews.title}</h2>
            </div>
            <SectionIndex n="01" />
          </div>
          <p className="mt-5 max-w-[46rem] text-[15px] leading-relaxed text-ink-700">{s.reviews.intro}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {s.reviews.items.map((r, i) => (
              <Reveal
                as="article"
                key={r.name}
                delay={(i % 3) * 70}
                className="flex flex-col rounded-md border border-navy-800/10 bg-white p-5 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-navy-800/22"
              >
                <p className="font-display text-[15px] leading-snug font-bold text-navy-800">{r.tag}</p>
                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-700">{r.text}</p>
                <div className="rule-t mt-5 flex items-center justify-between gap-3 pt-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-[13px] font-bold text-white">
                      {r.name.slice(0, 1)}
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-ink-900">{r.name}</p>
                      <p className="text-[11.5px] text-ink-700/65">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Stars value={5} size={11} />
                    <GoogleG size={13} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[70ch] text-[13.5px] text-ink-700 italic">{s.reviews.footnote}</p>
        </div>
      </section>

      {/* ───────────────────────── PAIN / LEDGER ───────────────────────── */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[36rem]">
              <Eyebrow>{s.pain.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.pain.title}</h2>
            </div>
            <SectionIndex n="02" />
          </div>
          <p className="mt-5 max-w-[45rem] text-[15px] leading-relaxed text-ink-700">{s.pain.lead}</p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal className="rounded-md border border-navy-800/10 bg-sand-50 p-6 sm:p-8">
              <p className="eyebrow text-ink-700/55">{s.pain.selfSub}</p>
              <h3 className="mt-2 text-2xl text-ink-900/75">{s.pain.selfTitle}</h3>
              <ul className="mt-6 space-y-3.5">
                {s.pain.selfItems.map((it) => (
                  <li key={it} className="flex gap-3 text-[14.5px] leading-snug text-ink-700">
                    <Cross className="mt-0.5 text-ink-700/40" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90} className="noise relative overflow-hidden rounded-md bg-navy-900 p-6 text-white sm:p-8">
              <div className="hatch-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative">
                <p className="eyebrow text-blue-400">{s.pain.usSub}</p>
                <h3 className="mt-2 text-2xl">{s.pain.usTitle}</h3>
                <ul className="mt-6 space-y-3.5">
                  {s.pain.usItems.map((it) => (
                    <li key={it} className="flex gap-3 text-[14.5px] leading-snug text-white/85">
                      <Check className="mt-0.5 text-rust-400" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <p className="font-quote mt-8 max-w-[44rem] text-xl leading-snug text-navy-800 italic">{s.pain.kicker}</p>
        </div>
      </section>

      {/* ───────────────────────── SERVICES ───────────────────────── */}
      <section id="diensten" className="scroll-mt-20 bg-sand-50 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[36rem]">
              <Eyebrow>{s.services.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.services.title}</h2>
            </div>
            <SectionIndex n="03" />
          </div>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-ink-700">{s.services.intro}</p>

          <Reveal className="relative mt-9 aspect-[21/9] overflow-hidden rounded-md sm:aspect-[21/7]">
            <Image
              src="/images/team.webp"
              alt={s.band.teamAlt}
              fill
              sizes="(max-width: 1240px) 100vw, 1180px"
              className="object-cover object-[50%_42%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />
            <p className="font-display absolute inset-x-0 bottom-0 max-w-[30rem] p-5 text-[1.05rem] leading-snug font-bold text-white sm:p-7 sm:text-[1.35rem]">
              {s.band.teamLine}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {s.services.items.map((it, i) => (
              <Reveal as="article" key={it.slug} delay={(i % 2) * 90}>
                <Link
                  href={`${servicesBase}/${it.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-navy-800/10 bg-white transition-[border-color,box-shadow] hover:border-navy-800/25 hover:shadow-[0_18px_40px_-28px_rgba(11,46,99,.5)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={it.image}
                      alt={it.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 580px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="tabnum absolute top-3 left-3 rounded-xs bg-navy-950/80 px-2 py-1 text-[11px] font-bold tracking-widest text-white/70 backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow text-rust-600">{it.tagline}</p>
                    <h3 className="mt-2.5 text-[1.6rem]">{it.name}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700">{it.teaser}</p>
                    <ul className="mt-5 space-y-2">
                      {it.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-2.5 text-[13.5px] leading-snug text-ink-900/80">
                          <Check className="mt-0.5 text-rust-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-bold text-navy-800">
                      {s.services.readMore}
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── WHAT'S INCLUDED ───────────────────────── */}
      <section className="noise relative overflow-hidden bg-navy-900 pt-20 pb-0 text-white md:pt-28">
        <div className="hatch-light pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="shell relative">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[37rem]">
              <Eyebrow tone="light">{s.included.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.included.title}</h2>
            </div>
            <SectionIndex n="04" tone="light" />
          </div>
          <p className="mt-5 max-w-[45rem] text-[15px] leading-relaxed text-white/60">{s.included.intro}</p>

          <div className="mt-11 grid gap-x-10 gap-y-9 md:grid-cols-3">
            {s.included.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80} className="rule-dark-t pt-6">
                <div className="flex items-baseline gap-3">
                  <span className="tabnum font-display text-lg font-extrabold text-rust-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {g.items.map((x) => (
                    <li key={x} className="flex gap-2.5 text-[14.5px] leading-snug text-white/78">
                      <Check className="mt-0.5 shrink-0 text-blue-400" />
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[48rem] rounded-sm border border-white/12 bg-white/5 px-5 py-4 text-[14px] leading-relaxed text-white/65">
            {s.included.tail}
          </p>
        </div>

        <Reveal className="relative mt-16 aspect-[21/9] w-full overflow-hidden sm:aspect-[21/6]">
          <Image
            src="/images/truck-loaded.webp"
            alt={s.band.truckAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/35 to-navy-950/80" />
          <div className="shell absolute inset-0 flex items-center">
            <p className="font-display max-w-[34rem] text-[1.1rem] leading-snug font-bold text-white sm:text-[1.5rem]">
              {s.band.truckLine}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ───────────────────────── CALCULATOR ───────────────────────── */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[36rem]">
              <Eyebrow>{s.calc.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.calc.title}</h2>
            </div>
            <SectionIndex n="05" />
          </div>
          <p className="mt-5 mb-10 max-w-[47rem] text-[15px] leading-relaxed text-ink-700">{s.calc.intro}</p>
          <HomeCalculator s={s} />
        </div>
      </section>

      {/* ───────────────────────── REAL PHOTOS ───────────────────────── */}
      <section className="bg-sand-50 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[36rem]">
              <Eyebrow>{s.gallery.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.gallery.title}</h2>
            </div>
            <SectionIndex n="06" />
          </div>
          <p className="mt-5 max-w-[42rem] text-[15px] leading-relaxed text-ink-700">{s.gallery.intro}</p>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {s.gallery.items.map((g, i) => (
              <Reveal key={g.src} delay={i * 70} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-sand-200">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-3 text-[12.5px] leading-snug text-ink-700">{g.cap}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── STEPS ───────────────────────── */}
      <section id="werkwijze" className="scroll-mt-20 bg-sand-100 py-20 md:py-28">
        <div className="shell">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-[33rem]">
              <Eyebrow>{s.steps.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[2rem] sm:text-[2.6rem]">{s.steps.title}</h2>
            </div>
            <SectionIndex n="07" />
          </div>

          <div className="mt-11 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <ol className="rule-t">
              {s.steps.items.map((st, i) => (
                <Reveal
                  as="li"
                  key={st.n}
                  delay={i * 70}
                  className="rule-b grid grid-cols-[52px_1fr] gap-x-4 py-6 sm:grid-cols-[80px_1fr] sm:gap-x-6"
                >
                  <span className="font-display tabnum text-[2rem] leading-none font-extrabold text-navy-800/18 sm:text-[2.8rem]">
                    {st.n}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-[1.45rem]">{st.title}</h3>
                    <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-ink-700">{st.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-md lg:sticky lg:top-24">
              <Image
                src="/images/wrap-detail.webp"
                alt={s.gallery.items[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-6">
                <p className="font-quote text-[1.35rem] leading-tight text-white italic">{s.pain.kicker}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── LIFT ───────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[520px]">
            <Image
              src="/images/echt/lift-real.webp"
              alt={s.services.items[2].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/15 to-navy-950" />
          </div>
          <div className="flex items-center px-5 py-16 md:px-10 lg:py-20">
            <div className="max-w-[37rem]">
              <Eyebrow tone="light">{s.lift.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-[1.9rem] sm:text-[2.4rem]">{s.lift.title}</h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">{s.lift.text}</p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {s.lift.points.map((p) => (
                  <li key={p} className="rounded-xs border border-white/18 px-3 py-1.5 text-[12.5px] font-semibold text-white/80">
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`${servicesBase}/${s.services.items[2].slug}`}
                className="group mt-8 inline-flex items-center gap-2.5 rounded-sm bg-rust-500 px-6 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-rust-600"
              >
                {s.lift.cta}
                <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ZONE + PARTNERS ───────────────────────── */}
      <section id="werkgebied" className="scroll-mt-20 bg-sand-50 py-20 md:py-28">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-[33rem]">
                  <Eyebrow>{s.zone.eyebrow}</Eyebrow>
                  <h2 className="mt-4 text-[2rem] sm:text-[2.5rem]">{s.zone.title}</h2>
                </div>
                <SectionIndex n="08" />
              </div>
              <p className="mt-5 max-w-[39rem] text-[15px] leading-relaxed text-ink-700">{s.zone.text}</p>

              <p className="eyebrow mt-8 text-navy-800/50">{s.zone.regionsLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.zone.regions.map((r) => (
                  <li key={r} className="rounded-xs bg-navy-800 px-3 py-1.5 text-[12.5px] font-semibold text-white">
                    {r}
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-7 text-navy-800/50">{s.zone.citiesLabel}</p>
              <p className="mt-2.5 max-w-[48ch] text-[14px] leading-relaxed text-ink-700">{s.zone.cities.join(" · ")}</p>
            </div>

            <Reveal delay={90} className="relative">
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.zone.mapSrc}
                  alt={s.zone.mapAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </Reveal>
          </div>

          <div className="rule-t mt-16 pt-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <Eyebrow>{s.partners.eyebrow}</Eyebrow>
                <h3 className="mt-3 max-w-[22ch] text-[1.6rem] sm:text-[1.9rem]">{s.partners.title}</h3>
                <p className="mt-4 max-w-[36rem] text-[14.5px] leading-relaxed text-ink-700">{s.partners.text}</p>
              </div>
              <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-navy-800/10 sm:grid-cols-4">
                {s.partners.names.map((n) => (
                  <li
                    key={n}
                    className="flex items-center justify-center bg-sand-50 px-3 py-6 text-center text-[13px] font-bold tracking-tight text-navy-800/55"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section id="vragen" className="scroll-mt-20 bg-sand-100 py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-start justify-between gap-6">
              <div>
                <Eyebrow>{s.faq.eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-[26rem] text-[2rem] sm:text-[2.4rem]">{s.faq.title}</h2>
              </div>
              <SectionIndex n="09" />
            </div>
            <a
              href={BIZ.phoneHref}
              className="mt-7 inline-flex items-center gap-2.5 rounded-sm border border-navy-800/20 px-5 py-3 text-[14px] font-bold text-navy-800 transition-colors hover:border-navy-800/50"
            >
              <Phone className="text-rust-500" />
              <span className="tabnum">{BIZ.phonePretty}</span>
            </a>
          </div>

          <div className="rule-t">
            {s.faq.items.map((f) => (
              <details key={f.q} className="rule-b group">
                <summary className="flex items-start justify-between gap-5 py-5">
                  <h3 className="text-[1.05rem] leading-snug font-semibold text-navy-900 sm:text-[1.15rem]">{f.q}</h3>
                  <span className="faq-sign font-display mt-0.5 shrink-0 text-xl leading-none text-rust-500 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="max-w-[46rem] pr-8 pb-6 text-[14.5px] leading-relaxed text-ink-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CLOSER ───────────────────────── */}
      <section id="offerte" className="noise relative scroll-mt-20 overflow-hidden bg-navy-950 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -bottom-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-navy-700/30 blur-[120px]" />
        </div>
        <div className="shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <Eyebrow tone="light">{s.closer.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[2.1rem] sm:text-[2.8rem]">{s.closer.title}</h2>
            <p className="mt-5 max-w-[35rem] text-[15px] leading-relaxed text-white/68">{s.closer.sub}</p>

            <ul className="mt-8 space-y-3">
              {s.closer.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[14.5px] text-white/85">
                  <Check className="mt-0.5 text-rust-400" />
                  {b}
                </li>
              ))}
            </ul>

            <figure className="mt-9 max-w-[42ch] border-l-2 border-rust-500 pl-5">
              <blockquote className="font-quote text-[1.3rem] leading-snug text-white/90 italic">
                “{s.closer.quote}”
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2 text-[12.5px] text-white/45">
                <GoogleG size={13} />
                {s.closer.quoteName}
                <Stars value={5} size={10} />
              </figcaption>
            </figure>
          </div>

          <QuoteForm s={s} tone="dark" />
        </div>
      </section>
    </>
  );
}
