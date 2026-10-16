import type { Lang } from "./lang";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { SiteFooter } from "./SiteFooter";

/** Site-wide pieces every page gets: desktop mega-menu, mobile menu and footer. */
export function SiteChrome({ lang }: { lang: Lang }) {
  return (
    <>
      <MegaMenu lang={lang} />
      <MobileNav lang={lang} />
      <SiteFooter lang={lang} />
    </>
  );
}
