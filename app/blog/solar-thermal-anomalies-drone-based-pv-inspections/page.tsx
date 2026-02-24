// app/blog/solar-thermal-anomalies-drone-based-pv-inspections/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771950485/KDPPplqmAQe2fdphC9rf_YXJa2-JV05flIlTVm_0olNL6iPSbK44ss93VsnQ7__nTCrgrdk_GawIbQ3Ib_7sg3PFn5dR3U1euhfE28_rjnw_axeh2c.jpg'

// Image pair 1: Drone thermal inspection + hotspot example
const CLOUDINARY_PAIR_1_LEFT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771950522/hVSTHFHfV_paBktfidmu3PCNtF86NyGCGyyscR_RUYd6XeSkbNQ0o0Oq4dOCkQ-Ly4v8ABEYYWaz-XbJM5_Iy3hS21TGvNQNzMjN7kNbLqU_xfgxlq.jpg'
const CLOUDINARY_PAIR_1_RIGHT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png'

// Image pair 2: Connector/combiner risk + rooftop/commercial context
const CLOUDINARY_PAIR_2_LEFT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771951261/csm_KNE-IMG-Slider-Utility-CPSS-bp-125TL3_4ca658d4f3_rqheio.webp'
const CLOUDINARY_PAIR_2_RIGHT_TOP =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771951368/viox-solar-combiner-box-thermal-imaging-showing-overheating-hot-spots-with-temperature-gradient-from-40c-to-180c-at-terminal-connections-and-busbar-junctions_glrl7y.webp'

const CLOUDINARY_PAIR_2_RIGHT_BOTTOM =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771951261/KNE-IMG-Slider-Utility-CPSS-bp-125TL3_bqfcus.webp'

// Optional mid-article image: orthomosaic / mapping intelligence
const CLOUDINARY_ORTHO_LEFT =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757966482/heb-roofpv-ortho_ywek9f.jpg'
const CLOUDINARY_ORTHO_RIGHT_TOP =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1771948443/pix4d-drone-inspection-thermal-solar-panels-11_otoqbt.jpg'

const CLOUDINARY_ORTHO_RIGHT_BOTTOM =
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
            alt="Drone-based solar thermal inspections identifying photovoltaic anomalies across a PV plant"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            Solar Thermal Anomalies and Drone-Based PV Inspections
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            A technical and financial deep dive into defect types, revenue loss, and verification workflows
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-24">February 24, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            Solar photovoltaic systems are engineered for long-term reliability and are often backed by twenty to
            thirty year performance warranties. From a distance, PV fields look static and simple. At the module
            level, there are no moving parts. There is no combustion. There is no obvious mechanical wear cycle.
            Yet every module is a live electrical component operating under continuous thermal stress, voltage
            potential, and environmental exposure.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Most solar assets do not fail suddenly. They degrade quietly. Electrical resistance increases in small
            places that are easy to miss. Cells microfracture. Bypass diodes fail. Connectors loosen. Soiling causes
            current mismatch. Shading changes operating conditions. These issues can reduce energy production for
            months before dashboards make the loss obvious, and by the time output drop is large enough to trigger
            investigation, the defect has often progressed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Thermal inspections exist to reveal these inefficiencies earlier. When performed under proper irradiance
            and load, infrared thermography makes electrical imbalance visible as heat. Combined with drone mapping,
            thermal inspection becomes more than a visual check. It becomes a repeatable, geo-referenced dataset you
            can use to prioritize repairs, verify corrective work, and protect long-term ROI.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_PAIR_1_LEFT}
            alt="Drone performing thermal inspection over a solar farm"
            caption="Drone-based thermal capture scales across thousands of modules quickly while maintaining consistent altitude, overlap, and coverage."
          />
          <Figure
            src={CLOUDINARY_PAIR_1_RIGHT}
            alt="Thermal image showing a hotspot on a solar module"
            caption="A hotspot is a localized area of elevated temperature that typically indicates increased resistance, cell damage, mismatch, or stress within a module."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="How thermal imaging reveals electrical inefficiency">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Photovoltaic modules convert irradiance into direct current through semiconductor cells. Under normal
            operating conditions, current flows evenly through cells and strings. When a defect increases resistance
            or creates current mismatch, the system still attempts to move current through the pathway. The excess
            energy is dissipated as heat. Infrared thermography measures that emitted heat and displays temperature
            variation across modules, strings, and components.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The most important concept in solar thermography is not the color palette. It is the temperature delta,
            often described as a temperature spread, between an anomalous area and comparable surrounding modules
            operating under the same conditions. A warm pixel means little in isolation. A meaningful anomaly is a
            measurable outlier relative to a stable baseline in the same array block, captured under adequate load.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Because thermal readings are influenced by environmental variables, professional inspections are timed
            and executed deliberately. Modules need sufficient irradiance and load for defects to present clearly.
            High winds can cool surfaces and reduce contrast. Intermittent cloud cover can suppress load and hide
            abnormalities. Angle of view, reflections, and camera settings also affect interpretation, which is why
            consistent methodology matters as much as the camera itself.
          </p>
        </Section>

        <Section title="Hotspots and multi-hotspots">
          <p className="mt-4 text-base leading-7 text-slate-700">
            A hotspot is a localized area of elevated temperature within a module. In practical terms, it is a sign
            that a portion of the module is dissipating more energy as heat than it should. Common underlying causes
            include microcracks from mechanical stress, manufacturing defects, partial shading, uneven soiling, cell
            mismatch, and localized damage that alters current flow through one or more cells.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Hotspots matter because they are not just a performance issue. Over time, persistent elevated
            temperature accelerates material degradation. Encapsulant can discolor, backsheets can deteriorate, and
            affected regions may become more fragile. In more severe scenarios, sustained overheating increases fire
            exposure risk and can contribute to premature module failure.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Multi-hotspot behavior refers to patterns where multiple distinct hot areas appear within the same
            module or repeat across a localized zone. That pattern typically indicates broader internal stress
            rather than a single isolated cell defect. When hotspots cluster or repeat, they are more likely to be
            tied to substring behavior, diode stress, or systemic mismatch. Multi-hotspot modules are often higher
            priority because they correlate more strongly with measurable production loss and accelerated aging.
          </p>
        </Section>

        <Section title="Bypass diode failure and multi-diode issues">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Bypass diodes protect modules from reverse bias conditions when shading or mismatch occurs. When a diode
            fails, current is no longer redirected effectively around a stressed cell substring. That can cause an
            entire portion of the module to operate abnormally and generate heat. In thermal imagery, diode-related
            anomalies often present as distinct linear bands or repeating hot blocks consistent with substring layout.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Multi-diode issues, where more than one diode is compromised, are particularly costly because a larger
            fraction of the module is affected. These failures can reduce output significantly, contribute to string
            imbalance, and increase stress on connected components. Because standard monitoring may not isolate a
            diode fault cleanly, thermography is often the fastest way to identify suspect modules at scale.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The business impact is straightforward. A diode defect is rarely a one-day event. It is commonly a
            sustained underperformance condition. If left unaddressed, it becomes a predictable source of lost
            kilowatt-hours across the time window between inspections.
          </p>
        </Section>

        <Section title="Potential induced degradation and voltage-driven performance loss">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Potential induced degradation, often referred to as PID, describes efficiency loss driven by voltage
            potential differences that can create leakage currents within modules. PID is important because it tends
            to appear as a system-level or string-level phenomenon rather than a single isolated defect. If it
            progresses, it can reduce efficiency across meaningful portions of an array.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Thermally, PID may present as broader warming patterns, edge-oriented behavior, or consistent anomalies
            across groups of modules. The exact appearance can vary depending on module design and operating
            conditions, which is why thermal inspection should be paired with good operational context and targeted
            electrical testing when PID is suspected.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            The financial risk of PID is scale. When a defect pattern affects dozens of modules in a string or
            inverter block, the production impact is no longer minor. Early detection and mitigation can prevent
            long-term loss from compounding and reduce the likelihood of larger warranty and performance disputes.
          </p>
        </Section>

        <Section title="String-level anomalies and systemic imbalance patterns">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Some anomalies are not rooted in a single module. They are rooted in how multiple modules are connected.
            A string-level anomaly is a thermal pattern that suggests a systemic issue affecting a row, string, or
            inverter block. Instead of one module standing out, multiple modules may appear uniformly elevated or
            reveal a repeating pattern that aligns with electrical topology.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            These patterns can indicate wiring resistance, fuse and combiner behavior, inverter channel imbalance,
            or broader mismatch driven by installation variables. The advantage of drone mapping is that it reveals
            patterns that are hard to see on foot. If you only look at individual images, you can miss the fact
            that the same anomaly is repeating across a string. A site-wide thermal view makes that structure
            obvious.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            When string-level patterns appear, they typically justify deeper diagnostics, such as targeted string
            testing, I-V curve tracing, or electrical connection review. Thermography is the screening tool that
            tells you where to spend time and labor.
          </p>
        </Section>

        <Section title="Connector, junction box, and combiner overheating">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Electrical connection points are common failure locations in PV assets. Loose MC4 connectors, corroded
            terminals, degraded junction boxes, and aging fuses can create resistance that produces heat. Unlike
            many cell-level inefficiencies, connection overheating can carry meaningful safety implications because
            it concentrates heat at points where materials and insulation can degrade quickly.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In practice, thermal inspections often highlight these high-risk points as localized elevated
            temperatures at connectors, combiner enclosures, or inverter inputs. When identified early, corrective
            action may be as simple as re-termination or component replacement. When ignored, these anomalies can
            lead to forced downtime, costly repairs, and avoidable insurance exposure.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
         <Figure
            src={CLOUDINARY_PAIR_2_LEFT}
            alt="Thermal orthomosaic solar site map"
            caption="Field-deployed combiner and inverter infrastructure represent critical electrical junction points where resistance buildup can escalate into thermal stress."
         />
          <StackedFigure
            topSrc={CLOUDINARY_PAIR_2_RIGHT_TOP}
            topAlt="3D model or mapping layer for inspection context"
            bottomSrc={CLOUDINARY_PAIR_2_RIGHT_BOTTOM}
            bottomAlt="Combiner Box"
            caption="Infrared diagnostics translate invisible electrical stress into measurable risk, enabling targeted maintenance before safety or production losses occur."
        />
        </div>

        <Section title="Soiling, shading, and environmental effects that mimic defects">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Not every thermal abnormality indicates an electrical component failure. Uneven soiling, debris,
            bird droppings, pollen buildup, and vegetation encroachment can create current mismatch that presents
            as elevated temperature patterns. Shading from nearby structures or tracker misalignment can do the same.
            These effects still cost money because they reduce yield, but the corrective action differs from module
            replacement or electrical repair.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Drone-based thermal mapping is useful here because it shows where cleaning and vegetation management
            will restore production most efficiently. Instead of applying uniform maintenance across an entire site,
            operators can target the zones that produce measurable mismatch and heat.
          </p>
        </Section>

        <Section title="The financial cost of leaving anomalies unchecked">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Solar assets produce revenue through kilowatt-hour output. When defects persist, they create a quiet,
            compounding loss that can run for months between service events. A small loss per module becomes a large
            loss at scale. Even a low percentage of underperforming modules in a multi-megawatt system can translate
            into substantial annual revenue erosion depending on energy pricing and production targets.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Beyond pure yield loss, anomalies introduce secondary costs. Sustained mismatch can stress inverters and
            increase thermal cycling. Connection heating can trigger safety responses and downtime. Deferred defects
            can complicate warranty claims because the longer the time window between detection and documentation,
            the harder it becomes to prove when a defect began and how it progressed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Thermal inspections convert those invisible losses into measurable evidence. They create a clear
            maintenance priority list that reduces the chance that high-severity issues remain active in the field
            for long periods.
          </p>
        </Section>

        <Section title="Structured drone-based inspection workflow">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Handheld inspections struggle with scale. Utility sites can contain tens of thousands of modules across
            hundreds of acres. Drone-based inspection solves that by capturing consistent coverage quickly, using
            repeatable flight plans. A structured workflow typically begins with timing and environment verification
            so the array is under adequate load. Automated grid missions then capture synchronized RGB and thermal
            imagery with consistent overlap, altitude, and speed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            After capture, imagery is processed and organized into deliverables that match how maintenance teams work.
            The output is not just a folder of images. The output is a site-wide dataset with context and traceability,
            designed to be actionable in the field.
          </p>
        </Section>

        <div className="my-10 grid gap-4 md:grid-cols-2">
        <Figure
            src={CLOUDINARY_ORTHO_LEFT}
            alt="Thermal orthomosaic solar site map"
            caption="A full-site thermal orthomosaic provides spatial context, revealing temperature patterns across strings and inverter blocks."
        />

        <StackedFigure
            topSrc={CLOUDINARY_ORTHO_RIGHT_TOP}
            topAlt="3D model or mapping layer for inspection context"
            bottomSrc={CLOUDINARY_ORTHO_RIGHT_BOTTOM}
            bottomAlt="Thermal anomaly zoom showing clustered defects"
            caption="Multi-layer inspection data moves from visualization to action - mapping the site, validating conditions, and isolating thermal defects that directly impact energy production."
        />
        </div>

        <Section title="Thermal mapping and orthomosaic intelligence">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Raw thermal images alone do not create operational value. The real power of drone-based inspections lies
            in structured thermal mapping. After flight capture, thermal imagery is stitched into a geo-referenced
            orthomosaic. This creates a spatially accurate thermal map of the entire site, allowing anomalies to be
            viewed in context rather than in isolation. Every module can be measured, compared, and documented under
            the same irradiance conditions.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Instead of reviewing individual images one by one, stakeholders receive a full-site temperature dataset.
            Outliers become visible immediately. Patterns emerge across strings, inverter blocks, and structural
            zones. Maintenance becomes faster because the inspection product is already organized around location and
            severity, not just images.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This mapping approach enables precise GPS-based module identification, severity classification based on
            temperature spread, cluster detection across inverter groups, historical comparison across inspection
            cycles, and defensible documentation for maintenance records. Thermal mapping transforms inspection from a
            visual exercise into a measurable, repeatable asset management process.
          </p>
        </Section>

        <Section title="Temperature spread as a prioritization metric">
          <p className="mt-4 text-base leading-7 text-slate-700">
            In practice, severity prioritization often relies on temperature spread, the difference between the
            warmest and coolest comparable modules operating under identical conditions. A module temperature value
            alone can be misleading because ambient conditions shift baseline temperature. What matters is the
            outlier behavior relative to its neighbors in the same operating block.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            For example, a module reading 49.5°C may not sound alarming until you compare it to surrounding modules
            reading 31.9°C under the same irradiance. That spread indicates abnormal resistance and a likely
            efficiency penalty. Prioritizing by spread is a practical way to direct limited maintenance labor toward
            defects with the highest probability of meaningful production loss or safety risk.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            For real-world examples of how anomaly types and severity logic are documented, see the thermal case
            studies here:{' '}
            <a
              href="https://sterflies.com/thermal/case-studies"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              https://sterflies.com/thermal/case-studies
            </a>
          </p>
        </Section>

        <Section title="Post-repair verification and why re-inspection matters">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Detection is only the first step. A professional inspection workflow includes post-repair verification.
            After maintenance teams replace modules, re-terminate connectors, or correct electrical issues, a follow-up
            drone inspection confirms that temperature differentials have normalized under similar operating
            conditions. This closes the loop between finding a problem and proving it was fixed.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Verification provides defensible documentation for asset owners, insurers, and warranty providers. It
            reduces uncertainty, supports performance reporting, and prevents unresolved defects from lingering
            unnoticed after a repair cycle.
          </p>
        </Section>

        <Section title="Case study demo: large-scale anomaly mapping">
          <p className="mt-4 text-base leading-7 text-slate-700">
            A practical example of large-scale anomaly mapping can be reviewed here:{' '}
            <a
              href="https://sterflies.com/projects/pv-farm-hotspots"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              https://sterflies.com/projects/pv-farm-hotspots
            </a>
            . This demo project demonstrates systematic site coverage, high-density anomaly identification, and
            reporting methodology that scales across real-world PV facilities.
          </p>
        </Section>

        <Section title="Final perspective: thermal inspections as revenue protection">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Solar arrays are financial assets designed to produce predictable yield over decades. The gap between
            expected ROI and realized ROI often comes down to how quickly issues are detected and how consistently
            corrective work is verified. Hotspots, diode failures, string imbalance, connection heating, and soiling
            all create measurable loss. The only question is how long those conditions remain active before someone
            sees them.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Drone-based thermal inspections provide speed, repeatability, and full-site perspective. Thermal mapping
            converts imagery into geo-referenced datasets. Temperature spread classification prioritizes repairs
            objectively. Post-repair verification confirms restoration rather than assuming it. Together, these
            steps turn inspection into asset management infrastructure.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Solar performance is measurable. Electrical resistance produces heat. Heat reveals inefficiency. Early
            detection protects revenue. The difference lies in inspection methodology and repeatable verification.
          </p>
        </Section>

        {/* References */}
        <section className="mt-14">
          <h3 className="text-2xl font-bold text-slate-900">References</h3>

          <ol className="mt-4 list-decimal space-y-3 pl-6 text-slate-700">
            <li>
              IEC 62446-3. Photovoltaic (PV) systems requirements for testing, documentation and maintenance – Part 3:
              Photovoltaic modules and plants – Outdoor infrared thermography.{' '}
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
              IEA PVPS. Publications on PV performance, degradation mechanisms, and operational best practices.{' '}
              <a
                href="https://iea-pvps.org/publications/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://iea-pvps.org/publications/
              </a>
            </li>


            <li>
              Roof PV System Case Study DEMO (anomaly types + severity logic examples).{' '}
              <a
                href="https://sterflies.com/thermal/case-studies"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                https://sterflies.com/thermal/case-studies
              </a>
            </li>
          </ol>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Need a structured solar thermal inspection with mapping and verification
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies supports solar stakeholders with drone-based thermal mapping, geo-referenced anomaly reporting,
            and post-repair verification flights. When production, warranty protection, and risk management matter,
            inspection should be repeatable and measurable.
          </p>
          <p className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/thermal/case-studies"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
            >
              View Demo Case Study
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-900 font-medium shadow-sm hover:bg-slate-100"
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

function Figure({
  src,
  alt,
  caption,
  rotate = false,
}: {
  src: string
  alt: string
  caption: string
  rotate?: boolean
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-center bg-black">
        <Image
          loader={cloudinaryLoader}
          src={src}
          alt={alt}
          width={1600}
          height={1200}
          className={`w-full h-auto object-contain ${
            rotate ? 'rotate-90' : ''
          }`}
        />
      </div>
      <figcaption className="px-4 py-3 text-sm text-slate-600">
        {caption}
      </figcaption>
    </figure>
  )
}

function StackedFigure({
  topSrc,
  topAlt,
  bottomSrc,
  bottomAlt,
  caption,
}: {
  topSrc: string
  topAlt: string
  bottomSrc: string
  bottomAlt: string
  caption: string
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid">
        {/* top image */}
        <div className="relative aspect-[16/9] w-full bg-black">
          <Image
            loader={cloudinaryLoader}
            src={topSrc}
            alt={topAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* bottom image */}
        <div className="relative aspect-[16/9] w-full bg-black border-t border-slate-200">
          <Image
            loader={cloudinaryLoader}
            src={bottomSrc}
            alt={bottomAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>
    </figure>
  )
}