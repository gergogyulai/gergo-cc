"use client";

import { KeyboardShortcut } from "@/components/keyboard-shortcut";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { item, sectionContainer } from "@/lib/motion";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <motion.div
      variants={sectionContainer}
      initial="hidden"
      animate="show"
      className="terminal-panel overflow-hidden"
    >
      <div className="terminal-titlebar flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="terminal-label">directory</span>
          <span className="text-xs text-muted-foreground">/projects</span>
        </div>
        <span className="terminal-label">{projects.length} records</span>
      </div>
      <div className="terminal-screen px-4 py-5 md:px-6 md:py-6">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href={"/"}>
              <Button
                variant={"outline"}
                className="flex items-center gap-2 bg-background/35"
              >
                <ArrowLeft size={18} />
                Back
                <KeyboardShortcut shortcut="B" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href={siteConfig.links.github + "?tab=repositories"}
                target="_blank"
                className="hidden h-full lg:block"
              >
                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 bg-background/35"
                >
                  View all on GitHub
                  <KeyboardShortcut shortcut="A" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="terminal-label mb-2">index</p>
              <h1 className="terminal-glow text-3xl font-semibold md:text-4xl">
                Projects
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:auto-rows-fr lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              custom={index}
              className="h-full"
            >
              <ProjectCard project={project} index={0} />
            </motion.div>
          ))}
          {projects.length % 2 !== 0 && (
            <motion.div
              key="placeholder"
              variants={item}
              custom={projects.length}
              className="hidden lg:block"
            >
              <ProjectCard
                project={{
                  title: "There is always one more project",
                  description: "Usually started before the last one is finished.",
                  tags: [],
                }}
                index={0}
                className="text-foreground/50"
              />
            </motion.div>
          )}
          <div className="flex w-full items-center justify-center gap-2 lg:hidden">
            <Link
              href={siteConfig.links.github + "?tab=repositories"}
              target="_blank"
              className="block lg:hidden"
            >
              <Button
                variant={"ghost"}
                className="flex items-center gap-2 border border-border bg-background/35"
              >
                View all on GitHub
                <KeyboardShortcut shortcut="A" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
