import { ImageResponse } from "next/og";
import { colors, plexMono } from "@/lib/og";

export const alt = "gergo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.paper,
          color: colors.ink,
          fontFamily: "Plex",
          fontSize: 44,
        }}
      >
        <span style={{ color: colors.faint }}>[</span>
        <span style={{ fontWeight: 500 }}>gergo</span>
        <span style={{ color: colors.faint }}>]</span>
      </div>
    ),
    { ...size, fonts: await plexMono() },
  );
}
