"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroShowcase from "./HeroShowcase";

const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const logoSplash = {
  hidden: { opacity: 0, scale: 0.4 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", duration: 0.9, bounce: 0.5 } as const,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } as const,
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#eef4ff] via-[#f7f9fc] to-white pb-28 pt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(11,18,32,0.18) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <motion.div
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand-yellow/30 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-1/4 top-1/2 h-56 w-56 rounded-full bg-brand-green/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -25, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <motion.div
          className="absolute left-1/2 top-16 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[100px]"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={logoSplash} className="flex justify-center">
          <Image
            src="/dwellent-lockup-transparent.png"
            alt="Dwellent"
            width={1560}
            height={330}
            priority
            className="h-24 w-auto sm:h-32 md:h-40"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-6 font-serif text-4xl font-black uppercase tracking-[0.08em] text-brand-blue sm:text-5xl md:text-6xl"
        >
          Coming Soon
        </motion.div>
      </motion.div>

      <div className="mt-16">
        <HeroShowcase />
      </div>
    </section>
  );
}
