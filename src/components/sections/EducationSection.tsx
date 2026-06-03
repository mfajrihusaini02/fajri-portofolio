import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Education } from "@/types/education";

type EducationSectionProps = {
  educations: Education[];
};

export function EducationSection({
  educations,
}: EducationSectionProps) {
  return (
    <section className="section" id="education">
      <Container>
        <SectionHeader
          title="Education"
          subtitle="My educational journey."
        />
        <div className="education__list">
          {educations.map((edu) => (
            <article key={`${edu.institution}-${edu.degree}`} className="card">
              <div className="education-card__header">
                <h3 className="education-card__degree">
                  {edu.degree}
                </h3>
                <span className="education-card__period">
                  {edu.period}
                </span>
              </div>
              <p className="education-card__institution">{edu.institution}</p>
              <p className="education-card__description">
                {edu.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
