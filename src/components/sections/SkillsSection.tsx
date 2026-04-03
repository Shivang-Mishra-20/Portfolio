"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

const categoryConfig: Record<string, { pillBg: string; pillText: string; pillBorder: string; headingColor: string }> = {
  Languages:  { pillBg: "rgba(244,114,182,0.08)", pillText: "#be185d", pillBorder: "rgba(244,114,182,0.3)",  headingColor: "#0f172a" },
  Frameworks: { pillBg: "rgba(99,102,241,0.08)",  pillText: "#4338ca", pillBorder: "rgba(99,102,241,0.25)", headingColor: "#0f172a" },
  "AI / ML":  { pillBg: "rgba(6,182,212,0.08)",   pillText: "#0e7490", pillBorder: "rgba(6,182,212,0.25)",  headingColor: "#0f172a" },
  Tools:      { pillBg: "rgba(16,185,129,0.08)",  pillText: "#065f46", pillBorder: "rgba(16,185,129,0.25)", headingColor: "#0f172a" },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 bg-white">
      <div ref={ref} className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 mb-4"
            style={{ background: "rgba(99,102,241,0.08)" }}>
            ✦ Technical Arsenal
          </span>
          <h2 className="text-5xl font-display font-bold text-slate-900 mb-3">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build modern, intelligent applications.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-slate-200"
        >
          {/* Header row */}
          <div className="grid grid-cols-[200px_1fr] bg-slate-50 border-b border-slate-200">
            <div className="px-7 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-r border-slate-200">
              Category
            </div>
            <div className="px-7 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Tools &amp; Tech
            </div>
          </div>

          {/* Rows */}
          {Object.entries(skills).map(([category, items], catIdx) => {
            const cfg = categoryConfig[category] || categoryConfig["Languages"];
            const isLast = catIdx === Object.entries(skills).length - 1;
            return (
              <div
                key={category}
                className={`grid grid-cols-[200px_1fr] hover:bg-slate-50/70 transition-colors duration-150 ${!isLast ? "border-b border-slate-200" : ""}`}
              >
                {/* Category name */}
                <div className="px-7 py-5 flex items-center border-r border-slate-200">
                  <span className="text-[15px] font-display font-bold text-slate-800">
                    {category}
                  </span>
                </div>

                {/* Pills */}
                <div className="px-7 py-5 flex flex-wrap gap-2 items-center">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + catIdx * 0.06 + i * 0.04, duration: 0.3 }}
                      whileHover={{ y: -2, scale: 1.06 }}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-default select-none"
                      style={{
                        background: cfg.pillBg,
                        color: cfg.pillText,
                        border: `1.5px solid ${cfg.pillBorder}`,
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}