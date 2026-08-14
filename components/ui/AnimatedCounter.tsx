"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function formatValue(value: number, decimals: number) {
  if (Number.isInteger(value)) return value.toLocaleString("en-US");
  return value.toFixed(decimals);
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(() => formatValue(value, decimals));

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) =>
        setDisplay(formatValue(latest, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration, prefersReducedMotion]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
