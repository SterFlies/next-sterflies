import { cloudinaryUrl } from "@/app/config/site"

export type ProjectCategory =
  | "Existing Conditions / Reality Capture"
  | "Mapping & Photogrammetry"
  | "Thermal Documentation"
  | "3D Progress Documentation"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  date?: string
  location?: string
  cover: { src: string; alt: string }
  excerpt: string
  objective: string
  method: string
  deliverables: string
  serviceHref: string
  serviceLabel: string
}

export const projects: Project[] = [
  {
    slug: "iaq-mold-documentation",
    title: "IAQ & Mold Existing Conditions Documentation",
    category: "Existing Conditions / Reality Capture",
    date: "2025-08-15",
    location: "San Antonio Area, TX",
    cover: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
        1400
      ),
      alt: "Combined interior and exterior 3D documentation of existing site conditions",
    },
    excerpt:
      "Demonstration project illustrating an interior and exterior documentation workflow for later professional review.",
    objective:
      "Preserve interior layout, room relationships, exterior context, and location context as a reviewable spatial record.",
    method: "Matterport / terrestrial capture, exterior photogrammetry, and high-resolution imagery.",
    deliverables: "Interior walkthrough, exterior 3D model, annotated views, and supporting imagery.",
    serviceHref: "/services/forensic-site-documentation",
    serviceLabel: "Forensic Mapping & Site Documentation",
  },
  {
    slug: "65acresite",
    title: "65-Acre Site Mapping & Progress Documentation",
    category: "Mapping & Photogrammetry",
    date: "2025-08-02",
    location: "Greater Houston, TX",
    cover: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
        1400
      ),
      alt: "Aerial mapping of a 65-acre development site",
    },
    excerpt:
      "Recurring aerial photogrammetry used to create a shared spatial record of grading, utilities, pads, and access.",
    objective: "Create a repeatable spatial record of site conditions and construction progress.",
    method: "Aerial photogrammetry with a consistent capture footprint across visits.",
    deliverables: "Orthomosaic, shareable web map, and site imagery.",
    serviceHref: "/services/mapping",
    serviceLabel: "Mapping & Photogrammetry",
  },
  {
    slug: "pv-farm-hotspots",
    title: "Solar PV Thermal Documentation",
    category: "Thermal Documentation",
    date: "2025-07-20",
    location: "Greater San Antonio, TX",
    cover: {
      src: "/ThermalThumb.png",
      alt: "Thermal documentation of a photovoltaic array",
    },
    excerpt:
      "Paired thermal and RGB documentation of a photovoltaic array, with location context for later review.",
    objective:
      "Document apparent temperature patterns across the array and preserve corresponding RGB and location context.",
    method: "Thermal and RGB aerial capture planned for module-level coverage.",
    deliverables: "Thermal imagery, RGB imagery, annotated snapshots, mapped context, and a review report.",
    serviceHref: "/thermal/Applications",
    serviceLabel: "Thermal Documentation",
  },
  {
    slug: "custom-home-3d-model",
    title: "Custom Home 3D Progress Documentation",
    category: "3D Progress Documentation",
    date: "2025-05-11",
    location: "San Antonio Area, TX",
    cover: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016149/flighttomesh_ae4avk.png",
        1400
      ),
      alt: "Photogrammetric 3D model of a custom home during construction",
    },
    excerpt:
      "Recurring 3D documentation of a custom home so changing construction conditions could be reviewed remotely.",
    objective: "Preserve a repeatable 3D record of construction progress for remote review.",
    method: "Aerial photogrammetry processed into a navigable 3D model.",
    deliverables: "Browser-based 3D model and supporting progress imagery.",
    serviceHref: "/services/mapping",
    serviceLabel: "Mapping & Photogrammetry",
  },
]
