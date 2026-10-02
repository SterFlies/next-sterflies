import Link from "next/link"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "documenting-crane-rigging-incident-sites-reality-capture",
)

const references = [
  {
    href: "https://jespear.com/crane-riggings-safety/",
    label: "Spear & Lancaster. “Crane & Rigging.”",
  },
  {
    href: "https://jespear.com/expert-witness-houston/",
    label: "Spear & Lancaster. “Expert Witness.”",
  },
  {
    href: "https://jespear.com/projects/",
    label: "Spear & Lancaster. “Projects.”",
  },
  {
    href: "https://www.osha.gov/incident-investigation",
    label: "Occupational Safety and Health Administration. “Incident Investigation.”",
  },
  {
    href: "https://www.osha.gov/sites/default/files/IncInvGuide4Empl_Dec2015.pdf",
    label:
      "Occupational Safety and Health Administration. “Incident Investigations: A Guide for Employers.”",
  },
  {
    href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926SubpartCC",
    label:
      "Occupational Safety and Health Administration. 29 CFR 1926 Subpart CC, “Cranes and Derricks in Construction.”",
  },
  {
    href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1402",
    label:
      "Occupational Safety and Health Administration. 29 CFR 1926.1402, “Ground Conditions.”",
  },
  {
    href: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1408",
    label:
      "Occupational Safety and Health Administration. 29 CFR 1926.1408, “Power Line Safety, Equipment Operations.”",
  },
  {
    href: "https://www.faro.com/en/Resource-Library/Whitepaper/laser-scanning-for-forensic-investigations",
    label: "FARO. “Laser Scanning for Forensic Investigations.”",
  },
  {
    href: "https://www.faro.com/en/Resource-Library/WebinarPresentation-Recording/Using-drones-and-3D-laser-scanners",
    label:
      "FARO. “Using Drones and 3D Laser Scanners to Quickly, Accurately Document Crash Scenes.”",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="documenting-crane-rigging-incident-sites-reality-capture"
      references={references}
      referencesTitle="References"
      wordCount={1750}
      cta={{
        heading: "Before the site changes",
        body: "SterFlies can document crane setup, support conditions, work zone geometry, and the surrounding site so qualified professionals have a clearer record to review. Technical conclusions remain with the professionals responsible for that analysis.",
      }}
    >
      <h2>Introduction</h2>
      <p>
        A crane incident is rarely just a crane problem. The equipment may be the center of
        attention, but the surrounding site often matters just as much. Ground conditions, support
        points, nearby structures, access routes, overhead utilities, the load area, temporary work
        features, and the position of other equipment can all become part of the technical review.
      </p>
      <p>
        That is where ordinary photography can come up short. A close photograph can show a damaged
        component in excellent detail while giving very little sense of where it was located within
        the larger work area. Once equipment is moved, debris is cleared, or the site returns to
        normal operations, that missing context can be difficult to rebuild.
      </p>
      <p>
        <Link href="/blog/remote-site-review-spatial-context-reality-capture">Reality capture</Link>{" "}
        gives the field team another way to preserve the scene. Aerial imagery, ground photography,
        photogrammetry, point clouds, terrestrial capture, measurements, and annotated views can be
        used together when the project calls for them. The point is not to use a 3D model to decide
        why an incident happened. The point is to preserve what was physically there so the right
        expert has more to review later.
      </p>
      <p>
        For crane and rigging work, that distinction is important. Technical conclusions about crane
        setup, rigging, ground support, operating practices, OSHA requirements, engineering, or
        causation belong with the qualified professionals responsible for that analysis. The
        documentation should give them a better record to work from.
      </p>

      <h2>Why crane incident scenes are hard to document</h2>
      <p>
        The working area around a crane can cover far more space than the damaged equipment itself.
        Depending on the project, the scene may include the carrier or crawler base, outriggers,
        mats, cribbing, counterweights, boom position, rigging, a suspended or dropped load, nearby
        structures, slopes, trenches, utility lines, laydown areas, access roads, barricades, and
        other equipment.
      </p>
      <p>
        Traditional photographs are still essential. They preserve surface detail, labels, connection
        points, damage, and viewpoints that a model may not capture well. The problem is that
        photographs are normally collected as separate frames. A reviewer who was not at the site
        may later have to work out where each image was taken and how one feature relates to
        another.
      </p>
      <p>
        OSHA incident investigation guidance recommends documenting the scene promptly with
        photographs or video, measurements, and the location of important evidence because
        conditions can change. Reality capture fits into that same field documentation process. It
        does not replace basic scene photography or measurements. It gives those records more
        spatial context.
      </p>

      <h2>Start with the entire work area</h2>
      <p>
        After a serious equipment incident, it is natural to focus on what looks damaged. A
        collapsed boom, failed rigging component, overturned crane, or dropped load will immediately
        draw attention. Those details need to be documented, but starting too close can leave out
        the part of the scene that explains where everything sat in relation to everything else.
      </p>
      <p>
        A useful record starts wide. The first pass should establish the crane and work area within
        the larger site. That may include the structure involved in the lift, access roads, staging
        areas, adjacent equipment, excavations, slopes, overhead lines, property limits, and the
        areas used to set up or move equipment.
      </p>
      <p>
        <Link href="/blog/drone-mapping-forensic-site-investigations">Aerial imagery</Link> is useful
        here because it can show relationships that are difficult to see from ground level. When the
        site and flight conditions allow it, overlapping images can be processed into an orthomosaic
        or 3D model. Ground photography then fills in the details that cannot be seen from above.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790887489/article1_visual_2_site_context_ivv9hp.png"
        alt="Illustrative crane site documentation graphic showing crane position, support area, lift area, and site access"
        caption="Illustrative example showing how crane position, support areas, lift areas, and site access can be documented within the larger work area."
      />

      <h2>Crane setup and support conditions</h2>
      <p>
        The relationship between the crane and the surface supporting it deserves its own
        documentation. OSHA 29 CFR 1926.1402 addresses ground conditions for cranes in construction,
        including the ability of the ground to support the equipment and the use of supporting
        materials such as mats, blocking, and cribbing.
      </p>
      <p>
        A documentation technician should not turn those observations into a compliance or causation
        opinion unless that person is qualified and retained to do so. What can be done is to
        preserve the visible condition of the support area before it changes.
      </p>
      <p>Depending on the scene, the field record may include:</p>
      <ul>
        <li>overall crane position and orientation</li>
        <li>outrigger or crawler locations</li>
        <li>visible mats, cribbing, blocking, or other support materials</li>
        <li>ground surface around each support point</li>
        <li>visible slopes or grade changes</li>
        <li>nearby trenches, excavations, voids, or disturbed soil</li>
        <li>standing water or visible drainage conditions</li>
        <li>the relationship between the crane and nearby structures or work areas</li>
      </ul>

      <h2>Work zone geometry and nearby hazards</h2>
      <p>
        The work zone can change quickly after an incident. Equipment may be recovered, loads
        removed, barricades moved, damaged material cleared, and access restored. A mapped site
        record can preserve the visible arrangement before those changes happen.
      </p>
      <p>
        That can be useful when a reviewer needs to understand distances and relationships later,
        such as the crane location relative to a structure, the apparent location of a load, the
        space available around the equipment, or the position of temporary site features.
      </p>
      <p>
        Power line proximity is one example. OSHA 29 CFR 1926.1408 requires employers to identify the
        work zone and evaluate whether equipment, load lines, loads, rigging, or lifting accessories
        could approach power lines within specified distances. A reality capture model does not make
        that regulatory determination. It can preserve the visible location of the equipment, work
        area, and overhead utilities when those features can be documented safely.
      </p>

      <h2>Document the load area, not just the final position</h2>
      <p>
        A crane incident may raise questions about where a load started, where it was intended to
        go, what was between those locations, and how the site limited movement. Those are questions
        for the technical team. They are also a reason to capture more than the final resting
        position of the crane or load.
      </p>
      <p>
        When visible and within the approved scope, useful documentation may include the load
        location, staging area, destination area, nearby structures, obstructions, travel paths,
        access limitations, and the larger area around the lift. Seeing those features together can
        make the site easier to understand than reviewing a folder of unrelated photographs.
      </p>

      <h2>Aerial and ground capture should work together</h2>
      <p>
        No single capture method sees everything. A drone can show the overall site but may not
        clearly document areas beneath equipment, labels, connection points, rigging details, or
        surfaces blocked by structures. Ground photography can capture those details but may not
        explain where each photograph belongs within the larger scene.
      </p>
      <p>
        For that reason, the capture plan should be built around the questions the project may need
        to answer later.{" "}
        <Link href="/services/mapping">Aerial photogrammetry</Link> can establish site layout.
        Ground photography can preserve details and surface conditions. Terrestrial reality capture
        can help with complex areas at closer range. Conventional field measurements may still be
        the right choice for critical dimensions.
      </p>
      <p>
        The useful part is being able to move from the wide view down to the detail. A reviewer can
        first see the overall work area, then the crane support area, then the specific photograph
        or measurement tied to a particular feature.
      </p>

      <h2>What the documentation package may include</h2>
      <p>
        Not every scene needs every deliverable. A large outdoor site may benefit from aerial
        mapping, while a compact industrial setting may depend more on ground based photography and
        terrestrial capture. The scope should be decided before field work when possible.
      </p>
      <p>A crane incident documentation package may include:</p>
      <ul>
        <li>an orthomosaic for overall site orientation</li>
        <li>
          a 3D model or{" "}
          <Link href="/blog/point-clouds-site-documentation">point cloud</Link> for spatial review
        </li>
        <li>high resolution aerial and ground photographs</li>
        <li>close imagery of equipment, support points, rigging, and surrounding surfaces</li>
        <li>annotated site views identifying documented locations</li>
        <li>selected measurements when the capture was planned for measurement</li>
        <li>
          360 imagery or terrestrial reality capture, such as Matterport, when moving through the
          site helps explain the layout
        </li>
        <li>original source files and organized supporting records</li>
        <li>capture dates, file naming, and processing notes</li>
      </ul>

      <h2>Measurements need to be planned</h2>
      <p>
        A 3D model is not automatically a precision measurement record. Measurement quality depends
        on the capture method, camera geometry, sensor, control, surface visibility, processing, and
        site conditions. A model can look convincing and still contain areas that are poorly
        reconstructed or not suitable for a critical measurement.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790887492/3d-ss_fhvhua.png"
        alt="SterFlies 3D mapping model with measurement tools visible"
        caption="Example of a measurable SterFlies 3D capture showing how terrain, equipment, and spatial relationships can be reviewed after field capture. This example is from a non incident mapping project."
      />
      <p>
        If distances between crane supports, equipment, structures, or other important features may
        matter later, that requirement should be known before the field work begins. The project can
        then be captured and controlled with that use in mind instead of assuming every measurement
        can be recovered after the fact.
      </p>
      <p>
        Photogrammetry also does not replace a licensed survey when a legal survey or survey grade
        control is required. The final documentation should clearly state what method was used and
        avoid claiming more accuracy than the project supports.
      </p>

      <h2>Keep documentation separate from conclusions</h2>
      <p>
        The field record should describe what was captured, where it was captured, when it was
        captured, and how the deliverable was produced. It should not turn visible conditions into a
        theory of the incident.
      </p>
      <p>
        For example, a site record can identify an outrigger location, a measured distance, a
        visible slope, or the position of an overhead line. It should not state that the ground
        caused an overturn, that a rigging configuration was improper, that an OSHA requirement was
        violated, or that an operator acted incorrectly unless those conclusions come from the
        qualified professional responsible for that analysis.
      </p>
      <p>
        Keeping those roles separate matters when the same record may be reviewed by safety
        professionals, attorneys, engineers, insurers, expert witnesses, and other consultants. Each
        person can evaluate the same physical record within the scope of their own work.
      </p>

      <h2>Connecting field documentation to technical review</h2>
      <p>
        Spear &amp;         Lancaster works in crane and rigging safety, incident investigation, construction
        safety, OSHA related matters, root cause analysis, and expert witness support. SterFlies can
        add another layer to the field side of that work by{" "}
        <Link href="/blog/forensic-mapping-incident-investigations">preserving the site</Link> in a
        form that can be reviewed after the initial visit is over.
      </p>
      <p>
        The expert still owns the interpretation. The documentation simply gives that expert more
        context than a loose collection of photographs and notes may provide. Depending on the
        project, that can mean a focused ground based record, a complete aerial map, a 3D model, or
        a combination of several methods.
      </p>
      <p>
        This also makes the field response easier to plan. When a client contacts Spear &amp;
        Lancaster after a serious incident, the technical team can decide early what needs to be
        documented before equipment is moved or site conditions change.
      </p>

      <h2>A practical field workflow</h2>
      <p>A crane and rigging incident documentation workflow can be kept straightforward:</p>
      <ol>
        <li>Secure access and coordinate with the responsible site parties before capture begins.</li>
        <li>Define the documentation objective with the professionals who will review the record.</li>
        <li>Capture the overall site before focusing on individual components.</li>
        <li>
          Document the crane position, support areas, surrounding ground, load area, nearby
          structures, utilities, and access conditions that are visible and relevant to the scope.
        </li>
        <li>
          Collect close photographs and ground level context for details aerial capture cannot
          preserve.
        </li>
        <li>
          Collect critical field measurements or control information when later measurement is part
          of the objective.
        </li>
        <li>
          Process only the deliverables the project actually needs and retain the original source
          files.
        </li>
        <li>
          Organize the record so a later reviewer can determine what was captured, where it was
          captured, and when it was captured.
        </li>
        <li>
          Provide the documentation to the qualified professionals responsible for technical
          analysis and conclusions.
        </li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        Crane and rigging incidents involve more than a single piece of equipment. The crane,
        support conditions, load, rigging, structures, utilities, terrain, access, and surrounding
        work area all exist in relation to one another. If the scene is documented only through
        isolated photographs, some of those relationships may be difficult to recover after the site
        changes.
      </p>
      <p>
        Aerial mapping, ground photography, 3D models, point clouds, terrestrial capture, and
        conventional measurements can preserve different parts of the same scene. Used together and
        planned around the project, they can leave the technical team with a clearer record of what
        was physically present.
      </p>
      <p>
        That is the role SterFlies can fill. Preserve the site carefully, organize the record, and
        leave the technical conclusions to the professionals responsible for making them.
      </p>
    </ArticleLayout>
  )
}
