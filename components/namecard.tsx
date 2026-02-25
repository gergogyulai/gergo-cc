"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NameCard() {
  return (
    <div className="group text-left">
      <div
        className="rounded-md px-1 py-1 text-left transition-colors hover:bg-card/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-label="Name card for Gergo. Pronounced /ˈɡɛr.ɡøː/. Hover for email."
      >
        <div className="flex flex-col gap-1">
          <span className="terminal-label">user</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-wrap items-center gap-2 leading-none">
                <span className="terminal-glow text-3xl font-semibold tracking-tight mb-2 md:text-4xl">
                  gergo
                </span>
                <span className="inline-flex items-center rounded-full border border-border/70 bg-background/40 px-2 py-1 font-mono text-sm font-semibold tracking-tight text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)_inset] md:text-base">
                  /{"ˈɡɛr.ɡøː/"}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-mono text-sm font-medium">
                {"gergo@gergo.cc"}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
