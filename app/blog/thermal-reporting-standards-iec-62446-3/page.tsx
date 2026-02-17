// app/blog/thermal-reporting-standards-iec-62446-3/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (replace with your uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757964993/cover-photo_zcsaju.png'

// Image pair 1: Utility-scale context + drone survey context
const CLOUDINARY_SOLAR_FARM_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_172933_ctigrw.png'
const CLOUDINARY_SOLAR_FARM_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png'

// Image pair 2: Thermal workflow + electrical risk context
const CLOUDINARY_THERMAL_WORKFLOW_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965251/Screenshot_2025-09-12_194648_ibq3cr.png'
const CLOUDINARY_THERMAL_WORKFLOW_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png'

// Vid loop: Rooftop PV context 
const CLOUDINARY_ROOFTOP_PV_VIDEO =
  'https://res.cloudinary.com/dzlmoyomq/video/upload/v1757964961/roofpv_adkqfe.mp4'

// Image: Thermal example (best is your own radiometric screenshot)
const CLOUDINARY_THERMAL_EXAMPLE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Thermal reporting standards for solar PV inspections using infrared thermography and drone surveys"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Thermal Reporting Standards in Solar PV Inspections
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            IEC 62446-3 and the framework behind professional thermal drone surveys
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-17">February 17, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Thermal analysis in solar is not about collecting dramatic heat maps. It is about producing defensible information that an owner,
            O&amp;M team, EPC, insurer, or engineer can use to make decisions. That means the inspection has to be executed under valid operating
            conditions, captured with appropriate equipment, and reported in a way that is repeatable and explainable. The deliverable is not a
            folder of images. The deliverable is a documented inspection that holds up under review.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The standard that anchors professional PV thermography is{' '}
            <Link
              href="https://webstore.iec.ch/en/publication/28628"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              IEC TS 62446-3:2017
            </Link>
            . It lays out requirements for measurement equipment, ambient conditions, inspection procedure, inspection reporting, personnel
            qualification, and guidance for classifying thermal abnormalities. That is exactly why it matters if you want to position as a thermal
            professional rather than “someone with a thermal drone.”{' '}
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SOLAR_FARM_1}
            alt="Utility-scale solar farm aerial view"
            caption="Scale matters. Thermal inspection becomes more valuable as arrays grow and manual checks become impractical."
          />
          <Figure
            src={CLOUDINARY_SOLAR_FARM_2}
            alt="Drone survey perspective over solar panels"
            caption="Method matters. Drones accelerate coverage, but professional results still depend on valid conditions and disciplined reporting."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="Why standards matter in thermal reporting">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Thermal findings are only meaningful if they were produced under conditions that allow defects to express as temperature differentials.
            Solar PV anomalies can hide during low irradiance, heavy wind, unstable sky conditions, or inconsistent loading. IEC 62446-3 exists
            because thermography is not just “seeing heat.” It is measurement, and measurement needs constraints. When you document inspection
            conditions, you are documenting why your findings can be trusted.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is also the line between content capture and professional inspection. A casual workflow might deliver a set of hot-looking frames.
            A professional workflow produces a report that explains when the inspection was performed, what environmental assumptions were present,
            what camera settings were used, and how findings were evaluated. If someone asks why a module was classified as severe, you can answer
            without hand-waving, because the report shows the logic and the measurement context.
          </p>
        </Section>

        <Section title="IEC 62446-3: what it actually expects from a PV thermography inspection">
          <p className="mt-4 text-base leading-7 text-slate-700">
            IEC 62446-3 is valuable because it does not treat infrared inspection as a vague best practice. It frames PV thermography as an
            inspection activity with documented requirements, including equipment suitability, inspection procedure, and reporting content. It also
            explicitly ties inspection validity to ambient and operating conditions, and provides a matrix-style guideline for interpreting thermal
            abnormalities. In practice, that means a proper report does not just show an anomaly. It shows the conditions that make the anomaly
            meaningful and the method that makes it comparable across time.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When you run a drone survey under IEC-style discipline, you are building a dataset that can support more than maintenance. You are
            building documentation that can support warranty narratives, risk discussions, and long-term degradation monitoring. If a site operator
            wants repeat surveys quarterly, the methodology must remain consistent. Standards-based reporting is what allows that repeatability.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_THERMAL_WORKFLOW_1}
            alt="Handheld thermal imager or thermography workflow"
            caption="Thermography is measurement. Professional results come from documented assumptions, not just colorful images."
          />
          <Figure
            src={CLOUDINARY_THERMAL_WORKFLOW_2}
            alt="Electrical maintenance context"
            caption="PV is electrical infrastructure. Thermal reporting also intersects with reliability and safety-driven maintenance expectations."
          />
        </div>

        <Section title="Radiometric capture and the difference between evidence and imagery">
          <p className="mt-4 text-base leading-7 text-slate-700">
            One of the fastest ways to strengthen your positioning as a thermal professional is to communicate the difference between thermal
            pictures and radiometric thermal data. Radiometric files preserve temperature information per pixel, which enables post-processing
            verification, quantified deltas, and consistent classification logic. When stakeholders question severity, radiometric workflows let you
            show measurement-based support rather than a subjective impression based on palette and contrast.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is also why flight planning matters in aerial thermography. Altitude, angle, and speed change what the sensor can resolve. If the
            goal is anomaly identification at a module or substring level, you need the right ground sampling distance and stable capture geometry.
            The report should reflect that discipline by showing acquisition intent, not just results.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            For a deeper review of common PV fault signatures and thermographic interpretation challenges in operating modules, see this peer-reviewed review:{' '}
            <a
                href="https://www.sciencedirect.com/science/article/pii/S1364032116301629"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
            >
                Renewable &amp; Sustainable Energy Reviews (2016)
            </a>.
            </p>


          <div className="my-10">
            <Figure
              src={CLOUDINARY_THERMAL_EXAMPLE}
              alt="Thermal example of PV hotspot behavior"
              caption="Side-by-side RGB and radiometric thermal imagery revealing localized temperature differentials within the array. Quantified deltas and spatial context transform visual anomalies into actionable findings."
            />
          </div>
        </Section>

        <Section title="How professional reporting becomes actionable">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Operators don’t just want to know that anomalies exist. They need counts, location context, severity logic, and response timelines.
            A strong report ties findings to site geography so maintenance teams can locate the exact module without interpretation. That means
            mapping, labeling, and pairing thermal imagery with visible context. It also means using an explainable classification approach so a
            decision maker can understand why one anomaly is “monitor” and another is “urgent.”
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This is where standards-backed thermography becomes a professional service category of its own. Anyone can fly over panels and collect
            images. A thermal professional produces a defensible inspection record that supports operational decisions, documentation needs, and
            repeat monitoring. The market rewards clarity and repeatability because those are the properties that reduce risk.
          </p>
        </Section>

        <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full">
                <video
                src={CLOUDINARY_ROOFTOP_PV_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                />
            </div>
            <div className="px-4 py-3 text-sm text-slate-600">
                Rooftop or utility-scale, the reporting expectation is the same: clear methodology, clear classification, and clear location context.
                <div className="mt-2">
                <Link
                    href="/thermal/case-studies"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    View thermal case study →
                </Link>
                </div>
            </div>
        </div>


        <Section title="Related frameworks that strengthen credibility">
          <p className="mt-4 text-base leading-7 text-slate-700">
            IEC 62446-3 is solar-specific, but thermography professionalism is reinforced by broader qualification and documentation frameworks.
            ISO 18436-7 defines qualification and assessment requirements for personnel performing condition monitoring using infrared thermography.
            If you want to position as a thermal professional, competency language matters because your work will be reviewed by technical
            stakeholders who care about method and repeatability.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            ASTM E1934 further reinforces what should be included when documenting qualitative and quantitative infrared examinations of electrical
            and mechanical systems. And NFPA 70B has increased visibility around thermal inspection within electrical equipment maintenance programs,
            which overlaps with PV environments because arrays connect into electrical infrastructure where overheating and failure can become safety
            issues.
          </p>
        </Section>

        {/* References */}
            <section className="mt-14">
            <h3 className="text-2xl font-bold text-slate-900">References</h3>

            <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
                <li>
                IEC. IEC TS 62446-3:2017, Photovoltaic systems – Requirements for testing, documentation and maintenance – Part 3: Infrared thermography
                of photovoltaic modules and plants.{' '}
                <a
                    href="https://webstore.iec.ch/en/publication/28628"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://webstore.iec.ch/en/publication/28628
                </a>
                </li>

                <li>
                ISO. ISO 18436-7:2014, Condition monitoring and diagnostics of machines – Requirements for qualification and assessment of personnel – Part 7:
                Thermography.{' '}
                <a
                    href="https://www.iso.org/standard/61417.html"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://www.iso.org/standard/61417.html
                </a>{' '}
                (ISO page, public summary)
                </li>

                <li>
                ASTM. ASTM E1934, Standard Guide for Examining Electrical and Mechanical Equipment with Infrared Thermography.{' '}
                <a
                    href="https://www.astm.org/e1934-99ar18.html"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://www.astm.org/e1934-99ar18.html
                </a>
                </li>

                <li>
                NFPA. NFPA 70B Standard Development page.{' '}
                <a
                    href="https://www.nfpa.org/codes-and-standards/nfpa-70b-standard-development/70b"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://www.nfpa.org/codes-and-standards/nfpa-70b-standard-development/70b
                </a>
                </li>

                <li>
                Tsanakas, J. A., Ha, L., &amp; Buerhop, C. (2016). Faults and infrared thermographic diagnosis in operating c-Si photovoltaic modules:
                A review of research and future challenges. <em>Renewable and Sustainable Energy Reviews</em>, 62, 695–709. DOI:{' '}
                <a
                    href="https://doi.org/10.1016/j.rser.2016.04.079"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://doi.org/10.1016/j.rser.2016.04.079
                </a>{' '}
                | ScienceDirect:{' '}
                <a
                    href="https://www.sciencedirect.com/science/article/pii/S1364032116301629"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://www.sciencedirect.com/science/article/pii/S1364032116301629
                </a>
                </li>

                <li>
                Google Scholar search for the above review (stable lookup):{' '}
                <a
                    href="https://scholar.google.com/scholar?q=10.1016%2Fj.rser.2016.04.079"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://scholar.google.com/scholar?q=10.1016/j.rser.2016.04.079
                </a>
                </li>

                <li>
                Google Scholar search (general): infrared thermography photovoltaic inspection:{' '}
                <a
                    href="https://scholar.google.com/scholar?q=infrared+thermography+photovoltaic+inspection+drone"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-700 hover:text-blue-900"
                >
                    https://scholar.google.com/scholar?q=infrared+thermography+photovoltaic+inspection+drone
                </a>
                </li>
            </ol>
            </section>


        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Need standards-based thermal reporting for your PV asset
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies supports solar operators and stakeholders with radiometric thermal surveys and reporting workflows built for clarity,
            repeatability, and defensibility. If the findings matter, the method matters.
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