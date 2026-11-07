"use client";
import { useEffect, useId, useState } from "react";
import { Arrow, Check, Phone } from "./Bits";
import { BIZ, type Site } from "@/content";

const field =
  "w-full rounded-sm border border-navy-800/16 bg-white px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none transition-colors placeholder:text-ink-700/40 focus:border-navy-700";
const label = "eyebrow mb-1.5 block text-navy-800/55";

export function QuoteForm({
  s,
  volume,
  tone = "light",
}: {
  s: Site;
  volume?: number;
  tone?: "light" | "dark";
}) {
  const [sent, setSent] = useState(false);
  const [vol, setVol] = useState(volume ? String(volume).replace(".", ",") : "");
  const id = useId();

  useEffect(() => {
    if (volume !== undefined) {
      setVol(volume > 0 ? String(volume).replace(".", ",") : "");
      return;
    }
    const v = new URLSearchParams(window.location.search).get("v");
    if (v) setVol(v.replace(".", ","));
  }, [volume]);

  if (sent) {
    return (
      <div
        className={`flex min-h-[420px] flex-col items-center justify-center rounded-md p-9 text-center ${
          tone === "dark" ? "bg-white/5 text-white" : "border border-navy-800/12 bg-white"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rust-500 text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className={`mt-5 text-2xl ${tone === "dark" ? "text-white" : "text-navy-900"}`}>{s.form.successTitle}</h3>
        <p className={`mt-3 max-w-[38ch] text-[14.5px] ${tone === "dark" ? "text-white/65" : "text-ink-700"}`}>
          {s.form.successText}{" "}
          <a href={BIZ.phoneHref} className="tabnum font-bold text-rust-500">
            {BIZ.phonePretty}
          </a>
          .
        </p>
        <p className="mt-6 text-[11.5px] tracking-wide text-ink-700/50 uppercase">{s.form.demoNote}</p>
      </div>
    );
  }

  return (
    <form
      id="offerte"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`rounded-md p-5 sm:p-7 ${tone === "dark" ? "bg-white" : "border border-navy-800/12 bg-white"}`}
    >
      <p className="eyebrow text-rust-600">{s.form.title}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${id}-n`}>
            {s.form.name}
          </label>
          <input id={`${id}-n`} name="name" required className={field} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-e`}>
            {s.form.email}
          </label>
          <input id={`${id}-e`} name="email" type="email" required className={field} autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-t`}>
            {s.form.phone}
          </label>
          <input id={`${id}-t`} name="phone" type="tel" required className={field} autoComplete="tel" />
        </div>

        <div>
          <label className={label} htmlFor={`${id}-s`}>
            {s.form.service}
          </label>
          <select id={`${id}-s`} name="service" className={field} defaultValue={s.form.serviceOptions[0]}>
            {s.form.serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor={`${id}-v`}>
            {s.form.volume}
          </label>
          <input
            id={`${id}-v`}
            name="volume"
            className={`${field} tabnum`}
            placeholder={s.form.volumePlaceholder}
            value={vol}
            onChange={(e) => setVol(e.target.value)}
          />
        </div>

        <div className="sm:col-span-2 grid gap-4 sm:grid-cols-[1fr_150px]">
          <div>
            <label className={label} htmlFor={`${id}-f`}>
              {s.form.from}
            </label>
            <input id={`${id}-f`} name="from" required className={field} placeholder={s.form.fromPlaceholder} />
          </div>
          <div>
            <label className={label} htmlFor={`${id}-ff`}>
              {s.form.fromFloor}
            </label>
            <select id={`${id}-ff`} name="fromFloor" className={field}>
              {s.form.floors.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:col-span-2 grid gap-4 sm:grid-cols-[1fr_150px]">
          <div>
            <label className={label} htmlFor={`${id}-to`}>
              {s.form.to}
            </label>
            <input id={`${id}-to`} name="to" required className={field} placeholder={s.form.toPlaceholder} />
          </div>
          <div>
            <label className={label} htmlFor={`${id}-tf`}>
              {s.form.toFloor}
            </label>
            <select id={`${id}-tf`} name="toFloor" className={field}>
              {s.form.floors.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor={`${id}-d`}>
            {s.form.date}
          </label>
          <input id={`${id}-d`} name="date" type="date" className={field} />
        </div>
        <div>
          <label className={label} htmlFor={`${id}-l`}>
            {s.form.lift}
          </label>
          <select id={`${id}-l`} name="lift" className={field}>
            {s.form.liftOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${id}-m`}>
            {s.form.message}
          </label>
          <textarea id={`${id}-m`} name="message" rows={3} className={field} placeholder={s.form.messagePlaceholder} />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-rust-500 px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-rust-600"
      >
        {s.form.submit}
        <Arrow />
      </button>

      <p className="mt-3 text-center text-[12.5px] text-ink-700">{s.form.fud}</p>

      <div className="rule-t mt-5 flex items-center justify-center gap-2 pt-5 text-[13.5px]">
        <span className="text-ink-700">{s.closer.orCall}</span>
        <a href={BIZ.phoneHref} className="flex items-center gap-1.5 font-bold text-navy-800">
          <Phone className="text-rust-500" />
          <span className="tabnum">{BIZ.phonePretty}</span>
        </a>
      </div>
    </form>
  );
}
