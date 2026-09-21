import { siteConfig } from "@/app/config/site"

export default function BrandMark({
  showTagline = false,
}: {
  showTagline?: boolean
}) {
  return (
    <span className="inline-flex flex-col justify-center leading-none">
      <span className="text-[1.25rem] font-semibold tracking-[-0.045em] text-current sm:text-[1.375rem]">
        {siteConfig.name}
      </span>
      {showTagline ? (
        <span className="mt-1.5 max-w-[17rem] text-[0.625rem] font-medium uppercase leading-snug tracking-[0.14em] text-current opacity-70">
          {siteConfig.tagline}
        </span>
      ) : (
        <span className="mt-1 hidden whitespace-nowrap text-[0.58rem] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] xl:block">
          {siteConfig.tagline}
        </span>
      )}
    </span>
  )
}
