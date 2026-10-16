import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Lang } from "./lang";
import { SiteLink } from "./SiteLink";
import { ZONES, nameFor, urlFor, zoneLabel, zoneUrl } from "./treatments-nav";

const STRINGS = {
  en: {
    label: "Menu",
    close: "Close menu",
    langLabel: "Language",
    brand: "Real Aesthetic Medical Spa",
    tagline: "Aesthetic medicine in Miami",
    browse_all: "Browse all",
    links: [
      { href: "/en/", label: "Home" },
      { href: "/procedures/", label: "Treatments", expandable: true },
      { href: "/about/", label: "Practitioner" },
      { href: "/the-real-aesthetic-club/", label: "The Club" },
      { href: "/financing/", label: "Financing" },
      { href: "/contact/", label: "Contact" },
    ],
    cta: { href: "/contact/#book", label: "Book consultation" },
  },
  es: {
    label: "Menú",
    close: "Cerrar menú",
    langLabel: "Idioma",
    brand: "Real Aesthetic Medical Spa",
    tagline: "Medicina estética en Miami",
    browse_all: "Ver todos",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/tratamientos/", label: "Tratamientos", expandable: true },
      { href: "/sobre/", label: "Especialista" },
      { href: "/el-club-real-aesthetic/", label: "El Club" },
      { href: "/financiacion/", label: "Financiación" },
      { href: "/contacto/", label: "Contacto" },
    ],
    cta: { href: "/contacto/#book", label: "Reservar consulta" },
  },
};

function Hamburger() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}
function WaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/** Mobile-only hamburger button + full-screen overlay menu (shown at <= 768px). */
export function MobileNav({ lang }: { lang: Lang }) {
  const t = STRINGS[lang];
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.body.classList.add("site-mn-on");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("site-mn-on", "site-mn-locked");
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("site-mn-locked", open);
  }, [open]);

  // Close the overlay after navigating to another page.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <button
        className="site-mn-btn"
        type="button"
        aria-label={t.label}
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen(true)}
      >
        <Hamburger />
      </button>
      <div
        className={"site-mn-overlay" + (open ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-label={t.label}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <button
          className="site-mn-close"
          type="button"
          aria-label={t.close}
          onClick={() => setOpen(false)}
        >
          <XIcon />
        </button>
        <span className="site-mn-brand">{t.brand}</span>
        <p className="site-mn-tagline">{t.tagline}</p>
        <ul className="site-mn-links">
          {t.links.map((l) =>
            l.expandable ? (
              <li key={l.href}>
                <details>
                  <summary>
                    {l.label}
                    <span className="site-mn-caret">+</span>
                  </summary>
                  <ul className="site-mn-sub">
                    {ZONES.map((z) => (
                      <li key={z.key}>
                        <details className="site-mn-zone">
                          <summary>
                            {zoneLabel(z, lang)}
                            <span className="site-mn-caret">+</span>
                          </summary>
                          <ul className="site-mn-zone-items">
                            {z.top.map((it) => (
                              <li key={it.slug}>
                                <SiteLink
                                  href={urlFor(it.slug, lang)}
                                  onClick={() => setOpen(false)}
                                >
                                  {nameFor(it, lang)}
                                </SiteLink>
                              </li>
                            ))}
                            <li className="site-mn-sub-all">
                              <SiteLink href={zoneUrl(z.key, lang)} onClick={() => setOpen(false)}>
                                {z.total > z.top.length
                                  ? `${t.browse_all} ${z.total} →`
                                  : `${t.browse_all} →`}
                              </SiteLink>
                            </li>
                          </ul>
                        </details>
                      </li>
                    ))}
                    <li className="site-mn-sub-all">
                      <SiteLink href={l.href} onClick={() => setOpen(false)}>
                        {t.browse_all} →
                      </SiteLink>
                    </li>
                  </ul>
                </details>
              </li>
            ) : (
              <li key={l.href}>
                <SiteLink href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </SiteLink>
              </li>
            ),
          )}
        </ul>
        <SiteLink className="site-mn-cta" href={t.cta.href} onClick={() => setOpen(false)}>
          {t.cta.label}
        </SiteLink>
        <div className="site-mn-bottom">
          <div className="site-mn-lang" aria-label={t.langLabel}>
            <SiteLink
              href="/en/"
              className={lang === "en" ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              EN
            </SiteLink>
            <span>·</span>
            <SiteLink
              href="/"
              className={lang === "es" ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              ES
            </SiteLink>
          </div>
          <a className="site-mn-wa" href="https://wa.me/17862443722" target="_blank" rel="noopener">
            <WaIcon /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
