import type { APIRoute } from "astro";
import { icon } from "./icon.png";

// Browsers and crawlers still ask for /favicon.ico by default.
export const GET: APIRoute = icon;
