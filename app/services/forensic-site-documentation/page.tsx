import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import ApplicationList from "@/app/components/service/ApplicationList"
import DeliverableList from "@/app/components/service/DeliverableList"
import ProcessSteps from "@/app/components/service/ProcessSteps"
import ProjectProof from "@/app/components/service/ProjectProof"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import ContextSidebar from "@/app/components/practice/ContextSidebar"
import DepthBlock from "@/app/components/practice/DepthBlock"
import WithRail from "@/app/components/practice/WithRail"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Forensic Mapping & Site Documentation | SterFlies",
  description:
    "Preserve changing site conditions through coordinated aerial, ground-based, and spatial documentation for later professional review.",
  path: "/services/forensic-site-documentation",
})

const IAQ_VIDEO =
  "https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/IAQ_-_DEMO_showcase_qo4nav.mp4"
const IAQ_POSTER = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
  1400
)
const IAQ_STILL = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
  1400
)

export default function ForensicMappingPage() {
  return (
    <>
      <ServiceHero
        parent={{ href: "/services", label: "Services" }}
        eyebrow="Service 01"
        title="Forensic Mapping & Site Documentation"
        description="Preserve changing site conditions through coordinated aerial, ground-based, and spatial documentation."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/projects/iaq-mold-documentation", label: "View Relevant Work" }}
        image={{
          src: "/3D-website-data.png",
          alt: "3D reconstruction of documented site conditions with a measurable bounding volume",
          priority: true,
        }}
      />

      <WithRail
        sidebar={
          <ContextSidebar
            articles={[
              {
                href: "/blog/drone-mapping-forensic-site-investigations",
                title: "How Drone Mapping Can Support Forensic Site Investigations",
              },
              {
                href: "/blog/forensic-mapping-incident-investigations",
                title: "Forensic Mapping for Incident Investigations",
              },
              {
                href: "/blog/what-is-forensic-site-documentation",
                title: "What Is Forensic Site Documentation",
              },
              {
                href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog",
                title: "Why Site Conditions Should Be Documented Before They Are Altered",
              },
            ]}
            services={[{ href: "/services/mapping", title: "Mapping & Photogrammetry" }]}
            projects={[
              {
                href: "/projects/iaq-mold-documentation",
                title: "IAQ & Mold Existing Conditions Documentation",
              },
            ]}
          />
        }
      >
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Purpose"
            title="Why site documentation matters"
            description="Site conditions change. Equipment is moved, repairs begin, demolition proceeds, weather alters surfaces, temporary elements disappear, and access changes. Documentation preserves spatial context for later review after those conditions are no longer available on site."
          />
        </SiteContainer>
      </section>

      <DepthBlock eyebrow="Context" title="Why spatial context matters">
        <p>
          A photograph records one viewpoint. An investigation, claim, or design review usually needs something else: how a location sat in relation to access, equipment, adjoining rooms, or the rest of the site. Once equipment is moved or a surface is repaired, that relationship is gone unless it was recorded as a spatial whole.
        </p>
        <p>
          Forensic mapping exists to keep that whole available. SterFlies captures and organizes the record. It does not determine causation, responsibility, or the meaning of a condition. Those conclusions remain with the qualified professional reviewing the work.
        </p>
      </DepthBlock>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Scope"
            title="What can be documented"
            description="Capture is selected for the site and the questions the record needs to support. The examples below reflect current field documentation work, not every possible environment."
          />
          <ApplicationList
            items={[
              { title: "Incident scenes", text: "Layout, access, and surrounding conditions before they are cleared." },
              { title: "Construction sites", text: "Progress, existing conditions, and staging as work advances." },
              { title: "Industrial facilities", text: "Yards, equipment surroundings, and operational context." },
              { title: "Excavations / trenches", text: "Open conditions that will be backfilled or altered." },
              { title: "Building exteriors", text: "Envelope, roof geometry, drainage, and access." },
              { title: "Interiors", text: "Room relationships, corridors, and close-range conditions." },
              { title: "Equipment surroundings", text: "Clearances, placement, and adjacent work areas." },
              { title: "IAQ / mold environments", text: "Interior layout and exterior context for sampling review." },
              { title: "Property conditions", text: "Existing-condition records for later comparison." },
              { title: "Infrastructure", text: "Site layout and surrounding conditions where access allows." },
            ]}
          />
        </SiteContainer>
      </section>

      <section id="exterior-interior" className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Methods"
            title="Aerial + ground-based capture"
            description="Aerial and terrestrial methods are complementary. Combined capture can preserve more complete site context than either method alone."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="border-t border-[var(--color-ink)] pt-5">
              <h3 className="text-lg font-semibold">Aerial capture</h3>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-[var(--color-muted)]">
                <li>Overall layout</li>
                <li>Surrounding conditions</li>
                <li>Top-down context</li>
                <li>Difficult-access exterior areas</li>
              </ul>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-5">
              <h3 className="text-lg font-semibold">Ground / interior capture</h3>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-[var(--color-muted)]">
                <li>Room relationships</li>
                <li>Corridors and access routes</li>
                <li>Equipment and close-range detail</li>
                <li>Interior continuity</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 max-w-[46rem] text-base leading-relaxed text-[var(--color-muted)]">
            Interactive walkthroughs, including Matterport, are used when a navigable interior record is the appropriate deliverable. The IAQ project below shows how exterior reconstruction and interior capture can be paired.
          </p>
          <figure className="mt-10 overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111]">
            <div className="relative aspect-video w-full">
              <video
                controls
                playsInline
                preload="metadata"
                poster={IAQ_POSTER}
                className="h-full w-full object-cover"
              >
                <source src={IAQ_VIDEO} type="video/mp4" />
              </video>
            </div>
            <figcaption className="border-t border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Interior walkthrough with exterior 3D context
            </figcaption>
          </figure>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Deliverables"
            title="Records selected for the engagement"
          />
          <DeliverableList
            note="Deliverables are selected according to project scope, site conditions, and documentation objectives."
            items={[
              { title: "Orthomosaic", text: "Scaled aerial map of site layout, access, and surrounding conditions." },
              { title: "3D model", text: "Navigable geometry for remote review after conditions have changed." },
              { title: "Point cloud", text: "Spatial dataset that can support measurement and further analysis." },
              { title: "High-resolution site imagery", text: "Still photography for conditions, access, and visual reference." },
              { title: "Matterport / interactive walkthrough", text: "Interior tour that preserves room layout and annotated locations." },
              { title: "Measurements", text: "Distances, areas, or volumes derived from the agreed capture scope." },
              { title: "Annotated imagery", text: "Marked stills that connect observations to a location in the record." },
              { title: "Supporting files", text: "Organized exports as specified for the engagement." },
            ]}
          />
        </SiteContainer>
      </section>

      <DepthBlock eyebrow="Measurement" title="Measurement considerations" surface>
        <p>
          Distances, areas, and volumes can be taken from an orthomosaic, point cloud, or model when the capture was planned for measurement. Overlap, surface texture, occlusions, and any control used for the engagement all affect what can be measured later. A number from the model should be read with that method in mind.
        </p>
        <p>
          Photogrammetric measurement is not a licensed land survey, an as-built certification, or a stamped engineering product. When a project requires a surveyor, engineer, or other licensed measurement, that work stays with the licensed professional. The SterFlies record can still provide context around it.
        </p>
      </DepthBlock>

      <DepthBlock eyebrow="Field conditions" title="Working around site constraints">
        <p>
          Sites limit what can be captured. Active work, restricted airspace, weather, interior lighting, reflective surfaces, and access controls all change the plan. The useful response is to state what was reachable and what was not, then choose a method that still preserves the conditions the review needs.
        </p>
        <p>
          Aerial coverage is often the right overview and the wrong interior record. Ground-based capture is often the right room record and the wrong site map. Combining them is a scope decision, not a default package. Flight limits, scan line of sight, and safety requirements are planned before capture, not repaired afterward.
        </p>
      </DepthBlock>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Applications"
            title="Professional applications"
            description="SterFlies produces the record. Qualified professionals interpret that record."
          />
          <ApplicationList
            items={[
              { title: "Incident investigation", text: "Preserve scene layout and surrounding conditions for later review." },
              { title: "Construction / defect documentation", text: "Record existing conditions before they are covered or altered." },
              { title: "Industrial hygiene / IAQ", text: "Connect interior sampling context with exterior building conditions." },
              { title: "Insurance / property loss", text: "Document conditions that support later claims review." },
              { title: "Expert review", text: "Provide spatial context that photographs alone often cannot reconstruct." },
              { title: "Construction safety", text: "Preserve access, staging, and site layout for later analysis." },
              { title: "Facility documentation", text: "Create a reviewable record of current building and site conditions." },
            ]}
          />
        </SiteContainer>
      </section>

      <DepthBlock eyebrow="Applications" title="How the record is used">
        <p>
          Incident and investigation work uses the record to preserve layout, access, and surrounding conditions before a scene is cleared. Construction and industrial work uses it to keep exposed conditions, staging, and site layout available after they are covered or changed. Industrial hygiene and IAQ work uses interior continuity and exterior context so later sampling review can be located in the building, without SterFlies performing the assessment.
        </p>
        <p>
          In each case the documentation supports someone else’s professional judgment. Expert, insurance, and facility reviewers can use the spatial record when photographs and notes no longer reconstruct the site. The record does not replace that review.
        </p>
      </DepthBlock>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader eyebrow="Workflow" title="A documentation workflow" />
          <ProcessSteps
            steps={[
              { number: "01", title: "Define documentation objective", text: "Identify what conditions need to be preserved, measured, or reviewed." },
              { number: "02", title: "Review access and site conditions", text: "Determine what can be captured safely from the air and on the ground." },
              { number: "03", title: "Select capture methods", text: "Choose aerial, terrestrial, thermal, or combined methods for the required record." },
              { number: "04", title: "Document the site", text: "Capture field conditions systematically." },
              { number: "05", title: "Process and organize data", text: "Create the agreed spatial, visual, and supporting deliverables." },
              { number: "06", title: "Deliver records for review", text: "Provide organized documentation for project teams and qualified professionals." },
            ]}
          />
          <p className="mt-10 max-w-[42rem] text-sm leading-relaxed text-[var(--color-muted)]">
            SterFlies captures and organizes field conditions. Interpretation of those conditions remains with the appropriate qualified professional.
          </p>
        </SiteContainer>
      </section>

      <DepthBlock eyebrow="Limits" title="Professional interpretation and limitations" surface>
        <p>
          The practice preserves visible and spatial conditions. It does not determine accident causation, mold or IAQ conclusions, code compliance, structural adequacy, or legal responsibility. Annotations mark locations. They do not validate laboratory results or opinions placed beside them.
        </p>
        <p>
          Operational work is conducted under an FAA Part 107 remote pilot certificate where aircraft are used, with OSHA 10 construction safety training and insured operations. Those credentials support field access and flight operations. They are not industrial-hygiene, engineering, or surveying licenses.
        </p>
      </DepthBlock>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Project"
            title="Selected field documentation"
            description="An example of combined interior and exterior documentation. Results are limited to what was captured and delivered."
          />
          <ProjectProof
            type="Interior and exterior documentation"
            title="IAQ & Mold Existing Conditions Documentation"
            href="/projects/iaq-mold-documentation"
            image={{
              src: IAQ_STILL,
              alt: "Combined interior and exterior 3D documentation of existing site conditions",
              object: "object-left",
            }}
            documented="Interior walkthrough and exterior 3D model of existing building conditions."
            method="Ground-based interior capture paired with exterior photogrammetric reconstruction."
            why="Preserve room layout, sampling context, and envelope conditions for later professional review."
            deliverables="Interior walkthrough, exterior model, and annotated views."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Articles" title="Related reading" />
          <RelatedArticles
            items={[
              { href: "/blog/forensic-mapping-incident-investigations", title: "Forensic Mapping for Incident Investigations" },
              { href: "/blog/drone-mapping-forensic-site-investigations", title: "How Drone Mapping Can Support Forensic Site Investigations" },
              { href: "/blog/what-is-forensic-site-documentation", title: "What Is Forensic Site Documentation" },
              { href: "/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site", title: "Why Expert Witnesses Need More Than Photographs" },
              { href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog", title: "Why Site Conditions Should Be Documented Before They Are Altered" },
            ]}
          />
        </SiteContainer>
      </section>
      </WithRail>

      <PageCta />
    </>
  )
}
