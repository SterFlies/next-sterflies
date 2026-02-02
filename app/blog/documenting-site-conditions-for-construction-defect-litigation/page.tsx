// app/blog/documenting-site-conditions-for-construction-defect-litigation/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// Cloudinary assets (swap version IDs once uploaded)
const CLOUDINARY_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770058468/construction-defects_urvjgd.webp'

const CLOUDINARY_EVIDENCE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770058511/inspection-site-management-tablet-iStock-1405772906_cjmhpv.jpg'

const CLOUDINARY_MOLD =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png'

const CLOUDINARY_MOLD_THERMAL =
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770061622/moisture-in-block-wall-1_orig_g8g5e8.jpg'

const CLOUDINARY_DRONE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059121/68409970fe1cff00fb5f6d4f_iStock-2089708421_dh8gzv.jpg'

const CLOUDINARY_LIDAR =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059130/Matterport_Dollhouse_t2m33c.webp'

const CLOUDINARY_CONTEXT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059126/44c72aa1e68ac2bd74cfb212da6f835f_o8c6rc.webp'

export default function ConstructionDefectLitigationBlogPage() {
  return (
    <div className="bg-white py-30">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_HERO}
            alt="Construction site documentation for litigation and evidence preservation"
            width={1200}
            height={800}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight">
            Why Documenting Site Conditions Is Critical for Construction Defect Litigation
          </h1>

          <p className="text-gray-600 text-xl italic mt-2">
            Evidence first documentation for construction defect attorneys, mold cases, and building
            failure claims
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-02">February 2, 2026</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12">
          <p>
            For construction defect attorneys, cases are rarely decided by broad allegations alone.
            Outcomes often hinge on specific site conditions, how they appeared at a given moment in
            time, and whether those conditions can be objectively demonstrated months or years
            later. When site conditions are not documented before they are altered, critical
            evidence may be lost permanently.
          </p>

          <p>
            In construction defect litigation, documentation is not merely supplemental. It often
            determines whether claims can be evaluated clearly, defended effectively, or challenged
            with confidence.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Evidence driven */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Construction Defect Claims Are Evidence Driven</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_EVIDENCE}
              alt="Objective evidence documentation of construction site conditions"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Clear site records reduce ambiguity when conditions change during repairs
            </figcaption>
          </figure>

          <p>
            Construction defect claims commonly involve complex interactions between materials,
            systems, and workmanship. Attorneys routinely handle cases involving water intrusion,
            building envelope failures, improper flashing, foundation movement, roof defects,
            structural deficiencies, and mold contamination. These issues are rarely isolated and
            often require careful evaluation of how components were installed and how they
            interacted over time.
          </p>

          <p>
            By the time legal counsel becomes involved, sites are frequently no longer in their
            original condition. Repairs may already be underway, remediation may have begun, and key
            materials may have been removed or concealed. Without early documentation, attorneys are
            left to argue cases where the physical evidence has already changed.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Mold and water intrusion */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Mold and Water Intrusion Claims Require Early Context</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_MOLD}
              alt="Mold and water intrusion conditions documented before remediation"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Moisture conditions and affected materials can disappear once remediation begins
            </figcaption>
          </figure>

          <p>
            <strong>
                <Link
                href="/blog/documenting-mold-assessments-and-supporting-safety-decisions"
                className="text-blue-700 hover:underline"
                >
                Mold
                </Link>
            </strong>{' '}
            related construction defect cases are particularly sensitive to timing. Mold growth
            is often the result of prolonged moisture intrusion, envelope failures, improper
            flashing, or ventilation deficiencies. Once remediation begins, visible mold,
            moisture staining, and affected materials are removed, fundamentally altering the
            site.
            </p>

          <p>
            For attorneys, this creates a challenge. Without documentation captured before
            remediation, it becomes difficult to demonstrate where moisture intrusion occurred, how
            far it spread, and which construction elements contributed to the condition. Early site
            documentation preserves visual and spatial context that supports expert analysis without
            relying solely on post remediation conditions.
          </p>

          <p>
            For additional context, a sample{' '}
            <Link
                href="/services/mold-demo"
                className="text-blue-700 font-medium hover:underline"
            >
                IAQ mold site documentation demo
            </Link>{' '}
            is available to illustrate how site conditions can be preserved visually and
            spatially before remediation begins. The demo shows how documented conditions
            can later be reviewed remotely, even after materials have been removed or
            conditions have changed.
            </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Thermal */}
        <section className="mb-12 space-y-6">
            <h2 className="text-4xl font-semibold">
                Thermal Imaging as a Supporting Documentation Layer
            </h2>

            <figure className="my-16">
            <Image
                loader={cloudinaryLoader}
                src={CLOUDINARY_MOLD_THERMAL}
                alt="Thermal imaging documenting moisture conditions in construction defect litigation"
                width={1200}
                height={700}
                className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
                Thermal imaging captures temperature differentials associated with moisture intrusion
            </figcaption>
            </figure>

            <p>
                Thermal imaging provides an additional layer of documentation in construction
                defect litigation by capturing surface temperature differentials that may be
                associated with moisture intrusion, insulation deficiencies, air leakage, or
                building envelope irregularities. When performed before remediation or repair
                activities begin, thermal imagery preserves visual evidence of anomalous conditions
                that may no longer be observable once materials are removed or assemblies are altered.
            </p>

            <p>
                From a litigation standpoint, thermal imaging does not diagnose conditions or
                replace expert analysis. Instead, it functions as a time stamped visual reference
                that allows experts to correlate temperature patterns with documented site
                conditions. When combined with photographic documentation, drone capture, and
                ground based LiDAR scanning, thermal imagery strengthens overall context and
                supports clearer communication during expert review, mediation, and testimony.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
                Thermal documentation preserves observable temperature patterns at a moment in time,
                providing context that may no longer exist once corrective work begins.
            </blockquote>
        </section>

        {/* Timing */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Timing Is One of the Greatest Litigation Risks</h2>

          <p>
            Once corrective work begins, original site conditions are altered beyond recovery. Walls
            are opened, materials replaced, assemblies modified, and visual indicators removed. Even
            well documented repairs do not recreate the conditions that existed when the defect
            manifested.
          </p>

          <p>
            Early documentation captures site conditions before interpretation, repair, or
            alteration, preserving a factual record that can be reviewed throughout litigation. This
            record allows attorneys and experts to reference what actually existed rather than
            relying on reconstructed narratives or assumptions made after the fact.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Once repairs begin, the environment changes. Early capture preserves what existed at the
            time the issue was observed.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Drone paragraph */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">Drone Based Documentation Preserves Conditions at Scale</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_DRONE}
              alt="Drone capturing exterior and roof conditions for construction defect documentation"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Aerial documentation is especially useful for roof, envelope, drainage, and large site conditions
            </figcaption>
          </figure>

          <p>
            Unmanned aerial systems provide an efficient way to document properties as they exist,
            particularly when allegations involve roofs, building envelope transitions, grading,
            drainage, or large commercial sites. Drone based capture can record high resolution
            exterior conditions, material states, and roof details that can later be altered, patched,
            replaced, or covered.
          </p>

          <p>
            From a litigation workflow standpoint, drone imagery can function as a time stamped
            reference that supports remote review. Attorneys and experts can revisit conditions from
            multiple angles without repeatedly returning to the property, which becomes important
            when access is restricted, unsafe, or unavailable due to ongoing repairs or ownership
            changes. This type of capture is not interpretation. It is a scalable, repeatable record
            of what was present at the time of documentation.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* LiDAR paragraph */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">Ground Based LiDAR Captures Interior and Structural Reality</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_LIDAR}
              alt="Ground based LiDAR scanning interior spaces for measurable documentation"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              LiDAR preserves measurable geometry and spatial relationships before demolition or remediation
            </figcaption>
          </figure>

          <p>
            Ground based LiDAR scanning preserves interiors with a level of dimensional accuracy that
            traditional photography cannot provide. Using laser measurement, LiDAR captures precise
            geometry, spatial relationships, and layout conditions before repairs, remediation, or
            demolition changes the environment. This is particularly valuable in cases involving
            structural movement, settlement, framing irregularities, slab elevation differences, or
            conditions that require measurement rather than description.
          </p>

          <p>
            For attorneys and experts, LiDAR based documentation also supports remote review. Once
            captured, site models can be revisited long after physical conditions change, allowing
            teams to orient themselves, verify locations referenced in reports, and reduce the need
            for repeated site access. It creates a defensible reference of space, placement, and
            relationship between assemblies at the time of capture.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Context */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">Visual and Spatial Context Strengthens Legal Arguments</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_CONTEXT}
              alt="Visual and spatial context for construction defect reporting and expert review"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Clear context helps translate technical findings into understandable site reality
            </figcaption>
          </figure>

          <p>
            Construction defect litigation often involves technical reports referencing elevations,
            interfaces, assemblies, and transitions between materials. Without preserved visual and
            spatial context, these references can be difficult for judges, juries, and opposing
            counsel to interpret. Context is what turns isolated photos or notes into a coherent
            understanding of where conditions existed and how they related to the surrounding
            environment.
          </p>

          <p>
            When exterior and interior documentation are captured objectively, the resulting record
            can help reduce ambiguity during deposition, mediation, and expert review. It supports
            clearer communication of expert findings and provides a consistent reference point as
            the case progresses.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Scenarios */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">
            Common Construction Defect Scenarios Where Documentation Matters
          </h2>

          <p>
            Early site documentation is especially valuable when the alleged defects involve
            conditions that can be removed, concealed, or altered quickly. Common examples include
            mold contamination and moisture intrusion, building envelope and waterproofing failures,
            improper flashing and drainage installation, roofing defects and water penetration,
            foundation movement and settlement, structural deficiencies and framing errors, and
            improper material installation or substitution.
          </p>

          <p>
            In each of these scenarios, the physical environment can change rapidly once corrective
            work begins. Documenting conditions before alteration preserves what existed at the time
            the issue was observed and supports later analysis when the site no longer looks the
            same.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Supporting experts */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Supporting Experts Without Replacing Them</h2>

          <p>
            Drone and LiDAR documentation does not replace forensic engineers, industrial hygienists,
            building envelope consultants, or other experts. Instead, it supports their work by
            preserving the conditions they rely on to form opinions. Maintaining a clear separation
            between documentation and interpretation helps keep the record neutral and appropriate
            for litigation use.
          </p>

          <p>
            Experts can apply their methodologies using preserved site conditions rather than
            attempting to reconstruct environments that no longer exist. Attorneys benefit from a
            consistent evidence layer that reduces ambiguity as the case evolves.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Final thoughts */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Final Thoughts</h2>

          <p>
            Construction defect litigation is driven by details that are often erased once corrective
            work begins. For attorneys handling mold, water intrusion, envelope failures, or
            structural claims, early documentation using drones and ground based LiDAR preserves
            critical context that cannot be recreated later.
          </p>

          <p>
            Documenting site conditions before they are altered is not about assigning fault or
            proving conclusions. It is about preserving reality, ensuring that when disputes arise,
            they can be evaluated against what actually existed at the time.
          </p>
        </section>

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">Got a Litigation Dispute?</h3>
            <p className="text-gray-700">Contact us and tell us about your site</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
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
      </article>
    </div>
  )
}
