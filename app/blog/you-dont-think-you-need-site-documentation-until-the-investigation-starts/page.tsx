// app/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (swap with your real uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770398417/Massive_manufacturing_plant_02_Pro3_1960x1080px_rc3wqx.png'

const CLOUDINARY_CONTEXT_GAP_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/Screenshot_2026-02-06_110304_zlesmr.png'
const CLOUDINARY_CONTEXT_GAP_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/25f3b31b-cda2-471b-b1c6-e34b7283f52b_olagrs.png'

const CLOUDINARY_SITE_CHANGES_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397668/the-best-air-quality-and-restoration-content-mold-remediation-640w_kmu31y.webp'
const CLOUDINARY_SITE_CHANGES_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397668/VZc0MDuIGDaWqkuVGcQCH5vVatVZpJbh-wFtfoW8qCIVBIpR81Qt7BD1g7J4M65iFw-q8N6hMVIT41OD5TVvS6q7OSdleDDUs9S-RJhaVsQ_o3zttk.jpg'

const CLOUDINARY_SPATIAL_RECORD_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395839/construction_model_point_cloud_qsg2pr.webp'
const CLOUDINARY_SPATIAL_RECORD_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395841/1024x576_as1rbm.jpg'

const CLOUDINARY_STAKEHOLDER_REVIEW_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395839/contractors-reviewing-plans_p9rb33.png'
const CLOUDINARY_STAKEHOLDER_REVIEW_2 =
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
            alt="Aerial and ground documentation of an active jobsite"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            You Don’t Think You Need Site Documentation Until the Investigation Starts
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            Why safety professionals benefit from preserved site context before conditions change
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-06">February 6, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            In occupational safety, environmental health, and risk management, most failures do not stem
            from a lack of concern. Safety professionals work upstream to identify hazards, reduce exposure,
            and build systems that prevent incidents before they occur. Yet one of the most consequential
            elements of post incident analysis is routinely underestimated until it is no longer recoverable.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Site documentation is often perceived as supplemental. It supports reports, inspections, and
            compliance requirements, but it is rarely treated as a primary risk control. That perception
            changes abruptly when an incident, near miss, inspection, or claim begins. Documentation shifts
            from administrative support to evidentiary truth.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            By then, the site has already changed.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_CONTEXT_GAP_1}
            alt="A close up jobsite condition that lacks broader context"
            caption="A detail can look important, but without site context it becomes difficult to place and verify later."
          />
          <Figure
            src={CLOUDINARY_CONTEXT_GAP_2}
            alt="A wide site view that provides orientation and relationship between features"
            caption="Context connects hazards to the surrounding environment, access routes, and nearby contributing conditions."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="The question that always comes too late">
          <p className="mt-4 text-base leading-7 text-slate-700">
            When investigations begin, a predictable set of questions emerges. What did the site look like
            before the incident. Where exactly was the condition located. What existed nearby that may have
            contributed. How did spatial relationships influence exposure, access, or task performance.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These questions are not abstract. They are fundamental to root cause analysis, exposure assessment,
            and defensible decision making. Yet they are often asked after conditions have been altered through
            cleanup, repair, remediation, or operational continuity.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            At that moment, safety teams realize they did not need documentation after the incident. They needed
            it before.
          </p>
        </Section>

        <Section title="Why documentation is treated as secondary in safety programs">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Most safety programs prioritize active risk controls. Engineering changes, administrative procedures,
            training, and protective equipment receive immediate attention because they directly reduce the likelihood
            of harm. Documentation, by contrast, is often categorized as supportive rather than preventive.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is reinforced by workload realities. Safety professionals manage inspections, audits, training programs,
            regulatory reporting, and incident response simultaneously. Capturing comprehensive site conditions for scenarios
            that may never occur can feel difficult to justify.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The prevailing assumption becomes simple. If we need it, we will document it then. From a safety science perspective,
            this assumption introduces latent risk.
          </p>
        </Section>

        <Section title="Investigations rarely fail because of missing information">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Contrary to common belief, most investigations are not undermined by a lack of information. Photographs are taken.
            Reports are written. Sampling is performed. Statements are collected. The volume of content can be substantial.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            What is missing is contextual integrity. Spatial context determines how hazards interact. Distance, orientation,
            elevation, adjacency, and accessibility all influence exposure pathways and human behavior. Without preserved spatial
            context, investigators are forced to reconstruct conditions indirectly.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Guidance from NIOSH emphasizes the importance of understanding work as a system, not as isolated observations.
            A system cannot be fully understood through fragments alone. It requires an accurate representation of how elements
            coexist in space. See Reference 2.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SITE_CHANGES_1}
            alt="Jobsite conditions before cleanup or remediation"
            caption="Before corrective actions begin, conditions reflect how work was actually occurring at that moment in time."
          />
          <Figure
            src={CLOUDINARY_SITE_CHANGES_2}
            alt="Jobsite conditions after cleanup, repair, or restricted access"
            caption="Once controls, repairs, or remediation begin, the original environment is altered and may not be reconstructable."
          />
        </div>

        <Section title="What changes the moment an investigation begins">
          <p className="mt-4 text-base leading-7 text-slate-700">
            The start of an investigation often marks the end of the original site. Once an incident is identified,
            safety driven actions take priority. Areas are secured. Hazards are mitigated. Damaged materials are removed.
            Remediation begins. Access routes change. Temporary controls are installed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These actions are appropriate and often necessary. They also permanently alter the physical reality investigators are
            trying to understand. OSHA accident investigation guidance emphasizes the value of documenting conditions as close to the
            event as possible, because accuracy declines as conditions evolve. See Reference 1.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When documentation occurs after conditions have changed, conclusions rely more heavily on inference than observation.
            Inference introduces uncertainty.
          </p>
        </Section>

        <Section title="Human factors and the limits of post incident memory">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Even when documentation exists, investigations rely heavily on human recollection. Decades of human factors research
            demonstrate that memory is reconstructive. After an incident, individuals unconsciously reinterpret events based on outcomes,
            discussions, and new information. This is a known contributor to hindsight bias.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Safety professionals are not immune to this effect. Training does not remove cognitive bias. It only mitigates it. This is why
            safety and human error literature emphasizes objective records that are captured before narratives harden. See Reference 5.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            A preserved site record provides a reference point that is not influenced by outcome knowledge or evolving interpretation.
          </p>
        </Section>

        <Section title="Latent conditions are often spatial in nature">
          <p className="mt-4 text-base leading-7 text-slate-700">
            One of the most influential frameworks in safety science describes how incidents emerge from underlying weaknesses that exist
            within a system long before an event occurs. This perspective is strongly associated with the work of James Reason. See Reference 3.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Many of these latent conditions are spatial. Equipment placed too close to walkways. Temporary structures installed near permanent
            systems. Drainage paths intersecting with occupied spaces. Access routes crossing hazard zones. Without a preserved spatial record,
            these relationships are often recognized only after an incident, when physical evidence may already be altered or removed.
          </p>
        </Section>

        {/* Image pair 3 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SPATIAL_RECORD_1}
            alt="A spatially accurate site record such as an orthomosaic, point cloud, or 3D model view"
            caption="A spatial record preserves orientation and relationships so teams can return to conditions even after the site changes."
          />
          <Figure
            src={CLOUDINARY_SPATIAL_RECORD_2}
            alt="Annotated site record used to verify distances and locations"
            caption="When locations and distances are verifiable, discussion shifts from opinion to evidence based review."
          />
        </div>

        <Section title="Why documentation after the fact is structurally incomplete">
          <p className="mt-4 text-base leading-7 text-slate-700">
            When documentation begins after an incident, it is shaped by the investigation itself. Investigators know the outcome they are analyzing.
            That knowledge influences what is photographed, measured, or described. Areas that appear unrelated may never be documented, even if they
            played a role.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This does not reflect poor investigation practice. It reflects how human attention functions under outcome driven analysis. Preserving site
            conditions before an incident reduces this distortion. It creates a neutral baseline that teams can revisit without filtering the environment
            through hindsight.
          </p>
        </Section>

        <Section title="What proactive safety programs do differently">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Organizations with mature safety management systems understand that prevention extends beyond controls and procedures. They recognize that
            preserving reality is a form of risk management. These programs document sites during normal operations. They capture spatial context.
            They maintain time stamped records that can be reviewed independently of any single event.
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
            , which emphasizes continual improvement and evidence based decision making. See Reference 4.
            Documentation becomes part of the system, not a reaction to failure.
            </p>
        </Section>

        {/* Image pair 4 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_STAKEHOLDER_REVIEW_1}
            alt="Safety or engineering stakeholders reviewing site data in an office setting"
            caption="A shared record reduces misinterpretation across safety, operations, engineering, and leadership teams."
          />
          <Figure
            src={CLOUDINARY_STAKEHOLDER_REVIEW_2}
            alt="Remote review of a site record on a laptop"
            caption="When context is preserved, decisions can be supported without repeated site access."
          />
        </div>

        <Section title="Where forensic site documentation fits in safety practice">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Forensic site documentation does not replace inspections, audits, or exposure assessment. It complements them by preserving spatially accurate
            records of site conditions. When incidents occur, safety professionals are no longer forced to rely solely on memory, partial photos, or reconstructed
            narratives. They can return to an objective representation of the site as it existed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you want the foundational explanation of this approach, you can also read{' '}
            <Link
              href="/blog/what-is-forensic-site-documentation"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              What Is Forensic Site Documentation
            </Link>
            .
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This capability is not about assigning fault. It is about preserving truth.
          </p>
        </Section>

        <Section title="The risk that is never scheduled">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Incidents are planned for. Investigations are anticipated. Emergency response protocols are practiced.
            What is rarely scheduled is the loss of context.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Once conditions change, no amount of reporting can recover what was never preserved. The most significant risk is not that an incident will occur.
            Safety professionals already accept that reality. The greater risk is discovering too late that the ability to understand the incident has been compromised.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            By the time an investigation starts, the decision about documentation has already been made. Time made it.
          </p>
        </Section>

        {/* References */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-slate-900">References</h3>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The references below are included to support the safety management and human factors concepts discussed in this article.
          </p>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
            <li>
              OSHA. Accident Investigation. Occupational Safety and Health Administration, United States Department of Labor.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.osha.gov/accident-investigation"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                osha.gov/accident-investigation
              </a>
            </li>

            <li>
              NIOSH. Safety and Health Management Systems. National Institute for Occupational Safety and Health, Centers for Disease Control and Prevention.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.cdc.gov/niosh/topics/safetyculture/default.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                cdc.gov/niosh
              </a>
            </li>

            <li>
              Reason J. Human error. Perspectives on latent conditions and organizational defenses, including the Swiss Cheese concept.
              Journal and book references vary by edition and citation style.
            </li>

            <li>
              ISO. ISO 45001 Occupational health and safety management systems. Requirements with guidance for use. International Organization for Standardization.
              <span className="text-slate-500"> </span>
              <a
                href="https://www.iso.org/iso-45001-occupational-health-and-safety.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                iso.org/iso-45001
              </a>
            </li>

            <li>
              Dekker S. The Field Guide to Understanding Human Error. Human factors perspective on how narratives and hindsight influence interpretation.
            </li>
          </ol>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want to preserve site context before conditions change
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies helps safety and risk teams create spatially accurate site records that can be reviewed later for investigations,
            planning, and defensible decision making.
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
