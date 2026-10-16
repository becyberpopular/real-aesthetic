import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ProceduresEs from "@/views/es/Procedures";
import head from "@/views/es/Procedures.head.json";

export const Route = createFileRoute("/tratamientos/")({
  head: () => pageHead(head as HeadData),
  component: ProceduresEs,
});
