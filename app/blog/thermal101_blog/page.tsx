'use client'
import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

export default function ThermalImagingBlogPage() {
  return (
    <div className="bg-white py-20">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755171650/ThermalThumb_tn13mu.png"
            alt="Solar Farm Thumbnail"
            width={1200}
            height={630}
            className="rounded-lg shadow-md mx-auto my-12"
          />

          <h1 className="text-4xl font-bold leading-tight">
            Thermal Imaging 101: How to Spot What the Eye Can’t See
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling — Chief Pilot</p>
            <time dateTime="2025-08-14">August 14, 2025</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12">
          <p>
            Our eyes are powerful, but they’re limited. They operate within the
            <strong> visible light spectrum</strong> — meaning anything outside that
            range is invisible without the right tools.
          </p>
          <p>
            Thermal imaging changes that. By capturing <strong>infrared radiation</strong>,
            drones equipped with thermal sensors can “see” temperature differences,
            revealing patterns, risks, and inefficiencies that standard cameras —
            and human eyes — completely miss.
          </p>
          <p>
            In industries like solar, construction, utilities, and public safety, this
            ability translates directly into <strong>time saved, hazards avoided,
            and money retained</strong>.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 1. Science */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">1. The Science Behind Thermal Imaging</h2>
          <p>
            Thermal cameras work by detecting <strong>infrared energy</strong> emitted by
            objects. Every object above absolute zero (-273.15°C / -459.67°F) emits infrared
            radiation, and the hotter the object, the more radiation it emits.
          </p>
          <p>
            Unlike traditional cameras, which create images from visible light, thermal sensors
            translate temperature differences into a <strong>color‑coded image</strong> called
            a thermogram:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Hotter areas</strong> appear as bright yellow, orange, or white.
            </li>
            <li>
              <strong>Cooler areas</strong> appear as purple, blue, or green.
            </li>
          </ul>
          <p>
            Mounted on drones, these sensors provide a <strong>comprehensive aerial
            perspective</strong>, allowing large‑scale inspections quickly and safely.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 2. Emissivity */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">2. Understanding Emissivity — The Key to Accurate Thermal Readings</h2>
          <p>
            One of the most important — and often overlooked — factors in thermal imaging is
            <strong> emissivity</strong>.
          </p>
          <p>
            <strong>What is emissivity?</strong> It’s a measure of how effectively a material
            emits infrared radiation compared to a perfect “blackbody” emitter (which has an
            emissivity of 1.0).
          </p>
          <h3 className="text-2xl font-semibold">Why it matters:</h3>
          <ul className="list-disc list-inside">
            <li>
              High‑emissivity materials like wood, brick, and matte paint surfaces give more
              accurate temperature readings.
            </li>
            <li>
              Low‑emissivity materials like shiny metals reflect more infrared energy than they
              emit, which can cause misleading readings.
            </li>
            <li>
              Environmental factors like moisture, dirt, or coatings can alter a surface’s
              emissivity.
            </li>
          </ul>
          <p>
            <strong>Example:</strong> If you scan a shiny metal roof with a thermal camera, it might
            show a “cold” spot simply because it’s reflecting the sky, not because the material
            itself is actually cold.
          </p>
          <h3 className="text-2xl font-semibold">Best practices in drone thermal work:</h3>
          <ul className="list-disc list-inside">
            <li>Know the emissivity of the materials you’re inspecting.</li>
            <li>Adjust the camera’s emissivity settings accordingly.</li>
            <li>
              Avoid interpreting results without context — always consider surrounding materials
              and conditions.
            </li>
          </ul>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 3. Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">3. Common Use Cases Across Industries</h2>

          <h3 className="text-2xl font-semibold">Solar Energy</h3>
          <p>
            Thermal imaging quickly identifies <strong>faulty or underperforming solar panels</strong>
            by spotting “hot spots” caused by electrical or mechanical failures.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Impact:</strong> Detecting defects early can prevent efficiency loss worth
              <em> tens of thousands of dollars annually</em> for large solar farms.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold">Construction</h3>
          <p>
            Thermal drones help detect <strong>insulation gaps, air leaks, and water intrusion</strong>
            in buildings.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Impact:</strong> Prevents costly rework, reduces energy loss, and supports
              compliance with energy‑efficiency standards.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold">Electrical Utilities</h3>
          <p>
            Thermal imaging spots <strong>overheating transformers, loose connections, and failing
            components</strong> before they cause outages or fires.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Impact:</strong> Reduces downtime and prevents expensive emergency repairs.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold">Roofing</h3>
          <p>
            Thermal scans reveal <strong>moisture trapped beneath roofing membranes</strong>,
            pinpointing damage without destructive inspection.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Impact:</strong> Allows targeted repairs, saving thousands in unnecessary
              replacement costs.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold">Public Safety</h3>
          <p>
            Thermal drones are invaluable for <strong>search and rescue</strong>, detecting heat
            signatures of missing persons in dense terrain or at night.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Impact:</strong> Saves lives by drastically reducing search times.
            </li>
          </ul>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 4. Savings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">4. Real‑World Savings Examples</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Solar Farm ROI:</strong> A 50MW facility detected 2% panel failure using thermal
              drones. Repairs restored efficiency, recovering an estimated
              <strong> $120,000 in lost annual revenue</strong>.
            </li>
            <li>
              <strong>Commercial Building Audit:</strong> A thermal roof inspection found water
              intrusion affecting only 15% of the surface — avoiding a full
              <strong> $250,000 roof replacement</strong>.
            </li>
            <li>
              <strong>Electrical Substation:</strong> Early detection of a failing transformer coil
              prevented an unplanned outage, saving <strong>$40,000</strong> in emergency repairs
              and downtime.
            </li>
          </ul>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 5. Why drones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">5. Why Use Drones for Thermal Imaging Instead of Ground Inspections?</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Coverage:</strong> Scan large areas quickly — ideal for solar farms,
              construction sites, and power lines.
            </li>
            <li>
              <strong>Safety:</strong> No need for workers to enter hazardous zones or work at heights.
            </li>
            <li>
              <strong>Speed:</strong> Inspections that take days on foot can be done in <strong>hours</strong>.
            </li>
            <li>
              <strong>Perspective:</strong> Aerial vantage points reveal issues invisible from ground level.
            </li>
          </ul>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Bottom line */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold">The Bottom Line</h2>
          <p>
            Thermal imaging is more than just a “cool” technology — it’s a <strong>profit‑saving
            and safety‑enhancing tool</strong>. By revealing what’s invisible to the naked eye, it
            helps companies save money, prevent failures, and improve safety.
          </p>
          <p>
            In an era where efficiency, safety, and sustainability are top priorities, the ability
            to see the unseen is no longer optional — it’s a competitive advantage. And with
            drones, that advantage is more accessible than ever.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Tell Us About Your Project!
            </h3>
            <p className="text-gray-700">
              We will respond within 24hrs
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:jerome.sterling@sterflies.com?subject=Inquiry"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
              >
                Email us!
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50"
              >
                Blogs
             </Link>
            </div>
          </div>
        </div>

    <hr className="my-16 border-gray-300" />

        {/* References */}
        <section>
          <h2 className="text-3xl font-bold">References & Further Reading</h2>
          <ol className="list-decimal list-inside">
            <li>
              <em>FLIR Systems.</em> How Emissivity Affects Thermal Imaging.
              {' '}<a
                href="https://www.flir.com/discover/professional-tools/how-does-emissivity-affect-thermal-imaging/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Link
              </a>
            </li>
            <li>
              <em>SkyTech.</em> How councils are using drone technology and thermal imaging.
              {' '}<a
                href="https://www.skytechcambridge.co.uk/how-councils-are-using-drone-technology-and-thermal-imaging/"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Link
              </a>
            </li>
            <li>
              <em>U.S. Department of Energy.</em>
              {' '}<a href="https://energy.gov" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 underline hover:text-blue-800"
              >
                Link</a>
            </li>
            <li>
              <em>National Roofing Contractors Association.</em> Thermal Roof Inspections.
              {' '}<a href="https://www.nrca.net" 
              target="_blank" 
              rel="noopener"
              className="text-blue-600 underline hover:text-blue-800"
              >
                Link</a>
            </li>
            <li>
              <em>DJI Enterprise.</em> The Basics of Thermal Drones.
              {' '}<a
                href="https://enterprise-insights.dji.com/blog/thermal-drone-basics"
                target="_blank"
                rel="noopener"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Link
              </a>
            </li>
          </ol>
        </section>
      </article>
    </div>
  )
}