/* Writes public/robots.txt and public/sitemap.xml.
 *
 * Both files need the absolute site URL, but Create React App only substitutes
 * %REACT_APP_*% inside public/index.html — everything else in public/ is copied
 * verbatim. So these are generated here instead of hardcoding the domain, and
 * run automatically via the "prebuild" npm script.
 *
 * The URL resolves from a real environment variable first (which is what Vercel
 * sets), falling back to the committed .env default.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function siteUrl() {
  if (process.env.REACT_APP_SITE_URL) return process.env.REACT_APP_SITE_URL;
  const envFile = path.join(ROOT, ".env");
  if (fs.existsSync(envFile)) {
    const m = fs
      .readFileSync(envFile, "utf8")
      .match(/^\s*REACT_APP_SITE_URL\s*=\s*(.+)\s*$/m);
    if (m) return m[1].trim();
  }
  return "";
}

const SITE = siteUrl().replace(/\/$/, "");
if (!SITE) {
  console.warn(
    "[seo] REACT_APP_SITE_URL is not set — skipping robots.txt/sitemap.xml"
  );
  process.exit(0);
}

/* Every client-side route in src/App.js. Keep in sync when routes change. */
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/chefs", priority: "0.8", changefreq: "monthly" },
  { path: "/contactPage", priority: "0.8", changefreq: "monthly" },
  { path: "/request-feature", priority: "0.6", changefreq: "monthly" },
  { path: "/report-bug", priority: "0.6", changefreq: "monthly" },
  { path: "/privacy", priority: "0.4", changefreq: "yearly" },
  { path: "/terms", priority: "0.4", changefreq: "yearly" },
  { path: "/community-guidelines", priority: "0.4", changefreq: "yearly" },
];

const today = new Date().toISOString().slice(0, 10);

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "public/robots.txt"), robots);
fs.writeFileSync(path.join(ROOT, "public/sitemap.xml"), sitemap);
console.log(`[seo] wrote robots.txt and sitemap.xml for ${SITE}`);
