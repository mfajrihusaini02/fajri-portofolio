import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, GitBranch, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { generateSeoMetadata, getProjectBySlug } from "@/lib/seo";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    return generateSeoMetadata({
      title: "Project Not Found",
    });
  }

  return generateSeoMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail">
      <Container>
        <Link href="/#projects" className="project-detail__back">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <header className="project-detail__header">
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__role">{project.role}</p>
          <div className="project-detail__tech">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {project.image && (
          <div className="project-detail__image-wrapper">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        {project.images?.length ? (
          <div className="project-detail__gallery">
            {project.images.map((src, idx) => (
              <div key={idx} className="project-detail__gallery-item">
                <Image
                  src={src}
                  alt={`Screenshot ${idx + 1} of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        ) : null}

        <section className="project-detail__section">
          <h2 className="project-detail__section-title">Overview</h2>
          <p className="project-detail__text">{project.description}</p>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__section-title">The Challenge</h2>
          <p className="project-detail__text">{project.challenge}</p>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__section-title">The Solution</h2>
          <p className="project-detail__text">{project.solution}</p>
        </section>

        <section className="project-detail__section">
          <h2 className="project-detail__section-title">The Result</h2>
          <p className="project-detail__text">{project.result}</p>
        </section>

        {(project.githubUrl || project.demoUrl) && (
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Links</h2>
            <div className="project-detail__links">
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary">
                  <GitBranch size={18} /> View Source
                </Button>
              )}
              {project.demoUrl && (
                <Button href={project.demoUrl} variant="primary">
                  <ExternalLink size={18} /> Live Demo
                </Button>
              )}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
