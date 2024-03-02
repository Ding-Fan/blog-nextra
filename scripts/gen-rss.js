const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");

async function generate() {
  const feed = new RSS({
    title: "又不是不能写博客",
    site_url: "https://dingfan.date",
    feed_url: "https://dingfan.date/feed.xml",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "pages"));
  const allPosts = [];
  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.") || !name.endsWith(".mdx")) return;

      allPosts.push({
        url: name.replace(/\.mdx?/, ""),
      });
    })
  );

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  allPosts.forEach((post) => {
    feed.item(post);
  });
  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
