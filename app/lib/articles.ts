import type { Metadata } from "next"
import { cloudinaryUrl, siteConfig } from "@/app/config/site"

export const articleCategories = [
  "Forensic Documentation",
  "Mapping & Photogrammetry",
  "Reality Capture",
  "Thermal Documentation",
  "Construction Documentation",
  "Industrial Hygiene / Existing Conditions",
] as const

export type ArticleCategory = (typeof articleCategories)[number]
export type ArticleTier = "core" | "supporting"

export type Article = {
  slug: string
  title: string
  description: string
  excerpt: string
  category: ArticleCategory
  publishedAt: string
  updatedAt?: string
  author: string
  heroImage: string
  heroAlt: string
  heroCaption?: string
  readingTime: string
  relatedSlugs: string[]
  featured?: boolean
  listed?: boolean
  noindex?: boolean
  tier: ArticleTier
}

export const articles: Article[] = [
  {
    slug: "drone-mapping-forensic-site-investigations",
    title: "How Drone Mapping Can Support Forensic Site Investigations",
    description:
      "How aerial mapping can preserve site layout, spatial relationships, and surrounding context for a forensic site investigation, and where ground-based documentation is still required.",
    excerpt:
      "What a mapped aerial record can preserve for later review, and where ground-based capture is still required.",
    category: "Forensic Documentation",
    publishedAt: "2026-09-22",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790115483/Hero-forensic-mapping_rctzro.png",
      1600
    ),
    heroAlt:
      "Aerial construction site, point clouds, thermal imagery, and an interior floor record used for forensic site documentation",
    heroCaption: "Aerial, spatial, thermal, and interior records can preserve site context for later review.",
    readingTime: "9 min read",
    relatedSlugs: [
      "forensic-mapping-incident-investigations",
      "what-is-forensic-site-documentation",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
      "chain-of-custody-digital-site-documentation-litigation",
    ],
    featured: true,
    listed: true,
    tier: "supporting",
  },
  {
    slug: "forensic-mapping-incident-investigations",
    title: "Forensic Mapping for Incident Investigations",
    description:
      "How aerial and ground-based reality capture can preserve spatial site context for later incident-investigation review.",
    excerpt:
      "Preserving layout, access, and surrounding conditions after an incident scene begins to change.",
    category: "Forensic Documentation",
    publishedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp",
      1600
    ),
    heroAlt: "Point cloud used as a spatial record of a documented site",
    heroCaption: "A coordinated capture can preserve site geometry for later review.",
    readingTime: "9 min read",
    relatedSlugs: [
      "drone-mapping-forensic-site-investigations",
      "what-is-forensic-site-documentation",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
      "chain-of-custody-digital-site-documentation-litigation",
      "digital-evidence-3d-reality-capture-legal-disputes",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "what-is-forensic-site-documentation",
    title: "What Is Forensic Site Documentation",
    description:
      "Forensic site documentation preserves physical conditions as reviewable spatial records after a site has changed.",
    excerpt:
      "Why isolated photographs are not enough when later review needs layout, scale, and spatial relationships.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-04",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg",
      1600
    ),
    heroAlt: "Interior spatial documentation used to preserve site conditions for later review",
    readingTime: "8 min read",
    relatedSlugs: [
      "forensic-mapping-incident-investigations",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
      "digital-evidence-3d-reality-capture-legal-disputes",
      "chain-of-custody-digital-site-documentation-litigation",
      "why-existing-conditions-documentation-is-critical-for-ih-investigations",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
    title: "Why Expert Witnesses Need More Than Photographs to Analyze a Site",
    description:
      "Expert review depends on orientation, scale, and spatial relationships that isolated photographs often cannot reconstruct.",
    excerpt:
      "How missing context increases ambiguity for expert review after site conditions have changed.",
    category: "Forensic Documentation",
    publishedAt: "2026-03-05",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/pointclouds-camerapoints.png",
    heroAlt: "Camera positions over a mapped site record used for spatial review",
    readingTime: "8 min read",
    relatedSlugs: [
      "forensic-mapping-incident-investigations",
      "what-is-forensic-site-documentation",
      "chain-of-custody-digital-site-documentation-litigation",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-existing-conditions-documentation-is-critical-for-ih-investigations",
    title: "Why Existing Conditions Documentation Is Critical for IH Investigations",
    description:
      "Existing-conditions documentation preserves site context for industrial hygiene and environmental investigations without replacing professional judgment.",
    excerpt:
      "Why visual and spatial records matter when mold, IAQ, and environmental sites change before a report is reviewed.",
    category: "Industrial Hygiene / Existing Conditions",
    publishedAt: "2026-01-11",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768151899/Mold-Inspection-image-5_ceiqaj.webp",
      1600
    ),
    heroAlt: "Interior conditions documented for later industrial hygiene review",
    readingTime: "7 min read",
    relatedSlugs: [
      "documenting-mold-assessments-and-supporting-safety-decisions",
      "what-is-forensic-site-documentation",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "documenting-mold-assessments-and-supporting-safety-decisions",
    title: "Documenting Mold Assessments and Supporting Safety Decisions",
    description:
      "How interior and exterior documentation can preserve moisture and sampling context for mold assessments without performing the assessment itself.",
    excerpt:
      "A documentation approach that preserves moisture, sampling, and spatial context for qualified industrial hygiene review.",
    category: "Industrial Hygiene / Existing Conditions",
    publishedAt: "2026-01-23",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
      1600
    ),
    heroAlt: "Annotated interior documentation used to preserve sampling and location context",
    readingTime: "8 min read",
    relatedSlugs: [
      "why-existing-conditions-documentation-is-critical-for-ih-investigations",
      "what-is-forensic-site-documentation",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "orthomosaic_blog",
    title: "Understanding Orthomosaic Mapping",
    description:
      "How overlapping image capture and photogrammetric processing create scaled aerial maps for site layout, progress, and later comparison.",
    excerpt:
      "What an orthomosaic is, how it is produced, and why a mapped record differs from a photograph.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-07-15",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png",
      1600
    ),
    heroAlt: "Orthomosaic map of a documented site",
    readingTime: "6 min read",
    relatedSlugs: ["3d_model", "construction-progress-monitoring-best-practices", "volumetric_blog"],
    listed: true,
    tier: "core",
  },
  {
    slug: "3d_model",
    title: "Exploring Interactive 3D Models",
    description:
      "How photogrammetric 3D models preserve site geometry for remote review, measurement, and comparison over time.",
    excerpt:
      "How overlapping stills become a navigable 3D record, and where that record is useful.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-07-15",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/3DThumbnail.png",
    heroAlt: "Photogrammetric 3D reconstruction of a structure",
    readingTime: "8 min read",
    relatedSlugs: [
      "orthomosaic_blog",
      "construction-progress-monitoring-best-practices",
      "rebuilding-reality-defensible-digital-site-environments",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-site-conditions-should-be-documented-before-they-are-altered-blog",
    title: "Why Site Conditions Should Be Documented Before They Are Altered",
    description:
      "Why existing conditions should be preserved before repairs, demolition, or construction change the site.",
    excerpt: "Document conditions while they still exist, before repairs or remediation change the site.",
    category: "Forensic Documentation",
    publishedAt: "2026-01-08",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1767906103/Screenshot_2026-01-08_145836_zgatsw.png",
      1600
    ),
    heroAlt: "Documented interior site conditions before alteration",
    readingTime: "6 min read",
    relatedSlugs: [
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
      "what-is-forensic-site-documentation",
      "why-existing-conditions-documentation-is-critical-for-ih-investigations",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
    title: "You Don’t Think You Need Site Documentation Until the Investigation Starts",
    description:
      "Why documentation is often requested only after the original site conditions are gone.",
    excerpt: "The investigation often starts after the original site conditions are already gone.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-06",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770398417/Massive_manufacturing_plant_02_Pro3_1960x1080px_rc3wqx.png",
      1600
    ),
    heroAlt: "Interior facility documentation for later investigation review",
    readingTime: "7 min read",
    relatedSlugs: [
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "safety-investigations-fail-more-often-from-missing-context-than-missing-data",
      "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "safety-investigations-fail-more-often-from-missing-context-than-missing-data",
    title: "Safety Investigations Fail More Often From Missing Context Than Missing Data",
    description:
      "Why spatial context can matter as much as individual measurements in safety investigations.",
    excerpt: "Spatial relationships and environment can matter more than additional isolated measurements.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-07",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770491192/Warehouse_digital_twin_with_autostore_rxrrzw.jpg",
      1600
    ),
    heroAlt: "Facility documentation used to preserve investigation context",
    readingTime: "7 min read",
    relatedSlugs: [
      "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation",
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
      "what-is-forensic-site-documentation",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation",
    title: "Why Photos, Notes, and Memory Are the Weakest Parts of a Safety Investigation",
    description:
      "Why traditional field notes and photographs become fragile after a site changes.",
    excerpt: "Isolated photographs, notes, and recall become harder to use after a site changes.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-10",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770759280/69044891e3b2e9001d8e91b0_aplk7q.jpg",
      1600
    ),
    heroAlt: "Field notes and photographs as incomplete investigation records",
    readingTime: "7 min read",
    relatedSlugs: [
      "safety-investigations-fail-more-often-from-missing-context-than-missing-data",
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
      "what-is-forensic-site-documentation",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "documenting-site-conditions-for-construction-defect-litigation",
    title: "Why Documenting Site Conditions Is Critical for Construction Defect Litigation",
    description:
      "How spatial documentation can preserve construction conditions for later professional review.",
    excerpt: "Preserving visible construction conditions, spatial relationships, and timing for later professional review.",
    category: "Construction Documentation",
    publishedAt: "2026-02-02",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059287/constructiondelay_gfs4si.png",
      1600
    ),
    heroAlt: "Construction site documentation for later condition review",
    readingTime: "8 min read",
    relatedSlugs: [
      "what-is-forensic-site-documentation",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "construction-progress-monitoring-best-practices",
    title: "Construction Progress Documentation",
    description:
      "How repeatable site records can document construction progress through consistent capture intervals and shared visual comparison.",
    excerpt: "Repeatable site records for construction coordination and later comparison.",
    category: "Construction Documentation",
    publishedAt: "2026-02-03",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg",
      1600
    ),
    heroAlt: "Mapped construction site record used for progress documentation",
    readingTime: "7 min read",
    relatedSlugs: ["orthomosaic_blog", "3d_model"],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "digital-evidence-3d-reality-capture-legal-disputes",
    title: "Digital Site Documentation in Legal Disputes",
    description:
      "How spatial site documentation can become part of a later professional or legal workflow without being treated as automatic evidence.",
    excerpt: "What a digital site record can preserve, and what it cannot decide, in a later dispute.",
    category: "Reality Capture",
    publishedAt: "2026-02-18",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp",
      1600
    ),
    heroAlt: "Point cloud used as a spatial site record for later review",
    readingTime: "8 min read",
    relatedSlugs: [
      "what-is-forensic-site-documentation",
      "chain-of-custody-digital-site-documentation-litigation",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "chain-of-custody-digital-site-documentation-litigation",
    title: "Chain of Custody for Digital Site Documentation",
    description:
      "How file traceability differs from a legal chain of custody, and what organized digital site records can actually document.",
    excerpt: "File naming, dates, and organized storage are not the same as a legal chain of custody.",
    category: "Forensic Documentation",
    publishedAt: "2026-03-03",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
      1600
    ),
    heroAlt: "Exterior model and interior floor record of a documented site",
    readingTime: "8 min read",
    relatedSlugs: [
      "digital-evidence-3d-reality-capture-legal-disputes",
      "what-is-forensic-site-documentation",
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "rebuilding-reality-defensible-digital-site-environments",
    title: "Rebuilding Reality: Creating Reviewable Digital Site Records",
    description:
      "How coordinated exterior and interior capture can produce a navigable digital record of a physical site.",
    excerpt: "Turning field capture into a reviewable digital site record, not a legal guarantee.",
    category: "Reality Capture",
    publishedAt: "2026-02-13",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003197/nashville-scan-to-bim-1642095994_pkyjqb.jpg",
      1600
    ),
    heroAlt: "Digital reconstruction of an existing building",
    readingTime: "7 min read",
    relatedSlugs: [
      "what-is-forensic-site-documentation",
      "3d_model",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "thermal-reporting-standards-iec-62446-3",
    title: "Thermal Reporting Standards in Solar PV Inspections",
    description:
      "What IEC 62446-3 covers for photovoltaic thermal inspection reporting, and why that scope is PV-specific.",
    excerpt: "What IEC 62446-3 covers for photovoltaic thermal reporting, and where that scope ends.",
    category: "Thermal Documentation",
    publishedAt: "2026-02-17",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png",
      1600
    ),
    heroAlt: "Annotated thermal documentation of a photovoltaic array",
    readingTime: "8 min read",
    relatedSlugs: [
      "solar-thermal-anomalies-drone-based-pv-inspections",
      "thermal101_blog",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "solar-thermal-anomalies-drone-based-pv-inspections",
    title: "Solar Thermal Anomalies in PV Inspections",
    description:
      "How apparent temperature patterns on photovoltaic arrays can be documented for later qualified review.",
    excerpt: "Documenting apparent temperature differences on PV systems, not diagnosing failed modules.",
    category: "Thermal Documentation",
    publishedAt: "2026-02-24",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png",
      1600
    ),
    heroAlt: "Radiometric thermal and RGB documentation of a photovoltaic array",
    readingTime: "8 min read",
    relatedSlugs: [
      "thermal-reporting-standards-iec-62446-3",
      "thermal101_blog",
    ],
    listed: true,
    tier: "core",
  },
  {
    slug: "thermal101_blog",
    title: "Thermal Imaging for Technical Documentation: What It Shows and What It Does Not",
    description:
      "How thermal imaging records apparent temperature patterns, and why RGB context and qualified review still matter.",
    excerpt: "Apparent temperature patterns are documentation, not a diagnosis.",
    category: "Thermal Documentation",
    publishedAt: "2025-08-14",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/ThermalThumb.png",
    heroAlt: "Thermal documentation of a photovoltaic array",
    readingTime: "7 min read",
    relatedSlugs: [
      "thermal-reporting-standards-iec-62446-3",
      "solar-thermal-anomalies-drone-based-pv-inspections",
    ],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "volumetric_blog",
    title: "Volumetric Data from Photogrammetric Surfaces",
    description:
      "How photogrammetric surfaces can support stockpile and earthwork volume context when a capture is scoped for that output.",
    excerpt: "Volume context from mapped surfaces, with accuracy that depends on the capture plan.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-07-27",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/stockpile.png",
    heroAlt: "Stockpile documentation used for volumetric context",
    readingTime: "6 min read",
    relatedSlugs: ["monthly-volumetric-reporting_blog", "orthomosaic_blog", "topography_blog"],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "topography_blog",
    title: "Understanding Topographic Maps",
    description:
      "How photogrammetric elevation outputs differ from a licensed topographic survey, and where terrain context is useful.",
    excerpt: "Photogrammetric terrain context is not a stamped land survey.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-08-04",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/STERFLIES_TOPODEMO.png",
    heroAlt: "Topographic context derived from photogrammetry",
    readingTime: "6 min read",
    relatedSlugs: ["orthomosaic_blog", "volumetric_blog"],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "monthly-volumetric-reporting_blog",
    title: "Recurring Stockpile and Material Documentation",
    description:
      "Why recurring stockpile records can be more useful than a single annual snapshot, without treating them as financial controls.",
    excerpt: "Repeatable material records over time, not an automatic inventory system.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-08-15",
    updatedAt: "2026-09-21",
    author: "Jerome Sterling",
    heroImage: "/VThumbnail.png",
    heroAlt: "Recurring volumetric site documentation",
    readingTime: "6 min read",
    relatedSlugs: ["volumetric_blog", "construction-progress-monitoring-best-practices"],
    listed: true,
    tier: "supporting",
  },
]

const bySlug = new Map(articles.map((article) => [article.slug, article]))

export function getArticle(slug: string) {
  const article = bySlug.get(slug)
  if (!article) throw new Error(`Unknown article slug: ${slug}`)
  return article
}

export function getListedArticles() {
  return articles
    .filter((article) => article.listed !== false)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? getListedArticles()[0]
}

export function getRelatedArticles(slugs: string[]) {
  return slugs.map((slug) => bySlug.get(slug)).filter((article): article is Article => Boolean(article))
}

export function getArticlesByCategory(category: ArticleCategory) {
  return getListedArticles().filter((article) => article.category === category)
}

export function formatArticleDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`))
}

export function articleMetadata(slug: string): Metadata {
  const article = getArticle(slug)
  const path = `/blog/${article.slug}`
  const title = `${article.title} | SterFlies`
  return {
    title,
    description: article.description,
    alternates: { canonical: path },
    robots: article.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description: article.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.heroAlt,
        },
      ],
    },
  }
}
