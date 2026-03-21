import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { marked } from "marked";
import { SITE } from "@config";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(post => ({
      link: `posts/${slugify(post.data)}`,
      title: post.data.title,
      author: post.data.author,
      // Convert raw markdown body to HTML for RSS description
      description:
        post.data.description + "<br><hr><br>" + marked.parse(post.body ?? ""),
      pubDate: new Date(post.data.pubDatetime),
    })),
  });
}
