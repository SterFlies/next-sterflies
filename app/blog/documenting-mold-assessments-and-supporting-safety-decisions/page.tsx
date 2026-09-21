import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("documenting-mold-assessments-and-supporting-safety-decisions")

export default function Page() {
  return (
    <ArticleLayout
      slug="documenting-mold-assessments-and-supporting-safety-decisions"
      references={[
        {
          href: "https://jespear.com/mold-risk-assessment-and-remediation/",
          label: "Jerome E. Spear, “Mold Risk Assessment and Remediation”",
        },
      ]}
    >
      <p>
        Mold projects differ from many other investigations because conditions can change quickly
        and the physical evidence can disappear. Moisture dries. Materials are removed. Containment
        goes up. Airflow patterns change. Even a well-run project can erase the conditions that
        informed the original assessment.
      </p>
      <p>
        Jerome E. Spear’s article on mold risk assessment and remediation is a useful grounding
        reference for the professional side of that work. It emphasizes proactive management, prompt
        action, moisture control, and practical decision-making. This article is not a replacement
        for that guidance. It is a documentation approach for preserving the site around it.
      </p>
      <p>
        SterFlies does not perform mold assessment, identify species, determine health impact, assign
        causation, or recommend remediation. The work here is to preserve moisture context, sampling
        context, and spatial context so qualified professionals can review and communicate what they
        observed.
      </p>

      <h2>What makes mold work time-sensitive</h2>
      <p>
        In mold investigations, the main story is often moisture: where it came from, how long it
        persisted, what materials were affected, and what pathways allowed migration. That story is
        easier to understand when the environment is documented in a way that shows relationships
        instead of isolated details.
      </p>
      <p>
        Spear’s framework highlights the importance of correcting moisture sources and acting
        quickly. That same urgency creates a documentation problem. Once drying and demolition
        begin, the original moisture patterns are no longer visible, and later stakeholders may
        debate what was present at the time of assessment.
      </p>
      <ArticleCallout>
        Mold assessments often come down to moisture pathways and time. Documentation can preserve
        both visually and spatially. It does not decide what they mean.
      </ArticleCallout>
      <p>
        An interior example of this kind of record is the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769207358/Screenshot_2026-01-23_162843_tckamn.png"
        alt="Interior moisture and material context documented for later review"
        caption="Moisture context and material transitions matter. Capturing the surrounding environment helps preserve that story."
      />

      <h2>Document moisture context, not conclusions</h2>
      <p>
        Mold risk assessment requires professional judgment. Documentation should not compete with
        that judgment. It should support it by preserving what can be observed and referenced.
      </p>
      <p>
        Neutral mold documentation focuses on moisture indicators and building context: visible
        staining, material damage, suspected intrusion points, drainage and roof conditions, HVAC
        and condensate components, and how affected areas relate to occupied spaces.
      </p>
      <p>
        Document what is present and where it is present. Let qualified professionals determine what
        it means. That is the same boundary described in{" "}
        <Link href="/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations">
          existing-conditions documentation for IH investigations
        </Link>
        .
      </p>

      <h2>Sampling locations are easier to explain when they are preserved</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/IAQ_-_DEMO_showcase_qo4nav.mp4"
        alt="Navigable interior documentation showing rooms and sampling context"
        caption="A navigable documentation layer can preserve where observations and sampling occurred relative to building systems and spaces."
        video
      />
      <p>
        In mold work, sampling decisions are often discussed later by people who were not on site:
        a client, a reviewer, an adjuster, counsel, or a building stakeholder. Even when the
        sampling plan is written down, it can be hard to visualize exactly where a sample was taken
        and what surrounded it.
      </p>
      <p>
        A documentation layer that preserves spatial relationships can help answer follow-up
        questions. Where was the sample relative to a supply register? How close was it to a
        suspected moisture source? What materials were adjacent? What was the condition of the
        pathway between spaces?
      </p>

      <h2>Capture points that disappear during remediation</h2>
      <p>
        Prompt moisture correction shortens the window in which original conditions can still be
        seen. The most useful time to document is often before work begins, or as early as access
        allows.
      </p>
      <p>
        In mold projects, documentation can be especially valuable before porous materials are
        removed, before containment changes pressure relationships, before drying changes visible
        moisture signatures, before repairs conceal an intrusion pathway, and before access becomes
        restricted.
      </p>
      <ArticleCallout>
        Many mold projects become harder to explain after they are cleaned. Early documentation
        preserves the environment that informed the assessment.
      </ArticleCallout>

      <h2>How this fits a documentation service</h2>
      <p>
        <Link href="/services/forensic-site-documentation">
          Forensic mapping and site documentation
        </Link>{" "}
        can include interiors and exteriors as a connected record: pathways between spaces,
        proximity to building components, and the broader context that is hard to communicate
        through text alone. The deliverable is an organized documentation layer that remains useful
        after the site changes.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769208705/Matterport_FloorplanSample_FLOOR1_sx2rvd.png"
        alt="Floor plan generated to complement interior site documentation"
        caption="A floor plan can complement visual site documentation by making room relationships easier to follow."
      />
      <p>
        This content is informational. Site documentation is not mold assessment, risk evaluation, or
        remediation guidance. Assessments and decisions should be performed by qualified
        professionals according to applicable standards and regulations.
      </p>
    </ArticleLayout>
  )
}
