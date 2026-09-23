import Link from "next/link"
import type { PracticeLink } from "@/app/lib/practice"

function Module({ label, links }: { label: string; links: PracticeLink[] }) {
  if (!links.length) return null
  return (
    <section className="context-module">
      <h2 className="context-kicker">{label}</h2>
      <ul className="context-links">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {item.title}
              {item.meta ? <span className="context-meta">{item.meta}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function ContextSidebar({
  toc,
  articles,
  services,
  projects,
  resources,
  topics,
  discuss = true,
}: {
  toc?: React.ReactNode
  articles?: PracticeLink[]
  services?: PracticeLink[]
  projects?: PracticeLink[]
  resources?: PracticeLink[]
  topics?: PracticeLink[]
  discuss?: boolean
}) {
  return (
    <div className="context-sidebar">
      {toc}
      <Module label="Topics" links={topics ?? []} />
      <Module label="Related articles" links={articles ?? []} />
      <Module label="Related services" links={services ?? []} />
      <Module label="Selected projects" links={projects ?? []} />
      <Module label="Technical resources" links={resources ?? []} />
      {discuss ? (
        <section className="context-discuss">
          <h2 className="context-kicker">Discuss a project</h2>
          <p>
            Describe the site, what needs to be preserved, and the record the work needs to support.
          </p>
          <Link href="/contact">Discuss a Project</Link>
        </section>
      ) : null}
    </div>
  )
}
