# Portfolio Modernization Spec

## 1. Objective

Modernize Sammy Maldonado's current static HTML/CSS portfolio into a professional, bilingual React portfolio aligned with his latest ATS-friendly CV and current professional positioning.

The new portfolio must communicate clearly that Sammy is a Full-Stack Software Developer with 4 years of experience, cloud/backend skills, cybersecurity foundations, and practical agentic development workflow experience.

## 2. Current Problem

The existing portfolio is outdated and does not fully match Sammy's current CV.

Known issues:

- The portfolio is mainly static HTML/CSS.
- Content is primarily in Spanish.
- English is not the default language.
- The language switcher exists but is not properly enabled.
- Some personal/professional data is outdated.
- It does not strongly represent current agentic development workflows.
- POS Cloud ITD is not properly positioned as the main current technical project.
- Some skills and certifications are outdated, repeated, or not prioritized.
- The current structure is harder to maintain and scale.

## 3. Target Outcome

Create a clean, modern, bilingual portfolio with:

- React + Vite structure
- English as the default language
- Spanish as a complete secondary language
- Working language switcher
- Recruiter-friendly professional content
- Updated technical profile
- Updated contact information
- Updated experience
- Updated certifications
- POS Cloud ITD as the main featured project
- Agentic development workflows clearly highlighted
- Responsive design
- Netlify-ready deployment

## 4. Main Positioning

Use this headline as the main positioning:

```txt
Full-Stack Software Developer | Agentic Development Workflows | Cloud & Backend
```

This positioning must be visible in the Hero section and consistent across the portfolio.

## 5. Main Audience

The portfolio must be optimized for:

- Recruiters in Ireland
- Hiring managers
- Software engineering teams
- Technical leads
- Companies looking for full-stack, backend, cloud or AI-assisted/agentic development profiles

## 6. Language Requirements

### Default language

English must be the default language.

### Secondary language

Spanish must be available through the language switcher.

### Language switcher

The language switcher must:

- Be visible in the header/navigation
- Allow switching between English and Spanish
- Update all visible content
- Persist preference in localStorage
- Use English by default when no preference exists
- Avoid mixed-language UI

Recommended implementation:

```txt
src/i18n/content.js
src/context/LanguageContext.jsx
src/components/LanguageSwitcher.jsx
```

or equivalent clean structure.

## 7. Required Sections

### 7.1 Header / Navigation

Must include:

- Name or logo
- Navigation links
- Language switcher
- Responsive mobile menu

Navigation links:

```txt
Home
About
Skills
Agentic Development
Experience
Projects
Certifications
Contact
```

Spanish equivalents must be implemented.

### 7.2 Hero Section

Must include:

- Name: Sammy Maldonado
- Main headline
- Short professional summary
- Location: Ireland
- CTA buttons:
  - View Projects
  - Contact Me
  - Download CV, only if a CV file is available in the project

Hero must be concise and professional.

### 7.3 About Section

Must present:

- 4 years of experience
- Full-stack background
- Cybersecurity background
- Backend/API/cloud-ready focus
- Current agentic development workflow experience
- Ireland-based positioning

Avoid long paragraphs.

### 7.4 Key Skills Section

Must group skills logically.

Recommended groups:

#### Agentic Development

- Agentic Development Workflows
- Claude Code
- Prompt Engineering
- Specs-Driven Development
- Skills
- MCP Integrations
- Context7
- Linear
- Engram
- n8n Automation

#### Frontend

- ReactJS
- React Native
- Next.js
- JavaScript
- TypeScript
- Bootstrap

#### Backend

- Node.js
- NestJS
- Express
- .NET
- Java
- REST API Development

#### Databases

- PostgreSQL
- MSSQL
- MySQL
- MongoDB
- Prisma
- Supabase

#### Cloud and DevOps

- AWS
- Docker
- Kubernetes
- Git
- GitHub
- GitLab
- CI validation

#### Delivery and Collaboration

- Jira
- Linear
- Agile/Scrum
- Technical Documentation

### 7.5 Agentic Development Section

This section must explain Sammy's current modern development workflow.

It must not sound like a beginner learning a new tool.

Use professional wording such as:

```txt
Experienced in agentic development workflows, including Claude Code, prompt engineering, specs-driven development, Skills, MCP integrations and n8n automation, applied to software planning, delivery, workflow optimisation and technical documentation.
```

This section should connect agentic development with real engineering outcomes:

- Better planning
- Better documentation
- More structured delivery
- Improved technical execution
- Faster context retrieval
- Better issue tracking
- Better validation

Mention tools:

- Claude Code
- Context7 MCP
- Linear MCP
- Engram
- n8n automation
- Specs-driven development
- Skills

### 7.6 Professional Experience Section

Use this experience:

#### Fondo Esperanza

```txt
Full-Stack Software Developer
May 2024 - Apr 2026
```

Main points:

- Developed and maintained Portal Remoto and FES Middleware.
- Integrated applications with PostgreSQL/MSSQL databases and Bantotal core banking system.
- Built backend services with .NET, Node.js and Express.
- Built frontend features with React, TypeScript and Bootstrap.
- Contributed to core banking migration and satellite application integration.
- Used GitLab, Jira, Docker, Kubernetes and Scrum practices.

#### DT360 Group

```txt
Full-Stack Software Developer
November 2022 - May 2024
```

Main points:

- Delivered full-stack projects using ReactJS, Node.js, Express, NestJS, JavaScript and TypeScript.
- Designed databases and integrated APIs.
- Worked with MongoDB and MySQL.
- Supported WordPress and Shopify web solutions.
- Used Docker, Kubernetes, Git and GitHub.
- Collaborated with technical teams to deliver projects on time.

### 7.7 Featured Projects Section

The main project must be:

#### POS Cloud ITD - Cloud POS Platform

```txt
Personal project | 2026 - Present
```

Must include:

- Short description
- Tech stack
- Agentic workflow details
- Repository link
- Status

Technologies/practices:

- NestJS
- React
- TypeScript
- Prisma
- Supabase/PostgreSQL
- JWT
- Claude Code
- Prompt Engineering
- Specs-Driven Development
- Skills
- Context7 MCP
- Linear MCP
- Engram
- n8n Automation
- DEV/QA/main Git workflow
- Pull requests
- CI validation
- Release Please

Suggested description:

```txt
Cloud-based POS platform focused on secure authentication, licensing and scalable business operations. The project applies agentic development workflows with Claude Code, specs-driven development, MCP integrations and structured Git delivery.
```

Other older projects may be included only if they are still relevant, professional and not visually overloaded.

### 7.8 Education and Certifications Section

Prioritize the following:

1. Professional Scrum Developer Certification (SDPC) | CertiProf | 2025
2. Cloud Computing (AWS) | Coderhouse | 2024
3. Mobile Application Development Career Path | Coderhouse | 2024
4. Full Stack Development Career Path | Coderhouse | 2022 - 2023
5. Web Design and Development Diploma | AIEP | 2023
6. JavaScript Algorithms and Data Structures | freeCodeCamp | 2023

Do not overload this section with every small course.

Optional: include a "View more certifications on LinkedIn" link.

### 7.9 Contact Section

Must include:

- Developer email: sammy.maldodev@gmail.com
- LinkedIn
- GitHub
- Portfolio
- Location: Ireland
- Optional WhatsApp link using:

```txt
https://wa.me/353834872041
```

Do not expose Chilean phone numbers unless explicitly requested.

## 8. Content Source of Truth

Use:

```txt
docs/content/professional-content.md
```

as the source of truth for text content.

Do not create new claims beyond that document.

## 9. SEO Requirements

Add or update:

- Page title
- Meta description
- Open Graph title
- Open Graph description
- Open Graph image if available
- Proper heading hierarchy
- Semantic HTML

Suggested title:

```txt
Sammy Maldonado | Full-Stack Software Developer
```

Suggested meta description:

```txt
Full-Stack Software Developer based in Ireland with 4 years of experience in React, TypeScript, Node.js, NestJS, .NET, PostgreSQL, AWS and agentic development workflows.
```

## 10. Accessibility Requirements

The portfolio must include:

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard-accessible navigation
- Sufficient color contrast
- Visible focus states
- Accessible buttons and links
- Language attribute updates where feasible

## 11. Performance Requirements

The portfolio must:

- Load quickly
- Avoid unnecessary libraries
- Optimize images
- Remove unused CSS/JS
- Avoid heavy animation libraries unless necessary
- Build successfully for production

## 12. Suggested React Structure

Recommended structure:

```txt
src/
├─ assets/
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ About.jsx
│  ├─ Skills.jsx
│  ├─ AgenticDevelopment.jsx
│  ├─ Experience.jsx
│  ├─ Projects.jsx
│  ├─ Certifications.jsx
│  ├─ Contact.jsx
│  ├─ Footer.jsx
│  └─ LanguageSwitcher.jsx
├─ data/
│  └─ portfolioContent.js
├─ context/
│  └─ LanguageContext.jsx
├─ styles/
│  └─ global.css
├─ App.jsx
└─ main.jsx
```

Alternative structures are acceptable if clean and maintainable.

## 13. Acceptance Criteria

The portfolio is complete when:

- It is migrated or rebuilt in React.
- It runs locally.
- It builds successfully.
- English is the default language.
- Spanish language switch works across all sections.
- Language preference persists after refresh.
- All outdated Chile-based information is replaced.
- The developer email is `sammy.maldodev@gmail.com`.
- The headline matches the new professional positioning.
- Agentic development workflows are clearly represented.
- POS Cloud ITD is the main featured project.
- Certifications are curated and not overloaded.
- The design is responsive.
- The portfolio is ready to deploy to Netlify.

## 14. Implementation Plan Requirement

Before implementing, Claude must respond with:

1. Current project structure summary.
2. Proposed migration approach.
3. Files to create.
4. Files to modify.
5. Files likely to remove.
6. Risks or assumptions.
7. Step-by-step implementation plan.

Do not start coding before presenting this plan.
