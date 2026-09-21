import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ButtonLink from "@/app/components/ButtonLink"
import ServiceHero from "@/app/components/service/ServiceHero"
import PageCta from "@/app/components/service/PageCta"
import { cloudinaryUrl } from "@/app/config/site"

export const metadata: Metadata = {
  title: "Services | SterFlies",
  description:
    "Forensic mapping, photogrammetry, reality capture, and thermal documentation for investigations, construction, and industrial work.",
  alternates: { canonical: "/services" },
}

const primary = [
  {
    number: "01",
    title: "Forensic Mapping & Site Documentation",
    href: "/services/forensic-site-documentation",
    cta: "View Forensic Mapping",
    summary: "Preserve site conditions as measurable visual and spatial records for later professional review.",
    audiences: [
      "Forensic consultants",
      "Attorneys",
      "Expert witnesses",
      "Industrial hygienists",
      "Safety / EHS teams",
      "Engineers",
      "Insurers",
      "Construction professionals",
    ],
    methods: [
      "Aerial imagery",
      "Photogrammetry",
      "Terrestrial / interior capture",
      "360 documentation",
      "High-resolution photography",
      "Thermal where appropriate",
    ],
    deliverables: [
      "Orthomosaics",
      "3D models",
      "Point clouds",
      "Site imagery",
      "Walkthroughs",
      "Measurements",
      "Annotated imagery",
      "Supporting files",
    ],
    image: {
      src: "/3DThumbnail.png",
      alt: "3D reconstruction of a structure under construction",
    },
  },
  {
    number: "02",
    title: "Mapping & Photogrammetry",
    href: "/services/mapping",
    cta: "View Mapping & Photogrammetry",
    summary: "Create measurable 2D and 3D site records for construction, industrial, and technical workflows.",
    audiences: [
      "Construction progress",
      "Existing conditions",
      "Industrial sites",
      "Site mapping",
      "Stockpile / volume documentation",
      "Large properties",
      "Earthwork / terrain context",
      "Recurring project records",
    ],
    methods: [
      "Overlapping image capture",
      "Photogrammetric processing",
      "Repeatable site coverage",
    ],
    deliverables: [
      "Orthomosaics",
      "Point clouds",
      "3D models",
      "Volumetric outputs",
      "Surface / elevation outputs",
      "High-resolution imagery",
      "Agreed technical exports",
    ],
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
        900
      ),
      alt: "Aerial mapping of a 65-acre development site",
    },
  },
  {
    number: "03",
    title: "Thermal Documentation",
    href: "/thermal/Applications",
    cta: "View Thermal Documentation",
    summary:
      "Temperature-pattern documentation used to support inspection and technical review workflows.",
    audiences: [
      "Solar PV",
      "Electrical systems",
      "Building envelope",
      "Industrial assets",
      "Roofing / moisture-investigation support",
    ],
    methods: [
      "Radiometric thermal capture",
      "Paired RGB context",
      "Location-referenced stills",
    ],
    deliverables: [
      "Thermal imagery",
      "RGB context frames",
      "Location context",
      "Supporting files as scoped",
    ],
    image: {
      src: "/ThermalThumb.png",
      alt: "Thermal documentation of a photovoltaic array",
    },
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Services"
        title="Forensic Mapping, Reality Capture & Technical Site Documentation"
        description="SterFlies documents physical site conditions using aerial, terrestrial, thermal, and photogrammetric capture methods selected according to the site, project objective, and required deliverables."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/projects", label: "View Projects" }}
      />

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Primary services"
            title="Documentation selected for the work"
            description="Services are organized by the record being produced. Hardware, sensors, and software are methods used inside those services."
          />
          <div className="mt-12 space-y-16">
            {primary.map((service) => (
              <article
                key={service.number}
                className="grid gap-8 border-t border-[var(--color-line)] pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12"
              >
                <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={900}
                    height={600}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.14em] text-[var(--color-muted)]">{service.number}</p>
                  <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight md:text-[1.75rem]">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
                    {service.summary}
                  </p>
                  <div className="mt-6 grid gap-8 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Typical uses
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {service.audiences.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Possible deliverables
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm">
                        {service.deliverables.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mt-5 text-sm text-[var(--color-muted)]">
                    Capture methods may include {service.methods.join(", ")}. Not every project includes every deliverable.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href={service.href}>{service.cta}</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section id="reality-capture" className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Capability"
              title="Interior & Ground-Based Reality Capture"
              description="Terrestrial capture is used when aerial coverage cannot preserve the context that later review requires."
            />
            <p className="mt-6 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
              Ground-based documentation is selected for interiors, room relationships, equipment spaces, access routes, IAQ and mold environments, and other areas where aerial systems cannot capture useful context. Combined aerial and terrestrial records can preserve a more complete site condition than either method alone.
            </p>
            <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
              Tools such as Matterport are used when an interactive walkthrough is the appropriate deliverable. The product is the interior record, not the scanner.
            </p>
            <Link
              href="/services/forensic-site-documentation#exterior-interior"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View aerial and ground-based capture
            </Link>
          </div>
          <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
            <Image
              src={cloudinaryUrl(
                "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
                1200
              )}
              alt="Combined interior and exterior 3D documentation of existing site conditions"
              width={1200}
              height={800}
              className="aspect-[16/10] w-full object-cover object-left"
            />
          </figure>
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
