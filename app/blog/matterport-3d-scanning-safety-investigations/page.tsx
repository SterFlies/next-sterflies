import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("matterport-3d-scanning-safety-investigations")

const references = [
  {
    href: "https://matterport.com/pro3",
    label:
      "Matterport. “Pro3 3D Camera.” Matterport, https://matterport.com/pro3. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://support.matterport.com/s/article/FAQ-Pro3-Camera?language=en_US",
    label:
      "Matterport. “FAQ: Pro3 Camera.” Matterport Support, https://support.matterport.com/s/article/FAQ-Pro3-Camera?language=en_US. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://www.nist.gov/programs-projects/terrestrial-laser-scanner-performance-evaluation-and-documentary-standard-forensic",
    label:
      "National Institute of Standards and Technology. “Terrestrial Laser Scanner Performance Evaluation and Documentary Standard for Forensic Practice.” NIST, https://www.nist.gov/programs-projects/terrestrial-laser-scanner-performance-evaluation-and-documentary-standard-forensic. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://www.osha.gov/sites/default/files/IncInvGuide4Empl_Dec2015.pdf",
    label:
      "Occupational Safety and Health Administration. Incident Investigations: A Guide for Employers. U.S. Department of Labor, 2015, https://www.osha.gov/sites/default/files/IncInvGuide4Empl_Dec2015.pdf. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://jespear.com/incident-investigations-a-problem-solving-process/",
    label:
      "Spear, Jerome E. “Incident Investigations: A Problem-Solving Process.” Spear & Lancaster, https://jespear.com/incident-investigations-a-problem-solving-process/. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://jespear.com/crane-riggings-safety/",
    label:
      "Spear & Lancaster. “Crane & Rigging.” https://jespear.com/crane-riggings-safety/. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://jespear.com/expert-witness-houston/",
    label:
      "Spear & Lancaster. “Expert Witness.” https://jespear.com/expert-witness-houston/. Accessed 16 Oct. 2026.",
  },
  {
    href: "https://jespear.com/projects/",
    label: "Spear & Lancaster. “Projects.” https://jespear.com/projects/. Accessed 16 Oct. 2026.",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="matterport-3d-scanning-safety-investigations"
      references={references}
      referencesTitle="Works Cited"
      wordCount={1750}
      cta={{
        heading: "Preserve the site for later review",
        body: "SterFlies can provide the spatial documentation that helps investigators return to a captured site and understand what was visible at the time of capture. Qualified professionals interpret that record alongside the rest of the evidence.",
      }}
    >
      <h2>Why a reliable site record matters</h2>
      <p>
        Incident scenes can change within hours. Equipment gets moved, barriers go up, access routes
        reopen, and repairs begin. By the time a safety consultant or engineer returns, the space
        may look nothing like it did during the initial visit. A good set of photographs helps, but
        photographs do not always make it clear how one part of a site connects to another. That is
        where 3D documentation can make a difference.
      </p>
      <p>
        Matterport and other 3D scanning systems let investigators preserve a navigable record of
        the location. Someone reviewing the case later can look around a room, follow an access
        route, or see how equipment was arranged when the scan was made. That added context is
        useful, especially for people who were not present during the field visit. A scan cannot
        tell investigators why something happened. It can, however, help them understand the
        physical setting in which it happened.
      </p>

      <h2>What Matterport actually captures</h2>
      <p>
        Not every system described as a “3D scanner” captures information the same way. Matterport
        is a platform for capturing spaces and turning that information into a digital walkthrough.
        The result depends partly on the device used. The Matterport Pro3, for instance, uses lidar
        to collect depth information and a separate imaging system to capture the appearance of the
        space. Scans taken at different positions are then aligned into a model that people can
        explore on a screen.
      </p>
      <p>
        It helps to distinguish the different kinds of data involved. Lidar records distances to
        visible surfaces and can produce a point cloud: a collection of points located in
        three-dimensional space. A mesh connects geometric surfaces, while panoramic photographs
        provide much of the visual detail people recognize in a walkthrough. Measurements and
        annotations are additional features applied to that record. These outputs serve different
        purposes. A model may look convincing without capturing every surface well enough for
        precise measurement.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059130/Matterport_Dollhouse_t2m33c.webp"
        alt="Three-dimensional Matterport dollhouse model showing the interior layout of a building."
        caption="Matterport dollhouse view illustrating how interior spaces can be represented in a navigable three-dimensional model."
      />
      <p>
        The Pro3 provides a useful example of why specifications need context. Matterport reports
        raw depth accuracy of ±20 millimeters at 10 meters under its stated test conditions
        (Matterport, “FAQ: Pro3 Camera”). That does not mean every dimension taken from a finished
        model will be accurate within 20 millimeters. Distance, scanning conditions, coverage, and
        processing all affect what can reasonably be measured. For an investigation, the team needs
        to know the difference.
      </p>

      <h2>Why spatial context matters to incident investigators</h2>
      <p>
        OSHA&apos;s incident investigation guidance recommends documenting a scene promptly, starting
        with the overall area and working toward the details (Occupational Safety and Health
        Administration). Three-dimensional capture fits naturally into that approach. It gives
        photographs, notes, and observations a shared spatial reference. A reviewer can see where a
        ladder stood in relation to a platform, or how a machine was positioned relative to a
        walkway, without having to piece the entire layout together from individual images.
      </p>
      <p>
        Think about a machinery incident in a crowded plant. Close-up photographs are still needed
        to show the guarding, controls, equipment labels, and any visible damage. A scan adds a
        wider view: the machine&apos;s location, the available walking space, nearby storage, and the
        surrounding equipment. Those details may be relevant when a qualified investigator considers
        access, visibility, or the sequence of work. The scan provides context, not a finding.
        Interviews, procedures, equipment records, direct inspection, and expert analysis remain
        necessary.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1769208705/Matterport_FloorplanSample_FLOOR1_sx2rvd.png"
        alt="Matterport-generated floor plan showing the arrangement of rooms and access points."
        caption="Matterport-generated floor plan illustrating room layouts, access routes, and spatial relationships within a documented building."
      />

      <h2>Applications in construction and industrial safety</h2>
      <p>
        Industrial sites present particular challenges. A confined space might be reached through
        several doors, a hatch, a platform, and a narrow passage beside fixed equipment. A series of
        aligned scans can preserve that route and show where openings and equipment were located at
        the time of capture. It cannot show whether the atmosphere was safe, whether energy sources
        were properly isolated, or whether permit requirements were met. Those questions call for
        other records, instruments, and technical review.
      </p>
      <p>
        Construction sites often need more than one capture method. Aerial photographs or drone
        mapping can show the larger property, roof areas, excavations, and staging locations.
        Ground-based scanning is better suited to hallways, stairs, mechanical spaces, and areas
        hidden beneath structures. Used together, these records help connect the overall site to
        specific work areas. Neither method captures everything, so the choice should follow the
        needs of the investigation rather than the appearance of the final model.
      </p>
      <p>
        The same approach can help with crane, rigging, and heavy-equipment matters. Scanning may
        preserve the positions of nearby structures, travel routes, obstructions, and surrounding
        machinery. Those relationships are useful to see, but they are only one part of a technical
        review. Lift geometry, load charts, rigging condition, ground support, manufacturer
        information, and engineering analysis still have to be considered separately. Spear &amp;
        Lancaster&apos;s work in crane and rigging safety, expert witness services, and incident
        investigations illustrates where a reliable site record can support a larger investigation
        (Spear &amp; Lancaster, “Crane &amp; Rigging”; “Expert Witness”).
      </p>

      <h2>Measurement accuracy is a project requirement, not an automatic feature</h2>
      <p>
        One of the easiest ways to misuse a 3D model is to assume that a displayed measurement must
        be exact. Scan positions, distance from the sensor, line of sight, reflective glass or
        metal, moving objects, and gaps in coverage can all affect the result. Thin features are a
        particular concern. A handrail may be clearly visible in a panoramic image while its
        geometry is only partially captured in the depth data.
      </p>
      <p>
        For that reason, the team should decide early whether the scan is primarily for orientation
        or whether certain dimensions will support technical opinions. If an investigation depends
        on a clearance, elevation, or distance between two components, those measurements should be
        planned before the scene is captured. Additional scan positions, independent tape or
        instrument measurements, control points, or a survey-grade method may be appropriate. NIST
        has published work on evaluating terrestrial laser scanner performance for forensic use,
        reinforcing the need to understand the method rather than treating every scan as equally
        reliable (National Institute of Standards and Technology).
      </p>
      <p>
        A manufacturer&apos;s accuracy figure is a useful starting point, but it is not proof that a
        particular site model meets that accuracy. The field record should identify the equipment
        used, the scanning and processing approach, any measurement checks, and the limitations
        found during review. That makes it much easier for another professional to decide what the
        model can and cannot support.
      </p>

      <h2>Scene changes, missing data, and the risk of false certainty</h2>
      <p>
        Timing matters as much as the scanning method. A scan records what was present when the team
        arrived. If a damaged machine has already been removed or a guardrail installed, the model
        documents those later conditions. It should never be described as though it shows the scene
        untouched at the moment of the incident. The record needs to include the capture date, known
        changes, and any areas the team could not access.
      </p>
      <p>
        There are also details a walkthrough may miss. Small fasteners, worn labels, cracks, damaged
        cables, and surfaces hidden behind equipment may need dedicated close-up photography or
        hands-on inspection. Shiny and transparent materials can be difficult to capture accurately.
        A digital model can give an impression of completeness even when some areas are missing.
        Investigators should be clear about which conditions were observed, which were measured, and
        which were inferred later.
      </p>

      <h2>A defensible capture and handoff workflow</h2>
      <p>
        A useful capture plan starts with the questions the investigation needs to answer. The field
        team should document the site&apos;s condition and any changes that occurred before arrival.
        Wide photographs and overall scans establish orientation. More focused scan positions can
        then cover access routes, machinery, openings, and other important features. While on site,
        the team should also collect close-up photographs, field notes, identifiers, and independent
        measurements wherever those details matter.
      </p>
      <p>
        The work does not end when the scanning is finished. Original files should be retained,
        along with the device information, capture dates, personnel, processing steps, and
        quality-control notes. The finished model needs a careful review for gaps, alignment
        problems, and features that should not be measured from the available data. A shareable
        walkthrough makes remote review convenient, but the team should also preserve the underlying
        records and explain any annotations or changes made during processing. Evidence retention
        and access should follow the requirements of the particular matter.
      </p>
      <figure className="article-figure">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          controlsList="nofullscreen"
          disablePictureInPicture
          className="h-auto w-full bg-[var(--color-surface)]"
          aria-label="Location-based visual documentation within a captured environment, with supporting imagery reviewed in spatial context."
        >
          <source
            src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1770754376/picture-context_qk2ysu.mp4"
            type="video/mp4"
          />
        </video>
        <figcaption className="article-caption">
          Example of location-based visual documentation within a captured environment, allowing
          supporting imagery and observations to be reviewed in spatial context.
        </figcaption>
      </figure>
      <p>
        Depending on the scope, the handoff might include panoramic views, a navigable model,
        point-cloud data when the platform supports it, site photographs, measured details,
        annotated images, and a short explanation of limitations. A link to a virtual tour can be
        part of that package. It should not be the only record retained.
      </p>

      <h2>Where spatial capture fits alongside expert analysis</h2>
      <p>
        Spear &amp; Lancaster describes incident investigation as a process of gathering facts,
        examining causes, and considering measures that could prevent a recurrence (Spear). A 3D
        site record belongs primarily in the fact-gathering stage. It helps reviewers understand the
        layout, locate observations, and communicate site conditions. It does not, by itself,
        establish the root cause or decide whether a standard was violated.
      </p>
      <p>
        That distinction becomes more important when several specialists are involved. A safety
        professional may be focused on guarding and work practices, an engineer on equipment or
        dimensions, and an industrial hygienist on exposure conditions. Attorneys and other
        reviewers may need to understand how the documented spaces connect. They can all benefit
        from the same scan, even though each is asking different questions and relying on different
        evidence to reach a conclusion.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1767905302/Screenshot_2026-01-08_144800_qrzymb.png"
        alt="Matterport interior scan with an information panel displaying environmental sampling data associated with a documented location."
        caption="Matterport interior scan displaying location-specific environmental information within a three-dimensional site record."
      />

      <h2>Preserving the site is the technical advantage</h2>
      <p>
        The real advantage of Matterport and 3D scanning is not the virtual tour itself. It is the
        opportunity to preserve a site in a form that people can revisit after conditions change.
        When that record is supported by photographs, measurements, field notes, and the original
        source files, it becomes much more useful than a standalone visualization.
      </p>
      <p>
        SterFlies can provide the spatial documentation that helps investigators return to the scene
        and understand what was visible at the time of capture. Spear &amp; Lancaster and other
        qualified professionals can then use that information alongside the rest of the evidence.
        Good scanning does not replace good investigative work. It gives that work a clearer picture
        of the place being examined.
      </p>
    </ArticleLayout>
  )
}
