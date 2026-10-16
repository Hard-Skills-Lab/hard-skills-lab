import { siteConfig } from "./site-config";
import type { IconName } from "../components/icons";

const links: Array<{ name: string; icon: IconName; href: string }> = [
  { name: "LinkedIn", icon: "linkedin", href: siteConfig.social.linkedin },
  { name: "Instagram", icon: "instagram", href: siteConfig.social.instagram },
];

// Only links with a real URL are shown (header menu and footer)
export const socialLinks = links.filter((link) => link.href !== "");
