import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type AboutSectionProps = {
  paragraphs: readonly string[];
};

export function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section className="section" id="about">
      <Container>
        <SectionHeader title="About Me" />
        <div className="about__content">
          {paragraphs.map((text, index) => (
            <p key={index} className="about__text">
              {text}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
