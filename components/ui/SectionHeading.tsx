import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <motion.div variants={fadeUp}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
