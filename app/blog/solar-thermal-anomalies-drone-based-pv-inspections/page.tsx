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

      <h2>Soiling and shading can look like electrical issues</h2>
      <p>
        Uneven soiling, debris, vegetation, and shading can create current mismatch that appears as
        elevated temperature. The corrective action, if any, is a qualified operational decision.
        The documentation task is to show where the pattern occurred and what the visible context
        looked like at the time.
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
        Field examples are shown in the{" "}
        <Link href="/projects/pv-farm-hotspots">PV farm thermal documentation project</Link> and{" "}
        <Link href="/thermal/case-studies">thermal case studies</Link>. Service scope is under{" "}
        <Link href="/thermal/Applications">thermal documentation</Link>. A shorter primer is{" "}
        <Link href="/blog/thermal101_blog">Thermal Imaging 101</Link>.
      </p>
    </ArticleLayout>
  )
}
