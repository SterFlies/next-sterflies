import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "digital-evidence-3d-reality-capture-legal-disputes"
)

export default function Page() {
  return (
    <ArticleLayout slug="digital-evidence-3d-reality-capture-legal-disputes">
      <h2>Introduction</h2>
      <p>
        Legal disputes that involve physical sites often start after the site has already changed.
        Materials have been removed, temporary conditions dismantled, and later reviewers are asked
        to reconstruct an environment they can no longer visit.
      </p>
      <p>
        Spatial site documentation can preserve layout, scale, and visual context from a specific
        capture window. That is not the same thing as legal evidence. A 3D model, point cloud, or
        photogrammetric map is a record of capture. Whether it later becomes part of a professional
        or legal workflow depends on collection method, documentation, authentication, retention,
        context, professional interpretation, and applicable rules. This article is educational. It
        is not legal advice.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228706/HEA_BLO_GEO_Dronelink_wyr6ro.jpg"
          alt="Mapped site record used to preserve exterior spatial context"
          caption="A mapped exterior record can preserve site layout at a dated moment."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077084/matterportthumb_rosrlb.png"
          alt="Interior spatial capture used for later orientation"
          caption="Interior capture can preserve room relationships for later remote review."
        />
      </ArticleFigureRow>

      <h2>What traditional records often leave open</h2>
      <p>
        Photographs, written reports, sketches, and statements remain useful. They were not designed
        to preserve an entire environment. A photograph records one viewpoint. A note records one
        observation. A sketch records an interpretation. Even when everyone is acting in good faith,
        those fragments leave room for disagreement about scale, orientation, and adjacency.
      </p>
      <p>
        Months later, site access may be restricted and conditions may have changed. Isolated
        photographs then have to carry more weight than they can support. That is the same limit
        described in{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          why expert witnesses need more than photographs
        </Link>
        .
      </p>
      <p>
        The open questions are usually spatial. How wide was the opening. Which room did the
        photograph belong to. Was the stained material on an exterior wall or on an interior chase.
        Sketches and notes can assert answers. They cannot show the surrounding surfaces to someone
        who never visited. Months later, with access limited and finishes replaced, the assertion
        and the remaining photographs are all that is left unless a broader capture was made while
        the conditions were still there.
      </p>

      <h2>What a spatial record can preserve</h2>
      <p>
        Depending on scope, coordinated capture can produce orthomosaics, point clouds, 3D meshes,
        interior walkthroughs, and thermal imagery paired with RGB location context. Those outputs
        can help later reviewers see where a condition sat and how it related to surrounding
        features.
      </p>
      <p>
        They do not automatically authenticate themselves. Metadata does not guarantee authenticity.
        Photogrammetry is not automatically admissible. A point cloud is not inherently legally
        defensible. Measurement usefulness depends on the capture plan, control, and processing.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771444416/pngtree-architect-reviewing-a-3d-building-model-on-tablet-with-blueprints-and-image_20267766_mv9ohu.webp"
        alt="Reviewer examining a spatial site record on a tablet"
        caption="A navigable record can reduce argument about what the site looked like. It does not decide a legal outcome."
      />
      <p>
        The products are different views of the same capture problem. An orthomosaic is a plan-view
        photo map built from overlapping images, useful for seeing roofs, grades, and site layout at
        a dated moment. A point cloud is a collection of measured points that describes surfaces in
        three dimensions. Photogrammetry is the method that derives those shapes from overlapping
        photographs; other captures may come from scanners or from interior cameras. Each one shows
        layout and appearance within the limits of the capture plan, the overlap or scan coverage,
        and the processing. A reviewer can use them to see where a condition sat. The reviewer still
        has to judge what that location means.
      </p>

      <h2>Layered documentation is still documentation</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770061622/moisture-in-block-wall-1_orig_g8g5e8.jpg"
          alt="Apparent temperature differences documented on an interior wall"
          caption="Thermal imagery records apparent surface-temperature differences, not a diagnosis."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104187/FLIR0101_vq7irp.jpg"
          alt="Radiometric thermal capture used as location context"
          caption="Radiometric files can preserve temperature values per pixel for later qualified review."
        />
      </ArticleFigureRow>
      <p>
        Exterior mapping, interior capture, and thermal imagery can be useful together because they
        answer different later questions. Capture is still not the same as producing evidence. A
        later record is easier to explain when dates, location context, file organization, and
        processing notes are documented. That file-traceability work is not a legal chain of
        custody. See{" "}
        <Link href="/blog/chain-of-custody-digital-site-documentation-litigation">
          chain of custody for digital site documentation
        </Link>
        .
      </p>
      <ArticleCallout>
        Digital site documentation may later become part of a professional or legal workflow. It
        does not, by itself, establish authenticity, admissibility, fault, or outcome.
      </ArticleCallout>
      <p>
        The broader method is described in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        . SterFlies captures and organizes site conditions. Qualified professionals interpret them.
      </p>
      <p>
        Layering means the exterior map, the interior walkthrough, and the thermal frame can be read
        against one another. The map places the building. The walkthrough places the room. The
        thermal frame, paired with a visible photograph, places an apparent temperature pattern on a
        surface. A later reader can move from the site, to the room, to the surface without
        reconstructing that path from separate folders. The pattern remains an apparent temperature
        difference. Qualified reviewers decide whether it bears on their question.
      </p>
      <p>
        File notes sit beside that spatial reading. A useful note states the capture date, the
        location, which files are originals, and, when processing was used, the general steps that
        produced an export. That is file traceability. It is not a legal chain of custody, and it is
        not a statement that the record has a particular status in a dispute. Counsel and the
        professionals in the matter decide how, if at all, the record is used.
      </p>

      <h2>Conclusion</h2>
      <p>
        Disputes about physical sites often ask people to describe a place they can no longer walk.
        Photographs, notes, sketches, and statements remain part of that work. They leave scale,
        orientation, and adjacency open when they are the only record.
      </p>
      <p>
        A spatial capture can close part of that opening by preserving layout and visual context
        from a stated window of time. Orthomosaics, point clouds, interior walkthroughs, and thermal
        frames paired with visible photographs are different ways of doing that. They are records of
        what was captured. They do not authenticate themselves, and they do not carry a legal status
        on their own.
      </p>
      <p>
        SterFlies organizes those records so later readers can see the site as it was documented.
        Qualified professionals interpret the conditions. This article describes that division of
        work. It is not legal advice.
      </p>
    </ArticleLayout>
  )
}
