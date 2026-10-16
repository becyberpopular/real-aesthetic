import chromeCss from "./chrome.css?raw";

/**
 * Each page ships the stylesheet it had on the original static site. It is mounted with the page
 * and removed when you navigate away, so page styles never leak into each other.
 * The shared chrome styles (mobile menu, mega-menu, footer, related treatments) follow it,
 * matching the order the original site injected them in.
 */
export function PageStyle({ css }: { css: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <style dangerouslySetInnerHTML={{ __html: chromeCss }} />
    </>
  );
}
