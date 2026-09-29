# gergo.cc

One page, built with Astro.

```
bun install
bun dev
```

The favicon and OG image are generated at build time by the endpoints in
`src/pages/` (`icon.png.ts`, `apple-icon.png.ts`, `opengraph-image.png.ts`),
using the IBM Plex Mono files in `assets/` (SIL Open Font License, see
`assets/OFL.txt`). Redirects and security headers live in `vercel.json`.
