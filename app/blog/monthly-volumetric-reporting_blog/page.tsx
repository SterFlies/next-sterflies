import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("monthly-volumetric-reporting_blog")

export default function Page() {
  return (
    <ArticleLayout slug="monthly-volumetric-reporting_blog" wordCount={760}>
      <h2>Introduction</h2>
      <p>
        Stockpiles and earthwork change between site visits. A single annual measurement can still
        be useful as a snapshot. It cannot show what happened in the months between captures.
      </p>
      <p>
        Recurring documentation—monthly or at another agreed interval—creates a series of dated
        material records. That is a documentation practice. It is not an automatic financial-control
        system, and it does not guarantee inventory accuracy, savings, or operational optimization.
      </p>
      <p>
        Each record in the series is photogrammetric. Overlapping photographs are reconstructed
        into a visible surface, and that surface is compared with a baseline or with an earlier
        surface. A point cloud is the set of three-dimensional positions behind the surface.
        Reality capture, here, means repeating that reconstruction on a schedule so the dates
        themselves are part of the record.
      </p>
      <p>
        This article explains what a monthly or other repeating series can show about stockpiles
        and earthwork, and which consistencies the comparison depends on. It does not decide
        inventory balances, shrinkage, payment, or whether a change was authorized.
      </p>

      <h2>What a recurring record can show</h2>
      <p>
        A series is usable when each date can be set beside the others under a similar plan.
      </p>
      <p>
        Each capture documents the visible pile or surface at that interval. Compared with the
        previous capture, later reviewers can see whether a stockpile grew, shrank, or changed
        shape. The comparison is only as useful as the capture plan: similar coverage, documented
        baselines, and surfaces that were actually visible.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755283328/v1_nfpjos.png"
        alt="Example comparison of recurring stockpile documentation intervals"
        caption="A later interval is useful when it can be compared to an earlier record of the same area."
      />
      <p>
        Growth, shrinkage, and a change in shape mean the later surface differs from the earlier
        one inside the area that was compared. They do not name the loads, the tickets, or the
        weather in between. A pile can look smaller because material was removed, because it
        settled, because the toe was cleaned up, or because the second flight saw the edge
        differently. The record supports the question of what the visible surface did. It does not
        select the operational explanation.
      </p>
      <p>
        The capture plan is what makes the comparison fair. Similar altitude keeps ground sample
        distance (GSD)—the ground width of one pixel—in a similar range, so crests and toes are
        resolved in a comparable way. Similar extents keep the comparison area from quietly adding
        or dropping ground. A written baseline, held constant or explicitly revised, keeps the
        subtraction the same kind of subtraction. When those items drift, the pictures may still
        be informative, and the volume difference becomes harder to separate from the method.
      </p>

      <h2>Why interval matters more than a year-end number</h2>
      <p>
        A comparable pair of dates shows two states. The interval is what the series was built to
        preserve between them.
      </p>
      <p>
        Material is loaded, delivered, and weathered throughout the year. An annual figure cannot
        locate when a change occurred. A monthly or other regular interval keeps a dated trail. That
        trail can support later discussion. It does not, by itself, prove shrinkage, theft, or
        accounting error.
      </p>
      <ArticleCallout>
        Recurring captures document change over time. They do not replace scale tickets, surveys, or
        financial controls.
      </ArticleCallout>
      <p>
        Monthly is common because many material sites already close records on a month, and because
        earthwork can move enough in that time to be visible. It is not a required frequency. A
        fast excavation may need a shorter interval if the question is what the ground looked like
        before the next lift. A stable stockpile may be documented less often when the agreement
        says so. The interval should match how quickly the surface of interest changes, and it
        should be stated before the series starts so later dates are not chosen only after a
        question about a particular week.
      </p>
      <p>
        The interval also cannot fill the days it skips. Loading, delivery, rain, and regrading
        between flights are absent from both surfaces. A dated trail shows the state at each visit
        and can narrow when a change became visible. It cannot show the hour the change happened,
        or whether it followed a ticket. Scale tickets, surveys, and financial controls remain the
        records those questions use. The aerial series is the geometric companion to them.
      </p>

      <h2>How this relates to a single volumetric capture</h2>
      <p>
        Repeating the work does not create a new measurement principle. It creates a sequence of
        the same principle.
      </p>
      <p>
        The underlying method is the same surface-comparison process described in{" "}
        <Link href="/blog/volumetric_blog">volumetric data from photogrammetric surfaces</Link>.
        Repeating it is a scheduling and consistency decision. Construction sites that need visual
        progress records rather than volumes are covered in{" "}
        <Link href="/blog/construction-progress-monitoring-best-practices">
          construction progress documentation
        </Link>
        .
      </p>
      <p>
        Accuracy still depends on geometry, visibility, processing, control, and site conditions.
        Service scope is under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>.
      </p>
      <p>
        Each visit still produces a point cloud and a surface through those points. Real-time
        kinematic (RTK) positioning, if it is used on one visit, has to be understood on the next.
        Mixing a corrected flight with an uncorrected one, or changing the coordinate basis without
        saying so, can shift the surfaces before any material has moved. Processing settings
        deserve the same note. A later reviewer should be able to see that coverage, control, and
        the comparison area were held steady or were deliberately changed. Consistency is a
        documentation decision. Shared method does not mean the two volumes share an error.
      </p>

      <h2>Limitations</h2>
      <p>
        Recurring photogrammetric volumes remain estimates of visible surfaces. They do not measure
        tons, moisture, or material under vegetation or equipment. A partially flown pile, a
        different footprint, or a baseline rebuilt without a note will look like a material change.
        The practical limit is the difference between a series someone can compare and a set of
        unrelated snapshots that happen to be dated.
      </p>
      <p>
        The series does not supervise the site. It does not track individual loads, authorize
        hauling, or reconcile an accounting system. A smaller number on a later map is a geometric
        observation about the visible surface. An explanation of loss, error, or the reason for the
        change requires other records and a person qualified to read them.
      </p>

      <h2>Conclusion</h2>
      <p>
        A single capture is a snapshot of visible material. A recurring capture is a row of
        snapshots made so the row can be read in order. The useful part is the date together with
        the sameness of the method: coverage, ground sample distance, control, baseline, and the
        area compared.
      </p>
      <p>
        Under those conditions, reviewers can see whether a stockpile or an earthwork surface grew,
        shrank, or changed shape between visits, and they can point to the interval in which the
        change became visible. Tickets, surveys, and site records still describe the operations the
        flights did not witness. An orthomosaic from each visit lets those reviewers see the area
        the volume refers to.
      </p>
      <p>
        The series is not a survey, not a diagnosis, not a finding of causation, and not inventory
        control. It is a dated geometric record. Inventory and payment decisions can use it as
        context and keep their own controls in force.
      </p>
    </ArticleLayout>
  )
}
