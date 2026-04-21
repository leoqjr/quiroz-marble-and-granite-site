// src/app/contact/page.tsx
import { BookingButton } from "@/components/site/booking-button";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Contact
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Contact & showroom.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Reach out to discuss your project, schedule a showroom visit, or
          coordinate measurements. We work by appointment to provide focused,
          unhurried guidance.
        </p>
        <BookingButton />
      </div>
    </div>
  );
}
