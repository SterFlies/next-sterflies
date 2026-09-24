import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("rtk-ground-control-checkpoints-drone-mapping")

const references = [
  {
    href: "https://old.asprs.org/archives/asprs-approves-edition-2-version-2-of-the-asprs-positional-accuracy-standards-for-digital-geospatial-data-2024.html",
    label:
      "ASPRS, announcement of the Positional Accuracy Standards for Digital Geospatial Data, Edition 2, Version 2 (2024), including the Society’s download link for the standard.",
  },
  {
    href: "https://publicdocuments.asprs.org/PositionalAccuracyStd-Ed2-V2",
    label:
      "ASPRS, Positional Accuracy Standards for Digital Geospatial Data, Edition 2, Version 2 (2024). Download location published in the ASPRS adoption announcement. The standard is the reference for reporting positional accuracy of a digital geospatial product, rather than attaching one number to an aircraft.",
  },
  {
    href: "https://pubs.usgs.gov/of/2021/1039/ofr20211039.pdf",
    label:
      "U.S. Geological Survey, Processing Coastal Imagery With Agisoft Metashape, Open-File Report 2021–1039. Describes overlap, ground control, and GNSS-assisted camera positions as parts of a structure-from-motion workflow, and notes gaps where overlap is insufficient.",
  },
  {
    href: "https://support.pix4d.com/hc/en-us/articles/115000140963",
    label:
      "Pix4D, “Tie points in photogrammetry project (GCPs, CPs, MTPs, and ATPs) — PIX4Dmapper.” GCPs georeference the model. Checkpoints are used for quality assessment. The article’s suggestion of how many targets to place is vendor guidance, not a SterFlies specification.",
  },
  {
    href: "https://support.pix4d.com/hc/en-us/articles/360045074152",
    label:
      "Pix4D, “Tie points (GCPs, MTPs, and CPs) — PIX4Dmatic.” Checkpoints assess absolute accuracy and are not used to georeference the project.",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="rtk-ground-control-checkpoints-drone-mapping"
      references={references}
      wordCount={2111}
    >
      <h2>Introduction</h2>
      <p>
        Drone mapping is often sold with a single accuracy figure. The figure is usually a
        centimeter, sometimes attached to the words RTK or survey-grade. That sentence hides the
        thing a professional reader actually needs: which error is being discussed, what was used
        to place the model, and what was held back to test it.
      </p>
      <p>
        Relative fit, absolute placement, ground control, checkpoints, flight geometry, and the
        surface itself are different parts of the same job. A project can be tight enough to
        compare two stockpiles and still not be tied to a published coordinate system. It can be
        tied to a coordinate system and still be wrong on a roof the photographs barely saw. RTK
        can improve the camera positions that go into the adjustment. It does not certify the map.
      </p>
      <p>
        This article separates those terms for construction, stockpile, existing-conditions, and
        forensic work. It does not publish a SterFlies accuracy specification. The practice is{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>. The map product those
        flights often become is described in{" "}
        <Link href="/blog/orthomosaic_blog">understanding orthomosaic mapping</Link>.
      </p>

      <h2>Accuracy is not one number</h2>
      <p>
        A mapped product can be wrong in more than one way. It can be internally consistent and
        shifted on the ground. It can sit on the correct grid and still smear an edge that the
        photographs did not cover well. It can match the horizontal grid and miss the vertical
        datum the drawings use. Reporting one number, without saying which of those errors it
        describes, does not tell a reviewer whether the file will support the decision in front of
        them.
      </p>
      <p>
        ASPRS positional-accuracy standards exist because of that problem. They treat accuracy as
        a tested property of a digital geospatial product, compared with independent checkpoints,
        and reported with a stated method. They do not treat “the drone was RTK” as a class. A
        delivery that needs an accuracy statement should say what was tested, in which directions,
        and against which points. A delivery that does not need that statement should not borrow
        one from a manufacturer brochure.
      </p>

      <h2>Relative accuracy and absolute accuracy</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp"
        alt="Photogrammetric point cloud of a documented construction site"
        caption="A reconstructed cloud can show relative shape clearly and still need control before its coordinates mean anything on a project grid."
      />
      <p>
        Relative accuracy is how well positions inside the model agree with one another. A distance
        measured between two visible features on the same reconstruction is a relative question.
        Absolute accuracy is how well those positions agree with an external frame: a published
        coordinate system, a surveyed control point, or a drawing the rest of the project already
        uses.
      </p>
      <p>
        The distinction decides the workflow. Comparing the shape of a pile with a later visit, or
        measuring a clearance between two objects in one model, is often a relative problem, and
        it still depends on overlap and surface quality. Placing that pile on a site plan, or
        comparing it with a design surface, is an absolute problem. It needs a shared coordinate
        reference and a way to check that the model landed in it. Calling both results “the
        accuracy” is how a useful relative model gets treated as a surveyed coordinate file.
      </p>

      <h2>What RTK does</h2>
      <p>
        RTK, real-time kinematic positioning, corrects a GNSS receiver while it is moving. On a
        mapping aircraft, that receiver is estimating where the camera was when each photograph was
        taken. A base station, or a network correction service, sends the information that lets the
        rover reduce several ordinary GNSS error sources in real time. When the correction link
        holds, the camera positions that enter the photogrammetric adjustment are better than an
        uncorrected consumer fix.
      </p>
      <p>
        Those camera positions help the software place the reconstruction. They are an input. They
        are not the map. Processing vendors describe RTK and related post-processed methods as a
        way to strengthen georeferencing, and some describe workflows in which ground targets can
        be reduced. That vendor language is about a processing option under favorable conditions.
        It is not a guarantee that a SterFlies map will meet a centimeter tolerance, and it is not
        a reason to skip a check the project actually requires.
      </p>

      <h2>What RTK does not guarantee</h2>
      <p>
        RTK does not repair a surface the camera never saw. It does not create texture on a blank
        wall, hold still a tree canopy, or see under a trailer. If the correction link drops, the
        positions for those photographs fall back toward a weaker fix, sometimes without the
        failure being obvious in a pretty orthomosaic. If the vertical datum of the correction
        does not match the vertical datum of the drawings, the model can be internally tight and
        still sit high or low relative to design.
      </p>
      <p>
        RTK also does not replace an independent check. A reconstruction that used the corrected
        camera positions, and any control included in the adjustment, will tend to agree with the
        information it was given. Agreement with that information is not a test. A test uses
        positions the adjustment did not use. Centimeter-level results are reported for some
        RTK and ground-controlled workflows in vendor documentation and in research. Those results
        depend on the equipment, the correction source, the geometry of the flight, the processing,
        the site conditions, and the verification. They are not a universal SterFlies specification,
        and they are not implied by the presence of an RTK receiver on the aircraft.
      </p>
      <ArticleCallout>
        A mapped product is not a legal land survey. RTK, control, and a careful flight do not
        change that. Boundary, easement, and other legal location work belongs to a licensed
        surveyor.
      </ArticleCallout>

      <h2>Ground control points</h2>
      <p>
        A ground control point is a location on the site whose coordinates are known independently
        of the drone, and which can be identified in the photographs. In processing, those points
        are included in the adjustment so the reconstruction is pulled toward that external frame.
        They are how a project ties a model to surveyed positions when the engagement calls for
        that tie.
      </p>
      <p>
        The points have to be visible, stable during the flight, and distributed across the area
        that matters, including elevation change when vertical placement matters. A cluster of
        targets in one corner does not control the far side of a site. Processing software will
        still produce a model. The far side will simply be less constrained than the corner that
        held the targets. How many points a job needs is a project decision. Vendor guides often
        suggest a range for general mapping. That suggestion is not a SterFlies rule, and it is
        not a substitute for the accuracy the drawings or the reviewer actually require.
      </p>

      <h2>Checkpoints are not control</h2>
      <p>
        A checkpoint is also a known position that can be seen in the photographs. The difference
        is how it is used. Control goes into the adjustment and helps place the model. A checkpoint
        is there to test the result. PIX4Dmatic’s tie-point documentation says checkpoints assess
        absolute accuracy and are not used to georeference the project. PIX4Dmapper treats them as
        a quality check and recommends measuring extra targets so some can be held back for that
        purpose. The mapper documentation also notes that marking a checkpoint can affect the local
        relative fit, so a reported error has to be read against how that software actually used
        the point. ASPRS accuracy testing rests on the stricter form of the same idea. A point that
        helped place the product is not an independent test of it.
      </p>
      <p>
        Using every surveyed target as control produces a fit to those targets and no independent
        number at all. Holding a subset out of the georeferencing adjustment gives the delivery a
        comparison the adjustment did not build. That comparison is still only a statement about
        those locations, under that capture. It does not describe a roof, a vegetated edge, or a
        shadowed face that was never tested.
      </p>

      <h2>Geometry, altitude, and the camera</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png"
        alt="Orthomosaic produced from overlapping mapping photographs"
        caption="Overlap and camera geometry decide whether the software can reconstruct a surface before control has anything to hold."
      />
      <p>
        Image geometry is the pattern of photographs: how much they overlap, from how many
        directions a surface was seen, and whether the flight actually covered the area later
        questions will be asked about. USGS processing notes on structure-from-motion work record
        the practical failure mode. Where overlap is not sufficient, the reconstruction has gaps.
        Extra control does not invent the missing photographs.
      </p>
      <p>
        Flight altitude and the camera together set the ground sample distance, the size of the
        ground represented by one pixel. A lower flight or a longer focal length can show smaller
        features. That is resolution. Resolution is not the same as positional accuracy. A fine
        pixel can still be in the wrong place. A coarser pixel can still be well placed for a
        question that does not need the finer detail. Lens, shutter, and the way the camera is
        mounted also affect whether features match cleanly from frame to frame. Those are planning
        choices for the engagement. They are not a standing accuracy claim.
      </p>

      <h2>Surface, processing, and the coordinate frame</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1753979367/stockpile-website_gctpwh.png"
        alt="Photogrammetric surface of a material stockpile"
        caption="A stockpile surface is measurable only where the material was visible. Vegetation, shadow, and a poorly defined base change the result."
      />
      <p>
        Surface conditions limit every method above. Vegetation hides grade. Water, glass, and
        polished metal confuse the matcher. A fresh, textureless pad may not offer features to
        tie. Moving equipment between frames becomes noise or a false surface. Those limits are
        discussed with the point cloud itself in{" "}
        <Link href="/blog/point-clouds-site-documentation">
          point clouds for site documentation
        </Link>
        .
      </p>
      <p>
        Processing quality is the set of choices made after the flight: which photographs are
        kept, how control is marked, whether checkpoints stay out of the adjustment, and how the
        dense surface is filtered. Aggressive smoothing can make a pile look clean and change its
        volume. Leaving noise in can make a flat pad look rough. The processing should match the
        question. Volume work has its own limits, covered in{" "}
        <Link href="/blog/volumetric_blog">volumetric data</Link>, and topographic presentation has
        its own, covered in <Link href="/blog/topography_blog">topographic maps</Link>.
      </p>
      <p>
        The coordinate reference system is the frame those choices land in. Horizontal and vertical
        datums are not interchangeable. A model in one projected system will not sit on a drawing
        in another until someone transforms it, and a casual export does not perform that
        transformation correctly just because both files open in the same software. The delivery
        should name the frame. If the project does not need an external frame, the delivery should
        say the model is relative.
      </p>

      <h2>When a licensed surveyor is required</h2>
      <p>
        A licensed surveyor is required when the product is a land survey: boundaries, property
        corners, easements, and other determinations the jurisdiction reserves to that license.
        A surveyor is also the right source for control coordinates when the project needs the map
        tied to a legal or design framework the surveyor is responsible for. SterFlies can plan a
        flight around control a surveyor provides, and can document visible surfaces. SterFlies
        does not practice land surveying and does not certify a map as one.
      </p>
      <p>
        Many documentation jobs never need that certification. A progress record, a relative
        comparison, or a visual spatial file for a reviewer can be the correct scope. The mistake
        is using those files later as if the certification had been part of the work. The scope
        should say which of those products is being ordered.
      </p>

      <h2>The requirement decides the workflow</h2>
      <p>
        Construction documentation often needs a shared picture of grading, pads, utilities, and
        access as work moves. The{" "}
        <Link href="/projects/65acresite">65-acre site mapping project</Link> was that kind of
        record: repeat aerial mapping delivered as an orthomosaic and a web map so the team could
        see conditions as the site changed. That scope did not claim a boundary survey. A later
        job that must match design coordinates would add the control and the checks that scope
        actually omitted, because the requirement would be different.
      </p>
      <p>
        Stockpile mapping is a volume and surface problem. The base, the visible material, and a
        consistent method between visits matter more than a slogan about sensor accuracy. Existing
        conditions work may need absolute placement when the model will be compared with drawings,
        and may only need a careful relative model when the question is what the site looked like.
        Forensic site mapping needs the same honesty about frame and gaps, because a later reader
        may treat the file as more certain than the capture was. In each case the workflow—RTK or
        not, how much control, how many checkpoints, what gets exported—follows the decision the
        file has to support. It does not follow a default centimeter.
      </p>

      <h2>Conclusion</h2>
      <p>
        RTK improves camera positions when the correction is valid. Ground control pulls a
        reconstruction toward known positions. Checkpoints test the result because they were not
        allowed to help build it. Overlap, altitude, the camera, the surface, the processing, and
        the coordinate frame decide whether any of that work produces a measurement the project can
        use. None of it, by itself, produces a legal land survey or a standing accuracy for every
        SterFlies map.
      </p>
      <p>
        If a project needs a stated accuracy, the scope should name the frame, the control, the
        checks, and the decision the map has to support.{" "}
        <Link href="/contact">Contact SterFlies</Link> with that requirement before the flight is
        planned. The method should be chosen for the question, and the delivery should say what
        was and was not tested.
      </p>
    </ArticleLayout>
  )
}
