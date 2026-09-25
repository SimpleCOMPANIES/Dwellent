"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroVisual from "./HeroVisual";

export default function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.08"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [34, 0, -24]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -45]);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-6" style={{ perspective: 1000 }}>
      <motion.div style={{ rotateX, scale, y, transformStyle: "preserve-3d" }}>
        <HeroVisual />
      </motion.div>
    </div>
  );
}
