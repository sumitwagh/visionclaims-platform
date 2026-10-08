import { createFileRoute } from "@tanstack/react-router";
import { AdjudicationApp } from "@/features/adjudication/app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdjudicationIQ — Vision Claims Platform" },
      { name: "description", content: "Role-based vision claims adjudication, payer review, and provider workflows." },
      { property: "og:title", content: "AdjudicationIQ — Vision Claims Platform" },
      { property: "og:description", content: "Role-based vision claims adjudication, payer review, and provider workflows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <AdjudicationApp />;
}
