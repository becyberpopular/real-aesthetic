import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
};

// The Cherry financing widget only initialises cleanly on a full page load.
const FULL_PAGE_LOAD = /^\/(financiacion|financing)\/?$/;

/**
 * Internal link that navigates client-side. Accepts a plain href like "/tratamientos/?zone=face#catalog"
 * so page markup can stay as close to the original HTML as possible.
 */
export function SiteLink({ href, children, ...rest }: Props) {
  const url = new URL(href, "https://realaestheticmedspa.com");
  const search = Object.fromEntries(url.searchParams);
  const hash = url.hash.replace(/^#/, "");
  return (
    <Link
      to={url.pathname as never}
      search={(Object.keys(search).length ? search : undefined) as never}
      {...(hash ? { hash } : {})}
      reloadDocument={FULL_PAGE_LOAD.test(url.pathname)}
      // The site's own CSS uses an "active" class, so don't let the router add one.
      activeProps={{}}
      inactiveProps={{}}
      {...(rest as object)}
    >
      {children}
    </Link>
  );
}
