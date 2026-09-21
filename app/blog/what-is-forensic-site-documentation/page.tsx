import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("what-is-forensic-site-documentation")

export default function Page() {
  return (
    <ArticleLayout slug="what-is-forensic-site-documentation">
      <p>
        Site documentation is often treated as an afterthought. Someone walks the site, takes a few
        photographs, maybe records a short video, and assumes that record will be enough if questions
        arise later.
      </p>
      <p>
        That kind of record is usually incomplete. Forensic site documentation is a different
        approach. It is not about capturing what looked interesting in the moment. It is about
        preserving a site as it existed in space and time, so later reviewers can still see layout,
        scale, and relationships after the physical conditions have changed.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228126/m7rTOtj--q0oymRcXD5FypQgvK-fgS4x_lH3uI1oX8ah1onEae7wpuT3w2v66lzKYME4larYw4FnPm1blkXcLSnii9rwZ06E8bJ6Qo8ZE4w_is1wlm.jpg"
          alt="Close-up jobsite photograph showing a condition without surrounding context"
          caption="A close-up can show a detail without showing where that detail sits in the broader site."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228126/COLOURBOX50168201_y6knrd.webp"
          alt="Folder of mixed jobsite photographs taken from the ground"
          caption="When photographs are captured inconsistently, orientation, scale, and relationships become hard to verify later."
        />
      </ArticleFigureRow>

      <h2>The problem with casual photographs</h2>
      <p>
        Casual photographs are easy to capture, but they often lack spatial context. A close-up of a
        crack, stain, or surface condition says little about where it exists within the site. Without
        reference points, scale, or orientation, later reviewers who were not present have to infer
        what they are seeing.
      </p>
      <p>
        Photographs are also selective. They record what someone thought was important at the time.
        Conditions that were unnoticed, misunderstood, or judged insignificant simply go undocumented.
        Even when many photographs exist, they rarely share a consistent structure that ties them
        together.
      </p>
      <p>
        Once a site changes, those fragments become harder to verify. There is often no reliable way
        to confirm where a photograph was taken, how it relates to other areas, or what nearby
        conditions looked like. Photographs capture moments. They do not, by themselves, preserve the
        site.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp"
          alt="Point cloud created from coordinated site capture"
          caption="Coordinated capture can turn visual coverage into a navigable record of how features relate in space."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228740/b47f1f_612e3db647214dfe948d4d5a00f5626e_mv2_xijic8.gif"
          alt="Reviewer examining a 3D model of a documented site"
          caption="A structured digital record lets later reviewers revisit conditions without returning to the field."
        />
      </ArticleFigureRow>

      <h2>What forensic site documentation means</h2>
      <p>
        Forensic site documentation is the practice of creating a spatially organized record of a
        site that can be reviewed after physical access is no longer possible. Instead of isolated
        images, the intended output is a measurable representation of the site itself.
      </p>
      <p>
        Depending on the objective, that can include overlapping aerial imagery, interior reality
        capture, and structured ground photography processed so that images and derived surfaces
        exist in a shared spatial frame. The useful result is not a single photogenic view. It is
        preserved scale, distance, and adjacency.
      </p>
      <p>
        The question then shifts from “what does this photograph show?” to “where is this condition,
        and how does it relate to what is around it?” That is the record later professionals can
        review. SterFlies captures and organizes those conditions.{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          Qualified experts interpret them
        </Link>
        .
      </p>
      <p>
        For a service-level description of this work, see{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        . Interior existing-conditions work for environmental review is shown in the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1767906103/Screenshot_2026-01-08_145836_zgatsw.png"
          alt="Interior spatial record used for later site review"
          caption="Interior capture can preserve layout so later reviewers can still orient themselves after the site changes."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228342/1_wGbfxeMEBJPPMIQ1H9QtVw_zdc22a.jpg"
          alt="Measured distances annotated on a site model"
          caption="When a capture is scoped for measurement, later reviewers can check distances and relationships against the preserved record."
        />
      </ArticleFigureRow>

      <h2>Why spatial structure matters</h2>
      <p>
        Spatial structure is what separates a folder of images from a site record. Processed outputs
        such as orthomosaics, point clouds, and 3D models can preserve geometry that photographs
        alone do not. Distances can be checked. Locations can be compared. Relationships between
        features can be reviewed later. How closely those measurements match field conditions depends
        on capture method, control, and processing—not on the label “forensic.”
      </p>
      <p>
        That structure lets later reviewers ask questions that were not asked at the time of capture:
        where a condition sat relative to a structure, pathway, or system; how far two features were
        apart; what existed nearby. Isolated photographs often cannot answer those questions.
      </p>
      <p>
        Orthomosaic maps are one common exterior output of this workflow.{" "}
        <Link href="/blog/orthomosaic_blog">How orthomosaic mapping works</Link> explains the
        difference between a photograph and a scaled map.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228868/Pp7aD0wbRZvIQdTegO1IAKM-j7VgsoFJQV2iOUupYYtMVlwCQpvMEjhHOVf2rtGNkvsFHCPq6HVbafJzYDjFcUR8qbZPOzpw3DA_G78fYAs_x5cjql.jpg"
          alt="Construction or industrial site before conditions change"
          caption="Sites change quickly. Once work proceeds, the original condition is gone."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228706/HEA_BLO_GEO_Dronelink_wyr6ro.jpg"
          alt="Mapped site record after field capture"
          caption="A dated capture preserves what existed at a specific point in time for later comparison."
        />
      </ArticleFigureRow>

      <h2>Context over time</h2>
      <p>
        Sites are not static. Materials are removed, surfaces are altered, systems are repaired, and
        environments change. Once those changes occur, the original conditions usually cannot be
        reconstructed from memory.
      </p>
      <p>
        A dated spatial record lets later reviewers see what existed before alterations were made.
        That can matter in construction, environmental, and safety reviews. It does not determine
        causation, responsibility, or legal outcome. Those questions belong to qualified
        professionals reviewing the record.
      </p>
      <p>
        This is also why{" "}
        <Link href="/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations">
          existing-conditions documentation for industrial hygiene investigations
        </Link>{" "}
        is useful: the investigation often continues after the site has already changed. The same
        timing problem appears in{" "}
        <Link href="/blog/documenting-site-conditions-for-construction-defect-litigation">
          construction-defect documentation
        </Link>{" "}
        and in later questions about{" "}
        <Link href="/blog/digital-evidence-3d-reality-capture-legal-disputes">
          digital site documentation in legal disputes
        </Link>
        .
      </p>

      <h2>When later review is likely</h2>
      <p>
        In construction, environmental, safety, and dispute settings, later reviewers often need a
        shared view of the site they can inspect independently. A structured spatial record can
        reduce argument over what was present. It does not replace engineering, industrial hygiene,
        legal, or expert opinion.
      </p>
      <ArticleCallout>
        Photographs remain useful for detail, texture, and close condition. Without spatial
        structure, they remain fragments. Forensic site documentation is the work of organizing those
        fragments into a reviewable site record.
      </ArticleCallout>
    </ArticleLayout>
  )
}
