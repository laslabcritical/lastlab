import type { NetworkPageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { ProfileCard } from "@/components/ui/profile-card";
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
        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-lg border border-brand-100 bg-brand-50/70 p-5">
            <h3 className="font-heading text-xl font-bold text-ink">{page.nodes.institutionalTitle}</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {page.nodes.institutional.map((node) => (
                <Card key={node.name} title={node.name} description={node.institution}>
                  <p className="font-semibold text-brand-700">{node.location}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-accent/30 bg-white p-5 shadow-panel">
            <h3 className="font-heading text-xl font-bold text-ink">{page.nodes.organizationalTitle}</h3>
            <div className="mt-4 grid gap-4">
              {page.nodes.organizational.map((node) => (
                <Card key={node.name} title={node.name} description={node.description}>
                  <p className="font-semibold text-brand-700">{node.location}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title={page.nodeTypes.title} index={4}>
        <div className="grid gap-4 md:grid-cols-3">
          {page.nodeTypes.items.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section title={page.people.title} index={5}>
        <div className="grid gap-4 lg:grid-cols-2">
          {page.people.items.map((person) => (
            <ProfileCard key={person.id} person={person} />
          ))}
        </div>
      </Section>

      <Section title={page.governance.title} description={page.governance.body} index={6} />
    </div>
  );
}
