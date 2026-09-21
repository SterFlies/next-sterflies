import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "you-dont-think-you-need-site-documentation-until-the-investigation-starts"
)

export default function Page() {
  return (
    <ArticleLayout
      slug="you-dont-think-you-need-site-documentation-until-the-investigation-starts"
      references={[
        {
          href: "https://www.osha.gov/accident-investigation",
          label: "OSHA, Accident Investigation",
        },
        {
          href: "https://www.cdc.gov/niosh/topics/safetyculture/default.html",
          label: "NIOSH, Safety and Health Management Systems",
        },
        {
          href: "https://www.iso.org/iso-45001-occupational-health-and-safety.html",
          label: "ISO 45001 Occupational health and safety management systems",
        },
        {
          href: "https://doi.org/10.1017/CBO9781139062367",
          label: "Reason, J. Human Error. Cambridge University Press",
        },
        {
          href: "https://www.routledge.com/The-Field-Guide-to-Understanding-Human-Error/Dekker/p/book/9781472439055",
          label: "Dekker, S. The Field Guide to Understanding Human Error",
        },
      ]}
    >
      <p>
        Documentation is often treated as administrative support until an incident, inspection, or
        claim begins. Then the questions arrive: what did the site look like, where was the
        condition, and what existed nearby. By then the original scene is frequently gone.
      </p>
      <p>
        This article is about that late start. It is not about how to assign fault or reconstruct
        causation. It is about what information becomes unavailable after the scene changes.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/Screenshot_2026-02-06_110304_zlesmr.png"
          alt="Close-up jobsite condition without broader site context"
          caption="A detail can look important and still be hard to place later."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/25f3b31b-cda2-471b-b1c6-e34b7283f52b_olagrs.png"
          alt="Wider site view showing orientation between features"
          caption="Context connects a condition to access routes and nearby surroundings."
        />
      </ArticleFigureRow>

      <h2>The questions that arrive after the site has changed</h2>
      <p>
        Investigations commonly ask what existed before cleanup or repair, where a condition sat,
        and how nearby layout influenced access or exposure. Those questions are harder to answer
        after hazards have been mitigated, materials removed, or temporary controls installed.
      </p>
      <p>
        Those actions are often necessary. They also permanently alter the physical environment
        later reviewers are trying to understand. OSHA’s accident-investigation guidance emphasizes
        documenting conditions as close to the event as possible because the scene evolves.
      </p>
      <ArticleCallout>
        The start of an investigation often marks the end of the original site.
      </ArticleCallout>

      <h2>Why the record is usually requested too late</h2>
      <p>
        Safety programs rightly prioritize controls that reduce harm. Comprehensive site capture for
        a review that may never occur can feel hard to justify. The assumption becomes: if we need
        it, we will document it then.
      </p>
      <p>
        That assumption fails when the later review needs the original environment. Photographs,
        notes, and statements may still exist. What is often gone is the scene those fragments came
        from. How to document earlier is covered in{" "}
        <Link href="/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog">
          why site conditions should be documented before they are altered
        </Link>
        .
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397668/the-best-air-quality-and-restoration-content-mold-remediation-640w_kmu31y.webp"
          alt="Interior conditions before cleanup or remediation"
          caption="Before corrective work, conditions still reflect the environment as it was found."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397668/VZc0MDuIGDaWqkuVGcQCH5vVatVZpJbh-wFtfoW8qCIVBIpR81Qt7BD1g7J4M65iFw-q8N6hMVIT41OD5TVvS6q7OSdleDDUs9S-RJhaVsQ_o3zttk.jpg"
          alt="Interior after cleanup or restricted access"
          caption="After cleanup or repair, the original environment may not be reconstructable."
        />
      </ArticleFigureRow>

      <h2>What later reviewers cannot recover</h2>
      <p>
        They cannot recover adjacency, access, and layout that were never preserved. They can still
        collect more measurements of what remains. That is a different problem, covered in{" "}
        <Link href="/blog/safety-investigations-fail-more-often-from-missing-context-than-missing-data">
          missing context versus missing data
        </Link>
        .
      </p>
      <p>
        Recollection also changes as discussions continue. That is a known human-factors issue, not
        a claim that any particular witness is unreliable. Isolated photographs and notes have their
        own limits, discussed in{" "}
        <Link href="/blog/why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation">
          why photos, notes, and memory are fragile records
        </Link>
        .
      </p>
      <p>
        SterFlies captures and organizes site conditions. It does not determine fault, root cause,
        or legal outcome.{" "}
        <Link href="/services/forensic-site-documentation">
          Forensic mapping and site documentation
        </Link>{" "}
        is the service used when the objective is a reviewable spatial record before the scene
        disappears.
      </p>
    </ArticleLayout>
  )
}
