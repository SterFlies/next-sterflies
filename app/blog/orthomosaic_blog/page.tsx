import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("orthomosaic_blog")

export default function Page() {
  return (
    <ArticleLayout slug="orthomosaic_blog">
      <p>
        An orthomosaic is a map made from overlapping photographs. Photogrammetry software aligns
        those images, corrects for camera angle and terrain, and produces a raster with more uniform
        scale than a single aerial photograph.
      </p>
      <p>
        That scaled map can be used to review layout, compare conditions over time, and support
        measurements when the capture is scoped for that purpose. It is not a licensed survey, and
        it does not replace a surveyor.{" "}
        <Link href="/services/mapping">Mapping and photogrammetry</Link> is one of the capture
        methods SterFlies uses when a site needs an exterior spatial record.
      </p>

      <h2>What an orthomosaic map is</h2>
      <p>
        Overlapping stills are aligned with structure-from-motion. Bundle adjustment refines camera
        positions and lens distortion. A digital elevation model is derived, and pixels are
        remapped toward their ground coordinates. The result is a continuous image that can be
        opened in GIS or CAD software, or tiled for web review.
      </p>
      <p>
        Because scale is more consistent than in a raw aerial frame, later reviewers can draw
        lines, compare areas, and locate features relative to the rest of the site. How closely
        those measurements match field conditions depends on flying height, sensor, overlap,
        control, and processing.
      </p>

      <h2>Why a mapped record differs from a photograph</h2>
      <p>
        A photograph has perspective. Objects closer to the camera appear larger, and terrain tilt
        distorts distances. An orthomosaic reduces that distortion so the site can be read more like
        a map.
      </p>
      <p>
        Construction teams use that kind of record to see earthwork, pads, utilities, and access in
        one frame. Other industries also derive index layers or change-detection products from
        orthomosaics. Those uses are method capabilities, not a claim that SterFlies provides every
        downstream analysis.
      </p>
      <p>
        The{" "}
        <Link href="/projects/65acresite">65-acre development mapping project</Link> is an example
        of recurring aerial photogrammetry used as a shared spatial record rather than a set of
        isolated stills.
      </p>

      <h2>Flight planning affects the output</h2>
      <p>
        Map quality starts before the aircraft leaves the ground. Altitude, overlap, and coverage
        pattern control ground sample distance and whether gaps appear at the edges. A common
        planning range for many sites is a few centimeters per pixel, often associated with
        roughly 150–300 feet AGL, with high forward and side overlap in a grid pattern. Those
        numbers are planning targets, not guaranteed resolution for every site.
      </p>
      <p>
        Tall vegetation, vertical structures, and site access can require additional passes. The
        documentation objective—progress record, layout, later comparison, or measurement
        context—should drive those choices.
      </p>
      <ArticleCallout>
        Ground sample distance is a function of altitude and sensor. It is not a survey accuracy
        specification by itself.
      </ArticleCallout>

      <h2>From photographs to a map</h2>
      <p>
        After capture, images are processed into a point cloud, elevation model, and orthomosaic
        raster. Typical file deliveries include GeoTIFF for GIS or CAD use, and tiled web maps for
        browser review. Related 3D outputs from the same image set are described in{" "}
        <Link href="/blog/3d_model">interactive 3D models</Link>.
      </p>

      <h2>Example: mapped property record</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg"
        alt="Orthomosaic map of a documented property"
        caption="An orthomosaic of a documented property, used here as an example of a scaled aerial record."
      />
    </ArticleLayout>
  )
}
