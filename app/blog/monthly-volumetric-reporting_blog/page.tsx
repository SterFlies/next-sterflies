import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("monthly-volumetric-reporting_blog")

export default function Page() {
  return (
    <ArticleLayout slug="monthly-volumetric-reporting_blog" wordCount={760}>
      <p>
        Stockpiles and earthwork change between site visits. A single annual measurement can still
        be useful as a snapshot. It cannot show what happened in the months between captures.
      </p>
      <p>
        Recurring documentation—monthly or at another agreed interval—creates a series of dated
        material records. That is a documentation practice. It is not an automatic financial-control
        system, and it does not guarantee inventory accuracy, savings, or operational optimization.
      </p>

      <h2>What a recurring record can show</h2>
      <p>
        Each capture documents the visible pile or surface at that interval. Compared with the
        previous capture, later reviewers can see whether a stockpile grew, shrank, or changed
        shape. The comparison is only as useful as the capture plan: similar coverage, documented
        baselines, and surfaces that were actually visible.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755283328/v1_nfpjos.png"
        alt="Example comparison of recurring stockpile documentation intervals"
        caption="A later interval is useful when it can be compared to an earlier record of the same area."
      />

      <h2>Why interval matters more than a year-end number</h2>
      <p>
        Material is loaded, delivered, and weathered throughout the year. An annual figure cannot
        locate when a change occurred. A monthly or other regular interval keeps a dated trail. That
        trail can support later discussion. It does not, by itself, prove shrinkage, theft, or
        accounting error.
      </p>
      <ArticleCallout>
        Recurring captures document change over time. They do not replace scale tickets, surveys, or
        financial controls.
      </ArticleCallout>

      <h2>How this relates to a single volumetric capture</h2>
      <p>
        The underlying method is the same surface-comparison process described in{" "}
        <Link href="/blog/volumetric_blog">volumetric data from photogrammetric surfaces</Link>.
        Repeating it is a scheduling and consistency decision. Construction sites that need visual
        progress records rather than volumes are covered in{" "}
        <Link href="/blog/construction-progress-monitoring-best-practices">
          construction progress documentation
        </Link>
        .
      </p>
      <p>
        Accuracy still depends on geometry, visibility, processing, control, and site conditions.
        Service scope is under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>.
      </p>
    </ArticleLayout>
  )
}
