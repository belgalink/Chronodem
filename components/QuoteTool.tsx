"use client";
import { useRef, useState } from "react";
import { VolumeCalculator, type Counts } from "./VolumeCalculator";
import { QuoteForm } from "./QuoteForm";
import { Eyebrow } from "./Bits";
import { ROOMS } from "@/content/volume";
import type { Site } from "@/content";

/** Calculator and form side by side on the quote page, sharing one volume. */
export function QuoteTool({ s }: { s: Site }) {
  const [counts, setCounts] = useState<Counts>({});
  const [volume, setVolume] = useState<number | undefined>(undefined);
  const formRef = useRef<HTMLDivElement>(null);

  const total = ROOMS.reduce(
    (sum, r) => sum + r.items.reduce((a, it) => a + (counts[`${r.id}:${it.id}`] ?? 0) * it.m3, 0),
    0,
  );

  return (
    <>
      <section className="shell pb-16">
        <div className="mb-7 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <Eyebrow>{s.quotePage.step1}</Eyebrow>
          <h2 className="text-2xl md:text-3xl">{s.quotePage.step1Title}</h2>
        </div>
        <VolumeCalculator
          s={s}
          counts={counts}
          setCounts={setCounts}
          onCta={(t) => {
            setVolume(Math.round(t * 100) / 100);
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </section>

      <section ref={formRef} className="shell scroll-mt-24 pb-24">
        <div className="mb-7 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <Eyebrow>{s.quotePage.step2}</Eyebrow>
          <h2 className="text-2xl md:text-3xl">{s.quotePage.step2Title}</h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <QuoteForm s={s} volume={volume ?? (total > 0 ? Math.round(total * 100) / 100 : undefined)} />
        </div>
      </section>
    </>
  );
}
