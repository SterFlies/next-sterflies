import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("forensic-mapping-incident-investigations")

export default function Page() {
  return (
    <ArticleLayout slug="forensic-mapping-incident-investigations" wordCount={1680}>
      <p>
        Incident investigations often begin after the physical scene has already started to change.
        Equipment is moved. Cleanup starts. Temporary controls appear or disappear. Later reviewers
        are then asked to understand layout, access, and surrounding conditions from photographs,
        notes, and recollection.
      </p>
      <p>
        Forensic mapping is a documentation method for that problem. Aerial and ground-based reality
        capture can preserve spatial context while it still exists. SterFlies captures and organizes
        those conditions. Qualified professionals interpret them.
      </p>

      <h2>What forensic mapping actually means</h2>
      <p>
        In practical terms, forensic mapping is coordinated spatial documentation of a site at a
        dated moment. The useful result is a reviewable record of layout, scale, and relationships:
        where features sat, how they related, and what surrounded them.
      </p>
      <p>
        It is not a legal certification, a survey stamp, or an investigation method. The word
        “forensic” here describes the documentation objective—preserving conditions for later
        review—not a finding about cause or responsibility. That distinction is developed in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        .
      </p>

      <h2>Why incident scenes are difficult to reconstruct later</h2>
      <p>
        Incident scenes are working environments. After an event, the same actions that restore
        safety also change the record later reviewers will need. Equipment is relocated. Cleanup
        removes debris and staining. Weather alters surfaces. Repairs begin. Temporary barriers and
        access routes change. Site access may be restricted.
      </p>
      <p>
        Recollections can also change as time passes and discussions continue. That is a reason to
        preserve the site itself, not a finding about any particular witness.
      </p>
      <ArticleCallout>
        Documentation captured after alteration records what remains. It does not recreate the
        environment in which the incident occurred.
      </ArticleCallout>
      <p>
        That timing problem is the subject of{" "}
        <Link href="/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog">
          why site conditions should be documented before they are altered
        </Link>
        .
      </p>

      <h2>What aerial capture can preserve</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png"
        alt="Orthomosaic map showing overall site geometry and surrounding context"
        caption="An orthomosaic can preserve overall site geometry, access routes, and surrounding conditions."
      />
      <p>
        Aerial photogrammetry can document a site from above when the capture is planned for
        coverage and overlap. Depending on scope, that can preserve overall site geometry; top-down
        context that ground photographs rarely show; access routes and staging areas; surrounding
        conditions beyond the immediate scene; excavation or trench geometry; relationships between
        equipment and structures; and hard-to-reach exterior areas such as roofs or large yards.
      </p>
      <p>
        The output is a dated spatial record, not a conclusion about how an event occurred. How
        useful later measurements are depends on the capture plan, as described below.
      </p>

      <h2>What ground-based reality capture can preserve</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg"
        alt="Interior reality capture showing room relationships and floor-level context"
        caption="Interior capture can preserve room relationships, corridors, and floor-level work areas."
      />
      <p>
        Ground-based reality capture documents interiors and close-range conditions that aerial
        methods cannot see. Depending on method, that can include room relationships, floor-level
        context, equipment spaces, corridors, work areas, and close-range surfaces.
      </p>
      <p>
        Matterport and similar walkthrough systems are one interior capture method. They are useful
        when the objective is a navigable interior record. They are not the product, and they do not
        replace other methods when exterior geometry or measurement is the objective.
      </p>

      <h2>Why combining aerial and ground-based capture matters</h2>
      <p>
        Each method leaves gaps the other can fill. Aerial capture can show how a building sits on a
        yard, where access roads enter, and how an excavation relates to nearby structures. It cannot
        show a corridor, a mechanical room, or the floor around a machine. Interior capture can
        preserve those spaces and still leave the reviewer without site-wide orientation.
      </p>
      <p>
        A trench or excavation incident is a common example. Aerial coverage can preserve the open
        geometry and surrounding grade. Ground-based capture can preserve shoring, adjacent work
        areas, and interior spaces that later reviewers may need to place relative to the excavation.
        The combination is documentation, not an accident reconstruction.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp"
        alt="Point cloud showing spatial relationships across a documented site"
        caption="A point cloud or 3D model can keep exterior and interior features in a shared spatial frame when the capture is scoped for that output."
      />

      <h2>Common deliverables</h2>
      <p>
        Deliverables depend on the documentation objective and site constraints. A project may
        include some of the following, not all of them:
      </p>
      <ul>
        <li>Orthomosaic maps for scaled top-down context</li>
        <li>3D models for navigable geometry</li>
        <li>Point clouds for later spatial review</li>
        <li>High-resolution stills for surface detail</li>
        <li>Interior walkthroughs for room-to-room orientation</li>
        <li>Annotated imagery for location context</li>
        <li>Measurements, when the capture is scoped for that use</li>
        <li>Supporting files such as dates, processing notes, and organized originals</li>
      </ul>
      <p>
        Service options are described under{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        .
      </p>

      <h2>Measurement and accuracy</h2>
      <p>
        A spatial record can support later measurement when the capture geometry, sensor, processing,
        control, and site conditions allow it. Those factors vary by project. This work does not
        promise survey-grade accuracy, and it is not a substitute for a licensed survey when a legal
        survey is required.
      </p>

      <h2>Thermal documentation where relevant</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104187/FLIR0101_vq7irp.jpg"
        alt="Radiometric thermal image used as supporting location context"
        caption="Thermal imagery records apparent temperature differences. It does not diagnose a condition."
      />
      <p>
        In some industrial or property-loss workflows, thermal imagery can be a supporting layer
        alongside RGB photographs and a spatial location. It records apparent temperature
        differences. It does not diagnose electrical faults, moisture, or equipment failure.
      </p>

      <h2>What forensic mapping does not do</h2>
      <p>Forensic mapping does not independently determine:</p>
      <ul>
        <li>causation</li>
        <li>liability</li>
        <li>negligence</li>
        <li>code compliance</li>
        <li>legal admissibility</li>
        <li>expert conclusions</li>
      </ul>
      <p>
        Those questions belong to qualified professionals reviewing the record. Spatial
        documentation may later become part of a professional or legal workflow; it is not
        automatically evidence. See{" "}
        <Link href="/blog/digital-evidence-3d-reality-capture-legal-disputes">
          digital site documentation in legal disputes
        </Link>{" "}
        and{" "}
        <Link href="/blog/chain-of-custody-digital-site-documentation-litigation">
          chain of custody for digital site documentation
        </Link>
        .
      </p>

      <h2>A practical workflow</h2>
      <ol>
        <li>Define the documentation objective.</li>
        <li>Review site and access constraints.</li>
        <li>Select capture methods that match that objective.</li>
        <li>Capture the site while original context still exists when possible.</li>
        <li>Process the spatial outputs required by the scope.</li>
        <li>Organize records so later reviewers can see what was captured and when.</li>
        <li>Deliver the record for qualified review.</li>
      </ol>

      <h2>When documentation should happen</h2>
      <p>
        The useful moment is while site context still exists—before cleanup, repairs, or restricted
        access remove what later reviewers will need. Early capture is not a prediction that a claim
        or investigation will follow. It is a way to keep layout and surroundings available if they
        are needed later.
      </p>

      <h2>Related professional workflows</h2>
      <p>
        The same documentation approach can support later review in incident investigation,
        construction safety, industrial hygiene, property loss, construction-defect questions, and
        expert review. SterFlies does not perform those conclusions.{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          Expert witnesses still need more than photographs
        </Link>
        . Interior existing-conditions work is shown in the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>
      <ArticleCallout>
        SterFlies captures and organizes site conditions. Qualified professionals interpret them.
      </ArticleCallout>
    </ArticleLayout>
  )
}
