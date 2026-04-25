// src/components/site/header.tsx
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/materials", label: "Materials" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2E0DA]/70 bg-[#F8F7F4]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-[11px] font-medium uppercase tracking-[0.16em] text-[#6B7280]",
                  "transition-colors duration-200 ease-out hover:text-[#111827]",
                  isActive && "text-[#111827]",
                )}
              >
                {item.label}
                {/* Active / hover underline */}
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left bg-[#111827]",
                    "transition-transform duration-200 ease-out",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger only */}
        <div className="flex items-center gap-3 md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E0DA] bg-[#F3F2EE]/90 text-[#1F2933] shadow-sm backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
        aria-label="Toggle navigation"
      >
        <Menu className="h-4 w-4" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-64 border-l border-[#E2E0DA] bg-[#F8F7F4] px-5 pt-8 pb-6"
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.16em] text-[#6B7280]",
                  "transition-colors duration-200 ease-out hover:text-[#111827]",
                  isActive && "text-[#111827]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
