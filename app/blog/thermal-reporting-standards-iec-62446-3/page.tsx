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
      <h2>Introduction</h2>
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
      <p>
        The purpose of this article is to describe how a photovoltaic thermal inspection is reported
        so a later reviewer can use it, and to keep IEC 62446-3 within photovoltaic modules and
        plants. Building-envelope, moisture, and general industrial thermography sit outside that
        specification. They are documented under their own methods, not as applications of IEC
        62446-3.
      </p>
      <p>
        A radiometric thermal image stores an apparent temperature in each pixel. Apparent
        temperature is the value the camera reports for a surface after its measurement settings
        are applied. Technicians, engineers, and attorneys can read the report at that level: the
        value, the conditions, and the location, held for qualified review.
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
      <p>
        Stated conditions are what let a second visit be read against the first. The specification
        gives photovoltaic inspections a shared place to record them, which is the reporting
        structure the next section describes.
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
      <p>
        Repeatable coverage is useful when a later pass can be set beside the first. That
        comparison depends on the file still holding measurements, which is the difference between
        a radiometric record and a thermal picture.
      </p>

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
        Ground sample distance is the ground width represented by one pixel, the quantity capture
        planning refers to as ground sampling distance. Sensor resolution, lens, and camera
        distance set it. Increasing altitude or widening the view covers more of the plant in each
        frame and records less detail on each module. The report should state the geometry that was
        flown so a later reviewer knows what size of pattern the capture was intended to show.
        Geometry documents the capture and leaves the meaning of a warmer area to qualified review.
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
      <p>
        Counts and locations matter because a crew returns to a module, a combiner, or a row, and
        needs that place named the same way on the next visit. Pairing each apparent temperature
        difference with an RGB frame and a stable label keeps two discussions from drifting onto
        different modules. The description stays with the measurement: where the difference sits,
        how it compares with neighboring modules under the same conditions, and that the area is
        marked for further inspection.
      </p>
      <p>
        Words for severity and cause belong to the qualified reviewer who accepts them. A
        consistent, located, radiometric record can still leave that classification open.
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

      <h2>Conclusion</h2>
      <p>
        A photovoltaic thermal report is usable later when a reviewer can recover the conditions,
        the method, the location, and the apparent temperature difference without reconstructing
        them from memory. IEC TS 62446-3 supplies a structure for infrared thermography of
        photovoltaic modules and plants. That structure stays inside photovoltaic work.
      </p>
      <p>
        Radiometric values, stated capture geometry, and paired RGB imagery make the pattern
        measurable and findable on a return visit. A consistent method supports comparison between
        surveys. The pattern remains an area for further inspection until a qualified reviewer
        classifies it.
      </p>
      <p>
        ISO 18436-7, ASTM E1934, and NFPA 70B inform personnel qualification, examination records,
        and electrical maintenance inside their own scopes. They do not widen IEC 62446-3 into a
        general thermography standard for buildings or industrial equipment, and they do not
        replace qualified interpretation of the photovoltaic file.
      </p>
    </ArticleLayout>
  )
}
