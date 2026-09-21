import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import { siteConfig } from "@/app/config/site"

export default function PageCta({
  title = "Need a site documented?",
  text = "Tell us what needs to be captured, measured, or preserved and we can determine the appropriate documentation approach.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-[var(--color-ink)] py-14 text-white md:py-20">
      <SiteContainer className="max-w-3xl">
        <h2 className="text-[1.75rem] font-semibold tracking-tight md:text-[2.125rem]">{title}</h2>
        <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-white/75 md:text-lg">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-[6px] bg-white px-5 text-sm font-semibold text-[var(--color-ink)]"
          >
            {siteConfig.cta.label}
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center justify-center rounded-[6px] border border-white/25 px-5 text-sm font-semibold text-white"
          >
            View all services
          </Link>
        </div>
      </SiteContainer>
    </section>
  )
}
