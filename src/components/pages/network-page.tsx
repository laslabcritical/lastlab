import type { NetworkPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface NetworkPageProps {
  page: NetworkPageContent;
}

export function NetworkPage({ page }: NetworkPageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0} />
      <Section title={page.structure.title} description={page.structure.body} index={1} />
      <Section title={page.seats.title} description={page.seats.body} index={2} />

      <Section title={page.nodes.title} index={3}>
        <div className="grid gap-4 md:grid-cols-3">
          {page.nodes.items.map((node) => (
            <Card key={node} title={node} />
          ))}
        </div>
      </Section>

      <Section title={page.nodeTypes.title} index={4}>
        <div className="grid gap-4 md:grid-cols-3">
          {page.nodeTypes.items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section title={page.participants.title} index={5}>
        <div className="grid gap-4 md:grid-cols-3">
          {page.participants.items.map((item) => (
            <Card
              key={item.node}
              title={item.node}
              description={`${item.country} · ${item.participants}`}
            />
          ))}
        </div>
      </Section>

      <Section title={page.governance.title} description={page.governance.body} index={6} />
    </div>
  );
}
