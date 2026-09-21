import type { Metadata } from "next"

export const siteConfig = {
  name: "SterFlies",
  tagline: "Forensic Mapping & Reality Capture",
  description:
    "Technical field documentation for investigations, construction, and industrial work.",
  url: "https://sterflies.com",
  email: "jerome.sterling@sterflies.com",
  location: "San Antonio, Texas",
  serviceRegion: "San Antonio & Texas Hill Country",
  /**
   * Reserved for a verified legal entity name. Do not publish until approved.
   * Visible copyright currently uses `name` only.
   */
  legalName: "",
  /**
   * Leave empty until the DBA relationship is confirmed for public use.
   * When approved, set to: "SterFlies, a DBA of Spear & Lancaster, LLC."
   * Footer, About, and homepage already read this single field.
   */
  companyRelationship: "",
  relationshipFallback:
    "SterFlies provides technical field documentation that can support investigations, expert review, construction records, and industrial workflows.",
  serviceArea:
    "Based in the San Antonio area, serving project sites throughout Greater Texas Hill Country and nearby regions when access and project conditions allow.",
  cta: {
    label: "Discuss a Project",
    href: "/contact",
  },
  newsletter: {
    action:
      "https://sterflies.us9.list-manage.com/subscribe/post?u=014a7cec35ea7dc291dca3434&id=faf43f94da&f_id=00a073e1f0",
    honeypot: "b_014a7cec35ea7dc291dca3434_faf43f94da",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeromesterling/" },
    { label: "YouTube", href: "https://youtube.com/@SterFlies" },
    { label: "Instagram", href: "https://instagram.com/sterflies" },
    { label: "Facebook", href: "https://facebook.com/SterFlies" },
  ],
} as const

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const serviceNav = [
  { href: "/services", label: "All services" },
  {
    href: "/services/forensic-site-documentation",
    label: "Forensic Mapping & Site Documentation",
  },
  { href: "/services/mapping", label: "Mapping & Photogrammetry" },
  { href: "/thermal/Applications", label: "Thermal Documentation" },
  {
    href: "/services/forensic-site-documentation#exterior-interior",
    label: "Reality Capture",
  },
] as const

export function cloudinaryUrl(src: string, width = 1600) {
  if (!src.includes("/image/upload/") || src.includes("/image/upload/f_auto")) {
    return src
  }
  return src.replace(
    "/image/upload/",
    `/image/upload/f_auto,q_auto,c_limit,w_${width}/`
  )
}

export const defaultOgImage = {
  url: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp",
    1200
  ),
  width: 1200,
  height: 630,
  alt: "Point cloud used as a spatial record of a documented site",
} as const

export function pageMetadata({
  title,
  description,
  path,
  noindex,
  image,
}: {
  title: string
  description: string
  path: string
  noindex?: boolean
  image?: { url: string; width?: number; height?: number; alt: string }
}): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [image ?? defaultOgImage],
    },
  }
}
