# DEVELOPMENT_RULES.md

Version: 1.0.0

Project:
Muhammad Fajri Husaini Portfolio

Tech Stack:

* Next.js
* TypeScript
* Vanilla CSS

---

## Development Goal

Menjaga proses development agar:

* Konsisten
* Rapi
* Mudah dipelihara
* Tidak over-engineered
* Tetap ringan dan cepat

---

## General Rules

1. Portfolio ini harus tetap sederhana.
2. Jangan menambahkan fitur yang tidak berhubungan dengan portfolio.
3. Jangan menambahkan dependency tanpa alasan kuat.
4. Konten harus berasal dari folder `src/data`.
5. Komponen tidak boleh berisi hardcoded content utama.
6. Prioritaskan performance, SEO, dan readability.

---

## TypeScript Rules

TypeScript wajib digunakan.

Strict mode harus aktif.

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Gunakan type untuk:

* Project
* Experience
* Skill
* Social Link
* Profile

Hindari penggunaan:

```ts
any
```

Gunakan:

```ts
unknown
```

jika tipe data belum pasti.

---

## Component Rules

Setiap component harus memiliki satu tanggung jawab.

Benar:

```text
HeroSection.tsx
ProjectCard.tsx
SkillBadge.tsx
Navbar.tsx
Footer.tsx
```

Salah:

```text
PortfolioPageContent.tsx
AllSections.tsx
BigComponent.tsx
```

---

## Component Structure

Urutan isi component:

```tsx
type Props = {
  title: string;
};

export function ComponentName({ title }: Props) {
  return <section>{title}</section>;
}
```

Rules:

* Props type ditulis di atas component.
* Gunakan named export.
* Hindari default export kecuali file `page.tsx` dan `layout.tsx`.
* Jangan menulis logic kompleks di JSX.

---

## Styling Rules

Menggunakan Vanilla CSS.

Tidak menggunakan:

* Tailwind CSS
* Bootstrap
* Material UI
* Ant Design
* Chakra UI

CSS harus mengacu ke:

```text
DESIGN_SYSTEM.md
```

Gunakan CSS variables.

Contoh:

```css
.card {
  padding: var(--space-24);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border);
}
```

Jangan menggunakan angka random.

Salah:

```css
.card {
  padding: 27px;
  border-radius: 19px;
}
```

Benar:

```css
.card {
  padding: var(--space-24);
  border-radius: var(--radius-card);
}
```

---

## CSS Class Naming

Gunakan class name yang jelas dan sederhana.

Contoh:

```css
.hero
.hero__content
.hero__title
.hero__description
.project-card
.project-card__title
```

Hindari:

```css
.box1
.textBlue
.containerNew
```

---

## Data Rules

Semua data portfolio wajib berada di folder:

```text
src/data
```

Contoh:

```text
profile.ts
skills.ts
projects.ts
experiences.ts
socials.ts
```

Komponen hanya menerima data melalui props.

Salah:

```tsx
export function HeroSection() {
  return <h1>Muhammad Fajri Husaini</h1>;
}
```

Benar:

```tsx
export function HeroSection({ name }: Props) {
  return <h1>{name}</h1>;
}
```

---

## File Naming Rules

Components:

```text
PascalCase.tsx
```

Example:

```text
HeroSection.tsx
ProjectCard.tsx
```

Data files:

```text
camelCase.ts
```

Example:

```text
projects.ts
profile.ts
```

CSS files:

```text
kebab-case.css
```

Example:

```text
project-card.css
hero-section.css
```

---

## Import Rules

Gunakan absolute import jika sudah dikonfigurasi.

Contoh:

```ts
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
```

Hindari relative import yang terlalu panjang:

```ts
import { projects } from "../../../data/projects";
```

---

## Server Component Rules

Default component adalah Server Component.

Jangan menggunakan:

```tsx
"use client";
```

kecuali component memang membutuhkan:

* useState
* useEffect
* event handler
* browser API
* interactive menu

---

## Client Component Rules

Client Component hanya digunakan untuk interaksi ringan.

Contoh:

* Mobile navbar toggle
* Copy email button
* Contact form interaction

Jangan membuat seluruh page menjadi Client Component.

---

## State Management Rules

Allowed:

* useState
* useEffect
* React Context jika benar-benar dibutuhkan

Not allowed:

* Redux
* Zustand
* MobX

Reason:

Portfolio tidak membutuhkan state management kompleks.

---

## SEO Rules

Setiap page wajib memiliki metadata.

Homepage:

```ts
export const metadata = {
  title: "Muhammad Fajri Husaini | Frontend Developer & Flutter Developer",
  description:
    "Personal portfolio of Muhammad Fajri Husaini, showcasing frontend, mobile, and backend development projects.",
};
```

Project detail page wajib menggunakan dynamic metadata.

---

## Accessibility Rules

Wajib:

* Gunakan semantic HTML
* Satu halaman hanya memiliki satu `h1`
* Button untuk action
* Anchor untuk navigation
* Semua image harus memiliki alt text
* Interactive element minimal 44px
* Warna harus memiliki contrast yang cukup

Tidak boleh:

* Menggunakan div sebagai button
* Menghilangkan focus outline tanpa pengganti
* Image tanpa alt

---

## Performance Rules

Wajib:

* Compress image
* Gunakan format `.webp` jika memungkinkan
* Gunakan `next/image`
* Hindari JavaScript berlebihan
* Hindari animation berat
* Hindari dependency besar

Target:

```text
Performance >= 95
Accessibility >= 95
SEO >= 95
Best Practices >= 95
```

---

## Image Rules

Simpan image di:

```text
public/images
```

Struktur:

```text
public/images/profile
public/images/projects
```

Naming:

```text
profile-photo.webp
cbas-dashboard.webp
portfolio-homepage.webp
```

Hindari:

```text
IMG_12345.png
screenshot baru.png
image-final-final.png
```

---

## Git Rules

Branch utama:

```text
main
```

Branch development:

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
fix/mobile-navbar
fix/project-card-layout
```

---

## Commit Rules

Gunakan format sederhana:

```text
type: message
```

Contoh:

```text
feat: add hero section
feat: add project data
fix: improve mobile navbar
style: update project card spacing
docs: add content strategy
refactor: simplify section component
chore: update dependencies
```

---

## Pull Request Rules

Sebelum merge:

* Pastikan tidak ada TypeScript error
* Pastikan tidak ada ESLint error
* Pastikan responsive
* Pastikan tidak ada console error
* Pastikan UI sesuai DESIGN_SYSTEM.md
* Pastikan konten sesuai CONTENT_STRATEGY.md

---

## Testing Rules

Minimal manual testing:

* Mobile width 360px
* Mobile width 390px
* Tablet width 768px
* Desktop width 1024px
* Desktop width 1440px

Cek browser:

* Chrome
* Edge

---

## Feature Decision Rules

Sebelum menambah fitur, jawab:

1. Apakah fitur ini membantu recruiter memahami saya?
2. Apakah fitur ini memperjelas portfolio saya?
3. Apakah fitur ini membuat website lebih berat?
4. Apakah fitur ini bisa ditunda ke versi berikutnya?

Jika fitur tidak mendukung tujuan portfolio, jangan dibuat.

---

## Not Allowed in Version 1

Tidak membuat:

* Login
* Register
* Admin panel
* CMS
* Blog
* Comment system
* Database
* API kompleks
* Dashboard
* Dark mode
* Multi language

---

## Version 1 Scope

Version 1 hanya berisi:

* Homepage
* Project detail page
* Resume download
* Contact links
* SEO metadata

---

## Definition of Done

Satu fitur dianggap selesai jika:

* UI sesuai design system
* Data berasal dari folder `src/data`
* Responsive
* Accessible
* Tidak ada TypeScript error
* Tidak ada ESLint error
* Tidak ada console error
* Tidak menambah dependency tidak perlu
* Tidak keluar dari scope portfolio

---

End of Document.
