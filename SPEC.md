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

## 5. Recommended technical approach

### Stack

- **Astro** for static-first pages and file-based routes.
- **Tailwind CSS** for styling and responsive utilities.
- **TypeScript** for content and component props.
- Small vanilla JavaScript only where interaction requires it (mobile navigation and reveal animations).
- Use Astro’s built-in image tooling or a consistent image optimization workflow for local images.
- Do not add a UI component framework or animation library unless a real need emerges.

Why this stack:

- The website is content-led, mostly static, and does not require a logged-in application.
- Astro supports fast pages and reusable components without shipping a large JavaScript bundle.
- A shared template and localized content make the two language versions maintainable.
- Sprint 2 can introduce a Git-based CMS without rebuilding the visual components.

**Note:** Tailwind’s setup differs between major versions. Use the current Astro integration instructions for the selected Tailwind version and record the version in the project. Do not blindly copy a configuration from an older tutorial.

### Component principles (atomic)

- Components should represent reusable UI patterns, not every individual `div`.
- Keep content separate from layout wherever practical.
- Pass translated labels and content through props or localized data.
- Avoid duplicating the whole homepage for French and English.
- Avoid a single giant component with all content and interactions mixed together.
- Use semantic HTML: `header`, `nav`, `main`, `section`, `footer`, `ul`, `button`, and `a` appropriately.
- Prefer real anchors for navigation and real buttons for actions.
- Use `aria-expanded`, `aria-controls`, and accessible names for the mobile menu.
- Ensure all images have meaningful `alt` text; decorative images should use empty alt text (`alt=""`).

---

# Sprint 1 — Basic bilingual website

**Sprint goal:** Ship a complete, responsive, accessible, static-first website with reusable components and French/English content. Content can initially be maintained in code. The application CTA links to Google Forms.

## Phase 1.1 — Project setup and foundation

### Tasks

- [ ] Create the repository and agree on a simple branch/PR workflow.
- [ ] Scaffold an Astro project with TypeScript.
- [ ] Add Tailwind CSS using the current recommended Astro integration.
- [ ] Add a basic lint/format workflow if the team is comfortable maintaining it; keep tooling minimal.
- [ ] Configure the production site URL in Astro configuration once the domain is known.
- [ ] Establish the initial directory structure.
- [ ] Add the design tokens to global styles or Tailwind theme configuration.
- [ ] Add font loading and sensible fallback fonts.
- [ ] Create a basic `BaseLayout.astro` with metadata slots, global CSS, and document language.
- [ ] Create a simple favicon and typographic wordmark.
- [ ] Add a README with setup, local development, build, and deployment commands.

**Acceptance criteria**

- The project starts locally with the documented command.
- The production build succeeds.
- Global design tokens and typography are available to every page.
- No secrets or private keys are committed.

## Phase 1.2 — Bilingual content model and routing

### Tasks

- [ ] Define a typed content object for `en` and `fr`.
- [ ] Store all visible strings and homepage content in the localized content source.
- [ ] Create the English route at `/en/`.
- [ ] Create the French route at `/fr/`.
- [ ] Decide and implement root `/` behavior (default-language redirect or language chooser).
- [ ] Add localized page titles and descriptions.
- [ ] Add the correct `lang` attribute to each page.
- [ ] Add `hreflang` alternate links when the production domain is configured.
- [ ] Centralize application URLs and social URLs.
- [ ] Add a simple validation/checklist so missing translations are caught before release.

**Acceptance criteria**

- Both routes build and render.
- Switching language leads to the corresponding language homepage.
- Neither language contains untranslated navigation or UI strings.
- Each page has correct language metadata and unique title/description.
- The application CTA points to the intended form for that language.

## Phase 1.3 — Shared layout and navigation

### Tasks

- [ ] Build `SiteHeader.astro` with wordmark, anchor navigation, language switch, and application CTA.
- [ ] Build the responsive mobile menu.
- [ ] Add accessible open/close behavior, Escape handling, and close-on-navigation behavior.
- [ ] Build `SiteFooter.astro` with social links, navigation, contact/privacy placeholders, and dynamic year.
- [ ] Build shared button/link styles for primary, secondary, and text-link actions.
- [ ] Define focus-visible, hover, active, and disabled styles where applicable.
- [ ] Verify header and anchor behavior with keyboard navigation and touch input.

**Acceptance criteria**

- Header works with mouse, keyboard, and touch.
- Mobile navigation can be opened and closed accessibly.
- Navigation anchors do not hide section headings under a sticky header.
- Links have descriptive labels and visible focus indicators.

---

**Next phases are for another conversation.** We will make a summary of this conversation before moving to a new one, so your freed context won't be totaly empty.
