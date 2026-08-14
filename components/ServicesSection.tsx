"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" aria-label="Services" className="relative py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six disciplines.
                <br />
                One growth partner.
              </>
            }
            description="Every digital capability your business needs — from the first pixel to the last analytics report — delivered by one accountable team."
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewport}
            className="max-w-xs font-mono text-xs leading-relaxed text-ink-faint"
          >
            Web & App Development / Software / E-commerce / Marketing /
            Branding / Growth — under one roof.
          </motion.p>
        </div>

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.li key={service.id} variants={fadeUp}>
              <ServiceCard service={service} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
