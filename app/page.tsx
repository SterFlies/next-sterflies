import React from "react"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ButtonLink from "@/app/components/ButtonLink"
import { cloudinaryUrl, pageMetadata, siteConfig } from "@/app/config/site"
import { projects } from "@/app/projects/_data"

export const metadata = pageMetadata({
  title: "Forensic Mapping & Reality Capture | SterFlies",
  description:
    "SterFlies provides forensic mapping, photogrammetry, reality capture, thermal imaging, and technical site documentation for investigations, construction, and industrial work.",
  path: "/",
})

const audienceGroups = [
  {
    label: "Investigations & counsel",
    items: ["Forensic consultants", "Attorneys", "Expert witnesses", "Insurers / claims professionals"],
  },
  {
    label: "Health & safety",
    items: ["Industrial hygienists", "EHS / safety teams"],
  },
  {
    label: "Built environment",
    items: ["Construction professionals", "Engineers", "Facility operators"],
  },
]

const services = [
  {
    number: "01",
    title: "Forensic Mapping & Site Documentation",
    href: "/services/forensic-site-documentation",
    summary: "Capture existing site conditions before they change.",
    outputs: [
      "Orthomosaics",
      "3D models",
      "Aerial context",
      "Measurable scene records",
      "Interior and exterior documentation",
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
    summary: "Create measurable site data for construction, industrial, and technical workflows.",
    outputs: [
      "Orthomosaics",
      "Point clouds",
      "Surface models",
      "Volumetric data",
      "Progress documentation",
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
    summary: "Capture thermal data for inspection and documentation workflows where it is useful.",
    outputs: [
      "PV systems",
      "Building envelope",
      "Electrical systems",
      "Industrial assets",
    ],
    image: {
      src: "/ThermalThumb.png",
      alt: "Thermal documentation of a photovoltaic array",
    },
  },
]

const methods = [
  {
    number: "01",
    title: "Aerial photogrammetry",
    text: "Stills processed into orthomosaics, models, and spatial context when a site needs overview, measurement, or repeatable coverage.",
  },
  {
    number: "02",
    title: "Terrestrial reality capture",
    text: "Interior and close-range scanning when room relationships, access, and walkable context matter as much as the exterior.",
  },
  {
    number: "03",
    title: "Thermal imaging",
    text: "Infrared capture paired with visual imagery when temperature variation is relevant to inspection or documentation.",
  },
  {
    number: "04",
    title: "High-resolution aerial photography",
    text: "Still imagery for conditions, access, staging, and visual reference when a full spatial product is not required.",
  },
  {
    number: "05",
    title: "Point cloud / 3D processing",
    text: "Photogrammetric processing that turns field capture into models, clouds, and other reviewable spatial products.",
  },
]

const deliverableGroups = [
  {
    label: "Spatial",
    items: [
      { title: "Orthomosaics", text: "Scaled aerial maps that show site layout, access, and change over time." },
      { title: "3D models", text: "Navigable site geometry for remote review after conditions have changed." },
      { title: "Point clouds", text: "Spatial datasets that support measurement, context, and further analysis." },
      { title: "Site measurements", text: "Distances, areas, and volumes derived from the agreed capture scope." },
    ],
  },
  {
    label: "Visual",
    items: [
      { title: "Reality-capture walkthroughs", text: "Interior tours that preserve room layout, access, and annotated locations." },
      { title: "Annotated imagery", text: "Marked stills that connect observations to a specific location in the record." },
    ],
  },
  {
    label: "Thermal",
    items: [
      { title: "Thermal imagery", text: "Infrared frames and location context for inspection documentation." },
    ],
  },
  {
    label: "Supporting records",
    items: [
      { title: "Supporting files", text: "Organized exports and reports as specified for the engagement." },
    ],
  },
]

const process = [
  {
    number: "01",
    title: "Define the documentation objective",
    text: "Understand what conditions need to be preserved, measured, or reviewed.",
  },
  {
    number: "02",
    title: "Plan the capture",
    text: "Select appropriate aerial, terrestrial, thermal, or combined methods.",
  },
  {
    number: "03",
    title: "Document the site",
    text: "Capture field conditions systematically and safely.",
  },
  {
    number: "04",
    title: "Process & organize",
    text: "Create the agreed spatial, visual, and supporting deliverables.",
  },
  {
    number: "05",
    title: "Deliver for review",
    text: "Provide organized documentation for project teams and qualified professionals.",
  },
]

const featured = [
  {
    slug: "iaq-mold-documentation",
    title: "IAQ & Mold Existing Conditions Documentation",
    type: "Interior and exterior documentation",
    documented: "Interior walkthrough and exterior 3D model of existing building conditions.",
    why: "Preserve room layout, sampling context, and envelope conditions for later professional review.",
    deliverables: "Interior walkthrough, exterior model, and annotated views.",
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
        1400
      ),
      alt: "Combined interior and exterior 3D documentation of existing site conditions",
      object: "object-left",
    },
  },
  {
    slug: "65acresite",
    title: "65-Acre Site Mapping & Progress Documentation",
    type: "Mapping and progress documentation",
    documented: "Recurring aerial mapping of grading, utilities, pads, and access across a 65-acre development.",
    why: "Give project teams a shared spatial record of site conditions as work advanced.",
    deliverables: "Orthomosaic and shareable web map.",
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
        1400
      ),
      alt: "Aerial mapping of a 65-acre development site",
    },
  },
  {
    slug: "pv-farm-hotspots",
    title: "Solar PV Thermal Documentation",
    type: "Thermal documentation",
    documented: "RGB and thermal documentation of a photovoltaic array.",
    why: "Locate underperforming modules so maintenance can be targeted rather than walked field-wide.",
    deliverables: "Thermal imagery, defect snapshots, and location context.",
    image: {
      src: "/ThermalThumb.png",
      alt: "Thermal documentation of a photovoltaic array",
    },
  },
]

const HERO_OUTPUT = "/3D-website-data.png"
const HERO_SITE = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
  1200
)

export default function HomePage() {
  const featuredProjects = featured.map((item) => {
    const project = projects.find((entry) => entry.slug === item.slug)
    return { ...item, project }
  })

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="grid items-start gap-10 py-12 md:gap-14 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {siteConfig.name}
            </p>
            <h1 className="mt-3 max-w-[16ch] text-[2.375rem] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[2.75rem] lg:text-[3.5rem]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-4 max-w-[36rem] text-lg text-[var(--color-muted)] md:text-xl">
              {siteConfig.description}
            </p>
            <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
              SterFlies captures aerial and ground-based spatial data to preserve site conditions as reviewable, measurable records. The documentation supports measurement, collaboration, and technical analysis by qualified professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.cta.href}>{siteConfig.cta.label}</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                View Projects
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-5">
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111] sm:col-span-5">
              <Image
                src={HERO_OUTPUT}
                alt="3D reconstruction of documented site conditions with a measurable bounding volume"
                width={1600}
                height={900}
                priority
                className="aspect-[16/10] w-full object-cover object-center"
              />
              <figcaption className="border-t border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
                3D reconstruction
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] sm:col-span-5">
              <Image
                src={HERO_SITE}
                alt="Aerial mapping of a 65-acre development site"
                width={1200}
                height={500}
                className="aspect-[21/9] w-full object-cover"
              />
              <figcaption className="border-t border-[var(--color-line)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
                Mapped site conditions
              </figcaption>
            </figure>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Audience"
            title="Field documentation built for professional review"
            description="SterFlies produces spatial and visual records. Qualified experts, investigators, engineers, attorneys, and other professionals interpret those records."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {audienceGroups.map((group) => (
              <div key={group.label} className="border-t border-[var(--color-ink)] pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-base text-[var(--color-ink)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Services"
            title="Documentation selected for the work"
            description="Services are organized by the record being produced, not by a piece of hardware."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <article key={service.number} className="flex flex-col">
                <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={900}
                    height={600}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.14em] text-[var(--color-muted)]">{service.number}</p>
                <h3 className="mt-2 text-[1.375rem] font-semibold leading-snug tracking-tight md:text-[1.5rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-[var(--color-ink)]">
                  {service.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                >
                  View service
                </Link>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Methods"
            title="Capture methods selected for the site"
            description="Aerial systems, terrestrial scanners, thermal sensors, and processing software are tools. The method is chosen from site conditions and the deliverable that is actually needed."
          />
          <ol className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {methods.map((method) => (
              <li key={method.number} className="grid gap-2 py-6 md:grid-cols-[3rem_minmax(0,16rem)_minmax(0,1fr)] md:items-baseline md:gap-8">
                <p className="text-xs tracking-[0.14em] text-[var(--color-muted)]">{method.number}</p>
                <h3 className="text-base font-semibold">{method.title}</h3>
                <p className="text-base leading-relaxed text-[var(--color-muted)]">{method.text}</p>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Deliverables"
            title="Field data built for review"
            description="Not every project includes every product. Deliverables are scoped to the site and the questions the record needs to support."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {deliverableGroups.map((group) => (
              <div key={group.label} className="border-t border-[var(--color-ink)] pt-5">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {group.label}
                </p>
                <ul className="mt-5 space-y-5">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Projects"
            title="Selected Field Documentation"
            description="Examples spanning interior reality capture, mapping, and thermal documentation."
          />
          <div className="mt-12 space-y-12">
            {featuredProjects.map((item) => {
              if (!item.project) return null
              return (
                <article
                  key={item.slug}
                  className="grid gap-6 border-t border-[var(--color-line)] pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12"
                >
                  <Link href={`/projects/${item.slug}`} className="block overflow-hidden rounded-[6px] border border-[var(--color-line)]">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={1400}
                      height={900}
                      className={`aspect-[16/10] w-full object-cover ${item.image.object ?? ""}`}
                    />
                  </Link>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <dl className="mt-5 space-y-4 text-sm leading-relaxed md:text-base">
                      <div>
                        <dt className="font-semibold">What was documented</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{item.documented}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Why it mattered</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{item.why}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold">Deliverables</dt>
                        <dd className="mt-1 text-[var(--color-muted)]">{item.deliverables}</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/projects/${item.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      View project
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Process"
            title="A documentation workflow"
            description="The work is scoped to the record required, not sold as a flight package."
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {process.map((step) => (
              <li key={step.number} className="border-t border-[var(--color-ink)] pt-5">
                <p className="text-xs tracking-[0.14em] text-[var(--color-muted)]">{step.number}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader
            eyebrow="Qualifications"
            title="Field credentials"
            description="Operations are conducted under an FAA Part 107 remote pilot certificate, with OSHA 10 construction safety training and insured operations."
          />
          <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
            <li className="flex min-h-[3.5rem] items-center justify-center gap-3 bg-[var(--color-surface)] px-5 py-4">
              <Image src="/Part 107.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-sm font-medium">FAA Part 107</span>
            </li>
            <li className="flex min-h-[3.5rem] items-center justify-center gap-3 bg-[var(--color-surface)] px-5 py-4">
              <Image
                src="https://res.cloudinary.com/dzlmoyomq/image/upload/f_auto,q_auto,c_limit,w_160/v1771954912/OSHA-10hr-Logo-150x150_g3q3jp.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-medium">OSHA 10</span>
            </li>
            <li className="flex min-h-[3.5rem] items-center justify-center bg-[var(--color-surface)] px-5 py-4">
              <span className="text-sm font-medium">Insured Operations</span>
            </li>
          </ul>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {siteConfig.companyRelationship || siteConfig.relationshipFallback}
          </p>
        </SiteContainer>
      </section>

      <section className="bg-[var(--color-ink)] py-14 text-white md:py-20">
        <SiteContainer className="max-w-3xl">
          <h2 className="text-[1.75rem] font-semibold tracking-tight md:text-[2.125rem]">
            Need a site documented?
          </h2>
          <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-white/75 md:text-lg">
            Tell us what needs to be captured, measured, or preserved and we can determine the appropriate documentation approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
            >
              {siteConfig.cta.label}
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white/25 px-5 text-sm font-semibold text-white"
            >
              Contact SterFlies
            </Link>
          </div>
        </SiteContainer>
      </section>
    </>
  )
}
