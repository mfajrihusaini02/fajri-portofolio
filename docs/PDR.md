# PRD.md

## Product Requirements Document

Project Name:
Muhammad Fajri Husaini Portfolio Website

Version:
1.0.0

Status:
Approved

Owner:
Muhammad Fajri Husaini

---

## 1. Executive Summary

Website portfolio pribadi yang bertujuan untuk menampilkan identitas profesional, pengalaman kerja, kemampuan teknis, dan project yang pernah dikerjakan.

Website dirancang untuk recruiter, hiring manager, tech lead, client, dan sesama developer yang ingin mengetahui kemampuan dan pengalaman profesional pemilik portfolio.

Fokus utama website adalah:

* Personal Branding
* Professional Presence
* Project Showcase

Website harus ringan, cepat, mudah dipelihara, SEO-friendly, dan mobile-friendly.

---

## 2. Problem Statement

Saat ini informasi profesional tersebar di berbagai platform seperti:

* CV
* GitHub
* LinkedIn

Tidak ada satu tempat yang dapat menunjukkan:

* Siapa pemilik portfolio
* Apa keahlian utamanya
* Project apa yang pernah dikerjakan
* Bagaimana cara menghubunginya

---

## 3. Product Goals

### Primary Goals

1. Menampilkan profil profesional.
2. Menampilkan pengalaman kerja.
3. Menampilkan skill dan teknologi yang dikuasai.
4. Menampilkan project terbaik.
5. Menyediakan akses ke CV dan kontak.

---

### Success Criteria

Recruiter dapat memahami:

* Siapa pemilik portfolio.
* Apa spesialisasinya.
* Pengalaman kerjanya.
* Project yang pernah dikerjakan.
* Cara menghubunginya.

Dalam waktu kurang dari 3 menit.

---

## 4. Target Users

### Primary Users

* Recruiter
* HR
* Engineering Manager
* Tech Lead

---

### Secondary Users

* Client
* Freelancer
* Developer

---

## 5. User Journey

### Recruiter Journey

1. Membuka website.
2. Melihat Hero Section.
3. Membaca About Section.
4. Melihat Skills.
5. Melihat Experience.
6. Melihat Featured Projects.
7. Mengunduh CV atau menghubungi pemilik portfolio.

---

## 6. Scope

### In Scope

#### Homepage

* Hero
* About
* Skills
* Experience
* Projects
* Contact
* Footer

---

#### Project Detail Page

* Overview
* Role
* Tech Stack
* Challenge
* Solution
* Result
* Screenshots

---

#### Resume Download

* Download CV dalam format PDF.

---

#### SEO

* Metadata
* Open Graph
* Sitemap
* Robots

---

## 7. Out of Scope

Tidak termasuk:

* Login
* Register
* CMS
* Admin Panel
* Dashboard
* Blog
* Database
* Authentication
* Comment System
* Real-Time Feature
* Multi Language
* Dark Mode

---

## 8. Functional Requirements

### FR-001 Hero Section

User dapat melihat:

* Nama
* Posisi
* Ringkasan singkat
* CTA View Projects
* CTA Download Resume

---

### FR-002 About Section

User dapat membaca deskripsi profesional singkat.

---

### FR-003 Skills Section

User dapat melihat daftar skill yang dikelompokkan berdasarkan kategori.

Kategori:

* Frontend
* Mobile
* Backend
* Database
* Tools

---

### FR-004 Experience Section

User dapat melihat:

* Nama perusahaan
* Posisi
* Periode
* Ringkasan pekerjaan

---

### FR-005 Projects Section

User dapat melihat daftar project unggulan.

Maksimal:

6 Project

---

### FR-006 Project Detail

User dapat membuka halaman detail project.

URL:

/projects/[slug]

---

### FR-007 Contact Section

User dapat menemukan:

* Email
* GitHub
* LinkedIn

---

### FR-008 Resume Download

User dapat mengunduh CV PDF.

---

## 9. Non Functional Requirements

### Performance

Target:

Performance >= 95

Accessibility >= 95

SEO >= 95

Best Practices >= 95

---

### Responsiveness

Support:

* Mobile
* Tablet
* Desktop

---

### Accessibility

Mengikuti WCAG AA.

---

### Maintainability

Konten harus berasal dari:

src/data

Tidak boleh hardcoded dalam component.

---

### Scalability

Project harus mudah menambah:

* Project baru
* Experience baru
* Skill baru

Tanpa mengubah struktur utama.

---

## 10. Technical Requirements

Framework:

Next.js

---

Language:

TypeScript

---

Styling:

Vanilla CSS

---

Deployment:

Vercel

---

Icons:

Lucide React

---

Images:

Next Image

---

## 11. Data Requirements

### Profile

* Name
* Title
* Bio
* Resume URL

---

### Skills

* Category
* Skill Name

---

### Experience

* Company
* Position
* Period
* Description

---

### Project

* Slug
* Title
* Description
* Role
* Tech Stack
* Challenge
* Solution
* Result
* Image

---

## 12. SEO Requirements

Homepage:

Title:

Muhammad Fajri Husaini | Frontend Developer & Flutter Developer

---

Project Detail Page:

Dynamic Metadata

---

Required:

* Sitemap
* Robots
* Open Graph
* Twitter Card

---

## 13. Acceptance Criteria

Homepage dianggap selesai jika:

* Semua section tampil dengan benar
* Responsive
* SEO metadata tersedia
* Tidak ada TypeScript error
* Tidak ada ESLint error

---

Project Detail dianggap selesai jika:

* Dynamic route berjalan
* Metadata dinamis berjalan
* Konten project tampil dengan benar

---

## 14. Release Plan

### Version 1.0

Features:

* Homepage
* Project Detail
* Resume Download
* Contact Section
* SEO Setup

Status:

MVP Release

---

## 15. Future Roadmap

Version 1.1

* Enhanced Project Case Studies

Version 1.2

* Open Graph Image Generator

Version 2.0

* Blog Section

Version 3.0

* Dark Mode

---

## 16. Definition of Success

Website berhasil jika:

* Menampilkan identitas profesional dengan jelas.
* Mudah dipahami recruiter.
* Menampilkan project secara profesional.
* Memiliki performa tinggi.
* Mudah dipelihara dalam jangka panjang.

End of Document.
