import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("thermal101_blog")

export default function Page() {
  return (
    <ArticleLayout slug="thermal101_blog" wordCount={920}>
      <p>
        Thermal cameras record infrared radiation emitted from surfaces. The resulting image shows
        apparent temperature patterns, not a photograph of the interior of an object and not a
        diagnosis of why a pattern exists.
      </p>
      <p>
        This article is an introduction for technical documentation. It is not x-ray vision, and it
        does not identify failed equipment, moisture, or electrical faults by itself.
      </p>

      <h2>What a thermal image is showing</h2>
      <p>
        Objects above absolute zero emit infrared energy. A thermal sensor translates differences in
        that energy into a display, often as a color palette. Palettes are visualization choices.
        The useful quantity, when the file is radiometric, is the apparent temperature difference
        between an area and a comparable nearby surface captured under the same conditions.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755171650/ThermalThumb_tn13mu.png"
        alt="Thermal documentation showing apparent temperature patterns"
        caption="A thermogram displays apparent temperature patterns. Color is a display choice, not a diagnosis."
      />

      <h2>Why RGB and location context matter</h2>
      <p>
        A warm or cool area is hard to interpret without knowing what the camera was pointed at.
        Pairing thermal imagery with an RGB photograph and a location keeps the observation
        reviewable. Without that context, palette contrast can be mistaken for a finding.
      </p>

      <h2>Environmental conditions change what can be seen</h2>
      <p>
        Wind, rain, sun load, reflections, viewing angle, and whether equipment is operating all
        affect apparent temperature. A pattern that appears under one set of conditions may be weak
        or absent under another. Reports are more useful when those conditions are stated.
      </p>
      <ArticleCallout>
        Thermal documentation records apparent temperature differences for later qualified review. It
        does not determine root cause.
      </ArticleCallout>

      <h2>Where this is commonly used</h2>
      <p>
        Photovoltaic inspections are one structured use, with reporting language discussed in{" "}
        <Link href="/blog/thermal-reporting-standards-iec-62446-3">
          thermal reporting standards in solar PV inspections
        </Link>{" "}
        and field patterns in{" "}
        <Link href="/blog/solar-thermal-anomalies-drone-based-pv-inspections">
          solar thermal anomalies in PV inspections
        </Link>
        . Building and industrial work can also use thermal as a supporting layer. In every case,
        interpretation belongs to a qualified reviewer.
      </p>
      <p>
        Service scope is described under{" "}
        <Link href="/thermal/Applications">thermal documentation</Link>.
      </p>
    </ArticleLayout>
  )
}
