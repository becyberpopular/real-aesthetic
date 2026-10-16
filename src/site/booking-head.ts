import type { HeadData } from "./head";
import type { Lang } from "./lang";

const SITE = "https://realaestheticmedspa.com";
const COPY = {
  es: {
    path: "/reservar/",
    title: "Reservar cita · Real Aesthetic Medical Spa Miami",
    description:
      "Reserva tu cita en Real Aesthetic Medical Spa, Miami: elige entre todos nuestros tratamientos y agenda directamente en el calendario.",
    locale: "es_US",
    altLocale: "en_US",
  },
  en: {
    path: "/book/",
    title: "Book an appointment · Real Aesthetic Medical Spa Miami",
    description:
      "Book your visit at Real Aesthetic Medical Spa in Miami: choose from all of our treatments and schedule directly in the calendar.",
    locale: "en_US",
    altLocale: "es_US",
  },
};

export function bookingHead(lang: Lang): HeadData {
  const c = COPY[lang];
  const url = SITE + c.path;
  return {
    title: c.title,
    meta: [
      { name: "description", content: c.description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:url", content: url },
      { property: "og:image", content: `${SITE}/img/hero.webp` },
      { property: "og:locale", content: c.locale },
      { property: "og:locale:alternate", content: c.altLocale },
      { property: "og:site_name", content: "Real Aesthetic Medical Spa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: c.title },
      { name: "twitter:description", content: c.description },
      { name: "twitter:image", content: `${SITE}/img/hero.webp` },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: SITE + COPY.en.path },
      { rel: "alternate", hrefLang: "es", href: SITE + COPY.es.path },
      { rel: "alternate", hrefLang: "x-default", href: SITE + COPY.es.path },
    ],
    jsonLd: [],
  };
}
