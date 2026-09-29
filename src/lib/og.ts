import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

export const colors = {
  paper: "#f4f1ea",
  ink: "#1f1d1a",
  faint: "#6f6a61",
};

type Style = Record<string, string | number>;
type Node = { type: string; props: { style?: Style; children?: unknown } };

// Satori only needs element-shaped objects, so this stands in for JSX.
export const h = (type: string, style: Style, ...children: (Node | string)[]): Node => ({
  type,
  props: { style, children },
});

// Generated images can't use the web font setup, so they load the same face from disk.
async function plexMono() {
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

// Renders at build time into a static PNG.
export async function png(node: Node, size: { width: number; height: number }) {
  const svg = await satori(node, { ...size, fonts: await plexMono() });
  const image = new Resvg(svg, { fitTo: { mode: "width", value: size.width } }).render().asPng();
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/png" } });
}
