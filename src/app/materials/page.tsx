// src/app/materials/page.tsx
import { BookingButton } from "@/components/site/booking-button";

export default function MaterialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Materials
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Granite, marble, quartz, porcelain, and more.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          From classic natural stones to advanced engineered surfaces, Quiroz
          Marble and Granite works with a curated range of materials to suit
          modern homes, multi‑unit developments, and commercial interiors.
        </p>
        <BookingButton />
      </div>
    </div>
  );
}
