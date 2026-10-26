export const siteConfig = {
  siteUrl: "https://hardskills-lab.org",

  // While this is false, every "Apply" button becomes "Get notified" and
  // points to the waitlist form. Set it to true when the cohort dates are
  // fixed and the application form is live.
  applicationsOpen: false,

  // TODO: Replace with actual Google Form URLs when available
  applicationUrls: {
    en: "https://forms.gle/placeholder-en",
    fr: "https://forms.gle/placeholder-fr",
  },

  // TODO: Replace with the real waitlist form (name, email, country is enough)
  waitlistUrls: {
    en: "https://forms.gle/placeholder-waitlist-en",
    fr: "https://forms.gle/placeholder-waitlist-fr",
  },

  social: {
    // TODO: Add real social URLs when available
    email: "contact@hardskills-lab.org",
    linkedin: "",
    instagram: "",
  },
} as const;

export type Language = "en" | "fr";
