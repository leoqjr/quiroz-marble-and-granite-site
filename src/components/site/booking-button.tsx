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
        className="rounded-full border-[#D8CBC3] bg-transparent px-5 py-2
                   text-[11px] font-medium uppercase tracking-[0.16em] text-[#1D1D1D]
                   transition-all duration-200 ease-out
                   hover:bg-[#E5DED7] hover:-translate-y-0.5 hover:shadow-sm
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83766B] focus-visible:ring-offset-2"
      >
        <Link href="/estimate">Book Free Estimate</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="rounded-full border border-transparent bg-[#83766B] px-5 py-2
                 text-[11px] font-medium uppercase tracking-[0.16em] text-[#F3F2EE]
                 shadow-sm
                 transition-all duration-200 ease-out
                 hover:bg-[#6F6359] hover:-translate-y-0.5 hover:shadow-md
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83766B] focus-visible:ring-offset-2
                 disabled:cursor-not-allowed disabled:border-[#9CA3AF] disabled:bg-[#9CA3AF]"
    >
      <Link href="/estimate">Book Free Estimate</Link>
    </Button>
  );
}
