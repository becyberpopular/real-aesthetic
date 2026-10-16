import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import TermsEn from "@/views/en/Terms";
import head from "@/views/en/Terms.head.json";

export const Route = createFileRoute("/terms")({
  head: () => pageHead(head as HeadData),
  component: TermsEn,
});
