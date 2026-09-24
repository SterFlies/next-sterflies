import Link from "next/link"
import HomeHero from "@/app/components/home/HomeHero"
import ServiceOverview from "@/app/components/home/ServiceOverview"
import SelectedProjects from "@/app/components/home/SelectedProjects"
import LatestArticles from "@/app/components/home/LatestArticles"
import DocumentationWorkflow from "@/app/components/home/DocumentationWorkflow"
import DeliverablesOverview from "@/app/components/home/DeliverablesOverview"
import UseCases from "@/app/components/home/UseCases"
import Credentials from "@/app/components/home/Credentials"
import SiteContainer from "@/app/components/SiteContainer"
import { pageMetadata, siteConfig } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Forensic Mapping & Reality Capture | SterFlies",
  description:
    "SterFlies provides forensic mapping, reality capture, photogrammetry, thermal documentation, and technical field documentation of physical sites for investigations, construction, and industrial work.",
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceOverview />
      <SelectedProjects />
      <LatestArticles />
      <DocumentationWorkflow />
      <DeliverablesOverview />
      <UseCases />
      <Credentials />
      <section className="bg-[var(--color-ink)] py-14 text-white md:py-16">
        <SiteContainer className="max-w-3xl">
          <h2 className="text-[1.75rem] font-semibold tracking-tight md:text-[2.125rem]">
            Need a site documented?
          </h2>
          <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-white/75 md:text-lg">
            Tell SterFlies what needs to be captured, measured, preserved, or reviewed, and the appropriate documentation approach can be determined.
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
