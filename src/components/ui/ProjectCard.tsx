"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  features: string[];
  color: string;
  gradient: string;
  accent: string;
  emoji: string;
  github: string;
  demo: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        transition: isHovered ? "transform 0.1s ease" : "transform 0.5s ease",
      }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-lg hover:shadow-2xl cursor-default"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}15, transparent 40%)`,
        }}
      />

      {/* Top gradient banner */}
      <div
        className="h-56 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.accent}30)` }}
      >
        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, ${project.color}40 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Large emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-8xl opacity-60"
          >
            {project.emoji}
          </motion.div>
        </div>

        {/* Stack badges */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
              style={{ background: project.color }}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-black/30 shadow-sm">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Index number */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
          style={{ background: project.color }}
        >
          0{project.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="mb-4">
          <div className="text-xs font-mono font-medium text-slate-400 mb-1">{project.subtitle}</div>
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{project.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: project.color }}
              />
              <span className="text-xs text-slate-500">{feature}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
            style={{ background: project.color }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiGithub size={14} /> Code
          </motion.a>
          <motion.a
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 border border-slate-200 hover:border-slate-300 transition-all"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiExternalLink size={14} /> Live Demo
          </motion.a>
          <div className="ml-auto">
            <FiArrowRight
              className="text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-200"
              size={18}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
