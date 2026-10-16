import { useEffect, useRef, useState } from "react";
import type { Lang } from "./lang";
import { SiteLink } from "./SiteLink";
import { STRINGS, ZONES, nameFor, urlFor, zoneLabel, zoneUrl } from "./treatments-nav";

/**
 * Desktop-only mega-menu anchored to the "Treatments / Tratamientos" item of nav.top.
 * Hover on the trigger reveals the panel, leaving closes it after a short delay, ESC closes it.
 * Hidden at <= 900px (the hamburger overlay handles treatments navigation there).
 */
export function MegaMenu({ lang }: { lang: Lang }) {
  const [hasTrigger, setHasTrigger] = useState(false);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const T = STRINGS[lang];

  const openNow = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 180);
  };

  useEffect(() => {
    // Find the nav item whose link resolves to /procedures/ or /tratamientos/.
    const target = lang === "es" ? "tratamientos" : "procedures";
    let li: HTMLElement | null = null;
    for (const nav of document.querySelectorAll("nav.top")) {
      for (const a of nav.querySelectorAll("a[href]")) {
        let resolved: string;
        try {
          resolved = new URL(a.getAttribute("href") ?? "", location.href).pathname;
        } catch {
          continue;
        }
        if (resolved === "/" + target + "/" || resolved === "/" + target) {
          li = a.closest("li") ?? (a.parentElement as HTMLElement | null);
          break;
        }
      }
      if (li) break;
    }
    if (!li) return;
    setHasTrigger(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    li.addEventListener("mouseenter", openNow);
    li.addEventListener("mouseleave", scheduleClose);
    document.addEventListener("keydown", onKey);
    return () => {
      li.removeEventListener("mouseenter", openNow);
      li.removeEventListener("mouseleave", scheduleClose);
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(closeTimer.current);
      setOpen(false);
    };
  }, [lang]);

  if (!hasTrigger) return null;
  return (
    <div
      className={"smm-panel" + (open ? " smm-open" : "")}
      role="menu"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <div className="smm-grid">
        {ZONES.map((z) => (
          <div className="smm-col" key={z.key}>
            <h4>{zoneLabel(z, lang)}</h4>
            <ul>
              {z.top.map((item) => (
                <li key={item.slug}>
                  <SiteLink href={urlFor(item.slug, lang)} onClick={() => setOpen(false)}>
                    {nameFor(item, lang)}
                  </SiteLink>
                </li>
              ))}
            </ul>
            <SiteLink
              className="smm-all"
              href={zoneUrl(z.key, lang)}
              onClick={() => setOpen(false)}
            >
              {z.total > z.top.length ? `${T.see_all} ${z.total} →` : `${T.browse_zone} →`}
            </SiteLink>
          </div>
        ))}
      </div>
    </div>
  );
}
