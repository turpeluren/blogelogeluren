
import type { CollectionEntry } from "astro:content";

const getPostsByYear = (posts: CollectionEntry<"blog">[], year: string) =>
  posts.filter(post => post.data.pubDatetime.getFullYear() === parseInt(year));

export default getPostsByYear;
