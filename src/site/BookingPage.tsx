import { useMemo, useState } from "react";
import css from "@/styles/pages/procedures.css?raw";
import { BOOKING_CATEGORIES, bookingUrl } from "./booking-data";
import { useHeroNav } from "./behaviors";
import { CalendarIcon, HomeIcon, SparkleIcon, StarIcon, WhatsAppIcon } from "./icons";
import type { Lang } from "./lang";
import { PageStyle } from "./PageStyle";
import { SiteChrome } from "./SiteChrome";
import { SiteLink } from "./SiteLink";

// The catalog page's styles, plus one line for the duration / "Book" label on each card.
const EXTRA_CSS = `
.proc-card .card-meta{margin-top:14px;font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);}
`;

const T = {
  es: {
    switchTo: "/book/",
    home: "/",
    nav: [
      { href: "/", label: "Inicio" },
      { href: "/tratamientos/", label: "Tratamientos" },
      { href: "/sobre/", label: "Especialista" },
      { href: "/el-club-real-aesthetic/", label: "El Club" },
      { href: "/financiacion/", label: "Financiación" },
      { href: "/contacto/", label: "Contacto" },
    ],
    navCta: "Agendar",
    pretitle: "Reservas · Miami",
    title: ["Reserva tu ", "cita", ""],
    lede: "Elige tu tratamiento y agenda directamente en nuestro calendario. ¿No sabes por dónde empezar? Reserva una consulta inicial.",
    eyebrow: "Todos los servicios",
    heading: ["", "servicios", " para reservar"],
    sub: "Cada servicio abre su propio calendario en una pestaña nueva.",
    search: "Busca un servicio — ej. 'Botox', 'Fotona', 'IV'…",
    all: "Todos",
    empty: "No hay servicios que coincidan con tu búsqueda.",
    book: "Reservar",
    bar: {
      aria: "Navegación móvil",
      home: "Inicio",
      treatments: "Tratamientos",
      club: "Club",
      book: "Reservar",
    },
  },
  en: {
    switchTo: "/reservar/",
    home: "/en/",
    nav: [
      { href: "/en/", label: "Home" },
      { href: "/procedures/", label: "Treatments" },
      { href: "/about/", label: "Practitioner" },
      { href: "/the-real-aesthetic-club/", label: "The Club" },
      { href: "/financing/", label: "Financing" },
      { href: "/contact/", label: "Contact" },
    ],
    navCta: "Book",
    pretitle: "Booking · Miami",
    title: ["Book your ", "visit", ""],
    lede: "Choose your treatment and book directly in our calendar. Not sure where to start? Book an initial consultation.",
    eyebrow: "All services",
    heading: ["", "services", " to book"],
    sub: "Each service opens its own calendar in a new tab.",
    search: "Search services — e.g. 'Botox', 'Fotona', 'IV'…",
    all: "All",
    empty: "No services match your search.",
    book: "Book",
    bar: {
      aria: "Mobile navigation",
      home: "Home",
      treatments: "Treatments",
      club: "Club",
      book: "Book",
    },
  },
};

const NAV_LINK_STYLE = { color: "inherit", textDecoration: "none" };
// Accent- and case-insensitive search ("depilacion" finds "Depilación").
const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/** /reservar/ and /book/: every bookable service, each opening its own GHL calendar in a new tab. */
export function BookingPage({ lang }: { lang: Lang }) {
  useHeroNav();
  const t = T[lang];
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const total = BOOKING_CATEGORIES.reduce((n, c) => n + c.services.length, 0);

  const cards = useMemo(() => {
    const q = fold(query.trim());
    return BOOKING_CATEGORIES.filter((c) => filter === "all" || c.key === filter).flatMap((c) =>
      c.services
        .map((s) => ({
          ...s,
          name: lang === "es" ? s.es : s.en,
          desc: lang === "es" ? s.descEs : s.descEn,
          category: lang === "es" ? c.es : c.en,
        }))
        .filter((s) => !q || fold(`${s.name} ${s.desc} ${s.es} ${s.en} ${s.keywords}`).includes(q)),
    );
  }, [filter, query, lang]);

  return (
    <>
      <PageStyle css={css + EXTRA_CSS} />
      <div className="lang-switcher" aria-label={lang === "es" ? "Idioma" : "Language"}>
        <SiteLink href="/book/" className={lang === "en" ? "active" : undefined}>
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/reservar/" className={lang === "es" ? "active" : undefined}>
          ES
        </SiteLink>
      </div>

      <nav className="top" id="topnav">
        <SiteLink href={t.home} className="brand">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/logo-horizontal.webp" />
            <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />
          </picture>
        </SiteLink>
        <ul>
          {t.nav.map((n) => (
            <li key={n.href}>
              <SiteLink href={n.href} style={NAV_LINK_STYLE}>
                {n.label}
              </SiteLink>
            </li>
          ))}
        </ul>
        <SiteLink href={lang === "es" ? "/reservar/" : "/book/"} className="nav-cta">
          {t.navCta}
        </SiteLink>
      </nav>

      <section className="hero">
        <div className="hero-block">
          <span className="pretitle">{t.pretitle}</span>
          <h1>
            {t.title[0]}
            <em>{t.title[1]}</em>
            {t.title[2]}
          </h1>
          <p className="lede">{t.lede}</p>
        </div>
      </section>

      <section className="catalog" id="catalog">
        <div className="catalog-header">
          <span className="eyebrow">{t.eyebrow}</span>
          <h2>
            {t.heading[0]}
            <em>
              {total} {t.heading[1]}
            </em>
            {t.heading[2]}
          </h2>
          <p className="lede">{t.sub}</p>
        </div>
        <div className="catalog-search">
          <input
            type="search"
            placeholder={t.search}
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="catalog-filters">
          <button
            className={"filter-pill" + (filter === "all" ? " active" : "")}
            onClick={() => setFilter("all")}
          >
            {t.all} · {total}
          </button>
          {BOOKING_CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={"filter-pill" + (filter === c.key ? " active" : "")}
              onClick={() => setFilter(c.key)}
            >
              {lang === "es" ? c.es : c.en}
            </button>
          ))}
        </div>
        <div className="catalog-grid">
          {cards.length === 0 && <div className="catalog-empty">{t.empty}</div>}
          {cards.map((s) => (
            <a
              key={s.calendarId}
              className="proc-card"
              href={bookingUrl(s.calendarId, lang)}
              target="_blank"
              rel="noopener"
            >
              <div className="card-image">
                <span className="card-monogram">RA</span>
                <img src={s.image} alt={s.name} loading="lazy" decoding="async" />
                <span className="card-zone">{s.category}</span>
              </div>
              <div className="card-body">
                <div className="card-name">{s.name}</div>
                {s.desc && <div className="card-tag">{s.desc}</div>}
                <div className="card-meta">
                  {s.minutes} min · {t.book} →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <nav className="bottom-bar" aria-label={t.bar.aria}>
        <SiteLink href={t.home} className="bb-item" aria-label={t.bar.home}>
          <HomeIcon />
          <span>{t.bar.home}</span>
        </SiteLink>
        <SiteLink
          href={lang === "es" ? "/tratamientos/" : "/procedures/"}
          className="bb-item"
          aria-label={t.bar.treatments}
        >
          <SparkleIcon />
          <span>{t.bar.treatments}</span>
        </SiteLink>
        <SiteLink
          href={lang === "es" ? "/reservar/" : "/book/"}
          className="bb-cta"
          aria-label={t.bar.book}
        >
          <CalendarIcon />
        </SiteLink>
        <SiteLink
          href={lang === "es" ? "/el-club-real-aesthetic/" : "/the-real-aesthetic-club/"}
          className="bb-item"
          aria-label={t.bar.club}
        >
          <StarIcon />
          <span>{t.bar.club}</span>
        </SiteLink>
        <a
          href="https://wa.me/17862443722"
          target="_blank"
          rel="noopener"
          className="bb-item"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </nav>

      <SiteChrome lang={lang} />
    </>
  );
}
