import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import { cloudinaryUrl } from "@/app/config/site"

const services = [
  {
    number: "01",
    title: "Forensic Mapping & Site Documentation",
    href: "/services/forensic-site-documentation",
    summary:
      "Preserve changing site conditions as measurable visual and spatial records for later professional review.",
    outputs: ["Orthomosaics", "3D models", "Point clouds", "Annotated imagery", "Supporting files"],
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790269822/forensic-mapping-hero_uro4wv.png",
        1200
      ),
      alt: "Forensic mapping 3D site reconstruction with spatial measurements",
    },
  },
  {
    number: "02",
    title: "Mapping & Photogrammetry",
    href: "/services/mapping",
    summary:
      "Create measurable 2D and 3D site records for construction, industrial, existing-condition, and technical workflows.",
    outputs: ["Orthomosaics", "Point clouds", "Surface and elevation outputs", "Volumetric outputs", "Progress records"],
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790269988/mapping-photogrammetry_ypnax8.png",
        1400
      ),
      alt: "Photogrammetry mapping interface showing 3D site reconstruction, orthomosaic, elevation, and point cloud data",
    },
  },
  {
    number: "03",
    title: "Thermal",
    href: "/thermal/Applications",
    summary:
      "Capture apparent temperature patterns with corresponding visual and location context where temperature is relevant to the work.",
    outputs: ["Thermal imagery", "RGB context frames", "Location context", "PV, envelope, and asset records"],
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790270143/thermal_nocmwf.png",
        1200
      ),
      alt: "Thermal inspection imagery showing temperature anomalies across a solar array",
    },
  },
  {
    number: "04",
    title: "Reality Capture",
    href: "/services#reality-capture",
    summary:
      "Document interiors and ground-level conditions that aerial mapping alone cannot preserve, including room relationships, access, and walkable context.",
    outputs: ["Interior walkthroughs", "Annotated locations", "Room and access context", "Combined interior and exterior records"],
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790270345/interiorscan_nu3jqu.png",
        1400
      ),
      alt: "Industrial interior reality capture 3D scan with annotations and measurement tools",
    },
  },
]

export default function ServiceOverview() {
  return (
    <section className="border-b border-[var(--color-line)] py-12 md:py-16">
      <SiteContainer>
        <SectionHeader
          eyebrow="Services"
          title="Documentation selected for the work"
          description="Four records, not four pieces of hardware. The capture method follows the site, the objective, and the deliverables that later review actually needs."
        />
        <div className="mt-10 grid border border-[var(--color-line)] md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col border-b border-[var(--color-line)] bg-[var(--color-surface)] p-5 last:border-b-0 sm:p-6 md:border-b-0 md:odd:border-r md:[&:nth-child(-n+2)]:border-b"
            >
              <div className="overflow-hidden border border-[var(--color-line)]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={900}
                  height={560}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[19/10] w-full object-cover object-center"
                />
              </div>
              <p className="mt-5 font-mono text-xs tracking-[0.14em] text-[var(--color-muted)]">{service.number}</p>
              <h3 className="mt-2 text-[1.35rem] font-semibold leading-snug tracking-tight md:text-[1.5rem]">
                <Link href={service.href} className="hover:text-[var(--color-accent)]">
                  {service.title}
                </Link>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{service.summary}</p>
              <ul className="mt-4 grid gap-x-4 gap-y-1.5 text-sm text-[var(--color-ink)] sm:grid-cols-2">
                {service.outputs.map((output) => (
                  <li key={output} className="border-t border-[var(--color-line)] pt-1.5">
                    {output}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
              >
                View service
              </Link>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}
