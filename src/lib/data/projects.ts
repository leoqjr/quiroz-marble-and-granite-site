// src/lib/data/projects.ts
export type ProjectCategory =
  | "kitchen"
  | "bathroom"
  | "fireplace"
  | "outdoor"
  | "commercial";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
};

export const projects: Project[] = [
  {
    id: "kitchen-calacatta-la",
    title: "Calacatta-style quartz kitchen",
    location: "Los Angeles, CA",
    category: "kitchen",
    description:
      "Waterfall island and full-height backsplash in a soft Calacatta-look quartz, with aligned veining and mitered corners.",
  },
  {
    id: "kitchen-warm-granite",
    title: "Warm granite family kitchen",
    location: "Sherman Oaks, CA",
    category: "kitchen",
    description:
      "Honest, durable granite in a warm neutral palette, crafted with tight seams and eased edges for daily family use.",
  },
  {
    id: "bathroom-marble-ensuite",
    title: "Marble primary bathroom vanity",
    location: "West Hollywood, CA",
    category: "bathroom",
    description:
      "Bookmatched marble vanity with integrated backsplash and ledge details, designed around natural veining.",
  },
  {
    id: "bathroom-quartz-guest",
    title: "Quartz guest bath refresh",
    location: "Pasadena, CA",
    category: "bathroom",
    description:
      "Low-maintenance quartz vanity top with clean lines and a slim backsplash to complement updated fixtures.",
  },
  {
    id: "fireplace-porcelain-slab",
    title: "Porcelain slab fireplace wall",
    location: "Encino, CA",
    category: "fireplace",
    description:
      "Floor-to-ceiling porcelain panels with minimal joints, creating a quiet focal wall in an open-plan living room.",
  },
  {
    id: "outdoor-quartzite-kitchen",
    title: "Quartzite outdoor kitchen",
    location: "Calabasas, CA",
    category: "outdoor",
    description:
      "Textured quartzite selected for its performance in sun and temperature changes, wrapping a full outdoor kitchen.",
  },
  {
    id: "commercial-reception-desk",
    title: "Commercial reception desk",
    location: "Downtown Los Angeles, CA",
    category: "commercial",
    description:
      "Custom quartz reception desk with integrated waterfall ends and ADA-conscious overhangs for a modern office lobby.",
  },
  {
    id: "commercial-restroom-vanities",
    title: "Multi-suite restroom vanities",
    location: "Burbank, CA",
    category: "commercial",
    description:
      "Series of quartz vanities fabricated to consistent dimensions, installed on a tight construction schedule.",
  },
];
