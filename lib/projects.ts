export type Project = {
  name: string;
  href: string;
  note: string;
};

// Mirrors the links on the GitHub profile README.
export const pinned: Project[] = [
  {
    name: "minato",
    href: "https://github.com/gergogyulai/minato",
    note: "self-hosted torrent indexer with a search ui and torznab api",
  },
  {
    name: "magneto",
    href: "https://github.com/gergogyulai/magneto",
    note: "browser extension that collects magnet links for archiving",
  },
  {
    name: "dotfiles",
    href: "https://github.com/gergogyulai/dotfiles",
    note: "shell, terminal and machine setup",
  },
  {
    name: ".vscode-config",
    href: "https://github.com/gergogyulai/vscode-config",
    note: "editor settings and extensions",
  },
];

export const other: Project[] = [
  {
    name: "yetweets",
    href: "https://yetweets.xyz",
    note: "archive of kanye west's tweet history",
  },
  {
    name: "tiktok-exporter",
    href: "https://github.com/gergogyulai/tiktok-exporter",
    note: "export likes, reposts and favorites to plain files",
  },
  {
    name: "lysi",
    href: "https://github.com/gergogyulai/lysi",
    note: "rust cli that sorts messy photo folders into a library",
  },
  {
    name: "cloneall",
    href: "https://github.com/gergogyulai/cloneall",
    note: "clone every repo of a github user or org",
  },
  {
    name: "jellyfin-sso-ui",
    href: "https://github.com/gergogyulai/jellyfin-sso-ui",
    note: "makes the jellyfin sso plugin look native",
  },
  {
    name: "lofiplayer",
    href: "https://lofiplayer.app",
    note: "an always-on background music tab",
  },
  {
    name: "noisr",
    href: "https://noisr.gergo.cc",
    note: "noise texture generator",
  },
];
