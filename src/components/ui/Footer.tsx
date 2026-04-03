"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 overflow-hidden border-t border-slate-100"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #0c4a6e 100%)" }}>
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 left-1/4 w-80 h-80 opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-display font-bold gradient-text mb-2">SM</div>
            <p className="text-slate-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-6 text-sm text-slate-400">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-indigo-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiLinkedin, href: personalInfo.linkedin },
              { icon: FiMail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
