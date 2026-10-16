/**
 * Treatment listings used by the desktop mega-menu and the mobile menu accordion.
 *
 * To curate which treatments surface at the top of each zone: edit ZONES.
 * To add or rename a slug's Spanish translation: edit TRANSLATE.
 */
import type { Lang } from "./lang";

// EN slug → ES slug map (only those that change between languages).
// Slugs not listed here are identical in both languages (e.g. sculptra).
export const TRANSLATE: Record<string, string> = {
  "full-face-botox": "botox-completo-facial",
  "facial-harmonization": "armonizacion-facial",
  "lip-fillers": "rellenos-de-labios",
  "chin-augmentation": "aumento-de-menton",
  "jawline-contouring": "perfilado-mandibular",
  "skin-boosters": "skinboosters",
  "fotona-skin-resurfacing": "resurfacing-laser-fotona",
  "skin-tightening-fotona": "tensado-piel-fotona",
  "under-eye-rejuvenation": "rejuvenecimiento-ojeras",
  "under-eye-brightening": "aclarado-ojeras",
  "perk-lips-eyes": "perk-labios-ojos",
  "laser-acne-treatment": "tratamiento-laser-acne",
  "acne-scars-laser": "cicatrices-acne-laser",
  "rosacea-laser": "laser-rosacea",
  "melasma-laser": "tratamiento-melasma",
  "pigmentation-sun-damage": "pigmentacion-manchas-sol",
  "telangiectasia-laser": "telangiectasias-laser",
  "prp-laser-combination": "prp-mas-laser",
  "pdrn-skin-regeneration": "regeneracion-piel-pdrn",
  "pdrn-exosomes-mesotherapy": "mesoterapia-pdrn-exosomas",
  "facial-glow-mesotherapy": "mesoterapia-luminosidad-facial",
  "skin-brightening-mesotherapy": "mesoterapia-aclarante",
  "lymphatic-facial-massage": "masaje-linfatico-facial",
  "face-contour-package": "paquete-contorno-facial",
  "skin-tightening-enhancement": "tensado-piel-enhancement",
  "hand-rejuvenation-fotona": "rejuvenecimiento-manos-fotona",
  "hand-rejuvenation-radiesse": "rejuvenecimiento-manos-radiesse",
  "prp-hand-rejuvenation": "prp-rejuvenecimiento-manos",
  "endolaser-small-areas": "endolaser-areas-pequenas",
  "endolaser-medium-areas": "endolaser-areas-medianas",
  "endolaser-large-areas": "endolaser-areas-grandes",
  "localized-fat-reduction": "reduccion-grasa-localizada",
  "body-contouring-mesotherapy": "contorno-corporal-mesoterapia",
  "body-sculpt-package": "paquete-body-sculpt",
  "full-transformation-package": "paquete-transformacion-total",
  "stretch-marks-laser": "estrias-laser",
  "lymphatic-body-massage": "masaje-linfatico-corporal",
  "lymphatic-drainage-enhancement": "drenaje-linfatico-recuperacion",
  "leg-vein-treatment": "varices-piernas-laser",
  "intimate-area-brightening": "aclarado-zona-intima",
  "underarm-thigh-brightening": "aclarado-axilas-ingles",
  "laser-hair-removal": "depilacion-laser",
  "laser-tattoo-removal": "eliminacion-tatuajes-laser",
  "nail-fungus-laser": "hongos-unas-laser",
  "semaglutide-weight-loss": "semaglutida-perdida-peso",
  "tirzepatide-weight-loss": "tirzepatida-perdida-peso",
  "peptide-programs": "programas-peptidos",
};

// Procedures that need a redirect (no dedicated page yet) — show name in
// menu but link goes to the canonical existing page.
export const SLUG_ALIASES: Record<string, string> = {
  "pdrn-exosomes-mesotherapy": "pdrn-skin-regeneration",
};

export type ZoneItem = { slug: string; name_en: string; name_es: string };
export type Zone = {
  key: string;
  label_en: string;
  label_es: string;
  total: number;
  top: ZoneItem[];
};

// 5 zones, each with a curated top list of treatments to surface in the navigation.
export const ZONES: Zone[] = [
  {
    key: "face",
    label_en: "Face & Gaze",
    label_es: "Rostro y mirada",
    total: 32,
    top: [
      { slug: "full-face-botox", name_en: "Full Face Botox", name_es: "Botox completo facial" },
      { slug: "lip-fillers", name_en: "Lip Fillers", name_es: "Rellenos de labios" },
      { slug: "sculptra", name_en: "Sculptra", name_es: "Sculptra" },
      { slug: "radiesse", name_en: "Radiesse", name_es: "Radiesse" },
      { slug: "fotona-4d", name_en: "Fotona 4D", name_es: "Fotona 4D" },
      { slug: "pdrn-exosomes-mesotherapy", name_en: "PDRN + Exosomes", name_es: "PDRN + Exosomas" },
    ],
  },
  {
    key: "neck-hands",
    label_en: "Neck & Hands",
    label_es: "Cuello y manos",
    total: 4,
    top: [
      {
        slug: "skin-tightening-enhancement",
        name_en: "Neck Skin Tightening",
        name_es: "Tensado de cuello",
      },
      { slug: "hand-rejuvenation-fotona", name_en: "Hands — Fotona", name_es: "Manos — Fotona" },
      {
        slug: "hand-rejuvenation-radiesse",
        name_en: "Hands — Radiesse",
        name_es: "Manos — Radiesse",
      },
      { slug: "prp-hand-rejuvenation", name_en: "Hands — PRP", name_es: "Manos — PRP" },
    ],
  },
  {
    key: "body",
    label_en: "Body & Abdomen",
    label_es: "Cuerpo y abdomen",
    total: 11,
    top: [
      {
        slug: "endolaser-small-areas",
        name_en: "Endolaser — Small",
        name_es: "Endoláser — pequeñas",
      },
      {
        slug: "endolaser-medium-areas",
        name_en: "Endolaser — Medium",
        name_es: "Endoláser — medianas",
      },
      {
        slug: "endolaser-large-areas",
        name_en: "Endolaser — Large",
        name_es: "Endoláser — grandes",
      },
      {
        slug: "localized-fat-reduction",
        name_en: "Localized Fat Reduction",
        name_es: "Reducción grasa localizada",
      },
      {
        slug: "body-sculpt-package",
        name_en: "Body Sculpt Package",
        name_es: "Paquete body sculpt",
      },
      {
        slug: "full-transformation-package",
        name_en: "Full Transformation",
        name_es: "Transformación total",
      },
    ],
  },
  {
    key: "legs-intimate",
    label_en: "Legs & Intimate",
    label_es: "Piernas e íntimas",
    total: 6,
    top: [
      { slug: "leg-vein-treatment", name_en: "Leg & Varicose Veins", name_es: "Várices y arañas" },
      { slug: "laser-hair-removal", name_en: "Laser Hair Removal", name_es: "Depilación láser" },
      { slug: "laser-tattoo-removal", name_en: "Tattoo Removal", name_es: "Eliminación tatuajes" },
      {
        slug: "intimate-area-brightening",
        name_en: "Intimate Brightening",
        name_es: "Aclarado zona íntima",
      },
      {
        slug: "underarm-thigh-brightening",
        name_en: "Underarm & Thigh",
        name_es: "Aclarado axilas e ingles",
      },
      { slug: "nail-fungus-laser", name_en: "Nail Fungus Laser", name_es: "Hongos en uñas" },
    ],
  },
  {
    key: "wellness",
    label_en: "Wellness",
    label_es: "Bienestar",
    total: 3,
    top: [
      { slug: "semaglutide-weight-loss", name_en: "Semaglutide", name_es: "Semaglutida" },
      { slug: "tirzepatide-weight-loss", name_en: "Tirzepatide", name_es: "Tirzepatida" },
      { slug: "peptide-programs", name_en: "Peptide Programs", name_es: "Programas de péptidos" },
    ],
  },
];

export const STRINGS = {
  en: { menu_label: "Treatments", see_all: "See all", browse_zone: "View this zone" },
  es: { menu_label: "Tratamientos", see_all: "Ver todos", browse_zone: "Explorar zona" },
} as const;

// Resolve treatment URL accounting for redirect aliases and language.
export function urlFor(slug: string, lang: Lang): string {
  const target = SLUG_ALIASES[slug] ?? slug;
  if (lang === "es") return "/tratamientos/" + (TRANSLATE[target] ?? target) + "/";
  return "/procedures/" + target + "/";
}

export function zoneUrl(zoneKey: string, lang: Lang): string {
  return (lang === "es" ? "/tratamientos/" : "/procedures/") + "?zone=" + zoneKey;
}

export const nameFor = (item: ZoneItem, lang: Lang) =>
  lang === "es" ? item.name_es : item.name_en;
export const zoneLabel = (z: Zone, lang: Lang) => (lang === "es" ? z.label_es : z.label_en);
