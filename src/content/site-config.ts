export const siteConfig = {
  siteUrl: "https://hardskills-lab.org",
  // TODO: Replace with actual Google Form URLs when available
  applicationUrls: {
    en: "https://forms.gle/placeholder-en",
    fr: "https://forms.gle/placeholder-fr",
  },
  social: {
    // TODO: Add real social URLs when available
    email: "contact@hardskills-lab.org",
    linkedin: "",
    instagram: "",
  },
} as const;

export type Language = "en" | "fr";
export type ApplicationUrl = keyof typeof siteConfig.applicationUrls;
