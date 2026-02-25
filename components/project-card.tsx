"use client";

import { BookMarked, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TechIcon from "@/components/tech-icon";
import ProgressChip from "@/components/progress-chips";
import { type Project } from "@/lib/projects";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const ProjectCard = ({
  project,
  index = 0,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "terminal-panel terminal-screen relative flex h-full w-full flex-col justify-between gap-4 px-4 py-4 md:min-h-36 md:flex-row md:gap-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        scale: 1.01,
      }}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="min-w-0 md:pr-40">
            <div className="mb-1 flex items-center gap-2">
              <span className="terminal-label">project</span>
              <span className="h-px flex-1 bg-border/70" />
            </div>
            {project.href && (
              <Link href={project.href} target="_blank">
                <h4 className="terminal-glow truncate text-lg font-semibold tracking-tight md:text-xl">
                  {project.title}
                </h4>
              </Link>
            )}
            {!project.href && (
              <h4 className="terminal-glow truncate text-lg font-semibold tracking-tight md:text-xl">
                {project.title}
              </h4>
            )}
            {(project.type || project.scope) && (
              <div className="mt-2 flex flex-wrap gap-1.5 md:absolute md:right-4 md:top-4 md:mt-0 md:max-w-40 md:justify-end">
                {project.type && (
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    [{project.type}]
                  </span>
                )}
                {project.scope && (
                  <span className="rounded-md border border-border bg-muted/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    [{project.scope}]
                  </span>
                )}
              </div>
            )}
          </div>
          <p className="terminal-muted mt-1 line-clamp-3 pr-0 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-2">
            {project.tags &&
              project.tags.map((tag) => <TechIcon name={tag} key={tag} />)}
          </div>
          {/* {project.highlighted && <HighlightedBadge />} */}
          <div>{project.status && <ProgressChip name={project.status} />}</div>
        </div>
      </div>
      <div className="flex shrink-0 flex-row items-end justify-end gap-2">
        {project.href && (
          <Link href={project.href} target="_blank">
            <Button variant={"ghost"} size={"icon"} className="border border-border bg-background/30">
              <Globe className="size-5" />
              <span className="sr-only">Visit Webapp</span>
            </Button>
          </Link>
        )}
        {project.githubRepo && (
          <Link href={project.githubRepo} target="_blank">
            <Button variant={"ghost"} size={"icon"} className="border border-border bg-background/30">
              <BookMarked className="size-5" />
              <span className="sr-only">Repository on GitHub</span>
            </Button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
