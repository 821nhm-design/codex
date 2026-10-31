"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Respects the OS-level "reduce motion" setting: when it is on, transform
 * animations (e.g. the slide-up in FadeIn) are disabled and only opacity
 * changes remain.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
