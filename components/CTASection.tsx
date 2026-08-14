"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { brand } from "@/lib/site";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

const promises = [
  "Free consultation",
  "Clear requirements discussion",
  "Transparent proposal & pricing",
  "Honest timeline",
  "Business-focused solution",
];

export default function CTASection() {
  return (
    <section
      id="contact"
      aria-label="Start your project"
      className="relative overflow-hidden py-24 lg:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.14] blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
      </div>

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Let&apos;s talk</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4rem]"
          >
            Have an idea?
            <br />
            <span className="text-gradient">Let&apos;s turn it into something real.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Share what you&apos;re building. Within one business day you&apos;ll hear from
            us with a clear proposal, timeline, and a business-focused plan —
            no pressure, no jargon, no surprises.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {promises.map((promise) => (
              <li
                key={promise}
                className="flex items-center gap-2 text-sm text-ink-muted"
              >
                <Check className="h-4 w-4 text-accent-bright" />
                {promise}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={`mailto:${brand.email}`} size="lg">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={brand.calendly} variant="secondary" size="lg">
              <CalendarCheck className="h-4 w-4" />
              Book a Free Consultation
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-wide text-ink-faint"
          >
            {brand.email} · {brand.phone} · {brand.location}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
