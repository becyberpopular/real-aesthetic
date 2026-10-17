/**
 * Page behaviours ported from the original site's inline scripts.
 * They work on the rendered markup (the same selectors/ids the original used) and clean up on unmount,
 * so navigating between pages leaves no listeners or body classes behind.
 */
import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { CATALOG } from "./catalog-data";
import type { Lang } from "./lang";

/** Show the fixed top nav (and hide the language pill) once the page scrolls past 80px. */
export function useTopNavOnScroll() {
  useEffect(() => {
    const topnav = document.querySelector<HTMLElement>("nav.top");
    if (!topnav) return;
    let shown = false;
    const update = () => {
      const should = window.scrollY > 80;
      if (should !== shown) {
        shown = should;
        topnav.classList.toggle("show", shown);
        document.body.classList.toggle("scrolled", shown);
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      topnav.classList.remove("show");
      document.body.classList.remove("scrolled");
    };
  }, []);
}

/** Show the top nav once the full-height hero is less than 60% visible (home + catalog pages). */
function observeHeroForNav(): () => void {
  const topnav = document.getElementById("topnav");
  const heroEl = document.querySelector("section.hero");
  if (!topnav || !heroEl) return () => {};
  const obs = new IntersectionObserver(
    ([entry]) => {
      const onHero = (entry?.intersectionRatio ?? 0) > 0.6;
      topnav.classList.toggle("show", !onHero);
      document.body.classList.toggle("scrolled", !onHero);
    },
    { threshold: [0, 0.6, 1] },
  );
  obs.observe(heroEl);
  return () => {
    obs.disconnect();
    topnav.classList.remove("show");
    document.body.classList.remove("scrolled");
  };
}

/** Booking page: same hero-aware top nav as the catalog page. */
export function useHeroNav() {
  useEffect(() => observeHeroForNav(), []);
}

/** Home: treatment slides pager, in-view animations, hero-aware nav and parallax. */
export function useHomePage() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const treatments = Array.from(document.querySelectorAll<HTMLElement>("section.treatment"));
    const pager = document.getElementById("pager");
    const dots = pager ? Array.from(pager.querySelectorAll<HTMLElement>("span")) : [];

    const inViewObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("in-view", e.isIntersecting);
          if (e.isIntersecting) {
            const idx = treatments.indexOf(e.target as HTMLElement);
            if (idx >= 0) dots.forEach((d, j) => d.classList.toggle("active", j === idx));
          }
        });
      },
      { threshold: 0.5 },
    );
    treatments.forEach((s) => inViewObs.observe(s));
    cleanups.push(() => inViewObs.disconnect());

    dots.forEach((d, idx) => {
      const onClick = () => treatments[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
      d.addEventListener("click", onClick);
      cleanups.push(() => d.removeEventListener("click", onClick));
    });

    if (pager) {
      const pagerVisObs = new IntersectionObserver(
        (entries) => {
          pager.classList.toggle(
            "visible",
            entries.some((e) => e.isIntersecting),
          );
        },
        { threshold: 0.4 },
      );
      treatments.forEach((s) => pagerVisObs.observe(s));
      cleanups.push(() => pagerVisObs.disconnect());
    }

    cleanups.push(observeHeroForNav());

    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;
    const updateParallax = () => {
      const wH = window.innerHeight;
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > wH + 100) return;
        const speed = parseFloat(el.dataset["parallax"] ?? "") || 0.3;
        const center = rect.top + rect.height / 2 - wH / 2;
        el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);
}

/** Treatment pages: top nav on scroll + parallax on the hero and the closing CTA background. */
export function useTreatmentPage(key: string) {
  useTopNavOnScroll();
  useEffect(() => {
    const heroBg = document.getElementById("heroBg");
    const ctaBg = document.getElementById("ctaBg");
    const pulse = () => {
      const y = window.scrollY;
      if (heroBg) heroBg.style.transform = "translateY(" + y * 0.35 + "px)";
      if (ctaBg && ctaBg.parentElement) {
        const rect = ctaBg.parentElement.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        ctaBg.style.transform = "scaleX(-1) translateY(" + -center * 0.3 + "px)";
      }
    };
    window.addEventListener("scroll", pulse, { passive: true });
    pulse();
    return () => window.removeEventListener("scroll", pulse);
  }, [key]);
}

/** Contact pages: GHL's embed script, which resizes the consultation calendar iframe to its content. */
export function useContactPage() {
  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const js = document.createElement("script");
    js.src = src;
    js.async = true;
    document.body.appendChild(js);
  }, []);
}

type CherryFn = ((...args: unknown[]) => void) & { q?: unknown[][] };

/** Financing pages: top nav on scroll + the Cherry payment-plan widget. */
export function useFinancingPage(lang: Lang) {
  useTopNavOnScroll();
  useEffect(() => {
    const w = window as unknown as { _hw?: CherryFn };
    // Re-initialise cleanly when coming back to this page without a full reload.
    document.getElementById("_hw")?.remove();
    delete w._hw;
    const stub: CherryFn = (...args: unknown[]) => {
      (stub.q = stub.q || []).push(args);
    };
    w._hw = stub;
    const js = document.createElement("script");
    js.id = "_hw";
    js.src = "https://files.withcherry.com/widgets/widget.js";
    js.async = true;
    const first = document.getElementsByTagName("script")[0];
    if (first?.parentNode) first.parentNode.insertBefore(js, first);
    else document.head.appendChild(js);
    w._hw(
      "init",
      {
        debug: false,
        variables: {
          slug: "real-aesthetic-medical-spa-llc",
          name: "Real Aesthetic Medical Spa LLC",
          images: [24],
          customLogo: "https://realaestheticmedspa.com/img/logo-horizontal.webp",
          defaultPurchaseAmount: 750,
          customImage: "",
          imageCategory: "medspa",
          language: lang,
        },
        styles: {
          primaryColor: "#0e3a2c",
          secondaryColor: "#d4a857",
          fontFamily: "Montserrat",
          headerFontFamily: "Montserrat",
        },
      },
      ["hero", "calculator", "howitworks", "faq"],
    );
  }, [lang]);
}

/** Catalog pages (/tratamientos/, /procedures/): filter pills, search, zone diagram, ?zone= deep links. */
export function useCatalogPage(lang: Lang) {
  const router = useRouter();
  const search = useRouterState({ select: (s) => s.location.searchStr });

  useEffect(() => {
    const cfg = CATALOG[lang];
    const grid = document.getElementById("catalogGrid");
    const filters = document.getElementById("catalogFilters");
    const searchInput = document.getElementById("catalogSearch") as HTMLInputElement | null;
    if (!grid) return;
    const cleanups: Array<() => void> = [];
    const linked = new Set(cfg.linked);
    const root = lang === "es" ? "/tratamientos/" : "/procedures/";

    function renderCards(filter: string, q0: string) {
      if (!grid) return;
      while (grid.firstChild) grid.removeChild(grid.firstChild);
      const q = (q0 || "").trim().toLowerCase();
      const filtered = cfg.procedures.filter((p) => {
        if (filter && filter !== "all" && p.zone !== filter) return false;
        if (q && !p.name.toLowerCase().includes(q) && !p.tag.toLowerCase().includes(q))
          return false;
        return true;
      });
      if (filtered.length === 0) {
        const empty = document.createElement("div");
        empty.className = "catalog-empty";
        empty.textContent = cfg.empty;
        grid.appendChild(empty);
        return;
      }
      filtered.forEach((p) => {
        const card = document.createElement("a");
        const targetSlug = cfg.slugAliases[p.slug] ?? p.slug;
        const hasTarget = cfg.slugAliases[p.slug] || linked.has(p.slug);
        card.href = hasTarget ? root + targetSlug + "/" : "#" + p.slug;
        card.className = "proc-card";

        const img = document.createElement("div");
        img.className = "card-image";
        const photo = document.createElement("img");
        // 720px thumbnail (the full-size page images are 2400px wide).
        photo.src = "/img/thumb/" + (p.imgSlug || p.slug) + ".webp";
        photo.alt = p.name;
        photo.loading = "lazy";
        photo.decoding = "async";
        const monogram = document.createElement("span");
        monogram.className = "card-monogram";
        monogram.textContent = "RA";
        const zone = document.createElement("span");
        zone.className = "card-zone";
        zone.textContent = cfg.zoneLabels[p.zone] ?? "";
        img.appendChild(monogram);
        img.appendChild(photo);
        img.appendChild(zone);

        const body = document.createElement("div");
        body.className = "card-body";
        const name = document.createElement("div");
        name.className = "card-name";
        name.textContent = p.name;
        const tag = document.createElement("div");
        tag.className = "card-tag";
        tag.textContent = p.tag;
        body.appendChild(name);
        body.appendChild(tag);

        card.appendChild(img);
        card.appendChild(body);
        grid.appendChild(card);
      });
    }
    renderCards("all", "");

    // Card clicks navigate client-side like the rest of the site.
    const onGridClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      const href = a?.getAttribute("href");
      if (
        !a ||
        !href ||
        href.startsWith("#") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.button !== 0
      )
        return;
      e.preventDefault();
      void router.navigate({ to: href as never });
    };
    grid.addEventListener("click", onGridClick);
    cleanups.push(() => grid.removeEventListener("click", onGridClick));

    const onFilterClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.matches(".filter-pill")) return;
      document
        .querySelectorAll<HTMLElement>(".filter-pill")
        .forEach((b) => b.classList.toggle("active", b === target));
      renderCards(target.dataset["filter"] ?? "all", searchInput?.value ?? "");
    };
    filters?.addEventListener("click", onFilterClick);
    cleanups.push(() => filters?.removeEventListener("click", onFilterClick));

    const onSearch = () => {
      const active = document.querySelector<HTMLElement>(".filter-pill.active");
      renderCards(active?.dataset["filter"] ?? "all", searchInput?.value ?? "");
    };
    searchInput?.addEventListener("input", onSearch);
    cleanups.push(() => searchInput?.removeEventListener("input", onSearch));

    document.querySelectorAll<HTMLElement>(".zone-link-all").forEach((a) => {
      const onClick = () => {
        const filter = a.dataset["filter"];
        if (filter)
          document.querySelector<HTMLElement>(`.filter-pill[data-filter="${filter}"]`)?.click();
      };
      a.addEventListener("click", onClick);
      cleanups.push(() => a.removeEventListener("click", onClick));
    });

    cleanups.push(observeHeroForNav());

    // Pinned zone diagram (desktop only)
    const setZone = (idx: number) => {
      document
        .querySelectorAll<HTMLElement>(".zone-panel")
        .forEach((p) => p.classList.toggle("active", Number(p.dataset["zone"]) === idx));
      document
        .querySelectorAll<HTMLElement>(".zone-progress span")
        .forEach((s) => s.classList.toggle("active", Number(s.dataset["zone"]) === idx));
      document.querySelectorAll<HTMLElement>(".zone-pin").forEach((pin) => {
        const pz = Number(pin.dataset["zone"]);
        pin.style.opacity = pz === idx ? "1" : "0";
        pin.style.transform =
          pz === idx ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(0)";
      });
      const label = document.getElementById("progressLabel");
      if (label) label.textContent = "0" + idx + " / 05 — " + cfg.progressLabels[idx - 1];
    };
    const pin = document.getElementById("diagramPin");
    const bodyWrap = document.getElementById("bodyWrap");
    const figureEl = document.getElementById("diagramFigure");
    let lastZone = 1;
    const applyImagePan = (progress: number) => {
      if (!bodyWrap || !figureEl) return;
      const fig = figureEl.getBoundingClientRect();
      const img = bodyWrap.querySelector<HTMLImageElement>(".body-figure-img");
      if (!img || !img.complete) return;
      const wrapH = bodyWrap.clientHeight || img.clientHeight;
      const overflow = Math.max(0, wrapH - fig.height);
      bodyWrap.style.transform = `translateY(${-overflow * progress}px)`;
    };
    const onScroll = () => {
      if (!pin || window.matchMedia("(max-width: 900px)").matches) return;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const z = Math.min(5, Math.max(1, Math.floor(progress * 5) + 1));
      if (z !== lastZone) {
        lastZone = z;
        setZone(z);
      }
      applyImagePan(progress);
    };
    const figImg = document.querySelector(".body-figure-img");
    figImg?.addEventListener("load", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => {
      figImg?.removeEventListener("load", onScroll);
      window.removeEventListener("scroll", onScroll);
    });
    setZone(1);
    onScroll();

    return () => cleanups.forEach((fn) => fn());
  }, [lang, router]);

  // Pre-apply ?zone=face / ?zone=body / … from the URL (used by related-treatment cards and the menus).
  useEffect(() => {
    const z = new URLSearchParams(search).get("zone");
    if (!z) return;
    const pill = document.querySelector<HTMLElement>(`.filter-pill[data-filter="${z}"]`);
    if (!pill) return;
    pill.click();
    const cat = document.getElementById("catalog");
    if (!cat) return;
    const timer = window.setTimeout(
      () => cat.scrollIntoView({ behavior: "smooth", block: "start" }),
      60,
    );
    return () => window.clearTimeout(timer);
  }, [search]);
}
