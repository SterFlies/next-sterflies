import Image from "next/image";
import Link from "next/link";

const ORTHO_BLOG = "/blog/orthomosaic_blog"; // update this path if your article lives elsewhere

// Lightweight metadata you can import on the index page later if you want
const meta = {
  slug: "65acresite",
  title: "65‑Acre Neighborhood Development – Orthomosaic Monitoring",
  date: "2025-06-02",
  cover: {
    src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
    alt: "Orthomosaic overview of 65‑acre neighborhood development",
  },
  excerpt:
    "Recurring drone capture and shareable web orthomosaic to coordinate grading, utilities, pads, and access across a 65‑acre site.",
  tags: ["orthomosaic", "mapping", "progress"],
};

function AspectBox({
  aspect = "16/9",
  children,
}: {
  aspect?: "16/9" | "4/3" | "1/1" | "21/9" | "3/2";
  children: React.ReactNode;
}) {
  const cls =
    aspect === "4/3"
      ? "aspect-[4/3]"
      : aspect === "1/1"
      ? "aspect-square"
      : aspect === "21/9"
      ? "aspect-[21/9]"
      : aspect === "3/2"
      ? "aspect-[3/2]"
      : "aspect-[16/9]";
  return (
    <div className={`${cls} relative w-full rounded-2xl overflow-hidden bg-black`}>{children}</div>
  );
}

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-white rounded-2xl border p-6 md:p-8 space-y-4 md:space-y-5">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
      <div className="text-[17px] md:text-lg leading-relaxed text-gray-800 space-y-4">{children}</div>
    </section>
  );
}

export default function ProjectPage() {
  const pills = [
    { id: "overview", label: "Overview" },
    { id: "viewer", label: "Viewer" },
    { id: "workflows", label: "Workflows" },
    { id: "qa", label: "Quality" },
    { id: "change", label: "Change" },
    { id: "safety", label: "Safety" },
    { id: "next", label: "Next Steps" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span>{meta.title}</span>
      </nav>

      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{meta.title}</h1>
        <div className="mt-3 text-gray-600 text-sm">{"Greater Houston, TX • " + meta.date}</div>
      </header>

      {/* Hero */}
      <div className="relative aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mt-8">
        <Image src={meta.cover.src} alt={meta.cover.alt} fill className="object-cover" />
      </div>

      {/* Jump Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {pills.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50"
          >
            {p.label}
          </a>
        ))}
      </div>

      {/* Layout: main content + sticky sidebar */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main column */}
        <div className="lg:col-span-8 space-y-8">
          <SectionCard id="overview" title="Executive Summary">
            <p>
              This 65‑acre neighborhood development is a living jobsite: cut/fill, utilities, pads,
              roadway subgrade, and staging for vertical construction often move in parallel. The
              team needed a reliable way to <em>see the whole site</em> frequently without pausing work
              or waiting on a long survey cycle. We run a recurring drone capture that publishes a
              high‑resolution, web‑viewable <Link href={ORTHO_BLOG} className="text-[#00a2ff] underline underline-offset-2">orthomosaic</Link> It’s the shared visual baseline: planners
              coordinate utilities and pads; supers drop pins for RFIs; subs check access and staging;
              owners and lenders get a clear, date‑stamped snapshot of change.
            </p>
            <p>
              This deliverable is a georeferenced, measurable surface—not just a pretty image. In the
              browser you can pan/zoom, measure lengths/areas, and compare phases over time. By syncing
              flights with active earthwork and utility pushes, decision‑makers get the right view at
              the right moment.
            </p>
          </SectionCard>

          <SectionCard id="viewer" title="Interactive Orthomosaic">
            <p className="text-sm text-gray-600">
              Pan, zoom, and measure directly in the viewer. Open full screen for best clarity.
            </p>
            <AspectBox>
              <iframe
                src="https://cloud.pix4d.com/embed/pro/map/2343984?shareToken=3674eb23-ce25-4347-af2b-7344c37e5128"
                className="absolute inset-0 w-full h-full"
                title="65‑Acre Development — Orthomosaic (Pix4Dcloud)"
                frameBorder={0}
                allowFullScreen
              />
            </AspectBox>
            <p className="text-xs text-gray-500">
              Notes: Web measurements are ideal for coordination; stamped records remain with survey.
            </p>
          </SectionCard>

          <SectionCard id="workflows" title="Stakeholder Workflows">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Developer / Ownership</h3>
                <p>
                  Durable visual record for lenders and partners. Reduces unnecessary walkthroughs and
                  clarifies sequence of work against the schedule of values. Bookmarks capture key
                  milestones—subgrade, first lift, utilities tied‑in—and support quick approvals.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">General Contractor</h3>
                <p>
                  Supers reference the map during morning huddles to orient new subs, set traffic
                  flows, and mark restricted zones. PMs use in‑browser measurements for quick quantity
                  checks and to accelerate clarifications with the design team.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Civil / Survey</h3>
                <p>
                  Not a substitute for stamped topo, but a fast sanity check: intent vs. reality,
                  stockpile creep, slopes tracking plan. Provides context that helps direct where to
                  spend field time between survey cycles.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Vendors / Subs</h3>
                <p>
                  Quick link for access routes, staging, and deliveries. Reduces phone calls and
                  prevents surprises when mobilizing to the site.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="qa" title="Quality Assurance">
            <ul className="list-disc pl-5">
              <li>Consistent altitude & camera geometry for repeatable pixel size.</li>
              <li>Morning flights to reduce heat shimmer and harsh shadows.</li>
              <li>Identical grid footprint with buffer—keeps seams stable across sessions.</li>
              <li>Aligned processing parameters for predictable blending behavior.</li>
              <li>Programmable flight paths to have consistent gps positioning.</li>
            </ul>
          </SectionCard>

          <SectionCard id="change" title="Change Detection & Versioning">
            <p>
                 On a site this size, meaningful change happens fast—sometimes between Friday’s punch-list and
                Monday’s stand-up. Pads widen, trench lines jump lots, stockpiles migrate, and access routes pivot
                around weather or crew availability. A weekly or bi-weekly <Link href={ORTHO_BLOG} className="text-[#00a2ff] underline underline-offset-2">orthomosaic</Link> makes those shifts obvious
                at a glance, so coordination isn’t based on memory or texts from the field. Side-by-side views of
                prior captures answer, “What moved?” in seconds, letting PMs redirect trucks, resequence crews, and
                flag rework risks before they harden. Over time, the versioned mosaic library becomes a visual
                history of decisions: when the north spine tied in, where silt control crept, how staging evolved.
                It’s simple, fast change detection that keeps everyone building off the same picture of reality.
            </p>
          </SectionCard>

          <SectionCard id="safety" title="Risk & Safety Considerations">
            <p>
              Launch/recovery away from haul roads, visual observers near heavy moves, and conservative
              wind/convective limits. Coordination with the superintendent on crane windows and
              temporary no‑fly areas. Read‑only share links as default; restricted shares for sensitive
              overlays.
            </p>
          </SectionCard>

          <SectionCard id="next" title="Next Steps">
            <ul className="list-disc pl-5">
              <li><strong>Save this week’s map</strong> as “Week of YYYY-MM-DD” so side-by-side comparisons are easy later.</li>
              <li>Optional monthly volumetrics with annotated pile IDs.</li>
              <li><strong>Plan a quick oblique pass</strong> (low circle photos) once vertical work starts for clearer building context.</li>
            </ul>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold">Quick Facts</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><span className="font-medium">Site area:</span> ~65 acres</li>
                <li><span className="font-medium">Cadence:</span> Weekly → biweekly (by phase)</li>
                <li><span className="font-medium">Primary deliverable:</span> Web orthomosaic</li>
                <li><span className="font-medium">Best viewing:</span> Fullscreen on laptop/desktop</li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
              >
                Start a project
              </Link>
            </div>

            {/* Photo Highlights */}
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold mb-4">Photo Highlights</h3>
              <div className="grid gap-4">
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081054_0001_V_ojcwvj.jpg"
                    alt="Material stock and apron area—logistics view"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081119_0004_V_rnq6vj.jpg"
                    alt="Progress week over week"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015632/DJI_20250831081141_0006_V_wzu5oe.jpg"
                    alt="Bird’s‑eye context with property lines"
                    fill
                    className="object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-block px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800"
        >
          Start a project
        </Link>
      </div>
    </main>
  );
}
