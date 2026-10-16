import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ClubEn from "@/views/en/Club";
import head from "@/views/en/Club.head.json";

export const Route = createFileRoute("/the-real-aesthetic-club")({
  head: () => pageHead(head as HeadData),
  component: ClubEn,
});
