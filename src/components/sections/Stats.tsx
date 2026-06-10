"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  id: number;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: StatItem[] = [
  { id: 1, value: 500, suffix: "+", label: "Vidas Transformadas" },
  { id: 2, value: 10, suffix: "+", label: "Anos Formando Legados" },
  { id: 3, value: 4.9, suffix: "", decimals: 1, label: "Avaliação no Google" },
  { id: 4, value: 50, suffix: "+", label: "Campeões Graduados" },
];

function AnimatedCounter({ value, suffix, decimals = 0, duration = 2 }: { value: number; suffix: string; decimals?: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const easeProgress = progress * (2 - progress);
      const currentCount = easeProgress * end;
      
      setCount(currentCount);

      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative z-20 py-16 md:py-24 bg-surface border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center px-4 lg:border-r border-white/5 last:border-none group"
            >
              <div className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-primary tracking-tighter mb-2 group-hover:text-accent group-hover:scale-105 transition-all duration-300">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              
              <div className="font-space text-[10px] sm:text-xs font-bold uppercase tracking-widest text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
