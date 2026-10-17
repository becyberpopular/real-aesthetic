import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { loadTreatment } from "@/content/treatments";
import { TREATMENT_ALIASES } from "@/content/treatments/aliases";
import { pageHead } from "@/site/head";
import { TreatmentPage } from "@/site/TreatmentPage";

// Every treatment page: content lives in src/content/treatments/es/<slug>.json
export const Route = createFileRoute("/tratamientos/$slug")({
  loader: async ({ params }) => {
    // Short URLs like /tratamientos/botox/ redirect to the real page.
    const alias = TREATMENT_ALIASES.es[params.slug];
    if (alias)
      throw redirect({ to: "/tratamientos/$slug/", params: { slug: alias }, statusCode: 301 });
    const t = await loadTreatment("es", params.slug);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData }) => (loaderData ? pageHead(loaderData.head) : {}),
  component: TreatmentRoute,
});

function TreatmentRoute() {
  const t = Route.useLoaderData();
  return <TreatmentPage key={t.path} t={t} />;
}
