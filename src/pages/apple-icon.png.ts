import type { APIRoute } from "astro";
import { colors, h, png } from "../lib/og";

// iOS rounds the corners itself, so the tile stays square.
export const GET: APIRoute = () =>
  png(
    h(
      "div",
      {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.ink,
        color: colors.paper,
        fontFamily: "Plex",
        fontSize: 72,
        paddingBottom: 12,
      },
      h("span", { color: colors.faint }, "["),
      h("span", { fontWeight: 500 }, "g"),
      h("span", { color: colors.faint }, "]"),
    ),
    { width: 180, height: 180 },
  );
