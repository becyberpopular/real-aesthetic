import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/site/BookingPage";
import { bookingHead } from "@/site/booking-head";
import { pageHead } from "@/site/head";

// All bookable services (Spanish). Each card opens that service's GHL calendar in a pop-up.
export const Route = createFileRoute("/reservar")({
  head: () => pageHead(bookingHead("es")),
  // ?cat=<category key> opens the catalog filtered, e.g. ?cat=endolaser from the home page.
  validateSearch: (search: Record<string, unknown>): { cat?: string } =>
    typeof search["cat"] === "string" ? { cat: search["cat"] } : {},
  component: BookingRoute,
});

function BookingRoute() {
  const { cat } = Route.useSearch();
  return <BookingPage lang="es" category={cat} />;
}
