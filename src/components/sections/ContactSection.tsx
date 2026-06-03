import { Mail, GitBranch, LinkIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Social } from "@/types/social";

type ContactSectionProps = {
  description: string;
  socials: Social[];
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <GitBranch size={20} />,
  Linkedin: <LinkIcon size={20} />,
  Mail: <Mail size={20} />,
};

export function ContactSection({
  description,
  socials,
}: ContactSectionProps) {
  return (
    <section className="section" id="contact">
      <Container>
        <SectionHeader title="Let's Work Together" />
        <div className="contact__content">
          <p className="contact__description">{description}</p>
          <div className="contact__links">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className="contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ICON_MAP[social.icon] ?? null}
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
