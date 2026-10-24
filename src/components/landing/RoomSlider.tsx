"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Room = { readonly name: string; readonly meta: string; readonly img: string };

/**
 * A short horizontal row of spaces. Native scrolling (swipe, trackpad,
 * keyboard) does the work; the arrow buttons move one card at a time and a
 * thin bar shows how far along you are.
 */
export function RoomSlider({ rooms, href, labels }: { rooms: readonly Room[]; href: string; labels: { prev: string; next: string } }) {
  const track = React.useRef<HTMLUListElement>(null);
  const [progress, setProgress] = React.useState(0);
  const [edges, setEdges] = React.useState({ start: true, end: false });

  const update = React.useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 1);
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 });
  }, []);

  React.useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const move = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (el && card) el.scrollBy({ left: dir * (card.clientWidth + 20), behavior: "smooth" });
  };

  const arrow = "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-fg transition hover:border-primary disabled:opacity-35";

  return (
    <div>
      <ul ref={track} onScroll={update} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {rooms.map((room) => (
          <li key={room.name} className="w-[240px] shrink-0 snap-start sm:w-[270px]">
            <Link href={href} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                <Image src={room.img} alt="" fill sizes="270px" className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105" />
              </div>
              <p className="mt-3 font-display text-lg text-fg group-hover:text-primary-600">{room.name}</p>
              <p className="mt-1 text-sm text-muted">{room.meta}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-fg/10" aria-hidden="true">
          <div className="h-full bg-primary transition-[width] duration-200" style={{ width: `${Math.max(12, progress * 100)}%` }} />
        </div>
        <button type="button" className={arrow} onClick={() => move(-1)} disabled={edges.start} aria-label={labels.prev}>←</button>
        <button type="button" className={arrow} onClick={() => move(1)} disabled={edges.end} aria-label={labels.next}>→</button>
      </div>
    </div>
  );
}
