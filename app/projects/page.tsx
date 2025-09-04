import Link from "next/link";
import Image from "next/image";
import { projects } from "./_data";

const BRAND = "#00a2ff";

function sortByDateDesc() {
  return [...projects].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export default function ProjectsIndexPage() {
  const items = sortByDateDesc();

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Header */}
      <header className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block text-xs tracking-widest uppercase text-gray-500">
          SterFlies
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Projects</h1>
        <p className="text-gray-600 mt-4 md:text-lg">
          A curated set of field work and deliverables—click a project to view details and
          interactive assets.
        </p>
      </header>

      {/* Grid */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.slug}
            className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition"
          >
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="relative aspect-[16/9] bg-gray-100">
                <Image src={p.cover.src} alt={p.cover.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h2
                  className="text-lg md:text-xl font-semibold group-hover:underline"
                  style={{ textDecorationColor: BRAND }}
                >
                  {p.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm font-medium" style={{ color: BRAND }}>
                  View project →
                </div>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

