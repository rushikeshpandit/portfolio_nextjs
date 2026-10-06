"use client";

import { useEffect, useRef } from "react";

const JQUERY_SRC = "https://code.jquery.com/jquery-3.6.0.min.js";
const RIPPLES_SRC = "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js";

type JQ = ((el: Element) => { ripples: (...args: unknown[]) => void }) & { fn: { ripples?: unknown } };

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded) return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", reject);
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/** WebGL water surface (jquery.ripples) over the page, fed by cursor movement, plus a trailing cursor ring. */
export default function CursorRipple() {
  const waterRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const water = waterRef.current;
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!water || !dot || !outline) return;
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cancelled = false;
    let $: JQ | undefined;
    let ready = false;

    (async () => {
      try {
        await loadScript(JQUERY_SRC);
        await loadScript(RIPPLES_SRC);
        if (cancelled) return;
        $ = (window as unknown as { jQuery: JQ }).jQuery;
        $(water).ripples({
          resolution: 256,
          dropRadius: 25,
          perturbance: 0.05,
          interactive: false,
          crossOrigin: "anonymous",
        });
        ready = true;
      } catch {
        // WebGL or CDN unavailable: the cursor ring still works.
      }
    })();

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let lastRipple = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      const now = performance.now();
      if (ready && $ && now - lastRipple > 30) {
        try {
          $(water).ripples("drop", mouseX, mouseY, 15, 0.04);
        } catch {}
        lastRipple = now;
      }
    };

    const loop = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      outline.style.transform = `translate(${trailX}px, ${trailY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const hot = (e.target as Element | null)?.closest("a, button");
      outline.dataset.hot = hot ? "true" : "false";
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      try {
        $?.(water).ripples("destroy");
      } catch {}
    };
  }, []);

  return (
    <>
      <div ref={waterRef} className="water-surface" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-outline" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
