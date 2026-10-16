import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import AboutEs from "@/views/es/About";
import head from "@/views/es/About.head.json";

export const Route = createFileRoute("/sobre")({
  head: () => pageHead(head as HeadData),
  component: AboutEs,
});
