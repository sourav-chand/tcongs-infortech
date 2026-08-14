"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/faqs";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { brand } from "@/lib/site";

export default function FAQSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative border-t border-white/[0.07] bg-surface/40 py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
              title={
                <>
                  Questions?
                  <br />
                  We&apos;ve got answers.
                </>
              }
            description="Straight answers to what clients ask us most — services, timelines, process, and how to get started."
          />
          <div>
            <motion.ul
              variants={staggerContainer(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex flex-col gap-3"
            >
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <motion.li
                    key={faq.question}
                    variants={fadeUp}
                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                      isOpen
                        ? "border-accent/30 bg-surface-2"
                        : "border-white/[0.08] bg-surface/60 hover:border-white/[0.16]"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                      >
                        <span className="text-sm font-medium text-ink sm:text-base">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                            isOpen
                              ? "border-accent/40 bg-accent/15 text-accent-bright"
                              : "border-white/10 text-ink-faint"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          role="region"
                          aria-labelledby={`faq-button-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-white/[0.08] bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  Still have a question?
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Talk to a real person — free 30-minute consultation.
                </p>
              </div>
              <ButtonLink href={brand.calendly} variant="secondary" size="md">
                <CalendarCheck className="h-4 w-4" />
                Book a Free Call
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
