import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://gergo.cc",
  // Downloaded at build time and served from the site itself.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      // Plex has no IPA glyphs (ɛ ˈ ː), so those render in this metric-matched
      // Arial fallback.
      fallbacks: ["sans-serif"],
    },
  ],
});
