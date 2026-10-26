# Hard Skills Lab website: design review

26 October 2026. Reviewed the claude branch (merge commit fa4b839) at 1440 px and 390 px wide, with the real fonts. Compared with six similar sites: ALX, Power Learn Project, DataTalks.Club (ML Zoomcamp), CodeYourFuture, Simplon and Le Wagon.

The branch `design-improvements` builds the ten proposals below. What changed, what is left to confirm and the image ideas are at the end of this file.

## What works

- Clear, calm editorial look: paper background, one orange accent, strong Space Grotesk headings.
- The message is right: free, online, bilingual, project-first, for young Africans.
- The week-by-week curriculum is already concrete, and the FR/EN switch is in the header.
- SEO basics are in place: title, description, canonical, hreflang for FR and EN, Open Graph text.

## Proposals, in priority order

1. Key facts in the hero. Add a row under the headline: Free · 8 weeks · Online · French & English · next cohort date. Add a second button "See the curriculum". Optional thin announcement bar at the top with the cohort status (CodeYourFuture does this; Simplon pairs "Candidater" with "Découvrir les filières").
2. Waitlist before applications open. The Apply button goes to a placeholder form and the deadline says "to be confirmed". Use "Get notified when applications open" with a simple email form until dates are set, then switch back to Apply.
3. A "How it works" section. Steps such as: apply, short selection, setup week, 8 weeks with live sessions, capstone and certificate. Include days, times (GMT) and whether sessions are recorded. CodeYourFuture lists each step with its length; DataTalks.Club spells out live sessions, homework, project, peer review and certificate.
4. Curriculum as outcomes. One 8-week timeline with the data and AI topics side by side and an "at the end of this week you can..." line. Say clearly that every learner follows both tracks. Add a row of tools (Python, Jupyter or Colab, pandas, scikit-learn) and a downloadable syllabus. DataTalks.Club and Le Wagon describe each module by what you will be able to do.
5. Bring back an FAQ. Is it really free, can I use a phone, what if my internet drops, is there a certificate, which language are classes in, how many hours a week, can I join from outside Togo, who runs it. Le Wagon and DataTalks.Club both answer these on the course page.
6. Honest trust signals. Real photos, full names and LinkedIn links for the team, one credential line each, and a link to the open curriculum on GitHub. Fill "Name TBC". Show only real sample projects in a grid (the carousel repeats the same card and links to example.com). No testimonials or numbers until cohort 1 produces them. ALX and Power Learn Project rely on named learner stories.
7. Mobile and low data. Most visitors will be on phones and mobile data. The mobile page is about 7,300 px long with five large placeholder blocks, and the header has no Apply button. Add a sticky Apply or waitlist button, shrink or drop the hero image on mobile, serve compressed images (Astro Image, WebP or AVIF, lazy loading) and self-host fewer font weights.
8. Contrast. Orange text on paper is 3.77:1 and white on the orange button is 4.11:1; WCAG AA needs 4.5:1 for normal text. A slightly darker orange such as #c2431f gives 4.68:1 on paper and 5.1:1 with white text; keep #d94f2b for large shapes. Add a skip-to-content link.
9. Sharing and language. Add a 1200x630 og:image per language so LinkedIn and WhatsApp links show a picture. The root page waits 2 seconds and then always opens English; redirect at once and pick French or English from the browser language.
10. Footer and copy. Add LinkedIn and Instagram once they exist, the language switch, and a short privacy notice (the form collects personal data). The copy has 8 em dashes (4 in each language). The LEARN › BUILD › GROW line is close to Power Learn Project's "Learn, Code, Grow", so a more distinctive line may help.

## Decisions taken after the review

- The site speaks to young people across Africa, not only Togo and West Africa. Teaching in French and English is the reason it can reach learners from francophone and anglophone countries.
- No team section and no "two co-founders" line. The About section is about the mission and why it matters. The names go on the tracks: Kokou Hugues Minasseh leads Data Analysis, Yao Gervais Amoah leads AI and ML.
- Four free stock photos are now on the page (hero, program, curriculum, apply). Only the two sample project cards keep their placeholders. Stock photos of people must not be presented as our learners or team.

## What the branch changes

| # | Change | Main files |
|---|---|---|
| 1 | Key facts row and "See the curriculum" button in the hero. Thin status bar above the header ("Cohort 1 applications open soon. Get notified"). The cohort date is left out until there is one. | `home/HeroSection.astro`, `AnnouncementBar.astro` |
| 2 | `applicationsOpen: false` in `site-config.ts`. While it is false, every main button says "Get notified" and opens the waitlist form. Set it to true when the application form is live. One helper, `getMainCta()`, feeds the header, hero, apply section, status bar and mobile bar. | `site-config.ts`, `site-content.ts` |
| 3 | New "How it works" section after the program: apply, learn live, practise, present your project. Only confirmed facts. | `home/HowItWorksSection.astro` |
| 4 | Curriculum intro starts with "Everyone follows both tracks". Each track shows its lead, the 8 weeks and "By the end, you can" (4 outcomes). Tools row added. No downloadable syllabus yet (there is no file). | `home/CurriculumSection.astro`, `TrackLead.astro` |
| 5 | FAQ back, 7 questions, confirmed answers only. Native `details`, so it works without JavaScript. Linked from the header and footer. | `home/FaqSection.astro` |
| 6 | About rewritten as mission plus three reasons (free, bilingual, project-first). Sample projects: duplicate removed, so they show as a grid of two; example.com links removed ("View project" stays hidden until a real link exists); the data example is now "Youth employment in Africa". No testimonials or numbers. | `home/AboutSection.astro`, `SampleProjects.astro` |
| 7 | Sticky "Get notified" button on phones and tablets. It hides while the hero buttons, the apply section or the footer are on screen. Hero image 16:9 on phones instead of 4:5. Fonts self-hosted with Fontsource: 3 files, about 66 KB for a page, and no request to Google. | `MobileCta.astro`, `BaseLayout.astro`, `package.json` |
| 8 | New colour `orange-deep` (#b93d1c) for eyebrows, buttons, number badges and link hovers. #c2431f was not enough on the light grey cards (4.24:1). #b93d1c gives 5.14:1 on paper, 4.66:1 on the cards and 5.6:1 with white text. #d94f2b stays for large shapes, icons and underlines. Skip link added. | `global.css`, `PrimaryButton.astro` |
| 9 | Sharing images `public/og/og-en.png` and `og-fr.png` (1200x630, brand colours and fonts) with the og:image and Twitter card tags. The root page now redirects at once: French when the browser prefers French, English otherwise, and English without JavaScript. | `BaseLayout.astro`, `pages/index.astro` |
| Photos | Four free stock photos: hero (Daniel Thomas), program mission card and phone banner (Kenneth Chiamaka Ejiofor), curriculum on phones and the thin strip in the desktop hero (Olumuyiwa Sobowale), apply section column on desktop and banner on phones (FOTOGRAFÍA EDITORIAL). Web-sized copies in `src/assets/photos`, credits in `CREDITS.md`, alt text in both languages. Astro serves them as WebP at several widths; only the hero loads straight away. | `home/HeroSection.astro`, `home/ProgramSection.astro`, `home/CurriculumSection.astro`, `home/ApplySection.astro` |
| 10 | Footer: language switch, FAQ link and a short privacy note (draft). LinkedIn and Instagram appear by themselves once their URLs are in `site-config.ts`. All em dashes removed from the copy. Tagline unchanged, ideas below. | `SiteFooter.astro`, `site-content.ts` |

Also in the branch:

- `SPEC.md` and `FULL_SPEC.md` now say "across Africa" and describe the About section without team cards, so future work follows the same direction.
- `.gitattributes` keeps line endings as LF. On Windows, every file showed as modified because of CRLF only.
- Section backgrounds (paper and paper-soft) were swapped where needed, so they still alternate with the two new sections.

## Checks done

- `npm run build`: 3 pages built. `astro check`: 0 errors, 0 warnings.
- No sideways scrolling at 320 px wide, in English and French.
- Mobile bar: hidden at the top, shown mid-page, hidden over the apply section.
- Root redirect: fr-FR and fr-TG go to /fr/, en-GB and de-DE go to /en/.
- The first Tab stop is the skip link.
- Photos: no broken image. A phone (390 px, 2x screen) loads about 27 KB for the hero photo and about 200 KB of photos for the whole page.
- No em or en dash and no Togo or West Africa mention left in `src`.
- The mobile page is now about 9,700 px long in English (it was about 7,300). The new sections add length; the shorter hero image takes some back.

## To confirm before merging

1. Waitlist form: create it (name, email, country is enough) and put its links in `waitlistUrls`. Same for the application form later.
2. Track leads: name format, role lines, and Gervais's LinkedIn link.
3. Tools list: Python, Jupyter, pandas, Matplotlib, scikit-learn.
4. How the bilingual delivery works (separate French and English groups, or bilingual sessions), so the FAQ can say more.
5. Session days and times (GMT), recordings, a selection step, a certificate, the equipment needed (computer, phone) and any age range. Then add them to "How it works" and the FAQ.
6. The privacy note wording.
7. When applications open: set `applicationsOpen` to true, update the "When does the next cohort start?" answer and the deadline.
8. Real links for the sample projects, or keep them hidden.

## Images

The four marked "In the site" are on the page. The others are options for a later swap.

All free under the Unsplash License or the Pexels License: free for commercial use, no credit required (a credit is still nice). Neither licence allows implying that the people shown endorse us, so these are scene photos, not "our learners". Real photos from cohort 1 should replace them when possible. New photos go in `src/assets/photos` and use Astro's `<Image>`, like the three already there.

| Slot | Photo | Photographer | Link |
|---|---|---|---|
| Hero (tall on desktop, 16:9 on phones). **In the site** | Woman working on a laptop | Daniel Thomas (Unsplash) | https://unsplash.com/photos/woman-using-laptop-in-workspace-HA-0i0E7sq4 |
| Hero, other option | Young man standing with a laptop | Seth Ebenezer Tetteh (Unsplash) | https://unsplash.com/photos/a-man-with-a-laptop-in-his-hand-DeqswsZEO3Y |
| Program landscape and mission card. **In the site** | Adults learning to code in a computer lab | Kenneth Chiamaka Ejiofor (Pexels) | https://www.pexels.com/photo/diverse-group-learning-programming-in-computer-lab-30879378/ |
| Program landscape, other option | Student with a laptop on a campus bench | Iwaria Inc. (Unsplash) | https://unsplash.com/photos/a-person-sitting-on-a-bench-with-a-laptop-SESt1VL2D-w |
| Curriculum on phones, strip in the desktop hero. **In the site** | Man with headphones in front of code | Olumuyiwa Sobowale (Unsplash) | https://unsplash.com/photos/a-man-sitting-in-front-of-a-computer-wearing-headphones-kQIdjLbCghA |
| Curriculum, other option | Developer with headphones, code on the monitor | Nubelson Fernandes (Unsplash) | https://unsplash.com/photos/man-in-black-long-sleeve-shirt-wearing-black-headphones-sitting-on-chair-gTs2w7bu3Qo |
| Apply section (tall on desktop, banner on phones). **In the site** | Woman studying with a laptop, notebook and pen | FOTOGRAFÍA EDITORIAL (Unsplash) | https://unsplash.com/photos/woman-typing-on-laptop-at-workspace-RMK8Lt3Ac2s |
| Apply, other options | Woman at a laptop, blue blazer | Akinyemi Gbadamosi (Unsplash) | https://unsplash.com/photos/a-woman-sitting-in-front-of-a-laptop-computer-T_CkxezKRTA |
| | Young man focused on his laptop | Kojo Kwarteng (Unsplash) | https://unsplash.com/photos/man-in-gray-crew-neck-t-shirt-using-laptop-computer-KUzlAah2dog |

For the two sample projects, real screenshots are better than stock: a chart from the data notebook and a cell of the model notebook, kept with the "Illustrative example" label until learners make real ones.

## Tagline ideas

LEARN › BUILD › GROW is not changed. If we want something more distinctive, each of these works in both languages:

- Learn it. Build it. Show it. / Apprendre. Construire. Montrer.
- Learn by building. / Apprendre en construisant.
- Skills you can show. / Des compétences qui se voient.
- Data. AI. Real projects. / Données. IA. Vrais projets.

## Sources

- https://www.alxafrica.com/
- https://powerlearnprojectafrica.org/
- https://github.com/DataTalksClub/machine-learning-zoomcamp and https://datatalks.club/docs/courses/ml-zoomcamp/
- https://codeyourfuture.io/
- https://www.simplon.co/
- https://www.lewagon.com/data-science-course
