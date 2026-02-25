export type SetupTool = {
  name: string;
  href: string;
  note?: string;
  repoHref?: string;
};

export type SetupSectionMeta = {
  dotfilesHref?: string;
  dotfilesLabel?: string;
};

export type HomelabService = {
  name: string;
  note?: string;
  href?: string;
};

export type HomelabRepo = {
  name: string;
  href: string;
  note?: string;
};

export const devSetup: SetupTool[] = [
  {
    name: "macOS",
    href: "https://www.apple.com/macos/",
    note: "main machine",
  },
  {
    name: "OrbStack",
    href: "https://orbstack.dev/",
    note: "containers / local infra",
  },
  {
    name: "Ghostty",
    href: "https://ghostty.org/",
    note: "current terminal",
  },
  {
    name: "VS Code",
    href: "https://code.visualstudio.com/",
    note: "default editor",
    repoHref: "https://github.com/gergogyulai/vscode-config",
  },
  {
    name: "Zed",
    href: "https://zed.dev/",
    note: "using it more for Rust",
  },
  {
    name: "Helium",
    href: "https://helium.computer/",
    note: "browser (for now)",
  },
  {
    name: "Raycast",
    href: "https://www.raycast.com/",
    note: "launcher + workflows",
  },
  {
    name: "Homebrew",
    href: "https://brew.sh/",
    note: "packages + CLI tools",
  },
  {
    name: "Bun",
    href: "https://bun.sh/",
    note: "runtime / package manager",
  },
];

export const devSetupMeta: SetupSectionMeta = {
  // Add your dotfiles repo URL to show a header link in the dev setup card.
  dotfilesHref: "https://github.com/gergogyulai/dotfiles",
  dotfilesLabel: "~/dotfiles",
};

export const homelab = {
  summary:
    "I run a homelab for media, self-hosted apps, and tinkering. It is useful, and it also breaks sometimes.",
  core: [
    { name: "Docker", href: "https://www.docker.com/" },
    { name: "Traefik", href: "https://traefik.io/traefik/" },
    { name: "Tailscale", href: "https://tailscale.com/" },
    { name: "TrueNAS", note: "storage", href: "https://www.truenas.com/" },
    { name: "Authentik", href: "https://goauthentik.io/" },
    { name: "Immich", href: "https://immich.app/" },
    { name: "Jellyfin", href: "https://jellyfin.org/" },
    { name: "Open WebUI", href: "https://openwebui.com/" },
  ] satisfies HomelabService[],
  mediaStack: [
    { name: "Qui", note: "qBittorrent UI", href: "https://github.com/scmcoded/qui" },
    { name: "qBittorrent", href: "https://www.qbittorrent.org/" },
    { name: "Radarr", href: "https://radarr.video/" },
    { name: "Sonarr", href: "https://sonarr.tv/" },
    { name: "Jellyseerr", href: "https://github.com/Fallenbagel/jellyseerr" },
    { name: "Bazarr", href: "https://www.bazarr.media/" },
  ] satisfies HomelabService[],
  relatedRepos: [
    // {
    //   name: "homelab-compose",
    //   href: "https://github.com/gergogyulai/homelab-compose",
    //   note: "docker compose stack + service definitions",
    // },
    // {
    //   name: "traefik-config",
    //   href: "https://github.com/gergogyulai/traefik-config",
    //   note: "routers, middlewares, and TLS setup",
    // },
    // {
    //   name: "homelab-scripts",
    //   href: "https://github.com/gergogyulai/homelab-scripts",
    //   note: "backup, maintenance, and admin scripts",
    // },
  ] as HomelabRepo[],
};
