// src/components/site/section-header.tsx
import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  body?: string | ReactNode;
  align?: "left" | "center";
  kicker?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  kicker,
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div
      className={`space-y-2 md:space-y-3 ${alignment} max-w-xl ${className}`}
    >
      {eyebrow && (
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          {eyebrow}
        </p>
      )}
      {title && (
        <p className="text-sm font-medium text-[#111827] md:text-[0.95rem]">
          {title}
        </p>
      )}
      {body && (
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          {body}
        </p>
      )}
      {kicker && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#6B7280]">
          {kicker}
        </p>
      )}
    </div>
  );
}
