import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"
import LoopVideo from "./LoopVideo"

export const metadata = articleMetadata("tracking-construction-progress-with-drone-mapping")

const sources = {
  fhwa: "https://www.fhwa.dot.gov/uas/resources/hif23058.pdf",
  sensors: "https://doi.org/10.3390/s21124227",
  pix4dSite: "https://www.pix4d.com/blog/drone-construction-site-management",
  pix4dSaved: "https://www.pix4d.com/blog/as-built-data-placing-concrete-with-drones",
  pix4dAccuracy: "https://support.pix4d.com/hc/en-us/articles/202558889",
  spear: "https://jespear.com/improving-contractor-performance/",
}

function Cite({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>
}

export default function Page() {
  return (
    <ArticleLayout
      slug="tracking-construction-progress-with-drone-mapping"
      wordCount={2906}
      cta={{
        heading: "A dated record of what was visible",
        body: "SterFlies can collect recurring aerial maps and supporting imagery for a construction assignment. Construction managers, engineers, and safety professionals remain responsible for interpreting those records.",
      }}
    >
      <p>
        Construction sites rarely look the same from week to week. An area that was recently cleared
        may already have utilities installed. Excavations are backfilled, access roads shift,
        foundations take shape, and equipment moves between work zones. On larger projects, tracking
        those changes becomes a job of its own.
      </p>
      <p>
        Project managers typically rely on daily reports, schedules, photographs, inspections, and
        conversations with personnel in the field. These methods remain necessary, but they have
        practical limits. A photograph of a completed foundation tells you something about the work.
        It may not explain how that foundation relates to the rest of the site or what conditions
        existed in the surrounding area before construction began.
      </p>
      <p>
        Drone mapping offers another way to maintain that record. By collecting overlapping aerial
        photographs and processing them into orthomosaic maps, construction teams can document site
        conditions at various stages of a project. When mapping is repeated consistently, those
        records serve as a useful reference for tracking progress, coordinating work, and reviewing
        changes over time.
      </p>
      <p>
        The Federal Highway Administration identifies construction progress tracking, quality
        control, quantity estimation, and safety inspections as among the applications of small,
        unmanned aircraft systems in construction (<Cite href={sources.fhwa}>Federal Highway Administration</Cite>).
      </p>
      <p>
        The important part is knowing what information needs to be collected and how the project team
        plans to use it.
      </p>

      <h2>Establishing a Record Before Construction Changes the Site</h2>
      <p>The first useful mapping flight often occurs before significant construction begins.</p>
      <p>
        At that stage, the site may contain existing roads, vegetation, drainage features, buildings,
        utilities, and neighboring properties that become harder to distinguish once work gets
        underway.
      </p>
      <p>An initial orthomosaic provides a visual reference for those conditions.</p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1788470555/Screenshot_2026-09-03_162203_n2nrb2.png"
        alt="Aerial mapping image showing construction site conditions and surrounding features during an early project stage."
        caption="An initial aerial mapping record documents existing site features, access routes, and visible conditions before major construction activities alter the property."
      />
      <p>
        For example, consider a commercial development in which contractors will clear vegetation,
        establish access roads, grade, and begin utility installation.
      </p>
      <p>
        A map captured before those activities can document the arrangement of visible site features.
        Later imagery can be compared with that initial record to examine how the property has
        changed.
      </p>
      <p>This becomes especially useful when several contractors are working on the same project.</p>
      <p>
        A superintendent might recall when an access road was relocated, but another project
        participant may have joined after the work was completed. Having dated maps allows both
        individuals to review the site&apos;s earlier arrangement without relying solely on memory or
        written descriptions.
      </p>
      <p>
        The initial flight should also establish the mapping area and documentation objectives for
        future visits. If important parts of the property are outside the original capture, later
        comparisons may be less useful.
      </p>
      <p>
        For recurring projects, it is worth documenting the flight boundaries, camera settings,
        intended deliverables, and the positional reference method from the start.
      </p>

      <h2>Why Consistency Matters Between Mapping Visits</h2>
      <p>
        A construction mapping program becomes more valuable when each visit yields information that
        can be compared with earlier records.
      </p>
      <p>That requires more than flying over the property whenever convenient.</p>
      <p>
        Flight altitude, image overlap, camera orientation, capture coverage, and positioning methods
        can influence the resulting orthomosaic. Significant changes between visits can make
        comparisons more difficult, particularly when measurements are involved.
      </p>
      <p>
        In a study published in <em>Sensors</em>, Jacob-Loyola and colleagues developed a methodology
        for monitoring construction progress through repeated UAV inspections and photogrammetric
        models. Their work emphasizes planned capture trajectories, consistent observations, and the
        integration of collected data into project review workflows (<Cite href={sources.sensors}>Jacob-Loyola et al.</Cite>).
      </p>
      <p>
        For a typical construction mapping assignment, the operator should establish a repeatable
        flight plan tailored to the property.
      </p>
      <p>
        The entire project does not necessarily need to be mapped at the same interval. A large
        development may benefit from periodic coverage of the entire property, while a specific work
        area may require more frequent documentation during an important construction phase.
      </p>
      <p>The objective is consistency where it counts.</p>
      <p>
        A map captured during initial grading should be useful when compared with another map
        collected after grading progresses. Maintaining a comparable capture area and positional
        reference helps make such comparisons possible.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1786294038/Screenshot_2026-08-09_114704_r2zpcr.png"
        alt="Drone mapping imagery illustrating consistent aerial documentation of a construction site."
        caption="Consistent flight planning and capture methods help produce aerial datasets that can be compared across different construction stages."
      />
      <p>
        Lighting, shadows, weather, and temporary equipment placement can also affect how the site
        looks. These factors should be considered when reviewing imagery from different dates.
      </p>
      <p>
        Most importantly, a visual comparison should not be mistaken for a verified measurement
        merely because the two maps appear to align.
      </p>

      <h2>Reading Construction Progress Through Orthomosaic Maps</h2>
      <p>An orthomosaic combines overlapping photographs into a corrected aerial image of the site.</p>
      <p>
        Unlike a single aerial photograph, which contains perspective distortion, an orthomosaic is
        processed to provide a more consistent spatial representation of visible ground features.
      </p>
      <p>
        For construction teams, its usefulness comes from the ability to examine the overall property
        while retaining enough detail to identify individual work areas.
      </p>
      <p>Consider a project in the early stages of site development.</p>
      <p>
        An orthomosaic may show completed clearing, graded surfaces, temporary access roads,
        stockpiles, equipment staging areas, and visible utility work locations.
      </p>
      <p>
        Several weeks later, a second map may show completed building pads, changes to drainage
        features, new excavations, or relocated materials.
      </p>
      <p>When the maps are displayed side by side, the progression is easier to follow.</p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1788288246/side-by-side_iaycho.png"
        alt="Comparison of two construction site orthomosaics showing visible changes in grading, site development, and project progress."
        caption="Orthomosaic maps captured at different stages provide a visual comparison of construction progress and changing site conditions."
      />
      <p>
        This approach is already used in construction management workflows. Pix4D has documented
        projects in which contractors regularly collected orthomosaics to review site quantities,
        coordinate work, and compare conditions across dates (Pix4D, <Cite href={sources.pix4dSite}>&quot;How PIX4Dcloud Advanced Boosts Construction Site Management&quot;</Cite>).
      </p>
      <p>The distinction between observing progress and verifying completed work remains significant.</p>
      <p>
        An aerial map may show that a foundation has been poured. It cannot independently establish
        whether the concrete meets specifications, whether embedded components were installed
        correctly, or whether the work has passed inspection.
      </p>
      <p>
        Those determinations require the appropriate project records, testing, inspections, and
        professional review.
      </p>
      <p>Drone mapping provides visual context for that process.</p>

      <h2>Tracking Earthwork, Grading, and Material Movement</h2>
      <p>Earthwork is one of the more practical applications of construction drone mapping.</p>
      <p>
        During site development, contractors may move substantial quantities of soil and aggregate to
        establish elevations, prepare building pads, excavate for utilities, and construct access
        roads.
      </p>
      <p>
        Aerial photographs can document the visible extent of those activities. When the project is
        captured and processed using appropriate methods, photogrammetric surface models can also
        support area and volume calculations.
      </p>
      <p>
        The Federal Highway Administration&apos;s technical brief <Cite href={sources.fhwa}>Use of Small UAS for Construction Quantity Estimation</Cite> examines applications for earthwork, stockpiles, and construction quantity verification.
      </p>
      <p>
        The report explains that drone-derived data can support quantity estimation and emphasizes the
        importance of planning, positional accuracy, data processing, and quality control (<Cite href={sources.fhwa}>Federal Highway Administration</Cite>).
      </p>
      <p>A practical example is a contractor managing multiple stockpiles across a development.</p>
      <p>
        An aerial map can show where the stockpiles are located and how the storage areas are laid
        out.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768943425/Screenshot_2025-12-22_132337_x6mpxf.png"
          alt="Aerial construction site image showing earthwork, grading, and material movement."
          caption="Aerial documentation of active earthwork provides a visual record of grading areas, material placement, and developing site conditions."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1784589869/Screenshot_2026-07-20_182414_yr8zhr.png"
          alt="Construction mapping image showing terrain, earthwork areas, and visible site features."
          caption="Photogrammetric site imagery can help document stockpiles, excavation areas, and other visible earthwork features during construction."
        />
      </ArticleFigureRow>
      <p>
        If volume measurements are required, the mapping assignment must be planned to generate
        suitable three-dimensional data. The accuracy requirements, stockpile boundaries, reference
        surfaces, and processing methods all affect the resulting volume.
      </p>
      <p>Photogrammetric estimates should not be automatically treated as certified survey quantities.</p>
      <p>
        For projects involving payment applications, engineering calculations, or contractual
        verification, measurements may require confirmation by a qualified professional.
      </p>
      <p>
        Even when volume calculations are not part of the deliverable, the dated imagery provides a
        useful record of where material was stored and how those areas changed throughout
        construction.
      </p>

      <h2>Recording Work That Will Eventually Be Covered</h2>
      <p>Some of the most useful construction photographs are taken before the work is gone.</p>
      <p>Underground utilities serve as a good example.</p>
      <p>
        Once the trenches are backfilled and the surrounding area is graded, the visible arrangement
        of pipes, conduits, and excavations is no longer suitable for ordinary photography.
      </p>
      <p>
        Aerial documentation collected while the work is exposed can preserve the visible layout of
        the installation.
      </p>
      <p>
        The same principle applies to foundations, drainage features, and other construction elements
        that become partially concealed as construction progresses.
      </p>
      <figure className="article-figure">
        <LoopVideo
          src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1770831771/DJI_20250915035256_0002_S_lv6q4k.mp4"
          label="Aerial drone video documenting construction site conditions during an active stage of development."
        />
        <figcaption className="article-caption">
          Drone footage can preserve visible construction conditions before excavation areas, utility
          installations, or other work become covered during later project stages.
        </figcaption>
      </figure>
      <p>However, timing is critical.</p>
      <p>
        A monthly mapping schedule may be sufficient for reviewing general site development but may
        completely miss a utility installation that is excavated, completed, inspected, and backfilled
        within several days.
      </p>
      <p>
        For this reason, recurring mapping should be supplemented with milestone documentation as
        needed.
      </p>
      <p>
        A contractor might request additional imagery before backfilling, before a concrete placement,
        or immediately after completing a phase.
      </p>
      <p>
        Ground photographs remain especially important for documenting connections, installation
        details, identification markings, and features that are not clearly visible from above.
      </p>
      <p>
        For certain projects, combining aerial mapping with detailed ground photography or interior
        reality capture can yield a more complete record.
      </p>
      <p>
        The purpose is not to photograph everything indiscriminately. It is to identify which
        conditions will be difficult to document later and to capture them while they remain
        accessible.
      </p>

      <h2>Using Aerial Records During Construction Coordination</h2>
      <p>
        A construction project can involve owners, general contractors, subcontractors, architects,
        engineers, inspectors, and other consultants. Each group may need different information about
        the same site.
      </p>
      <p>
        An orthomosaic provides a shared visual reference for discussion during coordination meetings.
        Instead of relying solely on descriptions such as &quot;the excavation behind the south
        building,&quot; a reviewer can identify the relevant area directly on the map.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770395839/contractors-reviewing-plans_p9rb33.png"
        alt="Construction professionals reviewing project plans and site documentation together."
        caption="Construction teams can use dated aerial documentation alongside project drawings and field reports to review work areas and coordinate upcoming activities."
      />
      <p>
        Annotations can mark locations requiring attention, identify work zones, or link a particular
        area to supporting photographs and documents.
      </p>
      <p>For example, a project manager reviewing a development may want to identify the following:</p>
      <ul>
        <li>Areas where grading remains incomplete.</li>
        <li>Access routes affected by ongoing construction.</li>
        <li>Locations where materials or equipment occupy planned work areas.</li>
        <li>Visible changes to temporary staging or storage locations.</li>
        <li>Work zones requiring closer ground-level review.</li>
      </ul>
      <p>
        These observations can help project personnel determine where to focus their attention during
        the next site visit.
      </p>
      <p>
        An annotated aerial image is especially useful when the person reviewing the project is not
        on-site.
      </p>
      <p>
        However, a map should not replace communication with the personnel responsible for the work.
        An image collected several days earlier may no longer reflect current conditions.
      </p>
      <p>The capture date should always be clearly stated.</p>

      <h2>Reviewing Site Conditions With Safety in Mind</h2>
      <p>
        Construction progress and site safety are closely connected, but they entail different
        responsibilities.
      </p>
      <p>
        As work progresses, the arrangement of equipment, excavations, temporary access routes, and
        material storage can change.
      </p>
      <p>
        Recurring aerial documentation may help safety professionals review specific visible
        conditions across a project.
      </p>
      <p>
        For instance, a map may show that equipment staging has expanded into an area previously used
        for site access. An overhead photograph may also help identify the location of an excavation
        relative to nearby structures or active work zones.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228919/75caa67a79f341c79e274dc8b2f45b1a_iykzbm.jpg"
        alt="Aerial construction site photograph showing equipment, access routes, and surrounding work areas."
        caption="Aerial imagery can provide additional context for reviewing equipment placement, temporary access routes, and changing construction work areas."
      />
      <p>These observations can inform questions during a subsequent safety inspection.</p>
      <p>
        By themselves, they do not establish that a site is safe or that a contractor has complied
        with applicable regulations.
      </p>
      <p>
        Spear &amp; Lancaster emphasize the importance of monitoring contractor safety performance
        during active projects. Their publication{" "}
        <Cite href={sources.spear}>Improving Contractor Safety Performance</Cite> identifies
        work-in-progress assessments, inspections, and safety reporting as components of an effective
        monitoring program (<Cite href={sources.spear}>Spear and Lancaster</Cite>).
      </p>
      <p>
        Aerial documentation can supplement those activities by providing additional views of the
        visible site conditions.
      </p>
      <p>
        Without further evaluation, it cannot determine whether an excavation has adequate protective
        systems, whether workers are following required procedures, or whether a particular operation
        meets OSHA requirements.
      </p>
      <p>Some conditions may not even be visible from the air.</p>
      <p>
        Work beneath structures, internal building activities, equipment operation, and temporary
        conditions may require direct observation by qualified personnel.
      </p>
      <p>
        The aircraft also poses operational hazards. Drone flights must be coordinated around workers,
        cranes, power lines, equipment, airspace restrictions, and other site activities.
      </p>
      <p>
        The appropriate approach is to use the aerial record as supporting information while leaving
        safety assessments to the professionals responsible for conducting them.
      </p>

      <h2>Comparing Construction Plans With Existing Site Conditions</h2>
      <p>Another application involves using mapped imagery alongside drawings or digital design data.</p>
      <p>
        Construction drawings show what is intended to be built. An orthomosaic records the visible
        site conditions at a particular time.
      </p>
      <p>
        Displaying the two together can help project personnel identify locations that warrant closer
        examination.
      </p>
      <p>
        For example, a mapped construction site may be compared with a proposed building footprint, an
        access road alignment, or a utility layout.
      </p>
      <p>
        If a visible feature appears to be in a different location than intended, that discrepancy can
        be flagged for review.
      </p>
      <p>
        Pix4D has published construction case studies comparing drone imagery with design information.
        In one example involving W.E. O&apos;Neil Construction, regularly collected aerial data helped
        project personnel review planned concrete deck penetrations before concrete placement (Pix4D, <Cite href={sources.pix4dSaved}>&quot;$100,000 Saved&quot;</Cite>).
      </p>
      <p>
        That example illustrates the value of identifying questions while the work is still
        accessible.
      </p>
      <p>There are limitations.</p>
      <p>
        A visual overlay is only as useful as the positional accuracy and alignment of the underlying
        data.
      </p>
      <p>
        Drawings and maps must use compatible reference systems, and relevant tolerances must be
        considered.
      </p>
      <p>
        When the question involves design compliance, property boundaries, elevations, or other
        precise measurements, qualified surveyors or engineers may need to verify the information.
      </p>
      <p>
        Drone mapping can help identify where a question arises. It should not be presented as the
        final authority on whether the constructed work conforms to design requirements.
      </p>

      <h2>Matching the Mapping Schedule to Construction Activities</h2>
      <p>
        One of the first decisions in a recurring mapping project is how often the site should be
        documented.
      </p>
      <p>No single schedule fits every construction project.</p>
      <p>
        Weekly mapping may be useful during active grading or rapid site development. Other projects
        may benefit from documentation every two weeks, monthly visits, or milestone-based captures.
      </p>
      <p>
        The appropriate interval depends on the construction pace and the information the project team
        needs.
      </p>
      <p>A practical schedule might look like this:</p>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Construction phase</th>
              <th>Suggested documentation focus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Before construction</td>
              <td>
                Existing conditions, property access, vegetation, drainage, and surrounding structures
              </td>
            </tr>
            <tr>
              <td>Clearing and grading</td>
              <td>Earthwork progression, equipment access, stockpiles, and developing building pads</td>
            </tr>
            <tr>
              <td>Underground utilities</td>
              <td>Exposed installations, excavation locations, and conditions before backfilling</td>
            </tr>
            <tr>
              <td>Foundations</td>
              <td>Foundation locations, surrounding work areas, and visible construction milestones</td>
            </tr>
            <tr>
              <td>Vertical construction</td>
              <td>Building progress, material staging, access routes, and exterior work</td>
            </tr>
            <tr>
              <td>Site improvements</td>
              <td>Paving, drainage features, landscaping, and remaining exterior construction</td>
            </tr>
            <tr>
              <td>Project completion</td>
              <td>Final visible exterior conditions and the completed site arrangement</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>This is a suggested documentation framework, not a required inspection schedule.</p>
      <p>
        The capture plan should reflect the project scope, access restrictions, and agreed-upon
        deliverables.
      </p>
      <p>
        A project involving extensive underground work may need additional ground photographs or
        specialized documentation between aerial visits.
      </p>
      <p>
        A smaller building project might benefit more from periodic 3D models that document changes to
        the exterior structure.
      </p>
      <p>The best schedule collects information when conditions are most relevant.</p>

      <h2>What a Construction Mapping Package Should Include</h2>
      <p>
        A useful mapping deliverable should be understandable to someone who was not present for the
        flight.
      </p>
      <p>
        The exact contents depend on the assignment, but construction documentation packages commonly
        include an orthomosaic, supporting aerial photographs, and information identifying the capture
        date.
      </p>
      <p>Additional deliverables may include:</p>
      <ul>
        <li>A dated map showing the full project area.</li>
        <li>Oblique aerial photographs of buildings and active work zones.</li>
        <li>A 3D model or point cloud where geometry is needed.</li>
        <li>Annotations identifying locations or conditions of interest.</li>
        <li>Surface or volume measurements when properly scoped and verified.</li>
        <li>A comparison with imagery collected during earlier visits.</li>
        <li>Supporting files and measurement limitations relevant to technical review.</li>
      </ul>
      <p>The format should align with the intended audience.</p>
      <p>A superintendent may need a straightforward map that can be opened during a meeting.</p>
      <p>An engineer may need access to spatial data, coordinate information, or measurements.</p>
      <p>An owner may prefer a chronological collection of visual progress records.</p>
      <p>
        Keeping the original captures and processed deliverables organized is important, especially
        when the records may later be used to resolve questions about project history.
      </p>
      <p>Documentation should also distinguish between observations and conclusions.</p>
      <p>
        A photograph of an incomplete work area records visible conditions. Whether the work was
        behind schedule requires comparison with the applicable project schedule and other
        information.
      </p>
      <p>
        Likewise, a measured surface difference may require additional verification before it can
        support a contractual or engineering decision.
      </p>

      <h2>Making Construction Records Useful After the Project</h2>
      <p>
        Construction photographs are often reviewed most frequently during a project&apos;s active
        phase.
      </p>
      <p>Their usefulness does not necessarily end once construction is complete.</p>
      <p>
        Dated aerial records may later help project teams locate earlier work areas, review the
        sequence of visible site changes, and understand how access and surrounding conditions evolved
        over time.
      </p>
      <p>
        They can also provide background information when questions arise during renovations,
        maintenance, property improvements, or during later technical investigations.
      </p>
      <p>The value depends heavily on how the records were collected and organized.</p>
      <p>
        Unidentified drone photographs are difficult to use several years later. A chronological set
        of maps with consistent coverage and clear supporting information offers a much better
        reference.
      </p>
      <p>
        That is why mapping should be planned as part of the project&apos;s documentation process
        rather than treated as an occasional photography task.
      </p>
      <p>
        SterFlies provides aerial mapping, photogrammetry, and related technical documentation for
        construction and industrial projects. These services can produce orthomosaics, site imagery,
        and three-dimensional records tailored to the needs of a particular assignment.
      </p>
      <p>
        Construction managers, engineers, safety professionals, and other qualified project personnel
        remain responsible for interpreting those records within their disciplines.
      </p>
      <p>
        Drone mapping is most useful when it answers practical questions: What did this area look like
        at the time, what has visibly changed, and what information should the project team examine
        next?
      </p>
      <p>
        A consistent mapping program gives project teams a way to revisit those questions throughout
        construction, with a dated visual record to support their review.
      </p>

      <h2>Works Cited</h2>
      <p>
        Federal Highway Administration. <em>Use of Small UAS for Construction Quantity Estimation</em>.
        FHWA-HIF-23-058, U.S. Department of Transportation, Sept. 2023.{" "}
        <a href={sources.fhwa} target="_blank" rel="noreferrer">https://www.fhwa.dot.gov/uas/resources/hif23058.pdf</a>.
      </p>
      <p>
        Jacob-Loyola, Nicolás, et al. &quot;Unmanned Aerial Vehicles (UAVs) for Physical Progress
        Monitoring of Construction.&quot; <em>Sensors</em>, vol. 21, no. 12, 2021, article 4227.{" "}
        <a href={sources.sensors} target="_blank" rel="noreferrer">https://doi.org/10.3390/s21124227</a>.
      </p>
      <p>
        Pix4D. &quot;How PIX4Dcloud Advanced Boosts Construction Site Management.&quot; Pix4D, 23 Mar.
        2022.{" "}
        <a href={sources.pix4dSite} target="_blank" rel="noreferrer">https://www.pix4d.com/blog/drone-construction-site-management</a>.
      </p>
      <p>
        Pix4D. &quot;$100,000 Saved: Using PIX4Dcloud Advanced in Construction.&quot; Pix4D, 13 Apr.
        2022.{" "}
        <a href={sources.pix4dSaved} target="_blank" rel="noreferrer">https://www.pix4d.com/blog/as-built-data-placing-concrete-with-drones</a>.
      </p>
      <p>
        Pix4D. &quot;What Is the Relative and Absolute Accuracy of Drone Mapping?&quot; PIX4D
        Documentation.{" "}
        <a href={sources.pix4dAccuracy} target="_blank" rel="noreferrer">https://support.pix4d.com/hc/en-us/articles/202558889</a>.
      </p>
      <p>
        Spear and Lancaster. &quot;Improving Contractor Safety Performance.&quot; Spear and Lancaster.{" "}
        <a href={sources.spear} target="_blank" rel="noreferrer">https://jespear.com/improving-contractor-performance/</a>.
      </p>
    </ArticleLayout>
  )
}
