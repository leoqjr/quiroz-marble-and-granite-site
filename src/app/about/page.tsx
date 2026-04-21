// src/app/about/page.tsx
import { BookingButton } from "@/components/site/booking-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Quiroz Marble and Granite",
  description:
    "Quiroz Marble and Granite is a family-run stone fabrication shop in the greater Los Angeles area, focused on precise fabrication, clean installation, and a calm client experience from estimate to final walkthrough.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          About
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Quiroz Marble and Granite.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          Quiroz Marble and Granite is a family-run stone shop focused on
          precise fabrication, clean installation, and a calm experience from
          first estimate to final walkthrough. We combine traditional craft with
          modern equipment to deliver stonework that feels tailored rather than
          generic.
        </p>
      </div>

      {/* Story + values */}
      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:items-start">
        <div className="space-y-5 text-sm leading-relaxed text-[#4B5563]">
          <p>
            Over the years, we’ve partnered with homeowners, designers,
            contractors, and builders on projects ranging from single-vanity
            refreshes to full home renovations and commercial interiors. Across
            all of them, our approach stays the same: listen carefully, plan
            thoroughly, and execute with attention to detail.
          </p>
          <p>
            In the shop, that means tight seams, thoughtful veining layouts,
            clean edge work, and dry-fitting complex pieces before they ever
            leave our floor. On site, it means protecting finished surfaces,
            communicating clearly with clients and trades, and leaving the space
            as orderly as we found it.
          </p>
          <p>
            Whether we’re fabricating a waterfall island, a set of guest
            vanities, or an outdoor kitchen that needs to handle sun and
            weather, the goal is the same: stonework that feels quietly
            luxurious and performs as well as it looks.
          </p>
        </div>

        {/* Quick facts */}
        <div
          className="space-y-5 rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:p-6
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            At a glance
          </p>
          <div className="space-y-4 text-[13px] text-[#4B5563]">
            <div>
              <p className="font-semibold text-[#111827]">Who we work with</p>
              <p>
                Homeowners, interior designers, architects, contractors, and
                builders across residential and commercial projects.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#111827]">What we handle</p>
              <p>
                Templating, fabrication, and installation for kitchens,
                bathrooms, fireplaces, outdoor spaces, and commercial interiors.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#111827]">How we work</p>
              <p>
                Clear communication, coordinated scheduling, and a focus on
                details that hold up to close inspection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values / promises */}
      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
        <div
          className="space-y-2 rounded-2xl border border-transparent p-3
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:border-[#E2E0DA] hover:bg-[#FDFCF9] hover:shadow-sm"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Craftsmanship
          </p>
          <p className="text-sm font-semibold text-[#111827]">
            Details that read as one continuous surface.
          </p>
          <p className="text-[13px] leading-relaxed text-[#4B5563]">
            From edge profiles to seam placement, we work to make each piece
            feel intentional rather than simply “installed to fit.”
          </p>
        </div>
        <div
          className="space-y-2 rounded-2xl border border-transparent p-3
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:border-[#E2E0DA] hover:bg-[#FDFCF9] hover:shadow-sm"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Communication
          </p>
          <p className="text-sm font-semibold text-[#111827]">
            Clear expectations, fewer surprises.
          </p>
          <p className="text-[13px] leading-relaxed text-[#4B5563]">
            We outline timelines, site requirements, and what to expect on
            install day—so clients and trade partners know where things stand.
          </p>
        </div>
        <div
          className="space-y-2 rounded-2xl border border-transparent p-3
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:border-[#E2E0DA] hover:bg-[#FDFCF9] hover:shadow-sm"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Respect for the space
          </p>
          <p className="text-sm font-semibold text-[#111827]">
            Careful install, clean finish.
          </p>
          <p className="text-[13px] leading-relaxed text-[#4B5563]">
            We protect surrounding finishes, manage dust as much as possible,
            and leave the work area tidy when the stonework is complete.
          </p>
        </div>
      </div>

      {/* CTA strip */}
      <div
        className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-16 md:flex md:items-center md:justify-between md:px-6
                   transition-all duration-200 ease-out
                   hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to discuss a project?
          </p>
          <p className="text-sm text-[#111827]">
            Start with a free estimate or share plans and drawings—We’ll review
            the scope and outline a clear path forward.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
