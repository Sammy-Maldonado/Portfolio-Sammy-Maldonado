# Current Session Handoff

## Objective

Refactor the current React + Vite portfolio so it visually matches the original static iPortfolio HTML/CSS template as closely as possible.

This is a **faithful React port, not a redesign.**

The first migration (commit `17dbf8b`) produced a generic dark SaaS landing page. This session corrects that.

---

## Approved Constraints

- Work only on branch `feature/portfolio-react-bilingual-modernization`
- Do not create a worktree
- Do not push
- Do not merge
- Do not delete old static files
- Work in small, reviewable steps
- English is the default language
- Spanish must be fully available via language switcher
- All content from `docs/content/professional-content.md` must remain
- No invented experience, dates, certifications or claims
- No exposed secrets or API keys

---

## Visual Parity Requirements

| Element | Original iPortfolio | Must Preserve |
|---|---|---|
| Layout | Fixed left sidebar 300px, dark `#040b14` | Yes |
| Main content | `margin-left: 300px`, white/light bg | Yes |
| Hero | Full viewport, background image + dark overlay + typed text | Yes |
| Sections | 60px padding, white + `#f5f8fd` alt bg | Yes |
| Section headings | Raleway, `#173b6c`, blue bottom accent line | Yes |
| Sidebar nav | Icons + labels, `#a8a9b4` text, `#149ddd` active/hover | Yes |
| Profile area | Circular photo, name, social icon links in sidebar | Yes |
| Skills | Horizontal progress bars | Yes |
| Experience | Resume timeline (left border + dots, date badges) | Yes |
| Projects | Image grid with hover overlay | Yes |
| Contact | Info box layout (icon + heading + value) | Yes |
| Fonts | Open Sans (body), Raleway (headings), Poppins (specials) | Yes |
| Accent color | `#149ddd` (cyan-blue) | Yes |
| Mobile nav | Sidebar slides in, toggle button fixed top-right | Yes |

---

## Content Requirements (must remain after visual fix)

- English default, Spanish via switcher
- Language switcher integrated as sidebar nav item (globe icon)
- `sammy.maldodev@gmail.com` as developer email
- WhatsApp: `https://wa.me/353834872041` (Irish number)
- POS Cloud ITD as main featured project
- Agentic Development section (styled as a standard iPortfolio section)
- No Chile-based contact info (no Santiago, no +569 number)
- Ireland as location

---

## Files Planned to Change

| File | Change |
|---|---|
| `src/styles/global.css` | Replace with iPortfolio CSS ported from `assets/css/style.css` |
| `index.html` | Restore Open Sans + Raleway + Poppins fonts; link vendored Bootstrap Icons + Boxicons |
| `src/components/Header.jsx` | Rebuild as fixed left sidebar |
| `src/components/Hero.jsx` | Rebuild with background image, dark overlay, typed animation |
| `src/components/About.jsx` | Two-column layout with info list |
| `src/components/Skills.jsx` | Progress bar style |
| `src/components/AgenticDevelopment.jsx` | Standard iPortfolio section style (new section) |
| `src/components/Experience.jsx` | Resume timeline style |
| `src/components/Projects.jsx` | Portfolio grid with hover overlay |
| `src/components/Certifications.jsx` | Resume timeline items (merged into Experience section) |
| `src/components/Contact.jsx` | Info box layout |
| `src/components/Footer.jsx` | Minimal, matches original |
| `src/App.jsx` | Update section IDs, structure |

## Files to Create

| File | Purpose |
|---|---|
| `src/styles/iportfolio.css` | Ported from `assets/css/style.css` — preserves all original rules |
| `src/styles/additions.css` | New sections + language switcher + React-specific overrides only |

## Assets to Copy to `public/`

| Source | Destination |
|---|---|
| `assets/img/sammy-maldonado-banner.jpg` | `public/sammy-maldonado-banner.jpg` |
| `assets/vendor/bootstrap-icons/` | `public/vendor/bootstrap-icons/` |
| `assets/vendor/boxicons/` | `public/vendor/boxicons/` |

---

## Validation Checklist

Before marking complete:

- [ ] `npm run build` passes without errors
- [ ] Left sidebar is visible and fixed on desktop
- [ ] Sidebar has profile image, name, social links, nav links with icons
- [ ] Hero shows background image with dark overlay
- [ ] Main content area has white/light background (not dark)
- [ ] Section headings use Raleway font, `#173b6c` color
- [ ] Skills section shows horizontal progress bars
- [ ] Experience section shows resume timeline style
- [ ] Projects section shows image grid with hover overlays
- [ ] Agentic Development section fits naturally into original design
- [ ] Language switcher is in the sidebar as a nav item
- [ ] English is default language on load
- [ ] Spanish switch works across all sections
- [ ] Language preference persists after refresh
- [ ] No Chile/outdated contact info in any language
- [ ] `sammy.maldodev@gmail.com` is present
- [ ] Irish WhatsApp link is present
- [ ] POS Cloud ITD appears as main featured project
- [ ] Mobile nav toggle works (sidebar slides in)
- [ ] No push, merge or worktree performed
- [ ] Git status is clean or clearly explained

---

## Next Steps (after this session)

1. Push branch and open PR to `main` (after approval)
2. Create `DEV` branch from `main` and define promotion flow
3. Clean up obsolete static HTML files (old `index.html`, `portfolio-en/`, individual detail pages)
4. Consider adding a real contact form (Netlify Forms or Formspree — no exposed keys)
5. Add a real CV file to `public/` to enable the "Download CV" button

---

## Key Reference Files

- `docs/specs/portfolio-modernization-spec.md` — implementation spec
- `docs/content/professional-content.md` — approved bilingual content source
- `CLAUDE.md` — project rules (read before every change)
- `assets/css/style.css` — original iPortfolio CSS (source of truth for visual design)
- `assets/js/main.js` — original JS behaviors to recreate in React
