import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("exterior-photogrammetry-interior-reality-capture")

const references = [
  {
    href: "https://pubs.usgs.gov/of/2021/1039/ofr20211039.pdf",
    label:
      "U.S. Geological Survey, Processing Coastal Imagery With Agisoft Metashape, Open-File Report 2021–1039. Aerial structure-from-motion reconstructs surfaces that overlapping photographs can see. Surfaces that are occluded or insufficiently overlapped are not reconstructed.",
  },
  {
    href: "https://support.pix4d.com/hc/en-us/articles/206455126",
    label:
      "Pix4D, “What is a densified point cloud? An orthomosaic?” Defines the exterior products—three-dimensional points and a scaled plan-view map—that photogrammetry can produce from overlapping photographs.",
  },
  {
    href: "https://support.matterport.com/s/article/Capture-a-360-View",
    label:
      "Matterport, “Capture a 360° View.” Distinguishes a 3D scan, which includes depth, from a 360° view that collects visual data only, and describes navigation between placed views inside a Matterport space. This is platform behavior. It is not a measurement specification, and vendor language about dimensional accuracy is not a SterFlies claim.",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="exterior-photogrammetry-interior-reality-capture"
      references={references}
      wordCount={1509}
    >
      <h2>Introduction</h2>
      <p>
        A site is rarely one surface. The roof, the yard, and the approach are visible from the
        air. The rooms, the corridors, and the equipment that sit inside are not. Professional
        documentation fails when one of those records is asked to stand in for the other. An
        orthomosaic cannot show a mechanical room. An interior walkthrough cannot show how the
        building sat on the lot.
      </p>
      <p>
        Combining exterior photogrammetry with interior reality capture is a way to keep both. The
        two datasets answer different questions, and they are useful together because a later
        reviewer usually has both questions. This article explains what each method preserves, how
        they complement each other, and what they still do not do. The documentation practice is{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        . What that practice is for, and what it refuses to conclude, is set out in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        .
      </p>

      <h2>The exterior and interior gap</h2>
      <p>
        Photographs of a facade and a separate folder of room pictures can both be careful and
        still leave the relationship between them to memory. Which room sat behind which window,
        which corridor reached the equipment, and how the entry related to the yard are the facts
        that slip. Months later, a reviewer is left matching filenames to a floor plan that may
        itself be out of date.
      </p>
      <p>
        The gap is spatial, not a shortage of megapixels. Exterior capture and interior capture
        have to be planned as parts of one documentation objective, or they remain two unrelated
        sets of pictures. Planning them together does not fuse them into a single surveyed model.
        It does put the exterior context and the interior continuity into the same delivery, with
        the limits of each method stated.
      </p>

      <h2>What aerial photogrammetry captures well</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016149/flighttomesh_ae4avk.png"
        alt="Exterior 3D reconstruction built from overlapping site photographs"
        caption="Exterior photogrammetry reconstructs roofs, walls, and site surfaces that overlapping photographs could see."
      />
      <p>
        Overlapping aerial photographs reconstruct the surfaces the aircraft could see: roofs,
        open yards, paving, stockpiles, excavation, and the outside of buildings. From that
        reconstruction a project can receive an exterior 3D model, an orthomosaic, and, when the
        scope asks for it, a point cloud. Those products are the right record for site
        relationships. How a building sat relative to access, where a work area was in the yard,
        and what the visible envelope looked like at the time of capture.
      </p>
      <p>
        The same method supports measurement on those visible surfaces when the capture and any
        control were planned for measurement. A{" "}
        <Link href="/blog/point-clouds-site-documentation">point cloud</Link> from that flight is a
        sample of those surfaces, not a complete solid of the building. The orthomosaic is the
        plan-view map. The mesh is the viewable exterior model. Each one stops at the line of
        sight.
      </p>

      <h2>What aerial capture cannot see</h2>
      <p>
        The aircraft does not see rooms. It does not see the underside of a deck, the face of a
        wall hidden by a trailer, or the equipment behind a roof screen. Vegetation, overhangs,
        and adjacent structures remove surfaces the same way. Flight limits and occupied areas
        remove others. Those are not defects in the orthomosaic. They are the boundary of an
        overhead method, and USGS descriptions of structure-from-motion processing state the same
        boundary in technical terms: a surface that was not adequately photographed is not
        reconstructed.
      </p>
      <p>
        Trying to answer an interior question with an exterior model produces a confident gap. The
        roof geometry may be excellent and the mechanical room entirely absent. The honest delivery
        says so, and uses a ground-based method where the interior matters.
      </p>

      <h2>What interior reality capture preserves</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg"
        alt="Ground-based interior capture of a documented room"
        caption="Interior capture records room continuity, finishes, and equipment that an overhead flight cannot see."
      />
      <p>
        Interior reality capture walks the space. It preserves the sequence of rooms, the
        continuity of a corridor, the position of equipment, and the visible condition of finishes
        and contents at the time of the visit. A reviewer can return to a doorway or a piece of
        equipment without reconstructing the path from loose photographs. That continuity is the
        point of the method.
      </p>
      <p>
        Matterport is one platform that can hold that walkthrough. On the{" "}
        <Link href="/projects/iaq-mold-documentation">
          IAQ and mold existing-conditions documentation
        </Link>{" "}
        demonstration, SterFlies used it for the interior record. The platform can present a
        navigable scan of the space that was walked. It is a method, not the service. Another
        ground-based system can be the right tool when the scope, the access, or the deliverable
        is different. The service is the documentation decision: what had to be preserved, and
        which capture could preserve it.
      </p>
      <p>
        Room relationships and access are part of what the walkthrough keeps. Which rooms connect,
        where a sampling location sat relative to a return or a wall, and how a person moved from
        the entry to the area in question are visible in the path. They are context for a later
        professional. They are not, by themselves, a finding about air quality, moisture, or
        cause.
      </p>

      <h2>How the datasets complement each other</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png"
        alt="Annotated interior view from an existing-conditions walkthrough"
        caption="Annotation can mark a location inside the walkthrough. The note records where something was observed. It does not establish why it was there."
      />
      <p>
        Used together, the exterior model and the interior walkthrough cover the gap between the
        lot and the room. The exterior record shows site relationships: envelope, roof, yard, and
        approach. The interior record shows the rooms those elevations belong to, the path through
        them, and the equipment and finishes a reviewer needs to see in place. Annotated imagery
        can mark a location in either record so a later reader can find it without guessing which
        photograph was which.
      </p>
      <p>
        The{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ demonstration project</Link> is the
        clearest SterFlies example. It paired a ground-based interior walkthrough with an exterior
        photogrammetric model of the same building, so room layout and envelope conditions could
        be reviewed together. Sampling labels in that model are fictional and were placed to show
        how locations can be marked. The project does not report moisture readings, exposure, or a
        cause. It shows the documentation structure: interior continuity plus exterior context.
      </p>
      <ArticleCallout>
        The two records complement each other. They do not automatically share one engineering
        coordinate frame. A measurement that crosses from the walkthrough into the aerial model
        has to be justified by how those datasets were actually tied, not by the fact that both
        files exist.
      </ArticleCallout>

      <h2>Where the combination is used</h2>
      <p>
        Incident investigations often need both scales. The exterior capture can preserve the site
        arrangement, access, and visible damage on roofs or yards while those conditions still
        exist. The interior capture can preserve the rooms and equipment involved. How that
        exterior mapping fits an investigation is discussed in{" "}
        <Link href="/blog/forensic-mapping-incident-investigations">
          forensic mapping for incident investigations
        </Link>
        . The combined record supports later review. It does not determine how the incident
        happened.
      </p>
      <p>
        IAQ and mold assessments are a direct case, because the question is often how an interior
        location relates to the envelope, the drainage, or an adjacent space. Construction-defect
        and property-loss reviews have the same structure. An interior symptom and an exterior
        condition need to be seen in relation, and the site may be repaired before the reviewer
        returns. Industrial facilities add equipment, aisles, and process areas that an overhead
        flight will never enter. Existing-conditions documentation before a renovation or a
        transaction is the same pairing without an incident: what the outside looked like, and how
        the inside was arranged, on a stated date.
      </p>
      <p>
        In each of these, the deliverable follows the question. An exterior 3D model, an
        orthomosaic, a point cloud, an interior walkthrough, annotated imagery, and measurements
        on surfaces the capture can support are all possible. None of them is automatic. A project
        that only needs the exterior should not be sold an interior scan, and a project that turns
        on room relationships should not stop at the roof.
      </p>

      <h2>Limitations</h2>
      <p>
        The datasets may not share one coordinate framework. Aerial photogrammetry can be tied to
        surveyed control when the scope includes that work. An interior walkthrough is often a
        local model of the walked space. Placing both files in one viewer does not mean a distance
        from a room corner to a yard feature has been surveyed. If a shared frame is required, it
        has to be part of the scope, and the delivery has to say whether it was achieved.
      </p>
      <p>
        Occlusion remains. The flight misses interiors and hidden exterior faces. The walkthrough
        misses spaces that were locked, unsafe, or outside the agreed path, and it misses the site
        beyond the doors. Transitions at thresholds, courtyards, and overhangs are where the two
        methods meet and where alignment is easiest to overstate. Measurements stay inside the
        limits of each method: visible surfaces, sufficient coverage, and any control that was
        actually used. Professional interpretation of cause, defect, contamination, or loss stays
        with the qualified reviewer. The capture preserves context for that review.
      </p>

      <h2>Conclusion</h2>
      <p>
        Exterior photogrammetry records the site and the envelope that an aircraft can see.
        Interior reality capture records the rooms, the path, and the equipment that it cannot.
        Together they close a documentation gap that either method leaves open. They remain two
        datasets, with two sets of limits, unless a project specifically ties them.
      </p>
      <p>
        Matterport, or any other walkthrough platform, is the tool for the interior half when it
        fits the scope. It is not the service, and it is not a finding. If a site needs both the
        exterior and the interior preserved before conditions change,{" "}
        <Link href="/contact">contact SterFlies</Link> with the question the record has to answer.
        The capture plan should follow that question, and the delivery should say what each method
        did and did not see.
      </p>
    </ArticleLayout>
  )
}
