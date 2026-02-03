// app/blog/construction-progress-monitoring-best-practices/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader 
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary 
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770156031/6751a7b6a33cec3127f9e96e_645448fca93097059f02fe4f_drone_20construction_yceynb.webp'
const CLOUDINARY_HERO_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154941/63b931_79b3ed8b41f34d279b7560b5b1ef8dce_mv2_ifumgr.avif'
const CLOUDINARY_HERO_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154947/UC_Riverside_V1mymrP.cdf914ea.fill-900x600_fesz10.jpg'

const CLOUDINARY_ORTHO_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154106/Screenshot_2026-02-03_152748_jpawyn.png'
const CLOUDINARY_ORTHO_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154154/Screenshot_2026-02-03_152901_mwqym5.png'

const CLOUDINARY_COMPARE_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155712/drone-before-after-5-2023_qt9jng.jpg'
const CLOUDINARY_COMPARE_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155706/drone-before-after-5-2023_2_mqqwro.jpg'

const CLOUDINARY_SAFETY_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770156072/safety-drone-macahan_nufxm3.jpg'
const CLOUDINARY_SAFETY_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770156270/s464FFbG4kSdv6vjsFQUyB_Pd_Il2PKF0prrKYaf3Q0jdDf-10tw1CmY2a24gQD7krtAG_-Nv2PlyYf8Lp8tevQxt600jBY_nl6dHP7oFmU_vbvrpl.jpg'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
              <header className="space-y-6">
                <Image
                  loader={cloudinaryLoader}
                  src={CLOUDINARY_TOP_HERO}
                  alt="Construction Hero Image"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-md mx-auto my-12"
                  priority
                />

        <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
          Construction Progress Monitoring
        </h1>

        <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
          Best Practices for Site Managers Using Aerial Documentation
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-02">February 3, 2026</time>
          </div>

        <p className="mt-6 text-base leading-7 text-slate-700">
          Construction projects are living systems. Conditions change daily, crews rotate, materials move,
          and timelines shift. For site managers, keeping an accurate record of progress is not just about
          reporting percent complete, it is about maintaining clarity, accountability, and trust across
          everyone involved in the project.
        </p>

        <p className="mt-4 text-base leading-7 text-slate-700">
          Traditional progress tracking methods like site walks, photos taken from the ground, and written
          reports still have value, but they often fail to capture the full picture. Blind spots,
          inconsistent angles, and missed context can lead to miscommunication, disputes, or costly rework.
          This is where regular aerial documentation has become a powerful tool for modern construction
          management.
        </p>
      </header>
        </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_HERO_1}
            alt="Aerial drone view of a construction site for progress monitoring"
            caption="A consistent aerial vantage point makes progress easier to verify across the full site."
          />
          <Figure
            src={CLOUDINARY_HERO_2}
            alt="Construction progress aerial photography showing site context"
            caption="Wide site context helps reduce blind spots that ground photos miss."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Why Progress Monitoring Matters More Than Ever">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Construction projects today involve more stakeholders than ever before. Owners, developers,
            lenders, inspectors, subcontractors, architects, and legal teams all rely on accurate
            information to make decisions. When progress documentation is unclear or incomplete, small
            misunderstandings can escalate into delays, disputes, or financial losses.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Effective progress monitoring provides a shared source of truth. It allows everyone to see what
            has been completed, what is in progress, and what conditions existed at specific points in
            time. When documentation is visual, objective, and consistent, it removes ambiguity and reduces
            reliance on memory or subjective reporting.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Aerial documentation adds another layer of clarity by capturing the entire site from a
            consistent vantage point, something ground-based photos simply cannot do.
          </p>
        </Section>

        <Section title="The Advantage of Regular Aerial Captures">
          <p className="mt-4 text-base leading-7 text-slate-700">
            One of the biggest mistakes in construction documentation is treating aerial imagery as a
            one-time deliverable. A single drone flight might look impressive, but it offers limited value
            without historical context. The real power comes from regular, repeatable captures.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            By flying the site on a scheduled basis, whether weekly, bi-weekly, or monthly, site managers
            create a visual timeline of progress. This allows changes to be tracked objectively over time
            and makes it easy to answer questions like when did grading finish, when did utilities go in,
            or when was a structure fully enclosed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Regular aerial captures help ensure consistency. When flights are conducted using the same
            flight paths, altitudes, and camera angles, progress comparisons become far more accurate and
            reliable.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_ORTHO_1}
            alt="Orthomosaic drone map of a construction site"
            caption="Orthomosaics provide scale-accurate site visuals for progress verification."
          />
          <Figure
            src={CLOUDINARY_ORTHO_2}
            alt="High-resolution aerial orthomosaic of a construction project"
            caption="Georeferenced imagery helps teams review progress remotely with confidence."
          />
        </div>

        <Section title="Tracking Progress with Orthomosaic Maps">
          <p className="mt-4 text-base leading-7 text-slate-700">
            <Link
                href="/blog/orthomosaic_blog"
                className="font-semibold text-blue-700 hover:text-blue-900"
            >
                Orthomosaic
            </Link>{' '}
            maps are high-resolution, georeferenced images stitched together from multiple
            aerial photographs. Unlike standard photos, orthomosaics are scale-accurate and can be
            measured.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            For site managers, this means progress is not just visible, it is quantifiable. You can verify
            grading extents, confirm pad dimensions, track material placement, and visually confirm work
            completed by specific trades.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Orthomosaics are especially valuable for large or complex sites where walking the entire
            footprint regularly is impractical. They allow teams to review progress remotely while still
            maintaining spatial accuracy.
          </p>
        </Section>

        <Section title="Improving Communication with Stakeholders">
          <p className="mt-4 text-base leading-7 text-slate-700">
            One of the most overlooked benefits of aerial progress monitoring is how dramatically it
            improves communication. Visual data eliminates guesswork. Instead of explaining conditions
            verbally or through dense reports, site managers can simply show the site as it exists.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is particularly valuable when working with remote stakeholders who cannot visit the site
            frequently. Owners and investors can quickly understand progress without needing technical
            construction knowledge. Architects and engineers can visually verify installation sequencing.
            Lenders can confirm milestones tied to funding releases.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Clear visuals reduce the number of clarification emails, meetings, and site visits required to
            keep everyone aligned.
          </p>
        </Section>

        {/* Image pair 3 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_COMPARE_1}
            alt="Aerial construction progress comparison showing site changes"
            width={400}
            height={400}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_COMPARE_2}
            alt="Aerial construction progress comparison showing site changes"
            width={400}
            height={400}
            className="rounded-lg shadow-md mx-auto my-12"
            priority

          />
        </div>

        <Section title="Avoiding Disputes Through Visual Records">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Disputes often arise not because of bad intent, but because of missing context. Questions like
            who installed what, when did damage occur, or what conditions existed before work began are
            difficult to answer without reliable records.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Regular aerial documentation creates a neutral, time-stamped visual archive of the site. This
            can be invaluable when addressing change orders, verifying completed work, or resolving
            disagreements between trades.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In some cases, progress documentation becomes critical evidence during claims or litigation.
            Having clear aerial records showing site conditions at specific dates can protect both site
            managers and project owners by providing objective proof rather than relying on recollection.
          </p>
        </Section>

        <Section title="Enhancing Safety Oversight from Above">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Safety is another area where aerial monitoring provides meaningful benefits. Drones allow site
            managers to observe areas that may be difficult or unsafe to access on foot. This includes
            roof structures, excavation edges, stockpiles, and active work zones.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            From an aerial perspective, it becomes easier to spot potential safety issues such as improper
            material staging, inadequate barricades, or unsafe access paths. Addressing these issues early
            can prevent accidents and keep projects compliant with safety standards.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Importantly, aerial safety reviews reduce the need for personnel to enter hazardous areas solely
            for inspection purposes.
          </p>
        </Section>

        {/* Image pair 4 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SAFETY_1}
            alt="Drone inspecting construction site for safety oversight"
            caption="Aerial views can reveal site safety issues without requiring risky on-foot access."
          />
          <Figure
            src={CLOUDINARY_SAFETY_2}
            alt="Construction site safety inspection from an aerial drone perspective"
            caption="Safety checks become faster to review when the whole site is visible in one frame."
          />
        </div>

        <Section title="Establishing a Repeatable Documentation Workflow">
          <p className="mt-4 text-base leading-7 text-slate-700">
            To get the most value from aerial progress monitoring, consistency is key. Best practices
            include flying on a regular schedule, capturing the site from the same angles each time, and
            organizing deliverables in a way that makes historical comparisons easy.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Successful site managers treat aerial documentation as part of their core reporting workflow,
            not as a novelty. When integrated into weekly updates or monthly reports, aerial visuals become
            a trusted reference point for decision-making.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Equally important is ensuring that imagery is archived and easily accessible. Cloud-based
            delivery allows teams to review site conditions from anywhere, even months or years later.
          </p>
        </Section>

        <Section title="A Smarter Way to Manage Construction Progress">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Construction progress monitoring is no longer just about checking boxes or documenting
            milestones after the fact. With modern aerial documentation, site managers gain a proactive
            tool that supports better planning, clearer communication, and stronger risk management.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            By capturing regular, consistent aerial data, teams gain visibility that extends beyond what is
            possible from the ground. The result is fewer surprises, fewer disputes, and greater
            confidence across every phase of the project.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            For site managers tasked with keeping complex projects on track, aerial progress monitoring is
            no longer optional. It is becoming an essential part of how successful construction projects
            are managed.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want a clearer progress timeline for your project
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies provides repeatable aerial documentation and mapped deliverables that help teams
            track progress, communicate clearly, and reduce ambiguity across stakeholders.
          </p>
          <p className="mt-4">
            <Link href="/blog" className="font-semibold text-blue-700 hover:text-blue-900">
              Explore more articles on site documentation
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
