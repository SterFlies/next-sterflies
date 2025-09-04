import Image from "next/image";
import Link from "next/link";

export const meta = {
  slug: "custom-home-3d-model",
  title: "Custom Home Build – 3D Model (Progression)",
  date: "2025-05-11",
  cover: {
    src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016149/flighttomesh_ae4avk.png",
    alt: "Framed custom home with aerial 3D visualization",
  },
  excerpt:
    "High‑fidelity 3D mesh of a custom home used for remote reviews, punch‑list coordination, and owner updates—captured in minutes and viewable in the browser.",
  tags: ["construction", "3d-model", "progress"],
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
  return <div className={`${cls} relative w-full rounded-2xl overflow-hidden bg-black`}>{children}</div>;
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
    { id: "viewer", label: "3D Viewer" },
    { id: "workflows", label: "Workflows" },
    { id: "qa", label: "Capture & QA" },
    { id: "progress", label: "Progress" },
    { id: "safety", label: "Safety" },
    { id: "next", label: "Next Steps" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/projects" className="hover:underline">Projects</Link>
        <span className="mx-2">/</span>
        <span>{meta.title}</span>
      </nav>

      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{meta.title}</h1>
        <div className="mt-3 text-gray-600 text-sm">{"San Antonio Area, TX • " + meta.date}</div>
      </header>

      {/* Hero */}
      <div className="relative aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mt-8">
        <Image src={meta.cover.src} alt={meta.cover.alt} fill className="object-cover" />
      </div>

      {/* Jump Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {pills.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">
            {p.label}
          </a>
        ))}
      </div>

      {/* Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main column */}
        <div className="lg:col-span-8 space-y-8">
          <SectionCard id="overview" title="Executive Summary">
            <p>
              This custom home is moving fast—from slab to framed shell in a matter of weeks. Rather than
              relying on phone photos and long site walks, we capture a short, carefully planned drone
              mission to build a <strong>high‑fidelity 3D model</strong> you can explore in the browser. The model
              makes remote reviews simple: pan and orbit to check framing details, roof geometry, stair
              openings, and rough‑in paths. Supers and PMs use it during huddles; the owner uses it to
              understand progress without standing in mud; designers use it to sanity‑check clearances
              before decisions harden.
            </p>
            <p>
              The result is <em>shared reality</em>. Everyone sees the same view, at the same scale, with the
              same context. When questions come up—“Is the ridge straight?”, “Where does the chase run?”,
              “Do we have enough soffit for the fixtures?”—the 3D model answers in seconds, and notes can
              be pinned to locations for follow‑up.
            </p>
          </SectionCard>

          <SectionCard id="viewer" title="Interactive 3D Model">
            <p className="text-sm text-gray-600">Click and drag to orbit. Scroll to zoom. Open full screen for the clearest view.</p>
            <AspectBox>
              <iframe
                src="https://cloud.pix4d.com/embed/pro/mesh/2296493?shareToken=47b2a408687641a3bc946816afe5b10d"
                className="absolute inset-0 w-full h-full"
                title="Custom Home — 3D Model (Pix4Dcloud)"
                frameBorder={0}
                allowFullScreen
              />
            </AspectBox>
            <p className="text-xs text-gray-500">Measurements in the viewer are great for planning; record drawings remain with survey/engineering.</p>
          </SectionCard>

          <SectionCard id="workflows" title="Stakeholder Workflows">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Owner Updates</h3>
                <p>
                  Send a single link instead of dozens of photos. Walk the model together on a call and
                  capture decisions with screenshots or pinned notes.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">PM / Superintendent</h3>
                <p>
                  Verify framing geometry, roof planes, stair openings, and chase paths. Tag issues, create
                  a quick punch list, and align on the next trade’s needs.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Trades</h3>
                <p>
                  Share the model with MEP subs for routing checks (vents, stacks, penetrations) and to
                  confirm clearances before material arrives.
                </p>
              </div>
              <div className="rounded-xl border p-5 space-y-3">
                <h3 className="font-semibold">Design Team</h3>
                <p>
                  Compare intent vs. as‑built. Use screenshots to resolve RFIs quickly and to confirm any
                  small deviations won’t snowball into rework.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="qa" title="Capture & Quality">
            <ul className="list-disc pl-5">
              <li>Low‑altitude perimeter orbit plus oblique passes for dense, even coverage.</li>
              <li>Consistent camera geometry ensures comparable models across visits.</li>
              <li>RTK positioning where available; otherwise tight control via processing constraints.</li>
              <li>Quick QC: check ridge/valley straightness, wall plumb, and occlusion at porches/eaves.</li>
            </ul>
          </SectionCard>

          <SectionCard id="progress" title="Progress Tracking">
            <p>
              Because captures are repeatable, you can compare models week to week. Framing completion,
              roof sheathing, window/door installs, and exterior wrap all stand out immediately. Use
              split‑screen or tabbed viewers to answer, “What changed?” in seconds and to validate that
              the job is ready for the next trade.
            </p>
          </SectionCard>

          <SectionCard id="safety" title="Safety Considerations">
            <p>
              Flights are coordinated with the superintendent, launched away from crews, and flown well
              clear of people. We avoid windy gust fronts and keep a conservative buffer around ladders,
              lifts, and deliveries. Short, efficient missions reduce site impact while capturing
              everything needed for a solid model.
            </p>
          </SectionCard>

          <SectionCard id="next" title="Next Steps (Plain English)">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Capture again after major milestones</strong> (roof deck, windows/doors, MEP rough‑in).</li>
              <li><strong>Share the link</strong> in weekly updates; add two bullets: “What changed / What’s next.”</li>
              <li><strong>Mark 2–3 follow‑ups</strong> in the viewer (e.g., soffit spacing, vent path, stair headroom).</li>
              <li><strong>Grab a few obliques</strong> at eye‑level next visit for context shots in the report.</li>
              <li><strong>Archive models by date</strong> so comparisons are one click when questions pop up later.</li>
            </ul>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold">Quick Facts</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><span className="font-medium">Type:</span> Custom single‑family home</li>
                <li><span className="font-medium">Primary deliverable:</span> Web 3D model</li>
                <li><span className="font-medium">Best viewing:</span> Fullscreen on laptop/desktop</li>
                <li><span className="font-medium">Ideal cadence:</span> Milestone‑based (1–2 weeks)</li>
              </ul>
              <Link href="/contact" className="mt-5 inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800">Start a project</Link>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold mb-4">Photo Highlights</h3>
              <div className="grid gap-4">
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757023984/Screenshot_2025-09-04_171243_h3pjwq.png"
                    alt="Framing context and roof geometry"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757023989/Screenshot_2025-09-04_171148_r6ocqt.png"
                    alt="Piping chase and rough-in paths"
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
        <Link href="/contact" className="inline-block px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800">Start a project</Link>
      </div>
    </main>
  );
}
