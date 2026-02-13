// app/blog/rebuilding-reality-defensible-digital-site-environments/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (replace with your uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003197/nashville-scan-to-bim-1642095994_pkyjqb.jpg'

// Image pair 1: Exterior context + interior navigation
const CLOUDINARY_EXTERIOR_CONTEXT_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003281/St_Elizabeth_church_image_courtesy_of_Sebastian_Mattes_Schwarzwalddrohne_web-1024x589_heytsh.png'
const CLOUDINARY_EXTERIOR_CONTEXT_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003387/Streamlining-Warehouse-Operations-with-LiDAR-Inventory-Management-1_kvsgeg.jpg'

// Image pair 2: Interior LiDAR + navigable tour
const CLOUDINARY_LIDAR_TOUR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/matterport-pro3-feature-4_pcah4j.webp'
const CLOUDINARY_LIDAR_TOUR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/c4659781721ee58eaaf23acfdc34e6f232fe68ec-1248x652_bnkbx7.avif'

// Image pair 3: Thermal layer (close-up + context)
const CLOUDINARY_THERMAL_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004552/wall_insulation_missing_lvh1hw.jpg'
const CLOUDINARY_THERMAL_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004560/6a99bfc9f787202f7d465678770f076bcb9ff5e0_ofmnbw.jpg'

// Video: remote review / stakeholders viewing digital twin
const CLOUDINARY_REMOTE_REVIEW_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1769104022/virtualtour_dq3b1w.mp4'

// Video: digital twin overview loop
const CLOUDINARY_DIGITAL_TWIN_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1771004218/loop_qnwmfw.mp4'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Defensible digital site environments built with drones, LiDAR scanning, and thermal imaging"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Rebuilding Reality: How SterFlies Creates Defensible Digital Site Environments
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            A long-form perspective on turning real-world sites into navigable, measurable evidence that can be reviewed from anywhere
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-13">February 13, 2026</time>
          </div>

          {/* ✅ UPDATED INTRO (LESS OVERLAP WITH YOUR OTHER BLOGS) */}
          <p className="mt-6 text-base leading-7 text-slate-700">
            Most disputes do not fail because someone “forgot to take a picture.” They fail because the evidence that exists is fragmented,
            hard to orient, and impossible for multiple stakeholders to review as the same shared reality. A single image can show detail,
            but it rarely preserves relationships. A written description can explain what happened, but it cannot let another person verify it
            independently. Over time, that gap turns into interpretive drift, where everyone builds a different mental model of the same site.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies is built around eliminating that drift by recreating real-world sites as navigable digital environments. Instead of
            delivering a folder of disconnected captures, we deliver a measurable digital twin that preserves layout, context, and spatial truth.
            Attorneys, consultants, safety and environmental professionals, and decision makers can review the same preserved environment remotely,
            without relying on narration to “fill in the blanks.”
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Physical sites still change, but the record does not have to. When a site is reconstructed in 3D and anchored with geometry and
            context, it becomes defensible evidence that can be revisited later with clarity, not assumptions. The result is not simply
            documentation. It is preserved reality that holds up over time.
          </p>
        </header>
      </section>

      {/* Image pair 1: Exterior + interior as a cohesive environment */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_EXTERIOR_CONTEXT_1}
            alt="Large scale exterior context captured from above"
            caption="Scale and context. Preserving the exterior environment anchors orientation and keeps analysis from becoming compartmentalized."
          />
          <Figure
            src={CLOUDINARY_EXTERIOR_CONTEXT_2}
            alt="Digital twin style view showing spatial relationships in a facility"
            caption="Continuity. A unified reconstruction preserves spatial relationships instead of isolated viewpoints."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Why fragments are not enough">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Traditional documentation workflows usually focus on isolated details. A crack is photographed. A stain is captured. A roof seam
            is documented. A wall cavity is imaged. These records can be sharp and technically competent, but they rarely preserve the structure
            of the environment. Without spatial continuity, it becomes difficult to answer the questions that matter in high-stakes decisions.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Where exactly was this captured within the structure. What is adjacent to it. What sits above or below it. How far is it from a
            suspected source. How does it relate to drainage, slope, penetrations, access routes, or mechanical systems. When evidence exists
            only as fragments, interpretation becomes unavoidable, and interpretation is where defensibility weakens.
          </p>

          {/* ✅ UNIQUE PARAGRAPH (DIFFERENTIATES THIS POST FROM YOUR OTHER ONES) */}
          <p className="mt-4 text-base leading-7 text-slate-700">
            A defensible record is not just “more documentation.” It is a single source of spatial truth. It is a capture that allows any
            qualified reviewer to orient themselves, validate location and relationships, and revisit the environment without relying on the
            person who was there to narrate what matters. That is the difference between persuasive evidence and verifiable evidence.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies approaches preservation differently. The objective is not simply to record visible issues. The objective is to reconstruct
            the environment so spatial relationships, context, and measurable geometry remain available even after the site changes.
          </p>
        </Section>

        <Section title="Exterior reconstruction preserves context at scale">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Large properties present a documentation challenge that ground level capture alone cannot solve. Industrial facilities, commercial
            campuses, multi-building developments, solar sites, and large residential projects all require an approach that preserves site wide
            context. Exterior factors frequently explain interior conditions. Roof geometry, drainage patterns, parapet transitions, penetrations,
            grading, and proximity to retention zones can all influence moisture migration and failure pathways.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies uses aerial capture and 3D reconstruction to preserve entire properties as continuous spatial datasets. This does not exist
            to create attractive visuals. It exists to preserve orientation, scale, and relationships between features so future reviewers can
            evaluate conditions within the full context of the property rather than through disconnected images.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This matters because defensibility improves when selective framing is reduced. When the exterior environment is preserved as a cohesive
            reconstruction, stakeholders can independently evaluate how site wide conditions relate to localized issues, and the record becomes
            harder to challenge.
          </p>
        </Section>

        {/* Digital twin loop */}
        <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <video
              src={CLOUDINARY_DIGITAL_TWIN_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-4 py-3 text-sm text-slate-600">
            A preserved site environment provides a stable reference that remains available even after physical conditions evolve.
          </div>
        </div>

        {/* Image pair 2: Interior LiDAR + navigable review */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_LIDAR_TOUR_1}
            alt="LiDAR style interior scan capture of a commercial space"
            caption="Interior geometry. LiDAR scanning preserves layout, adjacency, and spatial relationships across rooms and transitions."
          />
          <Figure
            src={CLOUDINARY_LIDAR_TOUR_2}
            alt="Navigable virtual tour view of a commercial property interior"
            caption="Remote navigation. A tour allows stakeholders to revisit the site without relying on the interpretation of whoever captured the data."
          />
        </div>

        <Section title="Interior LiDAR scanning creates navigable digital twins">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Interior environments are especially vulnerable to documentation gaps. Rooms connect in sequence, hallways branch, mechanical runs
            intersect above ceilings, and subtle elevation changes can matter when analyzing pathways, access, and adjacency. Without structured
            capture, orientation is easily lost.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies recreates interior spaces using LiDAR based scanning that produces navigable digital environments. Instead of relying on
            photo folders and written descriptions, a stakeholder can move through the space virtually, maintain orientation, verify room-to-room
            relationships, and understand how conditions relate to the broader layout.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The value here is not convenience. The value is structural integrity of the record. Attorneys, consultants, engineers, adjusters, and
            decision makers can independently explore the same preserved environment. That reduces miscommunication, minimizes interpretation drift,
            and decreases the need for repeat site visits that may not even be possible later.
          </p>
        </Section>

        {/* Image pair 3: Thermal layer (detail + context) */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_THERMAL_1}
            alt="Thermal infrared image highlighting an anomaly"
            caption="Thermal signal. Infrared reveals anomalies that visible imagery cannot, but the signal is strongest when tied to location and context."
          />
          <Figure
            src={CLOUDINARY_THERMAL_2}
            alt="Thermal capture with broader context of the area being evaluated"
            caption="Context prevents misinterpretation. Thermal observations gain credibility when they are anchored to the reconstructed environment."
          />
        </div>

        <Section title="Thermal integration adds an investigative layer, not a standalone claim">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Not all conditions are visible. Moisture migration, insulation deficiencies, heat loss, and electrical anomalies often require infrared
            imaging to detect patterns. At the same time, thermal imagery can be misunderstood when captured without context. A temperature differential
            alone is not an answer. It is a signal that must be anchored to location, geometry, and surrounding conditions.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies integrates thermal capture into the broader reconstruction so thermal observations remain tied to place. When anomalies are
            associated with a preserved environment, they become easier to discuss, validate, and revisit. Thermal does not replace other investigative
            methods. It strengthens the record by adding another dimension that can be reviewed within the same spatial truth as the rest of the site.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In disputes involving moisture intrusion, envelope failure, roofing conditions, or insulation performance, a layered record reduces
            speculative interpretation. It creates a clearer basis for professional review and defensible decision making.
          </p>
        </Section>

        <Section title="Remote accessibility and long-term preservation">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Digital reconstruction changes how teams collaborate. Once a site is recreated, it can be accessed from anywhere. An attorney can review
            conditions without coordinating access. An expert can evaluate relationships without scheduling a second visit. A team can review the same
            environment together without debating orientation or reconstructing details from memory.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Time is just as important as accessibility. Physical sites evolve. Digital reconstructions remain stable. When conditions are captured at a
            point in time and preserved as a navigable environment, stakeholders retain access to that moment even after cleanup, remediation, repairs,
            or renovations occur.
          </p>

          {/* Remote review loop */}
          <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <video
                src={CLOUDINARY_REMOTE_REVIEW_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-4 py-3 text-sm text-slate-600">
              Remote review reduces delays, minimizes repeat site visits, and allows stakeholders to revisit the same preserved environment from anywhere.
            </div>
          </div>
        </Section>

        <Section title="Defensibility comes from structure">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Defensibility is not achieved through technology alone. It is achieved through continuity, measurable preservation, and a record that can stand
            on its own. A defensible record maintains spatial relationships across the property. It reduces selective capture by preserving broader context.
            It supports independent review by third parties. It preserves conditions as they existed at a defined moment in time.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies builds site environments with those principles in mind. By combining large scale exterior reconstruction, interior LiDAR scanning, and
            thermal integration, the output becomes more than documentation. It becomes a preserved environment that remains measurable and navigable even
            when the physical site has changed.
          </p>
        </Section>

        <Section title="Closing perspective">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Every site changes. What is not inevitable is losing the ability to reference how it existed when it mattered. SterFlies recreates sites as
            defensible digital environments that can be navigated, measured, and reviewed from anywhere. When time passes and conditions evolve, the record
            remains stable. In high stakes situations, structure is credibility. Preserved reality is leverage.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">Need to preserve a site as evidence before conditions change</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies recreates sites using drones, LiDAR scanning, and thermal imaging to produce navigable, measurable digital environments that support
            clearer review, stronger defensibility, and faster decisions.
          </p>
          <p className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
            >
              Contact SterFlies
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-100"
            >
              Blogs
            </Link>
          </p>
        </div>
      </article>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      {children}
    </section>
  )
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full">
        <Image loader={cloudinaryLoader} src={src} alt={alt} fill className="object-cover" />
      </div>
      <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>
    </figure>
  )
}