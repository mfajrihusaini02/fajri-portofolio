import { Mail, GitBranch, LinkIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { Social } from "@/types/social";

type FooterProps = {
  socials: Social[];
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <GitBranch size={20} />,
  Linkedin: <LinkIcon size={20} />,
  Mail: <Mail size={20} />,
};

export function Footer({ socials }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <p className="footer__text">
          © {currentYear} Muhammad Fajri Husaini. Built with Next.js and
          TypeScript.
        </p>
        <div className="footer__links">
          {socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              {ICON_MAP[social.icon] ?? null}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
