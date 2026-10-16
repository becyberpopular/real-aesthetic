import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import HomeEs from "@/views/es/Home";
import head from "@/views/es/Home.head.json";

export const Route = createFileRoute("/")({
  head: () => pageHead(head as HeadData),
  component: HomeEs,
});
