import type { APIRoute } from "astro";
import { siteConfig } from "../content/site-config";

// Sitemap for search engines, built at /sitemap.xml.
// Only the two language versions of the home page are listed. The root page
// (/) just sends visitors to one of them, so it stays out.
const pages = ["/en/", "/fr/"];

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).href;

// Each entry also names both language versions (hreflang), the same way the
// <link rel="alternate"> tags in BaseLayout do.
const alternates = [
  `    <xhtml:link rel="alternate" hreflang="en" href="${absolute("/en/")}"/>`,
  `    <xhtml:link rel="alternate" hreflang="fr" href="${absolute("/fr/")}"/>`,
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute("/en/")}"/>`,
].join("\n");

export const GET: APIRoute = () => {
  const entries = pages
    .map((path) => `  <url>\n    <loc>${absolute(path)}</loc>\n${alternates}\n  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
