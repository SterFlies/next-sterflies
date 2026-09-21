import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"

const links = [
  { href: "/thermal/Applications", label: "Documentation" },
  { href: "/thermal/method", label: "Method" },
  { href: "/thermal/case-studies", label: "Case Studies" },
] as const

export default function ThermalNav({ current }: { current: (typeof links)[number]["href"] }) {
  return (
    <nav aria-label="Thermal documentation" className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
      <SiteContainer className="flex flex-wrap gap-1 py-2">
        {links.map((item) => {
          const active = item.href === current
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex min-h-11 items-center px-3 text-sm font-medium ${
                active
                  ? "text-[var(--color-ink)] underline decoration-[var(--color-accent)] underline-offset-8"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </SiteContainer>
    </nav>
  )
}
