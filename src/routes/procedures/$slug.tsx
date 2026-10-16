import { createFileRoute, notFound } from "@tanstack/react-router";
import { loadTreatment } from "@/content/treatments";
import { pageHead } from "@/site/head";
import { TreatmentPage } from "@/site/TreatmentPage";

// Every treatment page: content lives in src/content/treatments/en/<slug>.json
export const Route = createFileRoute("/procedures/$slug")({
  loader: async ({ params }) => {
    const t = await loadTreatment("en", params.slug);
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
