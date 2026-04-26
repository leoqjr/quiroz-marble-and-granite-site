// src/app/process/page.tsx
import { BookingButton } from "@/components/site/booking-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stone Fabrication & Installation Process",
  description:
    "See how Quiroz Marble and Granite manages stone projects in the greater Los Angeles area—from initial estimate and material selection through templating, fabrication, delivery, and installation.",
};

const steps = [
  {
    number: "01",
    title: "Initial conversation & estimate",
    summary:
      "We listen first, then share a clear estimate based on your space and scope.",
    details:
      "Share inspiration, rough dimensions, and any drawings or plans you may have. We’ll talk through how you use the space, budget, and timing so the estimate reflects the real project.",
  },
  {
    number: "02",
    title: "Material selection & slab review",
    summary:
      "We narrow materials to what fits your home, maintenance style, and budget.",
    details:
      "Together we review slabs and samples, talk through performance, and refine edges, splash heights, and other details. For natural stone, we focus on veining, movement, and how each slab will lay out.",
  },
  {
    number: "03",
    title: "Field measurements & templating",
    summary:
      "We capture precise measurements once cabinets and substrates are set.",
    details:
      "Our team visits to create digital or physical templates, confirming overhangs, seams, and any cutouts for sinks, cooktops, and fixtures before anything is cut.",
  },
  {
    number: "04",
    title: "Fabrication in our shop",
    summary:
      "Your slabs are cut, finished, and dry‑fitted before arriving on site.",
    details:
      "We shape edges, polish finishes, and review seams and corners for a clean, continuous look. For more complex projects, we can walk you through the layout in the shop.",
  },
  {
    number: "05",
    title: "Delivery, installation & finishing",
    summary:
      "Our installers handle the heavy lifting and protect your home or site.",
    details:
      "We set, level, and seam the tops, then complete final polishing and sealing where appropriate. At the end, we walk the space with you and review basic care and maintenance.",
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6 md:max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Our Process
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          A clear path from first measure to final install.
        </h1>
        <p className="text-sm leading-relaxed text-[#4B5563] md:text-[0.95rem]">
          Stone projects feel simplest when you know what to expect. We follow a
          consistent process—from first estimate through templating,
          fabrication, and installation—so you can focus on the space, not the
          logistics.
        </p>
      </div>

      {/* Steps timeline */}
      <div className="mt-10 space-y-6 border-l border-[#E2E0DA] pl-4 md:mt-12 md:space-y-7 md:pl-6">
        {steps.map((step, index) => (
          <div key={step.number} className="relative pl-4 md:pl-6">
            {/* Timeline dot */}
            <div className="absolute left-[-0.8rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F8F7F4] md:left-[-1rem]">
              <div className="h-2.5 w-2.5 rounded-full bg-[#1F2933]" />
            </div>

            <div
              className="rounded-2xl border border-[#E2E0DA] bg-[#FDFCF9] p-4 shadow-sm md:p-5
                         transition-all duration-200 ease-out
                         hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9CA3AF]">
                  {step.number}
                </p>
                <h2 className="text-sm font-semibold tracking-tight text-[#111827]">
                  {step.title}
                </h2>
              </div>
              <p className="mt-3 text-[13px] font-medium text-[#4B5563]">
                {step.summary}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
                {step.details}
              </p>

              {/* Small tag at the bottom right for context */}
              <div className="mt-3 flex justify-end">
                <span className="inline-flex items-center rounded-full bg-[#F3F1EB] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#6B7280]">
                  {index === 0 && "Planning"}
                  {index === 1 && "Materials"}
                  {index === 2 && "On‑site"}
                  {index === 3 && "In‑shop"}
                  {index === 4 && "Install"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div
        className="mt-12 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] px-5 py-6 md:mt-16 md:flex md:items-center md:justify-between md:px-6
                   transition-all duration-200 ease-out
                   hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
            Ready to start at step one?
          </p>
          <p className="text-sm text-[#111827]">
            Begin with a free estimate—share your project details and we’ll walk
            you through materials, timing, and next steps.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
