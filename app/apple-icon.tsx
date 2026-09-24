import { ImageResponse } from "next/og";
import { colors, plexMono } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so the tile stays square.
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
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
        }}
      >
        <span style={{ color: colors.faint }}>[</span>
        <span style={{ fontWeight: 500 }}>g</span>
        <span style={{ color: colors.faint }}>]</span>
      </div>
    ),
    { ...size, fonts: await plexMono() },
  );
}
