import type { CollectionEntry } from "astro:content";

const getSortedItems = (items: any[], filter_projects=true, filter_featured=true) => 
  //if (filter_projects) items.filter(({ frontmatter }) => !frontmatter.project)
  //if (filter_featured) items.filter(({ frontmatter }) => !frontmatter.featured)
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
