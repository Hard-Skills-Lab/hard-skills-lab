# Hard Skills Lab — Website Specification & Implementation Guide

**Document status:** Implementation brief for the first public website  
**Project:** Hard Skills Lab  
**Primary audience:** Prospective learners, followed by partners and supporters  
**Languages:** French and English  
**Architecture:** One long homepage per language; “Program” and “About” are sections, not separate pages  
**Application flow:** The primary “Apply” CTA redirects to a Google Form  
**Delivery plan:** Two sprints — (1) basic website, (2) content-management integration

## 1. Product goal

Build a fast, accessible, responsive bilingual website that explains Hard Skills Lab and helps eligible learners understand the program and apply.

Hard Skills Lab is a small organization that aims to train young Africans in data and AI through free, online, practical, project-first learning. The initial audience includes learners in Togo and across West Africa. The first cohort has not launched yet, so the site must not imply that a cohort has already completed or that outcomes have already been achieved.

### Success criteria

- Visitors understand the offer and eligibility quickly.
- The site works well on mobile, tablet, and desktop.
- French and English versions are both complete.
- “Apply for cohort” opens the correct Google Form.
- All major sections can be reached from the header navigation.
- Content and repeated UI are structured so that the site can be maintained without duplicating components.
- The first version can be deployed using free or generous free-tier services.
- Analytics, if enabled, respect applicable privacy and consent requirements.

### Out of scope for Sprint 1

- A separate Program page or About page.
- User accounts, databases, or custom application processing.
- A custom admin dashboard.
- CMS integration.
- A video library or YouTube channel (the design should allow video embeds to be added later).
- Claims about graduate outcomes, partner organizations, learner numbers, or completed projects unless verified by the founders.

## 2. Brand and art direction

### Brand attributes

- Ambitious and intellectually serious.
- Practical, thoughtful, and beginner-friendly.
- Contemporary and global, without relying on stereotypical visual cues.
- Learners first; partners should still understand the mission and operating model.
- Editorial rather than generic startup/SaaS.

### Visual principles

- Warm paper background, near-black typography, restrained burnt-orange accents.
- Strong typographic hierarchy and generous whitespace.
- Fine dividers and simple card surfaces; avoid heavy shadows and excessive rounded UI.
- Use a restrained mix of people, work, and typography.
- Prioritize authentic founder portraits and real work when available.
- Any mock project, placeholder image, or sample data must be identified as illustrative until replaced with real material.

### Color tokens

| Token            | Value     | Usage                                              |
| ---------------- | --------- | -------------------------------------------------- |
| `--color-paper`  | `#F7F5EF` | Main page background                               |
| `--color-ink`    | `#20211F` | Main text and dark surfaces                        |
| `--color-orange` | `#D94F2B` | Primary CTA and selected accents                   |
| `--color-rule`   | `#DCD9D0` | Borders and dividers                               |
| `--color-muted`  | `#66645F` | Secondary text; check contrast before use          |
| `--color-white`  | `#FFFFFF` | Text on dark/orange surfaces where contrast passes |

Use orange deliberately. Most of the site should remain paper-colored with dark typography. Verify text and UI contrast against WCAG 2.2 AA where applicable; do not rely on color alone to communicate state.

### Typography

- **Headings:** Space Grotesk.
- **Body and interface:** Source Sans 3.
- **Optional technical labels:** a restrained monospace font such as IBM Plex Mono.
- Use locally hosted font files if available and licensed for this use; otherwise use a font provider with appropriate privacy/performance considerations and a sensible system fallback.
- Body text should remain comfortably readable on phones. Avoid overly tight line-height and long lines.

### Layout and responsive behavior

- Desktop: 12-column grid, generous spacing, two-column layouts where useful.
- Tablet: reduce column count and spacing while retaining hierarchy.
- Mobile: one-column flow, stacked cards, readable line lengths, full-width or near-full-width primary CTA.
- Suggested initial breakpoints: `640px`, `768px`, and `1024px`. Adjust based on content rather than treating these values as hard device categories.
- Use a consistent 4px spacing scale, with larger section spacing on desktop.
- Keep interactive touch targets comfortably large (aim for approximately 44×44 CSS px).
- Do not cause horizontal overflow at 320px viewport width.

### Motion

- Use a simple reveal animation for selected content or image blocks as they enter the viewport.
- Suggested motion: opacity from 0 to 1 and vertical translation from 12–16px to 0, around 450–650ms with a gentle ease-out.
- Animate only a few important blocks; do not animate every paragraph or list item.
- Avoid parallax, looping effects, and “bouncy” movement.
- Respect `prefers-reduced-motion: reduce`. Content must remain visible and understandable if JavaScript or animation is unavailable.
- Prefer CSS transitions and the Intersection Observer API in a small client-side script. Avoid adding a large animation library for this requirement.

## 3. Site structure and content requirements

The site has one long homepage for each language:

- English: `/en/`
- French: `/fr/`
- Root `/`: redirect to English as a default language.

The language switch should take users to the equivalent page in the other language (both are homepages for this version), not to a missing route.

### Header's Behavior:

- Header navigation links smooth-scroll to their sections.
- Use suitable `scroll-margin-top` so sticky/fixed header does not cover section headings.
- Mobile menu closes after choosing a section, when Escape is pressed, and when the user selects the close control.
- Lock body scroll while the mobile menu is open, restore it correctly on close.
- Do not rely on hover alone for interaction.

### Application link

- Store the English and French application destination in one central configuration value or localized content file.
- Do not scatter the Google Form URL through multiple components.
- Open in the same tab by default. If opening a new tab is required, clearly indicate it and use safe link attributes.
- If there are separate forms per language, the correct language-specific URL must be used.
- Never commit private credentials or secrets to the repository.

## 4. Bilingual content and URL behavior

### Requirements

- French and English are first-class versions, not partial translations.
- All visible UI strings must be translated: navigation, CTA labels, menu labels, form guidance, image alt text, metadata, FAQ, and footer.
- Use proper accents and idiomatic French; avoid literal word-for-word translation when it sounds unnatural.
- Use the correct document `lang` attribute: `en` or `fr`.
- Each language has its own page title, meta description, and social-sharing metadata.
- Add `hreflang` alternate links for English and French, with correct absolute URLs once the production domain is known.
- Language switch must remain visible on desktop and mobile.
- Keep section IDs stable and language-neutral (e.g. `#program`, `#curriculum`, `#about`, `#apply`) so anchor behavior is consistent.

## 5. Project Status (Sprint 1 in progress)

### Tech Stack

- **Astro** (static-first, file-based routes)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin, no `tailwind.config.js`)
- **TypeScript** (strict mode)
- Minimal vanilla JS for mobile menu only

### Current File Structure

```
hard-skills-lab/
├── public/
│   ├── favicon.svg          # Simple typographic mark (3 bars: ink/orange/ink)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro      # Sticky header, desktop nav, mobile menu with ARIA
│   │   ├── SiteFooter.astro      # Dark footer, dynamic year, nav links, contact
│   │   ├── PrimaryButton.astro   # Primary/secondary button variants
│   │   └── SectionHeading.astro  # Consistent section headers
│   ├── content/
│   │   ├── site-config.ts        # Centralized URLs (application forms, social, site URL)
│   │   └── site-content.ts       # Typed bilingual content object (en/fr)
│   ├── layouts/
│   │   └── BaseLayout.astro      # HTML shell, hreflang, fonts, meta tags
│   ├── pages/
│   │   ├── index.astro           # Redirects to /en/
│   │   ├── en/
│   │   │   └── index.astro       # English homepage (full sections)
│   │   └── fr/
│   │       └── index.astro       # French homepage (full sections)
│   └── styles/
│       └── global.css            # Tailwind v4 import, @theme tokens, base styles
├── astro.config.mjs              # Site URL + Tailwind Vite plugin
├── package.json
├── tsconfig.json                 # Strict TS, path aliases @/*
└── README.md                     # Setup, commands, structure, design tokens
```

### Design Tokens (Tailwind v4 `@theme` in global.css)

| Token            | Value     | Usage                      |
| ---------------- | --------- | -------------------------- |
| `--color-paper`  | `#F7F5EF` | Main background            |
| `--color-ink`    | `#20211F` | Primary text/dark surfaces |
| `--color-orange` | `#D94F2B` | CTAs, accents              |
| `--color-rule`   | `#DCD9D0` | Borders/dividers           |
| `--color-muted`  | `#66645F` | Secondary text             |

**Typography:** Space Grotesk (headings), Source Sans 3 (body), IBM Plex Mono (technical labels) — loaded via Google Fonts with system fallbacks.

### What's Been Implemented (Phase 1 Complete)

**Phase 1.1 — Foundation:**

- Astro + Tailwind v4 + TypeScript scaffolded
- Design tokens in `@theme` (Tailwind v4 syntax)
- BaseLayout with hreflang alternate links, localized meta
- Favicon, robots.txt, README

**Phase 1.2 — Bilingual Content & Routing:**

- Typed content model: `site-content.ts` with full `en`/`fr` objects
- Centralized config: `site-config.ts` (application URLs, social, site URL)
- Routes: `/en/`, `/fr/`, root `/` redirects to `/en/`
- Language switcher in header (desktop: text link, mobile: in menu)
- All UI strings translated (nav, CTAs, sections, footer)

**Phase 1.3 — Layout & Navigation:**

- Sticky header with smooth-scroll anchor nav
- Mobile menu: hamburger toggle, Escape to close, close-on-nav, body scroll lock, `aria-expanded`/`aria-controls`
- Footer with dynamic year, nav, contact email placeholder
- Homepage sections: Hero, Program (facts grid), Curriculum (track cards), About (mission/vision + founder placeholder), FAQ (details/summary), Apply (requirements + CTA)
- `scroll-margin-top` on sections for sticky header offset
- Focus-visible styles, reduced-motion respect

### Known Issues / Debug Notes

None.

## TODOs / Next Steps

### Phase 1.4 — Build homepage sections

Implement each section using shared components and localized content.

#### Tasks

- [ ] Hero: eyebrow, main headline, concise value proposition, primary CTA, and image/work visual.
- [ ] Program overview: cohort format and confirmed program facts.
- [ ] Mission section: why Hard Skills Lab exists and what makes its approach practical.
- [ ] Curriculum section: high-level weekly progression, with content approved by track leads.
- [ ] Track cards: Data Analysis with Python and Artificial Intelligence & Machine Learning.
- [ ] Example project cards: clearly label as proposed/illustrative until real projects are available.
- [ ] About/team section: founder names, roles, bios, and approved photos or explicit placeholders.
- [ ] Eligibility/application section: eligibility, language, internet, time commitment, and application steps.
- [ ] FAQ section: only confirmed answers.
- [ ] Final application CTA.
- [ ] Footer.
- [ ] Add meaningful anchor IDs for all navigable sections.

**Acceptance criteria**

- Every required section appears in a coherent order.
- Section content is complete in English and French.
- All placeholder content is visibly identified for the team and not misleading to visitors.
- All application CTAs use the centralized application URL.
- The page is understandable if images fail to load.

### Phase 1.5 — Responsive styling and visual refinement

#### Tasks

- [ ] Match the approved desktop and mobile design direction.
- [ ] Verify mobile layouts at narrow widths, including 320px.
- [ ] Check tablet layouts and wide desktop layouts.
- [ ] Ensure cards stack properly and no text, menu, or buttons overflow.
- [ ] Tune line lengths, font sizes, spacing, and image crops at each breakpoint.
- [ ] Check color contrast and visible focus states.
- [ ] Ensure touch targets are large enough.
- [ ] Use responsive image sizes and modern image formats where practical.
- [ ] Avoid layout shifts by setting image dimensions or aspect ratios.

**Acceptance criteria**

- No horizontal page overflow at 320px or common mobile/tablet/desktop widths.
- The mobile menu is usable and does not obscure essential controls.
- Text is readable without zooming.
- Layout remains coherent with long French labels and translated copy.

### Phase 1.6 — Reveal animation and interaction polish

#### Tasks

- [ ] Create a reusable reveal pattern for selected content and image blocks.
- [ ] Use opacity and a small vertical translation; keep duration around 450–650ms.
- [ ] Trigger reveals with Intersection Observer or an equally lightweight solution.
- [ ] Reveal each element at most once unless a clear reason requires otherwise.
- [ ] Ensure content remains visible if JavaScript fails or reduced motion is enabled.
- [ ] Add subtle CTA arrow/underline transitions only where useful.
- [ ] Avoid animating every list row or creating distracting motion.

**Acceptance criteria**

- Animations feel subtle and do not delay reading.
- `prefers-reduced-motion: reduce` disables or greatly reduces movement.
- The page remains usable without JavaScript.
- No large animation dependency is introduced without a justified need.

### Phase 1.7 — Accessibility, SEO, performance, and pre-launch QA

#### Tasks

- [ ] Use semantic headings in logical order.
- [ ] Check keyboard-only navigation and focus order.
- [ ] Confirm mobile menu labels and ARIA state are correct.
- [ ] Add image alt text and mark decorative imagery appropriately.
- [ ] Add title, description, canonical URL, Open Graph metadata, and favicon.
- [ ] Add `hreflang` alternates and verify URLs after the production domain is known.
- [ ] Add a `robots.txt`; generate a sitemap if appropriate for the chosen route setup.
- [ ] Optimize images and avoid loading below-the-fold images eagerly.
- [ ] Test production build locally.
- [ ] Check external links, form links, social links, and contact information.
- [ ] Run Lighthouse or equivalent checks for performance, accessibility, SEO, and best practices.
- [ ] Test on at least one real phone if possible.
- [ ] Ask both founders to approve copy, dates, track details, photos, and form destinations.

**Acceptance criteria**

- Production build completes without errors.
- No broken internal links or incorrect form destinations.
- No unapproved factual claims or placeholder deadlines are published.
- Major accessibility and mobile issues are fixed before launch.
- Founders approve all public-facing content.

---

**Next phases are for another conversation.** We will make a summary of this conversation before moving to a new one, so your freed context won't be totaly empty.
