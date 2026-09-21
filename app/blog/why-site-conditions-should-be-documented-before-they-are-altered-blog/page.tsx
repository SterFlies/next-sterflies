import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "why-site-conditions-should-be-documented-before-they-are-altered-blog"
)

export default function Page() {
  return (
    <ArticleLayout slug="why-site-conditions-should-be-documented-before-they-are-altered-blog">
      <p>
        Site conditions do not wait for later review. Once remediation, cleanup, repairs, or material
        removal begin, spatial relationships shift, surfaces are disturbed, and the surroundings of
        a sampling location or observed condition often cannot be revisited.
      </p>
      <p>
        This article is about timing. The useful moment to document a site is while the original
        context still exists. That is a different problem from collecting more photographs after
        work has already started.
      </p>

      <h2>What is lost after alteration</h2>
      <p>
        Documentation captured after alteration records what remains. It does not recreate the
        environment in which observations were first made. Sampling locations become harder to
        place. Relationships between affected and unaffected areas lose clarity. Reviewers who
        were not on site have to infer context from notes and later photographs.
      </p>
      <ArticleCallout>
        Documentation captured after alteration reflects what remains, not what existed at the time
        of the visit.
      </ArticleCallout>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104726/Matterport_FloorplanSample_FLOOR2_aflqkk.png"
        alt="Floor plan used to preserve room relationships before a site changes"
        caption="A floor plan or spatial record can keep room relationships available after materials are removed."
      />

      <h2>What early documentation can preserve</h2>
      <p>
        Early capture is not inspection, sampling, analysis, or interpretation. It does not replace
        an industrial hygienist, engineer, or other qualified professional. It preserves visual and
        spatial context so later reviewers can still see layout and surroundings.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/virtualtour_dq3b1w.mp4"
        alt="Interior walkthrough used to preserve sampling locations within a building"
        caption="A navigable interior record can preserve where observations occurred relative to rooms and building systems."
        video
      />
      <p>
        That supporting role is described more fully in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>{" "}
        and in{" "}
        <Link href="/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations">
          existing-conditions documentation for IH investigations
        </Link>
        .
      </p>

      <h2>When early capture is most useful</h2>
      <p>
        The record is most useful before remediation, cleanup, repairs, or material removal; before
        access is restricted; and before conditions change in ways that cannot be reversed. It can
        also help before reporting or third-party review, when later readers will not see the
        original site.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769207358/Screenshot_2026-01-23_162843_tckamn.png"
        alt="Interior conditions documented before remediation"
        caption="Early capture preserves context that usually cannot be recreated later."
      />
      <p>
        If questions start only after the scene has already changed, see{" "}
        <Link href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts">
          why documentation is often requested too late
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
