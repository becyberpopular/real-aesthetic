import { Fragment, type CSSProperties } from "react";
import type { Anchor, Block, CtaData, Treatment } from "@/content/treatments";
import cssA from "@/styles/pages/treatment-a.css?raw";
import cssB from "@/styles/pages/treatment-b.css?raw";
import cssC from "@/styles/pages/treatment-c.css?raw";
import cssD from "@/styles/pages/treatment-d.css?raw";
import cssE from "@/styles/pages/treatment-e.css?raw";
import { useTreatmentPage } from "./behaviors";
import { ICONS } from "./icons";
import { PageStyle } from "./PageStyle";
import { RelatedTreatments } from "./RelatedTreatments";
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
        </div>
      </section>

      {t.blocks.map((b, i) => (
        <ProcBlock b={b} key={i} />
      ))}

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

      <SiteChrome lang={t.lang} />
    </>
  );
}
