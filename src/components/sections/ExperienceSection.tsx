import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Experience } from "@/types/experience";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="section" id="experience">
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey."
        />
        <div className="experience__list">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.position}`} className="card">
              <div className="experience-card__header">
                <h3 className="experience-card__position">
                  {exp.position}
                </h3>
                <span className="experience-card__period">
                  {exp.period}
                </span>
              </div>
              <p className="experience-card__company">{exp.company}</p>
              <p className="experience-card__description">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
