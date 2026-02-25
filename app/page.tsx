"use client";

import NameCard from "@/components/namecard";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { projects } from "@/lib/projects";
import { devSetup, devSetupMeta, homelab } from "@/lib/setup";
import ProjectCard from "@/components/project-card";
import { motion } from "motion/react";
import { GalleryVerticalEnd } from "lucide-react";
import {
  item,
  pageContainer,
  sectionContainer,
} from "@/lib/motion";
import { KeyboardShortcut } from "@/components/keyboard-shortcut";

const STACK_DISPLAY_ORDER = [
  "typescript",
  "react",
  "nextjs",
  "tailwind",
  "tanstack",
  "zustand",
  "vite",
  "hono",
  "bullmq",
  "postgres",
  "drizzle",
  "rust",
  "python",
  "docker",
  "vercel",
  "github",
  "vscode",
  "cursor",
  "expo",
  "electron",
  "svelte",
  "dotnet",
] as const;

export const dynamic = "force-static";

type ToolingChipProps = {
  label: string;
  href?: string;
  note?: string;
  trailingLink?: {
    href: string;
    label: string;
  };
};

function ToolingChip({ label, href, note, trailingLink }: ToolingChipProps) {
  const chipBaseClass =
    "flex min-h-8 flex-wrap items-center gap-1.5 rounded-md border border-border/70 bg-card/20 px-2.5 py-1.5";

  const labelTextClass =
    "inline-flex items-center text-[11px] leading-none text-foreground transition-colors group-hover:text-primary";

  const noteText = note ? (
    <span className="inline-flex items-center text-[10px] leading-none text-muted-foreground">
      {note}
    </span>
  ) : null;

  if (href && !trailingLink) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${chipBaseClass} group transition-colors hover:border-primary/35`}
      >
        <span className={labelTextClass}>{label}</span>
        {noteText}
      </Link>
    );
  }

  return (
    <div className={chipBaseClass}>
      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="-my-1 -ml-1 inline-flex flex-wrap items-center gap-1.5 rounded-sm px-1 py-1 group"
        >
          <span className={labelTextClass}>{label}</span>
          {noteText}
        </Link>
      ) : (
        <>
          <span className={labelTextClass}>{label}</span>
          {noteText}
        </>
      )}
      {trailingLink ? (
        <Link
          href={trailingLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-sm border border-border/80 bg-background/30 px-1 py-0.5 text-[9px] leading-none uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          {trailingLink.label}
        </Link>
      ) : null}
    </div>
  );
}

export default function Homepage() {
  const stackOrderMap = new Map<string, number>(
    STACK_DISPLAY_ORDER.map((id, index) => [id, index])
  );
  const hasHomelabRelatedRepos = homelab.relatedRepos.length > 0;

  const stackTools = [...tools].sort((a, b) => {
    const aIndex = stackOrderMap.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = stackOrderMap.get(b.id) ?? Number.MAX_SAFE_INTEGER;

    if (aIndex !== bIndex) return aIndex - bIndex;
    return a.alt.localeCompare(b.alt);
  });

  const toolSubsectionCount = 3;

  return (
    <motion.section
      className="mx-auto flex max-w-5xl flex-col gap-10"
      variants={pageContainer}
      initial="hidden"
      animate="show"
    >
      <motion.div className="terminal-panel overflow-hidden" variants={sectionContainer}>
        <div className="terminal-titlebar flex flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="terminal-label">INTRO</span>
            <span className="text-xs text-muted-foreground">
              `portfoliod init`
            </span>
          </div>
          <span className="terminal-label">status: work in progress</span>
        </div>
        <motion.div
          className="terminal-screen space-y-5 px-4 py-5 md:px-6 md:py-6"
          variants={sectionContainer}
        >
          <motion.div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between" variants={item}>
            <NameCard />
            <SiteHeader />
          </motion.div>
          <motion.div
            className="space-y-2 rounded-lg border border-border bg-background/25 p-4"
            variants={item}
          >
            <p className="terminal-prompt terminal-label">whoami</p>
            <p className="terminal-muted leading-relaxed">
              I&#39;m Gergo. I build web apps and tools. Some are polished,
              some are experiments, and some are unfinished.
            </p>
          </motion.div>
          <motion.div className="grid gap-3 text-sm md:grid-cols-3" variants={item}>
            <div className="rounded-lg border border-border bg-card/40 p-3">
              <p className="terminal-label mb-2">focus</p>
              <p className="terminal-muted">Web apps, tools, self-hosting</p>
            </div>
            <div className="rounded-lg border border-border bg-card/40 p-3">
              <p className="terminal-label mb-2">mode</p>
              <p className="terminal-muted">Build fast, fix issues, iterate</p>
            </div>
            <div className="rounded-lg border border-border bg-card/40 p-3">
              <p className="terminal-label mb-2">uptime</p>
              <p className="terminal-muted">Learning as I go, changing tools often</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="terminal-panel overflow-hidden" variants={sectionContainer}>
        <div className="terminal-titlebar flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="terminal-label">tools</span>
            <span className="text-xs text-muted-foreground">
              `ls ~/tools`
            </span>
          </div>
          <span className="terminal-label">{toolSubsectionCount} sections</span>
        </div>
        <div className="terminal-screen px-4 py-4 md:px-6 md:py-5">
          <div className="grid gap-3 lg:grid-cols-2">
            <motion.div
              className="rounded-lg border border-border bg-background/25 p-3"
              variants={item}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="terminal-label">stack</span>
                <span className="h-px flex-1 bg-border/70" />
              </div>
              <p className="terminal-muted text-sm leading-relaxed">
                These are the tools I use a lot right now. The list changes when
                a project needs something else.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {stackTools.map((tool) => (
                  <ToolingChip
                    key={tool.id}
                    label={tool.alt}
                    href={tool.href}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg border border-border bg-background/25 p-3"
              variants={item}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="terminal-label">dev setup</span>
                <span className="h-px flex-1 bg-border/70" />
                {devSetupMeta.dotfilesHref ? (
                  <Link
                    href={devSetupMeta.dotfilesHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm border border-border/80 bg-background/30 px-1.5 py-0.5 text-[9px] leading-none uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {devSetupMeta.dotfilesLabel ?? "dotfiles"}
                  </Link>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {devSetup.length}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {devSetup.map((tool) => (
                  <ToolingChip
                    key={tool.name}
                    label={tool.name}
                    href={tool.href}
                    note={tool.note}
                    trailingLink={
                      tool.repoHref
                        ? { href: tool.repoHref, label: "config" }
                        : undefined
                    }
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg border border-border bg-background/25 p-3 lg:col-span-2"
              variants={item}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="terminal-label">homelab</span>
                <span className="h-px flex-1 bg-border/70" />
                <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {homelab.core.length + homelab.mediaStack.length} services
                </span>
              </div>
              <p className="terminal-muted text-sm leading-relaxed">
                {homelab.summary}
              </p>
              <div
                className={`mt-3 grid gap-3 ${
                  hasHomelabRelatedRepos
                    ? "xl:grid-cols-[1fr_1fr_1.2fr]"
                    : "xl:grid-cols-2"
                }`}
              >
                <div>
                  <p className="terminal-label mb-1.5">core services</p>
                  <div className="flex flex-wrap gap-1.5">
                    {homelab.core.map((service) => (
                      <ToolingChip
                        key={service.name}
                        label={service.name}
                        href={service.href}
                        note={service.note}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="terminal-label mb-1.5">media stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {homelab.mediaStack.map((service) => (
                      <ToolingChip
                        key={service.name}
                        label={service.name}
                        href={service.href}
                        note={service.note}
                      />
                    ))}
                  </div>
                </div>
                {hasHomelabRelatedRepos && (
                  <div>
                    <p className="terminal-label mb-1.5">related repos</p>
                    <div className="grid gap-1.5">
                      {homelab.relatedRepos.map((repo) => (
                        <Link
                          key={repo.name}
                          href={repo.href}
                          target="_blank"
                          className="flex flex-wrap items-center gap-2 rounded-md border border-border/70 bg-card/20 px-2.5 py-1.5 transition-colors hover:border-primary/35"
                        >
                          <span className="text-xs text-foreground transition-colors hover:text-primary">
                            {repo.name}
                          </span>
                          {repo.note && (
                            <span className="text-[10px] text-muted-foreground">
                              {repo.note}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div className="terminal-panel overflow-hidden" variants={sectionContainer}>
        <div className="terminal-titlebar flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="terminal-label">projects</span>
            <span className="text-xs text-muted-foreground">`tail -n 5 ./projects.log`</span>
          </div>
          <span className="terminal-label">{projects.length} entries</span>
        </div>
        <div className="terminal-screen space-y-5 px-4 py-5 md:px-6 md:py-6">
          <motion.div className="space-y-2" variants={item}>
            <h3 className="terminal-glow text-xl font-semibold md:text-2xl">
              Projects I actually worked on
            </h3>
            <p className="terminal-muted text-sm md:text-base">
              A mix of shipped work, in-progress ideas, and things I stopped maintaining.
            </p>
          </motion.div>
          <motion.div className="flex flex-col gap-4">
            {projects.slice(0, 5).map((project, index) => (
              <motion.div key={project.title} variants={item} custom={index}>
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
          {projects.length > 5 && (
            <motion.div
              className="w-full pt-1"
              variants={item}
            >
              <Link href={"/projects"} className="block w-full">
                <Button
                  variant={"ghost"}
                  className="flex w-full items-center justify-between gap-2 border border-border bg-background/35"
                >
                  <span className="flex items-center gap-2">
                    <GalleryVerticalEnd className="size-4" />
                    View more projects
                  </span>
                  <KeyboardShortcut shortcut="P" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
