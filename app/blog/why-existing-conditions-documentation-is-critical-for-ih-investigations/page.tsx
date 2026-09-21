import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "why-existing-conditions-documentation-is-critical-for-ih-investigations"
)

export default function Page() {
  return (
    <ArticleLayout slug="why-existing-conditions-documentation-is-critical-for-ih-investigations">
      <p>
        In industrial hygiene and environmental consulting, later review depends on conditions that
        can still be shown. Sampling results and laboratory analysis matter. So does the ability to
        see what the site looked like when those samples were taken.
      </p>
      <p>
        Whether an investigation involves mold, indoor air quality, moisture, or construction-related
        exposure questions, the site often changes before the report is finished. Remediation,
        demolition, drying, and occupant cleanup can remove the original context.
      </p>
      <p>
        Many projects still rely on written notes, handheld photographs, and memory. Those tools
        remain useful. They can also leave gaps when access is lost or findings are later questioned.
        Existing-conditions documentation is a supporting record, not a substitute for industrial
        hygiene judgment.
      </p>

      <h2>Sites change faster than reports</h2>
      <p>Environmental investigations rarely occur in static environments. Conditions can change because of:</p>
      <ul>
        <li>Remediation, demolition, or selective removal</li>
        <li>Temporary containment or engineering controls</li>
        <li>Weather, moisture intrusion, or drying</li>
        <li>Occupant alterations, cleanup, or repairs</li>
      </ul>
      <p>
        Once a site changes, reconstructing what was present at the time becomes difficult or
        impossible. Even a careful report can be harder to explain if visual context, spatial
        relationships, or surface conditions are no longer available for review.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1767905302/Screenshot_2026-01-08_144800_qrzymb.png"
        alt="Interior conditions that can change after remediation or repairs"
        caption="Once conditions change, the original context usually cannot be fully recreated."
      />

      <h2>What existing-conditions documentation means</h2>
      <p>
        In this context, existing-conditions documentation is not marketing media. It is capture of
        the site as it existed at a specific visit: rooms, materials, equipment, and how they relate.
      </p>
      <p>Depending on the project, that can include:</p>
      <ul>
        <li>High-resolution visual records of affected areas</li>
        <li>Spatial context showing how rooms, materials, and systems relate</li>
        <li>Date-stamped documentation tied to a specific site visit</li>
        <li>Navigable interior records that can be revisited later</li>
      </ul>
      <ArticleCallout>
        The goal is preservation, not interpretation. SterFlies does not perform industrial hygiene
        assessments, diagnose conditions, or determine causation.
      </ArticleCallout>

      <h2>Why visual context matters</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/Timeline_1_dbtois.mp4"
        alt="Visual context example preserving sampling locations within an interior environment"
        caption="A navigable record can preserve where observations occurred relative to rooms and building systems."
        video
      />
      <p>
        Environmental conditions are rarely isolated to a single surface or sample point. Moisture
        patterns, material transitions, penetrations, and air pathways are influenced by building
        geometry. A preserved visual record can help later reviewers see how conditions relate to one
        another—not only that they existed.
      </p>
      <p>
        That becomes useful when explaining findings to people who were not on site, or when
        reviewing conditions months later after access is restricted. For a mold-specific version of
        this problem, see{" "}
        <Link href="/blog/documenting-mold-assessments-and-supporting-safety-decisions">
          documenting mold assessments
        </Link>
        .
      </p>

      <h2>Supporting, not replacing, professional judgment</h2>
      <p>
        Existing-conditions documentation does not replace sampling, analysis, or professional
        interpretation. It is a reference layer that can support that work when third parties need
        site context after conditions have changed.
      </p>
      <p>
        In practice, that means a qualified reviewer can return to the environment virtually to
        check spatial relationships and confirm what was documented. The{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>{" "}
        shows this as an interior existing-conditions record, not as an assessment.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg"
        alt="Interior spatial documentation used as a later review record"
        caption="Documentation supports professional findings by preserving context. It does not add conclusions."
      />

      <h2>Where this can help</h2>
      <p>
        Teams often request existing-conditions documentation around mold and moisture
        investigations, indoor air quality complaints, pre- and post-remediation condition records,
        and construction-related questions. Hazard identification, sampling strategy, and regulatory
        conclusions remain the industrial hygienist’s work.
      </p>
      <p>
        The documentation objective is the same in each case: preserve clarity when the site cannot
        be revisited in its original state. The capture methods used for this work are described
        under{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        .
      </p>

      <h2>When to capture it</h2>
      <p>
        Existing-conditions documentation is most useful when captured early—before remediation,
        demolition, or repairs begin. Common integration points include the initial site visit,
        before invasive testing or removal, and before reporting or third-party review.
      </p>
      <p>
        In many cases the record is never needed again. When it is needed later, it usually cannot
        be recreated. That is also the argument in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        : preserve the site while it still exists.
      </p>
    </ArticleLayout>
  )
}
