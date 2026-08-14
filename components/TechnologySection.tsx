"use client";

import { motion } from "framer-motion";
import { Boxes, ChartLine, Cpu, Sparkles } from "lucide-react";
import { capabilityGroups } from "@/lib/technologies";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Sparkles,
    title: "Generative Engine Optimization (GEO)",
    text: "Built to be found by the AI assistants and engines your customers now use.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    text: "Practical AI applied to workflows, content, and customer experience.",
  },
  {
    icon: ChartLine,
    title: "Marketplace Growth",
    text: "Amazon, Flipkart, Myntra, Ajio and more — listing to analytics, end to end.",
  },
];

export default function TechnologySection() {
  return (
    <section
      id="solutions"
      aria-label="Solutions and capabilities"
      className="relative border-y border-white/[0.07] bg-surface/40 py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Solutions & capabilities"
            title={
              <>
                A modern stack,
                <br />
                <span className="text-gradient">matched to your goal.</span>
              </>
            }
            description="We don't sell one-size-fits-all builds. Each solution is assembled from the right technology for the job — then integrated, launched, and optimized."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="flex items-center gap-3 lg:pb-2"
          >
            <Eyebrow>Full-stack · Cloud · AI</Eyebrow>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilityGroups.map((group, i) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/70 p-6 transition-all duration-500 hover:border-accent/35 hover:bg-surface-2 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              } ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/[0.07] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-bright">
                  <Boxes className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                  {group.label}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-muted transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.08] hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.12] via-surface-2 to-surface-2 p-6 sm:col-span-2 lg:col-span-1"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-bright">
              Full capability
            </p>
            <p className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
              Every layer of your product — strategy, build, launch, growth —
              handled by one team.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-bright transition-colors hover:text-ink"
            >
              Discuss your project
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-5 border-t border-white/[0.07] pt-12 sm:grid-cols-3"
        >
          {highlights.map((h) => (
            <motion.li
              key={h.title}
              variants={fadeUp}
              className="flex gap-4"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-bright">
                <h.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {h.text}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
