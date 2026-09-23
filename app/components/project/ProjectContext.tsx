import ContextSidebar from "@/app/components/practice/ContextSidebar"
import SiteContainer from "@/app/components/SiteContainer"
import type { PracticeLink } from "@/app/lib/practice"

const forensic: PracticeLink = {
  href: "/services/forensic-site-documentation",
  title: "Forensic Mapping & Site Documentation",
}
const mapping: PracticeLink = {
  href: "/services/mapping",
  title: "Mapping & Photogrammetry",
}
const thermal: PracticeLink = {
  href: "/thermal/Applications",
  title: "Thermal Documentation",
}

const sidebars: Record<
  string,
  { articles: PracticeLink[]; services: PracticeLink[]; projects?: PracticeLink[]; resources?: PracticeLink[] }
> = {
  "iaq-mold-documentation": {
    articles: [
      { href: "/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations", title: "Why Existing Conditions Documentation Is Critical for IH Investigations" },
      { href: "/blog/documenting-mold-assessments-and-supporting-safety-decisions", title: "Documenting Mold Assessments and Supporting Safety Decisions" },
      { href: "/blog/what-is-forensic-site-documentation", title: "What Is Forensic Site Documentation" },
    ],
    services: [forensic],
    resources: [{ href: "/capabilities#reality-capture", title: "Reality Capture" }],
  },
  "65acresite": {
    articles: [
      { href: "/blog/orthomosaic_blog", title: "Understanding Orthomosaic Mapping" },
      { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Documentation" },
      { href: "/blog/volumetric_blog", title: "Volumetric Data from Photogrammetric Surfaces" },
    ],
    services: [mapping],
    projects: [{ href: "/projects/custom-home-3d-model", title: "Custom Home 3D Progress Documentation" }],
  },
  "pv-farm-hotspots": {
    articles: [
      { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
      { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards in Solar PV Inspections" },
      { href: "/blog/thermal101_blog", title: "What Thermal Imaging Shows and Does Not" },
    ],
    services: [thermal],
    resources: [
      { href: "/thermal/method", title: "Thermal method" },
      { href: "/thermal/case-studies", title: "Thermal case studies" },
    ],
  },
  "custom-home-3d-model": {
    articles: [
      { href: "/blog/3d_model", title: "Exploring Interactive 3D Models" },
      { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Documentation" },
      { href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog", title: "Why Site Conditions Should Be Documented Before They Are Altered" },
    ],
    services: [mapping],
    projects: [{ href: "/projects/65acresite", title: "65-Acre Site Mapping & Progress Documentation" }],
  },
}

const notes: Record<string, string> = {
  "iaq-mold-documentation":
    "The walkthrough preserves navigable interior continuity, and the exterior model preserves envelope and access context. Neither establishes moisture source, mold extent, or a health conclusion. Sampling labels in this demonstration are fictional and show how a location can be referenced. The record is not an industrial hygiene assessment.",
  "65acresite":
    "The orthomosaic and web map are a shared spatial record of observed conditions across approximately 65 acres. Measurement depends on the capture plan for each visit. The record is not a boundary survey, an as-built certification, or a pay-quantity document.",
  "pv-farm-hotspots":
    "The deliverable pairs apparent temperature patterns with RGB frames and location context. It does not, by itself, determine module failure, string faults, or a maintenance priority. Qualified review is required before any operational conclusion.",
  "custom-home-3d-model":
    "Each model preserves visible construction geometry at that visit. Concealed work, interiors after enclosure, and dimensions outside the capture are not established by the model. It is a progress record, not an as-built survey.",
}

export function ProjectSidebar({ slug }: { slug: string }) {
  const item = sidebars[slug]
  if (!item) return null
  return (
    <ContextSidebar
      articles={item.articles}
      services={item.services}
      projects={item.projects}
      resources={item.resources}
    />
  )
}

export function ProjectNotes({ slug }: { slug: string }) {
  const text = notes[slug]
  if (!text) return null
  return (
    <section className="border-b border-[var(--color-line)] py-12 md:py-16">
      <SiteContainer className="max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight">Technical considerations</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">{text}</p>
      </SiteContainer>
    </section>
  )
}
