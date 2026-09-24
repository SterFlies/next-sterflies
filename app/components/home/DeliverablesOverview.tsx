import Image from "next/image"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import { cloudinaryUrl } from "@/app/config/site"

const groups = [
  {
    label: "Spatial",
    caption: "Orthomosaic",
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png",
        800
      ),
      alt: "Orthomosaic map of a documented site",
    },
    items: [
      { title: "Orthomosaics", text: "Scaled aerial maps of site layout, access, and change over time." },
      { title: "3D models", text: "Navigable site geometry for remote review after conditions change." },
      { title: "Point clouds", text: "Spatial datasets that support measurement context and further review." },
      { title: "Measurements", text: "Distances, areas, and volumes when the capture is scoped for them." },
    ],
  },
  {
    label: "Visual",
    caption: "Existing conditions",
    image: {
      src: "/3DThumbnail.png",
      alt: "Photogrammetric 3D reconstruction of a structure",
    },
    items: [
      { title: "Site imagery", text: "High-resolution stills of conditions, access, and staging." },
      { title: "Annotated imagery", text: "Marked views tied to a specific location in the record." },
      { title: "Walkthroughs", text: "Interior tours that preserve room layout and access." },
    ],
  },
  {
    label: "Thermal",
    caption: "Thermal documentation",
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png",
        800
      ),
      alt: "Radiometric thermal and RGB documentation of a photovoltaic array",
    },
    items: [
      { title: "Thermal imagery", text: "Apparent temperature patterns for inspection documentation." },
      { title: "RGB context", text: "Corresponding visual frames so a pattern can be found on the asset." },
      { title: "Location context", text: "Where on the site or array the frame belongs." },
    ],
  },
  {
    label: "Supporting",
    caption: "Organized record",
    image: {
      src: cloudinaryUrl(
        "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
        800
      ),
      alt: "Annotated interior documentation used to preserve location context",
    },
    items: [
      { title: "Reports", text: "Written supporting material when it is part of the agreed scope." },
      { title: "Exports", text: "Agreed file formats for the teams who will review the record." },
      { title: "Supporting files", text: "Organized imagery and data delivered with the spatial products." },
    ],
  },
]

export default function DeliverablesOverview() {
  return (
    <section className="border-b border-[var(--color-line)] py-12 md:py-16">
      <SiteContainer>
        <SectionHeader
          eyebrow="Deliverables"
          title="What the record can include"
          description="Deliverables are selected according to the project objective and agreed scope. Not every project includes every product."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {groups.map((group) => (
            <div key={group.label} className="border-t border-[var(--color-ink)] pt-4">
              <figure className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  width={800}
                  height={500}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="border-t border-[var(--color-line)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {group.caption}
                </figcaption>
              </figure>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {group.label}
              </p>
              <ul className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  )
}
