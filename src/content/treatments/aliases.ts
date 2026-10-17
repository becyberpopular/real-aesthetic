import type { Lang } from "@/site/lang";

/**
 * Short, commonly typed or searched treatment URLs that permanently redirect (301) to the real page,
 * e.g. /tratamientos/botox/ → /tratamientos/botox-completo-facial/. Keys and values are slugs.
 */
export const TREATMENT_ALIASES: Record<Lang, Record<string, string>> = {
  es: {
    botox: "botox-completo-facial",
    endolaser: "endolaser-areas-pequenas",
    endolift: "endolaser-areas-pequenas",
    fotona: "fotona-4d",
    rellenos: "armonizacion-facial",
    "rellenos-faciales": "armonizacion-facial",
    labios: "rellenos-de-labios",
    "relleno-de-labios": "rellenos-de-labios",
    semaglutida: "semaglutida-perdida-peso",
    "perdida-de-peso": "semaglutida-perdida-peso",
    tirzepatida: "tirzepatida-perdida-peso",
    depilacion: "depilacion-laser",
    "drenaje-linfatico": "masaje-linfatico-corporal",
    "masaje-linfatico": "masaje-linfatico-corporal",
    pdrn: "regeneracion-piel-pdrn",
    exosomas: "facial-regenerativo-exosomas",
  },
  en: {
    botox: "full-face-botox",
    endolaser: "endolaser-small-areas",
    endolift: "endolaser-small-areas",
    fotona: "fotona-4d",
    fillers: "facial-harmonization",
    "dermal-fillers": "facial-harmonization",
    "lip-filler": "lip-fillers",
    semaglutide: "semaglutide-weight-loss",
    "weight-loss": "semaglutide-weight-loss",
    tirzepatide: "tirzepatide-weight-loss",
    "lymphatic-drainage": "lymphatic-body-massage",
    "lymphatic-massage": "lymphatic-body-massage",
    pdrn: "pdrn-skin-regeneration",
    exosomes: "advanced-regenerative-facial-exosomes",
  },
};
