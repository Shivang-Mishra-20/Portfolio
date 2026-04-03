"use client";

interface SectionLabelProps {
  label: string;
  color?: string;
}

export default function SectionLabel({ label, color = "#6366F1" }: SectionLabelProps) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
      style={{
        color,
        background: `${color}15`,
      }}
    >
      ✦ {label}
    </span>
  );
}
