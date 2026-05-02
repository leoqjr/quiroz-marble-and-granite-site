// src/components/site/section-header.tsx
import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  body?: string | ReactNode;
  align?: "left" | "center";
  kicker?: string;
  className?: string;
  accentEyebrow?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  kicker,
  className = "",
  accentEyebrow = false,
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "text-left items-start";

  return (
    <div
      className={`max-w-xl space-y-2 md:space-y-3 ${alignment} ${className}`}
    >
      {eyebrow && (
        <p
          className={
            "text-[11px] font-medium uppercase tracking-[0.18em] " +
            (accentEyebrow ? "text-accent-foreground" : "text-muted-foreground")
          }
        >
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="font-heading text-base font-medium tracking-tight text-foreground md:text-[1.05rem]">
          {title}
        </h2>
      )}

      {body && (
        <div className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
          {body}
        </div>
      )}

      {kicker && (
        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </p>
      )}
    </div>
  );
}
