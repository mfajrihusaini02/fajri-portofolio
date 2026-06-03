import { ArrowDown, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/ui/Typewriter";

type HeroSectionProps = {
  name: string;
  mainTitle: string;
  subtitle: string;
  resumeUrl: string;
};

export function HeroSection({
  name,
  mainTitle,
  subtitle,
  resumeUrl,
}: HeroSectionProps) {
  return (
    <section className="hero" id="hero">
      <Container>
        <div className="hero__content">
          <p className="hero__greeting">Hello, I&apos;m</p>
          <h1 className="hero__title">
            <Typewriter text={name} speed={80} delay={300} />
          </h1>
          <p className="hero__subtitle">{mainTitle}</p>
          <p className="hero__description">{subtitle}</p>
          <div className="hero__actions">
            <Button href="#projects" variant="primary">
              <ArrowDown size={18} />
              View Projects
            </Button>
            <Button href={resumeUrl} variant="secondary" download>
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
