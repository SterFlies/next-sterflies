import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "chain-of-custody-digital-site-documentation-litigation"
)

export default function Page() {
  return (
    <ArticleLayout
      slug="chain-of-custody-digital-site-documentation-litigation"
      references={[
        {
          href: "https://www.law.cornell.edu/rules/fre/rule_901",
          label: "Federal Rules of Evidence, Rule 901 — Authentication and identification",
        },
        {
          href: "https://www.law.cornell.edu/rules/frcp/rule_37",
          label: "Federal Rules of Civil Procedure, Rule 37 — Failure to preserve electronically stored information",
        },
        {
          href: "https://www.thesedonaconference.org/publication/Commentary_on_Legal_Holds",
          label: "The Sedona Conference, Commentary on Legal Holds",
        },
      ]}
    >
      <p>
        Physical sites rarely stay still long enough for later review to catch up. Repairs begin.
        Materials are removed. Access is restricted. By the time questions harden, the original
        conditions are often gone.
      </p>
      <p>
        Organized digital documentation can preserve what a site looked like. That is file
        traceability. It is not automatically a legal chain of custody. This article is educational
        guidance on documentation practices. It is not legal advice, and it does not represent that
        every SterFlies project follows a formal evidence-custody system.
      </p>
      <ArticleCallout>
        SterFlies does not currently operate a documented legal chain-of-custody protocol. File
        naming, capture dates, metadata, and organized storage can support later explanation. They
        do not, by themselves, satisfy a legal chain of custody.
      </ArticleCallout>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg"
          alt="Documentation files being reviewed for later explanation"
          caption="Later questions are often about what can be explained, not only what an image shows."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/c4659781721ee58eaaf23acfdc34e6f232fe68ec-1248x652_bnkbx7.avif"
          alt="Organized documentation being reviewed"
          caption="A useful record can usually be explained in plain terms: what was captured, when, where, and what was delivered."
        />
      </ArticleFigureRow>

      <h2>File traceability is not legal chain of custody</h2>
      <p>
        File traceability can include consistent naming, capture dates, camera or processing
        metadata, organized storage, documented handoffs, and version records. Hashes can also be
        used when a project actually applies them. SterFlies does not present hashing as a standard
        step of every project.
      </p>
      <p>
        A legal chain of custody is a formal process used to document possession, control, transfer,
        analysis, and disposition of evidence. Organized files do not automatically satisfy that
        process. Treating the first as if it were the second overstates what documentation can do.
      </p>
      <p>
        Federal Rule of Evidence 901 addresses authentication and identification. Federal Rule of
        Civil Procedure 37 addresses preservation of electronically stored information. The Sedona
        Conference commentary on legal holds discusses preservation expectations. Those sources are
        included here as educational background. They do not mean a SterFlies deliverable is
        authenticated, admissible, or court-ready.
      </p>

      <h2>What organized records can actually help later reviewers do</h2>
      <p>
        They can reduce confusion about what was captured and when. They can keep originals
        distinguishable from derivatives. They can make processing notes available so a later
        reviewer does not have to guess how an output was created. They can also preserve spatial
        context, which is a different problem from custody. See{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        .
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/25f3b31b-cda2-471b-b1c6-e34b7283f52b_olagrs.png"
          alt="Site context that later reviewers may need to place"
          caption="Dates and location context help later reviewers place a record. They do not authenticate it."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772572525/Digital_security_at_the_workspace_i48cp0.png"
          alt="Controlled storage of digital documentation files"
          caption="Stable storage and version records reduce confusion about which file was delivered."
        />
      </ArticleFigureRow>
      <p>
        Heavy undocumented edits, inconsistent naming, and mixed original/derivative folders make
        later explanation harder. Consistency is useful because it is easier to describe. It is not
        a guarantee of integrity.
      </p>

      <h2>Why this is usually requested too late</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772565231/3606565c-d081-427a-af68-381048977316_tiuzbt.png"
          alt="Remote review of a documented site environment"
          caption="Remote review is useful when the original site is no longer available."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395841/687a8cb99a492e5e947b871e_2025_DroneDeploy_Jobsite_Conner_09_vvreij.png"
          alt="Stakeholders reviewing the same site record"
          caption="A shared record can reduce argument about what existed. It does not decide responsibility."
        />
      </ArticleFigureRow>
      <p>
        Documentation is often requested after the scene has already changed. That timing problem is
        covered in{" "}
        <Link href="/blog/you-dont-think-you-need-site-documentation-until-the-investigation-starts">
          why documentation is often requested after the investigation starts
        </Link>
        . Whether a later record can be used in a legal workflow is a separate question, discussed
        in{" "}
        <Link href="/blog/digital-evidence-3d-reality-capture-legal-disputes">
          digital site documentation in legal disputes
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
