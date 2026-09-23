import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("orthomosaic_blog")

export default function Page() {
  return (
    <ArticleLayout slug="orthomosaic_blog">
      <h2>Introduction</h2>
      <p>
        Photogrammetry reconstructs visible shape and position from overlapping photographs.
        Software finds the same edges, joints, and surface marks in many frames, then estimates
        where the camera was for each exposure. Reality capture is the documentation practice that
        uses that reconstruction, together with the original frames, to record a site as it
        appeared at a stated time. An orthomosaic is the map-like image that work produces.
      </p>
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
      <p>
        This article explains how that map is planned and processed, and how a later reader should
        treat a measurement taken from it. It is written for attorneys, safety professionals,
        industrial hygienists, contractors, insurers, and engineers who need the record without
        operating the aircraft. It does not decide whether a distance or area on the map is
        sufficient for design, payment, or a legal description.
      </p>

      <h2>What an orthomosaic map is</h2>
      <p>
        The product is a single scaled image. The sequence below is how overlapping frames become
        that image.
      </p>
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
      <p>
        Structure-from-motion starts from overlap rather than from a surveyed drawing. The same
        pavement joint, roof corner, or piece of equipment has to appear in several neighboring
        frames. Bundle adjustment then revises the camera positions, the lens model, and the
        matched points together so those estimates agree more closely. A digital elevation model
        is a grid of heights for the visible surface. Remapping uses that grid to shift each pixel
        toward a ground position, which removes much of the scale change caused by camera tilt and
        by relief. The file that results is still a picture of what the camera could see.
      </p>

      <h2>Why a mapped record differs from a photograph</h2>
      <p>
        Once the raster exists, the practical difference is how a later reviewer can read the site.
      </p>
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
      <p>
        A site layout shows why the distinction matters. Access, a building pad, material laydown,
        and the edge of an excavation can sit in one scaled frame, so a reviewer can ask where the
        haul route was relative to the pad, or whether a stockpile in a later map occupies ground
        that was open in an earlier one. Ground photographs still carry surface detail. The map
        holds those features in one relationship, and only for the area that was flown and
        successfully matched. Safety staff and industrial hygienists can use that relationship to
        see where a work area sat. The map does not identify an exposure or evaluate the work.
      </p>

      <h2>Flight planning affects the output</h2>
      <p>
        That relationship is set before processing, by how the photographs are collected.
      </p>
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
      <p>
        Ground sample distance (GSD) is the ground width represented by one pixel. Flying lower,
        or using a sensor that records finer detail at the same height, produces a smaller GSD and
        shows smaller surface features. The altitude range above is a planning habit for choosing
        that resolution. Pixel size describes how finely the surface was sampled. It does not state
        how far a line drawn on the map may sit from a position a surveyor would report.
      </p>
      <p>
        Real-time kinematic positioning, usually called RTK, applies a satellite correction during
        flight so each photograph is tagged with a camera position adjusted against a base or a
        correction network. Those positions help place the orthomosaic in a coordinate system.
        Checkpoints, or a licensed survey when one is required, are how a reviewer learns how close
        that placement came on that project. RTK belongs in the capture plan. Reading the plan is
        still required.
      </p>

      <h2>From photographs to a map</h2>
      <p>
        Collection decides which surfaces can be reconstructed. Processing is what a later reviewer
        actually opens.
      </p>
      <p>
        After capture, images are processed into a point cloud, elevation model, and orthomosaic
        raster. Typical file deliveries include GeoTIFF for GIS or CAD use, and tiled web maps for
        browser review. Related 3D outputs from the same image set are described in{" "}
        <Link href="/blog/3d_model">interactive 3D models</Link>.
      </p>
      <p>
        A point cloud is the three-dimensional set of positions estimated from the matched
        photographs. Each point is a sample on a visible surface: ground, a roof, a stockpile, or
        equipment the camera could see. A sparse cloud is mainly the tie points used to align the
        cameras. A dense cloud samples the surface more closely and is what processing uses to
        build the elevation model and, from that model, the orthomosaic. Gaps in the cloud become
        gaps, smears, or interpolated patches in the map. A smooth area over trees, water, or a
        vehicle that moved during the flight should be read as a processing result.
      </p>
      <p>
        A GeoTIFF stores the image with the information a GIS or CAD system needs to place it on
        coordinates. A tiled web map is the same picture cut into small images so it can be panned
        in a browser. Neither format changes the capture. Both are views of one processing run. The
        orthomosaic is the two-dimensional product. A mesh from the same frames is a separate
        deliverable, and it is only as complete as the surfaces the camera saw.
      </p>

      <h2>Example: mapped property record</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg"
        alt="Orthomosaic map of a documented property"
        caption="An orthomosaic of a documented property, used here as an example of a scaled aerial record."
      />
      <p>
        The property record above is an example of the product, not a report of dimensions or of a
        project outcome. A reader can see the site as one scaled image: open ground, structures,
        and access, rather than a stack of unrelated frames. Tracing a route across the property
        or comparing this frame with a later capture stays inside what a map of this kind supports.
      </p>
      <p>
        Assigning a boundary, certifying an area, or treating a pixel distance as a surveyed length
        is a different task. When that task is required, it belongs to the professional whose work
        product it is. The orthomosaic remains the picture of what was visible under the plan that
        produced it.
      </p>

      <h2>Limitations</h2>
      <p>
        An orthomosaic records surfaces the camera could see at the time of flight. It does not
        record interiors, the underside of equipment, buried utilities, or work under a roof or a
        tarp. Vegetation, standing water, deep shadow, and objects that moved during the flight are
        common reasons a surface is incomplete or smoothed. A map made on one day also stays that
        day. Weather, operations, and cleanup can change the site while the file does not.
      </p>
      <p>
        Measurements taken from the raster inherit the flying height, overlap, control, and
        processing used for that capture. Where a decision depends on a checked position or
        elevation, the orthomosaic is context for the work. The checked position comes from the
        method the decision requires, which may be a licensed survey.
      </p>

      <h2>Conclusion</h2>
      <p>
        An orthomosaic takes a planned set of overlapping photographs and remaps them into one
        scaled image of the visible site. Overlap and ground sample distance determine how much
        surface detail can be reconstructed. The elevation model and the camera solution determine
        how those pixels are placed. The file that follows is a record of that plan and that day.
      </p>
      <p>
        Used that way, the map gives later reviewers a shared view of layout: where features sat
        relative to one another, and how a later capture compares with an earlier one. Ground
        photographs still carry close detail. The map is the frame that relates them. Attorneys,
        safety staff, industrial hygienists, contractors, insurers, and engineers can all read that
        frame without having stood at the same ground viewpoints.
      </p>
      <p>
        The orthomosaic is not a survey, not a diagnosis, not a finding of causation, and not
        inventory control. It is a dated spatial picture. Professionals who need a determination
        beyond that picture use it as a record of what was visible, and they use the method their
        own work requires for the determination itself.
      </p>
    </ArticleLayout>
  )
}
