// app/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (swap version IDs once uploaded)
const CLOUDINARY_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767904099/Screenshot_2026-01-07_135958_aylyh6.png'

const CLOUDINARY_RISK =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767665046/Screenshot_2026-01-05_200321_cnzuw0.png'

const CLOUDINARY_VISUAL_CONTEXT =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/Timeline_1_dbtois.mp4'

const CLOUDINARY_EARLY_VALUE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767905302/Screenshot_2026-01-08_144800_qrzymb.png'

export default function SiteConditionsBlogPage() {
  return (
    <div className="bg-white py-30">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_HERO}
            alt="LinkedIn article header screenshot: Why Site Conditions Should be Documented Before They Are Altered"
            width={1200}
            height={800}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight">
            Why Site Conditions Should Be Documented Before They Are Altered
          </h1>

          <p className="text-gray-600 text-xl italic mt-2">
            A Visual Context Layer for Industrial Hygiene and Environmental Reporting
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-01-08">January 8, 2026</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12">
          <p>
            In industrial hygiene and environmental consulting work, timing and context are often
            underestimated risks.
          </p>

          <p>
            Once remediation, cleanup, repairs, material removal, or other site-altering activities
            begin, original site conditions are permanently changed. Spatial relationships shift,
            surfaces are disturbed, and the visual context surrounding sampling locations can no
            longer be revisited. When questions arise later during reporting, review, or legal
            scrutiny, the opportunity to reference original conditions is often no longer
            available.
          </p>

          <p>This is where forensic site documentation plays a supporting role.</p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Risk of After-the-Fact */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">The Risk of After-the-Fact Documentation</h2>

          <p>
            Environmental and industrial hygiene projects often rely on documentation captured
            after portions of the work have already begun. While this may be sufficient for
            progress tracking, it can be limiting when objective reference is required later.
          </p>

          <p>
            Once site conditions change, sampling locations become harder to visualize,
            relationships between affected and unaffected areas lose clarity, and environmental
            context surrounding data points is reduced. At that stage, documentation reflects only
            what remains rather than the conditions under which data was collected.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Documentation captured after alteration reflects what remains, not what existed at the
            time of assessment.
          </blockquote>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_RISK}
              alt="Screenshot showing The Risk of After-the-Fact Documentation section with supporting text and quote"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Example Photo of Mold Spore count annotated with sampling location
            </figcaption>
          </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* What it is / is not */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">
            What Forensic Site Documentation Is and What It Is Not
          </h2>

          <p>
            Forensic site documentation is the process of preserving site conditions as they exist
            at a specific moment in time, prior to physical alteration.
          </p>

          <p>
            It is designed to preserve visual and spatial context, record layout and conditions
            objectively, and provide a reference that remains usable after site changes occur. It
            is not inspection, sampling, analysis, or interpretation. It does not replace the role
            of the industrial hygienist or environmental consultant.
          </p>

          <p>
            Instead, it provides a neutral, third-party visual and spatial record that supports
            professional findings and reporting.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Visual / spatial context */}
        <section className="mb-12">
  <h2 className="text-4xl font-semibold">
    Why Visual and Spatial Context Matters for Data-Based Reporting
  </h2>

  <figure className="my-16">
    <video
      src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/Timeline_1_dbtois.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full rounded-lg shadow-sm"
    />
    <figcaption className="text-center text-gray-500 mt-2">
      Visual context example: preserving sampling locations within the environment
    </figcaption>
  </figure>

  <p>
    In industrial hygiene and environmental assessments, individual data points are most
    useful when reviewed in relation to their surroundings.
  </p>

  <p>
    Without preserved visual and spatial context, sampling locations lose long-term clarity,
    area-to-area relationships become harder to demonstrate, and exposure pathways are less
    intuitive to reviewers. As a result, findings rely more heavily on written description
    alone.
  </p>

  <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
    Forensic site documentation preserves the environment in which data was collected,
    allowing findings to be reviewed in context without adding interpretation.
  </blockquote>
</section>

        <hr className="my-16 border-gray-300" />

        {/* When early documentation is valuable */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">When Early Documentation Is Most Valuable</h2>

          <p>
            Forensic site documentation is most effective when performed before remediation,
            cleanup, repairs, or material removal begin; before access to the site becomes
            restricted; and before conditions change in ways that cannot be reversed. It is also
            valuable prior to reporting, peer review, or third-party evaluation.
          </p>

          <p>
            In many cases, early documentation is never needed again. When it is needed, however,
            it cannot be recreated.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            Once original site conditions are altered, they cannot be fully reconstructed.
          </blockquote>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_EARLY_VALUE}
              alt="Screenshot showing When Early Documentation Is Most Valuable section with supporting quote"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Early capture preserves context that can’t be recreated later
            </figcaption>
          </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Neutral role */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">A Neutral, Supporting Role by Design</h2>

          <p>
            Forensic site documentation is intentionally limited in scope. The role focuses on
            objective capture, accurate preservation, and organized delivery of visual and spatial
            records. Interpretation, analysis, regulatory assessment, and conclusions remain the
            responsibility of the industrial hygienist or environmental professional.
          </p>

          <p>
            This separation ensures documentation remains objective, consistent, and appropriate for
            professional use.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Final thought */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">Final Thought</h2>

          <p>
            Forensic site documentation is not about proving conclusions. It is about preserving
            context. When site conditions change, visual and spatial records remain, supporting the
            work of professionals responsible for collecting data and drawing conclusions.
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