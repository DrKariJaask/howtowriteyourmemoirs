# Technical Architecture

**Version:** 1.1

---

# Purpose

This document defines the technical architecture of **HowToWriteYourMemoirs.com**.

Its purpose is to provide a scalable, maintainable, secure, and high-performance technical foundation that supports the long-term objectives of the website.

---

# Technical Principles

The website should be:

- reliable
- scalable
- secure
- maintainable
- fast
- accessible
- easy to extend

Technical decisions should prioritize long-term sustainability over short-term convenience.

---

# Technology Stack

The website is built using the following technology stack.

| Component | Technology |
|-----------|------------|
| Website framework | **Astro** |
| Version control | **GitHub** |
| Hosting | **Cloudflare Pages** |
| Edge functions | **Cloudflare Workers** |
| Content | **Markdown** |
| Styling | CSS (to be defined during implementation) |
| Analytics | To be defined |
| Search | To be defined |

This stack was selected because it provides:

- excellent performance
- low hosting costs
- automatic deployment
- full control over HTML, metadata, and structured data
- excellent SEO and AI discoverability
- flexibility for future Targetlytics experiments

Technology choices may evolve as the project grows, but the core architecture should remain stable.

---

# Architecture Goals

The technical architecture should support:

- efficient content publishing
- simple maintenance
- future feature development
- increasing traffic
- international accessibility
- reliable operation

The website should be designed so that new functionality can be added without major restructuring.

---

# Content Architecture

Website content is stored as Markdown files inside the Astro project.

The directory structure is:

```text
src/
├── content/
│   └── articles/
│       ├── how-to-write-a-memoir.md
│       └── ...
│
├── content.config.ts
│
├── layouts/
│   └── BaseLayout.astro
│
└── pages/
    ├── index.astro
    └── [slug].astro
```

Astro Content Collections are used to define and validate the article content structure.

The content collection configuration is stored in:

```text
src/content.config.ts
```

This file defines the required metadata fields for articles, including:

- title
- description
- slug
- section

Each article is stored as a Markdown file containing frontmatter metadata followed by the article content.

Example:

```markdown
---
title: "How to Write a Memoir: A Complete Beginner's Guide"
description: "Learn how to write a memoir from start to finish."
slug: "how-to-write-a-memoir"
section: "Getting Started"
---

# How to Write a Memoir
```

The dynamic article page is located at:

```text
src/pages/[slug].astro
```

It reads the Markdown articles from the content collection and generates one published page for each article.

The Markdown files are the single source of truth for published article content.

---

# Publishing Workflow

The website uses Git-based publishing.

The publishing workflow is:

```text
Edit Markdown content
        ↓
Commit to GitHub
        ↓
Push to main branch
        ↓
Cloudflare Pages detects the update
        ↓
Astro builds the website
        ↓
The updated website is published automatically
```

No separate content management system is required.

---

# Cloudflare Pages Configuration

The production deployment uses the following configuration.

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Production branch: main
```

---

# Cloudflare Workers

Cloudflare Workers are not required for the initial version of the website.

They may later be used for features such as:

- contact forms
- API integrations
- redirects
- personalization
- analytics processing
- Targetlytics experiments
- AI-related functionality

Workers should only be introduced when a clear use case exists.

---

# Performance

Performance remains a priority throughout development.

Areas for continuous improvement include:

- page loading speed
- Core Web Vitals
- image optimization
- caching
- efficient code
- efficient asset delivery
- static page generation

Technical improvements should enhance the user experience whenever possible.

---

# Security

The website should follow appropriate security practices, including:

- secure hosting
- HTTPS
- software updates
- access control
- backup procedures
- protection against common web vulnerabilities

Security should be considered throughout the development process.

---

# Search and Navigation

The technical implementation should support:

- logical URL structure
- intuitive navigation
- breadcrumb navigation where appropriate
- XML sitemap
- HTML sitemap if beneficial
- effective internal linking

Navigation should remain intuitive regardless of future website growth.

---

# Content Management

The publishing workflow should support:

- efficient content creation
- Markdown-based authoring
- Git version control
- content revisions
- metadata management
- media management

The publishing process should remain efficient as the number of pages increases.

---

# Analytics and Measurement

The website may collect data that helps evaluate website performance, including:

- visitor behavior
- traffic sources
- content performance
- technical performance
- conversion metrics

Data collection should respect applicable privacy requirements.

---

# Scalability

The technical architecture should accommodate:

- increasing numbers of pages
- growing traffic
- additional content types
- future tools and interactive features
- multilingual support if introduced

Scalability should be considered from the beginning of the project.

---

# Documentation

Major technical decisions should be documented together with the rationale behind them.

This helps maintain consistency as the website evolves.

---

# Scope

This document defines the overall technical architecture.

Implementation details, optimization activities, and research observations are documented separately.

---

# Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0 | YYYY-MM-DD | Initial technical architecture |
| 1.1 | YYYY-MM-DD | Defined the production technology stack (Astro, Cloudflare Pages, Cloudflare Workers, GitHub), Markdown content architecture, and automated deployment workflow. |
| 1.2 | 2026-07-27 | Added Astro Content Collections configuration and clarified the article publishing architecture. |
