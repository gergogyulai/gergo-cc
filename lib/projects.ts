import type { IconName } from "@/components/tech-icon";
import type { ChipStatus } from "@/components/progress-chips";

export type Project = {
  title: string;
  type? : "Browser Extension" | "Web App" | "Mobile App" | "CLI Tool" | "Desktop App" | "Library" | "Other" | "Website" | "API" | "Game" | "Bot" | "Firmware" | "Script" | "Plugin" | "Theme" | "Template" | "Tool" | "Automation" | "Portfolio" | "Utility" | "DevOps" | "User Script";
  scope?: "Personal" | "Work" | "Open Source" | "School" | "Collaboration" | "Hackathon" | "Research" | "Community" | "Experiment" | "Other";
  description: string;
  href?: string;
  githubRepo?: string;
  highlighted?: boolean;
  status?: ChipStatus;
  tags: IconName[];
}

export const projects: Project[] = [
  {
    title: "Project Minato",
    scope: "Open Source",
    description: "A self-hosted torrent scraper and indexer with a built-in search UI and Torznab API support.",
    githubRepo: "https://github.com/gergogyulai/minato",
    status: "InProgress",
    tags: ["Typescript", "Hono", "Golang", "React", "Docker"]
  },
  {
    title: "Magneto",
    type: "Browser Extension",
    scope: "Open Source",
    description: "Privacy-first browser extension that automatically collects and archives magnet links while you browse.",
    href: "https://magneto.crackhead.engineering/",
    githubRepo: "https://github.com/gergogyulai/magneto",
    status: "Shipped",
    tags: ["Svelte", "Tailwind", "Vite", "Typescript"]
  },
  {
    title: "Lysi",
    type: "CLI Tool",
    scope: "Personal",
    description: "A minimalist Rust CLI to transform messy directories into a standardized photo library.",
    githubRepo: "https://github.com/gergogyulai/lysi",
    status: "InProgress",
    tags: ["Rust"]
  },
  {
    title: "tiktok-exporter",
    type: "User Script",
    scope: "Open Source",
    description: "Userscript to export tiktok reposts, likes, and favorites into a non-proprietary format for personal archiving",
    githubRepo: "https://github.com/gergogyulai/tiktok-exporter",
    status: "Shipped",
    tags: ["Javascript"]
  },
  {
    title: "jellyfin-sso-ui",
    type: "User Script",
    scope: "Open Source",
    description: "Native-feeling UI for the Jellyfin SSO Auth Plugin",
    githubRepo: "https://github.com/gergogyulai/jellyfin-sso-ui",
    status: "Shipped",
    tags: ["Javascript"]
  },
  {
    title: "Lofiplayer",
    type: "Web App",
    scope: "Open Source",
    description: "Minimalistic 24/7 lofi music player for work, study, or relaxation.",
    href: "https://lofiplayer.app",
    githubRepo: "https://github.com/gergogyulai/lofiplayer",
    status: "Shipped",
    tags: ["React", "TanstackRouter", "Tailwind", "Vite", "Typescript"]
  },
  {
    title: "Yetweets",
    type: "Web App",
    scope: "Open Source",
    description: "Archive of Kanye West's tweet history",
    href: "https://yetweets.xyz/",
    githubRepo: "https://github.com/gergogyulai/yetweets",
    status: "InProgress",
    highlighted: true,
    tags: ["Nextjs", "Tailwind", "Typescript", "Vercel"]
  },
  {
    title: "Noisr",
    type: "Web App",
    scope: "Personal",
    description: "Noise texture generator with custom size, density and color options",
    href: "https://noisr.gergo.cc",
    githubRepo: "https://github.com/gergogyulai/noisr",
    status: "Shipped",
    tags: ["Nextjs", "Tailwind", "Typescript", "Vercel"]
  },
  {
    title: "Wintoolbelt",
    type: "Desktop App",
    scope: "Personal",
    description: "Tools for cleaning public school PCs, including browser resets and Veyon controls",
    githubRepo: "https://github.com/gergogyulai/wintoolbelt",
    status: "Shipped",
    tags: ["PowerShell", "Hono", "Typescript"]
  },
  {
    title: "Cloneall",
    type: "CLI Tool",
    scope: "Open Source",
    description: "CLI tool for cloning GitHub all repositories of a user or organization",
    githubRepo: "https://github.com/gergogyulai/cloneall",
    status: "Shipped",
    tags: ["Golang"]
  },
  {
    title: "Sonora",
    type: "Mobile App",
    scope: "Open Source",
    description: "Sleek and modern music streaming app, powered by Jellyfin, built with Expo",
    githubRepo: "https://github.com/gergogyulai/sonora",
    status: "Abandoned",
    tags: ["ReactNative", "Expo", "Typescript"]
  },
  {
    title: "Veyonctl",
    type: "CLI Tool",
    scope: "Open Source",
    description: "CLI tool for Veyon Service control on Windows",
    githubRepo: "https://github.com/gergogyulai/veyonctl",
    status: "Archived",
    tags: ["CSharp"]
  },
  {
    title: "Minitools",
    type: "Other",
    scope: "Personal",
    description: "Collection of simple utility tools in various languages",
    githubRepo: "https://github.com/gergogyulai/minitools",
    status: "Archived",
    tags: ["Javascript", "Python", "Golang"]
  },
  {
    title: "movie-web-tv",
    type: "Web App",
    scope: "Personal",
    description: "Modified version of movie-web optimized for Smart TVs",
    githubRepo: "https://github.com/gergogyulai/movie-web-tv",
    status: "Unknown",
    tags: ["React", "Tailwind", "Typescript", "Vite"]
  }
]
