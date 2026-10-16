import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import PrivacyEn from "@/views/en/Privacy";
import head from "@/views/en/Privacy.head.json";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead(head as HeadData),
  component: PrivacyEn,
});
