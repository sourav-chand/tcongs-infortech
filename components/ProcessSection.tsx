"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/process";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 70%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      id="process"
      aria-label="Our process"
      className="relative py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Our process, your growth"
          title={
            <>
              From idea to scalable
              <br />
              digital solution.
            </>
          }
          description="A proven six-step process we've refined over 150+ projects — so you always know what happens, why it matters, and what you receive next."
          align="center"
        />

        <div ref={ref} className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-white/[0.08] lg:block"
          />
          <motion.div
            aria-hidden
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[21.5px] hidden h-[3px] origin-left rounded-full bg-gradient-to-r from-accent to-accent-violet lg:block motion-reduce:hidden"
          />

          <motion.ol
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-10 lg:grid-cols-6 lg:gap-5"
          >
            {processSteps.map((step) => (
              <motion.li
                key={step.index}
                variants={fadeUp}
                className="group relative flex gap-5 lg:block"
              >
                <div className="relative flex flex-col items-center lg:items-start">
                  <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/[0.12] bg-surface font-mono text-sm font-semibold text-accent-bright shadow-[0_0_0_4px_#07080a] transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_0_24px_-4px_rgba(91,124,250,0.7)]">
                    {step.index}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 lg:mt-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-bright">
                    {step.title}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {step.phase}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {step.what}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-faint">
                    <span className="text-ink-muted">Why it matters:</span>{" "}
                    {step.why}
                  </p>
                  <p className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-accent/20 bg-accent/[0.07] px-2.5 py-1 text-xs font-medium text-accent-bright">
                    You receive → {step.deliverable}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
