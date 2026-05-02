// src/components/site/booking-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type BookingButtonProps = {
  variant?: "primary" | "ghost";
};

export function BookingButton({ variant = "primary" }: BookingButtonProps) {
  const isGhost = variant === "ghost";

  return (
    <Button
      asChild
      variant={isGhost ? "outline" : "default"}
      className={
        isGhost
          ? [
              // Ghost / outline: subtle blue/neutral outline, transparent bg
              "rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.16em]",
              "border border-border bg-transparent text-foreground",
              "hover:border-accent hover:bg-accent/10 hover:text-foreground",
              "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            ].join(" ")
          : [
              // Primary: deep blue background (from --primary), light text
              "rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.16em]",
              "bg-primary text-primary-foreground border border-transparent shadow-sm",
              "transition-all duration-200 ease-out hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground",
            ].join(" ")
      }
    >
      {/* Single source of truth for the CTA URL */}
      <Link href="/contact">Book Free Estimate</Link>
    </Button>
  );
}
