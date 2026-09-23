import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("construction-progress-monitoring-best-practices")

export default function Page() {
  return (
    <ArticleLayout slug="construction-progress-monitoring-best-practices" wordCount={980}>
      <h2>Introduction</h2>
      <p>
        Construction sites change continuously. Crews rotate, materials move, and the visible state
        of the work is different from one week to the next. Progress documentation is useful when
        later reviewers can still see what existed at a given interval—not only what someone
        remembered or photographed from convenient ground viewpoints.
      </p>
      <p>
        This article is about repeatable site documentation: consistent capture intervals, a shared
        visual record, and later comparison. It is not a promise of fewer site visits, faster
        schedules, or project savings.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154106/Screenshot_2026-02-03_152748_jpawyn.png"
          alt="Orthomosaic used as a dated construction progress record"
          caption="A mapped record can show the whole site at one interval."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770154154/Screenshot_2026-02-03_152901_mwqym5.png"
          alt="Later orthomosaic of the same construction site"
          caption="A later capture of the same site supports visual comparison."
        />
      </ArticleFigureRow>
      <p>
        The shared frame in those records is a mapped one. Photogrammetry reconstructs the visible
        site from overlapping photographs. An orthomosaic is the scaled image produced from that
        reconstruction, so the exterior can be viewed with more uniform scale than in a single
        aerial still. Reality capture is the practice of keeping that image, and the frames behind
        it, as a dated record. A point cloud—the three-dimensional positions estimated from the
        same photographs—can accompany the map when the scope includes a surface or a model.
      </p>
      <p>
        This article explains how to plan those repeats so later comparison is meaningful: a stable
        interval, similar coverage, and a record each party can look at. It is for owners,
        contractors, consultants, insurers, and safety staff who review progress without having
        stood at every viewpoint. It does not decide percent complete, payment, delay, or who was
        responsible for a change in the work.
      </p>

      <h2>Why a shared record matters</h2>
      <p>
        Unmatched ground photographs are often clear and still hard to assemble into one site.
      </p>
      <p>
        Owners, contractors, consultants, and other stakeholders often need the same view of what
        was complete, what was in progress, and what conditions existed on a given date. Ground
        photographs and written notes remain useful. They are also easy to take from different
        angles, at different times, with different assumptions about what mattered.
      </p>
      <p>
        A repeatable spatial record gives those fragments a shared frame. It does not, by itself,
        resolve a commercial dispute or prove delay.
      </p>
      <p>
        A site layout makes the difference concrete. On one date the orthomosaic can show the pad,
        the haul road, the material laydown, and which part of a building footprint was still open
        ground. Ground photographs of a foundation or of placed material still carry the close
        view. The map tells a later reader which of those photographs belongs to which part of the
        site, and whether that part had changed by the next interval. Safety staff and industrial
        hygienists can use the same frame to see where work areas, access, and stockpiles sat on
        that day. The frame shows the arrangement. It does not evaluate the work.
      </p>

      <h2>Consistent intervals beat a single flyover</h2>
      <p>
        A shared frame on one day is a snapshot. Progress is the comparison among snapshots taken
        under a similar plan.
      </p>
      <p>
        One capture can document a moment. A series of captures, taken with a similar plan, can
        document change. The useful variables are interval and consistency: similar coverage,
        similar orientation, and a date attached to each record. Weekly, biweekly, or monthly
        intervals are project decisions, not a required product.
      </p>
      <ArticleCallout>
        The value is a comparable record over time, not a single aerial image.
      </ArticleCallout>
      <p>
        Consistency is practical. The same general extent, a similar altitude, and a similar time
        of day reduce the chance that an apparent change is only a change in crop, shadow, or
        pixel size. Ground sample distance (GSD) is the ground width of one pixel. If one visit is
        flown much higher than the next, small features can appear or vanish because the pixel
        changed, not because the work did. Similar overlap keeps the same edges reconstructable.
        The date on the file should be the capture date, so a weekly series and a monthly series
        are not mixed without notice.
      </p>
      <p>
        The interval is a project decision because sites do not move at one speed. Earthwork weeks
        may justify a shorter repeat than a stretch of interior work the aircraft cannot see.
        Stating the intended interval at the start lets every party know which gaps are by design.
        A missed visit is part of the record: the series has a hole, and the hole should stay
        visible rather than being filled with an undated photograph.
      </p>

      <h2>What later comparison can show</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155712/drone-before-after-5-2023_qt9jng.jpg"
          alt="Earlier dated site record used for progress comparison"
          caption="An earlier interval preserves what the site looked like before later work."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770155706/drone-before-after-5-2023_2_mqqwro.jpg"
          alt="Later dated site record of the same area"
          caption="A later interval lets teams compare the same area without reconstructing it from memory."
        />
      </ArticleFigureRow>
      <p>
        Depending on scope, later reviewers can see grading extents, pad development, material
        placement, and enclosure progress.{" "}
        <Link href="/blog/orthomosaic_blog">Orthomosaic maps</Link> and{" "}
        <Link href="/blog/3d_model">3D models</Link> are common outputs when the capture is planned
        for those products. Measurement usefulness still depends on geometry, processing, and
        control.
      </p>
      <p>
        A larger example of site-scale mapping is the{" "}
        <Link href="/projects/65acresite">65-acre site mapping project</Link>. Mapping methods are
        described under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>.
      </p>
      <p>
        The pair of records above is an example of comparison for one area: an earlier state and a
        later state, held so a reviewer can look at both. What can be read, when the capture
        supports it, includes the spread of grading, the growth of a pad, material in a laydown,
        and the point at which a structure begins to close in. These are observations about the
        visible exterior. They are not a percent-complete figure. Percent complete depends on the
        contract and on work the camera may never have seen.
      </p>
      <p>
        When measurement is in scope, it comes from the same geometry that builds the map: the
        point cloud and the surface derived from it, placed with the control the plan used.
        Real-time kinematic (RTK) positioning corrects camera locations during flight and can help
        successive maps sit in one coordinate system. A reviewer who needs a checked elevation or a
        pay quantity still needs the method specified for that need. The project link above
        illustrates site-scale mapping as a shared record. This article does not report quantities
        or outcomes from it.
      </p>

      <h2>Limitations</h2>
      <p>
        Aerial progress records show the exterior that was open to the camera. They do not show
        interior fit-out, in-wall rough-in, buried utilities, or activity under a deck or a roof.
        A building can advance for weeks in ways the next orthomosaic will not display. Treating
        the aerial series as the whole job overstates what the photographs contain.
      </p>
      <p>
        The series also does not assign the reason for a gap in the work or judge its quality. A
        later map can show that a pad was incomplete on a date. It cannot show why, or whether the
        work met a specification. Weather, access, and sequencing sit outside the image. A safety
        observation drawn from the map has the same limit: the arrangement is documented, and the
        judgment about that arrangement belongs to the person qualified to make it.
      </p>

      <h2>Conclusion</h2>
      <p>
        Construction progress documentation, in the sense used here, is a series of comparable
        exterior records. Photogrammetry and the orthomosaic give each date a shared layout. A
        stable interval and a stable capture plan are what let the next date be read against the
        last. Ground photographs remain the close view. The map is what keeps them oriented.
      </p>
      <p>
        Owners, contractors, consultants, insurers, and safety reviewers can use that series to see
        grading, pads, material, and enclosure as they appeared, without reconstructing the site
        from memory. A model from the same frames can add shape when the scope includes it. The
        comparison stays visual and geometric, and it stays tied to the dates that were actually
        flown.
      </p>
      <p>
        The record is not a survey, not a diagnosis, not a finding of causation, and not inventory
        control. It does not establish delay or percent complete. It preserves the visible site at
        stated intervals so the people responsible for those determinations can look at the same
        dates.
      </p>
    </ArticleLayout>
  )
}
