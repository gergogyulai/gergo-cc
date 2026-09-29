import type { APIRoute } from "astro";
import { colors, h, png } from "../lib/og";

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
        background: colors.paper,
        color: colors.ink,
        fontFamily: "Plex",
        fontSize: 44,
      },
      h("span", { color: colors.faint }, "["),
      h("span", { fontWeight: 500 }, "gergo"),
      h("span", { color: colors.faint }, "]"),
    ),
    { width: 1200, height: 630 },
  );
