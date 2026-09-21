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
export type ArticleTier = "core" | "supporting" | "legacy"

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
  tier: ArticleTier
}

export const articles: Article[] = [
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
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
      "why-existing-conditions-documentation-is-critical-for-ih-investigations",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
    ],
    featured: true,
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
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731078/2cb13476-2434-4a47-a0f6-dc2a5f6214ad_yirkgi.png",
      1600
    ),
    heroAlt: "Expert reviewing a spatial site record rather than isolated photographs",
    readingTime: "8 min read",
    relatedSlugs: [
      "what-is-forensic-site-documentation",
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
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
    relatedSlugs: ["orthomosaic_blog", "construction-progress-monitoring-best-practices"],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-site-conditions-should-be-documented-before-they-are-altered-blog",
    title: "Why Site Conditions Should Be Documented Before They Are Altered",
    description:
      "Why existing conditions should be preserved before repairs, demolition, or construction change the site.",
    excerpt: "Document conditions while they still exist.",
    category: "Forensic Documentation",
    publishedAt: "2026-01-08",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1767906103/Screenshot_2026-01-08_145836_zgatsw.png",
      1200
    ),
    heroAlt: "Documented site conditions before alteration",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
    title: "You Don’t Think You Need Site Documentation Until the Investigation Starts",
    description:
      "Why documentation is often requested only after the original site conditions are gone.",
    excerpt: "The investigation often starts after the site has already changed.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-06",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770398417/Massive_manufacturing_plant_02_Pro3_1960x1080px_rc3wqx.png",
      1200
    ),
    heroAlt: "Interior facility documentation for later investigation review",
    readingTime: "7 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "safety-investigations-fail-more-often-from-missing-context-than-missing-data",
    title: "Safety Investigations Fail More Often From Missing Context Than Missing Data",
    description:
      "Why spatial context can matter as much as individual measurements in safety investigations.",
    excerpt: "Missing context can matter more than missing data points.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-07",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770491192/Warehouse_digital_twin_with_autostore_rxrrzw.jpg",
      1200
    ),
    heroAlt: "Facility documentation used to preserve investigation context",
    readingTime: "7 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation",
    title: "Why Photos, Notes, and Memory Are the Weakest Parts of a Safety Investigation",
    description:
      "Why traditional field notes and photographs become fragile after a site changes.",
    excerpt: "Traditional records often cannot reconstruct a changed site.",
    category: "Forensic Documentation",
    publishedAt: "2026-02-10",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770759280/69044891e3b2e9001d8e91b0_aplk7q.jpg",
      1200
    ),
    heroAlt: "Field notes and photographs as incomplete investigation records",
    readingTime: "7 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "documenting-site-conditions-for-construction-defect-litigation",
    title: "Why Documenting Site Conditions Is Critical for Construction Defect Litigation",
    description:
      "How spatial documentation can preserve construction conditions for later professional review.",
    excerpt: "Preserving construction conditions before they are covered or altered.",
    category: "Construction Documentation",
    publishedAt: "2026-02-02",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059287/constructiondelay_gfs4si.png",
      1200
    ),
    heroAlt: "Construction site documentation for later condition review",
    readingTime: "8 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "construction-progress-monitoring-best-practices",
    title: "Construction Progress Monitoring",
    description:
      "How recurring spatial records can document construction progress without relying on scattered photographs.",
    excerpt: "Repeatable site records for construction progress.",
    category: "Construction Documentation",
    publishedAt: "2026-02-03",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770156435/drone_iomryo.webp",
      1200
    ),
    heroAlt: "Construction progress documentation from aerial mapping",
    readingTime: "7 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "digital-evidence-3d-reality-capture-legal-disputes",
    title: "Digital Evidence in Legal Disputes: How 3D Reality Capture Is Changing Case Strategy",
    description:
      "How 3D reality capture can preserve site context for later legal and expert review.",
    excerpt: "Spatial records as supporting context in disputes.",
    category: "Reality Capture",
    publishedAt: "2026-02-18",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1771444596/2958_Article_Daubert-Challenge_Main_1400x760_kivetp.jpg",
      1200
    ),
    heroAlt: "Reality capture used as supporting context in a dispute review",
    readingTime: "8 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "chain-of-custody-digital-site-documentation-litigation",
    title: "Chain of Custody for Digital Site Documentation",
    description:
      "How capture, organization, and handling of digital site records can be explained later.",
    excerpt: "Traceability for digital site records.",
    category: "Forensic Documentation",
    publishedAt: "2026-03-03",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1772559651/wesley-tingey-TdNLjGXVH3s-unsplash_dz3ldt.jpg",
      1200
    ),
    heroAlt: "Organized digital documentation files",
    readingTime: "8 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "rebuilding-reality-defensible-digital-site-environments",
    title: "Rebuilding Reality: How SterFlies Creates Defensible Digital Site Environments",
    description:
      "How coordinated capture can produce a navigable digital record of a physical site.",
    excerpt: "Turning field capture into a reviewable digital environment.",
    category: "Reality Capture",
    publishedAt: "2026-02-13",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003197/nashville-scan-to-bim-1642095994_pkyjqb.jpg",
      1200
    ),
    heroAlt: "Digital reconstruction of an existing building",
    readingTime: "7 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "thermal-reporting-standards-iec-62446-3",
    title: "Thermal Reporting Standards in Solar PV Inspections",
    description:
      "What IEC 62446-3 covers for photovoltaic thermal inspection reporting, and why that scope is PV-specific.",
    excerpt: "PV thermal reporting under IEC 62446-3.",
    category: "Thermal Documentation",
    publishedAt: "2026-02-17",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png",
      1200
    ),
    heroAlt: "Annotated thermal documentation of a photovoltaic array",
    readingTime: "8 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "solar-thermal-anomalies-drone-based-pv-inspections",
    title: "Solar Thermal Anomalies and Drone-Based PV Inspections",
    description:
      "How apparent temperature patterns on photovoltaic arrays can be documented for later professional review.",
    excerpt: "Documenting thermal patterns on PV systems.",
    category: "Thermal Documentation",
    publishedAt: "2026-02-24",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1771950485/KDPPplqmAQe2fdphC9rf_YXJa2-JV05flIlTVm_0olNL6iPSbK44ss93VsnQ7__nTCrgrdk_GawIbQ3Ib_7sg3PFn5dR3U1euhfE28_rjnw_axeh2c.jpg",
      1200
    ),
    heroAlt: "Thermal inspection of a photovoltaic array",
    readingTime: "8 min read",
    relatedSlugs: [],
    listed: true,
    tier: "core",
  },
  {
    slug: "thermal101_blog",
    title: "Thermal Imaging 101: How to Spot What the Eye Can’t See",
    description:
      "An introduction to thermal imaging as a documentation method for apparent surface-temperature differences.",
    excerpt: "How thermal imaging records apparent temperature patterns.",
    category: "Thermal Documentation",
    publishedAt: "2025-08-14",
    author: "Jerome Sterling",
    heroImage: "/ThermalThumb.png",
    heroAlt: "Thermal documentation of a photovoltaic array",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "volumetric_blog",
    title: "Volumetric Data Explained: Aerial Insights for Smarter Site Decisions",
    description:
      "How photogrammetric surfaces can support volume context when a capture is scoped for that output.",
    excerpt: "Volume context from mapped surfaces.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-07-27",
    author: "Jerome Sterling",
    heroImage: "/stockpile.png",
    heroAlt: "Stockpile documentation used for volumetric context",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "topography_blog",
    title: "Understanding Topographic Maps",
    description:
      "How photogrammetric capture can support terrain and elevation context when scoped for that output.",
    excerpt: "Terrain context from mapped records.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-08-04",
    author: "Jerome Sterling",
    heroImage: "/STERFLIES_TOPODEMO.png",
    heroAlt: "Topographic context derived from photogrammetry",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "monthly-volumetric-reporting_blog",
    title: "Why Monthly Stockpile Reporting Beats the Once-a-Year Mindset",
    description:
      "Why recurring volumetric records can be more useful than a single annual snapshot.",
    excerpt: "Repeatable volume records over time.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2025-08-15",
    author: "Jerome Sterling",
    heroImage: "/VThumbnail.png",
    heroAlt: "Recurring volumetric site documentation",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "supporting",
  },
  {
    slug: "the-growing-necessity-of-drone-integration",
    title: "The Growing Necessity of Drone Integration in Modern Professional Workflows",
    description:
      "A legacy industry overview of aerial systems as one capture method among several.",
    excerpt: "Legacy industry overview of aerial capture.",
    category: "Mapping & Photogrammetry",
    publishedAt: "2026-02-11",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770830502/ImageForArticle_8660_17060939845694007_qtwoma.webp",
      1200
    ),
    heroAlt: "Aerial system used as a capture method",
    readingTime: "6 min read",
    relatedSlugs: [],
    listed: true,
    tier: "legacy",
  },
  {
    slug: "10-places-to-visit-in-san-antonio",
    title: "10 Places to Visit in San Antonio",
    description: "A legacy tourism article kept live but removed from the Articles index.",
    excerpt: "Legacy tourism article.",
    category: "Construction Documentation",
    publishedAt: "2026-02-02",
    author: "Jerome Sterling",
    heroImage: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770054988/csm_favorite_alamo_29649f9bee_t6c95f.jpg",
      1200
    ),
    heroAlt: "San Antonio landmark",
    readingTime: "5 min read",
    relatedSlugs: [],
    listed: false,
    tier: "legacy",
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
