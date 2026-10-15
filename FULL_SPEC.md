# Hard Skills Lab — Website Specification & Implementation Guide

**Document status:** Implementation brief for the first public website  
**Project:** Hard Skills Lab  
**Primary audience:** Prospective learners, followed by partners and supporters  
**Languages:** French and English  
**Architecture:** One long homepage per language; “Program” and “About” are sections, not separate pages  
**Application flow:** The primary “Apply” CTA redirects to a Google Form  
**Delivery plan:** Two sprints — (1) basic website, (2) content-management integration

---

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

---

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

---

## 3. Site structure and content requirements

The site has one long homepage for each language:

- English: `/en/`
- French: `/fr/`
- Root `/`: redirect to English as a default language.

The language switch should take users to the equivalent page in the other language (both are homepages for this version), not to a missing route.

### Header

Required elements:

- Typographic wordmark: `HARD SKILLS LAB`.
- Compact orange square/rule brand mark (the logo).
- Anchor links to the homepage sections: Program, Curriculum, About, FAQ (if included).
- Language switch: FR / EN.
- Primary CTA: “Apply for cohort” / “Candidater”.
- Mobile menu with a clear open/close state and accessible labels.

Behavior:

- Header navigation links smooth-scroll to their sections.
- Use suitable `scroll-margin-top` so sticky/fixed header does not cover section headings.
- Mobile menu closes after choosing a section, when Escape is pressed, and when the user selects the close control.
- Lock body scroll while the mobile menu is open, restore it correctly on close.
- Do not rely on hover alone for interaction.

### Homepage sections

Recommended order:

1. **Hero**
   - Small eyebrow label, e.g. “DATA & AI TRAINING FOR AFRICA”.
   - Main promise: “Real skills. Practical projects. A stronger tomorrow.”
   - Short description: free online training in data and AI, in French and English, with practical work.
   - Primary CTA to the Google Form.
   - Supporting learner image or authentic work visual.
   - Do not promise a specific start date unless confirmed.

2. **Program overview**
   - Explain the cohort format: 8 weeks plus a capstone project.
   - Four facts: 100% online, bilingual, beginner-friendly, open to eligible learners in Togo and West Africa.
   - Explain the commitment clearly: live sessions plus work between sessions.
   - If stating “around 10–12 hours per week”, confirm that estimate with both founders before publishing.

3. **Mission / why Hard Skills Lab**
   - Explain the goal of making practical data and AI training more accessible.
   - Use confident, concrete language rather than inflated claims.
   - Do not claim measurable impact before there is evidence.

4. **Curriculum**
   - Explain that there are two parallel tracks.
   - Give a short overview of the weekly progression, with details reviewed and approved by both track leads.
   - A suggested illustrative sequence is data foundations, data cleaning, visualization, model fundamentals, training/evaluation, and capstone preparation. Treat this as draft content until confirmed.
   - Make clear that both tracks contribute to the final project.

5. **Two learning tracks**
   - **Data Analysis with Python** — led by Hugues.
   - **Artificial Intelligence & Machine Learning** — led by the other co-founder.
   - Each card should contain a concise summary, what learners will practice, and a link to the curriculum section if useful.
   - Confirm track names, founder names, and descriptions before publishing.

6. **Example projects / practical work**
   - Show the kind of work learners may do, not work that has already been completed.
   - Example ideas in the design mockup: “Togo population and employment” and “Student dropout prediction”.
   - Label the section and each item as an example or proposed project until the actual curriculum and data are approved.
   - Do not present simulated charts or mock screenshots as real research findings.

7. **About / team**
   - Short mission and teaching philosophy.
   - Founder portraits, names, roles, and short bios, approved by the founders.
   - If final portraits are unavailable, use intentional placeholders rather than stock portraits that could be mistaken for the founders.

8. **How to apply / eligibility**
   - Explain who the program is for, whether prior experience is needed, language expectations, internet requirements, and time commitment.
   - State that applicants should be ready to participate in live sessions and complete practical work.
   - Show the confirmed application deadline only when known.
   - Primary CTA opens the Google Form.

9. **FAQ**
   - Is the program free?
   - Do I need prior experience?
   - Do I need my own computer and a stable internet connection?
   - Can I apply from outside Togo?
   - How much time should I set aside?
   - What languages are used?
   - What happens after I apply?
   - Are certificates offered?
   - Answer only what the team has confirmed. Use a clear placeholder or omit an answer rather than inventing policy.

10. **Final CTA**
    - Short closing statement and a prominent application CTA.
    - Reiterate the practical, free, bilingual nature of the program without repeating the entire hero.

11. **Footer**
    - Wordmark and short positioning statement.
    - LinkedIn and Instagram links.
    - Anchor navigation.
    - Contact email or contact link if available.
    - Privacy notice link or short privacy page if analytics/forms require one.
    - Copyright year generated dynamically.

### Application link

- Store the English and French application destination in one central configuration value or localized content file.
- Do not scatter the Google Form URL through multiple components.
- Open in the same tab by default. If opening a new tab is required, clearly indicate it and use safe link attributes.
- If there are separate forms per language, the correct language-specific URL must be used.
- Never commit private credentials or secrets to the repository.

---

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

### Suggested implementation

For a small site, avoid a full internationalization framework unless it clearly reduces complexity. Use localized data objects/files and a shared page template.

Example content shape (adapt as needed):

```ts
export const content = {
  en: {
    nav: {
      program: "Program",
      curriculum: "Curriculum",
      about: "About",
      apply: "Apply",
    },
    hero: {
      eyebrow: "DATA & AI TRAINING FOR AFRICA",
      title: "Real skills. Practical projects. A stronger tomorrow.",
      description:
        "Free, online training in data and AI, in French and English, built around practical projects.",
      cta: "Apply for cohort",
    },
  },
  fr: {
    nav: {
      program: "Programme",
      curriculum: "Programme pédagogique",
      about: "À propos",
      apply: "Candidater",
    },
    hero: {
      eyebrow: "FORMATION EN DATA ET IA POUR L’AFRIQUE",
      title:
        "Des compétences concrètes. Des projets pratiques. Un avenir plus prometteur.",
      description:
        "Des formations gratuites en ligne en data et en IA, en français et en anglais, axées sur la pratique.",
      cta: "Candidater à la cohorte",
    },
  },
} as const;
```

This is starter copy, not final approved copy. Keep all page copy in one clear source of truth per language so the future CMS migration is straightforward.

---

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

### Suggested project structure

```text
hard-skills-lab/
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── MobileMenu.astro
│   │   ├── SiteFooter.astro
│   │   ├── PrimaryButton.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProgramFact.astro
│   │   ├── TrackCard.astro
│   │   ├── ProjectExampleCard.astro
│   │   ├── FounderCard.astro
│   │   ├── FaqList.astro
│   │   ├── ApplyCta.astro
│   │   └── Reveal.astro
│   ├── content/
│   │   └── site-content.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en/
│   │   │   └── index.astro
│   │   └── fr/
│   │       └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.*  # depends on selected Tailwind version/setup
├── tsconfig.json
└── README.md
```

**Note:** Tailwind’s setup differs between major versions. Use the current Astro integration instructions for the selected Tailwind version and record the version in the project. Do not blindly copy a configuration from an older tutorial.

### Component principles

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

## Phase 1.4 — Build homepage sections

Implement each section using shared components and localized content.

### Tasks

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

## Phase 1.5 — Responsive styling and visual refinement

### Tasks

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

## Phase 1.6 — Reveal animation and interaction polish

### Tasks

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

## Phase 1.7 — Accessibility, SEO, performance, and pre-launch QA

### Tasks

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

# Sprint 2 — Content-management integration

**Sprint goal:** Allow founders to update homepage content and media without editing page components, while preserving the established design system and bilingual behavior.

Do not begin CMS integration until Sprint 1 content structure and reusable components are stable. Select the CMS based on its current Astro compatibility, bilingual workflow, hosting constraints, and authentication model.

## Phase 2.1 — Choose and validate the CMS

### Tasks

- [ ] Compare a Git-based CMS (such as Decap CMS) with a hosted visual CMS based on current features, pricing, and maintenance.
- [ ] Confirm support for Astro content sources, structured fields, media uploads, and English/French content.
- [ ] Confirm the CMS authentication flow works with the selected Git provider and deployment host.
- [ ] Prototype one editable section before migrating the entire homepage.
- [ ] Decide who can edit and publish content.
- [ ] Document the editorial workflow, including preview and rollback.

**Decision guidance**

- Prefer a Git-based CMS if both founders want content changes reviewed through Git and are comfortable maintaining its authentication/deployment setup.
- Prefer a hosted visual CMS if non-technical editing and a smoother editorial experience outweigh cost and vendor dependence.
- Verify free-tier limits and current pricing before committing. Do not assume a service remains free indefinitely.

**Acceptance criteria**

- At least one editor can sign in and edit a test field.
- A content change can be previewed and published through the chosen workflow.
- Authentication works on the actual deployment host, not only locally.
- The team understands the backup and rollback process.

## Phase 2.2 — Define the editable content schema

### Tasks

- [ ] Define schema for hero copy and hero image.
- [ ] Define program facts and eligibility content.
- [ ] Define mission copy.
- [ ] Define curriculum weeks and track summaries.
- [ ] Define track cards.
- [ ] Define example project cards, including a field to label each item as illustrative or published.
- [ ] Define founder profiles and portrait images.
- [ ] Define FAQ items.
- [ ] Define final CTA copy.
- [ ] Define footer links and social links.
- [ ] Support separate English and French values, with required-field validation.
- [ ] Define image alt text as editable content.
- [ ] Keep application URLs and important external URLs easy to update, with sensible validation.

**Acceptance criteria**

- Editors can update the content that is expected to change frequently.
- Missing required translations are detected or clearly flagged.
- Content fields cannot silently break the layout through unsupported structure.
- Components remain responsible for presentation; CMS data remains content.

## Phase 2.3 — Connect CMS content to Astro

### Tasks

- [ ] Connect the chosen CMS to the approved content source.
- [ ] Migrate hardcoded homepage copy into the CMS-managed schema.
- [ ] Update page templates to read CMS content through a consistent interface.
- [ ] Preserve component props and styling where possible.
- [ ] Add safe defaults or clear build-time validation for missing content.
- [ ] Configure preview/draft behavior if supported.
- [ ] Confirm that content edits trigger a new deployment when required.
- [ ] Keep secrets in environment variables or the host’s secret manager, never in public content files.

**Acceptance criteria**

- Editors can update content without modifying Astro components.
- Both language versions render the correct localized data.
- A missing or malformed content field is caught during preview/build or safely handled.
- The public website remains static-first and fast.

## Phase 2.4 — Editorial workflow and handover

### Tasks

- [ ] Write a short editor guide: sign in, edit, preview, publish, and revert.
- [ ] Document how to add and replace images, including recommended dimensions and alt text.
- [ ] Document how to edit FAQs, track descriptions, and application links.
- [ ] Document the workflow for adding future YouTube videos or other media.
- [ ] Test content updates in both languages.
- [ ] Confirm the founders can perform routine edits without developer help.
- [ ] Record CMS account ownership and recovery steps securely.

**Acceptance criteria**

- Both founders can make a small content change and publish it independently.
- The guide covers the common editing tasks.
- The CMS does not require sharing personal passwords or committing credentials.
- The team has a documented way to restore a previous version.

---

## 6. Deployment and monitoring

### Deployment approach

Use a static-friendly host with a free tier suitable for the expected traffic. Good candidates to evaluate are **Cloudflare Pages** and **Netlify**; confirm current limits, build settings, custom-domain support, and CMS compatibility before deciding.

Suggested workflow:

1. Keep the source in a Git repository.
2. Connect the production branch to the hosting provider.
3. Deploy previews for pull requests or staging changes if supported by the chosen host.
4. Run the production build as part of deployment.
5. Add the custom domain and HTTPS.
6. Verify `/`, `/en/`, and `/fr/`, redirects, metadata, form links, and social links after launch.
7. Keep the site deployable from a clean checkout using documented commands.

### Free or low-cost monitoring

- **Google Analytics 4 (GA4):** a widely used free option for aggregate traffic and CTA measurement. Track only what is needed, such as page views, language, and application CTA clicks. Configure consent and privacy disclosures appropriate to the audiences and applicable laws before enabling analytics. Avoid sending personal information to analytics.
- **Google Search Console:** free monitoring of search indexing, search queries, and search appearance after the domain is verified.
- **Hosting-provider logs and deployment alerts:** use the included free features to catch failed builds and deployment problems.
- **Manual uptime check:** for a small static site, begin with provider notifications and occasional checks; add a free uptime monitor only if useful.

### Analytics event suggestions

Keep the first setup small:

- `apply_click` — application CTA clicked.
- `language_switch` — language changed.
- Optional: `section_view` only if there is a clear question the team wants to answer.

Use consistent event names and avoid collecting names, emails, form responses, or other personal data in analytics. Google Forms responses should remain in the form owner’s authorized Google account and follow the team’s privacy practices.

### Privacy and maintenance

- Add a clear privacy notice explaining the application form and analytics use.
- Check whether consent is required for analytics in the jurisdictions relevant to visitors; when uncertain, use a consent mechanism or defer non-essential analytics until the team has confirmed its obligations.
- Do not assume “free” means “no privacy responsibilities.”
- Keep dependencies updated periodically.
- Check broken links and form destinations before each cohort opens.
- Keep CMS and hosting access limited to the founders who need it, with multi-factor authentication where available.

---

## 7. Launch checklist

### Content

- [ ] Both founders approved all copy.
- [ ] Program facts, weekly schedule, language requirements, eligibility, and time commitment are accurate.
- [ ] Application form is live, correct, and owned by an appropriate team account.
- [ ] Application deadline is confirmed or omitted.
- [ ] Sample projects are labeled as illustrative where appropriate.
- [ ] Founder bios and images are approved.
- [ ] French copy has been reviewed for natural phrasing.

### Functionality

- [ ] Header anchors work.
- [ ] Mobile menu works with keyboard and touch.
- [ ] Language switch works.
- [ ] All apply buttons point to the correct Google Form.
- [ ] Social/contact links work.
- [ ] No placeholder links remain.

### Quality

- [ ] Mobile tested at narrow and common phone widths.
- [ ] Tablet and desktop layouts checked.
- [ ] Keyboard navigation and focus indicators checked.
- [ ] Reduced-motion behavior checked.
- [ ] Images optimized and have correct alt text.
- [ ] Production build passes.
- [ ] Metadata, canonical URL, `hreflang`, and sitemap/robots settings verified.

### Deployment and monitoring

- [ ] Custom domain and HTTPS work.
- [ ] Search Console is configured.
- [ ] Analytics is either configured with appropriate privacy controls or intentionally deferred.
- [ ] Deployment notifications are enabled if available.
- [ ] Founders know how to update content and application links.

---

## 8. Recommended AI-assisted implementation workflow

Use an AI coding assistant phase by phase rather than asking it to generate the entire site in one prompt.

For each phase:

1. Give the assistant this specification and the current repository state.
2. Ask it to implement only the tasks in that phase.
3. Ask it to explain the files changed and any design or technical assumptions.
4. Run the development server and inspect the actual result.
5. Run the production build and fix errors before proceeding.
6. Test both languages and mobile behavior.
7. Commit the working phase before starting the next one.

### Suggested first implementation prompt

> Read `SPEC.md` completely before changing code. Implement Sprint 1, Phase 1.1 only: scaffold Astro with TypeScript, add Tailwind CSS using the current supported Astro integration, create the directory structure and BaseLayout, define the brand design tokens and typography, and document local setup in README. Do not build the homepage sections yet. Keep dependencies minimal, do not invent final content or add a CMS, and verify that the project builds successfully. Summarize files changed, commands run, and any decisions that require my input.

### Suggested follow-up prompt template

> Read `SPEC.md` and inspect the existing implementation. Implement Sprint [number], Phase [number] only. Follow the acceptance criteria in the specification, preserve the existing design system and reusable components, support both English and French, and do not implement later phases. Run the relevant checks and report any incomplete items or assumptions.

---

## 9. Decisions to confirm before launch

- [ ] Production domain and default behavior for `/`.
- [ ] Final Google Form URL(s), and whether the same form serves both languages.
- [ ] Confirmed program dates/deadline, or decision to omit them.
- [ ] Confirmed weekly time commitment.
- [ ] Final curriculum details approved by both track leads.
- [ ] Founder names, roles, bios, and photos.
- [ ] Confirmed certificate policy, if any.
- [ ] Social media URLs and contact email.
- [ ] Hosting provider.
- [ ] Analytics and privacy/consent approach.
- [ ] CMS choice and authentication strategy for Sprint 2.

---

## 10. Definition of done

Sprint 1 is done when the bilingual homepage is live, responsive, accessible, visually aligned with the approved direction, all application links work, and the founders have approved the public content.

Sprint 2 is done when the founders can update the agreed content fields in the CMS, preview and publish changes in both languages, and follow the documented editorial and rollback workflow without editing the page components.
