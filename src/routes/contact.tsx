import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ContactEn from "@/views/en/Contact";
import head from "@/views/en/Contact.head.json";

export const Route = createFileRoute("/contact")({
  head: () => pageHead(head as HeadData),
  component: ContactEn,
});
