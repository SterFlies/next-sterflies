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
      <h2>Introduction</h2>
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
      <p>
        The purpose here is to explain what early site documentation can still preserve, what is
        usually lost after a site is altered, and where that record stops. It does not describe how
        to determine why a condition occurred, who is responsible, or what repair is appropriate.
        Those questions belong to the professionals who later review the record.
      </p>
      <p>
        The readers who need this distinction are often not the people who walked the site. Counsel,
        industrial hygienists, safety reviewers, and construction professionals may receive a file
        months later and need to know whether the file shows the site as it was found, or only the
        site after work had already changed it.
      </p>

      <h2>What is lost after alteration</h2>
      <p>
        Documentation captured after alteration records what remains. It does not recreate the
        environment in which observations were first made. Sampling locations become harder to
        place. Relationships between affected and unaffected areas lose clarity. Reviewers who
        were not on site have to infer context from notes and later photographs.
      </p>
      <p>
        The loss is usually spatial, not merely photographic. A later photograph can still show a
        repaired wall, a cleaned floor, or an empty room. It cannot show which materials were
        adjacent when the observation was made, which path connected two rooms, or where equipment
        sat relative to an opening. Once those relationships are gone, additional photographs of
        what remains answer a different question.
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
      <p>
        In practice, an early record is a dated description of visible layout. An interior
        walkthrough can keep a sampling location inside a room. An exterior map can keep that
        building inside a yard, beside an excavation, or along an access route. Neither product
        samples the air, tests a material, or decides whether a condition is significant. They keep
        the setting so a qualified person can explain the observation without rebuilding the site
        from memory.
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
      <p>
        Early capture is also limited by access. If a room is unsafe to enter, if a surface is
        covered, or if work has already started in one area, the record can only show what was
        visible on that date. Stating that limit is part of the documentation. A partial early
        record is still a record of a moment. It should not be described as a complete recreation
        of every condition that once existed.
      </p>

      <h2>Conclusion</h2>
      <p>
        The useful moment to document a site is while the original surroundings still exist.
        Remediation, cleanup, repair, and material removal are often necessary. They also change
        the layout later reviewers will be asked to understand.
      </p>
      <p>
        Photographs taken afterward can document what remains. A spatial record taken earlier can
        keep room relationships, sampling surroundings, and exterior context available after those
        changes. The record does not inspect, sample, or interpret. It gives qualified
        professionals a stable view of the site as it was found.
      </p>
      <p>
        When that view is missing, later work shifts from review of observed conditions to
        inference about conditions that can no longer be seen. Timing is the practical difference
        between those two tasks.
      </p>
    </ArticleLayout>
  )
}
