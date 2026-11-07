import Link from "next/link";
import { Logo } from "./Logo";
import { Phone } from "./Bits";
import { BIZ, type Site } from "@/content";

export function Footer({ s, home, servicesBase }: { s: Site; home: string; servicesBase: string }) {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16 pb-28 text-white/70 md:pb-16">
      <div className="hatch-light pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[30ch] text-[14.5px] leading-relaxed">{s.footer.tagline}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-display tabnum text-3xl font-extrabold text-white">{String(BIZ.googleRating).replace(".", ",")}</span>
              <span className="text-[12.5px] leading-tight">
                {s.proof.google}
                <br />
                <span className="text-white/45">
                  {BIZ.googleCount} {s.proof.reviewsWord}
                </span>
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/40">{s.footer.servicesTitle}</p>
            <ul className="space-y-2.5 text-[14.5px]">
              {s.services.items.map((it) => (
                <li key={it.slug}>
                  <Link href={`${servicesBase}/${it.slug}`} className="transition-colors hover:text-white">
                    {it.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/40">{s.footer.companyTitle}</p>
            <ul className="space-y-2.5 text-[14.5px]">
              {s.footer.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/40">{s.footer.contactTitle}</p>
            <a href={BIZ.phoneHref} className="flex items-center gap-2 text-[17px] font-bold text-white">
              <Phone className="text-blue-400" />
              <span className="tabnum">{BIZ.phonePretty}</span>
            </a>
            <a href={`mailto:${BIZ.email}`} className="mt-2.5 block text-[14.5px] transition-colors hover:text-white">
              {BIZ.email}
            </a>
            <address className="mt-4 text-[14.5px] not-italic leading-relaxed">
              {BIZ.street}
              <br />
              {BIZ.zip} {BIZ.city}
            </address>

            <table className="tabnum mt-5 w-full max-w-[280px] text-[13px]">
              <tbody>
                {s.hours.rows.map(([d, h]) => (
                  <tr key={d} className="border-b border-white/8">
                    <td className="py-1.5 pr-3 text-white/55">{d}</td>
                    <td className="py-1.5 text-right font-semibold text-white/85">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rule-dark-t mt-12 flex flex-col gap-3 pt-6 text-[12.5px] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {BIZ.legal}. {s.footer.rights} · {s.footer.vatLabel} {BIZ.vat}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {s.footer.legal.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white/75">
                {l.label}
              </a>
            ))}
            <Link href={s.other.href} className="transition-colors hover:text-white/75">
              {s.other.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
