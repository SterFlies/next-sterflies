// app/blog/chain-of-custody-digital-site-documentation-litigation/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (swap with your real uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772559651/wesley-tingey-TdNLjGXVH3s-unsplash_dz3ldt.jpg'

const CLOUDINARY_PROVENANCE_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772564130/ChatGPT_Image_Mar_3_2026_12_54_53_PM_oafjov.png'
const CLOUDINARY_PROVENANCE_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/c4659781721ee58eaaf23acfdc34e6f232fe68ec-1248x652_bnkbx7.avif'

const CLOUDINARY_TRACEABILITY_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/25f3b31b-cda2-471b-b1c6-e34b7283f52b_olagrs.png'
const CLOUDINARY_TRACEABILITY_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772572525/Digital_security_at_the_workspace_i48cp0.png'

const CLOUDINARY_REMOTE_REVIEW_PAIR_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1772565231/3606565c-d081-427a-af68-381048977316_tiuzbt.png'
const CLOUDINARY_REMOTE_REVIEW_PAIR_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395841/687a8cb99a492e5e947b871e_2025_DroneDeploy_Jobsite_Conner_09_vvreij.png'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Defensible digital site documentation for litigation and disputes"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Chain of Custody for Digital Site Documentation
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            How a traceable record preserves context, reduces dispute noise, and strengthens case posture
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-03-03">March 3, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            In litigation, the site is rarely just a background. The site becomes the argument. The issue is that the physical
            environment rarely stays still long enough for the legal timeline to catch up. Repairs begin. Materials are removed.
            Weather changes surfaces. Access is restricted. Teams rotate. By the time the dispute clarifies, the original conditions
            are often gone.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Thorough digital documentation helps because it preserves what the site looked like. But in real disputes, what matters
            is not only what the record shows. What matters is whether the record can be trusted, traced, and explained. This is
            where chain of custody thinking transforms documentation from helpful content into litigation grade evidence support.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When your documentation has clear provenance, it solidifies context, narrows ambiguity, and reduces the attack surface
            opposing narratives use to create doubt.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_PROVENANCE_PAIR_1}
            alt="Evidence review and documentation workflow"
            caption="Disputes do not just question what happened. They question what can be verified."
          />
          <Figure
            src={CLOUDINARY_PROVENANCE_PAIR_2}
            alt="Documentation being organized and reviewed for a case"
            caption="A defensible record has a simple story: what was captured, when, where, and how it was preserved."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Risk moves faster than the legal timeline">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Most disputes involving physical environments begin with uncertainty. People disagree about conditions, sequence, and responsibility.
            The legal process then tries to reconstruct a reality that may no longer exist. This is the timing mismatch that makes documentation
            so valuable. Risk happens immediately. Litigation arrives later.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Without a strong record, the case becomes vulnerable to gaps. Missing context invites speculation. Speculation creates competing
            interpretations. Competing interpretations inflate cost, delay resolution, and weaken confidence in the underlying facts. The goal of
            thorough documentation is not to win an argument through visuals. The goal is to prevent the argument from shifting into what can never
            be proven because it was never preserved.
          </p>
        </Section>

        <Section title="In disputes, visuals are not the point. Provenance is">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Litigation is full of photographs and exhibits. The weakness is rarely image quality. The weakness is vulnerability. Who captured this.
            When was it captured. Where exactly was the viewpoint. Was anything altered. Is there an original. Is there continuity from capture to
            delivery. Can a neutral party understand the workflow without guessing.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Chain of custody is the mindset that answers those questions before anyone asks them. It is not a single document. It is the way the record
            is created and handled so the dataset remains stable and explainable. When the opposing side tries to weaken your position by challenging the
            documentation itself, provenance keeps the conversation anchored.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A defensible record does not require drama. It requires repeatability. The simplest explanation is the strongest one, and it should sound the
            same every time you say it.
          </p>
        </Section>

        <Section title="Thorough documentation strengthens case posture in three ways">
          <p className="mt-4 text-base leading-7 text-slate-700">
            First, it locks in context. A single photo can show a condition, but it often fails to show relationship. In disputes, relationship is what
            matters. How features connect. How transitions meet. How slope, elevation, adjacency, and access influence what is plausible. Context makes
            technical opinions understandable and keeps opposing explanations from drifting.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Second, it stabilizes scale. Many disputes hinge on dimensions, clearance, distance, orientation, and placement. When the site record supports
            measurement and verification, arguments stop being philosophical. They become geometric. That shift alone can change negotiation dynamics, because
            both sides are forced to deal with the same reference.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Third, it compresses the timeline of understanding. When attorneys, adjusters, consultants, and retained experts can revisit conditions remotely,
            the team spends less time reconstructing and more time analyzing. That improves decision speed, clarifies exposure earlier, and supports stronger
            settlement and mediation posture.
          </p>
        </Section>

        <Section title="Preservation is what makes documentation litigation grade">
          <p className="mt-4 text-base leading-7 text-slate-700">
            There is a difference between creating content and preserving evidence. Evidence requires continuity. The site record should be handled as if it
            will be questioned later, because it might. Preservation means keeping originals intact, tracking what was delivered, maintaining consistent naming
            and dates, and avoiding edits that introduce ambiguity.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            It also means reducing unnecessary transformations. Heavy filtering, aggressive contrast changes, and undocumented adjustments can invite arguments
            that distract from the real dispute. When a case is contentious, consistency is often stronger than polish. The documentation should be able to stand
            on its own without looking like it was pushed to tell a story.
          </p>
        </Section>

        {/* Image pair 3 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_TRACEABILITY_PAIR_1}
            alt="Metadata and timestamps supporting traceability"
            caption="Metadata and timestamps are not minor details. They support traceability when the site is no longer accessible."
          />
          <Figure
            src={CLOUDINARY_TRACEABILITY_PAIR_2}
            alt="Secure storage and controlled access for evidence continuity"
            caption="A stable storage and sharing workflow reduces disputes about integrity and version confusion."
          />
        </div>

        <Section title="Repeatability is the quiet advantage">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The strongest documentation can be explained in one breath. This is what we captured. This is when we captured it. This is where it was captured.
            This is how it was processed. This is what was delivered. This is what remained unchanged since capture. That kind of clarity reduces friction across
            legal, insurance, and expert workflows.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Repeatability also supports expert work. Experts do not want to defend a one off workflow. They want to reference a process. When your record follows
            a consistent method, it becomes easier to incorporate into opinions and harder to dismiss as unreliable or selective. The litigation value is not that
            it looks impressive. The value is that it stays stable when pressure increases.
          </p>
        </Section>

        {/* Image pair 4 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_REMOTE_REVIEW_PAIR_1}
            alt="Remote expert review of a documented environment"
            caption="Remote review keeps teams aligned on a shared reference point instead of memory and partial snapshots."
          />
          <Figure
            src={CLOUDINARY_REMOTE_REVIEW_PAIR_2}
            alt="Stakeholders reviewing site records together"
            caption="When everyone sees the same environment, discussions move faster and disputes get less noisy."
          />
        </div>

        <Section title="The goal is to preserve the site before the story forms">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Disputes rarely start as disputes. They start as confusion. Something feels off. A timeline becomes unclear. People disagree about what was observed
            and when. Once formal positions harden, the environment is often already changing. That is why the highest leverage moment for documentation is early.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is not about predicting litigation. It is about controlling risk. If the environment matters, preserving it thoroughly and defensibly protects
            the integrity of analysis later. It strengthens clarity for expert work. It supports better decisions about exposure. And it reduces the odds that the
            case becomes an argument about missing context instead of the substance of what actually happened.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you want another piece that expands on why context matters before an investigation starts, you can also read{' '}
            <Link
              href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              You Don’t Think You Need Site Documentation Until the Investigation Starts
            </Link>
            .
          </p>
        </Section>

        {/* References */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-slate-900">References</h3>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The references below are included to support core legal concepts related to authentication, preservation expectations, and defensible handling of records.
          </p>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
            <li>
              Federal Rules of Evidence. Rule 901 Authentication and identification.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.law.cornell.edu/rules/fre/rule_901"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                law.cornell.edu/rules/fre/rule_901
              </a>
            </li>

            <li>
              Federal Rules of Civil Procedure. Rule 37 Failure to preserve electronically stored information.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.law.cornell.edu/rules/frcp/rule_37"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                law.cornell.edu/rules/frcp/rule_37
              </a>
            </li>

            <li>
              The Sedona Conference. Commentary on Legal Holds.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.thesedonaconference.org/publication/Commentary_on_Legal_Holds"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                thesedonaconference.org
              </a>
            </li>
          </ol>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Need defensible documentation support for a dispute
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies helps preserve site context through reality based documentation that supports clearer reviews, stronger expert workflows, and more reliable case narratives.
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