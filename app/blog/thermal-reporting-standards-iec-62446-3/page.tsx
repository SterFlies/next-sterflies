import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("thermal-reporting-standards-iec-62446-3")

export default function Page() {
  return (
    <ArticleLayout
      slug="thermal-reporting-standards-iec-62446-3"
      references={[
        {
          href: "https://webstore.iec.ch/en/publication/28628",
          label:
            "IEC TS 62446-3:2017, Photovoltaic systems — Infrared thermography of photovoltaic modules and plants",
        },
        {
          href: "https://www.iso.org/standard/61417.html",
          label:
            "ISO 18436-7:2014, Condition monitoring — Qualification and assessment of personnel — Thermography",
        },
        {
          href: "https://www.astm.org/e1934-99ar18.html",
          label: "ASTM E1934, Standard Guide for Examining Electrical and Mechanical Equipment with Infrared Thermography",
        },
        {
          href: "https://www.nfpa.org/codes-and-standards/nfpa-70b-standard-development/70b",
          label: "NFPA 70B, Standard for Electrical Equipment Maintenance",
        },
        {
          href: "https://doi.org/10.1016/j.rser.2016.04.079",
          label:
            "Tsanakas, J. A., Ha, L., and Buerhop, C. (2016). Faults and infrared thermographic diagnosis in operating c-Si photovoltaic modules. Renewable and Sustainable Energy Reviews, 62, 695–709",
        },
      ]}
    >
      <p>
        Thermal work on photovoltaic systems is useful when it is captured under stated conditions
        and reported so a later reviewer can understand what was measured. Colorful heat maps are
        not the deliverable. The deliverable is a documented inspection record: operating
        conditions, equipment notes, location context, and apparent temperature differences that a
        qualified reviewer can interpret.
      </p>
      <p>
        <Link href="https://webstore.iec.ch/en/publication/28628" target="_blank" rel="noreferrer">
          IEC TS 62446-3:2017
        </Link>{" "}
        is the standard that addresses infrared thermography of photovoltaic modules and plants. It
        covers measurement equipment, ambient and operating conditions, inspection procedure,
        reporting, personnel qualification, and guidance for classifying thermal abnormalities. That
        scope is PV-specific. IEC 62446-3 does not govern all SterFlies thermal documentation.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_172933_ctigrw.png"
          alt="Utility-scale photovoltaic array documented from the air"
          caption="As arrays grow, consistent coverage and location context become as important as individual frames."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png"
          alt="Aerial documentation pass over photovoltaic modules"
          caption="Coverage is useful only when capture conditions and reporting remain explainable."
        />
      </ArticleFigureRow>

      <h2>Why reporting conditions matter</h2>
      <p>
        Apparent temperature differences on PV modules are easier to observe when the array is under
        sufficient irradiance and load. Low irradiance, strong wind, unstable sky, or inconsistent
        loading can reduce contrast. IEC 62446-3 exists because thermography is treated as
        measurement, and measurement needs constraints. Documenting those conditions is part of
        explaining why a later reviewer should treat a finding as comparable.
      </p>
      <p>
        A casual workflow can produce warm-looking frames. A professional PV thermal report should
        be able to state when the inspection was performed, what environmental conditions were
        present, what equipment and settings were used, and how findings were described. Severity
        language still belongs to qualified review. Documentation records apparent temperature
        difference and location. It does not diagnose a failed module.
      </p>

      <h2>What IEC 62446-3 actually frames</h2>
      <p>
        The technical specification treats PV thermography as an inspection activity with documented
        requirements, not a vague best practice. In practice, a useful report shows more than an
        anomaly. It shows the conditions that make the anomaly meaningful and the method that makes
        later surveys comparable.
      </p>
      <p>
        Repeat surveys only help if the method stays consistent. That is a reporting issue, not a
        claim that every thermal service SterFlies provides is an IEC inspection. For how anomalies
        appear in the field, see{" "}
        <Link href="/blog/solar-thermal-anomalies-drone-based-pv-inspections">
          solar thermal anomalies in PV inspections
        </Link>
        .
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965251/Screenshot_2025-09-12_194648_ibq3cr.png"
          alt="Thermography workflow used to document apparent temperature differences"
          caption="Thermography is measurement. Documented assumptions matter more than palette."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png"
          alt="Annotated thermal documentation of a photovoltaic array"
          caption="A report is more useful when an apparent temperature difference is tied to a location."
        />
      </ArticleFigureRow>

      <h2>Radiometric files versus thermal pictures</h2>
      <p>
        Radiometric files preserve temperature information per pixel. That allows later
        post-processing, quantified apparent temperature differences, and comparison under stated
        assumptions. A non-radiometric picture can still show a pattern. It is harder to revisit as
        a measurement.
      </p>
      <p>
        Flight planning also affects what can be resolved. Altitude, angle, and speed change ground
        sampling distance. If the objective is module- or substring-level identification, the
        capture geometry should match that objective. The report should state that intent.
      </p>
      <p>
        Tsanakas, Ha, and Buerhop (2016) review thermographic interpretation challenges in operating
        crystalline-silicon modules. That paper is useful background on why visual patterns still
        require qualified interpretation. It is not a SterFlies inspection method.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png"
        alt="Side-by-side RGB and radiometric thermal documentation of a photovoltaic array"
        caption="RGB context plus radiometric values turn a visual pattern into a located observation."
      />

      <h2>What makes a PV thermal report usable later</h2>
      <p>
        Operators usually need counts, location context, and an explainable description of apparent
        temperature difference. Mapping, labeling, and pairing thermal imagery with visible
        photographs help maintenance teams find the same module later. Classification language
        should remain cautious: area for further inspection, not failed panel.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1757964961/roofpv_adkqfe.mp4"
        alt="Rooftop photovoltaic array documented for later thermal review"
        caption="Rooftop or utility-scale, the reporting need is the same: method, location, and apparent temperature difference."
        video
      />
      <p>
        Project examples are shown in the{" "}
        <Link href="/projects/pv-farm-hotspots">PV farm thermal documentation project</Link> and{" "}
        <Link href="/thermal/case-studies">thermal case studies</Link>. Service scope is described
        under{" "}
        <Link href="/thermal/Applications">thermal documentation</Link>.
      </p>
      <ArticleCallout>
        IEC 62446-3 applies to photovoltaic infrared thermography workflows. It does not govern
        building-envelope, moisture, or other non-PV thermal documentation.
      </ArticleCallout>

      <h2>Related frameworks, used in their own scope</h2>
      <p>
        ISO 18436-7 addresses qualification and assessment of personnel performing condition
        monitoring with infrared thermography. ASTM E1934 is a guide for documenting qualitative
        and quantitative infrared examinations of electrical and mechanical equipment. NFPA 70B
        addresses electrical-equipment maintenance, which can overlap where arrays connect into
        electrical infrastructure.
      </p>
      <p>
        Those documents strengthen method language in their own domains. They do not convert a
        thermal image into a diagnosis, and they do not make a report legally defensible.
      </p>
      <p>
        A shorter introduction is in{" "}
        <Link href="/blog/thermal101_blog">Thermal Imaging 101</Link>.
      </p>
    </ArticleLayout>
  )
}
