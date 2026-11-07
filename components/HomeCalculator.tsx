"use client";
import { useState } from "react";
import { VolumeCalculator, type Counts } from "./VolumeCalculator";
import type { Site } from "@/content";

export function HomeCalculator({ s }: { s: Site }) {
  const [counts, setCounts] = useState<Counts>({});
  return <VolumeCalculator s={s} counts={counts} setCounts={setCounts} ctaHref={s.nav.quoteHref} />;
}
