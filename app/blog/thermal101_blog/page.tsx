import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("thermal101_blog")

export default function Page() {
  return (
    <ArticleLayout slug="thermal101_blog" wordCount={920}>
      <h2>Introduction</h2>
      <p>
        Thermal cameras record infrared radiation emitted from surfaces. The resulting image shows
        apparent temperature patterns, not a photograph of the interior of an object and not a
        diagnosis of why a pattern exists.
      </p>
      <p>
        This article is an introduction for technical documentation. It is not x-ray vision, and it
        does not identify failed equipment, moisture, or electrical faults by itself.
      </p>
      <p>
        The purpose of this article is to explain what a thermal documentation record contains and
        where qualified review begins. Photovoltaic technicians, facility engineers, and attorneys
        may receive the file without a background in thermography. The discussion stays with the
        record: the image, the conditions of capture, and the context that lets a later reviewer
        return to the same surface.
      </p>
      <p>
        Apparent temperature is the value a thermal camera reports for a surface after its
        measurement settings are applied. It describes that surface at the time of capture. A
        radiometric thermal image stores that value in each pixel so the pattern can be measured
        again under the same stated assumptions. SterFlies records those patterns, with the
        surrounding context, for later qualified review.
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
      <p>
        In a radiometric thermal image, each pixel holds an apparent temperature derived from
        measured infrared radiation and from settings applied at capture. Emissivity, reflected
        temperature, and distance are typical inputs. They are assumptions about the surface and
        the surroundings. A different emissivity changes the reported number even when the
        radiation reaching the lens is unchanged. The radiometric file can be reopened and the
        difference measured again. A frame that stores only colors can still show contrast. The
        temperatures that can be measured again are the ones stored in the radiometric file.
      </p>
      <p>
        Palette color is applied after that measurement. Iron, rainbow, and grayscale maps draw the
        same values in different hues, and the scale can be stretched across a few degrees or
        across a much wider range. Either choice changes how forceful the picture looks. Reviewers
        use the scale and the apparent temperature difference against a comparable nearby surface
        from the same capture. The hue is the display.
      </p>

      <h2>Why RGB and location context matter</h2>
      <p>
        A warm or cool area is hard to interpret without knowing what the camera was pointed at.
        Pairing thermal imagery with an RGB photograph and a location keeps the observation
        reviewable. Without that context, palette contrast can be mistaken for a finding.
      </p>
      <p>
        The RGB photograph shows the visible surface in the thermal frame: module layout, glass,
        labels, staining, shade, or nearby equipment. Location, whether a coordinate, an equipment
        identifier, or a mark on a site drawing, ties that pair to a place a later reviewer can
        find. A cropped thermal frame is difficult to place on its own, and a strong palette can
        be read as a finished conclusion before the visible scene is checked.
      </p>
      <p>
        A brighter area may follow a change in material, a reflection, uneven sun, or a difference
        in how equipment was operating. The photograph and the location keep those possibilities
        attached to the actual surface so qualified review has a scene to examine. They do not
        select a cause. Conditions at capture determine how much of the pattern was available to
        record.
      </p>

      <h2>Environmental conditions change what can be seen</h2>
      <p>
        Wind, rain, sun load, reflections, viewing angle, and whether equipment is operating all
        affect apparent temperature. A pattern that appears under one set of conditions may be weak
        or absent under another. Reports are more useful when those conditions are stated.
      </p>
      <p>
        Wind increases cooling and can shrink a difference that was distinct in still air. Rain and
        surface water change how a surface emits and reflects infrared energy. Sun load raises
        exposed faces and can produce a pattern that follows geometry and time in the sun.
        Reflections from sky, glass, or metal can appear in the frame in the position of the
        target. Viewing angle changes how much of that reflected energy enters the lens. Equipment
        that is off, lightly loaded, or still warming will show a different surface pattern from
        equipment in steady operation.
      </p>
      <p>
        Irradiance, weather, time of day, and operating status give a later reviewer a basis for
        judging whether two records are comparable. A strong pattern on one visit and a weak
        pattern on another may track those conditions. The notes document the capture. Cause
        remains with qualified review.
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
      <p>
        Across those uses, the record stops at the documented pattern. A warmer or cooler area on a
        photovoltaic module, a building surface, or a piece of equipment is an observation tied to
        a time, a location, and a set of conditions. Qualified review is where a failed module, an
        electrical fault, moisture within an assembly, or a root cause can be considered, using
        other measurements and the method that applies to the asset. The capture is organized so
        that review has a stable file. The file does not carry a review qualification with it.
      </p>

      <h2>Conclusion</h2>
      <p>
        Thermal documentation stores infrared radiation from a surface so apparent temperature
        differences can be reviewed after the visit. In a radiometric thermal image those
        differences can be measured again under the assumptions used at capture. The palette only
        controls how the values are drawn. The RGB photograph and the location keep the values
        attached to a surface a later reviewer can recognize.
      </p>
      <p>
        Environmental conditions and operating state belong in the same record because they govern
        the contrast that was available. Wind, surface water, sun, reflections, viewing angle, and
        load explain why a pattern may be clear on one day and faint on another. Written conditions
        give the comparison between visits a stated basis.
      </p>
      <p>
        Qualified review is the step that interprets the pattern. The documentation shows where an
        apparent temperature difference was recorded and what the visible scene looked like at that
        time. Module failure, electrical fault, moisture, and root cause are decisions for that
        review. The record is the material those decisions can be checked against.
      </p>
    </ArticleLayout>
  )
}
