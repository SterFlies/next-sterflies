import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import { applications } from "@/app/lib/practice"

const audiences = [
  {
    label: "Investigations and professional review",
    text: "Capture the physical context consultants, attorneys, expert witnesses, and claims professionals may need to review later.",
    items: ["Forensic consultants", "Attorneys", "Expert witnesses", "Insurers and claims professionals"],
  },
  {
    label: "Health, safety, and industrial environments",
    text: "Preserve layout, access, and existing conditions for industrial hygiene, EHS, and facility review. SterFlies does not perform the assessment itself.",
    items: ["Industrial hygienists", "EHS and safety teams", "Facility operators"],
  },
  {
    label: "Construction and the built environment",
    text: "Keep a repeatable record of progress, exposed work, and site layout as conditions change.",
    items: ["Contractors", "Construction teams", "Engineers", "Owners and project stakeholders"],
  },
]

export default function UseCases() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
      <SiteContainer>
        <SectionHeader
          eyebrow="Use"
          title="Who the documentation supports"
          description="SterFlies produces spatial and visual records. Qualified experts, investigators, engineers, attorneys, and other professionals interpret those records."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {audiences.map((group) => (
            <div key={group.label} className="border-t border-[var(--color-ink)] pt-5">
              <h3 className="text-lg font-semibold leading-snug">{group.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{group.text}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item} className="border-t border-[var(--color-line)] pt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Where the same records are used
          </h3>
          <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {applications.map((item) => (
              <li key={item.title} className="border-t border-[var(--color-line)] pt-3">
                <Link href={item.href} className="font-semibold hover:text-[var(--color-accent)]">
                  {item.title}
                </Link>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </SiteContainer>
    </section>
  )
}
