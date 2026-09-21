import { siteConfig } from "@/app/config/site"

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "SterFlies services",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Forensic Mapping & Site Documentation",
        url: `${siteConfig.url}/services/forensic-site-documentation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mapping & Photogrammetry",
        url: `${siteConfig.url}/services/mapping`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Thermal Documentation",
        url: `${siteConfig.url}/thermal/Applications`,
      },
    },
  ],
}

export default function OrganizationJsonLd() {
  const description = siteConfig.companyRelationship
    ? `${siteConfig.description} ${siteConfig.companyRelationship}`
    : siteConfig.description

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    email: siteConfig.email,
    areaServed: [
      { "@type": "City", name: "San Antonio" },
      { "@type": "Place", name: "Texas Hill Country" },
    ],
    sameAs: siteConfig.social.map((item) => item.href),
    hasOfferCatalog: offerCatalog,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
