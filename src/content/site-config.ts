export const siteConfig = {
  siteUrl: "https://hardskills-lab.org",

  // True: every main button says "Apply to the cohort" and opens the
  // application form in a new tab. False: it says "Get notified" and points
  // to the waitlist form instead.
  applicationsOpen: true,

  // Cohort 1 application forms. Both are in the shared drive (Cohort 1 >
  // Google Form) and write to the same Cohort 1 applications spreadsheet.
  // Each page opens the form in its own language. hl=fr also puts Google's
  // own labels (Submit, Your answer...) in French when the browser is in
  // English. hl=en has no effect on a French browser, so it is left out.
  applicationUrls: {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSc_UrSsFstUv35aQRWBXdJb7zywwUwsq8h82Su1BMTQqAPOPg/viewform",
    fr: "https://docs.google.com/forms/d/e/1FAIpQLScbQMLK1RJbsXtKkwSCdA5GDYR3bciJwN4PJ75o5mT6gWrm9g/viewform?hl=fr",
  },

  // TODO: Replace with the real waitlist form (name, email, country is enough)
  waitlistUrls: {
    en: "https://forms.gle/placeholder-waitlist-en",
    fr: "https://forms.gle/placeholder-waitlist-fr",
  },

  social: {
    // TODO: Add real social URLs when available
    email: "contact@hardskills-lab.org",
    linkedin: "https://www.linkedin.com/company/hardskillslab",
    instagram: "https://www.instagram.com/hardskillslab/",
    // Page created on 30 October 2026. Switch to facebook.com/hardskillslab
    // once the Page has that username.
    facebook: "https://www.facebook.com/profile.php?id=61596057390478",
  },
} as const;

export type Language = "en" | "fr";
