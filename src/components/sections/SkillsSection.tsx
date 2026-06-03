import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { SkillCategory } from "@/types/skill";

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="section section--surface" id="skills">
      <Container>
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with."
        />
        <div className="skills__grid">
          {categories.map((category) => (
            <div key={category.category}>
              <h3 className="skills__category-title">
                {category.category}
              </h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
