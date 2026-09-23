import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "rebuilding-reality-defensible-digital-site-environments"
)

export default function Page() {
  return (
    <ArticleLayout slug="rebuilding-reality-defensible-digital-site-environments">
      <h2>Introduction</h2>
      <p>
        Isolated photographs can show a detail without showing how that detail sits in the site. A
        written description can explain what someone observed without letting another person check
        the same surroundings. Over time, later reviewers often assemble different mental models of
        the same place.
      </p>
      <p>
        Coordinated exterior and interior capture can produce a navigable digital site record:
        layout, adjacency, and visual context from a dated capture window. That record is reviewable.
        It is not a legal guarantee, a single source of spatial truth, or automatic evidence.
      </p>

      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003281/St_Elizabeth_church_image_courtesy_of_Sebastian_Mattes_Schwarzwalddrohne_web-1024x589_heytsh.png"
          alt="Exterior reconstruction used to preserve site-wide orientation"
          caption="Exterior reconstruction can preserve orientation at property scale."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771003387/Streamlining-Warehouse-Operations-with-LiDAR-Inventory-Management-1_kvsgeg.jpg"
          alt="Interior spatial record showing facility relationships"
          caption="A unified record can keep room-to-room relationships available after the site changes."
        />
      </ArticleFigureRow>

      <h2>Why fragments are not enough</h2>
      <p>
        Traditional documentation often focuses on isolated details: a crack, a stain, a roof seam,
        a wall cavity. Those records can be sharp and still fail to answer later questions. Where
        was this captured. What sat next to it. What was above or below it. How did it relate to
        drainage, access, or mechanical systems.
      </p>
      <p>
        A reviewable record is not “more photographs.” It is a capture organized so a later reviewer
        can orient themselves without relying on the person who was there to narrate what matters.
        That is the difference described in{" "}
        <Link href="/blog/what-is-forensic-site-documentation">
          what forensic site documentation is
        </Link>
        .
      </p>
      <p>
        Exterior capture is one place that shared orientation can come from, especially when the
        questions involve roofs, drainage, or how buildings sit relative to one another.
      </p>

      <h2>Exterior reconstruction preserves context at scale</h2>
      <p>
        Large properties are difficult to understand from ground-level frames alone. Roof geometry,
        drainage, penetrations, grading, and building proximity often explain later interior
        questions. Aerial capture and photogrammetric reconstruction can preserve those
        relationships as a continuous exterior dataset.
      </p>
      <p>
        The purpose is orientation and later comparison, not a photogenic overview. How closely
        later measurements match field conditions depends on capture method, control, and
        processing. See{" "}
        <Link href="/blog/3d_model">interactive 3D models</Link> and{" "}
        <Link href="/blog/orthomosaic_blog">orthomosaic mapping</Link>.
      </p>
      <p>
        At property scale, the useful products are usually an orthomosaic and, when the scope
        includes it, a point cloud or mesh. An orthomosaic is a plan-view photo map assembled from
        overlapping aerial images so roofs, grades, and building outlines can be viewed together.
        Photogrammetry is the calculation that derives those shapes from the photographs. A point
        cloud is the related set of measured points in space. These products support orientation and
        later comparison within the limits of overlap, control, and processing. They are reviewable
        records of a flight or a scan. They are not a property survey, and they do not establish a
        single correct model of the site.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1771004218/loop_qnwmfw.mp4"
        alt="Navigable digital reconstruction of a documented site"
        caption="A preserved site environment can remain available after physical conditions change."
        video
      />

      <h2>Interior capture keeps layout reviewable</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/matterport-pro3-feature-4_pcah4j.webp"
          alt="Interior scan capturing room layout and transitions"
          caption="Interior capture can preserve layout, adjacency, and transitions."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004471/c4659781721ee58eaaf23acfdc34e6f232fe68ec-1248x652_bnkbx7.avif"
          alt="Navigable interior view of a documented commercial space"
          caption="A walkthrough lets later reviewers move through the space without reconstructing it from notes."
        />
      </ArticleFigureRow>
      <p>
        Interior environments lose orientation quickly when rooms connect, hallways branch, and
        systems run above ceilings. A navigable interior record lets attorneys, consultants, and
        other qualified reviewers look at the same layout later. It does not replace a site visit
        when one is still possible, and it does not interpret conditions.
      </p>
      <p>
        Layout questions in interiors are often about connection rather than about a single room.
        Which rooms share a wall. Where a corridor turns. Which ceiling holds the equipment that
        serves the space below. A navigable capture keeps those connections available when the
        finishes change or when access is later limited. Photographs of individual rooms remain
        useful for detail. They do not, as a set of separate files, let a reviewer travel the
        connection without a guide.
      </p>
      <p>
        Reality capture is the broader name for this kind of record: photographs or scans organized
        so the place can be revisited. Existing-conditions documentation is the use of that record
        to preserve a site as it was found on a stated date. Both terms describe documentation.
        Neither term means the model is complete, current after the visit, or a substitute for a
        walkthrough that can still be done in person.
      </p>

      <h2>Thermal imagery needs location context</h2>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004552/wall_insulation_missing_lvh1hw.jpg"
          alt="Thermal image showing an apparent temperature difference"
          caption="Infrared can show apparent temperature differences that visible imagery does not."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1771004560/6a99bfc9f787202f7d465678770f076bcb9ff5e0_ofmnbw.jpg"
          alt="Thermal capture shown with surrounding location context"
          caption="A thermal observation is easier to review when it is tied to a location."
        />
      </ArticleFigureRow>
      <p>
        Apparent temperature differences are signals, not diagnoses. They become more useful when
        tied to RGB photographs and a spatial location. They do not establish moisture, insulation
        failure, or electrical fault by themselves.{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          Later qualified review
        </Link>{" "}
        still has to interpret them.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1769104022/virtualtour_dq3b1w.mp4"
        alt="Remote walkthrough of a preserved interior environment"
        caption="Remote review can reduce repeat visits when the original site is no longer available."
        video
      />
      <ArticleCallout>
        A digital site record can be navigated and reviewed later. It is not a digital twin in the
        operational sense, and it is not automatically evidence.
      </ArticleCallout>
      <p>
        Location context can be as simple as a paired visible photograph and as structured as a
        marker in a walkthrough or on a plan. The point is that a later reader can find the surface
        again. Apparent temperature differences remain signals to be interpreted by a qualified
        reviewer, with whatever notes exist about conditions at the time of capture. The imagery
        does not identify a material problem by itself, and attaching it to a model does not change
        that limit.
      </p>
      <p>
        The remote walkthrough shown with this section is the same idea applied to the whole
        interior. It lets people who were not on site see the preserved environment. It is
        reviewable. It is not a live feed of the building, and it does not update itself when the
        building changes.
      </p>

      <h2>Conclusion</h2>
      <p>
        A digital site environment, in the sense used here, is a coordinated record of exterior and
        interior conditions from a dated capture. It is built so later reviewers can share one view
        of layout, adjacency, and visual context instead of assembling separate mental models from
        fragments.
      </p>
      <p>
        The record is reviewable. Reviewers can look at an orthomosaic, a point cloud, an interior
        walkthrough, or a thermal frame tied to a location, and they can see the limits of each
        product in the capture notes. The record does not interpret a stain, a temperature pattern,
        or a crack. It also does not stand in for a site visit that is still possible.
      </p>
      <p>
        SterFlies assembles that documentation so the site can be examined after physical conditions
        change. Qualified reviewers, including attorneys’ experts and other technical professionals,
        decide what the captured conditions mean for their own questions.
      </p>
    </ArticleLayout>
  )
}
