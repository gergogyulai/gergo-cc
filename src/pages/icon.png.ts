import type { APIRoute } from "astro";
import { colors, h, png } from "../lib/og";

export const size = { width: 32, height: 32 };

export const icon = () =>
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
        borderRadius: 6,
        fontFamily: "Plex",
        fontWeight: 500,
        fontSize: 28,
        paddingBottom: 9,
      },
      "g",
    ),
    size,
  );

export const GET: APIRoute = icon;
