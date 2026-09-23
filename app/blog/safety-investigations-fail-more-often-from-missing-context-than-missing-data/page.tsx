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
      <h2>Introduction</h2>
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
      <p>
        Context, in this sense, is a shared spatial frame. It includes the direction a camera faced,
        the distance between a condition and a path or piece of equipment, the elevation of a work
        surface, and what occupied the surrounding area at the time of the visit. A single
        measurement can be correct and still leave those relationships unrecorded. Reality
        capture—photographs or scans organized so a later reader can move through the place rather
        than through a folder of separate frames—is one way to keep the frame with the detail. The
        capture records the scene as it was found. It does not decide which relationship a later
        review should treat as relevant.
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
      <p>
        The gap is easiest to see by asking what a later reviewer can still locate. A close-up can
        confirm the appearance of a surface. It cannot, by itself, show how far that surface sat
        from a doorway, a ladder, or a machine unless the capture was planned to preserve those
        relationships. Photogrammetry derives shape and position from overlapping photographs and
        can produce a mesh, an orthomosaic, or a point cloud. A point cloud is a set of measured
        points describing surfaces in space. An orthomosaic is a plan-view photo map assembled from
        those overlapping images. An ordinary set of photographs does not become any of those
        products because the files share a folder. Each product is also limited by overlap, control,
        and processing. None of them is a property survey.
      </p>
      <p>
        The practical result is often a large set of locally accurate records that cannot be placed.
        Several close-ups of the same guard, stain, or cover may still leave a reviewer unable to
        say which wall, which level, or which side of a machine they show. A note that says “north
        wall” or “near the press” depends on a plan or on someone’s memory of the room. After the
        room is rearranged, the words and the photographs no longer point at the same place.
        Existing-conditions documentation is a dated record of the site as it was found, kept so
        those pointers remain available. It preserves relationships. It does not rank which fragment
        later mattered.
      </p>

      <h2>What missing context forces later reviewers to do</h2>
      <p>
        When that dated frame was never captured, later review does not stop. It changes the kind of
        work reviewers have to do.
      </p>
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

      <h2>Conclusion</h2>
      <p>
        Safety reviews run into this limit when the file can describe pieces of a site and cannot
        show how those pieces sat together. Additional photographs and notes can leave the same
        limit in place if they were never tied to a shared view of the environment.
      </p>
      <p>
        A spatial record gives later reviewers one reference for orientation, scale, and adjacency.
        An interior walkthrough, an orthomosaic, or a point cloud can each do part of that work,
        within the limits of how it was captured and processed. Reviewers can then ask where a
        condition sat, what surrounded it, and which path or piece of equipment was nearby, using
        the record rather than a reconstruction from memory.
      </p>
      <p>
        SterFlies documents the site so qualified reviewers can still see those relationships after
        conditions change. The record is a reference for that review. What the relationships mean
        for an investigation remains with the people responsible for the review.
      </p>
    </ArticleLayout>
  )
}
