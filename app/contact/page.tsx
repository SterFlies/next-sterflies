import type { Metadata } from "next"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ButtonLink from "@/app/components/ButtonLink"
import CalendlyEmbed from "@/app/components/contact/CalendlyEmbed"
import { siteConfig } from "@/app/config/site"

export const metadata: Metadata = {
  title: "Contact | SterFlies",
  description:
    "Tell us what needs to be documented, where the site is located, and what records or deliverables are needed.",
  alternates: { canonical: "/contact" },
}

const intake = [
  "Site location",
  "Documentation objective",
  "Approximate site size",
  "Interior, exterior, or both",
  "Time sensitivity",
  "Known access restrictions",
  "Desired deliverables, if known",
]

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="Contact"
            title="Discuss a Documentation Project"
            description="Tell us what needs to be documented, where the site is located, and what records or deliverables are needed."
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>Email SterFlies</ButtonLink>
            <ButtonLink href="#schedule" variant="secondary">
              Schedule a Consultation
            </ButtonLink>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <SectionHeader
              eyebrow="Preparation"
              title="Helpful information to include"
              description="You do not need to know whether the project requires drone mapping, Matterport, thermal imaging, or another method. Start with the documentation objective."
            />
            <ul className="mt-8 space-y-3 text-base">
              {intake.map((item) => (
                <li key={item} className="border-t border-[var(--color-line)] pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Direct contact" title="Email and location" />
            <dl className="mt-8 space-y-6">
              <div className="border-t border-[var(--color-ink)] pt-4">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-semibold text-[var(--color-accent)] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-[var(--color-ink)] pt-4">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Location
                </dt>
                <dd className="mt-2 text-base">{siteConfig.address}</dd>
              </div>
              <div className="border-t border-[var(--color-ink)] pt-4">
                <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Response
                </dt>
                <dd className="mt-2 text-base text-[var(--color-muted)]">
                  Usually within one business day.
                </dd>
              </div>
            </dl>
          </div>
        </SiteContainer>
      </section>

      <section id="schedule" className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Scheduling"
            title="Schedule a consultation"
            description="Pick a time to discuss the site, the documentation objective, and the record that would be useful."
          />
          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </SiteContainer>
      </section>
    </>
  )
}
