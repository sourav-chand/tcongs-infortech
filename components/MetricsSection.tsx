"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/metrics";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function MetricsSection() {
  const animated = metrics.filter((m) => m.value !== null);
  const qualitative = metrics.find((m) => m.value === null);

  return (
    <section
      aria-label="Business impact"
      className="relative overflow-hidden border-y border-white/[0.07] py-24 lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[140px]" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <Eyebrow>Business impact</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Eight years in,
              <br />
              <span className="text-gradient">still compounding.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              We turn complex digital challenges into seamless growth — from
              custom web development and e-commerce marketplace optimization to
              Generative Engine Optimization.
            </p>
            <p className="max-w-md font-mono text-xs leading-relaxed text-ink-faint">
              Trusted by startups, small businesses, and growing brands across
              India, USA, UK, Canada &amp; UAE.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {animated.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeUp}
                className="flex flex-col items-start gap-3 rounded-2xl border border-white/[0.08] bg-surface/60 p-6 backdrop-blur-sm"
              >
                <AnimatedCounter
                  value={metric.value!}
                  decimals={Number.isInteger(metric.value) ? 0 : 1}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className="font-display text-5xl font-semibold tracking-tight text-ink lg:text-6xl"
                />
                <span className="text-sm font-medium text-ink">
                  {metric.label}
                </span>
                <span className="text-xs leading-relaxed text-ink-faint">
                  {metric.note}
                </span>
              </motion.div>
            ))}

            {qualitative && (
              <motion.div
                variants={fadeUp}
                className="relative flex flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.14] to-transparent p-6"
              >
                <span className="font-display text-2xl font-semibold tracking-tight text-ink lg:text-3xl">
                  {qualitative.label}
                </span>
                <span className="text-sm leading-relaxed text-ink-muted">
                  {qualitative.note}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
