import Image from "next/image"
import Link from "next/link"

export default function ProjectProof({
  type,
  title,
  href,
  image,
  documented,
  why,
  deliverables,
  method,
}: {
  type: string
  title: string
  href: string
  image: { src: string; alt: string; object?: string }
  documented: string
  why: string
  deliverables: string
  method?: string
}) {
  return (
    <article className="mt-12 grid gap-6 border-t border-[var(--color-line)] pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
      <Link href={href} className="block overflow-hidden rounded-[6px] border border-[var(--color-line)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1400}
          height={900}
          className={`aspect-[16/10] w-full object-cover ${image.object ?? ""}`}
        />
      </Link>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">{type}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
        <dl className="mt-5 space-y-4 text-sm leading-relaxed md:text-base">
          <div>
            <dt className="font-semibold">What was documented</dt>
            <dd className="mt-1 text-[var(--color-muted)]">{documented}</dd>
          </div>
          {method ? (
            <div>
              <dt className="font-semibold">Capture methods</dt>
              <dd className="mt-1 text-[var(--color-muted)]">{method}</dd>
            </div>
          ) : null}
          <div>
            <dt className="font-semibold">Why it mattered</dt>
            <dd className="mt-1 text-[var(--color-muted)]">{why}</dd>
          </div>
          <div>
            <dt className="font-semibold">Deliverables</dt>
            <dd className="mt-1 text-[var(--color-muted)]">{deliverables}</dd>
          </div>
        </dl>
        <Link
          href={href}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
        >
          View project
        </Link>
      </div>
    </article>
  )
}
