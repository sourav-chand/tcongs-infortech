"use client";

import { useEffect, useRef } from "react";

export default function CursorBubble() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...target };
    const glowPos = { ...target };
    let raf = 0;
    let shown = false;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!shown) {
        shown = true;
        dot.style.opacity = "1";
        glow.style.opacity = "1";
      }
    };

    const tick = () => {
      dotPos.x += (target.x - dotPos.x) * 0.35;
      dotPos.y += (target.y - dotPos.y) * 0.35;
      glowPos.x += (target.x - glowPos.x) * 0.1;
      glowPos.y += (target.y - glowPos.y) * 0.1;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] hidden [@media(pointer:fine)]:block"
    >
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-72 w-72 rounded-full opacity-0 transition-opacity duration-700 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(91,124,250,0.22) 0%, rgba(167,139,250,0.1) 40%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full opacity-0 transition-opacity duration-700 will-change-transform"
        style={{
          background: "rgba(143,166,255,0.9)",
          boxShadow:
            "0 0 10px rgba(91,124,250,0.8), 0 0 28px rgba(91,124,250,0.45)",
        }}
      />
    </div>
  );
}
