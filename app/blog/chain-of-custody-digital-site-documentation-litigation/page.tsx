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
      <h2>Introduction</h2>
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
      <p>
        Traceability answers a narrower question than custody. The next section is about that
        narrower question: what a later reviewer can explain from an organized file.
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
      <p>
        In practice, explanation usually means a short account that a later reader can follow: which
        files are originals, which files were exported or cropped, what date the capture carries,
        and which location the capture was tied to. Processing notes, when they exist, say how an
        orthomosaic, a point cloud, or a walkthrough was produced. An orthomosaic is a plan-view
        photo map from overlapping images. A point cloud is a set of measured points describing
        surfaces. Those notes help a reviewer understand the product. They do not convert organized
        storage into a formal record of possession and transfer.
      </p>
      <p>
        Version records matter for the same reason. If a model is reprocessed, a later reader needs
        to know which export was delivered and which export was a working file. Consistent names and
        separate folders for originals and derivatives make that description possible. Inconsistent
        names and mixed folders force the reader to infer the history from file dates and software
        defaults. Inference is weaker than a written note, and a written note is still not a legal
        chain of custody.
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
      <p>
        The timing is structural. Repairs, material removal, and restricted access change the site
        while questions are still forming. A file created after those changes can document the site
        as it exists then. It cannot show the earlier condition if that condition was never
        captured. Organized storage of a late file still helps a reviewer explain what the late file
        is. It does not reach backward to a scene that was not recorded.
      </p>
      <p>
        Teams sometimes treat a later model as if it were the missing earlier record, because the
        model is spatial and the earlier photographs are not. Spatial structure does not supply a
        date the capture does not have. The useful question is what the file can still support: the
        appearance and layout at the time of capture, described plainly, with originals
        distinguishable from later exports. Whether any of that material is used in a legal workflow
        is a question for counsel and for the professionals responsible for the matter. This article
        does not answer it.
      </p>

      <h2>Conclusion</h2>
      <p>
        Digital site documentation can keep a dated view of a place that will not remain available.
        The practices that make that view easier to explain are ordinary: consistent names, capture
        dates, location context, processing notes, and storage that keeps originals separate from
        derivatives.
      </p>
      <p>
        Those practices are file traceability. A legal chain of custody is a formal account of
        possession, control, transfer, and disposition. SterFlies does not present its project files
        as that formal account. Naming, dates, metadata, and organized delivery can be described
        later. They do not, by themselves, meet a legal chain-of-custody process, and this article
        is not legal advice.
      </p>
      <p>
        What the organized record can do is narrower and still useful. A later reviewer can see what
        was captured, when it was captured, and how an output was produced, when those facts were
        written down. The reviewer can also see spatial context if the capture preserved it. None of
        that decides a dispute. It gives the people responsible for the dispute a clearer file to
        examine.
      </p>
    </ArticleLayout>
  )
}
