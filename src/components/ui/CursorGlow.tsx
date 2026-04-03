"use client";
import { useMousePosition } from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-multiply"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(6,182,212,0.06) 50%, transparent 70%)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ left: x, top: y }}
        transition={{ type: "spring", stiffness: 500, damping: 50, mass: 0.3 }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          width: 12,
          height: 12,
          background: "linear-gradient(135deg, #6366F1, #06B6D4)",
          left: x,
          top: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ left: x, top: y }}
        transition={{ type: "spring", stiffness: 800, damping: 30 }}
      />
    </>
  );
}
