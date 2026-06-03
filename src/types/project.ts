export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  techStack: string[];
  challenge: string;
  solution: string;
  result: string;
  image?: string;
  images?: string[]; // new array of screenshots
  githubUrl?: string;
  demoUrl?: string;
};
