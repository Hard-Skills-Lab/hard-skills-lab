import { siteConfig } from "./site-config";
import type { IconName } from "../components/icons";

const links: Array<{ name: string; icon: IconName; href: string }> = [
  { name: "LinkedIn", icon: "linkedin", href: siteConfig.social.linkedin },
  { name: "Instagram", icon: "instagram", href: siteConfig.social.instagram },
  { name: "Facebook", icon: "facebook", href: siteConfig.social.facebook },
];

// Only links with a real URL are shown (mobile menu, FAQ and footer)
export const socialLinks = links.filter((link) => link.href !== "");
