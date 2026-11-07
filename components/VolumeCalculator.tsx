"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ROOMS, truckFor } from "@/content/volume";
import { Arrow } from "./Bits";
import type { Site } from "@/content";

export type Counts = Record<string, number>;

const fmt = (n: number) => n.toFixed(2).replace(".", ",");

function Stepper({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        disabled={value === 0}
        aria-label={`${label} −`}
        className="flex h-8 w-8 items-center justify-center rounded-xs border border-navy-800/18 text-navy-800 transition-colors hover:border-navy-800/45 disabled:opacity-25"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <span
        className={`tabnum w-7 text-center text-[15px] font-bold ${value ? "text-navy-800" : "text-navy-800/25"}`}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label={`${label} +`}
        className="flex h-8 w-8 items-center justify-center rounded-xs border border-navy-800/18 text-navy-800 transition-colors hover:border-navy-800/45 hover:bg-navy-800 hover:text-white"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export function VolumeCalculator({
  s,
  counts,
  setCounts,
  ctaHref,
  onCta,
}: {
  s: Site;
  counts: Counts;
  setCounts: (c: Counts) => void;
  ctaHref?: string;
  onCta?: (total: number) => void;
}) {
  const [room, setRoom] = useState(ROOMS[0].id);
  const lang = s.code === "nl" ? "nl" : "fr";

  const { total, picked } = useMemo(() => {
    let total = 0;
    const picked: { key: string; label: string; n: number; m3: number }[] = [];
    for (const r of ROOMS) {
      for (const it of r.items) {
        const key = `${r.id}:${it.id}`;
        const n = counts[key] ?? 0;
        if (n > 0) {
          total += n * it.m3;
          picked.push({ key, label: `${it[lang]} · ${r[lang]}`, n, m3: n * it.m3 });
        }
      }
    }
    return { total: Math.round(total * 100) / 100, picked };
  }, [counts, lang]);

  const active = ROOMS.find((r) => r.id === room) ?? ROOMS[0];
  const truck = truckFor(total);
  const pieces = picked.reduce((a, b) => a + b.n, 0);
  const fill = truck ? Math.min(100, (total / truck.cap) * 100) : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
      {/* picker */}
      <div className="overflow-hidden rounded-md border border-navy-800/12 bg-white">
        <div className="flex flex-wrap gap-1 border-b border-navy-800/10 bg-sand-100 p-2">
          {ROOMS.map((r) => {
            const n = r.items.reduce((a, it) => a + (counts[`${r.id}:${it.id}`] ?? 0), 0);
            const on = r.id === room;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setRoom(r.id)}
                className={`relative shrink-0 rounded-xs px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors ${
                  on ? "bg-navy-800 text-white" : "text-navy-800/65 hover:bg-white hover:text-navy-800"
                }`}
              >
                {r[lang]}
                {n > 0 && (
                  <span
                    className={`tabnum ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      on ? "bg-white/20 text-white" : "bg-rust-500 text-white"
                    }`}
                  >
                    {n}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <ul className="divide-y divide-navy-800/8">
          {active.items.map((it) => {
            const key = `${active.id}:${it.id}`;
            const n = counts[key] ?? 0;
            return (
              <li
                key={key}
                className={`flex items-center justify-between gap-4 px-4 py-2.5 transition-colors sm:px-5 ${
                  n > 0 ? "bg-rust-100/35" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-[14.5px] font-medium text-ink-900">{it[lang]}</p>
                  <p className="tabnum text-[12px] text-ink-700/70">{fmt(it.m3)} m³</p>
                </div>
                <Stepper value={n} onChange={(v) => setCounts({ ...counts, [key]: v })} label={it[lang]} />
              </li>
            );
          })}
        </ul>
      </div>

      {/* result */}
      <div className="lg:sticky lg:top-24">
        <div className="noise relative overflow-hidden rounded-md bg-navy-900 p-6 text-white">
          <div className="hatch-light pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow text-blue-400">{s.calc.totalLabel}</p>
            <p className="font-display tabnum mt-2 text-[56px] leading-[0.9] font-extrabold">
              {fmt(total)}
              <span className="ml-1.5 text-2xl font-bold text-blue-400">m³</span>
            </p>
            <p className="tabnum mt-1 text-[13px] text-white/50">
              {pieces} {s.calc.itemsLabel}
            </p>

            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/12">
              <div
                className="h-full rounded-full bg-rust-500 transition-[width] duration-500"
                style={{ width: `${fill}%` }}
              />
            </div>

            <div className="rule-dark-t mt-5 pt-4">
              <p className="eyebrow text-white/35">{s.calc.truckLabel}</p>
              <p className="mt-1.5 text-[15px] leading-snug font-semibold">
                {truck ? truck[lang] : <span className="font-normal text-white/45">{s.calc.emptyTruck}</span>}
              </p>
            </div>

            {picked.length > 0 && (
              <details className="group mt-4">
                <summary className="flex cursor-pointer items-center justify-between text-[12.5px] font-semibold text-blue-400">
                  {s.calc.summaryTitle}
                  <span className="faq-sign transition-transform">+</span>
                </summary>
                <ul className="tabnum mt-3 max-h-48 space-y-1 overflow-y-auto pr-1 text-[12.5px] text-white/60">
                  {picked.map((p) => (
                    <li key={p.key} className="flex justify-between gap-3">
                      <span className="truncate">
                        {p.n}× {p.label}
                      </span>
                      <span className="shrink-0 text-white/40">{fmt(p.m3)}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {ctaHref ? (
              <Link
                href={total > 0 ? `${ctaHref}?v=${total}` : ctaHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-sm bg-rust-500 px-4 py-3.5 text-center text-[14px] font-bold text-white transition-colors hover:bg-rust-600"
              >
                {s.calc.cta}
                <Arrow />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => onCta?.(total)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-rust-500 px-4 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-rust-600"
              >
                {s.calc.cta}
                <Arrow />
              </button>
            )}

            {picked.length > 0 && (
              <button
                type="button"
                onClick={() => setCounts({})}
                className="mt-2.5 w-full text-[12px] text-white/40 underline-offset-2 transition-colors hover:text-white/70 hover:underline"
              >
                {s.calc.resetLabel}
              </button>
            )}
          </div>
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-700">{s.calc.note}</p>
      </div>
    </div>
  );
}
