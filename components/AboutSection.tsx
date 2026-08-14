"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

const pillars = [
  {
    index: "01",
    title: "Custom Solutions",
    text: "Every business is unique, so we build tailored digital solutions around your exact goals — never templates.",
  },
  {
    index: "02",
    title: "Smooth Communication",
    text: "Clear, consistent updates throughout the project, with dedicated support you can actually reach.",
  },
  {
    index: "03",
    title: "Flexible Approach",
    text: "We adapt quickly as your business changes and scale solutions along with your growth.",
  },
  {
    index: "04",
    title: "Transparent Pricing",
    text: "No hidden costs. Clear pricing and complete transparency in every project we deliver.",
  },
];

const fullStack = [
  "Strategy",
  "Design",
  "Development",
  "Deployment",
  "Marketing",
  "Growth",
  "Long-term support",
];

const terminalLines = [
  { prompt: "$", text: "tcongs --plan your-project" },
  { prompt: "▸", text: "stack: react · node · shopify" },
  { prompt: "▸", text: "phase: 04/06 — development" },
  { prompt: "▸", text: "qa: automated · performance: green" },
  { prompt: "●", text: "on track — growth plan active" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Tcongs Infotech"
      className="relative py-24 lg:py-32"
    >
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          id="why-us"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-accent/[0.1] blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-surface/80 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/[0.14]" />
                <span className="ml-3 font-mono text-[11px] tracking-wider text-ink-faint">
                  tcongs — project status
                </span>
              </div>
              <div className="flex flex-col gap-2.5 p-6 font-mono text-[13px] leading-relaxed">
                {terminalLines.map((line) => (
                  <p key={line.text} className="flex gap-2.5">
                    <span className="text-accent-bright">{line.prompt}</span>
                    <span className="text-ink-muted">{line.text}</span>
                  </p>
                ))}
                <p className="mt-3 flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/[0.07] px-3 py-2.5 text-xs text-accent-bright">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  End-to-end partner — one team, zero hand-offs
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {fullStack.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="text-xs font-medium text-ink-muted">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >
            <Eyebrow>Why Tcongs Infotech</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Your complete digital partner —{" "}
              <span className="text-gradient">from idea to scale.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              We don&apos;t just ship code. Tcongs Infotech is a modern web
              development and digital solutions company built around one idea:
              your product should deliver measurable business results — not
              just exist online.
            </p>

            <dl className="mt-2 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar.index} className="flex flex-col gap-2 border-t border-white/[0.08] pt-5">
                  <dt className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-wider text-accent-bright">
                      {pillar.index}
                    </span>
                    <span className="font-display text-base font-semibold text-ink">
                      {pillar.title}
                    </span>
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink-muted">
                    {pillar.text}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
