"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden">
      {/* Background deco */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #F472B6, transparent)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 mb-4"
              style={{ background: "rgba(99,102,241,0.08)" }}>
              ✦ Featured Work
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-slate-900 mb-4">
            Projects & <span className="text-slate-900">Builds</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-2xl mx-auto">
            Real-world applications I've built from scratch — combining powerful backends with
            stunning, intuitive frontends.
          </motion.p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Shivang-Mishra-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl border border-indigo-100 text-slate-700 font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>View All on GitHub</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
