import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import FinancingEs from "@/views/es/Financing";
import head from "@/views/es/Financing.head.json";

export const Route = createFileRoute("/financiacion")({
  head: () =>
    pageHead(head as HeadData, {
      stylesheets: [
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px:wght@200..900&family=Lato:wght@200..900&family=Raleway:wght@200..900&family=Montserrat:wght@200..900&family=Oswald:wght@200..900&family=Poppins:wght@200..900&family=Source+Sans+Pro:wght@200..900&family=PT+Sans:wght@200..900&family=Open+Sans:wght@200..900&display=swap",
      ],
    }),
  component: FinancingEs,
});
