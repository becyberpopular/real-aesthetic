import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ClubEs from "@/views/es/Club";
import head from "@/views/es/Club.head.json";

export const Route = createFileRoute("/el-club-real-aesthetic")({
  head: () => pageHead(head as HeadData),
  component: ClubEs,
});
