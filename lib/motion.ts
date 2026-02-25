import type { Variants } from "motion/react";

const standardEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const pageContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.07,
    },
  },
};

export const sectionContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

export const toolsContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: standardEase },
  },
};
