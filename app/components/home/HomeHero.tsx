import Image from "next/image"
import SiteContainer from "@/app/components/SiteContainer"
import ButtonLink from "@/app/components/ButtonLink"
import { cloudinaryUrl, siteConfig } from "@/app/config/site"

const primary = {
  src: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1790270603/fm-rc-hp-hero_c74h99.png",
    1800
  ),
  alt: "Forensic mapping and reality capture visualization of an industrial site",
  caption: "Forensic mapping & reality capture",
}

export default function HomeHero() {
  return (
    <section className="border-b border-[var(--color-line)]">
      <SiteContainer className="grid items-start gap-8 pt-10 pb-10 md:gap-10 md:pt-14 md:pb-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:pt-16 lg:pb-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Technical field documentation
          </p>
          <h1 className="mt-3 max-w-[14ch] text-[2.125rem] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] sm:text-[2.625rem] lg:text-[3.125rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-[36rem] text-lg leading-snug text-[var(--color-ink)] md:text-xl">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-[var(--color-muted)]">
            SterFlies creates structured, reviewable 2D and 3D records of physical sites so conditions can still be examined after the site changes. Aerial, terrestrial, thermal, and photogrammetric methods are selected for the record. Qualified professionals interpret the documentation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.cta.href}>{siteConfig.cta.label}</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View Projects
            </ButtonLink>
          </div>
        </div>

        <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
          <Image
            src={primary.src}
            alt={primary.alt}
            width={1600}
            height={900}
            priority
            sizes="(min-width: 1024px) 640px, 100vw"
            className="aspect-[19/10] w-full object-cover object-center"
          />
          <figcaption className="border-t border-[var(--color-line)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
            {primary.caption}
          </figcaption>
        </figure>
      </SiteContainer>
    </section>
  )
}
