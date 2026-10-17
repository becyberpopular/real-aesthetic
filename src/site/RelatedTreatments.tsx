import type { Lang } from "./lang";
import { CATALOG, RELATED } from "./related-data";
import { SiteLink } from "./SiteLink";

const STRINGS = {
  en: {
    heading: "Complement this protocol",
    subheading: "Treatments curated to pair with what you just read.",
    see_zone: {
      face: "See all face protocols",
      "neck-hands": "See all neck & hands",
      body: "See all body protocols",
      "legs-intimate": "See all legs & intimate",
      wellness: "See all wellness",
    } as Record<string, string>,
    catalog_root: "/procedures/",
  },
  es: {
    heading: "Complementan este protocolo",
    subheading: "Tratamientos curados para combinar con lo que acabas de leer.",
    see_zone: {
      face: "Ver todos los protocolos faciales",
      "neck-hands": "Ver cuello y manos",
      body: "Ver protocolos corporales",
      "legs-intimate": "Ver piernas y zonas íntimas",
      wellness: "Ver bienestar",
    } as Record<string, string>,
    catalog_root: "/tratamientos/",
  },
};

// Slugs that should resolve to a different existing page until their own dedicated page is authored.
const SLUG_ALIASES: Record<string, string> = {
  "pdrn-exosomes-mesotherapy": "pdrn-skin-regeneration",
};

function urlFor(slugEn: string, l: Lang): string | null {
  const item = CATALOG[slugEn];
  if (!item) return null;
  const target = SLUG_ALIASES[slugEn] ?? slugEn;
  const targetItem = CATALOG[target] ?? item;
  return l === "es" ? "/tratamientos/" + targetItem.slug_es + "/" : "/procedures/" + target + "/";
}

// Accepts either an English slug (CATALOG key) or a Spanish one.
function resolveSlug(slug: string): string | null {
  if (CATALOG[slug]) return slug;
  for (const en in CATALOG) if (CATALOG[en]?.slug_es === slug) return en;
  return null;
}

/** Four cards shown before the final CTA on treatment pages: 3 curated treatments + 1 zone catalog link. */
export function RelatedTreatments({ slug, lang }: { slug: string; lang: Lang }) {
  const slugEn = resolveSlug(slug);
  const item = slugEn ? CATALOG[slugEn] : undefined;
  if (!slugEn || !item) return null;
  const T = STRINGS[lang];
  const ctaLabel = lang === "es" ? "Conocer protocolo" : "Discover protocol";
  const related = (RELATED[slugEn] ?? []).slice(0, 3);
  return (
    <section className="rt-section">
      <div className="rt-inner">
        <span className="rt-eyebrow">{lang === "es" ? "Continuemos" : "Continue"}</span>
        <h2 className="rt-h2">{T.heading}</h2>
        <p className="rt-sub">{T.subheading}</p>
        <div className="rt-grid">
          {related.map((s) => {
            const url = urlFor(s, lang);
            const r = CATALOG[s];
            if (!url || !r) return null;
            return (
              <SiteLink className="rt-card" href={url} key={s}>
                <div
                  className="rt-img"
                  style={{ backgroundImage: `url('/img/thumb/${s}.webp')` }}
                />
                <div className="rt-card-body">
                  <h3>{lang === "es" ? r.name_es : r.name_en}</h3>
                  <p>{lang === "es" ? r.tag_es : r.tag_en}</p>
                  <span className="rt-cta">{ctaLabel}</span>
                </div>
              </SiteLink>
            );
          })}
          <SiteLink className="rt-card rt-zone" href={T.catalog_root + "?zone=" + item.zone}>
            <div className="rt-img" />
            <div className="rt-card-body">
              <h3>{T.see_zone[item.zone] ?? (lang === "es" ? "Ver todos" : "See all")}</h3>
              <p>
                {lang === "es"
                  ? "Todos los protocolos relacionados con esta zona."
                  : "Every protocol grouped under this zone."}
              </p>
              <span className="rt-cta">
                {lang === "es" ? "Explorar la zona" : "Browse the zone"} →
              </span>
            </div>
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
