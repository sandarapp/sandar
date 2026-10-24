import * as React from "react";
import { ParallaxImage } from "@/components/landing/motion";
import { cn } from "@/lib/cn";

/**
 * A photo of an everyday moment with a piece of the app laid over its lower
 * edge. The photo drifts slightly on scroll and can open with a mask reveal.
 * The card sits in normal flow with a negative margin, so it never covers
 * text and stacks cleanly on small screens.
 */
export function PhotoWithCard({
  src,
  alt = "",
  aspect = "aspect-[4/3]",
  overlap = "-mt-20",
  side = "left",
  priority,
  revealDelay,
  children,
}: {
  src: string;
  alt?: string;
  aspect?: string;
  overlap?: string;
  side?: "left" | "right";
  priority?: boolean;
  revealDelay?: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <ParallaxImage
        src={src}
        alt={alt}
        priority={priority}
        revealDelay={revealDelay}
        strength={20}
        sizes="(min-width: 1024px) 45vw, 100vw"
        className={cn("rounded-[24px]", aspect)}
      />
      <div className={cn("relative px-4 sm:px-0", overlap, side === "left" ? "sm:mr-16 sm:-ml-6" : "sm:ml-16 sm:-mr-6")}>
        {children}
      </div>
    </div>
  );
}
