"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return { ref, isInView };
}
