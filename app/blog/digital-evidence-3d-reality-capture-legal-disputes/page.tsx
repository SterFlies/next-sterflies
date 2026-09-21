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
    </ArticleLayout>
  )
}
