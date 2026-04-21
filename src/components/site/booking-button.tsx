// src/components/site/booking-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type BookingButtonProps = {
  variant?: "primary" | "ghost";
};

export function BookingButton({ variant = "primary" }: BookingButtonProps) {
  if (variant === "ghost") {
    return (
      <Button
        asChild
        variant="outline"
        className="rounded-full border-[#E2E0DA] bg-transparent px-5 py-2
                   text-[11px] font-medium uppercase tracking-[0.16em] text-[#1F2933]
                   transition-all duration-200 ease-out
                   hover:bg-[#EDEBE4] hover:-translate-y-0.5 hover:shadow-sm
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A77B] focus-visible:ring-offset-2"
      >
        <Link href="/estimate">Book Free Estimate</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="rounded-full border border-[#111827] bg-[#1F2933] px-5 py-2
                 text-[11px] font-medium uppercase tracking-[0.16em] text-[#F8F7F4]
                 shadow-sm
                 transition-all duration-200 ease-out
                 hover:bg-[#111827] hover:-translate-y-0.5 hover:shadow-md
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A77B] focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:border-[#9CA3AF] disabled:bg-[#9CA3AF]"
    >
      <Link href="/estimate">Book Free Estimate</Link>
    </Button>
  );
}
