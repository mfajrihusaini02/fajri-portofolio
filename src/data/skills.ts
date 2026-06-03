import type { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Vue.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Mobile",
    skills: [{ name: "Flutter" }, { name: "Dart" }],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot" },
      { name: "Laravel" },
      { name: "CodeIgniter" },
      { name: "REST API" },
    ],
  },
  {
    category: "Database",
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "MinIO" },
      { name: "Postman" },
      { name: "Swagger" },
    ],
  },
];
