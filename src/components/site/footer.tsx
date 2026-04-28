// src/components/site/footer.tsx
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
        {/* Left: Brand / copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground">
            Quiroz Marble &amp; Granite
          </span>
          <span className="hidden h-3 w-px bg-border md:inline-block" />
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center: Essential links */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/portfolio"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Portfolio
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Privacy
          </Link>
        </div>

        {/* Right: Social slots */}
        <div className="flex items-center gap-3">
          {/* Replace # with real URLs later */}
          <Link
            href="#"
            aria-label="Instagram"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-[11px] text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            IG
          </Link>
          <Link
            href="#"
            aria-label="Houzz"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-[11px] text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            HZ
          </Link>
          <Link
            href="#"
            aria-label="Pinterest"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-[11px] text-muted-foreground transition-colors duration-150 hover:bg-secondary hover:text-foreground"
          >
            PT
          </Link>
        </div>
      </div>
    </footer>
  );
}
