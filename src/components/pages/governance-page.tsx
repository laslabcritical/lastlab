import type { GovernancePageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface GovernancePageProps {
  page: GovernancePageContent;
}

export function GovernancePage({ page }: GovernancePageProps) {
  return (
    <div className="grid gap-7">
      <Section title={page.seo.title} description={page.intro} index={0} />
      <Section title={page.principlesTitle} description={page.principles} index={1} />

      <Section title={page.statutesNotesTitle} index={2}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.statutesNotes.map((note) => (
            <Card key={note} title={note} />
          ))}
        </div>
      </Section>

      <Section title={page.leadershipTitle} index={3}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.leadership.map((member) => (
            <Card key={member.role} title={member.role} description={member.person} />
          ))}
        </div>
      </Section>

      <Section title={page.membersTitle} index={4}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.members.map((member) => (
            <Card key={member.name} title={member.name} description={`${member.role} · ${member.node}`} />
          ))}
        </div>
      </Section>

      <Section title={page.cam.title} description={page.cam.body} index={5} />
    </div>
  );
}
