import { nl, BIZ, type Site } from "./nl";
import { fr } from "./fr";

export const LANGS = ["nl", "fr"] as const;
export type Lang = (typeof LANGS)[number];

const DICT: Record<Lang, Site> = { nl, fr };

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}
export function t(lang: Lang): Site {
  return DICT[lang];
}
export { BIZ };
export type { Site };
