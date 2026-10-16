import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import PrivacyEs from "@/views/es/Privacy";
import head from "@/views/es/Privacy.head.json";

export const Route = createFileRoute("/privacidad")({
  head: () => pageHead(head as HeadData),
  component: PrivacyEs,
});
