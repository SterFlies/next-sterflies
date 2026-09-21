import Image from "next/image"
import SiteContainer from "@/app/components/SiteContainer"
import ButtonLink from "@/app/components/ButtonLink"
import PageBreadcrumbs from "@/app/components/PageBreadcrumbs"

export default function ServiceHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  parent,
}: {
  eyebrow?: string
  title: string
  description: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
  image?: { src: string; alt: string; priority?: boolean; object?: string }
  parent?: { href: string; label: string }
}) {
  return (
    <section className="border-b border-[var(--color-line)]">
      <SiteContainer
        className={`grid items-start gap-8 py-10 md:gap-12 md:py-14 ${
          image ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]" : ""
        }`}
      >
        <div>
          {parent ? (
            <div className="mb-5">
              <PageBreadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: parent.label, href: parent.href },
                  { name: title },
                ]}
              />
            </div>
          ) : null}
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 max-w-[18ch] text-[2rem] font-semibold leading-[1.12] tracking-tight text-[var(--color-ink)] md:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {description}
          </p>
          {primary || secondary ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {primary ? <ButtonLink href={primary.href}>{primary.label}</ButtonLink> : null}
              {secondary ? (
                <ButtonLink href={secondary.href} variant="secondary">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={900}
              priority={image.priority}
              className={`aspect-[16/10] w-full object-cover ${image.object ?? ""}`}
            />
          </figure>
        ) : null}
      </SiteContainer>
    </section>
  )
}
