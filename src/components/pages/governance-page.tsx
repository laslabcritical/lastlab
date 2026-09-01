import type { GovernancePageContent } from "@/content/schema";
import { Card } from "@/components/ui/card";
import { ProfileCard } from "@/components/ui/profile-card";
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
            <article key={note} className="rounded-lg border border-brand-100 bg-brand-50/70 p-5">
              <p className="text-sm font-semibold leading-relaxed text-ink">{note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title={page.leadershipTitle} index={3}>
        <div className="grid gap-4 md:grid-cols-2">
          {page.leadership.map((member) => (
            <Card key={member.role} title={member.role} description={member.person}>
              {member.affiliation ? <p>{member.affiliation}</p> : null}
            </Card>
          ))}
        </div>
      </Section>

      <Section title={page.membersTitle} index={4}>
        <div className="grid gap-4 lg:grid-cols-2">
          {page.members.map((member) => (
            <ProfileCard key={member.id} person={member} />
          ))}
        </div>
      </Section>

      <Section title={page.cam.title} description={page.cam.body} index={5} />
    </div>
  );
}
