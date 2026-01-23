// app/blog/documenting-mold-assessments-and-supporting-safety-decisions/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (swap version IDs once uploaded)
const CLOUDINARY_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png'

const CLOUDINARY_MOISTURE_CONTEXT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769207358/Screenshot_2026-01-23_162843_tckamn.png'

const CLOUDINARY_VISUAL_CONTEXT_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/IAQ_-_DEMO_showcase_qo4nav.mp4'

const CLOUDINARY_FLOORPLAN_IMAGE =
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769208705/Matterport_FloorplanSample_FLOOR1_sx2rvd.png'


export default function DocumentingMoldAssessmentsAndSupportingSafetyDecisions() {
  return (
    <div className="bg-white py-30">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_HERO}
            alt="Article header image: Documenting Mold Assessments and Supporting Safety Decisions"
            width={1200}
            height={800}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight">
            Documenting Mold Assessments and Supporting Safety Decisions
          </h1>

          <p className="text-gray-600 text-xl italic mt-2">
            A mold focused documentation approach that supports IH workflows through moisture context,
            sampling clarity, and defensible visuals
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-01-23">January 23, 2026</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12 space-y-6">
          <p>
            Mold projects are different from many other IH investigations because conditions can
            evolve quickly and the physical evidence can disappear fast. Moisture dries. Materials
            are removed. Containment goes up. Airflow patterns change. Even a well run project can
            unintentionally erase the exact conditions that informed the original assessment.
          </p>

          <p>
            That is why I like using Jerome E. Spear’s article as a grounding reference. It lays out
            the fundamentals of mold risk assessment and remediation with an emphasis on proactive
            management, prompt action, moisture control, and practical decision making. Read it here:{' '}
            <a
              className="text-blue-600 underline"
              href="https://jespear.com/mold-risk-assessment-and-remediation/"
              target="_blank"
              rel="noreferrer"
            >
              https://jespear.com/mold-risk-assessment-and-remediation/
            </a>
          </p>

          <p>
            This post is not a remediation guide and it is not an assessment method. It is a mold
            specific documentation strategy designed to support industrial hygienists, EHS teams, and
            environmental consultants by preserving the site conditions that matter most in mold work
            before they change.
          </p>

          <p>
            The goal is simple. Preserve moisture context, sampling context, and spatial context so
            qualified professionals can communicate findings clearly and defend decisions later.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Context first */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">What Makes Mold Work Unique</h2>

          <p>
            In mold investigations, the main story is often moisture. Where it came from, how long it
            persisted, what materials were impacted, and what pathways allowed migration. That story
            is easier to understand when the environment is documented in a way that shows
            relationships instead of isolated details.
          </p>

          <p>
            Spear’s framework highlights the importance of correcting moisture sources and acting
            quickly. That same urgency creates a documentation challenge. Once drying and demolition
            begin, the original moisture patterns are no longer visible, and stakeholders may later
            debate what was present at the time of assessment.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Mold assessments often come down to moisture pathways and time. Documentation helps
            preserve both in a visual and spatial way.
          </blockquote>

          <div className="text-center">
            <Link href="/projects/iaq-mold-documentation">
              <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition mx-auto">
                Check Out DEMO
              </button>
            </Link>
          </div>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_MOISTURE_CONTEXT}
              alt="Moisture and material context example image"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Moisture context and material transitions matter in mold investigations. Capturing the
              surrounding environment helps preserve that story.
            </figcaption>
          </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Documentation role */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Document Moisture Context, Not Conclusions</h2>

          <p>
            Mold risk assessment requires professional judgment. Documentation should not compete with
            that judgment. It should support it by preserving what can be observed and referenced.
          </p>

          <p>
            Neutral mold documentation focuses on moisture indicators and building context. Examples
            include visible staining, material damage, suspected intrusion points, drainage and roof
            conditions, HVAC and condensate components, and how affected areas relate to occupied
            spaces.
          </p>

          <p>
            Documentation does not identify species, determine health impact, assign causation, or
            recommend remediation. It provides a clear record of conditions so qualified
            professionals can interpret findings and communicate them without relying on memory or
            incomplete photos.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Document what is present and where it is present. Let qualified professionals determine
            what it means.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Visual and spatial context */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">
            Sampling Clarity Improves When Locations Are Preserved
          </h2>

          <figure className="my-16">
            <video
              src={CLOUDINARY_VISUAL_CONTEXT_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A navigable documentation layer can help preserve where observations and sampling
              occurred relative to building systems and spaces.
            </figcaption>
          </figure>

          <p>
            In mold work, sampling decisions are often discussed later by people who were not on site.
            That can include a client, a reviewer, an adjuster, counsel, or a building stakeholder.
            Even when the sampling plan is well documented, it can be hard to visualize exactly where
            a sample was taken and what surrounded it.
          </p>

          <p>
            A documentation layer that preserves spatial relationships can help answer common
            follow up questions. Where was the sample relative to a supply register. How close was it
            to a suspected moisture source. What materials were adjacent. What was the condition of
            the pathway between spaces.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Sampling results are easier to communicate when the sampling context is easy to revisit.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* When it helps */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Capture Points That Get Lost in Remediation</h2>

          <p>
            Spear emphasizes prompt action and moisture correction. In practice, that means the
            window to document original conditions can be short. The most valuable time to document
            is often before work begins or as early as access allows.
          </p>

          <p>
            In mold projects, documentation can be especially valuable at a few key moments. Before
            porous materials are removed. Before containment changes pressure relationships. Before
            drying changes visible moisture signatures. Before repairs conceal the original intrusion
            pathway. Before access becomes restricted or the site is rebuilt.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Many mold projects become harder to explain after they are cleaned. Early documentation
            preserves the environment that informed the assessment.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Bridging to your service */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">How This Ties Into My Service</h2>

          <p>
            My service is built to support professionals who work in safety and environmental
            investigations. In mold related projects, that support is focused on one thing. Preserve
            the environment in a neutral way so the assessment, the sampling plan, and the final
            reporting have a clear visual foundation.
          </p>

          <p>
            I document interiors and exteriors as a connected system, including pathways between
            spaces, proximity to building components, and the broader context that is often hard to
            communicate through text alone. The deliverable is an organized documentation layer that
            stays useful after the site changes.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            I do not interpret findings. I preserve the scene so qualified professionals can defend
            their process and communicate with confidence.
          </blockquote>

            <figure className="my-16">
              <Image
                loader={cloudinaryLoader}
                src={CLOUDINARY_FLOORPLAN_IMAGE}
                alt="Floorplan image"
                width={1200}
                height={700}
                className="rounded-lg shadow-sm"
              />
              <figcaption className="text-center text-gray-500 mt-2">
                Sample of a floorplan image that can be generated to complement visual site documentation.
              </figcaption>
            </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Final thought */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Final Thought</h2>

          <p>
            Spear’s framework emphasizes proactive management, prompt assessment, and moisture
            control. Documentation fits naturally into that mindset because it preserves the evidence
            that can be lost when action is taken quickly.
          </p>

          <p>
            If you are an IH, safety professional, or environmental consultant and you want a neutral
            documentation layer that helps preserve moisture context and sampling context without
            stepping into your scope, that is exactly what my forensic site documentation service is
            designed to provide.
          </p>

          <p className="text-gray-600 text-sm italic">
            Disclaimer: This content is informational only. Site documentation is not mold assessment,
            risk evaluation, or remediation guidance. All assessments and decisions should be
            performed by qualified professionals in accordance with applicable standards and
            regulations.
          </p>
        </section>

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">Tell Us About Your Project!</h3>
            <p className="text-gray-700">We will respond within 24hrs</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:jerome.sterling@sterflies.com?subject=Forensic%20Site%20Documentation%20Inquiry"
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

