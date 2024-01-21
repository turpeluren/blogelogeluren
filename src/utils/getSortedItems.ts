import type { CollectionEntry } from "astro:content";

const getSortedItems = (items) =>
  items
    .filter(({ frontmatter }) => !frontmatter.draft)
    .filter(({ frontmatter }) => !frontmatter.project)
    .filter(({ frontmatter }) => !frontmatter.featured)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.frontmatter.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.frontmatter.pubDatetime).getTime() / 1000)
    );

export default getSortedItems;
