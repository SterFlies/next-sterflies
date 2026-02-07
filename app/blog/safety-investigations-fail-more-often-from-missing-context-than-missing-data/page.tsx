// app/blog/safety-investigations-fail-more-often-from-missing-context-than-missing-data/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets 
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770489887/66d03b4c81619452a07ef3a5_65d60a01eb4ccc5ad9cac001_construction-worker-standing-rooftops-high-silos-storage-tanks-working-tablet-computer_k2nmod.png'

const CLOUDINARY_DATA_VS_CONTEXT_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490354/epub_pci0122-BlendSupply-618764302-1170_webp_btmajf.webp'
const CLOUDINARY_DATA_VS_CONTEXT_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490415/how_to_scan_a_room_with_a_3d_scanner_rrljwd.jpg'

const CLOUDINARY_FRAGMENTED_DOCS =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490589/1kPrgnEclmZnOA9P2IqFKGGfRPkY6LW0P53DrGdfdRujW6j_e7NCdNSRiY1WAGS0dl-Lzk4DUwHzjPlAfhiJWPMkgeUd7wHqzix88hFqpAFP7-q7TuIUoJWm4koydx6bsTW58O6Yby4KdtgUJAoCPA_w4td9p.jpg'

const CLOUDINARY_INFERENCE_MEETING =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228919/75caa67a79f341c79e274dc8b2f45b1a_iykzbm.jpg'

const CLOUDINARY_SITE_CHANGE_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490930/170927110847-the-warehouse-hotel-before_s0bjig.jpg'
const CLOUDINARY_SITE_CHANGE_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490930/170927111707-the-warehouse-hotel-after_i22ogi.jpg'

const CLOUDINARY_SYSTEM_CONTEXT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770491028/67519e2ca88422dd88f589a3_6743dcf1e7765b9f44474b10_674122c24b68a6172c7d1021-1732323797789_fyzwcv.jpg'

const CLOUDINARY_DIGITAL_TWIN_COMMERCIAL =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770491027/bim-proektirovanie_irqknp.jpg'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Commercial site documentation using drones and 3D scanning"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Safety Investigations Fail More Often From Missing Context Than Missing Data
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            Why spatial context makes documentation defensible and investigations clearer
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-07">February 7, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Safety investigations are often framed as a search for missing information. When outcomes feel
            uncertain, the assumption is that more data is needed. More photos. More measurements. More notes.
            More sampling.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In practice, most investigations are not short on data. They fail because they are missing context.
            Context is what allows information to be interpreted correctly. It explains how conditions relate to
            one another, how proximity influences exposure, and how work actually occurs within a space.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is not a failure of safety professionals. It is a limitation of how documentation is traditionally
            captured.
          </p>
        </header>
      </section>

      {/* Image pair 1: Data vs context */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_DATA_VS_CONTEXT_1}
            alt="Close up documentation photo showing a condition without site orientation"
            caption="Data without context. A close up photo can be accurate and still be difficult to interpret later."
          />
          <Figure
            src={CLOUDINARY_DATA_VS_CONTEXT_2}
            alt="Spatially referenced view showing where the same condition exists within a scanned site"
            caption="Context restores meaning. Spatial documentation shows where the condition exists and what surrounds it."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="The difference between data and context">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Data answers isolated questions. Context explains relationships.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A close up photograph can show a surface condition clearly. It does not explain where that condition exists
            within the site, how far it is from equipment or access paths, or what surrounds it. A written note may
            describe a hazard accurately, but without spatial reference it cannot show how that hazard interacts with
            nearby systems or tasks.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Context includes spatial orientation, scale, adjacency, and environment. It answers where something existed,
            what surrounded it, and how people and processes moved through the space. Without preserved context,
            investigators are forced to interpret data in isolation.
          </p>
        </Section>

        <Section title="Why most investigations have plenty of data">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Most safety investigations are documented thoroughly by conventional standards. They include photographs,
            inspection notes, measurements, and in some cases environmental or industrial hygiene sampling. These materials
            are valuable and necessary.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            However, they are usually collected as fragments. Photos are taken from convenient viewpoints. Notes are written
            based on what appears relevant at the time. Measurements are recorded without a shared spatial reference tying them
            together. Each piece of information may be accurate on its own, but the relationships between them are not preserved.
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_FRAGMENTED_DOCS}
              alt="Fragmented documentation such as photos and notes that do not share a single spatial reference"
              caption="Plenty of documentation can still be incomplete when spatial relationships are not preserved."
            />
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The{' '}
            <Link
              href="https://www.cdc.gov/niosh/twh/programs/?CDC_AAref_Val=https://www.cdc.gov/niosh/twh/default.html"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
             National Institute for Occupational Safety and Health Total Worker Health®
            </Link>{' '}
            program shows how multi-factor approaches improve safety outcomes by integrating environment, behavior, and system context.
          </p>
        </Section>

        <Section title="How missing context weakens investigations">
          <p className="mt-4 text-base leading-7 text-slate-700">
            When context is missing, investigations rely more heavily on interpretation. Investigators must mentally reconstruct
            distances, elevations, access routes, and proximity based on memory or partial documentation. Relevance becomes subjective.
            Stakeholders may disagree on whether nearby conditions contributed to an incident or were unrelated.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            As interpretation increases, confidence decreases. Human factors research repeatedly shows that post incident narratives
            can drift when objective context is missing. A practical way to understand this is through the lens of modern human error
            research, including Sidney Dekker’s work on how hindsight and outcome knowledge shape interpretation. See{' '}
            <Link
              href="https://www.routledge.com/The-Field-Guide-to-Understanding-Human-Error/Dekker/p/book/9781472439055"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              The Field Guide to Understanding Human Error
            </Link>
            .
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_INFERENCE_MEETING}
              alt="Stakeholders reviewing photos and documents in a meeting"
              caption="When context is missing, teams spend more time interpreting and reconstructing rather than verifying."
            />
          </div>
        </Section>

        <Section title="Why context is often lost during documentation">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Context is rarely lost intentionally. It is lost because documentation workflows prioritize efficiency and response over
            preservation. During normal operations, documentation focuses on immediate concerns. During post incident response, the
            priority shifts to mitigation, cleanup, and restoring operations. In both cases, preserving spatial relationships is not
            the primary objective.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Once remediation begins, original conditions may no longer exist. Equipment is moved. Materials are removed. Access routes
            change. Even documentation captured shortly after an event may reflect a modified environment rather than the conditions that
            existed at the time of exposure or failure.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is why{' '}
            <Link
              href="https://www.osha.gov/incident-investigation"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              OSHA accident investigation guidance
            </Link>{' '}
            emphasizes documenting conditions as close to the time of the event as possible. Accuracy declines as environments change.
          </p>
        </Section>

        {/* Image pair 2: Site change */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SITE_CHANGE_1}
            alt="Site conditions before cleanup, repair, or remediation"
            caption="Before. The environment reflects how work was occurring at that moment in time."
          />
          <Figure
            src={CLOUDINARY_SITE_CHANGE_2}
            alt="Site conditions after cleanup, repair, remediation, or restricted access"
            caption="After. Once operations change the site, the original reality may not be recoverable."
          />
        </div>

        <Section title="Context and root cause analysis">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Root cause analysis depends on understanding how multiple factors align to produce an outcome. Incidents rarely result from a single isolated failure.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The work commonly associated with James Reason emphasizes that incidents emerge from combinations of latent conditions and active failures within a system.
            Many latent conditions are spatial in nature. They involve layout, proximity, and interaction between systems. Reason’s foundational work is most often
            cited via{' '}
            <Link
              href="https://doi.org/10.1017/CBO9781139062367"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              Human Error
            </Link>
            .
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_SYSTEM_CONTEXT}
              alt="Industrial or commercial environment showing spatial relationships and layout"
              caption="System context is often spatial. Layout and proximity influence exposure pathways and task behavior."
            />
          </div>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Without preserved context, investigations may identify contributing factors without fully understanding how they interacted.
            Corrective actions may address symptoms rather than underlying system weaknesses.
          </p>
        </Section>

        <Section title="How mature safety programs address the context gap">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Organizations with mature safety management systems recognize that documentation is not only about recording findings.
            It is about preserving reality. These programs document sites during normal operations. They capture spatial relationships,
            orientation, and environment before incidents occur. They maintain time stamped records that can be reviewed later without
            relying on recollection or inference.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This approach aligns with principles in{' '}
            <Link
              href="https://www.iso.org/iso-45001-occupational-health-and-safety.html"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              ISO 45001
            </Link>
            , which emphasizes continual improvement and evidence based decision making. Documentation becomes part of the system, not a reaction to failure.
          </p>

          <div className="my-10">
            <Figure
              src={CLOUDINARY_DIGITAL_TWIN_COMMERCIAL}
              alt="Commercial interior digital twin or 3D scan overview"
              caption="When a site is preserved as a spatial record, investigations can verify conditions without reconstructing them from fragments."
            />
          </div>
        </Section>

        <Section title="Closing perspective">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Safety investigations rarely fail because too little information was collected. They fail because the information that mattered most
            was never preserved. Context is not supplemental. It is foundational.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When site conditions are documented in a way that preserves spatial relationships and environment, investigations become clearer, faster,
            and more defensible. Without that context, even the most detailed data can fall short.
          </p>
        </Section>

        {/* References */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-slate-900">References</h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
            <li>
              OSHA. Accident Investigation. Occupational Safety and Health Administration, United States Department of Labor.{' '}
              <a
                href="https://www.osha.gov/incident-investigation"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.osha.gov/incident-investigation
              </a>
            </li>

            <li>
            National Institute for Occupational Safety and Health. Total Worker Health® Program. Centers for Disease Control and Prevention.{' '}
            <a
                href="https://www.cdc.gov/niosh/twh/programs/?CDC_AAref_Val=https://www.cdc.gov/niosh/twh/default.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
            >
                https://www.cdc.gov/niosh/twh/default.html
            </a>
            </li>

            <li>
              Reason, J. (1990). Human Error. Cambridge: Cambridge University Press.{' '}
              <a
                href="https://doi.org/10.1017/CBO9781139062367"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                Cambridge Core book page
              </a>
            </li>

            <li>
              ISO. ISO 45001 Occupational health and safety management systems. International Organization for Standardization.{' '}
              <a
                href="https://www.iso.org/iso-45001-occupational-health-and-safety.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://www.iso.org/iso-45001-occupational-health-and-safety.html
              </a>
            </li>

            <li>
              Dekker S. The Field Guide to Understanding Human Error. Routledge.{' '}
              <a
                href="https://www.routledge.com/The-Field-Guide-to-Understanding-Human-Error/Dekker/p/book/9781472439055"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                Routledge book page
              </a>
            </li>
          </ol>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want investigation ready context before conditions change
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies helps safety and risk teams preserve site reality with spatially accurate documentation that supports
            clearer investigations, stronger defensibility, and faster decision making.
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
