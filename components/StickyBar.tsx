"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow, Phone } from "./Bits";
import { BIZ, type Site } from "@/content";

export function StickyBar({ s }: { s: Site }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 px-3 py-2.5" style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}>
        <a
          href={BIZ.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-white/22 py-3 text-sm font-bold text-white"
        >
          <Phone className="text-blue-400" />
          {s.sticky.call}
        </a>
        <Link
          href={s.nav.quoteHref}
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-sm bg-rust-500 py-3 text-sm font-bold text-white"
        >
          {s.sticky.cta}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
