import { ImageResponse } from "next/og";
import { colors, plexMono } from "@/lib/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 6,
          fontFamily: "Plex",
          fontWeight: 500,
          fontSize: 28,
          paddingBottom: 9,
        }}
      >
        g
      </div>
    ),
    { ...size, fonts: await plexMono() },
  );
}
