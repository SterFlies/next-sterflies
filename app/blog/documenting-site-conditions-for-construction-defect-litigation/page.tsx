import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "documenting-site-conditions-for-construction-defect-litigation"
)

export default function Page() {
  return (
    <ArticleLayout slug="documenting-site-conditions-for-construction-defect-litigation">
      <p>
        Construction reviews often turn on conditions that no longer exist by the time counsel or
        consultants are fully involved. Repairs start. Materials are covered or removed. The
        question later is not only what a report says, but what the site looked like at a given
        time.
      </p>
      <p>
        This article is about existing conditions, spatial relationships, visible progression, and
        documentation timing. SterFlies does not determine defect responsibility, design negligence,
        code compliance, causation, or damages. Those questions belong to qualified professionals.
      </p>

      <h2>Why timing matters more than more photographs later</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770058511/inspection-site-management-tablet-iStock-1405772906_cjmhpv.jpg"
        alt="Field documentation of construction conditions on site"
        caption="A dated site record can reduce ambiguity when repairs change what is visible."
      />
      <p>
        Water intrusion, envelope transitions, flashing, roofs, grading, and interior finishes are
        commonly altered as soon as corrective work begins. After that, later reviewers are looking
        at a different environment. Early documentation preserves what was visible and how assemblies
        related, not a conclusion about why a condition occurred.
      </p>
      <p>
        That timing problem is the same one described in{" "}
        <Link href="/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog">
          documenting site conditions before they are altered
        </Link>
        .
      </p>

      <h2>Moisture and interior conditions disappear quickly</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png"
        alt="Interior moisture and material conditions documented before remediation"
        caption="Moisture staining and affected materials can disappear once remediation begins."
      />
      <p>
        Interior documentation can preserve where staining, material damage, and sampling or
        observation locations sat relative to rooms and assemblies. It does not identify mold
        species, assign a moisture source, or recommend remediation. See{" "}
        <Link href="/blog/documenting-mold-assessments-and-supporting-safety-decisions">
          documenting mold assessments
        </Link>{" "}
        and the{" "}
        <Link href="/projects/iaq-mold-documentation">IAQ and mold documentation project</Link>.
      </p>

      <h2>Thermal patterns are context, not diagnosis</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770061622/moisture-in-block-wall-1_orig_g8g5e8.jpg"
        alt="Thermal image showing apparent temperature differences on a wall"
        caption="Thermal imagery records apparent surface-temperature differences. It does not diagnose a defect."
      />
      <p>
        Apparent temperature differences can be documented alongside RGB photographs so later
        reviewers can see location context. They do not, by themselves, establish moisture, air
        leakage, or envelope failure.
      </p>

      <h2>Exterior and interior records serve different later questions</h2>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059126/44c72aa1e68ac2bd74cfb212da6f835f_o8c6rc.webp"
        alt="Exterior site context used to locate construction conditions"
        caption="Exterior mapping can preserve roof, drainage, and envelope context at site scale."
      />
      <p>
        Aerial mapping can preserve roofs, grading, and envelope transitions. Interior reality
        capture can preserve room layout and finish conditions. Both are documentation methods
        described under{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        . Measurement usefulness depends on the capture plan. Neither method is a survey, and
        neither assigns responsibility.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059130/Matterport_Dollhouse_t2m33c.webp"
        alt="Interior spatial model of a documented building"
        caption="Interior capture can preserve layout so later reviewers can still orient themselves."
      />
      <ArticleCallout>
        A spatial record can support later expert review. It is not a legal conclusion, and it is
        not automatically evidence of a defect.
      </ArticleCallout>
      <p>
        For the broader method, see{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        . For later expert use of spatial records, see{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          why expert witnesses need more than photographs
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
