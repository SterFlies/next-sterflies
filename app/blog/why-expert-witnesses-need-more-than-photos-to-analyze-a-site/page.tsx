// app/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// Cloudinary assets (swap with your real uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731078/2cb13476-2434-4a47-a0f6-dc2a5f6214ad_yirkgi.png'

// Image pair 1: Photos vs context
const CLOUDINARY_CONTEXT_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731217/10399a60-72f4-4ad2-86d1-6ce5d9614134_zdqrsm.png'
const CLOUDINARY_CONTEXT_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731824/09915a42-95df-49fa-82f9-016bead957a1_cmbyfu.png'

// Image pair 2: 3D model and orthomosaic
const CLOUDINARY_SPATIAL_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731578/4907e5c4-813f-472e-b616-c316397a7176_uy5uc8.png'
const CLOUDINARY_SPATIAL_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731752/19be7347-df64-4f29-94c2-940d9465d7ac_bacvhr.png'

// Image pair 3: Expert workflow and team review
const CLOUDINARY_WORKFLOW_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772732136/b689410e-fa09-409e-b890-8d30c290ae4c_bzeb1e.png'
const CLOUDINARY_WORKFLOW_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772732244/bd1fbc6d-71a3-4425-8a42-6e5c26bce9cd_nd61zc.png'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Expert witness reviewing site evidence with a 3D model and documentation"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Why Expert Witnesses Need More Than Photographs to Analyze a Site
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            How missing context increases ambiguity, inflates expert time, and weakens defensibility
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-03-05">March 5, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Expert witness work lives and dies by context. In construction defect disputes, premises cases, safety incidents, and
            property claims, experts are asked to interpret conditions that are no longer present, no longer accessible, or no longer
            visible in the same state they were in at the time of the event. The case does not wait for ideal evidence. The expert
            rarely gets a perfect site visit. What they receive is a record.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Photographs are the most common form of that record. They are also the most misunderstood. A photo can capture sharp detail
            while quietly removing the information that makes the detail meaningful. When an expert is asked to explain what happened,
            what caused it, and what conditions contributed, the expert is not simply looking for a defect or a hazard. The expert is
            looking for relationships. Relationship is what turns a photo into an explanation.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is why litigation grade site documentation is not about producing better pictures. It is about preserving enough context
            that a qualified expert can orient, verify, and communicate conclusions without guessing.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_CONTEXT_PAIR_1}
            alt="Close up photograph of a site condition without clear orientation"
            caption="A close up image can show a condition clearly while hiding where it sits in the environment."
          />
          <Figure
            src={CLOUDINARY_CONTEXT_PAIR_2}
            alt="Wide contextual view showing orientation and surrounding site features"
            caption="A wide view restores orientation, adjacency, and the relationships experts need to interpret cause and sequence."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Experts are asked to solve problems that photographs do not describe">
          <p className="mt-4 text-base leading-7 text-slate-700">
            When counsel retains an expert, the questions are rarely limited to what a single photo shows. Experts are asked to evaluate
            pathway and mechanism. How did moisture travel. How did drainage interact with slope. How did a condition develop over time.
            How did access, clearance, placement, and sequence influence what was possible. A photograph may show one artifact of the site,
            but disputes revolve around system behavior.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In practice, experts spend time reconstructing context before they can even begin analysis. They build a mental model of the site
            from fragments. They ask where the photo was taken, which direction it faces, what is off frame, what is above and below, and what
            changed after the event. When those questions cannot be answered confidently, technical opinion becomes more vulnerable to alternate
            interpretations.
          </p>
        </Section>

        <Section title="The core problem is not image quality. It is missing orientation">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Many evidence packages contain high resolution images. That detail is helpful, but detail does not solve orientation. A photo can be
            perfectly exposed and still be unusable for analysis if the expert cannot place it within the overall environment. Orientation is the
            foundation of defensible explanation because orientation is what makes a condition verifiable.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Once orientation is missing, everything becomes interpretive. Distances become assumptions. Angles become subjective. The relationship
            between features becomes debate. Even when both sides have honest experts, honest experts can disagree when the record forces them to
            infer the environment rather than observe it.
          </p>
        </Section>

        <Section title="Why partial documentation increases expert time and increases litigation cost">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Experts do not just review. They confirm. They compare. They test whether a narrative fits the physical environment. When the record is
            thin, experts compensate by requesting more information, requesting additional site access, or requesting additional discovery to fill gaps.
            That extra work is not always visible on the front end, but it shows up in cost, schedule, and friction.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A stronger record reduces the number of times a case has to revisit basic questions. Where was this observed. How far is it from that transition.
            What else is adjacent. What is above, below, or behind the photographed surface. When those questions are answered by the documentation itself,
            expert work becomes more focused, faster to communicate, and harder to derail.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SPATIAL_PAIR_1}
            alt="3D site model view used for analysis and measurement"
            caption="A navigable 3D model preserves spatial relationships so experts can reorient and verify context."
          />
          <Figure
            src={CLOUDINARY_SPATIAL_PAIR_2}
            alt="Orthomosaic map view showing consistent scale and site layout"
            caption="Photos, videos, data points, measurements, and annotations can be anchored to a spatially accurate record that preserves the site level story."
          />
        </div>

        <Section title="What a litigation ready record gives an expert that photos cannot">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The most valuable improvement is continuity. A spatially accurate record allows an expert to move from broad context into fine detail without losing
            their place. Aerial mapping can preserve the site level story. Interior scanning can preserve room level geometry and layout. Together they create a
            dataset that can be revisited without relying on memory or on a selective set of angles.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This continuity changes the nature of an expert opinion. Instead of anchoring conclusions to isolated photos, the expert can anchor conclusions to
            verifiable relationships inside a preserved environment. That does not guarantee agreement between parties, but it narrows the space where disagreement
            can hide. It forces the discussion back toward the environment that existed, not the environment each side imagines.
          </p>
        </Section>

        <Section title="Defensibility improves when the record is repeatable and explainable">
          <p className="mt-4 text-base leading-7 text-slate-700">
            In high friction disputes, opposing narratives do not just challenge the conclusion. They challenge the foundation. They ask whether a condition was
            captured accurately, whether it was preserved, and whether it can be explained clearly. A repeatable documentation workflow reduces vulnerability
            because the story stays consistent. What was captured, when it was captured, where it was captured, and how it was handled should be explainable
            without improvisation.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you want the litigation focused framework for traceability and defensibility, you can also read{' '}
            <Link
              href="/blog/chain-of-custody-digital-site-documentation-litigation"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              Chain of Custody for Digital Site Documentation
            </Link>
            . A strong record is not only informative. It is stable under pressure.
          </p>
        </Section>

        {/* Image pair 3 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_WORKFLOW_PAIR_1}
            alt="Expert witness reviewing a digital model during analysis"
            caption="When experts can explore the environment digitally, analysis becomes less dependent on inference and memory."
          />
          <Figure
            src={CLOUDINARY_WORKFLOW_PAIR_2}
            alt="Attorneys and consultants reviewing site documentation together"
            caption="A shared site record helps teams align faster and reduces disputes driven by partial viewpoints."
          />
        </div>

        <Section title="The strongest expert work begins with a stronger site record">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Most cases do not fail because the expert is unqualified. Many cases weaken because the record is incomplete. When the site has already changed,
            a partial record cannot be repaired. It can only be supplemented with inference, and inference is where opposing narratives expand.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A litigation ready site record improves expert analysis by preserving orientation, scale, and relationship. It lowers the cost of reconstructing
            context. It shortens the time required to understand the environment. It strengthens the ability to communicate conclusions clearly. Most importantly,
            it reduces the number of questions that can never be answered because the site is no longer there to answer them.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you want the earlier warning that applies to many disputes, you can also read{' '}
            <Link
              href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              You Don’t Think You Need Site Documentation Until the Investigation Starts
            </Link>
            . The moment an investigation begins is often the moment the original site disappears.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">Want your experts to analyze the site without guessing</p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies creates reality based site documentation that preserves spatial context for litigation support, expert workflows, and clearer case strategy.
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