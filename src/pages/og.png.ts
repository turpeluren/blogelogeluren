import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const GET: APIRoute = async () => {
  const img = await generateOgImageForSite();

  let body: ArrayBuffer;
  body = new Uint8Array(img).buffer;

  return new Response(body, {
    headers: { "Content-Type": "image/png" },
  });
};
