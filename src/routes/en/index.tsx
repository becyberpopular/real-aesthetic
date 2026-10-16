import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import HomeEn from "@/views/en/Home";
import head from "@/views/en/Home.head.json";

export const Route = createFileRoute("/en/")({
  head: () => pageHead(head as HeadData),
  component: HomeEn,
});
