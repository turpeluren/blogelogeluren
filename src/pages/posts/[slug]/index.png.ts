import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("posts").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const img = await generateOgImageForPost(
    props as CollectionEntry<"posts">
  );

  let body: ArrayBuffer;
  body = new Uint8Array(img).buffer;

  return new Response(body, {
    headers: { "Content-Type": "image/png" },
  });
};
