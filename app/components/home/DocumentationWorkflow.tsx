import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"

const steps = [
  {
    number: "01",
    title: "Define the documentation objective",
    text: "Understand what conditions need to be preserved, measured, or reviewed.",
  },
  {
    number: "02",
    title: "Plan the capture",
    text: "Select aerial, terrestrial, thermal, or combined methods for the site and the record.",
  },
  {
    number: "03",
    title: "Document the site",
    text: "Capture field conditions systematically and safely.",
  },
  {
    number: "04",
    title: "Process and organize",
    text: "Create the agreed spatial, visual, and supporting deliverables.",
  },
  {
    number: "05",
    title: "Deliver for review",
    text: "Provide organized documentation for project teams and qualified professionals.",
  },
]

export default function DocumentationWorkflow() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
      <SiteContainer>
        <SectionHeader
          eyebrow="Workflow"
          title="A documentation workflow"
          description="The engagement is scoped to the record required. Capture methods follow site conditions, the objective, required deliverables, access, scale, and the type of record needed."
        />
        <ol className="mt-10 grid gap-0 border-t border-[var(--color-ink)] sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <li key={step.number} className="border-b border-[var(--color-line)] py-5 sm:px-4 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-5 lg:last:border-r-0">
              <p className="font-mono text-xs tracking-[0.14em] text-[var(--color-muted)]">{step.number}</p>
              <h3 className="mt-3 text-base font-semibold leading-snug">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
            </li>
          ))}
        </ol>
      </SiteContainer>
    </section>
  )
}
