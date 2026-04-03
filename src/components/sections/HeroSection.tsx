"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { fadeInUp, staggerContainer, fadeInRight } from "@/animations/variants";
import { personalInfo } from "@/data/portfolio";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #F0FDFF 100%)" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-animate absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
        />
        <div
          className="blob-animate-delay absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        />
        <div
          className="blob-animate-slow absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F472B6 0%, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-indigo-700 border border-indigo-100 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-sm font-mono font-medium text-cyan-600 tracking-wider uppercase">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none">
                <span className="text-slate-900">Shivang</span>
                <br />
                <span className="text-slate-900">Mishra</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.1))" }}>
                <span className="text-lg font-display font-semibold text-slate-700">
                  Web Developer
                </span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span className="text-lg font-display font-semibold text-slate-700">
                  AI/ML Enthusiast
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-500 leading-relaxed max-w-lg font-body"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollTo("projects")}
                className="group flex items-center gap-2 px-7 py-4 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-200 transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #6366F1, #4f46e5)" }}
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 20px 40px rgba(99,102,241,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-7 py-4 text-slate-700 font-semibold rounded-2xl glass border border-indigo-100 shadow-md transition-all duration-300 hover:border-indigo-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiDownload size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-sm text-slate-400 font-medium">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
                  { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200 border border-slate-100"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            {/* <motion.div variants={fadeInUp} className="flex gap-8 pt-2">
  {[
    { value: "2+", label: "Projects Built" },
    { value: "4+", label: "Tech Stacks" },
    { value: "85%", label: "ML Accuracy" },
  ].map(({ value, label }) => (
    <div key={label}>
      <div className="text-3xl font-display font-bold gradient-text">{value}</div>
      <div className="text-xs text-slate-500 font-medium mt-1">{label}</div>
    </div>
  ))}
</motion.div> 
*/}
          </motion.div>

          {/* Right Side — 3D Scene */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative h-[550px] lg:h-[700px]"
          >
            {/* Glow behind scene */}
            <div
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)" }}
            />
            <HeroScene />

            {/* Floating info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 left-4 glass rounded-2xl p-4 shadow-xl border border-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: "linear-gradient(135deg, #6366F1, #06B6D4)" }}>
                  🎓
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Currently studying at</div>
                  <div className="text-sm font-semibold text-slate-800">VIT Bhopal University</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute top-10 right-4 glass rounded-2xl p-4 shadow-xl border border-white/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: "linear-gradient(135deg, #F59E0B, #F472B6)" }}>
                  🤖
                </div>
                <div>
                  <div className="text-xs text-slate-500">Specialization</div>
                  <div className="text-sm font-semibold text-slate-800">Web Development</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
