"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiCpu, FiZap, FiTarget } from "react-icons/fi";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/animations/variants";

const highlights = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "Building pixel-perfect, performant web interfaces with React & Next.js",
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    icon: FiCpu,
    title: "AI & Machine Learning",
    desc: "Developing intelligent systems using TensorFlow, PyTorch & Scikit-learn",
    color: "#06B6D4",
    bg: "#ECFEFF",
  },
  {
    icon: FiZap,
    title: "Full Stack Dev",
    desc: "End-to-end application development with Django, Flask & REST APIs",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: FiTarget,
    title: "Problem Solver",
    desc: "Bridging the gap between complex problems and elegant technical solutions",
    color: "#F472B6",
    bg: "#FDF4FF",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image / Visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main card */}
            <div className="relative max-w-xs mx-auto">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-xl"
                style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)" }}
              />
              <div className="relative glass rounded-3xl border border-white shadow-2xl shadow-indigo-100/50 overflow-hidden">
                {/* Photo fills the entire card */}
                <div
                  className="w-full aspect-[3/4] relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #C7D2FE, #A5F3FC)" }}
                >
                  <img
                    src="/profile.jpeg"
                    alt="Shivang Mishra"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient fade at bottom so name reads cleanly */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{ background: "linear-gradient(to top, rgba(238,242,255,0.95), transparent)" }}
                  />
                </div>

                {/* Name below the photo */}
                <div className="px-6 py-5 text-center">
                  <div className="text-2xl font-display font-bold text-slate-900">Shivang Mishra</div>
                  <div className="text-sm text-slate-500 font-mono mt-1">@shivangmishra</div>
                </div>
              </div>
            </div>

            
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-indigo-600"
                style={{ background: "rgba(99,102,241,0.1)" }}>
                <span>✦</span> About Me
              </div>
              <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight">
                Crafting Digital{" "}
                <span className="gradient-text">Experiences</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 text-slate-600 text-lg leading-relaxed font-body">
              <p>
                I'm a <strong className="text-slate-800 font-semibold">third-year B.Tech CSE student</strong> at{" "}
                <strong className="text-indigo-600">VIT Bhopal University</strong>, specializing in{" "}
                <strong className="text-slate-800">Artificial Intelligence & Machine Learning</strong>.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-slate-800">frontend engineering</strong> and{" "}
                <strong className="text-slate-800">intelligent systems</strong> — building interfaces that not only look
                stunning but think smart.
              </p>
              <p>
                When I'm not writing code, I'm exploring the latest in AI research, contributing to open source,
                or designing systems that make real-world impact.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc, color, bg }) => (
                <motion.div
                  key={title}
                  className="p-4 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 group cursor-default"
                  style={{ background: bg }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: color }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div className="text-sm font-display font-bold text-slate-800 mb-1">{title}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}