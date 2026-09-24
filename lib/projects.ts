export type Project = {
  name: string;
  href: string;
  note: string;
  featured?: boolean;
};

// Public, non-fork repos, most recently active first.
// `featured` ones are the most polished and get listed on top.
export const projects: Project[] = [
  {
    name: "picslop",
    href: "https://picslop-web.vercel.app",
    note: "image board for one shared inbox domain",
  },
  {
    name: "adfreegpt",
    href: "https://github.com/gergogyulai/adfreegpt",
    note: "ublock origin filter for chatgpt ads",
  },
  {
    name: "minato",
    href: "https://projectminato.org",
    note: "self-hosted vault for the torrent ecosystem",
    featured: true,
  },
  {
    name: "jellyfin-sso-ui",
    href: "https://github.com/gergogyulai/jellyfin-sso-ui",
    note: "native-feeling jellyfin sso plugin ui",
  },
  {
    name: "diswhook",
    href: "https://github.com/gergogyulai/diswhook",
    note: "zero-dependency discord webhook client",
  },
  {
    name: "classroom-enhanced",
    href: "https://github.com/gergogyulai/classroom-enhanced",
    note: "making google classroom suck a bit less",
  },
  {
    name: "magneto",
    href: "https://magneto.crackhead.engineering",
    note: "collects magnet links while you browse",
    featured: true,
  },
  {
    name: "tiktok-exporter",
    href: "https://github.com/gergogyulai/tiktok-exporter",
    note: "export tiktok reposts, likes and favorites",
  },
  {
    name: "yetweets",
    href: "https://yetweets.xyz",
    note: "every tweet kanye west ever published",
    featured: true,
  },
  {
    name: "tgx-dump",
    href: "https://github.com/gergogyulai/tgx-dump",
    note: "all accessible dumps of torrentgalaxy",
  },
  {
    name: "lofiplayer",
    href: "https://lofiplayer.gergo.cc",
    note: "minimal lo-fi music player",
  },
  {
    name: "wintoolbelt",
    href: "https://github.com/gergogyulai/wintoolbelt",
    note: "cleanup tools for public school pcs",
  },
  {
    name: "noisr",
    href: "https://noisr.gergo.cc",
    note: "noise texture generator",
  },
  {
    name: "cloneall",
    href: "https://github.com/gergogyulai/cloneall",
    note: "clone every repo of a github user or org",
  },
];
