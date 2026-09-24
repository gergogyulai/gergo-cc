import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const colors = {
  paper: "#f4f1ea",
  ink: "#1f1d1a",
  faint: "#6f6a61",
};

// Generated images can't use next/font, so they load the same face from disk.
export async function plexMono() {
  const load = (file: string) => readFile(join(process.cwd(), "assets", file));
  const [regular, medium] = await Promise.all([
    load("IBMPlexMono-Regular.ttf"),
    load("IBMPlexMono-Medium.ttf"),
  ]);

  return [
    { name: "Plex", data: regular, weight: 400 as const },
    { name: "Plex", data: medium, weight: 500 as const },
  ];
}
