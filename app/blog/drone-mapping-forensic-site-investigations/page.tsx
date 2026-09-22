import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("drone-mapping-forensic-site-investigations")

export default function Page() {
  return (
    <ArticleLayout
      slug="drone-mapping-forensic-site-investigations"
      wordCount={1670}
      references={[
        {
          href: "https://jespear.com/expert-witness-houston/",
          label:
            "Spear & Lancaster, “Expert Witness” — subject areas including construction safety, industrial hygiene, crane and rigging, and incident investigation",
        },
        {
          href: "https://jespear.com/process-safety-risk-management/",
          label: "Spear & Lancaster, “Process Safety”",
        },
        {
          href: "https://jespear.com/excavation-and-trenching-safety/",
          label: "Jeremy J. Lancaster, “Excavation and Trenching Safety”",
        },
      ]}
    >
      <p>
        An investigation often begins after the physical environment has already started changing.
        Ground photographs remain useful. They document particular viewpoints, surfaces, and
        details. A later reviewer still has to assemble those frames into a picture of the site.
      </p>
      <p>
        Aerial mapping can preserve a broader spatial view. Overlapping aerial imagery can be
        processed into a mapped record of layout and relationships, so qualified professionals can
        later examine how major site elements relate to one another. The record documents visible
        conditions. Cause remains a separate professional question.
      </p>
      <p>
        This article is about that aerial contribution. The broader method, which pairs aerial and
        ground-based reality capture, is{" "}
        <Link href="/blog/forensic-mapping-incident-investigations">
          forensic mapping for incident investigations
        </Link>
        .
      </p>

      <h2>What drone mapping adds to a site investigation</h2>
      <p>
        An aerial photograph and a mapped aerial dataset answer different questions.
      </p>
      <p>
        A single photograph records one camera position. It can be sharp and still leave a later
        reviewer unsure which way the camera faced, how far the subject sat from a structure, or
        how that view connects to the rest of the property.
      </p>
      <p>
        A mapping mission uses many overlapping images. Photogrammetric processing aligns those
        images and reconstructs a broader representation of visible site geometry and spatial
        relationships. The result can be reviewed as a layout, alongside the original frames. How
        an orthomosaic is produced is covered in{" "}
        <Link href="/blog/orthomosaic_blog">understanding orthomosaic mapping</Link>. The question
        here is where that kind of record helps an investigation.
      </p>
      <p>
        Attorneys, safety professionals, consultants, and investigators often review a site they
        did not see at the time of capture. A mapped view gives them a shared frame of reference
        before they examine individual images. That practice sits inside{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        : preserving conditions for later review.
      </p>

      <h2>Preserving the overall site layout</h2>
      <p>
        Orientation is the first thing a later reviewer has to recover. A large set of ground
        photographs can show equipment, surfaces, and work areas clearly while the site itself
        stays difficult to assemble. Each frame has its own direction and crop. A temporary feature
        may appear in one photograph and be absent from the next.
      </p>
      <p>An overhead mapped record can hold those features in one spatial view:</p>
      <ul>
        <li>buildings and other structures</li>
        <li>roadways and access routes</li>
        <li>work zones</li>
        <li>equipment locations</li>
        <li>surrounding property</li>
        <li>excavations</li>
        <li>terrain</li>
        <li>temporary site features such as barricades, laydown areas, and trailers</li>
      </ul>
      <p>
        Close photographs still carry the detail. The mapped view gives them a place. Experts
        asked to review a site after conditions have changed often need that orientation before a
        detail photograph becomes meaningful. That limitation of isolated photographs is discussed
        in{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          why expert witnesses need more than photographs to analyze a site
        </Link>
        .
      </p>

      <h2>Documenting conditions before the site changes</h2>
      <p>
        Sites under investigation are working places. Exterior conditions can change for ordinary
        operational reasons:
      </p>
      <ul>
        <li>equipment is moved</li>
        <li>debris is removed</li>
        <li>an excavation is backfilled</li>
        <li>barricades are taken down</li>
        <li>repairs start</li>
        <li>temporary structures are removed</li>
        <li>weather changes surface conditions</li>
      </ul>
      <p>
        A mapped aerial record is a dated view of the exterior as it existed at capture.
        Documentation made after those changes records what remains. The timing question is
        developed in{" "}
        <Link href="/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog">
          why site conditions should be documented before they are altered
        </Link>
        .
      </p>
      <p>
        Capturing the exterior while it is still available is a way to keep layout on record if
        someone needs to review it later.
      </p>

      <h2>Construction and industrial incident environments</h2>
      <p>
        Investigations involving construction sites, excavations, cranes, industrial facilities, or
        other large physical environments can require documentation of relationships that are
        difficult to understand from isolated ground photographs alone. The examples below are
        documentation uses.
      </p>

      <h3>Excavations and trenches</h3>
      <p>
        An open excavation is a spatial object. Length, visible depth, slope, nearby surfaces, and
        the position of equipment are difficult to hold together in photographs taken from the
        edge.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790115766/trench_3d_model_xqdpek.png"
        alt="3D model of an open excavation showing annotated distances, spoil, and nearby equipment"
        caption="A reconstructed excavation can hold visible geometry, spoil, and nearby equipment in one spatial view."
      />
      <p>Aerial capture may provide:</p>
      <ul>
        <li>overall excavation geometry, as visible from above</li>
        <li>surrounding surface conditions</li>
        <li>nearby equipment</li>
        <li>access points</li>
        <li>spoil or other material locations</li>
        <li>the relationship between the excavation and the surrounding site</li>
      </ul>
      <p>
        Excavation safety practice treats access, spoil placement, and equipment near the opening
        as conditions that affect the work area. An overhead record can preserve the visible
        arrangement of those features. Soil classification, protective-system evaluation, and the
        reason for a collapse remain with a qualified investigator.
      </p>

      <h3>Crane and rigging incidents</h3>
      <p>
        After a crane or rigging incident, later reviewers often need to understand where the crane
        sat, what occupied the work zone, and which structures, access limits, or other equipment
        surrounded the lift. Photographs of the crane can miss that wider arrangement.
      </p>
      <p>Aerial capture may help preserve:</p>
      <ul>
        <li>crane location</li>
        <li>work-zone layout</li>
        <li>nearby structures</li>
        <li>access constraints</li>
        <li>surrounding equipment</li>
        <li>overhead and site context that was visibly documented</li>
      </ul>
      <p>
        Load dynamics, sling capacity, and the reason a lift failed are expert questions. A mapped
        site record does not answer them.
      </p>

      <h3>Construction sites</h3>
      <p>
        An active construction site is a changing arrangement of work areas, materials, temporary
        conditions, and access. A mapped aerial record may document:
      </p>
      <ul>
        <li>work areas</li>
        <li>relationships between buildings and the site</li>
        <li>the visible progress state at the time of capture</li>
        <li>temporary conditions</li>
        <li>material locations</li>
        <li>surrounding access</li>
      </ul>
      <p>
        The record shows what was visible at capture. Specification compliance and responsibility
        for a condition remain professional questions.
      </p>

      <h3>Industrial facilities</h3>
      <p>
        Exterior aerial capture can provide broader site context around equipment areas, structures,
        process areas, access, and exterior conditions. On many industrial sites that overhead view
        is an orientation layer. The conditions that matter for a particular question may sit
        inside a building, under a structure, or inside equipment.
      </p>
      <p>
        Professional review of these environments can involve construction safety, industrial
        hygiene, crane and rigging analysis, process safety, and incident investigation. Those
        disciplines appear in Spear &amp; Lancaster’s public descriptions of its professional work.
        SterFlies does not perform them. Aerial mapping supplies a spatial record that qualified
        professionals can review.
      </p>

      <h2>What can be created from a drone mapping mission</h2>
      <p>
        Outputs depend on the documentation objective, the capture, and processing. A project may
        include some of the following.
      </p>

      <h3>Orthomosaic</h3>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png"
        alt="Orthomosaic showing a site in a continuous top-down spatial view"
        caption="An orthomosaic is a top-down spatial image used for orientation, context, and annotation."
      />
      <p>
        An orthomosaic is a stitched, top-down spatial image of the site. Camera perspective is
        reduced so the site can be read more like a map than like a single oblique photograph.
        Reviewers use it for orientation, context, reference, and annotation: a work zone, an
        access route, or the position of equipment relative to a structure.
      </p>

      <h3>3D model</h3>
      <p>
        A 3D model is a reconstructed representation of visible site geometry. It can be navigated
        to see how surfaces and structures sit relative to one another. Typical uses are
        navigation, orientation, and visual review. The model represents surfaces the imagery could
        reconstruct.
      </p>

      <h3>Point cloud</h3>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp"
        alt="Point cloud of a construction site used as a spatial record"
        caption="A point cloud is a dense spatial representation of visible surfaces, used for geometry review and downstream technical workflows when those workflows are in scope."
      />
      <p>
        A point cloud is a dense spatial representation derived from the capture and processing. It
        can support geometry review, visualization, and downstream technical workflows when those
        workflows are in scope. It represents visible surfaces that were imaged.
      </p>

      <h3>High-resolution aerial imagery</h3>
      <p>
        Individual oblique and contextual photographs still matter alongside the mapped products. A
        frame can show a facade, a label, or a surface condition more directly than a top-down map.
        The mapped record and the stills work as a set: one for layout, the others for a particular
        viewpoint.
      </p>

      <h3>Measurements</h3>
      <p>
        Measurements may be available from a processed aerial dataset. Whether they are appropriate
        depends on capture geometry, processing, project control, site conditions, and the accuracy
        the project needs. A licensed survey remains a separate professional service when one is
        required.
      </p>

      <h2>Why aerial mapping should not stand alone</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg"
        alt="Interior and exterior reality capture of a building, including spaces an overhead camera cannot see"
        caption="Ground-based capture preserves interiors and close-range conditions that an overhead record does not show."
      />
      <p>
        An overhead record documents surfaces the camera could see. It may not adequately capture:
      </p>
      <ul>
        <li>interiors</li>
        <li>obscured surfaces</li>
        <li>areas beneath structures</li>
        <li>enclosed equipment spaces</li>
        <li>details blocked by vegetation</li>
        <li>conditions that require close inspection</li>
        <li>information that requires physical testing</li>
      </ul>
      <p>
        Aerial mapping is therefore often combined with terrestrial photography, Matterport or
        similar walkthrough capture, 360 capture, close-range imagery, thermal imaging,
        measurements, and professional inspection or testing. The method follows the question.
        Interior existing-conditions work is a ground-based record, as in the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>
      <p>
        Choosing and organizing those methods is{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        . Aerial mapping is one method inside that practice.
      </p>

      <h2>Drone mapping does not determine causation</h2>
      <p>Aerial mapping documents conditions. It does not independently establish:</p>
      <ul>
        <li>cause</li>
        <li>fault</li>
        <li>negligence</li>
        <li>code compliance</li>
        <li>liability</li>
        <li>legal admissibility</li>
        <li>expert conclusions</li>
      </ul>
      <ArticleCallout>
        A mapped aerial record preserves visible exterior conditions for later review. Qualified
        professionals interpret those conditions.
      </ArticleCallout>
      <p>
        A spatial file may later be used in a professional or legal workflow. Organizing files,
        dates, and originals is a documentation practice, discussed in{" "}
        <Link href="/blog/chain-of-custody-digital-site-documentation-litigation">
          chain of custody for digital site documentation
        </Link>
        . Organization of the record is separate from any legal conclusion.
      </p>

      <h2>How aerial mapping fits into an investigation workflow</h2>
      <p>
        The steps below are a documentation workflow for aerial capture. They are a way to plan and
        deliver a site record.
      </p>
      <ol>
        <li>
          Define the documentation objective. Decide which relationships still need to be
          understandable after the site changes.
        </li>
        <li>
          Review access and site constraints, including airspace, obstructions, and areas that
          cannot be flown.
        </li>
        <li>Plan aerial coverage so the overlap and extent match that objective.</li>
        <li>Capture overlapping imagery while the relevant exterior conditions are still present.</li>
        <li>Process the mapping dataset into the outputs the scope requires.</li>
        <li>
          Organize spatial deliverables with the stills, dates, and supporting files a later
          reviewer will need.
        </li>
        <li>Provide the record for professional review.</li>
      </ol>
      <p>
        Qualified professionals interpret the record. SterFlies captures and organizes it.
      </p>

      <h2>When drone mapping is especially useful</h2>
      <p>
        Aerial mapping fits when an investigation needs exterior context that ground photographs do
        not assemble well. That often includes:
      </p>
      <ul>
        <li>large sites</li>
        <li>construction incidents</li>
        <li>excavations</li>
        <li>industrial facilities</li>
        <li>exterior property loss</li>
        <li>sites with complicated spatial relationships</li>
        <li>areas where broad overhead context matters</li>
        <li>sites expected to change soon</li>
      </ul>
      <p>
        A question that lives in a room, a shaft, or enclosed equipment may need little aerial
        coverage. The useful method is the one that preserves the conditions the investigation
        actually has to review.
      </p>

      <h2>Aerial and ground-based documentation work better together</h2>
      <p>
        Aerial mapping provides broad site context. Ground-based capture provides close and
        interior context. Together they give a later reviewer both the layout and the spaces an
        overhead camera cannot enter.
      </p>
      <p>
        The documentation method should be selected around the investigation’s actual needs. That
        combined approach is the subject of{" "}
        <Link href="/blog/forensic-mapping-incident-investigations">
          forensic mapping for incident investigations
        </Link>
        . To scope an exterior record before conditions change,{" "}
        <Link href="/contact">discuss a project</Link>.
      </p>
    </ArticleLayout>
  )
}
