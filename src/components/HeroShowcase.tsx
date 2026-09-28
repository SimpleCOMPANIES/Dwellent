"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DeviceShowcase from "./DeviceShowcase";

export default function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.08"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -12]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <div ref={ref} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, scale, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <DeviceShowcase />
      </motion.div>
    </div>
  );
}
