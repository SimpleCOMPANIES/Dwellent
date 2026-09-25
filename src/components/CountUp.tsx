"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
  immediate = false,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Start on mount instead of waiting for scroll-into-view (use for above-the-fold content). */
  immediate?: boolean;
  /** Delay in seconds before starting, only used with `immediate`. */
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (immediate) {
      const t = setTimeout(() => motionValue.set(value), delay * 1000);
      return () => clearTimeout(t);
    }
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue, immediate, delay]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      }
    });
  }, [spring, prefix, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}0{suffix}
    </motion.span>
  );
}
