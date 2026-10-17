import { useEffect, useRef, useState } from "react";
import { BOOKING_CATEGORIES, bookingUrl } from "./booking-data";
import type { Lang } from "./lang";

// Name, duration and price for the pop-up header, by GHL calendar id.
const SERVICES = new Map(
  BOOKING_CATEGORIES.flatMap((c) => c.services.map((s) => [s.calendarId, s] as const)),
);

const T = {
  es: { eyebrow: "Reservar cita", close: "Cerrar", loading: "Cargando calendario…" },
  en: { eyebrow: "Book appointment", close: "Close", loading: "Loading calendar…" },
};

// The calendar widget is themed in GHL with the same deep gold on ivory, so it blends into the panel.
const CSS = `
.ra-bk-overlay{position:fixed;inset:0;z-index:2000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(26,20,12,.62);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);animation:ra-bk-fade .2s ease;}
.ra-bk-dialog{position:relative;display:flex;flex-direction:column;width:100%;max-width:980px;height:min(86vh,860px);background:#fbf6ec;border:1px solid rgba(200,153,104,.45);border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden;animation:ra-bk-rise .28s cubic-bezier(.22,.61,.36,1);}
.ra-bk-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:22px 26px 16px;border-bottom:1px solid rgba(200,153,104,.3);flex-shrink:0;}
.ra-bk-eyebrow{display:block;margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.32em;text-transform:uppercase;color:#c89968;}
.ra-bk-title{margin:0;font-family:'Newsreader',serif;font-weight:400;font-size:1.45rem;line-height:1.2;color:#1a140c;}
.ra-bk-meta{margin-top:8px;font-family:'Inter',sans-serif;font-weight:300;font-size:.88rem;color:#6e6452;}
.ra-bk-meta .ra-bk-price{font-family:'Newsreader',serif;font-weight:400;font-size:1rem;color:#a87a48;}
.ra-bk-close{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:38px;height:38px;padding:0;border:1px solid rgba(200,153,104,.55);border-radius:50%;background:transparent;color:#3a2e22;cursor:pointer;transition:background .2s,border-color .2s,color .2s;}
.ra-bk-close:hover{background:rgba(200,153,104,.12);border-color:#c89968;color:#1a140c;}
.ra-bk-close:focus-visible{outline:2px solid #c89968;outline-offset:2px;}
.ra-bk-body{position:relative;flex:1;min-height:0;}
.ra-bk-body iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:transparent;}
.ra-bk-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:#8a7e68;}
@media (max-width:640px){
  .ra-bk-overlay{padding:0;align-items:flex-end;}
  .ra-bk-dialog{max-width:none;height:94vh;height:94dvh;border-bottom:0;border-radius:18px 18px 0 0;}
  .ra-bk-head{padding:18px 18px 14px;}
  .ra-bk-title{font-size:1.2rem;}
}
@keyframes ra-bk-fade{from{opacity:0}}
@keyframes ra-bk-rise{from{opacity:0;transform:translateY(16px)}}
@media (prefers-reduced-motion:reduce){.ra-bk-overlay,.ra-bk-dialog{animation:none;}}
`;

export default function BookingPopup({
  calendarId,
  lang,
  onClose,
}: {
  calendarId: string;
  lang: Lang;
  onClose: () => void;
}) {
  const t = T[lang];
  const s = SERVICES.get(calendarId);
  const name = s ? (lang === "es" ? s.es : s.en) : t.eyebrow;
  const price = s ? (lang === "es" ? s.priceEs : s.priceEn) : "";
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, close on Escape, and hand focus back to the clicked button afterwards.
  useEffect(() => {
    const returnTo = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      returnTo?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="ra-bk-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <style>{CSS}</style>
      <div className="ra-bk-dialog" role="dialog" aria-modal="true" aria-labelledby="ra-bk-title">
        <div className="ra-bk-head">
          <div>
            <span className="ra-bk-eyebrow">{t.eyebrow}</span>
            <h3 id="ra-bk-title" className="ra-bk-title">
              {name}
            </h3>
            {s && (
              <div className="ra-bk-meta">
                {s.minutes} min
                {price && (
                  <>
                    {" · "}
                    <span className="ra-bk-price">{price}</span>
                  </>
                )}
              </div>
            )}
          </div>
          <button
            ref={closeRef}
            type="button"
            className="ra-bk-close"
            aria-label={t.close}
            onClick={onClose}
          >
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
        <div className="ra-bk-body">
          {!loaded && <div className="ra-bk-loading">{t.loading}</div>}
          <iframe
            src={bookingUrl(calendarId, lang)}
            title={name}
            allow="payment *"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
