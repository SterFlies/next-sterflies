import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("topography_blog")

export default function Page() {
  return (
    <ArticleLayout slug="topography_blog" wordCount={780}>
      <p>
        Topographic maps show elevation and landform on a flat sheet or screen. Contour lines
        connect points of equal elevation so a reviewer can see slopes, ridges, drainage paths, and
        relative height.
      </p>
      <p>
        Photogrammetry can produce terrain and elevation context from overlapping images. That is
        not the same product as a licensed land survey or a stamped topographic survey.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754482412/STERFLIES_TOPODEMO_aiokyp.png"
        alt="Photogrammetric topographic context derived from overlapping aerial images"
        caption="A photogrammetric elevation product can provide terrain context. It is not a legal survey."
      />

      <h2>What a topographic map is showing</h2>
      <p>
        Closely spaced contours usually indicate steeper ground. Wider spacing usually indicates
        gentler slopes. V-shaped contours often follow drainage. Concentric contours can indicate a
        hill or a depression, depending on how they are drawn. Those reading conventions are
        educational. They do not make any particular map a survey.
      </p>

      <h2>Photogrammetric elevation versus a legal survey</h2>
      <p>
        A photogrammetric surface or contour set is derived from images, processing, and whatever
        control was used. A licensed topographic survey is a professional work product prepared
        under surveying standards and, when required, stamped by a licensed surveyor.
      </p>
      <p>
        SterFlies can document terrain context when a project is scoped for that output. SterFlies
        does not replace a licensed surveyor. If a legal description, boundary, or stamped survey is
        required, that work belongs to a licensed professional.
      </p>
      <ArticleCallout>
        Use photogrammetric elevation outputs as documentation and planning context. Use a licensed
        survey when the task is a legal survey.
      </ArticleCallout>

      <h2>Where photogrammetric terrain context is useful</h2>
      <p>
        It can help later reviewers see grade, drainage direction, and relative elevation across a
        site. It can also support later{" "}
        <Link href="/blog/volumetric_blog">volume context</Link> when surfaces are compared. Map
        geometry is discussed in{" "}
        <Link href="/blog/orthomosaic_blog">understanding orthomosaic mapping</Link>.
      </p>
      <p>
        Usefulness still depends on coverage, visibility, processing, and control. Dense vegetation
        and steep faces are common limits.{" "}
        <Link href="/services/mapping">Mapping and photogrammetry</Link> describes when this
        output is in scope.
      </p>
    </ArticleLayout>
  )
}
