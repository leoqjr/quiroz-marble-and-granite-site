// src/components/site/footer.tsx
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#D8CBC3] bg-[#F3F2EE]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-xs text-[#4B5563] md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
        {/* Left: Brand / copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#4B5563]">
            Quiroz Marble & Granite
          </span>
          <span className="hidden h-3 w-px bg-[#D8CBC3] md:inline-block" />
          <span className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Center: Essential links */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="text-xs text-[#4B5563] underline-offset-4 hover:text-[#1D1D1D] hover:underline"
          >
            Contact
          </Link>
          <Link
            href="/portfolio"
            className="text-xs text-[#4B5563] underline-offset-4 hover:text-[#1D1D1D] hover:underline"
          >
            Portfolio
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-[#6B7280] underline-offset-4 hover:text-[#1D1D1D] hover:underline"
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
            className="h-7 w-7 rounded-full border border-[#D8CBC3] text-[11px] text-[#4B5563] flex items-center justify-center hover:bg-[#E5DED7]"
          >
            IG
          </Link>
          <Link
            href="#"
            aria-label="Houzz"
            className="h-7 w-7 rounded-full border border-[#D8CBC3] text-[11px] text-[#4B5563] flex items-center justify-center hover:bg-[#E5DED7]"
          >
            HZ
          </Link>
          <Link
            href="#"
            aria-label="Pinterest"
            className="h-7 w-7 rounded-full border border-[#D8CBC3] text-[11px] text-[#4B5563] flex items-center justify-center hover:bg-[#E5DED7]"
          >
            PT
          </Link>
        </div>
      </div>
    </footer>
  );
}
