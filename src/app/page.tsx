import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { educations } from "@/data/educations";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";


export default function Home() {
  return (
    <main>
      <HeroSection
        name={profile.name}
        mainTitle={profile.mainTitle}
        subtitle={profile.subtitle}
        resumeUrl={profile.resumeUrl}
      />
      <AboutSection paragraphs={profile.about} />
      <SkillsSection categories={skills} />
      <ExperienceSection experiences={experiences} />
      <EducationSection educations={educations} />
      <ProjectsSection projects={projects} />
      <ContactSection
        description="Feel free to reach out if you are interested in collaborating, discussing opportunities, or simply connecting."
        socials={socials}
      />
      <BackToTopButton />
    </main>
  );
}
