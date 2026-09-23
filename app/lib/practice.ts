import type { Article, ArticleCategory } from "@/app/lib/articles"
import { getRelatedArticles } from "@/app/lib/articles"

export type PracticeLink = {
  href: string
  title: string
  meta?: string
}

const forensicService: PracticeLink = {
  href: "/services/forensic-site-documentation",
  title: "Forensic Mapping & Site Documentation",
}

const mappingService: PracticeLink = {
  href: "/services/mapping",
  title: "Mapping & Photogrammetry",
}

const thermalService: PracticeLink = {
  href: "/thermal/Applications",
  title: "Thermal Documentation",
}

const iaqProject: PracticeLink = {
  href: "/projects/iaq-mold-documentation",
  title: "IAQ & Mold Existing Conditions Documentation",
}

const siteProject: PracticeLink = {
  href: "/projects/65acresite",
  title: "65-Acre Site Mapping & Progress Documentation",
}

const pvProject: PracticeLink = {
  href: "/projects/pv-farm-hotspots",
  title: "Solar PV Thermal Documentation",
}

const homeProject: PracticeLink = {
  href: "/projects/custom-home-3d-model",
  title: "Custom Home 3D Progress Documentation",
}

const categoryPractice: Record<
  ArticleCategory,
  { service: PracticeLink; project?: PracticeLink }
> = {
  "Forensic Documentation": { service: forensicService, project: iaqProject },
  "Mapping & Photogrammetry": { service: mappingService, project: siteProject },
  "Reality Capture": { service: forensicService, project: iaqProject },
  "Thermal Documentation": { service: thermalService, project: pvProject },
  "Construction Documentation": { service: mappingService, project: homeProject },
  "Industrial Hygiene / Existing Conditions": { service: forensicService, project: iaqProject },
}

const articlePracticeOverrides: Record<
  string,
  { service?: PracticeLink; project?: PracticeLink }
> = {
  "3d_model": { project: homeProject },
  "documenting-site-conditions-for-construction-defect-litigation": {
    service: forensicService,
    project: homeProject,
  },
  "rebuilding-reality-defensible-digital-site-environments": { project: iaqProject },
}

export function articlePractice(article: Article) {
  const base = categoryPractice[article.category]
  const override = articlePracticeOverrides[article.slug]
  return {
    articles: getRelatedArticles(article.relatedSlugs).slice(0, 3).map((item) => ({
      href: `/blog/${item.slug}`,
      title: item.title,
      meta: item.category,
    })),
    service: override?.service ?? base.service,
    project: override?.project ?? base.project,
  }
}

export const applications: {
  title: string
  text: string
  href: string
}[] = [
  {
    title: "Incident investigations",
    text: "Preserve layout, access, and surrounding conditions while they can still be recorded.",
    href: "/blog/forensic-mapping-incident-investigations",
  },
  {
    title: "Construction",
    text: "Keep a repeatable record of progress, exposed work, and site layout as conditions change.",
    href: "/blog/construction-progress-monitoring-best-practices",
  },
  {
    title: "Industrial facilities",
    text: "Document yards, equipment surroundings, and operational context for later technical review.",
    href: "/services/forensic-site-documentation",
  },
  {
    title: "Industrial hygiene / IAQ",
    text: "Preserve interior layout and exterior context for sampling and existing-conditions review.",
    href: "/projects/iaq-mold-documentation",
  },
  {
    title: "Expert and litigation support",
    text: "Provide spatial context that isolated photographs often cannot reconstruct after a site changes.",
    href: "/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
  },
  {
    title: "Property and existing conditions",
    text: "Record current conditions before repairs, demolition, or construction alter the site.",
    href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog",
  },
  {
    title: "Solar PV / thermal",
    text: "Pair apparent temperature patterns with RGB and location context for qualified PV review.",
    href: "/projects/pv-farm-hotspots",
  },
]

export type Capability = {
  id: string
  title: string
  summary: string
  detail: string
  limit: string
  links: PracticeLink[]
}

export const capabilities: Capability[] = [
  {
    id: "aerial-mapping",
    title: "Aerial Mapping",
    summary: "Planned aerial coverage used to record site layout, access, and surrounding conditions from above.",
    detail:
      "Aerial mapping is a capture method, not a standalone service. Overlapping stills are flown so later processing can reconstruct a measurable picture of an area that is difficult to assemble from ground photographs. It is used for large sites, construction progress, exterior context, and overviews that support forensic or technical review.",
    limit:
      "Aerial coverage does not see inside buildings, under equipment, or into areas blocked by trees, structures, or flight limits. Those conditions need a ground-based method when they matter.",
    links: [
      { href: "/services/mapping", title: "Mapping & Photogrammetry" },
      { href: "/projects/65acresite", title: "65-Acre Site Mapping" },
      { href: "/blog/orthomosaic_blog", title: "Understanding Orthomosaic Mapping" },
    ],
  },
  {
    id: "photogrammetry",
    title: "Photogrammetry",
    summary: "Reconstruction of overlapping photographs into spatial products such as orthomosaics, point clouds, and 3D models.",
    detail:
      "Photogrammetry aligns photographs through shared features and builds a model of the captured surface. The useful output is the spatial record: layout, relative position, and, when the capture is planned for it, measurement context. The same method can support forensic documentation, construction records, and existing-conditions work.",
    limit:
      "Quality depends on overlap, surface texture, lighting, and any control used for the engagement. A photogrammetric product is not a licensed land survey.",
    links: [
      { href: "/services/mapping", title: "Mapping & Photogrammetry" },
      { href: "/blog/3d_model", title: "Exploring Interactive 3D Models" },
    ],
  },
  {
    id: "reality-capture",
    title: "Reality Capture",
    summary: "Ground-based recording of physical spaces as navigable spatial data, including interiors and close-range conditions.",
    detail:
      "Reality capture is used when room relationships, corridors, equipment, and access matter as much as the exterior. Terrestrial scanning and interactive walkthroughs preserve continuity that an aerial map cannot. Combined with exterior photogrammetry, the record can connect interior locations to the building envelope and site.",
    limit:
      "A walkthrough preserves what was visible and reachable. It does not determine causation, contamination, or structural condition.",
    links: [
      { href: "/services/forensic-site-documentation#exterior-interior", title: "Aerial and ground-based capture" },
      { href: "/projects/iaq-mold-documentation", title: "IAQ & Mold Existing Conditions" },
      { href: "/blog/rebuilding-reality-defensible-digital-site-environments", title: "Creating Reviewable Digital Site Records" },
    ],
  },
  {
    id: "point-clouds",
    title: "Point Clouds",
    summary: "Dense sets of spatial points derived from photogrammetry, used for measurement context and further technical review.",
    detail:
      "A point cloud is a spatial dataset, not a picture. It can support distances, sections, and comparison when the capture and processing were planned for that use. Point clouds are often delivered alongside an orthomosaic or mesh so reviewers can see both geometry and visual context.",
    limit:
      "Point spacing, occlusions, and control determine what can be measured. The file does not certify accuracy beyond the method used for that engagement.",
    links: [
      { href: "/services/mapping", title: "Mapping & Photogrammetry" },
      { href: "/blog/3d_model", title: "Exploring Interactive 3D Models" },
    ],
  },
  {
    id: "three-d",
    title: "3D Reconstruction",
    summary: "Navigable models of captured site geometry for remote review after conditions have changed.",
    detail:
      "A 3D model turns overlapping capture into a record that can be walked, viewed, and compared. It is useful for construction progress, exterior building geometry, and site context that photographs from a single viewpoint cannot hold together. Models may be browser-based or exported for other review tools when that format is scoped.",
    limit:
      "The model shows surfaces that were captured. Concealed work, interiors after enclosure, and dimensions outside the capture plan are not established by the model.",
    links: [
      { href: "/blog/3d_model", title: "Exploring Interactive 3D Models" },
      { href: "/projects/custom-home-3d-model", title: "Custom Home 3D Progress Documentation" },
    ],
  },
  {
    id: "orthomosaics",
    title: "Orthomosaics",
    summary: "Scaled aerial maps assembled from overlapping images so site layout can be viewed and compared without the perspective of a single photo.",
    detail:
      "An orthomosaic is a map-like image. Features are positioned so distances and areas can be reviewed across the site, subject to the capture and any control used. Teams use them for layout, access, progress, and a shared picture of conditions on a given date.",
    limit:
      "An orthomosaic is not a boundary survey, and vegetation, water, or moving equipment can leave gaps or artifacts that should be read as such.",
    links: [
      { href: "/blog/orthomosaic_blog", title: "Understanding Orthomosaic Mapping" },
      { href: "/projects/65acresite", title: "65-Acre Site Mapping" },
    ],
  },
  {
    id: "thermal-imaging",
    title: "Thermal Imaging",
    summary: "Radiometric or apparent-temperature imagery paired with visual context for inspection documentation.",
    detail:
      "Thermal imaging records patterns of apparent surface temperature. In SterFlies work it is used where those patterns are relevant: photovoltaic arrays, and, where access and conditions allow, electrical equipment, building envelopes, and industrial assets. RGB frames and location context are part of the record so a pattern can be found again on the asset.",
    limit:
      "A thermal image does not independently determine defect cause, moisture source, electrical failure, or liability. Interpretation stays with a qualified professional. IEC 62446-3 applies to photovoltaic thermal inspection reporting, not to thermal documentation in general.",
    links: [
      { href: "/thermal/Applications", title: "Thermal Documentation" },
      { href: "/thermal/method", title: "Thermal method" },
      { href: "/blog/thermal101_blog", title: "What Thermal Imaging Shows and Does Not" },
    ],
  },
  {
    id: "site-measurements",
    title: "Site Measurements",
    summary: "Distances, areas, and volumes taken from a spatial record when the capture was planned for measurement.",
    detail:
      "Measurements are an output of a mapped or scanned record, not a separate product line. They can support layout checks, stockpile context, and comparison between visits. The engagement should state what is being measured and what control, if any, is used.",
    limit:
      "Photogrammetric measurement does not replace a licensed surveyor, engineer, or quantity surveyor when a stamped or contractual measurement is required.",
    links: [
      { href: "/services/mapping", title: "Mapping & Photogrammetry" },
      { href: "/blog/volumetric_blog", title: "Volumetric Data from Photogrammetric Surfaces" },
      { href: "/blog/topography_blog", title: "Understanding Topographic Maps" },
    ],
  },
  {
    id: "interactive-documentation",
    title: "Interactive Documentation",
    summary: "Walkthroughs and browser-based models that let a reviewer move through a site record without being on site.",
    detail:
      "Interactive documentation is used when orientation matters: which room connects to which corridor, where an annotation sits, or how an exterior model relates to interior conditions. Matterport and similar walkthroughs are tools. The deliverable is the navigable record and its annotations.",
    limit:
      "Annotations show locations that were marked. They do not validate laboratory results or professional conclusions placed in the model.",
    links: [
      { href: "/projects/iaq-mold-documentation", title: "IAQ & Mold Existing Conditions" },
      { href: "/capabilities#reality-capture", title: "Reality Capture" },
    ],
  },
  {
    id: "construction-progress",
    title: "Construction Progress Records",
    summary: "Repeatable site records captured on a planned interval so later conditions can be compared with an earlier state.",
    detail:
      "Progress documentation depends on consistency: similar coverage, a known date, and products the project team can actually open. Orthomosaics, 3D models, and supporting stills can show grading, structure, and exposed work while it is still visible. The record supports coordination and later review. It does not certify schedule compliance or pay quantities.",
    limit:
      "Each visit documents that visit. Work covered, removed, or completed between visits is absent unless it was captured while visible.",
    links: [
      { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Documentation" },
      { href: "/projects/custom-home-3d-model", title: "Custom Home 3D Progress Documentation" },
      { href: "/projects/65acresite", title: "65-Acre Site Mapping" },
    ],
  },
]
