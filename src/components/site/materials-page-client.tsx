// src/components/site/materials-page-client.tsx
"use client";

import { BookingButton } from "@/components/site/booking-button";
import { useState } from "react";

type MaterialKey = "granite" | "marble" | "quartz" | "quartzite" | "porcelain";

type Material = {
  key: MaterialKey;
  name: string;
  description: string;
  bestFor: string;
  feel: string;
};

const materials: Material[] = [
  {
    key: "granite",
    name: "Granite",
    description:
      "Natural stone with unique movement and variation in every slab. Highly durable and well-suited to everyday use when sealed and maintained.",
    bestFor:
      "Busy kitchens, family spaces, and projects where natural character is a priority.",
    feel: "Organic, varied, and slightly more traditional depending on the pattern.",
  },
  {
    key: "marble",
    name: "Marble",
    description:
      "Timeless natural stone with veining and depth that develops a soft patina over time. More sensitive to etching and staining than other options.",
    bestFor:
      "Statement islands, powder rooms, fireplaces, and clients who appreciate natural aging.",
    feel: "Classic, elegant, and quietly dramatic with the right veining.",
  },
  {
    key: "quartz",
    name: "Quartz",
    description:
      "Engineered stone composed of natural quartz and resins, offering consistent patterns, colors, and low maintenance performance.",
    bestFor:
      "High-traffic kitchens, bathrooms, multi‑unit projects, and commercial surfaces.",
    feel: "Clean, modern, and calm—with options from subtle to bold.",
  },
  {
    key: "quartzite",
    name: "Quartzite",
    description:
      "Natural stone with the visual depth of marble and the durability closer to granite. Typically resistant to heat and scratching when properly sealed.",
    bestFor:
      "Premium kitchens and outdoor applications where both beauty and resilience matter.",
    feel: "Refined, with natural variation and a slightly crystalline look.",
  },
  {
    key: "porcelain",
    name: "Porcelain / Sintered",
    description:
      "Large-format slabs engineered for thin profiles, UV resistance, and surface durability. Excellent for modern lines and wrap‑around details.",
    bestFor:
      "Full-height backsplashes, fireplace walls, outdoor kitchens, and ultra-modern designs.",
    feel: "Minimal, architectural, and very clean—with many stone-look options.",
  },
];

export default function MaterialsPageClient() {
  const [activeMaterial, setActiveMaterial] = useState<MaterialKey>("quartz");

  const selected =
    materials.find((m) => m.key === activeMaterial) ?? materials[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      {/* Intro */}
      <div className="space-y-4 md:space-y-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
          Materials
        </p>
        <h1 className="text-2xl font-medium tracking-tight text-[#111827] md:text-3xl">
          Granite, marble, quartz, porcelain, and more.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4B5563]">
          We work with a considered range of natural stone and engineered
          surfaces. Each material has its own strengths, maintenance profile,
          and visual character. We help you select the right fit for how you
          live—and how you want the space to feel.
        </p>
      </div>

      {/* Master–detail layout */}
      <div className="mt-8 md:mt-10 md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-8 md:items-start">
        {/* Left: Vertical list of materials */}
        <div className="space-y-3 md:space-y-4">
          {materials.map((material) => {
            const isActive = activeMaterial === material.key;
            return (
              <button
                key={material.key}
                type="button"
                onClick={() => {
                  setActiveMaterial(material.key);
                  const el = document.getElementById("material-highlight");
                  if (el && window.innerWidth < 768) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={
                  "w-full rounded-2xl border px-4 py-4 text-left md:px-5 md:py-5 " +
                  "transition-all duration-200 ease-out " +
                  (isActive
                    ? "border-[#1F2933] bg-[#1F2933] text-[#FDFCF9]"
                    : "border-[#E2E0DA] bg-[#FDFCF9] text-[#111827] hover:border-[#C5A77B] hover:-translate-y-0.5 hover:shadow-sm")
                }
              >
                <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                  {material.name}
                </span>
                <span
                  className={
                    "mt-2 h-px w-10 " +
                    (isActive ? "bg-[#FDFCF9]/70" : "bg-[#E2E0DA]")
                  }
                />
                <p
                  className={
                    "mt-3 text-[13px] leading-relaxed " +
                    (isActive ? "text-[#F9FAFB]/80" : "text-[#4B5563]")
                  }
                >
                  {material.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: Highlight / visualizer panel */}
        <div
          id="material-highlight"
          className="mt-8 rounded-3xl border border-[#E2E0DA] bg-[#FDFCF9] p-5 shadow-sm md:mt-0 md:p-6
                     transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
              Material highlight
            </p>
            <h2 className="text-sm font-semibold tracking-tight text-[#111827]">
              {selected.name}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 text-[13px] text-[#4B5563]">
                <p className="font-semibold text-[#111827]">Best suited for</p>
                <p>{selected.bestFor}</p>
              </div>
              <div className="space-y-2 text-[13px] text-[#4B5563]">
                <p className="font-semibold text-[#111827]">Overall feel</p>
                <p>{selected.feel}</p>
              </div>
            </div>

            {/* Visual block */}
            <div className="mt-4 rounded-2xl border border-[#E2E0DA] bg-[#F3F1EB] p-4">
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#6B7280]">
                Example application
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
                <div className="relative h-32 overflow-hidden rounded-xl border border-[#E2E0DA] bg-white md:h-36">
                  <div className="absolute inset-0 bg-[#F9FAFB]" />
                  <div
                    className={
                      "absolute inset-x-6 bottom-5 h-8 rounded-t-[12px] transition-colors duration-200 ease-out " +
                      materialToneClass(selected.key)
                    }
                  />
                </div>
                <p className="text-[11px] leading-relaxed text-[#6B7280]">
                  This panel represents how the material might read as a
                  countertop in a calm, minimal kitchen—color and pattern
                  density will vary by specific slab and lighting.
                </p>
              </div>
            </div>
          </div>
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
            Not sure which material is right?
          </p>
          <p className="text-sm text-[#111827]">
            Share how you use your space and we’ll recommend options, then walk
            you through slabs and samples in person.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <BookingButton />
        </div>
      </div>
    </div>
  );
}

function materialToneClass(key: MaterialKey) {
  switch (key) {
    case "granite":
      return "bg-[#C4B09A]";
    case "marble":
      return "bg-[#E4E0D8]";
    case "quartz":
      return "bg-[#DADFE5]";
    case "quartzite":
      return "bg-[#C9D0CD]";
    case "porcelain":
      return "bg-[#E1E1E4]";
    default:
      return "bg-[#E5E1D8]";
  }
}
