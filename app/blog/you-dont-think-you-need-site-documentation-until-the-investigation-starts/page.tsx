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
      <h2>Introduction</h2>
      <p>
        Documentation is often treated as administrative support until an incident, inspection, or
        claim begins. Then the questions arrive: what did the site look like, where was the
        condition, and what existed nearby. By then the original scene is frequently gone.
      </p>
      <p>
        This article is about that late start. It is not about how to assign fault or reconstruct
        causation. It is about what information becomes unavailable after the scene changes.
      </p>
      <p>
        The purpose is to describe the questions that arrive after a site has changed, why the
        record is often requested only then, and what later reviewers cannot recover from
        photographs, notes, and recollection alone. OSHA’s accident-investigation materials, and
        the human-factors writing of Reason and Dekker, are used here as background for why scenes
        and memories both move. They are not a procedure for determining responsibility.
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
      <p>
        A typical later question is simple and already too late: where did this stand relative to
        the access, the equipment, and the material that has since been moved? A close photograph
        can still show a surface. It cannot restore the path around it. The wider view has to be
        captured while both are still in place.
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
      <p>
        The delay is understandable. Daily work is organized around completing the job and
        controlling hazards, not around a review that may never be requested. The difficulty is
        that the actions which make a site safe—cleanup, repair, restricted access—are the same
        actions that remove the environment a later reviewer needs. Waiting for the investigation
        to start often means waiting until that environment is already gone.
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
      <p>
        What cannot be recovered is the unrecorded relationship: which room opened onto which
        corridor, which pile sat beside which piece of equipment, which stain was next to which
        opening. More measurements of the cleaned or repaired site can still be useful. They
        document a later condition. They do not replace the missing earlier one.
      </p>

      <h2>Conclusion</h2>
      <p>
        Site documentation is easy to postpone because the need for it is clearest after something
        has already gone wrong. By that point, cleanup, repair, and restricted access have often
        changed the scene the questions are about.
      </p>
      <p>
        Photographs, notes, and memory remain necessary. They do not restore layout, adjacency, and
        access that were never preserved. A dated spatial record, made while those relationships
        still exist, is what later reviewers can still examine.
      </p>
      <p>
        This article does not assign fault or reconstruct cause. It describes a timing problem.
        The investigation can begin after the original site has ended. The record has to be made
        before that happens.
      </p>
    </ArticleLayout>
  )
}
