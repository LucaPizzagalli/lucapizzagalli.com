// Regenerates public/rss.xml from src/data/posts.js. Runs automatically before
// `npm run dev` and `npm run build` via the predev/prebuild npm hooks.

import { writeFileSync } from "node:fs";
import { posts } from "../src/data/posts.js";

const SITE_URL = "https://lucapizzagalli.com";
const TITLE = "Things by Luca";
const DESCRIPTION = "Luca Pizzagalli's blog.";

const escape = (s) =>
  String(s).replace(/[<>&"']/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
  }[c]));

const items = posts
  .map((p) => {
    const url = SITE_URL + p.url;
    return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escape(DESCRIPTION)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;

writeFileSync("public/rss.xml", xml);
console.log(`wrote public/rss.xml with ${posts.length} items`);
