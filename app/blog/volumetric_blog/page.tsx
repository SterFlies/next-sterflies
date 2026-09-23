import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("volumetric_blog")

export default function Page() {
  return (
    <ArticleLayout slug="volumetric_blog" wordCount={820}>
      <h2>Introduction</h2>
      <p>
        Photogrammetry reconstructs a visible surface from overlapping photographs. A point cloud
        is the set of three-dimensional positions that reconstruction produces, and a surface model
        is the continuous form fitted through those points. Reality capture, in this use, means
        keeping that surface as a dated record of the material and ground the camera could see.
      </p>
      <p>
        Volumetric documentation estimates how much material sits above or below a reference
        surface. On construction and aggregate sites that often means stockpiles, cut, and fill.
        Photogrammetry can support that estimate when the capture is scoped for a surface model.
      </p>
      <p>
        The result is volume context for later review. It is not a universally survey-grade
        calculation, and it does not replace a licensed survey when one is required.
      </p>
      <p>
        This article explains how that surface is compared with a baseline to estimate stockpile,
        cut, or fill volume, and which parts of the estimate come from the capture rather than from
        the software display. It does not decide contract quantities, payment, ownership of
        material, or whether material was lost.
      </p>

      <h2>What volumetric data is</h2>
      <p>
        The estimate starts from a comparison of two surfaces, not from a single height.
      </p>
      <p>
        A volumetric record compares surfaces. One surface is the current ground or pile. The other
        is a baseline: design grade, a previous capture, or a reference plane. Where the current
        surface is above the baseline, the difference is often described as fill or stockpile
        volume. Where it is below, the difference is cut.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1753979367/stockpile-website_gctpwh.png"
        alt="Top-down photogrammetric surface used for stockpile volume context"
        caption="A mapped surface can support later volume context when visibility and control allow it."
      />
      <p>
        The baseline is a choice, and it should be named. A design surface answers a different
        question than a previous capture or a flat reference plane under a stockpile. The same pile
        compared with two different baselines produces two different volumes, both consistent with
        their own inputs. A later reader needs to know which surface was subtracted, on what date,
        and whether that surface came from this capture, an earlier one, or a design file.
      </p>
      <p>
        Cut and fill name the sign of the difference. On an earthwork site they describe geometry
        between two surfaces. They do not describe soil type, compaction, moisture, or suitability.
        On a stockpile they describe the space between the visible pile and the chosen base. They
        do not describe tons, because a volume figure does not include density.
      </p>

      <h2>How a photogrammetric volume is produced</h2>
      <p>
        Naming the baseline still leaves the question of how the current surface was obtained.
      </p>
      <p>
        Overlapping aerial images are processed into a surface. That surface is then compared to the
        chosen baseline. The useful steps are coverage planning, image capture, surface processing,
        and a documented comparison. Those steps are the same family of methods described in{" "}
        <Link href="/blog/orthomosaic_blog">orthomosaic mapping</Link>.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1753979443/pile-output_l6pbqq.png"
        alt="Example volume comparison output from a photogrammetric surface"
        caption="Example comparison output from a documented capture. Values belong to that capture plan."
      />
      <p>
        Coverage planning decides which ground, pile faces, and edges will appear in enough
        photographs to be reconstructed. Image capture carries out that plan. Ground sample
        distance (GSD) is the ground width of one pixel, set mainly by flying height and the
        sensor. A finer GSD can resolve the crest and toe of a pile more clearly. Processing turns
        the kept frames into a point cloud and then a surface. The comparison clips that surface to
        a stated area and subtracts the baseline. Changing the area between reports changes the
        number even when the pile has not moved.
      </p>
      <p>
        An orthomosaic produced with the surface shows what the volume area sat on: the pile,
        nearby equipment, and the ground at the toe. It is a companion image, not the volume.
        Shadows, a loader left on the pile, or a face the camera saw only once can still distort
        the surface under a photograph that looks sharp. The figure above is an example of a
        comparison display. Any values in such a display belong to that run and that baseline.
      </p>

      <h2>Accuracy depends on the capture</h2>
      <p>
        A comparison can be repeated exactly and still follow a weak surface.
      </p>
      <p>
        Volume quality depends on capture geometry, surface visibility, processing, control, and
        site conditions. Vegetation, steep faces, shadows, moving equipment, and incomplete coverage
        all affect the surface. Ground control can improve georeferencing when it is part of the
        scope. None of those factors produce a guaranteed sub-inch or centimeter result.
      </p>
      <ArticleCallout>
        Photogrammetric volumes are estimates tied to a capture plan. They are not a stamped
        quantity survey.
      </ArticleCallout>
      <p>
        Real-time kinematic (RTK) positioning, when the plan includes it, corrects camera positions
        during flight so the surface can be placed in a coordinate system. Ground control and
        checkpoints, when they are used, give an independent look at that placement. Height error
        matters for volume because a small bias in elevation, spread over a large footprint,
        becomes a large volume. Those tools address placement. They do not fill in a face the
        photographs did not cover, and a surface can look acceptable at a few checkpoints while a
        steep pile face remains poorly seen.
      </p>
      <p>
        Conditions at the moment of capture are part of the estimate. Equipment on a stockpile, a
        wet surface that reconstructed poorly, or an edge lost in vegetation will enter the volume.
        Removing them later in software is an edit, and the edit should be described. An
        undescribed edit leaves a later reviewer unable to separate the captured surface from the
        cleaned one.
      </p>

      <h2>Where this is commonly used</h2>
      <p>
        The capture limits are why the use of the number should be named as plainly as the number.
      </p>
      <p>
        Typical uses include stockpile records, earthwork progress context, and material tracking
        between intervals. Recurring captures are discussed in{" "}
        <Link href="/blog/monthly-volumetric-reporting_blog">
          recurring stockpile and material documentation
        </Link>
        . Terrain context more generally is covered in{" "}
        <Link href="/blog/topography_blog">understanding topographic maps</Link>.
      </p>
      <p>
        Service scope is described under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>.
      </p>
      <p>
        A stockpile series, an earthwork check against a prior surface, and a look at material
        placed between two site visits are the ordinary examples. In each case the record shows the
        visible difference between surfaces on the dates flown. A contractor, an insurer, or a
        construction manager can use that difference as context for what changed. Tickets, a
        licensed survey, or other controls remain in place when the question is payment, inventory,
        or a boundary. Scope states whether a volume output was part of the work. It does not
        convert the output into those other controls.
      </p>

      <h2>Limitations</h2>
      <p>
        Photogrammetric volume does not see inside a pile. Voids, moisture, compaction, and
        material below the visible surface are outside the photograph. A toe that is hidden, a crest
        that changed while the aircraft was overhead, or a pile partly under a conveyor is estimated
        only where points exist, with interpolation across the rest. Interpolation can look as
        smooth as measured ground. A reviewer should be able to tell the matched surface from the
        filled gaps.
      </p>
      <p>
        The number is also silent on cause. A smaller pile on a later date does not identify
        haul-off, settlement, or a change in the baseline. Those explanations require other records
        and someone qualified to interpret them. The volume figure remains an estimate tied to the
        capture plan and the stated comparison.
      </p>

      <h2>Conclusion</h2>
      <p>
        A photogrammetric volume is the space between a reconstructed visible surface and a named
        baseline. The surface comes from overlapping photographs, a point cloud, and the processing
        applied to them. The baseline comes from a design, a previous capture, or a reference
        plane. Change either input and the volume changes with it.
      </p>
      <p>
        Ground sample distance, overlap, RTK or other control, and the conditions on the pile
        govern how much of that surface was actually seen. The orthomosaic and the comparison
        figure let a later reader see the area that was compared and the form of the result. They
        do not add density, and they do not identify who moved the material.
      </p>
      <p>
        The estimate is not a survey, not a diagnosis, not a finding of causation, and not
        inventory control. It is geometry for the dates and the plan that produced it. Quantity,
        payment, and any conclusion about loss stay with the professionals and the records those
        decisions require.
      </p>
    </ArticleLayout>
  )
}
