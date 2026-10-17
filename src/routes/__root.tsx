import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportVibeError } from "../lib/vibe-error-reporting";
import { langFromPath } from "../site/lang";
import { BookingPopupHost } from "../site/BookingPopupHost";
import { MetaPixel, PIXEL_ID } from "../site/MetaPixel";
import NotFoundEs from "../views/es/NotFound";
import notFoundHead from "../views/es/NotFound.head.json";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,200..600;1,6..72,200..500&family=JetBrains+Mono:wght@400;500&display=swap";

function NotFoundComponent() {
  // The live site's own 404 page (Spanish, with an English line).
  useEffect(() => {
    document.title = notFoundHead.title;
  }, []);
  return (
    <>
      <meta name="robots" content="noindex,follow" />
      <NotFoundEs />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportVibeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Real Aesthetic Medical Spa · Medicina Estética en Miami" },
      {
        name: "description",
        content:
          "Medicina estética en Miami con Ronal Perdomo Lugo, APRN, FNP-C. Endoláser, Fotona 4D, bioestimuladores y mesoterapia con protocolos conservadores para resultados naturales.",
      },
      { property: "og:site_name", content: "Real Aesthetic Medical Spa" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/img/favicon-192.png" },
      { rel: "apple-touch-icon", href: "/img/favicon-192.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Spanish is the default language; English pages live under /en/, /about/, /procedures/…
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <html lang={langFromPath(pathname)}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <BookingPopupHost />
      <MetaPixel />
    </QueryClientProvider>
  );
}
