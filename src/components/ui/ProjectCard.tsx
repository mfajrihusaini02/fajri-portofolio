import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.image && (
        <div className="project-card__image-wrapper">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">
          {project.shortDescription}
        </p>
        <div className="project-card__tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="project-card__link"
          aria-label={`View details of ${project.title}`}
        >
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
