import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import css from "@/styles/pages/procedures.css?raw";
import { BOOKING_CATEGORIES, bookingUrl, type BookingService } from "./booking-data";
import { useHeroNav } from "./behaviors";
import { CalendarIcon, HomeIcon, SparkleIcon, StarIcon, WhatsAppIcon } from "./icons";
import type { Lang } from "./lang";
import { PageStyle } from "./PageStyle";
import REP from "./reputation.json";
import { SiteChrome } from "./SiteChrome";
import { SiteLink } from "./SiteLink";

// The catalog page's styles, plus the price line and the duration / "Book" label on each card,
// the trust strip under the title, and the "start here" block (consultation + signature treatments).
const EXTRA_CSS = `
.proc-card .card-price{margin-top:14px;font-family:'Newsreader',serif;font-weight:400;font-size:1.05rem;color:#a87a48;line-height:1.3;}
.proc-card .card-price + .card-meta,.proc-card .ra-x-fin + .card-meta{margin-top:8px;}
.proc-card .ra-x-fin{margin-top:4px;font-family:'Inter',sans-serif;font-weight:400;font-size:.78rem;color:#6e6452;}
.proc-card .card-meta{margin-top:14px;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.24em;text-transform:uppercase;color:#866033;}
.ra-x-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 26px;margin:26px auto 0;max-width:760px;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:#6e6452;}
.ra-x-trust a{color:#866033;text-decoration:none;border-bottom:1px solid rgba(134,96,51,.3);padding-bottom:3px;}
.ra-x-trust a:hover{border-color:#866033;}
.ra-x-trust .ra-x-stars{color:#b8863f;}
.ra-x-start{background:var(--ivory);padding:clamp(48px,8vh,88px) 6vw 0;}
.ra-x-start-inner{max-width:1280px;margin:0 auto;}
.ra-x-consult{display:grid;grid-template-columns:150px 1fr auto;gap:clamp(20px,3vw,40px);align-items:center;padding:clamp(20px,3vw,32px);text-decoration:none;background:linear-gradient(135deg,#0e3a2c 0%,#16503d 100%);border:1px solid rgba(212,168,87,.45);border-radius:16px;box-shadow:0 18px 44px -18px rgba(14,58,44,.55);transition:transform .3s, box-shadow .3s;}
.ra-x-consult:hover{transform:translateY(-2px);box-shadow:0 24px 50px -18px rgba(14,58,44,.65);}
.ra-x-consult img{width:150px;height:150px;object-fit:cover;object-position:center top;border-radius:12px;}
.ra-x-consult .ra-x-eyebrow{display:block;margin-bottom:10px;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:#d4a857;}
.ra-x-consult h2{margin:0 0 10px;font-family:'Newsreader',serif;font-weight:300;font-size:clamp(1.5rem,2.6vw,2.1rem);line-height:1.12;color:#fbf6ec;}
.ra-x-consult p{margin:0;font-family:'Inter',sans-serif;font-weight:300;font-size:.95rem;line-height:1.55;color:rgba(241,231,212,.85);max-width:560px;}
.ra-x-consult-btn{justify-self:end;white-space:nowrap;font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.28em;text-transform:uppercase;color:#1a140c;background:linear-gradient(180deg,#d4a857,#c89968);border:1px solid #c89968;padding:14px 22px;}
.ra-x-ess-head{margin:clamp(40px,6vh,64px) 0 18px;display:flex;align-items:baseline;justify-content:space-between;gap:16px;}
.ra-x-ess-head h2{margin:0;font-family:'Newsreader',serif;font-weight:300;font-size:clamp(1.6rem,2.6vw,2.2rem);color:#1a140c;}
.ra-x-ess-head span{font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.28em;text-transform:uppercase;color:#866033;}
.ra-x-ess{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.ra-x-ess-card{display:grid;grid-template-columns:96px 1fr;gap:16px;align-items:center;padding:12px;text-align:left;text-decoration:none;cursor:pointer;font:inherit;background:linear-gradient(180deg,var(--bone) 0%,#ecdfc6 100%);border:1px solid rgba(200,153,104,.3);border-radius:12px;transition:border-color .2s, transform .2s;}
.ra-x-ess-card:hover{border-color:#c89968;transform:translateY(-1px);}
.ra-x-ess-card img{width:96px;height:72px;object-fit:cover;border-radius:8px;}
.ra-x-ess-card strong{display:block;font-family:'Newsreader',serif;font-weight:400;font-size:1.08rem;line-height:1.2;color:#1a140c;}
.ra-x-ess-card small{display:block;margin-top:6px;font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:#866033;}
.ra-x-cat-head{grid-column:1 / -1;display:flex;align-items:baseline;gap:10px;margin:28px 0 0;padding-bottom:10px;border-bottom:1px solid rgba(200,153,104,.3);font-family:'Newsreader',serif;font-weight:300;font-size:1.6rem;line-height:1.2;color:#1a140c;}
.ra-x-cat-head:first-child{margin-top:0;}
.ra-x-cat-head span{font-family:'JetBrains Mono',monospace;font-size:.68rem;letter-spacing:.2em;color:#866033;}
#catalog-list{scroll-margin-top:110px;}
section#catalog{overflow:clip;}
@media (max-width:900px){.ra-x-ess{grid-template-columns:repeat(2,1fr);}}
@media (max-width:768px){
  section.hero.ra-x-bhero{height:auto;min-height:0;padding:100px 0 30px;}
  .ra-x-bhero .hero-block h1{font-size:2.5rem;margin-bottom:12px;}
  .ra-x-bhero .hero-block .lede{font-size:1rem;}
  .ra-x-start{padding-top:24px;}
  .ra-x-trust{margin-top:18px;gap:4px 18px;}
  .ra-x-trust > :nth-child(2),.ra-x-trust > :nth-child(3){display:none;}
  .ra-x-consult{padding:16px;gap:14px;border-radius:14px;}
  .ra-x-consult .ra-x-eyebrow{margin-bottom:6px;letter-spacing:.2em;}
  .ra-x-consult h2{font-size:1.3rem;margin-bottom:6px;}
  .ra-x-consult p{font-size:.86rem;}
  .ra-x-ess-head{margin:28px 0 12px;flex-direction:column;align-items:flex-start;gap:4px;}
  .ra-x-ess-head h2{font-size:1.5rem;}
  section#catalog{padding-top:44px;}
  .ra-x-toolbar{position:sticky;top:66px;z-index:20;margin:0 0 14px;padding:10px 0 8px;background:rgba(251,246,236,.95);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid rgba(200,153,104,.25);}
  .ra-x-toolbar .catalog-search{margin:0 auto 10px;}
  .ra-x-toolbar .catalog-search input{padding:11px 14px;}
  .ra-x-toolbar .catalog-filters{flex-wrap:nowrap;justify-content:flex-start;overflow-x:auto;margin:0;padding:0 6vw 2px;scrollbar-width:none;-webkit-overflow-scrolling:touch;}
  .ra-x-toolbar .catalog-filters::-webkit-scrollbar{display:none;}
  .ra-x-toolbar .filter-pill{flex:0 0 auto;white-space:nowrap;display:inline-flex;align-items:center;padding:0 16px;}
  .ra-x-cat-head{font-size:1.3rem;margin-top:18px;}
  #catalog-list{scroll-margin-top:190px;}
  .ra-x-consult{grid-template-columns:84px 1fr;}
  .ra-x-consult img{width:84px;height:84px;}
  .ra-x-consult-btn{grid-column:1 / -1;justify-self:stretch;text-align:center;}
  .ra-x-ess{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;margin:0 -6vw;padding:0 6vw 6px;}
  .ra-x-ess-card{flex:0 0 78%;scroll-snap-align:start;}
  .ra-x-trust{font-size:.56rem;letter-spacing:.14em;gap:8px 18px;}
}
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
    trust: {
      reviews: `${REP.rating} · ${REP.reviewCount} reseñas en Google`,
      provider: "Ronal Perdomo Lugo, APRN, FNP-C",
      financing: { href: "/financiacion/", label: "Financiación con Cherry" },
      whatsapp: "¿Dudas? WhatsApp",
    },
    consult: {
      eyebrow: "¿No sabes por dónde empezar?",
      title: "Consulta inicial con Ronal Perdomo Lugo, APRN",
      text: "30 minutos para evaluar tu piel y tus objetivos, y salir con un plan claro y su presupuesto.",
      cta: "Reservar consulta",
    },
    essentials: { title: "Los esenciales", note: "Los tratamientos insignia de la clínica" },
    endolaser: { name: "Endoláser", note: "7 zonas · Desde $1,700" },
    eyebrow: "Todos los servicios",
    heading: ["", "servicios", " para reservar"],
    sub: "Elige un servicio para ver su calendario y reservar al instante.",
    search: "Busca un servicio — ej. 'Botox', 'Fotona', 'IV'…",
    all: "Todos",
    empty: "No hay servicios que coincidan con tu búsqueda.",
    book: "Reservar",
    financing: "Financiación disponible",
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
    trust: {
      reviews: `${REP.rating} · ${REP.reviewCount} Google reviews`,
      provider: "Ronal Perdomo Lugo, APRN, FNP-C",
      financing: { href: "/financing/", label: "Financing with Cherry" },
      whatsapp: "Questions? WhatsApp",
    },
    consult: {
      eyebrow: "Not sure where to start?",
      title: "Initial consultation with Ronal Perdomo Lugo, APRN",
      text: "30 minutes to assess your skin and your goals, and leave with a clear plan and what it costs.",
      cta: "Book consultation",
    },
    essentials: { title: "The essentials", note: "The clinic's signature treatments" },
    endolaser: { name: "Endolaser", note: "7 areas · From $1,700" },
    eyebrow: "All services",
    heading: ["", "services", " to book"],
    sub: "Pick a service to see its calendar and book on the spot.",
    search: "Search services — e.g. 'Botox', 'Fotona', 'IV'…",
    all: "All",
    empty: "No services match your search.",
    book: "Book",
    financing: "Financing available",
    bar: {
      aria: "Mobile navigation",
      home: "Home",
      treatments: "Treatments",
      club: "Club",
      book: "Book",
    },
  },
};

// The clinic's five essentials from the home page (Endolaser opens its category), plus full-face Botox.
const ESSENTIALS = [
  "MlFxbRZqdYNJsDJj8FBI", // Fotona TightSculpting
  "RzU6WrOwiepfOTy27uQX", // Sculptra
  "UPfhQ1Yfnn6f42WTAnBB", // Radiesse
  "BrWpbM5oCweD3lbsPvOr", // PDRN facial
  "8Oz5MPL3z14HKwu6kFUa", // Botox full face
];
const SERVICES = new Map<string, BookingService>(
  BOOKING_CATEGORIES.flatMap((c) => c.services.map((s) => [s.calendarId, s] as const)),
);
const ENDOLASER_THUMB =
  BOOKING_CATEGORIES.find((c) => c.key === "endolaser")?.services[0]?.thumb ?? "";

const NAV_LINK_STYLE = { color: "inherit", textDecoration: "none" };
// Accent- and case-insensitive search ("depilacion" finds "Depilación").
const fold = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
const dollars = (p: string) => Number((p.match(/\$([\d,]+)/)?.[1] ?? "0").replace(/,/g, ""));

/** /reservar/ and /book/: every bookable service, each opening its own GHL calendar in a pop-up. */
export function BookingPage({ lang, category }: { lang: Lang; category?: string | undefined }) {
  useHeroNav();
  const t = T[lang];
  const known = (k?: string) => (k && BOOKING_CATEGORIES.some((c) => c.key === k) ? k : "all");
  const [filter, setFilter] = useState(known(category));
  const [query, setQuery] = useState("");
  const total = BOOKING_CATEGORIES.reduce((n, c) => n + c.services.length, 0);

  // ?cat=endolaser (from the home page) opens the catalog already filtered.
  useEffect(() => {
    const k = known(category);
    setFilter(k);
    if (k !== "all") document.getElementById("catalog")?.scrollIntoView();
  }, [category]);

  const showCategory = (k: string) => {
    setFilter(k);
    setQuery("");
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  // Services grouped by category (headings show in the full list, which is long on a phone).
  const groups = useMemo(() => {
    const q = fold(query.trim());
    return BOOKING_CATEGORIES.filter((c) => filter === "all" || c.key === filter)
      .map((c) => ({
        key: c.key,
        label: lang === "es" ? c.es : c.en,
        items: c.services
          .map((s) => ({
            ...s,
            name: lang === "es" ? s.es : s.en,
            desc: lang === "es" ? s.descEs : s.descEn,
            price: lang === "es" ? s.priceEs : s.priceEn,
            category: lang === "es" ? c.es : c.en,
          }))
          .filter(
            (s) => !q || fold(`${s.name} ${s.desc} ${s.es} ${s.en} ${s.keywords}`).includes(q),
          ),
      }))
      .filter((g) => g.items.length > 0);
  }, [filter, query, lang]);
  const found = groups.reduce((n, g) => n + g.items.length, 0);

  // Phones: the filter pills scroll sideways; keep the selected one in view, and when a pill is
  // tapped from deep in the list, jump back to the top of the results.
  const pillsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = pillsRef.current;
    const pill = bar?.querySelector<HTMLElement>(".filter-pill.active");
    if (bar && pill && bar.scrollWidth > bar.clientWidth)
      bar.scrollTo({
        left: pill.offsetLeft - (bar.clientWidth - pill.offsetWidth) / 2,
        behavior: "smooth",
      });
  }, [filter]);
  const pick = (k: string) => {
    setFilter(k);
    const list = document.getElementById("catalog-list");
    if (list && list.getBoundingClientRect().top < 0) list.scrollIntoView();
  };

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

      <section className="hero ra-x-bhero">
        <div className="hero-block">
          <span className="pretitle">{t.pretitle}</span>
          <h1>
            {t.title[0]}
            <em>{t.title[1]}</em>
            {t.title[2]}
          </h1>
          <p className="lede">{t.lede}</p>
          <div className="ra-x-trust">
            <a href={REP.googleReviewsUrl} target="_blank" rel="noopener">
              <span className="ra-x-stars" aria-hidden="true">
                ★★★★★
              </span>{" "}
              {t.trust.reviews}
            </a>
            <span>{t.trust.provider}</span>
            <SiteLink href={t.trust.financing.href}>{t.trust.financing.label}</SiteLink>
            <a href={REP.whatsappUrl} target="_blank" rel="noopener">
              {t.trust.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section className="ra-x-start">
        <div className="ra-x-start-inner">
          <a
            className="ra-x-consult"
            href={bookingUrl(REP.consultationCalendarId, lang)}
            target="_blank"
            rel="noopener"
          >
            <img src="/img/thumb/doctor.webp" alt="" loading="lazy" decoding="async" />
            <div>
              <span className="ra-x-eyebrow">{t.consult.eyebrow}</span>
              <h2>{t.consult.title}</h2>
              <p>{t.consult.text}</p>
            </div>
            <span className="ra-x-consult-btn">{t.consult.cta} →</span>
          </a>

          <div className="ra-x-ess-head">
            <h2>{t.essentials.title}</h2>
            <span>{t.essentials.note}</span>
          </div>
          <div className="ra-x-ess">
            <button
              type="button"
              className="ra-x-ess-card"
              onClick={() => showCategory("endolaser")}
            >
              <img src={ENDOLASER_THUMB} alt="" loading="lazy" decoding="async" />
              <span>
                <strong>{t.endolaser.name}</strong>
                <small>{t.endolaser.note}</small>
              </span>
            </button>
            {ESSENTIALS.map((id) => {
              const s = SERVICES.get(id);
              if (!s) return null;
              const name = lang === "es" ? s.es : s.en;
              const price = lang === "es" ? s.priceEs : s.priceEn;
              return (
                <a
                  key={id}
                  className="ra-x-ess-card"
                  href={bookingUrl(id, lang)}
                  target="_blank"
                  rel="noopener"
                >
                  <img src={s.thumb} alt="" loading="lazy" decoding="async" />
                  <span>
                    <strong>{name}</strong>
                    <small>
                      {price ? `${price} · ` : ""}
                      {s.minutes} min
                    </small>
                  </span>
                </a>
              );
            })}
          </div>
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
        <div className="ra-x-toolbar">
          <div className="catalog-search">
            <input
              type="search"
              placeholder={t.search}
              aria-label={t.search}
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="catalog-filters" ref={pillsRef}>
            <button
              className={"filter-pill" + (filter === "all" ? " active" : "")}
              aria-pressed={filter === "all"}
              onClick={() => pick("all")}
            >
              {t.all} · {total}
            </button>
            {BOOKING_CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={"filter-pill" + (filter === c.key ? " active" : "")}
                aria-pressed={filter === c.key}
                onClick={() => pick(c.key)}
              >
                {lang === "es" ? c.es : c.en}
              </button>
            ))}
          </div>
        </div>
        <div className="catalog-grid" id="catalog-list">
          {found === 0 && <div className="catalog-empty">{t.empty}</div>}
          {groups.map((g) => (
            <Fragment key={g.key}>
              {filter === "all" && (
                <h3 className="ra-x-cat-head">
                  {g.label} <span>{g.items.length}</span>
                </h3>
              )}
              {g.items.map((s) => (
                <a
                  key={s.calendarId}
                  className="proc-card"
                  href={bookingUrl(s.calendarId, lang)}
                  target="_blank"
                  rel="noopener"
                >
                  <div className="card-image">
                    <span className="card-monogram">RA</span>
                    <img src={s.thumb} alt={s.name} loading="lazy" decoding="async" />
                    <span className="card-zone">{s.category}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-name">{s.name}</div>
                    {s.desc && <div className="card-tag">{s.desc}</div>}
                    {s.price && <div className="card-price">{s.price}</div>}
                    {dollars(s.price) >= 1000 && <div className="ra-x-fin">{t.financing}</div>}
                    <div className="card-meta">
                      {s.minutes} min · {t.book} →
                    </div>
                  </div>
                </a>
              ))}
            </Fragment>
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
          href={REP.whatsappUrl}
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
