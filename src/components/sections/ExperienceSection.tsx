"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiBook, FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi";
import { fadeInUp, staggerContainer } from "@/animations/variants";

const experiences = [
  {
    id: 1,
    type: "research",
    label: "Research Collaboration",
    icon: "🔬",
    role: "Research Collaborator",
    company: "VIT Bhopal University",
    collaborator: "with Dr. Karthik G. L.",
    period: "June 2025 – July 2025",
    location: "Remote",
    color: "#6366F1",
    bg: "#EEF2FF",
    border: "rgba(99,102,241,0.18)",
    pills: "linear-gradient(135deg, #6366F1, #4f46e5)",
    bullets: [
      "Co-developed a novel agent-based \"Chessboard Model\" with Dr. Karthik G. L. to simulate the self-limiting dynamics and economic collapse potential of AI automation.",
      "Co-authored the research manuscript \"The Self-Limiting Dynamics of AI Automation\" prepared for academic publication.",
    ],
    skills: ["AI Research", "Agent-Based Modelling", "Academic Writing", "Python"],
  },
  {
    id: 2,
    type: "internship",
    label: "Paid Internship",
    icon: "💼",
    role: "Web Development Intern",
    company: "SSB Excellence",
    collaborator: "",
    period: "July 2025 – Aug. 2025",
    location: "Remote",
    color: "#06B6D4",
    bg: "#ECFEFF",
    border: "rgba(6,182,212,0.18)",
    pills: "linear-gradient(135deg, #06B6D4, #0284c7)",
    bullets: [
      "Developed & deployed SSB Excellence's official website from scratch (HTML5, CSS3, JavaScript), delivering homepage, courses, and registration functionality within 4 weeks.",
      "Engineered interactive registration forms with real-time validation and streamlined multi-step process — decreased form abandonment by 20% and boosted course registration conversion by 7%.",
      "Ensured clean responsive design across desktop, tablet & mobile (3 breakpoint layouts); reduced mobile load time by 30% via image optimisation and CSS/JS minification.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimisation"],
  },
  {
    id: 3,
    type: "internship",
    label: "Paid Internship",
    icon: "💼",
    role: "Web Development Intern",
    company: "RFB SSB",
    collaborator: "",
    period: "April 2025 – May 2025",
    location: "Remote",
    color: "#F472B6",
    bg: "#FDF4FF",
    border: "rgba(244,114,182,0.18)",
    pills: "linear-gradient(135deg, #F472B6, #db2777)",
    bullets: [
      "Designed & launched the institution's website (RFB SSB) — Courses, About Us, Success Stories, Contact — achieving a mobile-friendly layout within 4 weeks.",
      "Created course listing modules, contact form workflows, and a student testimonial carousel; boosted average page time by 25%.",
      "Reduced page load time by 35% through lazy-loading images and cleaning up unused CSS; fixed layout bugs across Chrome & Firefox.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "UI Design", "Cross-Browser Testing"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] opacity-15 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }} />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #F472B6, transparent)" }} />
      </div>

      <div ref={ref} className="max-w-4xl mx-auto px-6">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 mb-4"
              style={{ background: "rgba(99,102,241,0.1)" }}>
              ✦ Journey
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-slate-900 mb-4">
            Experience &amp; <span className="gradient-text">Growth</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-xl mx-auto">
            Real-world roles and research that sharpened my engineering and analytical thinking.
          </motion.p>
        </motion.div>

        {/* ── Timeline ───────────────────────────────── */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #6366F1 0%, #06B6D4 40%, #F472B6 75%, transparent 100%)" }} />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.65, delay: index * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-20"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-5 top-7 w-7 h-7 rounded-full flex items-center justify-center -translate-x-1/2 shadow-lg text-sm ring-4 ring-white"
                  style={{ background: exp.pills }}
                >
                  {exp.icon}
                </div>

                {/* Card */}
                <motion.div
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border transition-all duration-300"
                  style={{ borderColor: exp.border }}
                  whileHover={{ y: -4 }}
                >
                  {/* Coloured top accent bar */}
                  <div className="h-1 w-full rounded-t-2xl" style={{ background: exp.pills }} />

                  <div className="p-7">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        {/* Badge */}
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold text-white mb-2 inline-block"
                          style={{ background: exp.pills }}
                        >
                          {exp.label}
                        </span>

                        {/* Role */}
                        <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                          {exp.role}
                        </h3>

                        {/* Company + collaborator */}
                        <div className="flex items-center gap-1.5 mt-1">
                          <FiMapPin size={13} className="flex-shrink-0" style={{ color: exp.color }} />
                          <span className="text-sm font-semibold" style={{ color: exp.color }}>
                            {exp.company}
                          </span>
                          {exp.collaborator && (
                            <span className="text-sm text-slate-500">{exp.collaborator}</span>
                          )}
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <FiGlobe size={12} className="text-slate-400 flex-shrink-0" />
                          <span className="text-xs text-slate-400">{exp.location}</span>
                        </div>
                      </div>

                      {/* Period pill */}
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-600 flex-shrink-0"
                        style={{ background: exp.bg }}
                      >
                        <FiCalendar size={12} style={{ color: exp.color }} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: exp.border }}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                          style={{ background: exp.bg, color: exp.color }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}