// app/blog/digital-evidence-3d-reality-capture-legal-disputes/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets 
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771444596/2958_Article_Daubert-Challenge_Main_1400x760_kivetp.jpg'

// Image pair 1: Drone mapping context + 3D scan context
const CLOUDINARY_PAIR_1_LEFT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228706/HEA_BLO_GEO_Dronelink_wyr6ro.jpg'
const CLOUDINARY_PAIR_1_RIGHT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077084/matterportthumb_rosrlb.png'

// Image pair 2: Interior capture context + thermal context
const CLOUDINARY_PAIR_2_LEFT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770061622/moisture-in-block-wall-1_orig_g8g5e8.jpg'
const CLOUDINARY_PAIR_2_RIGHT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104187/FLIR0101_vq7irp.jpg'

// Optional mid-article image: legal strategy / review context
const CLOUDINARY_MID_IMAGE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771444416/pngtree-architect-reviewing-a-3d-building-model-on-tablet-with-blueprints-and-image_20267766_mv9ohu.webp'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Digital evidence and 3D reality capture for legal disputes using drones, LiDAR, and immersive documentation"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Digital Evidence in Legal Disputes: How 3D Reality Capture Is Changing Case Strategy
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            When the site changes, the evidence should not
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-18">February 18, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Legal disputes involving physical environments nearly always revolve around the same problem: reconstruction.
            By the time attorneys, insurers, and experts are fully engaged, the site in question has often changed.
            Materials have been removed, temporary conditions dismantled, weather has altered surfaces, and human recollection has faded.
            What remains is interpretation layered over incomplete documentation.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Three dimensional reality capture changes that dynamic. Drone mapping, LiDAR scanning, immersive walkthrough models, and radiometric thermal
            capture allow a site to be preserved as a navigable, measurable record at a specific moment in time. Instead of describing conditions,
            teams can demonstrate them. Instead of debating approximate scale or orientation, they can extract measurements. Instead of relying solely
            on narrative, they can reference a time stamped dataset that keeps spatial context intact.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_PAIR_1_LEFT}
            alt="Drone mapping of a site to preserve spatial context"
            caption="Drone mapping turns a changing site into a time stamped, scaled record that can be revisited throughout a dispute."
          />
          <Figure
            src={CLOUDINARY_PAIR_1_RIGHT}
            alt="Terrestrial LiDAR scanning equipment capturing precise geometry"
            caption="LiDAR scanning preserves geometry and measurable detail that reduces ambiguity when parties disagree about what existed and where."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Why traditional evidence often breaks down under dispute pressure">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The classic evidence package is familiar. Photographs, written reports, sketches, and witness statements.
            These still matter, but they were never designed to preserve spatial reality with precision.
            A photograph captures a frame from one angle. A note captures an observation filtered through perception.
            A sketch captures an interpretation. Even when everyone is operating in good faith, these tools leave room for disagreement because they
            do not preserve the environment as a whole.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Disputes amplify those gaps. Months pass. Site access becomes restricted. Conditions evolve.
            Opposing narratives become harder to reconcile because the shared reference point is weak.
            That is exactly where reality capture begins to influence case strategy.
          </p>
        </Section>

        <Section title="How 3D reality capture changes the strategy, not just the visuals">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The biggest shift is that reality capture moves teams from describing to demonstrating.
            Orthomosaics provide scaled overhead context. Point clouds provide measurable geometry.
            Three dimensional mesh models allow experts to evaluate surfaces and structures from multiple perspectives.
            Immersive interior capture provides a navigable record that remote stakeholders can explore without travel.
            Radiometric thermal data preserves temperature information that can support later analysis when questions arise about failure timing or
            hidden conditions.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In practice, this can reduce interpretive conflict. When parties disagree about distance, slope, line of sight, clearance, or relative location,
            the conversation can shift away from memory and toward measurable reference.
            That shift changes the tone of mediation, the precision of expert opinions, and the confidence of decision makers evaluating exposure.
          </p>
        </Section>

        <div className="my-10">
          <Figure
            src={CLOUDINARY_MID_IMAGE}
            alt="Legal and expert review of site visuals and documentation"
            caption="When evidence is navigable and measurable, legal teams spend less time arguing about what the site looked like and more time addressing the substance of the dispute."
          />
        </div>

        <Section title="The market is expanding because the value is measurable">
          <p className="mt-4 text-base leading-7 text-slate-700">
            This shift is not happening in a vacuum. Commercial drone services have grown rapidly as industries push toward faster, safer, and more
            repeatable inspection and documentation workflows. Grand View Research estimates the global commercial drone market was about 30.02 billion
            dollars in 2024 and projects continued growth through 2030, driven by expanding enterprise adoption across inspection and documentation use cases.
            That growth matters in legal disputes because it reflects mainstream adoption, which increases comfort among insurers, consultants, and experts
            who will later be asked to defend methodology.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Reality capture expansion is not only about drones. The 3D scanning ecosystem continues to grow as well, including terrestrial scanning,
            mobile scanning, and hybrid workflows. MarketsandMarkets projects the 3D scanners market to grow from about 1.1 billion dollars in 2023 to
            about 1.5 billion dollars by 2028. The more common these tools become across construction, insurance, and forensic engineering, the more likely
            they are to become expected in higher stakes disputes where the environment itself is central to the claim.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            PwC has also highlighted the broader economic impact of drone powered business solutions, estimating a large total addressable market across
            multiple industries. While market estimates vary by methodology, the consistent theme is that drones and reality capture are increasingly treated
            as operational infrastructure rather than niche technology.
          </p>
        </Section>

        <Section title="Thermal, interiors, and the advantage of layered evidence">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Not every dispute needs every tool, but layered evidence can be strategic. Drone mapping can preserve exterior context, site access,
            and spatial relationships at scale. LiDAR can preserve measurable geometry when dimensional accuracy matters.
            Immersive interior models can preserve conditions that may be altered later, while allowing remote review by experts and counsel.
            Radiometric thermal capture can preserve temperature differentials that support later analysis when the conversation turns to hidden performance
            issues, timing, or whether conditions were present during a specific window.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is also where professionalism shows. Capturing data is not the same as producing evidence.
            Evidence needs traceability. It needs time stamps, location context, and clear documentation of how the dataset was created.
            The goal is not to impress with visuals. The goal is to reduce ambiguity and strengthen defensibility.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_PAIR_2_LEFT}
            alt="Immersive interior capture used for remote review"
            caption="Immersive interior capture allows attorneys and experts to revisit a space without travel, delays, or site access constraints."
          />
          <Figure
            src={CLOUDINARY_PAIR_2_RIGHT}
            alt="Radiometric thermal capture used as supporting evidence"
            caption="Radiometric thermal data preserves measurable temperature information that can support later technical review when disputes escalate."
          />
        </div>

        <Section title="Why this impacts outcomes">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Disputes are often won or lost in the space between uncertainty and clarity. When a site is preserved as a measurable, navigable record,
            the range of plausible disagreement narrows. That can influence how experts frame opinions, how counsel evaluates exposure, and how quickly
            parties move toward resolution.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The future of site based disputes will not rely solely on recollection and static imagery. Increasingly, it will rely on persistent digital reality.
            The legal value is straightforward. When the environment is central to the claim, preserving that environment with defensible methodology becomes
            a strategic asset, not a nice to have.
          </p>
        </Section>

        {/* References */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-slate-900">References</h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
            <li>
              Grand View Research. Commercial Drone Market (global market size and growth).{' '}
              <a
                href="https://www.grandviewresearch.com/industry-analysis/global-commercial-drones-market"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.grandviewresearch.com/industry-analysis/global-commercial-drones-market
              </a>
            </li>

            <li>
              MarketsandMarkets. 3D Scanners Market (market size and growth).{' '}
              <a
                href="https://www.marketsandmarkets.com/Market-Reports/3d-scanner-market-119952472.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.marketsandmarkets.com/Market-Reports/3d-scanner-market-119952472.html
              </a>
            </li>

            <li>
              PwC. Clarity from above, PwC global report on the commercial applications of drone technology (PDF).{' '}
              <a
                href="https://www.pwc.pl/pl/pdf/clarity-from-above-pwc.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.pwc.pl/pl/pdf/clarity-from-above-pwc.pdf
              </a>
            </li>

            <li>
              Tsanakas, J. A., Ha, L., and Buerhop, C. (2016). Faults and infrared thermographic diagnosis in operating c-Si photovoltaic modules: A review
              of research and future challenges. Renewable and Sustainable Energy Reviews.{' '}
              <a
                href="https://www.sciencedirect.com/science/article/pii/S1364032116301629"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.sciencedirect.com/science/article/pii/S1364032116301629
              </a>{' '}
              (supporting background on thermography as measurement and interpretation in operating systems)
            </li>

            <li>
              Google Scholar search: drones photogrammetry LiDAR legal disputes evidence.{' '}
              <a
                href="https://scholar.google.com/scholar?q=drone+photogrammetry+LiDAR+legal+dispute+evidence"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://scholar.google.com/scholar?q=drone+photogrammetry+LiDAR+legal+dispute+evidence
              </a>
            </li>
          </ol>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Need defensible digital site evidence for a dispute
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies supports attorneys, consultants, and stakeholders with drone mapping, LiDAR scanning, immersive capture, and thermal datasets built
            for clarity, repeatability, and defensibility. When the site is central to the claim, the documentation should be measurable.
          </p>
          <p className="mt-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
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