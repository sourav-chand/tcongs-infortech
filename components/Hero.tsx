"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ShieldCheck, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { brand } from "@/lib/site";
import ConsultationForm from "./ConsultationForm";

const trustChips = ["Mumbai · India", "Serving Worldwide", "Verified Business"];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Tcongs Infotech — digital solutions for modern businesses"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-24%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.14] blur-[150px]" />
        <div className="animate-pulse-slow absolute right-[-12%] top-[8%] h-[420px] w-[420px] rounded-full bg-accent-violet/[0.09] blur-[130px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4"
          >
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
              New
            </span>
            <span className="text-xs font-medium text-ink-muted">
              Generative Engine Optimization (GEO) now available
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            We build digital
            <br />
            products that{" "}
            <span className="text-gradient">grow your business.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Tcongs Infotech helps brands succeed online with high-performance
            websites, mobile apps, custom software, and full-funnel marketing —
            engineered in Mumbai, trusted across the globe.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="#contact" size="lg">
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink
              href={brand.calendly}
              variant="secondary"
              size="lg"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Free Consultation
            </ButtonLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:gap-8"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex items-center gap-0.5 text-accent-bright"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-ink">4.9/5</span> client
                rating · <span className="font-semibold text-ink">150+</span>{" "}
                projects delivered
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustChips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-1.5 text-xs text-ink-faint"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-accent/80" />
                  {chip}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="animate-float absolute -top-10 right-6 hidden lg:block"
          >
            <div className="rounded-xl border border-white/10 bg-surface/70 px-3.5 py-2.5 font-mono text-[11px] tracking-wider text-ink-muted backdrop-blur-md">
              <span className="text-accent-bright">8+</span> years of expertise
            </div>
          </div>
          <div
            aria-hidden
            className="animate-float absolute -bottom-8 -left-4 hidden [animation-delay:2.5s] lg:block"
          >
            <div className="rounded-xl border border-white/10 bg-surface/70 px-3.5 py-2.5 font-mono text-[11px] tracking-wider text-ink-muted backdrop-blur-md">
              AI &amp; Automation · E-commerce
            </div>
          </div>
          <ConsultationForm />
        </motion.div>
      </div>
    </section>
  );
}
