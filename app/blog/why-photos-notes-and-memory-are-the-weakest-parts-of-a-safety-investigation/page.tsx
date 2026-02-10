// app/blog/why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (replace with your uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770759280/69044891e3b2e9001d8e91b0_aplk7q.jpg'

// Image Set 1: Close up (image) + spatial reference (video)
const CLOUDINARY_PHOTOS_CONTEXT_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770756292/Captura_de_pantalla_2026-02-10_144439_kx9o5c.png'

const CLOUDINARY_CONTEXT_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1770754376/picture-context_qk2ysu.mp4'

const CLOUDINARY_CONTEXT_VIDEO_POSTER =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767904099/context-video-poster.jpg'

// Memory
const CLOUDINARY_MEMORY =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770756942/Incident_investigation_for_safer_workplaces_2000_x1000_zvtsr9.jpg'

// Before / After
const CLOUDINARY_BEFORE_AFTER_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770757443/Mold-Removal-jpeg_uvmwnf.webp'
const CLOUDINARY_BEFORE_AFTER_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770757442/0C5FA06E-376E-4940-8528-A6A6E3F7E2B0-1024x768_vya4s9.jpg'

// Preserve reality
const CLOUDINARY_PRESERVE_REALITY =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770758085/large_point_cloud_2_chqgjy.jpg'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Commercial site documentation with drones and 3D scanning"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Why Photos, Notes, and Memory Are the Weakest Parts of a Safety Investigation
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            Why traditional evidence becomes fragile when the site changes
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-10">February 10, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Safety investigations are often built on three familiar pillars. Photographs taken at the site. Notes written by
            investigators or supervisors. And recollections from workers, managers, or witnesses.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These tools are widely accepted, heavily relied upon, and deeply ingrained in safety workflows. They are also
            the weakest parts of most investigations.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This does not mean they are useless. Photos, notes, and interviews are essential. But when investigations
            depend on them as primary evidence rather than supporting material, clarity and defensibility begin to erode.
            The limitation is not effort or competence. It is structure.
          </p>
        </header>
      </section>

      {/* Image Set 1: Close up (image) vs spatial context (looping mp4) */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_PHOTOS_CONTEXT_1}
            alt="Close up photo showing a site condition without spatial orientation"
            caption="A close up photo captures detail but removes spatial orientation and proximity."
          />
          <VideoFigure
            src={CLOUDINARY_CONTEXT_VIDEO}
            poster={CLOUDINARY_CONTEXT_VIDEO_POSTER}
            caption="A spatial walkthrough preserves where conditions exist within the site, not just what they look like. Remote viewing from anywherere allows investigators to maintain orientation and context as they review evidence."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Photographs capture detail but destroy orientation">
          <p className="mt-4 text-base leading-7 text-slate-700">
            A photograph freezes a moment. In doing so, it strips away spatial context.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Close up images are particularly vulnerable to misinterpretation. They show a condition clearly but remove
            information about where that condition exists, what surrounds it, and how it relates to nearby systems,
            equipment, or work paths. Distance, elevation, and adjacency are lost.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Even wide angle photos suffer from the same limitation. Perspective distortion and selective framing influence
            how scale and proximity are perceived. Two investigators can look at the same image and reach different
            conclusions about severity or relevance. Without preserved context, photographs become interpretive artifacts
            rather than objective records.
          </p>
        </Section>

        <Section title="Notes reflect judgment at a single point in time">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Investigation notes are shaped by what appears important at the moment they are written.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Investigators make real time decisions about what to document, what to omit, and how to describe conditions.
            These decisions are influenced by experience, time pressure, and assumptions about relevance. What seems minor
            during an initial walkthrough may later prove significant once the full scope of the investigation is
            understood.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Notes also lose meaning over time. Descriptions such as nearby, excessive, or minimal rely on the reader
            sharing the writer’s frame of reference. Months later, when conditions have changed or personnel have rotated,
            those references become ambiguous.
          </p>
        </Section>

        <Section title="Memory is reconstructive, not reproductive">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Human memory does not function like a recording device. It reconstructs events based on fragments,
            expectations, and information learned after the fact.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Witnesses unintentionally fill gaps. Investigators reinterpret details as new information emerges.
            Conversations and conclusions influence how events are remembered. This is not negligence. It is human nature.
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_MEMORY}
              alt="Investigation team discussing an incident and reviewing documentation"
              caption="As narratives form, recollections shift. Memory becomes less reliable the longer the gap from the event."
            />
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            As time passes, recollections drift further from the conditions that actually existed. When memory becomes
            evidence, uncertainty follows.
          </p>
        </Section>

        <Section title="How these weaknesses compound over time">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The weaknesses of photos, notes, and memory amplify one another.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A photograph without context is interpreted using notes. Notes are interpreted using memory. Memory evolves as
            conversations continue and conclusions form. With each step, the investigation moves further away from the site
            as it existed at the time of the event.
          </p>
        </Section>

        {/* Image pair: Before and after */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_BEFORE_AFTER_1}
            alt="Site conditions before cleanup, repair, remediation, or restricted access"
            caption="As-found conditions: Site documentation reflecting physical reality before conclusions, assumptions, or remediation influence interpretation."
          />
          <Figure
            src={CLOUDINARY_BEFORE_AFTER_2}
            alt="Site conditions after cleanup, repair, remediation, or restricted access"
            caption="Altered conditions: After physical changes occur, investigators must rely on secondary evidence rather than preserved context."
          />
        </div>

        <Section title="Real world consequences in safety investigations">
          <p className="mt-4 text-base leading-7 text-slate-700">
            These limitations create tangible consequences.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Root cause analyses may identify contributing factors without fully understanding how they interacted.
            Corrective actions may target symptoms rather than systemic weaknesses. Disagreements arise between stakeholders
            because interpretations differ. In high stakes environments, this lack of clarity undermines confidence in
            findings and weakens the value of the investigation itself.
          </p>
        </Section>

        <Section title="Strong investigations preserve reality, not just evidence">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The strongest investigations reduce reliance on interpretation by preserving site conditions as they existed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This does not replace photos, notes, or interviews. It places them within a framework that captures spatial
            relationships, orientation, and environment. When context is preserved independently of memory and narrative,
            investigations become clearer and more defensible.
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_PRESERVE_REALITY}
              alt="Commercial interior 3D scan or digital twin showing site preserved for review"
              caption="Preserving the site spatially reduces reliance on interpretation and strengthens defensibility."
            />
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Strong investigations document more than what was seen. They preserve how the site functioned.
          </p>
        </Section>

        <Section title="Closing perspective">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Photos, notes, and memory will always be part of safety investigations. They are familiar, accessible, and
            necessary. They are also fragile.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When investigations depend on them without preserved context, uncertainty increases and confidence declines.
            The goal of a safety investigation is not simply to collect information. It is to understand what actually
            existed, how it functioned, and how factors aligned.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The weakest investigations document pieces of a site. The strongest investigations preserve the site itself.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want stronger investigations without relying on interpretation
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies helps safety and risk teams preserve site reality with spatially accurate documentation that
            supports clearer investigations, stronger defensibility, and faster decision making.
          </p>
          <p className="mt-4">
            <Link href="/blog" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900">
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