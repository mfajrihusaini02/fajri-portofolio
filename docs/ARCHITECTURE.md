# ARCHITECTURE.md

Version: 1.0.0

Project:
Muhammad Fajri Husaini Portfolio

Tech Stack:

* Next.js
* TypeScript
* Vanilla CSS

---

## Architecture Goal

Membangun website portfolio pribadi yang:

* Ringan
* Cepat
* SEO-friendly
* Mudah dirawat
* Mudah dikembangkan
* Tidak over-engineered

Website ini hanya fokus untuk portfolio pribadi, bukan aplikasi kompleks.

---

## Application Type

Type:

Static Portfolio Website

Rendering Strategy:

Static Site Generation

Reason:

* Konten jarang berubah
* Lebih cepat
* Lebih SEO-friendly
* Cocok untuk Vercel
* Tidak membutuhkan backend

---

## Routing Strategy

Menggunakan Next.js App Router.

Routes:

```text
/
```

Homepage portfolio utama.

```text
/projects/[slug]
```

Halaman detail project.

```text
/not-found
```

Fallback page untuk route tidak ditemukan.

---

## Page Structure

### Homepage

Route:

```text
/
```

Sections:

```text
Navbar
HeroSection
AboutSection
SkillsSection
ExperienceSection
ProjectsSection
ContactSection
Footer
```

---

### Project Detail Page

Route:

```text
/projects/[slug]
```

Content:

```text
Project Header
Project Overview
Role
Tech Stack
Challenge
Solution
Result
Screenshots
Back to Projects
```

---

## Folder Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── projects/
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       └── Container.tsx
│
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── experiences.ts
│   ├── projects.ts
│   └── socials.ts
│
├── types/
│   ├── project.ts
│   ├── experience.ts
│   ├── skill.ts
│   └── social.ts
│
├── constants/
│   └── site.ts
│
├── lib/
│   └── seo.ts
│
└── styles/
    ├── variables.css
    ├── reset.css
    ├── utilities.css
    └── components.css
```

---

## File Responsibility

### app/

Berisi routing, layout global, metadata, dan page utama.

Tidak boleh berisi data portfolio secara langsung.

---

### components/

Berisi reusable UI dan section.

Komponen harus fokus pada tampilan dan menerima data melalui props.

---

### data/

Berisi seluruh konten portfolio.

Semua konten seperti profile, skill, experience, project, dan social links wajib disimpan di folder ini.

Tidak boleh hardcode konten langsung di komponen.

---

### types/

Berisi TypeScript type untuk data portfolio.

---

### constants/

Berisi konfigurasi statis website.

Contoh:

```ts
export const SITE_CONFIG = {
  name: "Muhammad Fajri Husaini",
  title: "Frontend Developer & Flutter Developer",
  url: "https://your-domain.com",
};
```

---

### lib/

Berisi helper function.

Contoh:

* generate metadata
* format date
* get project by slug

---

### styles/

Berisi CSS global dan shared styles.

Karena menggunakan Vanilla CSS, struktur CSS harus rapi dan tidak random.

---

## CSS Architecture

Menggunakan Vanilla CSS dengan pendekatan:

* CSS Variables
* Global Reset
* Utility Classes sederhana
* Component Classes

---

## CSS File Rules

```text
globals.css
```

Import semua CSS utama.

```text
variables.css
```

Berisi design token.

```text
reset.css
```

Berisi reset default browser.

```text
utilities.css
```

Berisi helper class kecil.

```text
components.css
```

Berisi style komponen umum.

---

## CSS Variable Example

```css
:root {
  --color-primary: #0f172a;
  --color-secondary: #334155;
  --color-accent: #2563eb;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-border: #e2e8f0;

  --font-main: Inter, sans-serif;

  --container-width: 1280px;
  --content-width: 768px;

  --radius-button: 12px;
  --radius-card: 16px;
}
```

---

## Component Rules

### General Rules

1. One component must have one responsibility.
2. Components should be small and readable.
3. Avoid deeply nested JSX.
4. Avoid business logic inside UI components.
5. Use props instead of direct data import when reusable.

---

## Component Naming

Use PascalCase.

Correct:

```text
HeroSection.tsx
ProjectCard.tsx
SkillBadge.tsx
```

Wrong:

```text
hero-section.tsx
project_card.tsx
cardProject.tsx
```

---

## Function Naming

Use camelCase.

Correct:

```text
getProjectBySlug
formatDate
generateSeoMetadata
```

Wrong:

```text
GetProjectBySlug
format_date
generate_seo_metadata
```

---

## Data Strategy

All website content must be stored in:

```text
src/data
```

Example:

```text
profile.ts
projects.ts
skills.ts
experiences.ts
socials.ts
```

Components should consume data from page-level files and receive them as props.

---

## Project Data Type

```ts
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
  githubUrl?: string;
  demoUrl?: string;
};
```

---

## Experience Data Type

```ts
export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
};
```

---

## SEO Strategy

### Metadata

Every page must have:

* title
* description
* openGraph
* twitter
* canonical URL

---

## Homepage SEO

Title:

Muhammad Fajri Husaini | Frontend Developer & Flutter Developer

Description:

Personal portfolio of Muhammad Fajri Husaini, showcasing frontend, mobile, and backend development projects.

---

## Project Detail SEO

Each project page should generate dynamic metadata based on project content.

Example:

```ts
export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    title: `${project.title} | Muhammad Fajri Husaini`,
    description: project.shortDescription,
  };
}
```

---

## Image Strategy

Images must be placed in:

```text
public/images/
```

Structure:

```text
public/
├── images/
│   ├── profile/
│   └── projects/
└── resume.pdf
```

---

## Image Rules

1. Use optimized image format.
2. Use descriptive filenames.
3. Always provide alt text.
4. Avoid large images.
5. Compress screenshots before upload.

Example:

```text
cbas-dashboard.webp
portfolio-homepage.webp
```

---

## Performance Rules

Avoid:

* Heavy animation library
* Unnecessary npm packages
* Large image files
* Client-side rendering for static content

Prefer:

* Server Components
* Static data
* Next Image
* CSS Variables
* Minimal JavaScript

---

## Client Component Rules

Default:

Use Server Components.

Use Client Components only when needed for:

* Menu toggle
* Interactive button
* Form interaction

Do not add "use client" unless necessary.

---

## State Management

Allowed:

* useState
* useEffect
* React Context if needed

Not Allowed:

* Redux
* Zustand
* MobX

Reason:

Portfolio website does not require complex state management.

---

## Dependency Rules

Allowed:

* lucide-react for icons
* clsx if needed

Avoid:

* UI framework
* Animation-heavy library
* Large component library
* State management library

---

## Accessibility Rules

All pages must:

* Use semantic HTML
* Have one h1 per page
* Use descriptive alt text
* Have keyboard accessible navigation
* Use proper button and link elements
* Maintain color contrast

---

## Git Branch Strategy

Main branch:

```text
main
```

Development branch:

```text
dev
```

Feature branch:

```text
feature/hero-section
feature/project-section
feature/project-detail-page
```

Fix branch:

```text
fix/navbar-mobile
```

---

## Commit Convention

Use simple conventional commits.

Examples:

```text
feat: add hero section
feat: add project detail page
fix: improve mobile navbar
style: update button spacing
chore: update project data
docs: add source of truth
```

---

## Definition of Done

A feature is considered done when:

* Responsive on mobile
* Works on desktop
* Content comes from data files
* No console error
* No TypeScript error
* No ESLint error
* Uses semantic HTML
* Passes basic accessibility check
* Does not break Lighthouse target

---

## Non-Technical Constraints

Do not add features that make the portfolio complex.

Avoid:

* Authentication
* Dashboard
* CMS
* Comments
* Blog in version 1
* Real-time features
* Database
* Admin panel

---

## Future Improvements

Version 1:

Static Portfolio

Version 2:

Project Case Studies

Version 3:

Blog or Writing Section

Version 4:

Dark Mode

Version 5:

Analytics

---

End of Document.
