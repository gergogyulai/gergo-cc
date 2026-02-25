"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface ProgressChipProps {
  name: ChipStatus;
}

export type ChipStatus =
  | "Shipped"
  | "InProgress"
  | "OnHold"
  | "Planning"
  | "Archived"
  | "Abandoned"
  | "Unknown"
  | "Repo";

function ChipFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "flex items-center justify-center rounded-md border px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

const chipMap = {
  Archived: () => (
    <ChipFrame className="border-border bg-muted/30 text-muted-foreground">
      Archived
    </ChipFrame>
  ),
  Unknown: () => (
    <ChipFrame className="border-border bg-muted/30 text-muted-foreground">
      Unknown
    </ChipFrame>
  ),
  InProgress: () => (
    <ChipFrame className="border-blue-400/35 bg-blue-500/10 text-blue-300">
      In Progress
    </ChipFrame>
  ),
  Shipped: () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        className="relative flex items-center justify-center overflow-hidden rounded-md border border-primary/45 bg-primary/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {isHovering && (
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(198, 160, 246, 0.42) 0%, rgba(198, 160, 246, 0.16) 45%, transparent 72%)`,
              pointerEvents: "none",
            }}
          />
        )}
        <span className="relative z-10">Shipped</span>
      </motion.div>
    );
  },
  Planning: () => (
    <ChipFrame className="border-cyan-400/35 bg-cyan-500/10 text-cyan-300">
      Planning
    </ChipFrame>
  ),
  Abandoned: () => (
    <ChipFrame className="border-red-400/40 bg-red-500/10 text-red-300">
      Abandoned
    </ChipFrame>
  ),
  Repo: () => (
    <ChipFrame className="border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
      Repository
    </ChipFrame>
  ),
  OnHold: () => (
    <ChipFrame className="border-amber-400/35 bg-amber-500/10 text-amber-300">
      On Hold
    </ChipFrame>
  ),
} satisfies Record<ChipStatus, React.FC>;

export const ProgressChip: React.FC<ProgressChipProps> = ({ name }) => {
  const ChipComponent = chipMap[name];

  return <ChipComponent />;
};

export default ProgressChip;
