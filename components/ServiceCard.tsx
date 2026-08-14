"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCategory } from "@/lib/services";

export default function ServiceCard({
  service,
}: {
  service: ServiceCategory;
}) {
  const Icon = service.icon;
  const href = "#contact";

  const handleClick = () => {
    try {
      sessionStorage.setItem("preferred-service", service.title);
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(91,124,250,0.15)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between">
        <motion.span
          whileHover={{ rotate: -6, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-bright transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10"
        >
          <Icon className="h-6 w-6" />
        </motion.span>
        <span className="font-mono text-sm tracking-wider text-ink-faint transition-colors duration-300 group-hover:text-accent-bright">
          {service.index}
        </span>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-bright/80">
        {service.tag}
      </p>
      <h3 className="mt-1.5 font-display text-xl font-semibold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {service.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {service.capabilities.slice(0, 2).map((cap) => (
          <li
            key={cap}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-ink-faint transition-colors duration-300 group-hover:text-ink-muted"
          >
            {cap}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-ink-faint transition-colors duration-300 group-hover:text-ink">
        <span className="inline-flex items-center gap-2">
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span
          aria-hidden
          className="h-px flex-1 bg-white/[0.08] transition-colors duration-300 group-hover:bg-accent/30"
        />
      </div>
    </a>
  );
}
