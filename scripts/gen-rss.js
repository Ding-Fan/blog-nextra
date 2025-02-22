// not working after upgrade to nextra 4
// need to add this to package.json build command
// node --max-old-space-size=8192 ./scripts/gen-rss.js && 

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import RSS from "rss";

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  const feed = new RSS({
    title: "又不是不能写博客",
    site_url: "https://dingfan.date",
    feed_url: "https://dingfan.date/feed.xml",
  });

  // Reading files from the pages directory
  const posts = await fs.readdir(path.join(__dirname, "..", "pages"));
  const allPosts = [];

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.") || !name.endsWith(".mdx")) return;

      // Assuming you might need to include more metadata for each post in the future
      allPosts.push({
        url: name.replace(/\.mdx?/, ""), // Strip the .mdx extension from the URL
      });
    })
  );

  // Sort posts by date (assuming you'll add a `date` field to the posts)
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Add each post to the RSS feed
  allPosts.forEach((post) => {
    feed.item(post);
  });

  // Write the generated RSS feed to the public folder
  await fs.writeFile(path.join(__dirname, "..", "public", "feed.xml"), feed.xml({ indent: true }));
}

generate();
