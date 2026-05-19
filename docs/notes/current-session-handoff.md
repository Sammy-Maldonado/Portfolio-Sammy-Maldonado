# Current Session Handoff

## Current State

The portfolio modernization is **complete and live in production.**

- Branch `feature/portfolio-react-bilingual-modernization` has been merged to `main` and deleted
- Deployed on Netlify at https://portfolio-sammy-maldonado.netlify.app/
- Node 22 LTS enforced via `netlify.toml`

---

## What Was Built

A React 18 + Vite 6 bilingual SPA, visually faithful to the iPortfolio template.

| Section | Status |
|---|---|
| Hero | Full viewport, background image, dark overlay, typed animation, CV download button |
| About | Two-column, full-width intro paragraphs, info list |
| Key Skills | Honest progress bars (React 88%, Node 88%, .NET 85%, PostgreSQL 88%, AWS 72%, Git 90%) |
| Agentic Development | Custom section, styled as standard iPortfolio section |
| Professional Experience | LinkedIn-style timeline (date badge above company name) |
| Featured Projects | Elevated card design — 1 personal (POS Cloud ITD) + 3 enterprise (lock icon, no GitHub) |
| Certifications | Same timeline as Experience, no section-bg |
| Contact | Flex card layout with hover icon animation |
| Header/Sidebar | Fixed 300px dark sidebar — profile, social links, nav, CV download, language switcher |
| Footer | Removed entirely (was overlapping sidebar on mobile) |

---

## Architecture

```
src/
  components/       React components (one per section)
  context/          LanguageContext.jsx — i18n via React Context + localStorage
  data/             content.js — single source of truth for all EN/ES text
  styles/
    iportfolio.css  Ported iPortfolio CSS
    additions.css   React-specific overrides, new sections, card designs
```

- No external i18n library — custom Context with `{ t, toggleLang }`
- No typed.js — pure React `useState`/`useEffect` animation
- Bootstrap Icons + Boxicons loaded from `public/vendor/`
- All images in `public/`

---

## Key Files

| File | Role |
|---|---|
| `src/data/content.js` | All EN/ES text, project data, experience, certifications |
| `src/styles/iportfolio.css` | Base iPortfolio styles |
| `src/styles/additions.css` | Card designs, timeline styles, contact layout, CV button |
| `src/components/Header.jsx` | Sidebar, mobile nav, CV link, language switcher |
| `src/components/Hero.jsx` | Typed animation, CV download button |
| `src/components/Projects.jsx` | Elevated cards, private repo lock badge |
| `netlify.toml` | `NODE_VERSION = "22"` — required for Vite 6 |

---

## CV Link

Google Drive (public):
`https://drive.google.com/file/d/1Db4XEB_nO8X6htZksyZUUnC7DRrkndrh/view?usp=sharing`

Hardcoded in `Header.jsx` (constant `CV_URL`) and `Hero.jsx`.

---

## Pending Items

1. **Mobile audit** — layout not tested on real devices this session
2. **OG / social preview image** — no `og:image` meta tag for LinkedIn/Twitter sharing
3. **Contact form** — currently info-display only; no submission capability (Netlify Forms or Formspree are options — no exposed keys)

---

## Constraints (carry forward)

- Do not invent experience, dates, certifications or claims
- Do not expose private information, secrets, credentials or API keys
- Content source of truth: `docs/content/professional-content.md`
- Project rules: `CLAUDE.md`
