"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState } from 'react';

export type Tool = {
  href: string;
  src: string;
  alt: string;
  id: string;
  darkSrc?: string;
  position?: { x: number, y: number };
  animationDelay?: number;
  size?: Size;
};

type Size = "sm" | "md" | "lg";

export default function ToolLink({ tool, size = "md" }: { tool: Tool, size?: Size }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring physics for smoother movement
  const springConfig = { damping: 80, stiffness: 340 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Transform x/y values for parallax effect
  const rotateX = useTransform(ySpring, [-100, 100], [3, -3]);
  const rotateY = useTransform(xSpring, [-100, 100], [-3, 3]);

  // Create a shadow movement that's slightly offset
  const xShadow = useTransform(xSpring, v => v * 0.25);
  const yShadow = useTransform(ySpring, v => v * 0.25);
  
  // Create extremely subtle foreground movement
  const xForeground = useTransform(xSpring, v => v * 0.15);
  const yForeground = useTransform(ySpring, v => v * 0.15);

  // Add spring animations for scale effects
  const shadowScale = useMotionValue(1.03);
  const shadowScaleSpring = useSpring(shadowScale, { damping: 70, stiffness: 300 });
  const darkShadowScale = useMotionValue(1.08);
  const darkShadowScaleSpring = useSpring(darkShadowScale, { damping: 70, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the center of the card
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    shadowScale.set(1.03);
    darkShadowScale.set(1.08);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    shadowScale.set(1.08);
    darkShadowScale.set(1.1);
  };

  const containerSizeClasses = {
    sm: "h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20",
    md: "h-14 w-14 sm:h-18 sm:w-18 md:h-24 md:w-24",
    lg: "h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28",
  };
  
  const imageSizeClasses = {
    sm: "h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10",
    md: "h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12",
    lg: "h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14",
  };

  return (
    <Link href={tool.href} target="_blank" rel="noopener noreferrer">
      <motion.div 
        className={`group relative flex flex-col items-center justify-center overflow-hidden border border-border bg-card/70 shadow-[0_0_0_1px_rgba(0,0,0,0.2)_inset,0_0_18px_rgba(34,197,94,0.08)] backdrop-blur-[2px] transition-colors select-none ${containerSizeClasses[size]}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          z: 100,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: (tool.animationDelay ?? 0) + 0.05 }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_60%,rgba(34,197,94,0.04)_100%)]" />
          <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_8px_rgba(34,197,94,0.45)]" />
        </div>
        {tool.darkSrc ? (
          <>
            {/* Shadow layer */}
            <motion.div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ 
                scale: shadowScaleSpring,
                x: xShadow,
                y: yShadow,
                zIndex: 1
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className={`blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125 dark:hidden ${imageSizeClasses[size]}`}
              />
              <Image
                src={tool.darkSrc}
                alt={tool.alt}
                width={50}
                height={50}
                className={`blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125 hidden dark:block ${imageSizeClasses[size]}`}
              />
            </motion.div>
            
            {/* Foreground layer */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                x: xForeground,
                y: yForeground,
                scale: 1,
                zIndex: 2
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className={`dark:hidden ${imageSizeClasses[size]}`}
              />
              <Image
                src={tool.darkSrc}
                alt={tool.alt}
                width={50}
                height={50}
                className={`hidden dark:block ${imageSizeClasses[size]}`}
              />
            </motion.div>
          </>
        ) : (
          <>
            {/* Shadow layer */}
            <motion.div 
              className="absolute inset-0 flex justify-center items-center"
              style={{ 
                scale: darkShadowScaleSpring,
                x: xShadow,
                y: yShadow,
                zIndex: 1
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className={`blur-md transition ease-in-out group-hover:blur-lg group-hover:saturate-125 ${imageSizeClasses[size]}`}
              />
            </motion.div>
            
            {/* Foreground layer */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              style={{
                x: xForeground,
                y: yForeground,
                scale: 1,
                zIndex: 2
              }}
            >
              <Image
                src={tool.src}
                alt={tool.alt}
                width={50}
                height={50}
                className={`${imageSizeClasses[size]}`}
              />
            </motion.div>
          </>
        )}
        <span className="sr-only">{tool.alt}</span>
      </motion.div>
    </Link>
  );
}
