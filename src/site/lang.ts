export type Lang = "es" | "en";

// Top-level path segments that belong to the English version of the site.
// Everything else (/, /sobre/, /tratamientos/…) is Spanish, the default language.
const EN_ROOTS = [
  "en",
  "about",
  "procedures",
  "contact",
  "the-real-aesthetic-club",
  "financing",
  "terms",
  "privacy",
];

export function langFromPath(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  return EN_ROOTS.includes(first) ? "en" : "es";
}
