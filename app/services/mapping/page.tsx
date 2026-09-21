import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import ApplicationList from "@/app/components/service/ApplicationList"
import DeliverableList from "@/app/components/service/DeliverableList"
import ProjectProof from "@/app/components/service/ProjectProof"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Mapping & Photogrammetry | SterFlies",
  description:
    "Create measurable 2D and 3D site records using coordinated image capture and photogrammetric processing.",
  path: "/services/mapping",
})

const SITE_AERIAL = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
  1400
)

export default function MappingPage() {
  return (
    <>
      <ServiceHero
        parent={{ href: "/services", label: "Services" }}
        eyebrow="Service 02"
        title="Mapping & Photogrammetry"
        description="Create measurable 2D and 3D site records using coordinated image capture and photogrammetric processing."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/projects/65acresite", label: "View Relevant Work" }}
        image={{
          src: SITE_AERIAL,
          alt: "Aerial mapping of a 65-acre development site",
          priority: true,
        }}
      />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Applications"
            title="Where mapped records are used"
            description="Mapping is selected when a site needs overview, measurement, or a repeatable spatial record over time."
          />
          <ApplicationList
            items={[
              { title: "Construction progress", text: "Shared spatial records of grading, utilities, pads, and access as work advances." },
              { title: "Existing conditions", text: "A baseline of current layout before design or construction changes the site." },
              { title: "Site mapping", text: "Scaled coverage of property layout, access, and surrounding context." },
              { title: "Stockpile / volumetric documentation", text: "Volume context derived from the processed surface when scoped." },
              { title: "Industrial sites", text: "Yards, plants, and operational areas where a measurable overview is useful." },
              { title: "Large properties", text: "Coverage that is difficult to assemble from ground photography alone." },
              { title: "Earthwork / terrain context", text: "Surface and elevation context for planning and later comparison." },
              { title: "Recurring project records", text: "Repeatable capture so later visits can be compared to an earlier state." },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader eyebrow="Deliverables" title="Mapped outputs" />
          <DeliverableList
            note="Deliverables are selected according to project scope, site conditions, and documentation objectives. Technical exports such as GeoTIFF, LAS, or OBJ are provided when the processing method and engagement specify them."
            items={[
              { title: "Orthomosaics", text: "Scaled aerial maps that show site layout, access, and change over time." },
              { title: "Point clouds", text: "Spatial datasets that support measurement, context, and further analysis." },
              { title: "3D models", text: "Reconstructed site geometry for remote review and communication." },
              { title: "Volumetric data", text: "Cut, fill, or stockpile quantities when the capture is scoped for volume." },
              { title: "Surface / elevation outputs", text: "Terrain context derived from the processed model when requested." },
              { title: "High-resolution imagery", text: "Still coverage for conditions, staging, and visual reference." },
              { title: "Technical exports", text: "Agreed files for GIS, CAD, or review workflows." },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Method"
              title="How photogrammetry works"
              description="Overlapping stills are captured across the site, aligned through common features, and reconstructed into measurable spatial products."
            />
            <ol className="mt-8 space-y-4 text-base leading-relaxed">
              <li>
                <span className="font-semibold">01 — Overlapping image capture.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  A planned set of stills covers the area with enough overlap to reconstruct geometry.
                </span>
              </li>
              <li>
                <span className="font-semibold">02 — Reconstruction.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Processing software aligns the images and builds a dense spatial model of the captured surface.
                </span>
              </li>
              <li>
                <span className="font-semibold">03 — Measurable outputs.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  The model can be exported as orthomosaics, point clouds, meshes, or other agreed products.
                </span>
              </li>
            </ol>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              Measurement quality depends on capture geometry, processing, and any control used for the engagement. It is not a universal accuracy claim.
            </p>
          </div>
          <div>
            <SectionHeader
              eyebrow="Positioning"
              title="Photographs versus mapped records"
              description="A photograph documents one viewpoint. A mapped dataset preserves spatial relationships across an area."
            />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Individual stills remain useful for specific observations. They do not, by themselves, reconstruct distances, layout, or how one location relates to another. Photogrammetric products exist to keep those relationships available after the site has changed.
            </p>
            <div className="mt-8 overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111]">
              <iframe
                title="Example orthomosaic of a mapped construction site"
                src="https://cloud.pix4d.com/dataset/2343984/map?shareToken=9dc76459-aab0-4309-8d9f-5d8e89f663cc"
                className="aspect-[16/10] w-full"
                allow="fullscreen"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Example mapped record
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Project"
            title="Selected field documentation"
            description="An example of recurring aerial mapping. No universal accuracy claim is attached to this project."
          />
          <ProjectProof
            type="Mapping and progress documentation"
            title="65-Acre Site Mapping & Progress Documentation"
            href="/projects/65acresite"
            image={{
              src: SITE_AERIAL,
              alt: "Aerial mapping of a 65-acre development site",
            }}
            documented="Recurring aerial mapping of grading, utilities, pads, and access across a 65-acre development."
            method="Coordinated still capture processed into an orthomosaic and shareable web map."
            why="Give project teams a shared spatial record of site conditions as work advanced."
            deliverables="Orthomosaic and shareable web map."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Articles" title="Related reading" />
          <RelatedArticles
            items={[
              { href: "/blog/orthomosaic_blog", title: "Orthomosaic Mapping" },
              { href: "/blog/3d_model", title: "3D Models" },
              { href: "/blog/volumetric_blog", title: "Volumetric Data" },
              { href: "/blog/topography_blog", title: "Topographic Maps" },
              { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Monitoring" },
            ]}
          />
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
