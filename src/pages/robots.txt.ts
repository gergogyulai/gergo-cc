import type { APIRoute } from "astro";

export const GET: APIRoute = () =>
  new Response(`User-Agent: *\nAllow: /\n\nSitemap: https://gergo.cc/sitemap.xml\n`);
