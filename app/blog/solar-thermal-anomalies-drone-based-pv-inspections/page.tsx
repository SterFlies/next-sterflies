import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "solar-thermal-anomalies-drone-based-pv-inspections"
)

export default function Page() {
  return (
    <ArticleLayout
      slug="solar-thermal-anomalies-drone-based-pv-inspections"
      references={[
        {
          href: "https://webstore.iec.ch/en/publication/28628",
          label:
            "IEC TS 62446-3:2017, Photovoltaic systems — Infrared thermography of photovoltaic modules and plants",
        },
      ]}
    >
      <h2>Introduction</h2>
      <p>
        Photovoltaic arrays can look static from a distance. At module scale they are live electrical
        systems operating under irradiance, voltage, and weather. Infrared thermography is one way
        to document apparent temperature differences that are not visible in ordinary photographs.
      </p>
      <p>
        This article is about documenting those patterns with RGB and location context so a
        qualified reviewer can decide what deserves further inspection. It is not a diagnosis of
        failed panels, defective modules, electrical faults, or root cause. Reporting language for
        PV thermography is addressed in{" "}
        <Link href="/blog/thermal-reporting-standards-iec-62446-3">
          thermal reporting standards in solar PV inspections
        </Link>
        .
      </p>
      <p>
        The purpose of this article is to describe apparent temperature patterns that commonly
        appear in drone-based photovoltaic records and to state what those records are for. They
        locate a difference and keep the visible context around it. Apparent temperature is the
        value the camera reports for a surface under the settings and conditions of that capture.
        Where the file is a radiometric thermal image, each pixel stores that value for later
        measurement. SterFlies records the pattern for qualified review.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png"
          alt="Aerial documentation of a photovoltaic array"
          caption="Consistent coverage helps later reviewers compare modules under similar capture conditions."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png"
          alt="Radiometric thermal and RGB documentation of photovoltaic modules"
          caption="A useful observation pairs an apparent temperature difference with RGB location context."
        />
      </ArticleFigureRow>

      <h2>Apparent temperature difference, not a color palette</h2>
      <p>
        Under load, current that cannot move evenly through a module can appear as heat. Infrared
        cameras record emitted radiation and display temperature variation across modules, strings,
        and nearby components. The useful quantity is usually the apparent temperature difference
        between an area and comparable nearby modules captured under the same conditions.
      </p>
      <p>
        A warm pixel means little in isolation. Environmental variables matter. Low irradiance,
        wind, intermittent cloud cover, viewing angle, reflections, and camera settings all affect
        contrast. That is why IEC 62446-3 treats operating conditions as part of a valid PV
        thermography inspection, and why a report should state those conditions.
      </p>
      <p>
        With those conditions written down, the record can be read for the patterns reviewers
        commonly ask to have located.
      </p>

      <h2>Patterns that commonly appear in PV thermal records</h2>
      <p>
        Localized warmer areas, repeating bands that follow substring layout, and broader warming
        across a group of modules are patterns that later reviewers often ask about. Those patterns
        can have several explanations, including soiling, shading, mismatch, connection resistance,
        or internal module stress. Documentation can locate the pattern. It cannot assign the cause.
      </p>
      <p>
        Connection points such as connectors, junction boxes, and combiner locations can also show
        localized apparent temperature differences. Those observations are areas for further
        inspection. They are not, by themselves, proof of overheating, fire risk, or impending
        failure.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757966482/heb-roofpv-ortho_ywek9f.jpg"
          alt="Orthomosaic of a rooftop photovoltaic array"
          caption="An orthomosaic gives site-scale location context for later comparison."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771948443/pix4d-drone-inspection-thermal-solar-panels-11_otoqbt.jpg"
          alt="Thermal documentation of photovoltaic modules with location context"
          caption="Site-wide thermal mapping can show whether a pattern is isolated or repeating."
        />
      </ArticleFigureRow>
      <p>
        An orthomosaic and a site-wide thermal map show whether a pattern is isolated or repeats
        across a block. Repetition can focus where a reviewer looks next. Surface conditions,
        connections, and the module itself remain possible explanations. The map documents that
        distribution for qualified review.
      </p>

      <h2>Soiling and shading can look like electrical issues</h2>
      <p>
        Uneven soiling, debris, vegetation, and shading can create current mismatch that appears as
        elevated temperature. The corrective action, if any, is a qualified operational decision.
        The documentation task is to show where the pattern occurred and what the visible context
        looked like at the time.
      </p>
      <p>
        Soiling and shade can reduce the current part of a module is able to pass, so cells that
        share the circuit operate under mismatch. The additional heat can appear as an apparent
        temperature difference. Vegetation, debris, or a shadow line from a nearby structure may be
        plain in the RGB photograph and absent from the thermal frame alone. The observation is the
        pair: the difference, and the visible condition at the same place and time.
      </p>
      <p>
        Cleaning, vegetation work, or an electrical test can each be a reasonable next question for
        the same kind of contrast. Choosing among them is an operational decision for the people
        responsible for the plant. The thermal record shows where the pattern was recorded and what
        the module looked like then, and it holds that record for qualified review.
      </p>
      <ArticleCallout>
        An apparent temperature difference is an area for further inspection. It is not a failed
        panel, a defective module, or an electrical fault until a qualified reviewer says so.
      </ArticleCallout>

      <h2>Why location context matters more than a single frame</h2>
      <p>
        Individual thermal frames are hard to use in the field. A geo-referenced thermal map, paired
        with RGB imagery, lets later reviewers see whether a pattern sits on one module, repeats
        across a string, or aligns with a known shading source. That is mapping and labeling, not
        diagnosis.
      </p>
      <p>
        An absolute temperature reading can also mislead because ambient conditions shift the
        baseline. Comparing a module to its neighbors in the same operating block is usually more
        informative than quoting one number. Example values from a specific capture should stay
        attached to that capture. They are not universal thresholds.
      </p>
      <p>
        For a technician walking the array back, the useful result is a module that can be found
        again. For an engineer or an attorney reading the file later, the useful result is the same
        comparison: a pattern attached to a place, a time, and the neighboring modules captured with
        it. A single frame, separated from that map, drops the pattern back into an unlabeled
        temperature.
      </p>
      <p>
        Field examples are shown in the{" "}
        <Link href="/projects/pv-farm-hotspots">PV farm thermal documentation project</Link> and{" "}
        <Link href="/thermal/case-studies">thermal case studies</Link>. Service scope is under{" "}
        <Link href="/thermal/Applications">thermal documentation</Link>. A shorter primer is{" "}
        <Link href="/blog/thermal101_blog">Thermal Imaging 101</Link>.
      </p>

      <h2>Conclusion</h2>
      <p>
        Drone-based thermal documentation of a photovoltaic array records apparent temperature
        differences that ordinary photographs leave out, together with the RGB and location context
        a later reviewer needs. Localized warmer areas, bands that follow substring layout, broader
        warming across a group of modules, and localized differences at connectors and combiner
        locations are patterns to place on the plant and describe.
      </p>
      <p>
        Soiling, shading, mismatch, and connection conditions can produce similar contrast under
        load. Neighbor comparison inside one operating period, with the conditions stated, is the
        comparison the record can support. A single apparent temperature, detached from neighboring
        modules and from the weather at the time, is a weak basis for that comparison.
      </p>
      <p>
        IEC TS 62446-3 remains the photovoltaic-specific reference for treating operating conditions
        as part of the inspection. The deliverable described here is a located pattern held for
        qualified review. Module failure, an electrical fault, and root cause are determinations
        that review may reach. The capture records the pattern those determinations can be checked
        against.
      </p>
    </ArticleLayout>
  )
}
