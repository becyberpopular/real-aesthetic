import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Meta (Facebook) Pixel — Real Aesthetic Medical Spa. Fires PageView on every page view. */
export const PIXEL_ID = "26339641549065836";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: Fbq;
  loaded: boolean;
  version: string;
};

function loadPixel() {
  const w = window as unknown as { fbq?: Fbq; _fbq?: Fbq };
  if (w.fbq) return;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as Fbq;
  w.fbq = n;
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  const t = document.createElement("script");
  t.async = true;
  t.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(t);
  n("init", PIXEL_ID);
}

export function MetaPixel() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    // Keep local development visits out of the client's ad data.
    if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return;
    loadPixel();
    (window as unknown as { fbq: Fbq }).fbq("track", "PageView");
  }, [pathname]);
  return null;
}
