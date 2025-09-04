// app/projects/pv-farm-hotspots/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Lightweight meta your index page can import if you want */
export const meta = {
  slug: "pv-farm-hotspots",
  title: "PV Farm Hot-Spot Triage (Thermal + RGB)",
  date: "2025-07-20",
  cover: {
    src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png",
    alt: "Thermal and RGB comparison of PV rows with localized hotspots",
  },
  excerpt:
    "Rapid aerial thermal sweep to locate underperforming modules and strings. Defects mapped to row/string IDs with snapshots for targeted maintenance.",
  tags: ["thermal", "pv", "o&m"],
} as const;


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

/** ✅ Default export MUST be a React component */
export default function ProjectPage() {
  const pills = [
    { id: "overview", label: "Overview" },
    { id: "anomalies", label: "Anomalies" },
    { id: "workflow", label: "Workflow" },
    { id: "qa", label: "Quality" },
    { id: "results", label: "Results" },
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
        <div className="mt-3 text-gray-600 text-sm">{"Greater San Antonio, TX • " + meta.date}</div>
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
              Thermal inspections by drone are the fastest, least disruptive way to pinpoint PV performance issues. From above the array we capture module-level temperature patterns in minutes—not days on foot—and do it safely without walking tables. Pairing thermal with RGB frames cuts false positives and gives technicians exact row/string locations and visual context. The outcome is a ranked punch-list that turns guesswork into targeted maintenance: less downtime, fewer truck rolls, and proof of repairs on the follow-up scan.
            </p>
            <p>
              The value is speed, clarity, and accuracy: instead of walking miles of modules in the heat, the team gets a defect list with
              photos, locations, and priorities. Maintenance can roll straight to the right tables with the right parts.
            </p>
          </SectionCard>

          <SectionCard id="anomalies" title="What We Look For (Thermal Anomalies)">
            <ul className="list-disc pl-5">
              <li>
                <strong>Module hotspots</strong> (cell or sub-string) indicating cracked cells or bad solder.
              </li>
              <li>
                <strong>Bypass diode signatures</strong>—distinct thermal patterns at junction boxes.
              </li>
              <li>
                <strong>String outages / mismatch</strong>—rows with cooler-than-expected response.
              </li>
              <li>
                <strong>Soiling / shading bands</strong> creating uneven heating across modules.
              </li>
              <li>
                <strong>Balance-of-system heat</strong> at combiner/inverter pads suggesting load issues.
              </li>
            </ul>
          </SectionCard>

          <SectionCard id="workflow" title="Capture → Map → Action">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Fly</strong> a consistent-altitude grid with thermal + RGB to lock alignment.
              </li>
              <li>
                <strong>Detect</strong> anomalies during processing and validate with RGB frames.
              </li>
              <li>
                <strong>Create a Map</strong> of entire site and annotate each anomolie.
              </li>
              <li>
                <strong>Hand off</strong> to maintenance with photos, severity, and recommended checks.
              </li>
            </ol>
          </SectionCard>

          <SectionCard id="qa" title="Quality & Safety">
            <ul className="list-disc pl-5">
              <li>Morning flights reduce thermal shimmer and give consistent module response.</li>
              <li>Uniform altitude and overlap maintain comparable pixel size across sweeps.</li>
              <li>Thermal + RGB pairing avoids false positives and clarifies root causes.</li>
              <li>Ops brief before launch; VO on haul paths; conservative stand-off from tracker rows.</li>
            </ul>
          </SectionCard>

          <SectionCard id="results" title="Results">
            <ul className="list-disc pl-5 space-y-2">
              <li>Isolated multiple hotspots and cracked-cell patterns in a single session.</li>
              <li>Delivered annotated snapshots + coordinates and a CSV punch-list by string/row.</li>
              <li>Enabled targeted maintenance instead of full-field walk-downs.</li>
              <li>Created a baseline for future scans to verify repairs and trend issues.</li>
            </ul>
          </SectionCard>

          <SectionCard id="next" title="Next Steps (Plain English)">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Re-scan after repairs</strong> to confirm hotspots cleared.
              </li>
              <li>
                <strong>Schedule maintenance scans</strong> (quarterly/yearly) to catch faults before it costs you.
              </li>
              <li>
                <strong>Track repeat offenders</strong>—flag modules/strings that recur across scans.
              </li>
              <li>
                <strong>Share the defect list link</strong> with techs and bring the right spares to the row.
              </li>
            </ul>
          </SectionCard>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold">Quick Facts</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-medium">Type:</span> Utility-scale PV rows
                </li>
                <li>
                  <span className="font-medium">Primary:</span> Thermal + RGB sweep
                </li>
                <li>
                  <span className="font-medium">Output:</span> Thermal + RGB Orthomosaic Map, PDF snapshots + Annotations of each anomolie, PDF report.
                </li>
                <li>
                  <span className="font-medium">Best viewing:</span> Fullscreen web-viewer of map for module-level detail
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
              >
                Start a project
              </Link>
            </div>

            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold mb-4">Photo Highlights</h3>
              <div className="grid gap-4">
                <figure className="relative aspect-[1/1] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png"
                    alt="Thermal vs RGB composite showing hotspots"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_172933_ctigrw.png"
                    alt="Row-level detail for documentation"
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
        <Link href="/contact" className="inline-block px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800">
          Start a project
        </Link>
      </div>
    </main>
  );
}
