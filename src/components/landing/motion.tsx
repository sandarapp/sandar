"use client";

import Image from "next/image";
import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

/** One easing for the whole site: slow in, gentle settle. */
export const ease = [0.22, 1, 0.36, 1] as const;

/** A word that slides up from behind its own mask. */
export function MaskWord({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em] align-bottom">
      <motion.span
        className={cn("inline-block", className)}
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Fades content up once, after the hero sequence or when it scrolls into view. */
export function FadeUp({
  children,
  delay = 0,
  className,
  onLoad = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  onLoad?: boolean;
}) {
  const reduce = useReducedMotion();
  const hidden = reduce ? false : { opacity: 0, y: onLoad ? 28 : 44 };
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      {...(onLoad ? { animate: shown } : { whileInView: shown, viewport: { once: true, margin: "-80px" } })}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Photo inside a rounded frame that drifts against the scroll (parallax) and,
 * optionally, opens with a bottom-up mask on page load.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 36,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  revealDelay,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  sizes?: string;
  priority?: boolean;
  revealDelay?: number;
  children?: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const reveal = revealDelay !== undefined && !reduce;

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden bg-[#f4d9c6]", className)}
      initial={reveal ? { clipPath: "inset(100% 0 0 0)", y: 40 } : false}
      animate={reveal ? { clipPath: "inset(0% 0 0 0)", y: 0 } : undefined}
      transition={{ duration: 1.2, ease, delay: revealDelay }}
    >
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
      {children}
    </motion.div>
  );
}
