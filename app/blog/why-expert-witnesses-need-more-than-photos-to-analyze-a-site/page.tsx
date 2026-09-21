import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("why-expert-witnesses-need-more-than-photos-to-analyze-a-site")

export default function Page() {
  return (
    <ArticleLayout slug="why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
      <p>
        Expert review depends on context. In construction, premises, safety, and property matters,
        experts are often asked to interpret conditions that are no longer present, no longer
        accessible, or no longer visible in the same state. The work does not wait for a perfect
        site visit. What the expert receives is a record.
      </p>
      <p>
        Photographs are the most common form of that record, and they are often misunderstood. A
        photograph can capture sharp detail while removing the information that makes the detail
        meaningful. When an expert is asked to explain what happened and what conditions were
        present, the expert is looking for relationships. Relationship is what turns a photograph
        into something that can be analyzed.
      </p>
      <p>
        This is why a useful site record is not “better pictures.” It is enough preserved context
        that a qualified expert can orient, check, and communicate without having to guess the
        environment.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731217/10399a60-72f4-4ad2-86d1-6ce5d9614134_zdqrsm.png"
          alt="Close-up photograph of a site condition without clear orientation"
          caption="A close-up can show a condition clearly while hiding where it sits in the environment."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731824/09915a42-95df-49fa-82f9-016bead957a1_cmbyfu.png"
          alt="Wider view showing orientation and surrounding site features"
          caption="A wider view restores orientation, adjacency, and the relationships later reviewers need."
        />
      </ArticleFigureRow>

      <h2>Experts are asked to solve problems photographs do not describe</h2>
      <p>
        When counsel retains an expert, the questions are rarely limited to what a single photograph
        shows. Experts may be asked to evaluate pathway, mechanism, sequence, access, clearance, and
        how a condition developed over time. A photograph may show one artifact of the site. Those
        questions revolve around system behavior.
      </p>
      <p>
        In practice, experts often spend time reconstructing context before analysis can start. They
        build a mental model from fragments. They ask where the photograph was taken, which
        direction it faces, what is off frame, and what changed after the event. When those
        questions cannot be answered confidently, technical opinion becomes more exposed to
        competing interpretations.
      </p>
      <p>
        SterFlies does not offer expert opinion.{" "}
        <Link href="/services/forensic-site-documentation">
          Forensic mapping and site documentation
        </Link>{" "}
        is the capture and organization of conditions so later experts have a more complete spatial
        record to review.
      </p>

      <h2>The core problem is missing orientation</h2>
      <p>
        Many packages contain high-resolution images. Detail is useful, but detail does not solve
        orientation. A photograph can be well exposed and still be difficult to use if the expert
        cannot place it in the overall environment. Orientation is what makes a condition checkable
        against the rest of the site.
      </p>
      <p>
        Once orientation is missing, distances become assumptions, angles become subjective, and
        relationships become debate. Even when both sides have qualified experts, those experts can
        disagree when the record forces them to infer the environment rather than observe it.
      </p>

      <h2>Partial records increase reconstruction work</h2>
      <p>
        Experts do not only review. They confirm. They compare. They test whether a narrative fits
        the physical environment. When the record is thin, they compensate by requesting more
        information, additional site access, or additional discovery. That extra work shows up in
        cost, schedule, and friction.
      </p>
      <p>
        A stronger record reduces the number of times basic questions have to be revisited: where
        this was observed, how far it sat from a transition, what was adjacent, and what was above
        or behind the photographed surface. When those questions are answered by the documentation
        itself, later analysis can stay on the technical issue rather than on reconstructing the
        scene.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731578/4907e5c4-813f-472e-b616-c316397a7176_uy5uc8.png"
          alt="3D site model used to reorient and check spatial relationships"
          caption="A navigable 3D record can preserve spatial relationships so later reviewers can reorient."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731752/19be7347-df64-4d29-94c2-940d9465d7ac_bacvhr.png"
          alt="Orthomosaic map showing consistent scale and site layout"
          caption="Photographs, measurements, and notes are more useful when they can be anchored to a scaled site record."
        />
      </ArticleFigureRow>

      <h2>What a more complete spatial record can provide</h2>
      <p>
        The most useful improvement is continuity. A spatially organized record lets an expert move
        from broad context into fine detail without losing place. Aerial mapping can preserve the
        site-level story. Interior capture can preserve room-level geometry and layout. Together they
        create a dataset that can be revisited without relying on memory or a selective set of
        angles.
      </p>
      <p>
        That continuity does not guarantee agreement between parties. It can narrow the space where
        disagreement hides by keeping discussion on the environment that was captured, not the
        environment each side reconstructs from fragments. For the underlying method, see{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        .
      </p>
      <p>
        Interior environmental examples are shown in the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>

      <h2>Repeatable capture is easier to explain later</h2>
      <p>
        In disputed matters, opposing narratives often challenge the foundation as much as the
        conclusion. They ask whether a condition was captured clearly, whether it was preserved, and
        whether it can be explained. A repeatable documentation workflow is easier to describe: what
        was captured, when it was captured, where it was captured, and how it was organized.
      </p>
      <p>
        That is not the same as a legal chain of custody, admissibility, or a guarantee that a
        record will be accepted in any proceeding. It is operational traceability. A related
        discussion of digital handling is in{" "}
        <Link href="/blog/chain-of-custody-digital-site-documentation-litigation">
          chain of custody for digital site documentation
        </Link>
        .
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772732136/b689410e-fa09-409e-b890-8d30c290ae4c_bzeb1e.png"
          alt="Reviewer examining a digital site model"
          caption="When later reviewers can explore the environment digitally, analysis depends less on memory and inference."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772732244/bd1fbc6d-71a3-4425-8a42-6e5c26bce9cd_nd61zc.png"
          alt="Team reviewing a shared site record"
          caption="A shared site record can reduce disputes driven only by partial viewpoints."
        />
      </ArticleFigureRow>

      <ArticleCallout>
        Many reviews weaken because the record is incomplete, not because the later expert is
        unqualified. Once the site has changed, a partial record cannot be repaired. It can only be
        supplemented with inference.
      </ArticleCallout>
      <p>
        If documentation is being considered only after questions start, see{" "}
        <Link href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts">
          why site documentation is often requested too late
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
