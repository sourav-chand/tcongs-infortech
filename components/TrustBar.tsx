"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { metrics } from "@/lib/metrics";
import { techMarquee } from "@/lib/technologies";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";
import Container from "@/components/ui/Container";

export default function TrustBar() {
  return (
    <section aria-label="Credibility and technology stack" className="relative">
      <Container className="pb-6 pt-4">
        <motion.dl
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/60 backdrop-blur-sm lg:grid-cols-4"
        >
          {metrics.map((metric, i) => {
            const borderClass =
              (i === 1 || i === 3 ? "max-lg:border-l " : "") +
              (i >= 2 ? "max-lg:border-t " : "") +
              (i > 0 ? "lg:border-l " : "");
            return (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className={`flex flex-col gap-1.5 border-white/[0.07] px-6 py-7 ${borderClass}`}
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                {metric.value !== null ? (
                  <AnimatedCounter
                    value={metric.value}
                    decimals={Number.isInteger(metric.value) ? 0 : 1}
                    suffix={metric.suffix}
                    className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
                  />
                ) : (
                  <span className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    <Globe className="inline h-8 w-8 text-accent-bright" />
                  </span>
                )}
              </dd>
              <dd className="text-sm font-medium text-ink">{metric.label}</dd>
              <dd className="text-xs leading-relaxed text-ink-faint">
                {metric.note}
              </dd>
            </motion.div>
            );
          })}
        </motion.dl>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center">
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-faint">
            Powering
          </span>
          <Marquee className="flex-1">
            {techMarquee.map((tech) => (
              <span
                key={tech}
                className="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-xs tracking-wide text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
