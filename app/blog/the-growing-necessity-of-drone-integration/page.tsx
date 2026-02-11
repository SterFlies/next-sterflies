// app/blog/the-growing-necessity-of-drone-integration-in-modern-professional-workflows/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (replace with your uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770830502/ImageForArticle_8660_17060939845694007_qtwoma.webp'

// Optional: spatial walkthrough video (looping mp4)
const CLOUDINARY_WORKFLOW_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1770831771/DJI_20250915035256_0002_S_lv6q4k.mp4'

const CLOUDINARY_WORKFLOW_VIDEO_POSTER =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v0000000000/sterflies/blog/drone-workflows/site-walkthrough-poster.jpg'

// Context + deliverables
const CLOUDINARY_CONTEXT_OVERVIEW =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg'

const CLOUDINARY_ORTHOMOSAIC =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016627/Screenshot_2025-09-04_151014_cghul8.png'

const CLOUDINARY_THERMAL =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770830515/image33.jpg.large.1024x1024_ore6pz.jpg'

// Industry examples
const CLOUDINARY_INFRASTRUCTURE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770831344/7a2368172713450116bd49cbfebbcfc2b7e27e0f-5184x3888_xitgen.avif'

const CLOUDINARY_SOLAR =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770830912/pix4d-pix4dmapper-thermal-map-inspection-solar-panel-modules-FLIR-obvilion-dirt2_loslwv.jpg'

const CLOUDINARY_MINING =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1753979367/stockpile-website_gctpwh.png'

const CLOUDINARY_ENVIRONMENTAL =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770831407/53p2cover_lgag26.jpg'

const CLOUDINARY_SYSTEMATIC_CAPTURE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770831451/g2249875-case-study-la-cima-img-g_cra1fx.webp'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Drone documenting a commercial worksite for measurable site records"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            The Growing Necessity of Drone Integration in Modern Professional Workflows
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            Why drones are becoming a standard layer of documentation, not an optional add on
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-11">February 11, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Drones used to be treated like a visual accessory. A flyover for marketing. A quick set of photos
            for a progress update. Something helpful, but not essential. That mindset is changing fast. Across
            construction, environmental consulting, infrastructure, energy, mining, and litigation support,
            drone capture is becoming part of the normal workflow because it solves a structural problem that
            traditional documentation struggles to solve consistently. It preserves site reality at scale while
            keeping the context that professionals need in order to make defensible decisions.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The real shift is not that drones can produce beautiful images. The shift is that modern drone
            workflows produce measurable datasets that can be revisited long after a site changes. When a
            workflow depends on physical conditions, especially conditions that evolve quickly, the ability to
            preserve context becomes a necessity.
          </p>
        </header>
      </section>

      {/* Visual: Context overview + optional video walkthrough */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_CONTEXT_OVERVIEW}
            alt="Wide aerial context showing the full site layout and surrounding conditions"
            caption="A contextual aerial picture preserves what the site is and how systems relate to each other, not just what a single condition looks like."
          />
          <VideoFigure
            src={CLOUDINARY_WORKFLOW_VIDEO}
            poster={CLOUDINARY_WORKFLOW_VIDEO_POSTER}
            caption="Videos can be helpful for storytelling and orientation. They can show how a site fits together in a way that still photos cannot."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Why traditional documentation breaks down at scale">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Most professional workflows still depend on familiar tools: ground photos, written notes, and
            people’s recollection of what happened. These tools are valuable, but they are limited by viewpoint
            and completeness. Ground photos tend to isolate conditions. Notes compress complex environments into
            summaries. Recollection becomes less reliable as time passes and narratives form.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The problem usually shows up after the site changes. Construction progresses. Materials move. Areas
            get repaired or remediated. Access becomes restricted. When that happens, teams are forced to make
            decisions with partial context. That is where disagreements grow and defensibility weakens, not
            because professionals are careless, but because the environment was never preserved as a coherent
            whole.
          </p>
        </Section>

        <Section title="Drones are not cameras anymore, they are data systems">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The most valuable drone programs are built around deliverables that support measurement and
            navigation, not just visuals. Orthomosaics provide scaled reference. 3D reconstructions preserve
            geometry and relationships. Thermal overlays introduce an additional layer of insight for moisture,
            heat loss, and electrical anomalies. When these outputs are captured with consistent coverage and a
            clear intent, the drone becomes a repeatable data acquisition system.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is why drone integration is accelerating in high consequence workflows. It reduces reliance on
            interpretation by replacing fragmented snapshots with structured spatial records.
          </p>

          <div className="my-10 grid gap-4 md:grid-cols-2">
            <Figure
              src={CLOUDINARY_ORTHOMOSAIC}
              alt="Orthomosaic map deliverable used for measurable site reference"
              caption="Orthomosaics turn a site into a measurable map, making location and scale clear during review and dispute resolution."
            />
            <Figure
              src={CLOUDINARY_THERMAL}
              alt="Thermal drone imagery used to identify anomalies on a commercial roof"
              caption="Thermal imaging adds a diagnostic layer. It can reveal anomalies that are not obvious in standard visuals."
            />
          </div>
        </Section>

        <Section title="How this applies to SterFlies">
          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies is built around structured site documentation, not one off flights. The goal is to
            preserve a site in a way that supports review, collaboration, and defensibility. That means
            capturing with completeness in mind, prioritizing consistent angles and coverage, and delivering
            outputs that help stakeholders understand where conditions exist, how they relate to surrounding
            systems, and what changed over time.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When documentation is treated as a system, it becomes useful to multiple audiences at once. A
            project manager can verify progress. An industrial hygiene consultant can reference sampling
            locations in context. An attorney can preserve a site before alteration and reduce risks of liability. A property owner can reduce
            ambiguity during claims or disputes. The drone is simply the collection tool. The deliverable is the
            structured dataset and the clarity it creates.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-semibold text-slate-900">SterFlies positioning</p>
            <p className="mt-2 text-base leading-7 text-slate-700">
              SterFlies focuses on forensic style documentation. The value is not just capture, it is
              repeatability, spatial context, and deliverables that remain useful after the site changes.
            </p>
          </div>
        </Section>

        <Section title="Growing use cases across industries">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Drone workflows are expanding because most industries share the same pain point: teams need better
            visibility into physical environments than ground based documentation can reliably provide. When
            drones become part of the workflow, documentation shifts from selective to comprehensive.
          </p>

          <div className="my-10 grid gap-4 md:grid-cols-2">
            <Figure
              src={CLOUDINARY_INFRASTRUCTURE}
              alt="Drone capture supporting infrastructure inspection"
              caption="Infrastructure: safer inspection and repeatable documentation for bridges, corridors, and facilities."
            />
            <Figure
              src={CLOUDINARY_SOLAR}
              alt="Thermal drone scanning over a solar array"
              caption="Solar: thermal sweeps can identify anomalies across large arrays with clear positional reference."
            />
          </div>

          <div className="my-10 grid gap-4 md:grid-cols-2">
            <Figure
              src={CLOUDINARY_MINING}
              alt="Drone mapping used for mining stockpile measurement"
              caption="Mining and aggregates: 3D models support volumetrics, inventory tracking, and terrain change review."
            />
            <Figure
              src={CLOUDINARY_ENVIRONMENTAL}
              alt="Aerial mapping revealing drainage and grading context"
              caption="Environmental: aerial context helps reveal drainage paths, grading issues, and adjacency influences."
            />
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The pattern is consistent. The industries that benefit most are the ones where context matters and
            where conditions change quickly. When teams can review a site remotely with orientation intact, the
            quality of decisions improves and the cost of uncertainty drops.
          </p>
        </Section>

        <Section title="The real advantage is systematic capture, not emergency capture">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Many organizations first adopt drones reactively, usually after a dispute, a surprise condition, or
            an incident. That can still be valuable, but the strongest results come from planned capture phases.
            Systematic capture creates baselines, makes change detection possible, and prevents the most common
            documentation failure: gaps that cannot be reconstructed later.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In construction, that can mean repeat flights at predictable milestones. In solar, it can mean
            routine thermal sweeps. In environmental work, it can mean baseline mapping before disturbance and
            follow up mapping after key changes. When capture becomes routine, the site becomes reviewable at
            any point in its history.
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_SYSTEMATIC_CAPTURE}
              alt="Systematic drone capture schedule integrated into a professional workflow"
              caption="When drone capture is integrated into the workflow, documentation becomes an operational system rather than a one time snapshot."
            />
          </div>
        </Section>

        <Section title="To wrap this up">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Drone integration is becoming a standard because it closes a gap that professionals have lived with
            for years. It preserves site reality with context, scale, and measurability. As projects become
            more complex and scrutiny increases, documentation must evolve. The organizations that treat drone
            capture as a structured layer of the workflow will operate with clearer records, stronger
            communication, and better defensibility when questions arise later.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            SterFlies exists to deliver that clarity. Not to simply fly drones, but to preserve environments in
            a way that remains useful after the site changes and the moment is gone.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want drone documentation that is built for defensibility and decision making
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies provides structured aerial documentation and spatial deliverables for construction,
            environmental work, infrastructure, energy, and litigation support.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 font-medium shadow hover:bg-slate-100"
            >
              More blogs
            </Link>
          </div>
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

function VideoFigure({
  src,
  poster,
  caption,
}: {
  src: string
  poster?: string
  caption: string
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-black">
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>
    </figure>
  )
}