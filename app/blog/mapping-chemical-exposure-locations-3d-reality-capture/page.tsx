import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("mapping-chemical-exposure-locations-3d-reality-capture")

const sources = {
  matterportPro3: "https://matterport.com/pro3",
  matterportMeasure:
    "https://support.matterport.com/s/article/Introducing-Measurement-Mode-Now-Everyone-Can-Measure?language=en_US",
  oshaOtm: "https://www.osha.gov/otm/section-2-health-hazards/chapter-1",
  oshaRespirator: "https://www.osha.gov/etools/respiratory-protection/respirator-selection",
  oshaSampling: "https://www.osha.gov/sampling-analysis/sampling",
  spear:
    "https://jespear.com/industrial-hygiene-exposure-assessments-worst-case-vs-random-sampling/",
}

function Cite({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>
}

export default function Page() {
  return (
    <ArticleLayout
      slug="mapping-chemical-exposure-locations-3d-reality-capture"
      wordCount={2058}
      cta={{
        heading: "Geometry is not exposure",
        body: "SterFlies can document observable site conditions with interior reality capture and supporting photography when access is authorized. Exposure reconstruction, health interpretation, and causation conclusions remain with the qualified professionals responsible for them.",
      }}
    >
      <p>
        An industrial exposure investigation can hinge on a surprisingly simple question: where was the
        person standing? A worker may describe being near a tank, behind equipment, or along a platform
        when a release allegedly occurred. Months later, those descriptions can be difficult to reconcile
        with a floor plan or a handful of photographs. The equipment is still there, but the site may have
        been modified, cleaned, or rearranged.
      </p>
      <p>
        A 3D scan cannot establish that a chemical reached a person. What it can do is preserve the
        visible arrangement of a work area and provide investigators with a shared reference for examining
        reported positions, access routes, equipment geometry, and distances. Used carefully, that record
        helps separate questions about location from those about exposure.
      </p>
      <p>
        For industrial hygienists and forensic consultants, the distinction matters. OSHA directs exposure
        evaluators to consider the processes involved, employee movement, ventilation, and distance from
        potential sources, among other factors (Occupational Safety and Health Administration,{" "}
        <Cite href={sources.oshaOtm}>“OSHA Technical Manual”</Cite>). A map can clarify some of those
        spatial factors, but it does not supply the missing air sample.
      </p>

      <h2>Start With the Question, Not the Scanner</h2>
      <p>
        Before a scanning crew enters an industrial facility, the requesting investigator should determine
        what the spatial record must address. Is the issue the straight-line distance between a reported
        work position and a tank? The route to a platform? Whether a wall separates two work areas? Or
        the location of a sampling point relative to equipment?
      </p>
      <p>
        Each question requires a slightly different capture plan. A broad, navigable walkthrough can
        document relationships between adjacent rooms and corridors. Close-up views and carefully
        selected scan positions may be needed around valves, openings, vessel connections, and
        structures that obstruct the camera. If a particular dimension is central to a technical opinion, the
        required accuracy should be established before fieldwork, not after the scan has been processed.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1795212437/Industrial_Plant_Virtual_Tour-2_gbgref.png"
        alt="Illustrative virtual tour of an industrial processing facility showing chemical tanks, piping, access platforms, and digital navigation controls."
        caption="Illustrative industrial reality capture model showing how tanks, piping, platforms, and surrounding work areas can be reviewed within a navigable three dimensional environment."
      />
      <p>
        The request should also distinguish known facts from disputed positions. A scanner records a
        location; it does not confirm that a person occupied that location during a past event. The reported
        worker position may come from testimony, an interview, a work record, or another source and
        should be identified accordingly.
      </p>

      <h2>Document the Reported Work Position and the Suspected Source</h2>
      <p>
        Consider a hypothetical processing area with a storage tank, attached piping, a maintenance
        platform, and a corridor. A worker reports performing a task near the platform while a chemical
        release may have originated at a connection on the tank. The investigation team seeks to
        understand the physical relationship among these locations.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1795212435/Industrial_Plant_Safety_Visualization-3_tgcfld.png"
        alt="Illustrative industrial 3D model showing a worker location, chemical processing tank, and a conceptual spatial relationship between the two points."
        caption="Illustrative 3D facility model identifying a hypothetical worker location and a possible chemical source. The highlighted positions are conceptual and do not represent verified exposure findings."
      />
      <p>
        A useful 3D record would include the tank body, visible connection points, nearby structural
        members, the platform and its access points, and surrounding equipment. Ground photographs
        should supplement the scan with close-up views of component labels, valves, gauges, and other
        details that may not resolve clearly in a model.
      </p>
      <p>
        If the worker position and release point are drawn from different evidence sources, mark them
        separately. A label such as “reported worker location, based on interview” is more defensible than a
        marker simply labeled “exposure location.” The latter implies a conclusion that the geometry alone
        cannot support.
      </p>
      <p>
        The same caution applies to the suspected source. An apparent nozzle or flange in a model can be
        accurately located without confirming that a release occurred there. That determination belongs to
        the professionals who evaluate equipment, process history and the available physical evidence.
      </p>

      <h2>The Distance Question Has More Than One Answer</h2>
      <p>
        A model can support several distance-related questions. The horizontal distance between two floor
        positions is not the same as the three-dimensional straight-line distance between a worker’s
        location on a platform and a connection lower on a tank. Neither describes the route of an airborne
        contaminant.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1795212433/Industrial_Plant_Distance_Measurement-4_ey81wf.png"
        alt="Technical illustration showing the difference between horizontal distance and three dimensional distance between a worker and an industrial storage tank."
        caption="Illustrative comparison of horizontal distance and three dimensional separation between a worker location and a point on industrial equipment. Distances are conceptual and require appropriate field verification when used in an investigation."
      />
      <p>
        Suppose a proposed point of release is 12 feet from a marked worker position in plan view, while the
        worker position is 8 feet higher. The straight-line separation is about 14.4 feet. These figures are
        hypothetical, not from a specific case. Their purpose is to illustrate why an investigator should
        specify which two points are being measured and what type of distance is being reported.
      </p>
      <p>
        For work areas divided by barriers, investigators may also examine the walking route between
        locations, a doorway opening, or a route through a service corridor. These measurements help
        explain site layout and movement. They should not be converted into an estimate of dose or
        airborne concentration without a separate, scientifically appropriate analysis.
      </p>
      <p>
        Matterport provides measurement tools within its digital spaces, but the output remains subject to
        capture and processing limitations (Matterport,{" "}
        <Cite href={sources.matterportMeasure}>“Take Measurements”</Cite>). The Pro3 camera
        manufacturer reports a raw depth accuracy of approximately plus or minus 20 millimeters at 10
        meters under stated conditions; that specification is not a blanket guarantee of the accuracy of any
        completed multi-scan model (Matterport, <Cite href={sources.matterportPro3}>“Pro3 3D Camera”</Cite>).
        For important dimensions, the project team should establish tolerances and consider independent
        field verification.
      </p>

      <h2>Walls, Platforms and Equipment Change the Spatial Picture</h2>
      <p>
        Two people can be close together in plan view yet be separated by equipment, elevation
        differences, or a wall. A tank may have a surrounding catwalk. A process line may pass behind a
        partial enclosure. A worker may have used one staircase rather than another.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1795212433/Industrial_Plant_Wayfinding_Overview-5_pbuz0a.png"
        alt="Illustrative three dimensional industrial facility model with highlighted access routes, equipment locations, platforms, and structural features."
        caption="Illustrative industrial facility model showing how equipment locations, access routes, platforms, and surrounding structures can be organized for spatial review."
      />
      <p>
        Those features are worth documenting because they help the reviewer understand the physical
        environment where the work was performed. An investigator comparing statements can revisit the
        same geometry rather than relying on memory of a site visit. An annotated model may also make it
        easier to explain which features were present when the scan was collected.
      </p>
      <p>
        But a barrier visible in a scan is not automatically a vapor barrier. Openings, ventilation systems,
        pressure differences, and operating conditions affect airborne transport. A model can locate an
        exhaust hood or a door; it cannot show whether the hood was operating or the direction of air
        movement during a past release. OSHA identifies ventilation and employee work practices as
        important parts of exposure evaluation, and those matters require additional evidence (Occupational
        Safety and Health Administration, <Cite href={sources.oshaSampling}>“Sampling”</Cite>).
      </p>

      <h2>Capture Conditions Can Affect the Record</h2>
      <p>
        Industrial spaces are not simple rooms. Pipe racks obscure surfaces. Polished metal reflects light.
        Similar-looking machinery repeats along long corridors. A large tank may block the view of
        equipment behind it. Moving workers, vehicles, and temporary materials can complicate capture.
      </p>
      <p>
        The field operator should work through the investigator’s priority locations, review scan coverage
        before leaving, and take photographs where geometry is incomplete or markings are difficult to
        read. For a technical request involving a particular flange or access opening, those details should
        be visible in more than one supporting image, when practical.
      </p>
      <p>
        Capture may be incomplete for legitimate reasons. A hazardous atmosphere, an active process, a
        restricted work area, or an unstable structure may prevent entry. Commercial scanning equipment
        must not be assumed suitable for flammable or otherwise hazardous atmospheres. Site access and
        equipment suitability require appropriate hazard assessment and authorization. Document the
        restriction rather than quietly presenting an incomplete model as complete.
      </p>
      <p>
        A spatial record also includes a date. A scan performed after piping has been replaced may not
        reflect the arrangement at the time of the alleged exposure. Report subsequent modifications as
        limitations and use historical drawings, photographs, and records where available.
      </p>

      <h2>Connect the Geometry to the Other Evidence</h2>
      <p>
        The scan becomes more useful when people can tell where its observations came from. A marked
        point associated with a worker interview should include the interview reference. A valve identified in
        a model should be cross-checked against equipment records. A sampling location should be tied to
        a sample identifier, date, and method rather than left as an unexplained pin.
      </p>
      <p>
        A practical deliverable might include an overall 3D walkthrough, selected annotated views, a
        measurement log, conventional photographs, and a brief description of capture limitations. The
        measurement log can list the point labels, indicate whether the reported distance is horizontal or
        three-dimensional, specify the units, and describe the verification method. If measurements were
        not independently verified, state that plainly.
      </p>
      <p>
        Original files and unannotated exports should be retained in accordance with project requirements.
        Annotations are interpretations or organizational aids layered over the underlying capture. They
        should remain distinguishable from the original documentation, especially if the material may later
        be reviewed in litigation.
      </p>

      <h2>Why the Scan Cannot Determine Chemical Exposure</h2>
      <p>
        A common mistake is to treat distance as a direct measure of exposure. It is not. A worker 10 feet
        from a source is not necessarily more exposed than someone 20 feet away. The chemical, release
        rate, duration, work task, air movement, engineering controls, breathing-zone conditions, and route
        of contact can change that relationship.
      </p>
      <p>
        OSHA’s sampling guidance calls for evaluating the chemicals and operations involved, identifying
        potentially exposed workers, and selecting appropriate sampling methods (Occupational Safety and
        Health Administration, <Cite href={sources.oshaOtm}>“OSHA Technical Manual”</Cite>). In its
        respiratory protection guidance, OSHA describes personal exposure monitoring as a primary method
        for assessing employee exposure and notes that predictive estimates require inputs such as room
        dimensions, air exchange, release rate, and work patterns (Occupational Safety and Health
        Administration, <Cite href={sources.oshaRespirator}>“Respirator Selection”</Cite>).
      </p>
      <p>
        The chemical may also pose dermal or other exposure risks. A scan does not identify an unknown
        substance, characterize its concentration, establish skin contact, or demonstrate a medical
        consequence. Industrial hygiene conclusions must be based on appropriate measurements,
        records, and professional analysis.
      </p>
      <p>
        Spear and Lancaster’s published discussion of exposure assessments similarly emphasizes
        understanding tasks, work practices, and the sampling strategy rather than relying on a single
        observation (Spear and Lancaster,{" "}
        <Cite href={sources.spear}>“Industrial Hygiene Exposure Assessments”</Cite>). Reality capture can
        provide spatial context for that work, but the disciplines remain distinct.
      </p>

      <h2>A Short Hypothetical Example of a Useful Deliverable</h2>
      <p>
        Assume an investigator has two conflicting accounts of where a technician worked near a process
        tank. One account places the technician at the base of the vessel; another places the technician on
        a platform several feet above it. The technician’s exact position at the time of an alleged event is
        disputed.
      </p>
      <p>
        A scanning team documents the accessible tank area and produces a navigable model. The
        investigator marks the two reported positions with distinct labels, selects the visible tank connection
        of interest, and requests separate measurements from each position. Photographs identify the
        ladder, platform railing, adjacent process piping, and the connection.
      </p>
      <p>
        The resulting record does not determine which account is correct. It provides the parties with a
        shared view of the geometry and makes the differences between the two descriptions tangible. The
        investigator can see which distances are being discussed and what equipment is involved. If the
        scan was taken after an equipment change, that limitation is documented alongside the images.
      </p>
      <p>
        The final question, whether a chemical release caused an occupational exposure, still requires
        independent evaluation. That is precisely why a focused spatial record can be useful: it answers
        the geometry question without pretending to answer all the others.
      </p>

      <h2>A Better Way to Brief the Documentation Team</h2>
      <p>
        The best assignment descriptions are specific. Instead of requesting “a 3D scan of the chemical
        area,” the investigator can specify the process equipment, reported work locations, height
        differences, relevant access routes, suspected source components, and the required level of
        dimensional confidence. The scanning team can then plan viewpoints and supporting photographs
        around those objectives.
      </p>
      <p>
        Before leaving the site, the operator should confirm that the specified locations are captured, the
        relevant equipment labels are legible, restricted areas are documented, and any critical
        measurements are addressed using an appropriate method. After delivery, the investigator should
        be able to trace an annotated point back to the evidence used to define it.
      </p>
      <p>
        SterFlies provides interior reality capture, aerial mapping, and supporting site photography to
        document physical conditions for subsequent professional review. In a chemical exposure
        investigation, SterFlies’ role is to create a clear spatial record of observable conditions. Exposure
        reconstruction, health interpretation, and causation conclusions remain the responsibility of
        qualified professionals working with the full evidence.
      </p>

      <h2>Works Cited</h2>
      <p>
        Matterport. “Pro3 3D Camera for Scanning and Virtual Tours.” Matterport,{" "}
        <a href={sources.matterportPro3} target="_blank" rel="noreferrer">https://matterport.com/pro3</a>.
      </p>
      <p>
        Matterport. “Take Measurements of Your Spaces.” Matterport Support,{" "}
        <a href={sources.matterportMeasure} target="_blank" rel="noreferrer">https://support.matterport.com/s/article/Introducing-Measurement-Mode-Now-Everyone-Can-Measure?language=en_US</a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “OSHA Technical Manual, Section II, Chapter 1:
        Personal Sampling for Air Contaminants.” U.S. Department of Labor,{" "}
        <a href={sources.oshaOtm} target="_blank" rel="noreferrer">https://www.osha.gov/otm/section-2-health-hazards/chapter-1</a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “Respirator Selection.” Respiratory Protection
        eTool, U.S. Department of Labor,{" "}
        <a href={sources.oshaRespirator} target="_blank" rel="noreferrer">https://www.osha.gov/etools/respiratory-protection/respirator-selection</a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “Sampling.” Sampling and Analysis, U.S.
        Department of Labor,{" "}
        <a href={sources.oshaSampling} target="_blank" rel="noreferrer">https://www.osha.gov/sampling-analysis/sampling</a>.
      </p>
      <p>
        Spear and Lancaster. “Industrial Hygiene Exposure Assessments: Worst-Case vs. Random
        Sampling.” Spear and Lancaster,{" "}
        <a href={sources.spear} target="_blank" rel="noreferrer">https://jespear.com/industrial-hygiene-exposure-assessments-worst-case-vs-random-sampling/</a>.
      </p>
    </ArticleLayout>
  )
}
