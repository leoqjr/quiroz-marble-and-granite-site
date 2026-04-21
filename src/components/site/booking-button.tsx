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
        className="rounded-full border-[#E2E0DA] bg-transparent px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#1F2933] hover:bg-[#EDEBE4]"
      >
        <Link href="/estimate">Book Free Estimate</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      className="rounded-full bg-[#1F2933] px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#F8F7F4] shadow-sm hover:bg-[#111827]"
    >
      <Link href="/estimate">Book Free Estimate</Link>
    </Button>
  );
}
