// src/app/estimate/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EstimatePage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you. We’ve received your request and will follow up shortly.");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-16">
        {/* Left: Intro + trust copy */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Book a Free Estimate
          </p>
          <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
            Start your stone project with a tailored quote.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-[#4B5563]">
            Share a few essentials about your kitchen, bathroom, fireplace,
            outdoor space, or commercial project. We’ll follow up to confirm
            measurements, review materials, and provide a clear, no‑pressure
            estimate.
          </p>
          <div className="grid gap-4 text-[11px] text-[#6B7280] md:grid-cols-2">
            <div className="space-y-1">
              <p className="font-semibold text-[#111827]">
                What to expect next
              </p>
              <p>
                A member of our team will review your details and reach out
                within one business day to discuss the project and next steps.
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-[#111827]">No obligation</p>
              <p>
                Estimates are complimentary and designed to help you understand
                your options, scope, and investment.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Simple form */}
        <div className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                Name
              </label>
              <Input
                name="name"
                placeholder="Full name"
                className="border-[#E2E0DA] bg-white text-sm"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-[#E2E0DA] bg-white text-sm"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                  Phone
                </label>
                <Input
                  name="phone"
                  placeholder="(555) 123-4567"
                  className="border-[#E2E0DA] bg-white text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                  I am a...
                </label>
                <select
                  name="role"
                  className="h-9 w-full rounded-md border border-[#E2E0DA] bg-white px-3 text-xs uppercase tracking-[0.12em] text-[#4B5563] outline-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="homeowner">Homeowner</option>
                  <option value="contractor">Contractor / Builder</option>
                  <option value="designer">
                    Interior Designer / Architect
                  </option>
                  <option value="business">Business / Property Manager</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                  Project type
                </label>
                <select
                  name="projectType"
                  className="h-9 w-full rounded-md border border-[#E2E0DA] bg-white px-3 text-xs uppercase tracking-[0.12em] text-[#4B5563] outline-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="kitchen">Kitchen</option>
                  <option value="bathroom">Bathroom / Vanity</option>
                  <option value="fireplace">Fireplace</option>
                  <option value="outdoor">Outdoor Kitchen / Bar</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                How would you like to meet?
              </label>
              <select
                name="meetPreference"
                className="h-9 w-full rounded-md border border-[#E2E0DA] bg-white px-3 text-xs uppercase tracking-[0.12em] text-[#4B5563] outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="in_home">In-home visit</option>
                <option value="showroom">Showroom appointment</option>
                <option value="virtual">Virtual consultation</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                Project details
              </label>
              <Textarea
                name="projectDetails"
                rows={4}
                placeholder="Share dimensions if you have them, which rooms we’ll be working on, and any materials you’re considering."
                className="border-[#E2E0DA] bg-white text-sm"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.16em] text-[#6B7280]">
                Ideal timeline (optional)
              </label>
              <Input
                name="timeline"
                placeholder="For example: 'Within 1 month' or 'This summer'"
                className="border-[#E2E0DA] bg-white text-sm"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="rounded-full bg-[#1F2933] px-6 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#F8F7F4] hover:bg-[#111827]"
              >
                Submit Request
              </Button>
            </div>

            <p className="text-[11px] leading-relaxed text-[#9CA3AF]">
              By submitting, you’re simply starting a conversation. We’ll review
              your project, follow up with a few clarifying questions if needed,
              and provide a detailed estimate—no automated pricing, no hard
              sales.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
