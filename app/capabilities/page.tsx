import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import PageCta from "@/app/components/service/PageCta"
import { pageMetadata } from "@/app/config/site"
import { capabilities } from "@/app/lib/practice"

export const metadata = pageMetadata({
  title: "Technical Capabilities | SterFlies",
  description:
    "How aerial mapping, photogrammetry, reality capture, thermal imaging, and related outputs support forensic, construction, and industrial documentation.",
  path: "/capabilities",
})

export default function CapabilitiesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="Capabilities"
            title="Methods and outputs inside the practice"
            description="Capabilities explain what a method or product is and how it supports professional documentation. They are not separate sales pages. Services describe the record. Capabilities describe the tools used to make it."
          />
        </SiteContainer>
      </section>

      <div className="border-b border-[var(--color-line)]">
        {capabilities.map((item, index) => (
          <section
            key={item.id}
            id={item.id}
            className={`scroll-mt-24 border-b border-[var(--color-line)] py-12 md:py-16 ${
              index % 2 === 1 ? "bg-[var(--color-surface)]" : ""
            }`}
          >
            <SiteContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
              <div>
                <h2 className="text-[1.5rem] font-semibold tracking-tight md:text-[1.75rem]">
                  {item.title}
                </h2>
                <div className="depth-copy mt-4 max-w-[46rem]">
                  <p>{item.summary}</p>
                  <p>{item.detail}</p>
                  <p>{item.limit}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Where it is used
                </p>
                <ul className="mt-3 space-y-2">
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-[var(--color-accent)] hover:underline"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SiteContainer>
          </section>
        ))}
      </div>

      <PageCta
        title="Need a method selected for a site?"
        text="Describe the conditions and the record you need. The capture method follows from that, not from a hardware package."
      />
    </>
  )
}
