/**
 * Treatment pages content. One JSON file per page and language:
 *   src/content/treatments/en/<english-slug>.json  →  /procedures/<english-slug>/
 *   src/content/treatments/es/<spanish-slug>.json  →  /tratamientos/<spanish-slug>/
 * Text fields may contain simple inline HTML (<em>, <strong>, <a>) exactly as on the original site.
 */
import type { HeadData } from "@/site/head";
import type { Lang } from "@/site/lang";

export type Anchor = {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};
export type CtaData = { cta?: Anchor; multi?: { label: string; buttons: Anchor[] } };
export type Block = {
  className: string;
  eyebrow: string;
  eyebrowStyle?: string;
  title: string;
  listClass?: string;
  list?: string[];
  faq?: Array<{ q: string; a?: string }>;
  text?: string[];
};
export type BottomBarItem = Anchor & { icon: string };

export type Treatment = {
  lang: Lang;
  slug: string;
  path: string;
  cssFamily: string;
  heroImage?: string;
  ctaImage?: string;
  head: HeadData;
  langSwitcher: {
    ariaLabel?: string;
    links: Array<{ label: string; href: string; active: boolean }>;
    separator: string;
  };
  navCta: string;
  hero: { pretitle: string; title: string; lede: string } & CtaData;
  blocks: Block[];
  ctaStrip: { eyebrow: string; eyebrowStyle?: string; title: string; text: string } & CtaData;
  bottomBar: { ariaLabel?: string; items: BottomBarItem[] };
};

const files = import.meta.glob<Treatment>("./*/*.json", { import: "default" });

export async function loadTreatment(lang: Lang, slug: string): Promise<Treatment | null> {
  const load = files[`./${lang}/${slug}.json`];
  return load ? await load() : null;
}
