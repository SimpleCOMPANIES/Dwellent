"use client";

import { motion } from "framer-motion";
import { MARK_DOTS, MARK_VIEWBOX } from "@/lib/dwellentMark";

export default function DwellentMark({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} role="img" aria-label="Dwellent">
      {MARK_DOTS.map((d) =>
        animate ? (
          <motion.circle
            key={d.order}
            cx={d.x}
            cy={d.y}
            fill={d.color}
            initial={{ r: 0 }}
            animate={{ r: d.r }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: 0.15 + d.order * 0.012 }}
          />
        ) : (
          <circle key={d.order} cx={d.x} cy={d.y} r={d.r} fill={d.color} />
        ),
      )}
    </svg>
  );
}
