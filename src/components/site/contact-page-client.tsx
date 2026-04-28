// src/components/site/contact-page-client.tsx
"use client";

import { SectionHeader } from "@/components/site/section-header";
import { useState } from "react";

type Status = "idle" | "submitting" | "submitted" | "error";

export default function ContactPageClient() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meevpoqo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("submitted");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#F3F2EE]">
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16 space-y-10 md:space-y-12">
        {/* Intro */}
        <section className="text-center">
          <SectionHeader
            align="center"
            eyebrow="Contact"
            title="Start with a conversation."
            body="Share a few details about your project and how to reach you. We’ll follow up to review scope, materials, and timing."
          />
        </section>

        {/* Main form card */}
        <section>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6
                       transition-all duration-200 ease-out
                       hover:-translate-y-0.5 hover:shadow-md"
          >
            <SectionHeader
              eyebrow="Project details"
              body="A brief description is enough. You can always share drawings or photos later."
              className="space-y-1"
            />

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
                placeholder="Kitchen, bathrooms, fireplace, or other spaces. Include any timelines or materials you’re considering."
                className="w-full rounded-lg border border-[#D2D6DB] bg-white px-3 py-2 text-sm text-[#111827]
                           outline-none ring-0 transition-colors duration-200 ease-out
                           focus:border-[#1F2933]"
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-[#E2E0DA] pt-4 text-[12px] text-[#6B7280] md:flex-row md:items-center md:justify-between">
              <p>We typically respond within one business day.</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full border border-[#1F2933] bg-[#1F2933] px-5 py-2.5
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

            {status === "submitted" && (
              <p className="text-[11px] text-[#059669]">
                Thank you—your message has been sent. We’ll follow up within one
                business day.
              </p>
            )}
            {status === "error" && (
              <p className="text-[11px] text-[#B91C1C]">
                Something went wrong sending your message. Please try again or
                contact us directly.
              </p>
            )}
          </form>
        </section>

        {/* Direct contact card */}
        <section
          className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] px-5 py-5 md:px-6
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-sm"
        >
          <div className="space-y-3 text-[13px] text-[#4B5563]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Prefer to reach out directly?
            </p>
            <p>
              Call or email if that’s easier for you. We serve clients across
              the greater Los Angeles area and surrounding communities.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 sm:items-center">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  Phone
                </p>
                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  (000) 000-0000 {/* replace with real number */}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                  Email
                </p>
                <p className="mt-1 text-sm font-semibold text-[#111827]">
                  hello@quirozmarbleandgranite.com {/* replace if needed */}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
