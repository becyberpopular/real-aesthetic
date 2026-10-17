import {
  Fragment,
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import type { Anchor, Block, CtaData, Treatment } from "@/content/treatments";
import cssA from "@/styles/pages/treatment-a.css?raw";
import cssB from "@/styles/pages/treatment-b.css?raw";
import cssC from "@/styles/pages/treatment-c.css?raw";
import cssD from "@/styles/pages/treatment-d.css?raw";
import cssE from "@/styles/pages/treatment-e.css?raw";
import { useTreatmentPage } from "./behaviors";
import { openBooking } from "./booking-events";
import { SERVICE_PRICES } from "./booking-prices";
import { ICONS } from "./icons";
import type { Lang } from "./lang";
import { PageStyle } from "./PageStyle";
import { RelatedTreatments } from "./RelatedTreatments";
import REP from "./reputation.json";
import { SiteChrome } from "./SiteChrome";
import { SiteLink } from "./SiteLink";

const CSS: Record<string, string> = { a: cssA, b: cssB, c: cssC, d: cssD, e: cssE };

const NAV = {
  en: {
    home: "/en/",
    book: "/book/",
    items: [
      { href: "/en/", label: "Home" },
      { href: "/procedures/", label: "Treatments", active: true },
      { href: "/about/", label: "Practitioner" },
      { href: "/the-real-aesthetic-club/", label: "The Club" },
      { href: "/financing/", label: "Financing" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  es: {
    home: "/",
    book: "/reservar/",
    items: [
      { href: "/", label: "Inicio" },
      { href: "/tratamientos/", label: "Tratamientos", active: true },
      { href: "/sobre/", label: "Especialista" },
      { href: "/el-club-real-aesthetic/", label: "El Club" },
      { href: "/financiacion/", label: "Financiación" },
      { href: "/contacto/", label: "Contacto" },
    ],
  },
};
const NAV_LINK_STYLE: CSSProperties = { color: "inherit", textDecoration: "none" };

/** Inline HTML from the content files (headings with <em>, FAQ answers, etc.). */
const html = (s: string) => ({ __html: s });

function styleFromString(s?: string): CSSProperties | undefined {
  if (!s) return undefined;
  const out: Record<string, string> = {};
  for (const decl of s.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = decl.slice(i + 1).trim();
  }
  return out as CSSProperties;
}

function A({ a }: { a: Anchor }) {
  const props = { className: a.className, target: a.target, rel: a.rel, "aria-label": a.ariaLabel };
  if (a.href.startsWith("/") && a.target !== "_blank")
    return (
      <SiteLink href={a.href} {...props}>
        {a.label}
      </SiteLink>
    );
  return (
    <a href={a.href} {...props}>
      {a.label}
    </a>
  );
}

function Cta({ data }: { data: CtaData }) {
  if (data.multi)
    return (
      <div className="cta-multi">
        <span className="cta-multi-label">{data.multi.label}</span>
        <div className="cta-multi-buttons">
          {data.multi.buttons.map((b) => (
            <A a={b} key={b.href + b.label} />
          ))}
        </div>
      </div>
    );
  return data.cta ? <A a={data.cta} /> : null;
}

// ---- Additions on top of the original page design (classes ra-x-*; "ra-x-chrome" = not part of the live markup) ----

const CAL_ID = /widget\/booking\/([A-Za-z0-9]+)/;
const dollars = (p: string) => Number((p.match(/\$([\d,]+)/)?.[1] ?? "0").replace(/,/g, ""));

/** "$550 · 30 min", or "From $1,700" when the hero offers several areas. */
function heroPrice(data: CtaData, lang: Lang) {
  const anchors = data.multi ? data.multi.buttons : data.cta ? [data.cta] : [];
  const items = anchors.flatMap((a) => {
    const p = SERVICE_PRICES[a.href.match(CAL_ID)?.[1] ?? ""];
    return p ? [p] : [];
  });
  const first = items[0];
  if (!first) return null;
  const minutes = new Set(items.map((p) => p.minutes));
  const duration = minutes.size === 1 ? ` · ${first.minutes} min` : "";
  const low = Math.min(...items.map((p) => dollars(p.en)));
  const sameText = items.every((p) => p[lang] === first[lang]);
  const price = sameText
    ? first[lang]
    : `${lang === "es" ? "Desde" : "From"} $${low.toLocaleString("en-US")}`;
  return { price, duration, financing: low >= 1000 };
}

function HeroPrice({ data, lang }: { data: CtaData; lang: Lang }) {
  const p = heroPrice(data, lang);
  if (!p) return null;
  return (
    <p className="ra-x-price ra-x-chrome">
      <strong>{p.price}</strong>
      {p.duration}
      {p.financing && (
        <>
          {" · "}
          <SiteLink href={lang === "es" ? "/financiacion/" : "/financing/"}>
            {lang === "es" ? "Financiación disponible" : "Financing available"}
          </SiteLink>
        </>
      )}
    </p>
  );
}

// Prescription programs: say plainly that a medical evaluation comes first and results vary.
const RX_PAGES = new Set([
  "semaglutida-perdida-peso",
  "tirzepatida-perdida-peso",
  "programas-peptidos",
  "semaglutide-weight-loss",
  "tirzepatide-weight-loss",
  "peptide-programs",
]);
const RX_NOTE = {
  es: "Tratamiento con receta: solo se indica tras una evaluación médica y si eres candidato/a. Los resultados varían de una persona a otra.",
  en: "Prescription treatment: only prescribed after a medical evaluation, if you're a candidate. Results vary from person to person.",
};

const PROVIDER = {
  es: {
    eyebrow: "Quién te atiende",
    text: "Nurse Practitioner especializado en medicina estética, con más de 10 años de experiencia. Cada tratamiento empieza con una evaluación médica y un plan hecho a tu medida.",
    reviews: `${REP.rating} · ${REP.reviewCount} reseñas en Google`,
    about: { href: "/sobre/", label: "Conoce al especialista →" },
  },
  en: {
    eyebrow: "Your practitioner",
    text: "Nurse Practitioner specializing in aesthetic medicine, with more than 10 years of experience. Every treatment starts with a medical assessment and a plan built around you.",
    reviews: `${REP.rating} · ${REP.reviewCount} Google reviews`,
    about: { href: "/about/", label: "Meet the practitioner →" },
  },
};

const bookingUrl = (calendarId: string, lang: Lang) =>
  "https://api.leadconnectorhq.com/widget/booking/" + calendarId + "?language=" + lang;

/** The hero's calendar buttons (areas / indications), skipping any that go to the general booking page. */
function calendarOptions(data: CtaData) {
  const anchors = data.multi ? data.multi.buttons : data.cta ? [data.cta] : [];
  return anchors.flatMap((a) => {
    const id = a.href.match(CAL_ID)?.[1];
    return id ? [{ id, label: a.label, href: a.href }] : [];
  });
}

const CHOOSER = {
  es: {
    title: "Reservar",
    close: "Cerrar",
    consult: "¿No sabes cuál elegir? Reserva una consulta inicial",
  },
  en: {
    title: "Book",
    close: "Close",
    consult: "Not sure which one? Book an initial consultation",
  },
};

/** Phone bottom sheet: pick an area / indication, then its calendar opens in the booking pop-up. */
function BookChooser({ data, lang, onClose }: { data: CtaData; lang: Lang; onClose: () => void }) {
  const c = CHOOSER[lang];
  useEffect(() => {
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
  return (
    <div
      className="ra-x-sheet-overlay ra-x-chrome"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="ra-x-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ra-x-sheet-title"
      >
        <div className="ra-x-sheet-head">
          <h3 id="ra-x-sheet-title">{data.multi?.label ?? c.title}</h3>
          <button type="button" className="ra-x-sheet-close" aria-label={c.close} onClick={onClose}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <ul className="ra-x-sheet-list">
          {calendarOptions(data).map((o) => {
            const p = SERVICE_PRICES[o.id];
            return (
              <li key={o.id}>
                <a href={o.href} target="_blank" rel="noopener" onClick={onClose}>
                  <span className="ra-x-sheet-name">{o.label}</span>
                  {p && (
                    <span className="ra-x-sheet-meta">
                      {p[lang]} · {p.minutes} min
                    </span>
                  )}
                  <span className="ra-x-sheet-go" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          className="ra-x-sheet-consult"
          href={bookingUrl(REP.consultationCalendarId, lang)}
          target="_blank"
          rel="noopener"
          onClick={onClose}
        >
          {c.consult} →
        </a>
      </div>
    </div>
  );
}

function Provider({ lang }: { lang: Lang }) {
  const c = PROVIDER[lang];
  return (
    <section className="ra-x-provider ra-x-chrome">
      <div className="ra-x-provider-inner">
        <img
          src="/img/thumb/doctor.webp"
          alt="Ronal Perdomo Lugo, APRN, FNP-C"
          width={180}
          height={220}
          loading="lazy"
          decoding="async"
        />
        <div>
          <span className="ra-x-eyebrow">{c.eyebrow}</span>
          <h2>Ronal Perdomo Lugo, APRN, FNP-C</h2>
          <p>{c.text}</p>
          <div className="ra-x-provider-links">
            <a href={REP.googleReviewsUrl} target="_blank" rel="noopener">
              <span className="ra-x-stars" aria-hidden="true">
                ★★★★★
              </span>{" "}
              {c.reviews}
            </a>
            <SiteLink href={c.about.href}>{c.about.label}</SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcBlock({ b }: { b: Block }) {
  return (
    <section className={b.className}>
      <div className="proc-inner">
        <span
          className="eyebrow"
          style={styleFromString(b.eyebrowStyle)}
          dangerouslySetInnerHTML={html(b.eyebrow)}
        />
        <h2 dangerouslySetInnerHTML={html(b.title)} />
        {b.text?.map((t, i) => (
          <p key={i} dangerouslySetInnerHTML={html(t)} />
        ))}
        {b.list && (
          <ul className={b.listClass}>
            {b.list.map((li, i) => (
              <li key={i} dangerouslySetInnerHTML={html(li)} />
            ))}
          </ul>
        )}
        {b.faq && (
          <div className="faq-list">
            {b.faq.map((f, i) => (
              <details key={i}>
                <summary dangerouslySetInnerHTML={html(f.q)} />
                {f.a !== undefined && <p dangerouslySetInnerHTML={html(f.a)} />}
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** Template for every /procedures/<slug>/ and /tratamientos/<slug>/ page. */
export function TreatmentPage({ t }: { t: Treatment }) {
  useTreatmentPage(t.path);
  const nav = NAV[t.lang];
  const [chooser, setChooser] = useState(false);
  const closeChooser = useCallback(() => setChooser(false), []);
  const heroCalendars = calendarOptions(t.hero);
  // Bottom-bar Book button: this treatment's calendar (or a chooser when it has several areas)
  // instead of the general booking page. Without a calendar it keeps going to the booking page.
  const onBook = (e: MouseEvent) => {
    const [only, ...rest] = heroCalendars;
    if (!only) return;
    e.preventDefault();
    if (rest.length) setChooser(true);
    else openBooking(only.id, t.lang);
  };
  const vars = `:root{--proc-hero-img:url('${t.heroImage ?? ""}');--proc-cta-img:url('${t.ctaImage ?? t.heroImage ?? ""}');}`;
  return (
    <>
      <PageStyle css={(CSS[t.cssFamily] ?? cssA) + "\n" + vars} />
      <div className="lang-switcher" aria-label={t.langSwitcher.ariaLabel}>
        {t.langSwitcher.links.map((l, i) => (
          <Fragment key={l.href}>
            {i > 0 && <span>{t.langSwitcher.separator}</span>}
            <SiteLink href={l.href} className={l.active ? "active" : undefined}>
              {l.label}
            </SiteLink>
          </Fragment>
        ))}
      </div>

      <nav className="top" id="topnav">
        <SiteLink href={nav.home} className="brand">
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/logo-horizontal.webp" />
            <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />
          </picture>
        </SiteLink>
        <ul>
          {nav.items.map((it) => (
            <li key={it.href} className={it.active ? "active" : undefined}>
              <SiteLink href={it.href} style={NAV_LINK_STYLE}>
                {it.label}
              </SiteLink>
            </li>
          ))}
        </ul>
        <SiteLink href={nav.book} className="nav-cta">
          {t.navCta}
        </SiteLink>
      </nav>

      <section className="proc-hero">
        <div className="proc-hero-bg" id="heroBg" />
        <div className="proc-hero-block">
          <span className="pretitle" dangerouslySetInnerHTML={html(t.hero.pretitle)} />
          <h1 dangerouslySetInnerHTML={html(t.hero.title)} />
          <p className="lede" dangerouslySetInnerHTML={html(t.hero.lede)} />
          <Cta data={t.hero} />
          <HeroPrice data={t.hero} lang={t.lang} />
          {RX_PAGES.has(t.slug) && <p className="ra-x-note ra-x-chrome">{RX_NOTE[t.lang]}</p>}
        </div>
      </section>

      {t.blocks.map((b, i) => (
        <ProcBlock b={b} key={i} />
      ))}

      <Provider lang={t.lang} />

      <RelatedTreatments slug={t.slug} lang={t.lang} />

      <section className="cta-strip">
        <div className="cta-strip-bg" id="ctaBg" />
        <div className="proc-inner">
          <span
            className="eyebrow"
            style={styleFromString(t.ctaStrip.eyebrowStyle)}
            dangerouslySetInnerHTML={html(t.ctaStrip.eyebrow)}
          />
          <h2 dangerouslySetInnerHTML={html(t.ctaStrip.title)} />
          <p dangerouslySetInnerHTML={html(t.ctaStrip.text)} />
          <Cta data={t.ctaStrip} />
        </div>
      </section>

      <nav className="bottom-bar" aria-label={t.bottomBar.ariaLabel}>
        {t.bottomBar.items.map((it) => {
          const Icon = ICONS[it.icon];
          const inner = (
            <>
              {Icon && <Icon />}
              {it.label !== undefined && <span>{it.label}</span>}
            </>
          );
          const props = {
            className: it.className,
            "aria-label": it.ariaLabel,
            target: it.target,
            rel: it.rel,
            ...(it.className?.split(" ").includes("bb-cta") ? { onClick: onBook } : {}),
          };
          return it.href.startsWith("/") && it.target !== "_blank" ? (
            <SiteLink key={it.href + it.icon} href={it.href} {...props}>
              {inner}
            </SiteLink>
          ) : (
            <a key={it.href + it.icon} href={it.href} {...props}>
              {inner}
            </a>
          );
        })}
      </nav>
      {chooser && <BookChooser data={t.hero} lang={t.lang} onClose={closeChooser} />}

      <SiteChrome lang={t.lang} />
    </>
  );
}
