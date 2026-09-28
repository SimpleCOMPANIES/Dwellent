"use client";

import { motion, type Variants } from "framer-motion";
import DwellentMark from "./DwellentMark";
import HeroShowcase from "./HeroShowcase";

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const audiences = [
  {
    title: "For renters",
    body: "Keep your cash. Get approved in minutes with a soft credit check.",
  },
  {
    title: "For landlords",
    body: "Say yes to more qualified applicants, with rent and deposit coverage.",
  },
  {
    title: "For property managers",
    body: "Applications, policies, and claims for your whole portfolio in one place.",
  },
];

function PulseDot() {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-linear-to-b from-[#0b1f4d] via-[#0e2a66] to-[#123a8c] text-white"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(147,197,253,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="absolute -right-32 top-1/4 h-112 w-md rounded-full bg-blue-500/20 blur-[120px]"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_0_40px_rgba(96,165,250,0.45)] ring-1 ring-white/60 sm:h-20 sm:w-20">
            <DwellentMark animate className="h-12 w-12 sm:h-16 sm:w-16" />
          </span>
          <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">Dwellent</span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Coming soon
        </span>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 content-center items-center gap-14 px-6 pb-12 pt-6 lg:grid-cols-[1fr_1.1fr] lg:pt-10">
        <motion.div variants={textContainer} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200"
          >
            <PulseDot />
            Launching soon in New York
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl"
          >
            Skip the deposit.
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-100 bg-clip-text text-transparent">
              Skip the co-signer.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/80">
            Dwellent is building a better way to rent: an insurance-backed lease guaranty that replaces the
            cash security deposit and the co-signer, and protects landlords if rent goes unpaid.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid max-w-xl gap-3">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 border-l-[3px] border-l-blue-400 bg-white/6 px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-bold">{a.title}</p>
                <p className="mt-1 text-blue-100/70">{a.body}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 font-semibold">
            <PulseDot />
            We&apos;re putting the finishing touches on the platform. Stay tuned.
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 italic text-blue-200/60">
            Tenants dwell. Landlords sleep well.
          </motion.p>
        </motion.div>

        <HeroShowcase />
      </div>

      <footer className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 text-sm text-blue-200/50">
        <p>© 2026 Dwellent. All rights reserved.</p>
        <p className="mt-1">
          Coverage will be underwritten by a licensed insurance carrier. Availability will vary by state.
        </p>
      </footer>
    </section>
  );
}
