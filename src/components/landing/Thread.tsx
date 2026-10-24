"use client";

import * as React from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { ease } from "@/components/landing/motion";

export type ThreadMessage = {
  author: string;
  time: string;
  text: string;
  mod?: boolean;
  support?: number;
  relate?: number;
};

type Labels = { support: string; relate: string; typing: string };

/**
 * A space thread that plays itself once it scrolls into view: messages
 * arrive one at a time, reaction counts tick up, and someone is typing at
 * the end. Reduced motion shows the finished thread straight away.
 */
export function Thread({
  space,
  members,
  messages,
  labels,
  className,
}: {
  space: string;
  members: string;
  messages: readonly ThreadMessage[];
  labels: Labels;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = React.useState(0);
  const visible = reduce ? messages.length : shown;

  React.useEffect(() => {
    if (!inView || reduce || shown >= messages.length) return;
    const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 300 : 1400);
    return () => window.clearTimeout(id);
  }, [inView, reduce, shown, messages.length]);

  return (
    <div ref={ref} className={cn("rounded-[22px] border border-border bg-card shadow-soft", className)}>
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div>
          <p className="text-sm font-semibold text-fg">{space}</p>
          <p className="text-xs text-muted">{members}</p>
        </div>
      </div>

      <ol className="space-y-3 px-5 py-4" aria-live="polite">
        <AnimatePresence initial={false}>
          {messages.slice(0, visible).map((m, i) => (
            <motion.li
              key={i}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className={cn("rounded-2xl px-4 py-3", m.mod ? "bg-surface-2" : "bg-bg")}
            >
              <p className="text-xs text-muted">
                <span className={cn("font-semibold", m.mod ? "text-primary-600" : "text-fg")}>{m.author}</span> · {m.time}
              </p>
              <p className="mt-1 text-[15px] leading-6 text-fg">{m.text}</p>
              {m.support !== undefined ? (
                <div className="mt-2 flex gap-2 text-xs">
                  <Count label={labels.support} to={m.support} run={!reduce} />
                  <Count label={labels.relate} to={m.relate ?? 0} run={!reduce} />
                </div>
              ) : null}
            </motion.li>
          ))}
        </AnimatePresence>
        {visible < messages.length || visible === 0 || !labels.typing ? null : (
          <li className="flex items-center gap-2 px-1 text-xs text-muted">
            <span className="flex gap-1" aria-hidden="true">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-muted"
                  animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }}
                />
              ))}
            </span>
            {labels.typing}
          </li>
        )}
      </ol>
    </div>
  );
}

function Count({ label, to, run }: { label: string; to: number; run: boolean }) {
  const [n, setN] = React.useState(run ? Math.max(0, to - 4) : to);
  React.useEffect(() => {
    if (!run || n >= to) return;
    const id = window.setTimeout(() => setN((v) => v + 1), 260);
    return () => window.clearTimeout(id);
  }, [n, to, run]);
  return (
    <span className="rounded-full border border-border bg-card px-2.5 py-1 text-muted">
      {label} <span className="font-semibold text-fg tabular-nums">{n}</span>
    </span>
  );
}
