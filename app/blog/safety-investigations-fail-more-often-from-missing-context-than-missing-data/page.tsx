import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "safety-investigations-fail-more-often-from-missing-context-than-missing-data"
)

export default function Page() {
  return (
    <ArticleLayout
      slug="safety-investigations-fail-more-often-from-missing-context-than-missing-data"
      references={[
        {
          href: "https://www.osha.gov/incident-investigation",
          label: "OSHA, Incident Investigation",
        },
        {
          href: "https://www.cdc.gov/niosh/twh/programs/?CDC_AAref_Val=https://www.cdc.gov/niosh/twh/default.html",
          label: "NIOSH, Total Worker Health",
        },
        {
          href: "https://doi.org/10.1017/CBO9781139062367",
          label: "Reason, J. Human Error. Cambridge University Press",
        },
        {
          href: "https://www.iso.org/iso-45001-occupational-health-and-safety.html",
          label: "ISO 45001 Occupational health and safety management systems",
        },
        {
          href: "https://www.routledge.com/The-Field-Guide-to-Understanding-Human-Error/Dekker/p/book/9781472439055",
          label: "Dekker, S. The Field Guide to Understanding Human Error",
        },
      ]}
    >
      <p>
        Safety reviews are often framed as a search for more information: more photographs, more
        measurements, more notes. Many reviews already have plenty of fragments. What they lack is
        the spatial relationship that makes those fragments interpretable.
      </p>
      <p>
        This article is about context versus data. It is not about whether an investigator collected
        enough numbers. It is about whether later reviewers can still see how conditions related to
        one another in the environment.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490354/epub_pci0122-BlendSupply-618764302-1170_webp_btmajf.webp"
          alt="Close-up documentation of a condition without site orientation"
          caption="A close-up can be accurate and still be difficult to interpret later."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490415/how_to_scan_a_room_with_a_3d_scanner_rrljwd.jpg"
          alt="Spatially referenced interior scan showing surrounding context"
          caption="Context shows where the condition exists and what surrounds it."
        />
      </ArticleFigureRow>

      <h2>Data answers isolated questions. Context explains relationships</h2>
      <p>
        A photograph can show a surface clearly. It does not, by itself, show distance to an access
        path, elevation relative to equipment, or what sat next to it. A note may describe a
        condition accurately and still omit how people moved through the space.
      </p>
      <p>
        Context includes orientation, scale, adjacency, and environment. Without it, later reviewers
        interpret fragments in isolation. That is a different failure mode from “we needed one more
        measurement.”
      </p>

      <h2>Why more fragments still leave a gap</h2>
      <p>
        Photographs, inspection notes, and measurements are useful. They are usually collected from
        convenient viewpoints, written against what seemed relevant at the time, and stored without
        a shared spatial frame. Each piece can be locally accurate while the relationships between
        them are not preserved.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770490589/1kPrgnEclmZnOA9P2IqFKGGfRPkY6LW0P53DrGdfdRujW6j_e7NCdNSRiY1WAGS0dl-Lzk4DUwHzjPlAfhiJWPMkgeUd7wHqzix88hFqpAFP7-q7TuIUoJWm4koydx6bsTW58O6Yby4KdtgUJAoCPA_w4td9p.jpg"
        alt="Scattered photographs and notes without a shared spatial reference"
        caption="Plenty of documentation can still be incomplete when spatial relationships are not preserved."
      />

      <h2>What missing context forces later reviewers to do</h2>
      <p>
        They reconstruct distances, access, and proximity from memory or partial records. Relevance
        becomes subjective. Stakeholders can disagree about whether nearby conditions mattered.
        Human-factors writing, including Reason’s work on latent conditions in systems, treats layout
        and interaction as part of how events emerge. NIOSH Total Worker Health similarly treats work
        as a system rather than a set of isolated observations. Those are frameworks for thinking
        about systems, not methods SterFlies applies as an investigator.
      </p>
      <ArticleCallout>
        Additional data about what remains cannot restore spatial relationships that were never
        captured.
      </ArticleCallout>
      <p>
        Isolated photographs and notes have their own limits. That is the subject of{" "}
        <Link href="/blog/why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation">
          photos, notes, and memory as investigation records
        </Link>
        . The timing problem—review starting after the scene changes—is covered in{" "}
        <Link href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts">
          why documentation is often requested too late
        </Link>
        .
      </p>
      <p>
        <Link href="/blog/what-is-forensic-site-documentation">
          Forensic site documentation
        </Link>{" "}
        is one way to keep those relationships available for later qualified review. It does not
        make a record “defensible” in a legal sense, and it does not determine root cause.
      </p>
    </ArticleLayout>
  )
}
