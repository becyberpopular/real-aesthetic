import { Fragment } from "react";
import type { Lang } from "./lang";
import { SiteLink } from "./SiteLink";

/**
 * Site-wide footer. To change phone, address, hours, social or links:
 * edit SITE or the relevant strings in STRINGS.
 */
export const SITE = {
  name: "Real Aesthetic Medical Spa",
  address: "8360 W Flagler St, Suite 108",
  cityzip: "Miami, FL 33144",
  // Direct link to the Google Business Profile listing (CID 0x502bbb27de268ada)
  mapsUrl: "https://maps.google.com/?cid=5776916726937979610",
  phoneDisplay: "+1 786-580-5702",
  phoneTel: "+17865805702",
  email: "info@realaestheticmedspa.com",
};

const STRINGS = {
  en: {
    home: "/en/",
    tagline: "Beauty redefined with medical precision.",
    explore: "Explore",
    links_explore: [
      { href: "/en/", label: "Home" },
      { href: "/procedures/", label: "Procedures" },
      { href: "/about/", label: "The practitioner" },
      { href: "/the-real-aesthetic-club/", label: "The Club" },
      { href: "/financing/", label: "Financing" },
      { href: "/contact/", label: "Contact" },
    ],
    visit: "Visit us",
    call: "Call us",
    write: "Write us",
    hours: "Hours",
    hoursLines: [
      "Mon – Fri · 10:00 AM – 7:00 PM",
      "Saturday · Members Only / Appointment only",
      "Sunday · closed",
    ],
    rights: "All rights reserved",
    links_legal: [
      { href: "/privacy/", label: "Privacy policy" },
      { href: "/terms/", label: "Terms of service" },
    ],
  },
  es: {
    home: "/",
    tagline: "Belleza redefinida con precisión médica.",
    explore: "Explora",
    links_explore: [
      { href: "/", label: "Inicio" },
      { href: "/tratamientos/", label: "Tratamientos" },
      { href: "/sobre/", label: "El especialista" },
      { href: "/el-club-real-aesthetic/", label: "El Club" },
      { href: "/financiacion/", label: "Financiación" },
      { href: "/contacto/", label: "Contacto" },
    ],
    visit: "Visítanos",
    call: "Llámanos",
    write: "Escríbenos",
    hours: "Horario",
    hoursLines: [
      "Lun – Vie · 10:00 AM – 7:00 PM",
      "Sábado · Solo miembros / Con cita previa",
      "Domingo · cerrado",
    ],
    rights: "Todos los derechos reservados",
    links_legal: [
      { href: "/privacidad/", label: "Política de privacidad" },
      { href: "/terminos/", label: "Términos de servicio" },
    ],
  },
};

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = STRINGS[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="ra-footer" id="footer">
      <div className="ra-grid">
        <div className="ra-brand">
          <SiteLink href={t.home}>
            <img src="/img/logo.webp" alt={SITE.name} loading="lazy" />
          </SiteLink>
          <p>{t.tagline}</p>
        </div>

        <div className="ra-col">
          <h4>{t.explore}</h4>
          <ul>
            {t.links_explore.map((l) => (
              <li key={l.href}>
                <SiteLink href={l.href}>{l.label}</SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="ra-col">
          <h4>{t.visit}</h4>
          <a className="ra-line" href={SITE.mapsUrl} target="_blank" rel="noopener">
            {SITE.address}
            <br />
            {SITE.cityzip}
          </a>
          <h4 className="ra-spaced">{t.call}</h4>
          <a className="ra-line" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
          <h4 className="ra-spaced">{t.write}</h4>
          <a className="ra-line" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>

        <div className="ra-col">
          <h4>{t.hours}</h4>
          {t.hoursLines.map((h) => (
            <p key={h}>{h}</p>
          ))}
        </div>
      </div>

      <div className="ra-bottom">
        <span>{`© ${year} ${SITE.name} LLC · ${t.rights}`}</span>
        <span>
          {t.links_legal.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 && <span className="ra-legal-sep">·</span>}
              <SiteLink href={l.href}>{l.label}</SiteLink>
            </Fragment>
          ))}
        </span>
      </div>
    </footer>
  );
}
