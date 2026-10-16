import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ContactEs from "@/views/es/Contact";
import head from "@/views/es/Contact.head.json";

export const Route = createFileRoute("/contacto")({
  head: () => pageHead(head as HeadData),
  component: ContactEs,
});
