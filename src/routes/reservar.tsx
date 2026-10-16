import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/site/BookingPage";
import { bookingHead } from "@/site/booking-head";
import { pageHead } from "@/site/head";

// All bookable services (Spanish). Each card opens that service's GHL calendar.
export const Route = createFileRoute("/reservar")({
  head: () => pageHead(bookingHead("es")),
  component: () => <BookingPage lang="es" />,
});
