"use client";
import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/animations/variants";
import { personalInfo } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // EmailJS integration point — replace with your credentials
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const socials = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#6366F1",
      bg: "#EEF2FF",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalInfo.linkedin,
      color: "#0077b5",
      bg: "#EFF6FF",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "@shivang-mishra-20",
      href: personalInfo.github,
      color: "#1a1a1a",
      bg: "#F8FAFC",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, #6366F1, #06B6D4)" }}
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
              ✦ Get In Touch
            </span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-5xl font-display font-bold text-slate-900 mb-4">
            Let's <span className="text-slate-900">Work Together</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-500 max-w-2xl mx-auto">
            Have a project in mind? Looking for a developer who bridges frontend engineering with
            AI? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left - Social Links */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {/* Message */}
            <motion.div variants={fadeInLeft}>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">
                Open to opportunities
              </h3>
              <p className="text-slate-500 leading-relaxed">
                I'm actively looking for internships, freelance projects, and full-time roles
                where I can contribute meaningfully with my skills.
              </p>
            </motion.div>

            {/* Social cards */}
            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInLeft}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300 group"
                  style={{ background: bg }}
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ background: color }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{label}</div>
                    <div className="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">
                      {value}
                    </div>
                  </div>
                  <div className="ml-auto text-slate-300 group-hover:text-indigo-400 transition-colors">→</div>
                </motion.a>
              ))}
            </div>

            {/* Availability indicator */}
            <motion.div
              variants={fadeInLeft}
              className="p-5 rounded-2xl border border-green-100"
              style={{ background: "#F0FDF4" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-700">Available for hire</span>
              </div>
              <p className="text-xs text-green-600 mt-2">
                Currently open to internships & freelance projects starting immediately.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8 border border-white shadow-2xl shadow-indigo-50">
              <h3 className="text-xl font-display font-bold text-slate-900 mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={(form as any)[name]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Let's collaborate on..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 disabled:opacity-70 transition-all"
                  style={{
                    background:
                      status === "success"
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : status === "error"
                        ? "linear-gradient(135deg, #ef4444, #dc2626)"
                        : "linear-gradient(135deg, #6366F1, #4f46e5)",
                  }}
                  whileHover={status === "idle" ? { scale: 1.02, y: -1 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                >
                  {status === "sending" && (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <FiCheck size={16} />
                      Message Sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <FiAlertCircle size={16} />
                      Failed — Try again
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
