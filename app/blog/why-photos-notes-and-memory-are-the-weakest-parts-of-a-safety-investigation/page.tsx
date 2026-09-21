import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation"
)

export default function Page() {
  return (
    <ArticleLayout
      slug="why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation"
      references={[
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
        Safety reviews commonly rest on photographs, written notes, and recollection. Those tools
        are familiar and necessary. They are also incomplete as a primary site record once the
        environment has changed.
      </p>
      <p>
        This article is about the limits of isolated records and human recall. It is not an argument
        that investigators should stop taking photographs or writing notes. It is an argument that
        those fragments do not, by themselves, reconstruct a changed site.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770756292/Captura_de_pantalla_2026-02-10_144439_kx9o5c.png"
          alt="Close-up photograph of a site condition without spatial orientation"
          caption="A close-up captures detail and removes orientation and proximity."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1770754376/picture-context_qk2ysu.mp4"
          alt="Spatial walkthrough showing where conditions exist within a site"
          caption="A walkthrough can preserve where conditions sit in the site, not only what they look like."
          video
        />
      </ArticleFigureRow>

      <h2>Photographs capture detail and drop orientation</h2>
      <p>
        A photograph freezes a viewpoint. Close-ups are especially easy to misread later: they show
        a condition and hide where it sat, what surrounded it, and how it related to nearby
        equipment or paths. Wide frames still suffer from perspective and selective framing. Two
        reviewers can look at the same image and disagree about scale or relevance.
      </p>

      <h2>Notes record judgment at one moment</h2>
      <p>
        Notes are shaped by what seemed important while they were written. Time pressure and
        assumed relevance decide what is omitted. Phrases such as “nearby” or “excessive” depend on
        a shared frame of reference. Months later, after personnel change and the site is altered,
        those references become ambiguous.
      </p>

      <h2>Memory reconstructs; it does not replay</h2>
      <p>
        Human memory fills gaps. Later conversations and outcome knowledge can change how an event
        is described. Human-factors writing, including Reason and Dekker, treats that as a known
        reconstruction problem, not a finding about any specific witness. When recollection is
        treated as the site record, uncertainty increases as time passes.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770756942/Incident_investigation_for_safer_workplaces_2000_x1000_zvtsr9.jpg"
        alt="Team discussing an incident and reviewing documentation"
        caption="As narratives form, recollections can shift. Memory is a weaker record the longer the gap from the event."
      />
      <ArticleCallout>
        Photographs, notes, and memory remain useful supporting material. They become fragile when
        they are the only record of a site that no longer exists.
      </ArticleCallout>

      <h2>How the three weaknesses stack</h2>
      <p>
        A photograph without orientation is interpreted with notes. Notes are interpreted with
        memory. Memory evolves as discussion continues. Each step moves farther from the site as it
        existed.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770757443/Mold-Removal-jpeg_uvmwnf.webp"
          alt="As-found interior conditions before remediation"
          caption="As-found conditions, before later work changes the environment."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770757442/0C5FA06E-376E-4940-8528-A6A6E3F7E2B0-1024x768_vya4s9.jpg"
          alt="Interior after remediation or cleanup"
          caption="After physical change, later reviewers have only secondary records."
        />
      </ArticleFigureRow>
      <p>
        Spatial relationships are the subject of{" "}
        <Link href="/blog/safety-investigations-fail-more-often-from-missing-context-than-missing-data">
          missing context versus missing data
        </Link>
        . The late-request problem is covered in{" "}
        <Link href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts">
          why the investigation often starts after the site is gone
        </Link>
        .{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          Forensic site documentation
        </Link>{" "}
        is one way to keep a spatial frame around photographs and notes.
      </p>
    </ArticleLayout>
  )
}
