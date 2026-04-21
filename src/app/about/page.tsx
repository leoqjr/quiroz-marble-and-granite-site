// src/app/about/page.tsx
import { BookingButton } from "@/components/site/booking-button";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          About
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Quiroz Marble and Granite.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Built on craftsmanship and modern technology, Quiroz Marble and
          Granite is a family‑run fabrication shop dedicated to precise
          stonework and a calm, professional client experience—from designers
          and contractors to homeowners planning their first renovation.
        </p>
        <BookingButton />
      </div>
    </div>
  );
}
