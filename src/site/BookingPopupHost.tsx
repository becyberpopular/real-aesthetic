import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { OPEN_BOOKING_EVENT, type OpenBookingDetail } from "./booking-events";
import { langFromPath } from "./lang";

// Loaded on the first booking click, so the service list stays out of every page's bundle.
const BookingPopup = lazy(() => import("./BookingPopup"));
const BOOKING_LINK = /^https:\/\/api\.leadconnectorhq\.com\/widget\/booking\/([A-Za-z0-9]+)/;

// Calendar links (booking page cards, treatment "Book" buttons) open in an on-page pop-up instead of a new tab.
// The links keep target="_blank", so a modified click (or no JavaScript) still opens the calendar in a new tab.
export function BookingPopupHost() {
  const [open, setOpen] = useState<OpenBookingDetail | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement)) return;
      const calendarId = a.href.match(BOOKING_LINK)?.[1];
      if (!calendarId) return;
      e.preventDefault();
      const lang = new URL(a.href).searchParams.get("language");
      setOpen({
        calendarId,
        lang: lang === "es" || lang === "en" ? lang : langFromPath(window.location.pathname),
      });
    };
    const onOpen = (e: Event) => setOpen((e as CustomEvent<OpenBookingDetail>).detail);
    document.addEventListener("click", onClick);
    window.addEventListener(OPEN_BOOKING_EVENT, onOpen);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(OPEN_BOOKING_EVENT, onOpen);
    };
  }, []);

  const close = useCallback(() => setOpen(null), []);
  if (!open) return null;
  return (
    <Suspense fallback={null}>
      <BookingPopup calendarId={open.calendarId} lang={open.lang} onClose={close} />
    </Suspense>
  );
}
