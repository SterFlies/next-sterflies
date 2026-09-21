import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("volumetric_blog")

export default function Page() {
  return (
    <ArticleLayout slug="volumetric_blog" wordCount={820}>
      <p>
        Volumetric documentation estimates how much material sits above or below a reference
        surface. On construction and aggregate sites that often means stockpiles, cut, and fill.
        Photogrammetry can support that estimate when the capture is scoped for a surface model.
      </p>
      <p>
        The result is volume context for later review. It is not a universally survey-grade
        calculation, and it does not replace a licensed survey when one is required.
      </p>

      <h2>What volumetric data is</h2>
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

      <h2>How a photogrammetric volume is produced</h2>
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

      <h2>Accuracy depends on the capture</h2>
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

      <h2>Where this is commonly used</h2>
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
    </ArticleLayout>
  )
}
