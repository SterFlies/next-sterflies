import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("construction-progress-monitoring-best-practices")

export default function Page() {
  return (
    <ArticleLayout slug="construction-progress-monitoring-best-practices" wordCount={980}>
      <p>
        Construction sites change continuously. Crews rotate, materials move, and the visible state
        of the work is different from one week to the next. Progress documentation is useful when
        later reviewers can still see what existed at a given interval—not only what someone
        remembered or photographed from convenient ground viewpoints.
      </p>
      <p>
        This article is about repeatable site documentation: consistent capture intervals, a shared
        visual record, and later comparison. It is not a promise of fewer site visits, faster
        schedules, or project savings.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154106/Screenshot_2026-02-03_152748_jpawyn.png"
          alt="Orthomosaic used as a dated construction progress record"
          caption="A mapped record can show the whole site at one interval."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154154/Screenshot_2026-02-03_152901_mwqym5.png"
          alt="Later orthomosaic of the same construction site"
          caption="A later capture of the same site supports visual comparison."
        />
      </ArticleFigureRow>

      <h2>Why a shared record matters</h2>
      <p>
        Owners, contractors, consultants, and other stakeholders often need the same view of what
        was complete, what was in progress, and what conditions existed on a given date. Ground
        photographs and written notes remain useful. They are also easy to take from different
        angles, at different times, with different assumptions about what mattered.
      </p>
      <p>
        A repeatable spatial record gives those fragments a shared frame. It does not, by itself,
        resolve a commercial dispute or prove delay.
      </p>

      <h2>Consistent intervals beat a single flyover</h2>
      <p>
        One capture can document a moment. A series of captures, taken with a similar plan, can
        document change. The useful variables are interval and consistency: similar coverage,
        similar orientation, and a date attached to each record. Weekly, biweekly, or monthly
        intervals are project decisions, not a required product.
      </p>
      <ArticleCallout>
        The value is a comparable record over time, not a single aerial image.
      </ArticleCallout>

      <h2>What later comparison can show</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155712/drone-before-after-5-2023_qt9jng.jpg"
          alt="Earlier dated site record used for progress comparison"
          caption="An earlier interval preserves what the site looked like before later work."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155706/drone-before-after-5-2023_2_mqqwro.jpg"
          alt="Later dated site record of the same area"
          caption="A later interval lets teams compare the same area without reconstructing it from memory."
        />
      </ArticleFigureRow>
      <p>
        Depending on scope, later reviewers can see grading extents, pad development, material
        placement, and enclosure progress.{" "}
        <Link href="/blog/orthomosaic_blog">Orthomosaic maps</Link> and{" "}
        <Link href="/blog/3d_model">3D models</Link> are common outputs when the capture is planned
        for those products. Measurement usefulness still depends on geometry, processing, and
        control.
      </p>
      <p>
        A larger example of site-scale mapping is the{" "}
        <Link href="/projects/65acresite">65-acre site mapping project</Link>. Mapping methods are
        described under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>.
      </p>
    </ArticleLayout>
  )
}
