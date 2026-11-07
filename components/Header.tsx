"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Arrow, Phone } from "./Bits";
import { BIZ, type Site } from "@/content";

export function Header({ s, home }: { s: Site; home: string }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-navy-950/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-4">
        <Link href={home} className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {s.nav.items.map((it) => (
            <a
              key={it.href}
              href={`${home}${it.href}`}
              className="text-[13.5px] font-medium text-white/70 transition-colors hover:text-white"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={BIZ.phoneHref}
            className="hidden items-center gap-2 text-[13.5px] font-semibold text-white/85 transition-colors hover:text-white md:flex"
          >
            <Phone className="text-blue-400" />
            <span className="tabnum">{BIZ.phonePretty}</span>
          </a>

          <Link
            href={s.other.href}
            className="rounded-xs border border-white/20 px-2 py-1 text-[11px] font-bold tracking-[0.1em] text-white/65 transition-colors hover:border-white/45 hover:text-white"
          >
            {s.other.label}
          </Link>

          <Link
            href={s.nav.quoteHref}
            className="hidden items-center gap-2 rounded-sm bg-rust-500 px-4 py-2.5 text-[13.5px] font-bold text-white transition-colors hover:bg-rust-600 sm:inline-flex"
          >
            {s.nav.cta}
            <Arrow />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-[1.6px] w-4 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-[1.6px] w-4 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-[1.6px] w-4 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 lg:hidden">
          <div className="shell flex flex-col gap-1 py-5">
            {s.nav.items.map((it) => (
              <a
                key={it.href}
                href={`${home}${it.href}`}
                onClick={() => setOpen(false)}
                className="font-display border-b border-white/8 py-3 text-xl font-bold text-white"
              >
                {it.label}
              </a>
            ))}
            <Link
              href={s.nav.quoteHref}
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-sm bg-rust-500 px-5 py-3.5 font-bold text-white"
            >
              {s.nav.cta} <Arrow />
            </Link>
            <a
              href={BIZ.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3.5 font-semibold text-white"
            >
              <Phone className="text-blue-400" /> <span className="tabnum">{BIZ.phonePretty}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
