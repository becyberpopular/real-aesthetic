import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/site/BookingPage";
import { bookingHead } from "@/site/booking-head";
import { pageHead } from "@/site/head";

// All bookable services (English). Each card opens that service's GHL calendar.
export const Route = createFileRoute("/book")({
  head: () => pageHead(bookingHead("en")),
  component: () => <BookingPage lang="en" />,
});
