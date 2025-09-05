// Centralized data + types for Projects

export type Project = {
  slug: string;
  title: string;
  date?: string; // YYYY-MM-DD (used for sorting)
  client?: string;
  location?: string;
  service: "photogrammetry" | "thermal" | "construction" | "promos" | "mapping";
  cover: { src: string; alt: string };
  excerpt: string;
  tags: string[];

  // Optional detail content
  problem?: string;
  approach?: string[];
  results?: string[];

  // Optional interactive viewers (Pix4Dcloud, Sketchfab, etc.)
  embeds?: Array<{
    id: string;
    label: string;
    src: string; // iframe URL
    aspect?: "16/9" | "4/3" | "1/1" | "21/9" | "3/2";
  }>;
};

export const projects: Project[] = [
  // Matterport interior + drone exterior
  {
    slug: "matterport-drone",
    title: "Custom Home – Matterport Interior + Drone Exterior",
    date: "2025-08-15",
    client: "Residential GC / Owner",
    location: "San Antonio Area, TX",
    service: "construction",
    cover: {
      src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077581/Screenshot_2025-09-05_080609_q3q6nk.png",
      alt: "Custom home interior/exterior capture (Matterport + drone)",
    },
    excerpt:
      "Walk the interior in 3D with Matterport and review the exterior from above in 3D, full context for owners and trades.",
    tags: ["matterport", "interior", "exterior", "construction", "site-scanning", "site-inspection"],
  },

  // 65-acre project to match /projects/65acresite
  {
    slug: "65acresite",
    title: "65-Acre Neighborhood Development – Monitoring Using Drones",
    date: "2025-08-02",
    client: "Land Developer",
    location: "Greater Houston, TX",
    service: "mapping",
    cover: {
      src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
      alt: "Orthomosaic overview of 65-acre neighborhood development",
    },
    excerpt:
      "Recurring drone capture and shareable web orthomosaic to coordinate grading, utilities, pads, and access across a 65-acre site.",
    tags: ["orthomosaic", "mapping", "progress", "site-scanning", "site-inspection"],
  },

  {
    slug: "pv-farm-hotspots",
    title: "PV Farm Hot-Spot Triage",
    date: "2025-07-20",
    client: "Confidential Utility O&M",
    location: "Greater San Antonio, TX",
    service: "thermal",
    cover: {
      src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1756763537/HotSpotCS_q6d2pk.jpg",
      alt: "Thermal hotspot on a PV module",
    },
    excerpt:
      "Rapid thermal sweep to isolate underperforming strings. Delivered defect snapshots and a punch-list map for targeted maintenance.",
    tags: ["thermal", "pv", "o&m", "site-inspection"],
    problem:
      "Operations suspected energy loss due to underperforming strings and needed rapid triage to prioritize maintenance.",
    approach: [
      "Matrice 4T thermal sweep with overlap tuned for anomaly detection",
      "Geo-tagged defects mapped to row/string IDs for work orders",
      "Side-by-side RGB + IR frames for documentation",
    ],
    results: [
      "Isolated multiple hot-spots and cracked cells in one session",
      "Punch-list delivered as KML/GeoJSON + PDF snapshots",
      "Targeted maintenance instead of full-field walk-downs",
    ],
  },

  {
    slug: "custom-home-3d-model",
    title: "Custom Home Build – 3D Model (Progression)",
    date: "2025-05-11",
    client: "Residential GC / Owner",
    location: "San Antonio Area, TX",
    service: "construction",
    cover: {
      src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016149/flighttomesh_ae4avk.png",
      alt: "3D model of custom home build",
    },
    excerpt:
      "High-fidelity mesh for remote stakeholder reviews and owner updates—delivered with a browser-based viewer.",
    tags: ["construction", "3d-model", "progress", "site-scanning"],
    problem:
      "Stakeholders needed a visual, measurable record of framing and exterior progress without disrupting crews.",
    approach: [
      "Low-altitude oblique capture for dense coverage",
      "RTK positions for accurate model alignment between visits",
      "Clean mesh export for fast web viewing",
    ],
    results: [
      "Remote reviews with clear context",
      "Easy owner updates and punch-list coordination",
      "Reusable asset for marketing decks",
    ],
  },
];
