import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import PageCta from "@/app/components/service/PageCta"
import { pageMetadata, siteConfig } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "FAQ | SterFlies",
  description:
    "Answers about forensic mapping, reality capture, photogrammetry, thermal documentation, deliverables, and how SterFlies supports professional review.",
  path: "/faq",
})

const faqs = [
  {
    question: "What is forensic mapping?",
    answer:
      "Forensic mapping is coordinated field documentation used to preserve site conditions as visual and spatial records for later professional review. The purpose is to keep layout, context, and measurable relationships available after the site has changed.",
  },
  {
    question: "What is reality capture?",
    answer:
      "Reality capture is a method for recording physical spaces as navigable spatial data. SterFlies uses terrestrial and interior capture when room relationships, access, and close-range context matter as much as the exterior. Tools such as Matterport are used when an interactive walkthrough is the appropriate deliverable.",
  },
  {
    question: "What deliverables can SterFlies provide?",
    answer:
      "Deliverables are selected according to project scope, site conditions, and documentation objectives. They may include orthomosaics, 3D models, point clouds, walkthroughs, high-resolution imagery, thermal imagery, measurements, annotated views, and supporting files. Not every project includes every product.",
  },
  {
    question: "Do all projects use drones?",
    answer:
      "No. Aerial systems are one capture method. Interior, terrestrial, thermal, and photogrammetric methods are selected according to the site and the record required. Some projects use aerial capture only, some use ground-based capture only, and some combine both.",
  },
  {
    question: "When is Matterport used?",
    answer:
      "Matterport is used when a navigable interior record is the appropriate deliverable. It is a capture tool, not the service itself. The product is the interior documentation: room layout, access, and location context.",
  },
  {
    question: "What is photogrammetry?",
    answer:
      "Photogrammetry reconstructs measurable spatial products from overlapping still photographs. Those products can include orthomosaics, point clouds, and 3D models. A photograph documents one viewpoint. A mapped dataset preserves spatial relationships across an area.",
  },
  {
    question: "Can SterFlies measure a site?",
    answer:
      "Photogrammetric records can support distances, areas, and volumes when the capture is scoped for measurement. Measurement quality depends on capture geometry, processing, and any control used for the engagement. It is not a universal accuracy claim.",
  },
  {
    question: "Is SterFlies a land surveyor?",
    answer:
      "No. SterFlies does not replace a licensed surveyor when a legal land survey is required. Mapped records can support coordination, existing-conditions review, and comparison. Stamped survey products remain with the licensed surveyor.",
  },
  {
    question: "How is thermal imagery used?",
    answer:
      "Thermal imaging records apparent surface-temperature differences. It can help identify areas for further professional review on solar PV, electrical systems, building envelope, industrial assets, and other sites where temperature variation is relevant.",
  },
  {
    question: "Does thermal imagery diagnose defects?",
    answer:
      "No. Thermal imagery does not independently determine defect cause, moisture source, electrical failure, code violation, or liability. Those conclusions remain with the qualified professional who interprets the record.",
  },
  {
    question: "Can SterFlies support expert or investigation teams?",
    answer:
      "Yes. SterFlies captures and organizes field conditions so consultants, attorneys, industrial hygienists, engineers, and other qualified professionals can review spatial context later. SterFlies does not independently determine accident causation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      siteConfig.serviceArea,
  },
  {
    question: "How quickly can a site be documented?",
    answer:
      "Timing depends on access, site size, weather, and the deliverables required. Capture can often be scheduled quickly once the documentation objective is defined. Processing time follows the agreed record, not a single standard flight package.",
  },
  {
    question: "How are deliverables provided?",
    answer:
      "Deliverables are organized for the people who will review them. That may include a web map or walkthrough, downloadable spatial files, annotated imagery, and supporting documents. The delivery method is specified with the engagement.",
  },
  {
    question: "What qualifications do you hold?",
    answer:
      "Aerial operations are conducted under an FAA Part 107 remote pilot certificate, with OSHA 10 construction safety training and insured operations. Proof of credentials can be provided for an engagement upon request.",
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="FAQ"
            title="Questions about technical site documentation"
            description="Concise answers about methods, deliverables, professional role, and how a project typically starts."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none py-2 text-base font-semibold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                  <span className="flex min-h-11 items-center justify-between gap-4">
                    {faq.question}
                    <span aria-hidden="true" className="text-[var(--color-muted)] group-open:hidden">
                      +
                    </span>
                    <span aria-hidden="true" className="hidden text-[var(--color-muted)] group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="pb-4 pt-1 text-base leading-relaxed text-[var(--color-muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Continue" title="Related resources" />
          <ul className="mt-6 space-y-3">
            {[
              ["/services/forensic-site-documentation", "Forensic Mapping & Site Documentation"],
              ["/services/mapping", "Mapping & Photogrammetry"],
              ["/thermal/Applications", "Thermal Documentation"],
              ["/capabilities", "Technical capabilities"],
              ["/blog", "Technical articles"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-sm font-semibold text-[var(--color-accent)] hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
