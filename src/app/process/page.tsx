// src/app/process/page.tsx
import { BookingButton } from "@/components/site/booking-button";

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Our Process
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          A clear path from first measure to final install.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Every project follows a transparent sequence—consultation and
          estimate, material selection, digital templating, fabrication, and
          installation. Our team manages the details so you can focus on the
          space itself.
        </p>
        <BookingButton />
      </div>
    </div>
  );
}
