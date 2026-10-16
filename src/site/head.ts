/** Turns a page's SEO data (title, meta, canonical/hreflang links, JSON-LD) into TanStack route head() output. */
export type HeadData = {
  title: string;
  meta: Array<{ name?: string; property?: string; content?: string }>;
  links: Array<{ rel: string; href?: string; hrefLang?: string }>;
  jsonLd: unknown[];
  preloadImages?: string[];
};

type Extra = { stylesheets?: string[] };

export function pageHead(h: HeadData, extra: Extra = {}) {
  return {
    meta: [
      { title: h.title },
      ...h.meta.map((m) =>
        m.name
          ? { name: m.name, content: m.content ?? "" }
          : { property: m.property ?? "", content: m.content ?? "" },
      ),
    ],
    links: [
      ...h.links.map((l) => ({
        rel: l.rel,
        href: l.href ?? "",
        ...(l.hrefLang ? { hrefLang: l.hrefLang } : {}),
      })),
      ...(h.preloadImages ?? []).map((href) => ({ rel: "preload", as: "image", href })),
      ...(extra.stylesheets ?? []).map((href) => ({ rel: "stylesheet", href })),
    ],
    scripts: h.jsonLd.map((j) => ({ type: "application/ld+json", children: JSON.stringify(j) })),
  };
}
