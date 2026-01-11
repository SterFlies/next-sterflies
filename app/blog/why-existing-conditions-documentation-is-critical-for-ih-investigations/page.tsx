// app/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets
const CLOUDINARY_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768151899/Mold-Inspection-image-5_ceiqaj.webp'

const CLOUDINARY_SITE_CHANGE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767905302/Screenshot_2026-01-08_144800_qrzymb.png'

const CLOUDINARY_VISUAL_CONTEXT_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/Timeline_1_dbtois.mp4'

const CLOUDINARY_NEUTRAL_RECORD =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg'

export default function ExistingConditionsIhInvestigationsBlogPage() {
  return (
    <div className="bg-white py-30">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_HERO}
            alt="Header image for article: Why Existing Conditions Documentation Is Critical for Environmental & IH Investigations"
            width={1200}
            height={800}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight">
            Why Existing Conditions Documentation Is Critical for Environmental & IH Investigations
          </h1>

          <p className="text-gray-600 text-xl italic mt-2">
            Preserving site context before it changes—without replacing the role of the industrial hygienist.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-01-11">January 11, 2026</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12 space-y-6">
          <p>
            In industrial hygiene and environmental consulting, conclusions are only as strong as the
            conditions that can be clearly demonstrated.
          </p>

          <p>
            Whether an investigation involves mold, asbestos, IAQ concerns, or construction-related exposure
            pathways, the ability to preserve site conditions at a specific point in time can be just as
            important as sampling results and laboratory analysis.
          </p>

          <p>
            Yet many projects still rely heavily on written notes, handheld photographs, and memory-based
            reconstruction. These tools remain valuable, but they can leave gaps when conditions change,
            access is lost, or findings are later questioned.
          </p>

          <p>This is where existing conditions documentation plays a supporting role.</p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* The challenge */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">The Challenge: Sites Change Faster Than Reports</h2>

          <p>
            Environmental investigations rarely occur in static environments. Conditions can change quickly due to:
          </p>

          <ul>
            <li>Remediation, demolition, or selective removal</li>
            <li>Temporary containment or engineering controls</li>
            <li>Weather events, moisture intrusion, or drying</li>
            <li>Occupant alterations, cleanup efforts, or repairs</li>
          </ul>

          <p>
            Once a site changes, reconstructing “what was present at the time” becomes difficult—or impossible.
            Even strong reports can be challenged if visual context, spatial relationships, or surface conditions
            are no longer available for review.
          </p>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_SITE_CHANGE}
              alt="Example screenshot representing how site conditions can change after remediation or repairs"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Once conditions change, the original context can’t be fully recreated.
            </figcaption>
          </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* What it means */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">
            What “Existing Conditions Documentation” Means in Practice
          </h2>

          <p>
            In the IH and environmental context, existing conditions documentation is not marketing media.
            It is objective capture of spatial reality—preserving conditions as they exist at a specific moment in time.
          </p>

          <p>Depending on the project, that can include:</p>

          <ul>
            <li>High-resolution visual records of affected areas</li>
            <li>Spatial context showing how rooms, materials, and systems relate</li>
            <li>Time-stamped documentation tied to a specific site visit</li>
            <li>Measurable 3D representations that can be revisited later</li>
          </ul>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            The goal isn’t interpretation—it’s preservation.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Visual context */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">Why Visual Context Matters in Environmental Investigations</h2>

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
              Visual context example: preserving sampling locations within the environment.
            </figcaption>
          </figure>

          <p>
            Environmental conditions are rarely isolated to a single surface or sample point. Mold growth, fiber migration,
            and air pathways are influenced by building geometry, material transitions, penetrations, and moisture sources.
          </p>

          <p>
            A preserved visual record helps demonstrate how conditions relate to one another—not just that they exist.
            This becomes especially valuable when explaining findings to non-technical stakeholders or reviewing conditions
            months later after access is restricted.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Supporting role */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">Supporting, Not Replacing, Professional Judgment</h2>

          <p>
            Existing conditions documentation does not replace sampling, analysis, or professional interpretation.
            It acts as a reference layer that supports the work—especially when third parties need to understand site context
            long after conditions have changed.
          </p>

          <p>
            In practice, that means you can revisit the environment virtually to verify spatial relationships, confirm
            documented conditions, and reduce ambiguity during review.
          </p>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_NEUTRAL_RECORD}
              alt="Example visual record showing annotated environmental data context"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Documentation supports professional findings by preserving context—not adding conclusions.
            </figcaption>
          </figure>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Use cases */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">Where This Adds Value for IH & Environmental Work</h2>

          <p>Existing conditions documentation is commonly leveraged for:</p>

          <ul>
            <li>Mold and moisture investigations</li>
            <li>Asbestos-containing material assessments</li>
            <li>IAQ complaints and pathway analysis</li>
            <li>Pre- and post-remediation condition records</li>
            <li>Construction-related exposure concerns</li>
            <li>Dispute or claim-related documentation support</li>
          </ul>

          <p>
            In each case, the goal is the same: preserve clarity when the site cannot be revisited in its original state.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Objectivity */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">Objectivity and Defensibility</h2>

          <p>
            A key strength of structured site documentation is neutrality. Unlike narrative descriptions alone, visual records
            can be reviewed by multiple parties and reduce reliance on memory or selective imagery.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            A neutral visual record helps others review the same conditions you observed—without changing your role as the professional.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Integration */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">How to Integrate It Into a Real IH Workflow</h2>

          <p>
            Existing conditions documentation is most effective when captured early—before remediation, demolition, or repairs begin.
            Many teams integrate it:
          </p>

          <ul>
            <li>At the initial site visit</li>
            <li>Before invasive testing or removal</li>
            <li>Prior to construction, demolition, or remediation mobilization</li>
            <li>Before reporting, peer review, or third-party evaluation</li>
          </ul>

          <p>
            In many cases, early documentation is never needed again. When it is needed, however, it cannot be recreated.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-700">
            If you capture it early and never use it again, it was still worth having. If you need it later and don’t have it, you can’t go back.
          </blockquote>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Final thoughts */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold mb-4">Final Thoughts</h2>

          <p>
            Industrial hygiene and environmental investigations are ultimately about accuracy, clarity, and professional judgment.
            Existing conditions documentation doesn’t change how investigations are performed—but it strengthens how well conditions can be
            reviewed, communicated, and trusted over time.
          </p>
        </section>

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">Need Early Documentation Before Work Begins?</h3>
            <p className="text-gray-700">
              If you’re planning remediation, removal, or repair work and want a neutral visual context layer captured first,
              reach out and tell us what you’re working on.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:jerome.sterling@sterflies.com?subject=Existing%20Conditions%20Documentation%20Inquiry"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
              >
                Email us
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50"
              >
                More blogs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
