import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site";

type SeoParams = {
  title?: string;
  description?: string;
  path?: string;
};

export function generateSeoMetadata({
  title,
  description,
  path = "",
}: SeoParams = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`;

  const pageDescription = description ?? SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getProjectBySlug<T extends { slug: string }>(
  projects: T[],
  slug: string
): T | undefined {
  return projects.find((project) => project.slug === slug);
}
