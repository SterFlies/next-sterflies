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
      <h2>Introduction</h2>
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
      <p>
        The same timing limit shows up indoors, where finishes and damaged materials are often the
        first things removed.
      </p>
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
      <p>
        What disappears is not only the stain. Remediation can remove the material, repaint the
        surface, and change the room enough that a later photograph of the same wall shows a
        different assembly. A record made beforehand can show which room, which wall, and which
        adjacent finish were involved, and where a sample or an observation was marked. That is
        location context for people who were not present. It does not identify a material, name a
        source of water, or recommend what should be done next.
      </p>
      <p>
        Existing-conditions documentation is the dated capture of that setting: the rooms, the
        visible materials, and the relationships among them at a visit. Reality capture is the
        coordinated photography or scanning that makes the setting navigable later, rather than a
        stack of unrelated frames. Both are records of appearance and layout. Qualified
        professionals still decide what the conditions mean for a construction question.
      </p>

      <h2>Thermal patterns are context, not diagnosis</h2>
      <p>
        Temperature imagery is sometimes added to that record. It has a narrower meaning than a
        visible photograph.
      </p>
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
      <p>
        A thermal frame is easier to misuse when it travels alone. Apparent temperature differences
        can come from material changes, reflections, airflow, residual heat, or moisture, and the
        image itself does not sort those possibilities. Pairing the frame with a visible photograph,
        and placing both in the room or on the elevation where they were taken, lets a later reader
        see the surface and its surroundings. The pair supports review. It does not identify a
        failure mechanism.
      </p>
      <p>
        The same limit applies to radiometric files, which store a temperature value for each pixel.
        Those values are useful to a qualified reviewer who understands the camera, the assumptions
        used to interpret the image, and the conditions at capture. They are not, by themselves, a
        finding about the wall. SterFlies can preserve the frame and its location. Interpretation
        stays with the reviewer.
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
      <p>
        Exterior and interior products answer different location questions. An orthomosaic, a
        plan-view photo map from overlapping aerial images, can show roof geometry, drainage paths,
        and how the building sits on the grade at the time of flight. Photogrammetry is the method
        that builds that map, and sometimes a point cloud or mesh, from the overlapping photographs.
        Interior reality capture can show room layout, openings, and finish conditions that the
        aerial view cannot see. Using both gives a path from the site to the room. It does not
        assign a condition to a trade, a design, or a specification.
      </p>
      <p>
        Measurement questions should stay tied to the capture. A reviewer who needs a dimension
        should know whether the record was built for visualization, for relative comparison, or with
        the control the question requires. This article does not treat any of these products as a
        property survey. It treats them as dated visual and spatial records that a qualified
        reviewer can inspect after the site has changed.
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

      <h2>Conclusion</h2>
      <p>
        Construction reviews that start after repairs are looking at a later site. Dated exterior
        maps, interior captures, and thermal frames paired with visible photographs can preserve
        what was visible, and where it sat, during an earlier visit.
      </p>
      <p>
        Those records are existing-conditions documentation. They hold layout, adjacency, and
        appearance. They do not determine whether a condition is a defect, whether a design or a
        construction step was adequate, or what a repair should have been.
      </p>
      <p>
        SterFlies captures and organizes the site record. Counsel and qualified technical reviewers
        use it, if they use it, for their own questions. The documentation does not answer those
        questions for them.
      </p>
    </ArticleLayout>
  )
}
