import type { Metadata } from "next"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ButtonLink from "@/app/components/ButtonLink"

export const metadata: Metadata = {
  title: "Photography & Videography | SterFlies",
  description:
    "Legacy aerial and ground photography and videography offering. SterFlies primary services are forensic mapping, photogrammetry, and thermal documentation.",
  alternates: { canonical: "/services/marketing" },
}

const offerings = [
  { title: "Aerial stills and video", text: "High-resolution aerial coverage for visual storytelling." },
  { title: "FPV fly-throughs", text: "First-person-view sequences of spaces and sites." },
  { title: "Short-form clips", text: "Edited clips for social and web use." },
  { title: "Promo sequences", text: "Longer edited pieces for websites and presentations." },
]

export default function MarketingLegacyPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Legacy offering
          </p>
          <h1 className="mt-3 max-w-[16ch] text-[2rem] font-semibold leading-[1.12] tracking-tight md:text-[2.5rem]">
            Photography & Videography
          </h1>
          <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Aerial and ground visual content remains available as a non-primary offering. SterFlies current professional services are forensic mapping, mapping and photogrammetry, and thermal documentation.
          </p>
          <div className="mt-7">
            <ButtonLink href="/services" variant="secondary">
              View current services
            </ButtonLink>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader title="What this offering includes" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {offerings.map((item) => (
              <li key={item.title} className="border-t border-[var(--color-ink)] pt-4">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer className="max-w-4xl">
          <h2 className="text-xl font-semibold">Example reel</h2>
          <div className="relative mt-6 aspect-video overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/7MaC9C4X_bI"
              title="SterFlies photography and videography example"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </SiteContainer>
      </section>

      <section className="py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-base leading-relaxed text-[var(--color-muted)]">
            For technical site documentation, start with{" "}
            <Link href="/services" className="font-semibold text-[var(--color-accent)] hover:underline">
              current SterFlies services
            </Link>
            .
          </p>
        </SiteContainer>
      </section>
    </>
  )
}
