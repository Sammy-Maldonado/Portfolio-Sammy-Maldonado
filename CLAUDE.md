# CLAUDE.md

## Project Context

This project is the professional software developer portfolio of Sammy Maldonado.

The current portfolio is a static HTML/CSS website and must be modernized into a professional React-based portfolio aligned with Sammy's latest ATS-friendly Irish CV.

The portfolio must present Sammy as a Full-Stack Software Developer with 4 years of experience, a cybersecurity background, and current experience in agentic development workflows.

The final portfolio must be suitable for recruiters, hiring managers, and software companies in Ireland.

## Primary Goal

Modernize the existing portfolio into a clean, professional, responsive, bilingual React portfolio.

The default language must be English.

The existing language switch feature must be enabled and implemented properly so users can switch the entire portfolio content between English and Spanish.

## Working Rules

1. Read this file before making any change.
2. Read `docs/specs/portfolio-modernization-spec.md` before implementing.
3. Read `docs/content/professional-content.md` before writing or changing content.
4. Do not invent professional experience, technologies, employers, certifications, dates, or claims.
5. Keep the tone professional, clear, confident, and realistic.
6. Avoid exaggerated marketing language.
7. Prioritize ATS-friendly wording, recruiter clarity, accessibility, and maintainability.
8. Do not hardcode repeated content directly inside components.
9. Store portfolio content in structured data files whenever possible.
10. Keep the project responsive for mobile, tablet, and desktop.
11. Preserve useful existing assets only if they improve the final result.
12. Remove outdated content, duplicated sections, unused files, and broken links.
13. Do not expose private information, secrets, credentials, API keys, or unnecessary personal data.
14. Do not add heavy animations that reduce performance or professionalism.
15. Keep the design modern, sober, clean, and aligned with a professional software developer profile.

## Technical Direction

Preferred stack:

- React
- Vite
- TypeScript if feasible
- CSS Modules, plain CSS, or Tailwind CSS
- Data-driven content structure
- Responsive layout
- Accessible semantic HTML
- SEO-friendly metadata
- Netlify-compatible deployment

If TypeScript migration increases complexity too much, use React + Vite with JavaScript, but keep the structure clean and scalable.

## Language Requirements

The portfolio must support:

- English as the default language
- Spanish as the secondary language
- A working language switcher
- Full translation of all visible portfolio content
- Persistent language preference using localStorage
- No mixed-language sections

Suggested language values:

```txt
en
es
```

The language switcher must be clearly visible and functional.

## Required Sections

The portfolio must include:

1. Hero
2. About
3. Key Skills
4. Agentic Development
5. Professional Experience
6. Featured Projects
7. Education and Certifications
8. Contact

Optional sections may be included only if they add real value.

## Professional Positioning

Use this positioning as the main professional direction:

```txt
Full-Stack Software Developer | Agentic Development Workflows | Cloud & Backend
```

Main professional themes:

- Full-stack software development
- Backend services and REST APIs
- React, TypeScript, Node.js, NestJS and .NET
- PostgreSQL, SQL Server and cloud-ready architecture
- Agentic development workflows
- Claude Code
- Prompt engineering
- Specs-driven development
- Skills and MCP integrations
- Context7, Linear and Engram MCP
- n8n automation
- Docker, Kubernetes, GitHub, GitLab and Jira
- Agile/Scrum delivery
- Cybersecurity foundations

## Current Professional Facts

Use only these facts unless the user explicitly updates them:

- Name: Sammy Maldonado
- Professional title: Full-Stack Software Developer
- Current location: Ireland
- Developer email: sammy.maldodev@gmail.com
- General email: sammyalejandro.m.p@gmail.com
- Phone: +353 83 487 2041
- LinkedIn: https://www.linkedin.com/in/sammy-maldonado/
- GitHub: https://github.com/Sammy-Maldonado
- Portfolio: https://portfolio-sammy-maldonado.netlify.app/
- Experience: over 4 years in software development
- English level: B1 Intermediate, currently improving in Ireland
- Spanish: Native

## Important Experience

### Fondo Esperanza

Role:

```txt
Full-Stack Software Developer
```

Dates:

```txt
May 2024 - Apr 2026
```

Relevant work:

- Portal Remoto
- FES Middleware
- PostgreSQL/MSSQL databases
- Bantotal core banking integration
- Backend development with .NET, Node.js and Express
- Frontend development with React, TypeScript and Bootstrap
- GitLab, Jira, Docker, Kubernetes and Scrum practices

### DT360 Group

Role:

```txt
Full-Stack Software Developer
```

Dates:

```txt
November 2022 - May 2024
```

Relevant work:

- Full-stack web development
- ReactJS, Node.js, Express, NestJS
- JavaScript, TypeScript
- MongoDB and MySQL
- API integrations
- WordPress and Shopify integrations
- Docker, Kubernetes, Git and GitHub

## Main Featured Project

### POS Cloud ITD - Cloud POS Platform

Type:

```txt
Personal project | 2026 - Present
```

Repository:

```txt
https://github.com/Sammy-Maldonado/POS-Cloud-ITD
```

Use this project as the main evidence of current agentic development workflow.

Relevant technologies and practices:

- Claude Code
- Prompt engineering
- Specs-driven development
- Skills
- MCP integrations
- Context7
- Linear
- Engram
- n8n automation
- NestJS
- React
- TypeScript
- Prisma
- Supabase/PostgreSQL
- JWT authentication
- Git workflow with DEV, QA and main branches
- Pull requests
- CI validation
- Release Please

## Certifications to Prioritize

Use only the strongest certifications in the portfolio unless there is a clear reason to include more.

Recommended visible certifications:

1. Professional Scrum Developer Certification (SDPC) | CertiProf | 2025
2. Cloud Computing (AWS) | Coderhouse | 2024
3. Mobile Application Development Career Path | Coderhouse | 2024
4. Full Stack Development Career Path | Coderhouse | 2022 - 2023
5. Web Design and Development Diploma | AIEP | 2023
6. JavaScript Algorithms and Data Structures | freeCodeCamp | 2023

Avoid overloading the portfolio with small, repeated, or basic courses unless they are placed in a secondary expandable section.

## Design Requirements

The design must be:

- Professional
- Clean
- Modern
- Recruiter-friendly
- Easy to scan
- Responsive
- Accessible
- Fast-loading
- Not overly decorative
- Not childish
- Not visually overloaded

Prefer:

- Clear typography
- Strong spacing
- Simple cards
- Consistent section headings
- Subtle hover states
- Clear CTA buttons
- Recruiter-friendly layout
- High contrast
- Good mobile navigation

Avoid:

- Excessive animations
- Too many icons
- Too many colors
- Long paragraphs
- Unnecessary visual noise
- Informal wording
- Overpromising

## Development Workflow

Before coding:

1. Inspect the current project structure.
2. Identify existing assets, sections, and outdated content.
3. Propose a short implementation plan.
4. Wait for approval if the task significantly changes structure.

During implementation:

1. Create a clean React/Vite structure.
2. Convert the current portfolio sections into reusable components.
3. Move content into structured data files.
4. Implement bilingual content.
5. Implement the language switcher.
6. Update all content based on `docs/content/professional-content.md`.
7. Make the design responsive.
8. Remove obsolete files only after confirming they are no longer needed.

Before completion:

1. Run the build command.
2. Check for broken links.
3. Check mobile responsiveness.
4. Check that English and Spanish work correctly.
5. Check that language preference persists after reload.
6. Check that there is no outdated information.
7. Summarize what changed.

## Suggested Commands

Use the package manager detected in the project.

If creating a new React + Vite project:

```bash
npm create vite@latest . -- --template react
npm install
npm run dev
npm run build
```

If using pnpm:

```bash
pnpm create vite . --template react
pnpm install
pnpm dev
pnpm build
```

## Definition of Done

The task is complete only when:

- The portfolio runs locally.
- The portfolio builds successfully.
- English is the default language.
- Spanish translation works through the language switcher.
- All main sections are updated.
- Outdated Chile-based information is removed or updated.
- The developer email is updated to `sammy.maldodev@gmail.com`.
- POS Cloud ITD is included as the main featured project.
- Agentic development workflows are clearly represented.
- The design is responsive.
- The project is ready to deploy on Netlify.
