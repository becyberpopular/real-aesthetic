import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import AboutEn from "@/views/en/About";
import head from "@/views/en/About.head.json";

export const Route = createFileRoute("/about")({
  head: () => pageHead(head as HeadData),
  component: AboutEn,
});
