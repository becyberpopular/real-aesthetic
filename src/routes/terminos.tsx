import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import TermsEs from "@/views/es/Terms";
import head from "@/views/es/Terms.head.json";

export const Route = createFileRoute("/terminos")({
  head: () => pageHead(head as HeadData),
  component: TermsEs,
});
