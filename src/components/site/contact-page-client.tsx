// src/components/site/contact-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { useState } from "react";

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">(
    "idle",
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Placeholder submit behavior – replace with real API later
    setTimeout(() => {
      setStatus("submitted");
    }, 700);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Contact
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Start with a conversation.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Share a few details about your project, and we’ll follow up to review
          scope, materials, and next steps. You can also reach out directly by
          phone or email if that’s easier.
        </p>
      </div>

      {/* Layout */}
      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Project details
            </p>
            <p className="text-[13px] text-[#4B5563]">
              The more you share now, the better we can prepare before we
              connect.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#111827]">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                           outline-none ring-0 transition-colors duration-200 ease-out
                           focus:border-[#1F2933]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#111827]">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                           outline-none ring-0 transition-colors duration-200 ease-out
                           focus:border-[#1F2933]"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#111827]">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                           outline-none ring-0 transition-colors duration-200 ease-out
                           focus:border-[#1F2933]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[12px] font-medium text-[#111827]">
                Project city / area
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Los Angeles, San Fernando Valley"
                className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                           outline-none ring-0 transition-colors duration-200 ease-out
                           focus:border-[#1F2933]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[12px] font-medium text-[#111827]">
              Project details
            </label>
            <textarea
              required
              name="details"
              rows={5}
              placeholder="Kitchen, bathrooms, fireplace, or other spaces. Include any timelines, drawings, or materials you’re considering."
              className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                         outline-none ring-0 transition-colors duration-200 ease-out
                         focus:border-[#1F2933]"
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-[#E2E0DA] pt-4 text-[12px] text-[#6B7280] md:flex-row md:items-center md:justify-between">
            <p>
              We typically respond within one business day. For urgent
              timelines, calling is best.
            </p>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center justify-center rounded-full border border-[#1F2933] bg-[#1F2933] px-4 py-2
                         text-[12px] font-medium uppercase tracking-[0.16em] text-[#FDFCF9]
                         transition-all duration-200 ease-out
                         hover:bg-[#111827] hover:-translate-y-0.5 hover:shadow-sm
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A77B] focus-visible:ring-offset-2
                         disabled:cursor-not-allowed disabled:border-[#9CA3AF] disabled:bg-[#9CA3AF]"
            >
              {status === "submitted"
                ? "Submitted"
                : status === "submitting"
                  ? "Sending..."
                  : "Send message"}
            </button>
          </div>
        </form>

        {/* Direct contact / fabrication info */}
        <div className="space-y-6 text-[13px] text-[#4B5563]">
          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Prefer to reach out directly?
            </p>
            <p>
              Call, email, or start with a free estimate request. We serve
              clients across the greater Los Angeles area and surrounding
              communities.
            </p>
          </div>

          <div
            className="space-y-3 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm
                       transition-all duration-200 ease-out
                       hover:-translate-y-0.5 hover:shadow-md"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                Phone
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111827]">
                {/* Replace with your real number */}
                (000) 000-0000
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                Email
              </p>
              <p className="mt-1 text-sm font-semibold text-[#111827]">
                {/* Replace with your real email */}
                hello@quirozmarbleandgranite.com
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                Fabrication shop
              </p>
              <p className="mt-1">
                We fabricate out of a dedicated stone shop in the Los Angeles
                area, shared with other fabricators. Site visits and in-person
                slab reviews are scheduled by appointment.
              </p>
            </div>
          </div>

          <div
            className="space-y-2 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] p-5
                       transition-all duration-200 ease-out
                       hover:-translate-y-0.5 hover:shadow-md"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Ready for an estimate?
            </p>
            <p>
              If you already have measurements or plans, you can skip straight
              to a free estimate. We’ll review and follow up with options.
            </p>
            <div className="pt-1">
              <BookingButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
