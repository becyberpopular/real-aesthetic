import { createFileRoute } from "@tanstack/react-router";
import { pageHead, type HeadData } from "@/site/head";
import ProceduresEn from "@/views/en/Procedures";
import head from "@/views/en/Procedures.head.json";

export const Route = createFileRoute("/procedures/")({
  head: () => pageHead(head as HeadData),
  component: ProceduresEn,
});
