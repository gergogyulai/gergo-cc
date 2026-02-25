import { toolsRegistry } from "@/lib/tool-registry";

export const tools = [
  {
    ...toolsRegistry.cursor,
    position: { x: 8, y: 7 },
    size: "sm",
    animationDelay: 0.1,
  },
  {
    ...toolsRegistry.vscode,
    position: { x: 21, y: 11 },
    size: "md",
    animationDelay: 0.2,
  },
  {
    ...toolsRegistry.tanstack,
    position: { x: 36, y: 6 },
    size: "md",
    animationDelay: 0.3,
  },
  {
    ...toolsRegistry.vercel,
    position: { x: 52, y: 5 },
    size: "md",
    animationDelay: 0.4,
  },
  {
    ...toolsRegistry.tailwind,
    position: { x: 69, y: 8 },
    size: "lg",
    animationDelay: 0.5,
  },
  {
    ...toolsRegistry.postgres,
    position: { x: 86, y: 22 },
    size: "sm",
    animationDelay: 0.6,
  },

  {
    ...toolsRegistry.electron,
    position: { x: 0, y: 34 },
    size: "sm",
    animationDelay: 0.7,
  },
  {
    ...toolsRegistry.nextjs,
    position: { x: 15, y: 45 },
    size: "lg",
    animationDelay: 0.8,
  },
  {
    ...toolsRegistry.expo,
    position: { x: 32, y: 43 },
    size: "md",
    animationDelay: 0.9,
  },
  {
    ...toolsRegistry.react,
    position: { x: 48, y: 39 },
    size: "lg",
    animationDelay: 1.0,
  },
  {
    ...toolsRegistry.drizzle,
    position: { x: 66, y: 49 },
    size: "sm",
    animationDelay: 1.1,
  },
  {
    ...toolsRegistry.github,
    position: { x: 80, y: 49 },
    size: "md",
    animationDelay: 1.2,
  },

  {
    ...toolsRegistry.dotnet,
    position: { x: 2, y: 60 },
    size: "sm",
    animationDelay: 1.3,
  },
  {
    ...toolsRegistry.docker,
    position: { x: 5, y: 86 },
    size: "sm",
    animationDelay: 1.4,
  },
  {
    ...toolsRegistry.svelte,
    position: { x: 18, y: 83 },
    size: "md",
    animationDelay: 1.5,
  },
  {
    ...toolsRegistry.typescript,
    position: { x: 35, y: 76 },
    size: "lg",
    animationDelay: 1.6,
  },
  {
    ...toolsRegistry.zustand,
    position: { x: 52, y: 76 },
    size: "md",
    animationDelay: 1.7,
  },
  {
    ...toolsRegistry.vite,
    position: { x: 68, y: 79 },
    size: "lg",
    animationDelay: 1.8,
  },
  {
    ...toolsRegistry.hono,
    position: { x: 85, y: 81},
    size: "sm",
    animationDelay: 1.9,
  },
  {
    ...toolsRegistry.rust,
    position: { x: 76, y: 66 },
    size: "sm",
    animationDelay: 2.0,
  },
  {
    ...toolsRegistry.python,
    position: { x: 91, y: 66 },
    size: "sm",
    animationDelay: 2.1,
  },
  {
    ...toolsRegistry.bullmq,
    position: { x: 74, y: 92 },
    size: "sm",
    animationDelay: 2.2,
  },
];
