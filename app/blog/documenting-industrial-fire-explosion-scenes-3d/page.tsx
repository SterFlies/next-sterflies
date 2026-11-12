import ArticleFigure, { ArticleFigureRow } from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("documenting-industrial-fire-explosion-scenes-3d")

const sources = {
  nfpa: "https://www.nfpa.org/codes-and-standards/nfpa-921-standard-development/921",
  oshaField: "https://www.osha.gov/shms/chapter-23",
  oshaManual: "https://www.osha.gov/otm/section-5-construction-operations/chapter-1",
  spear:
    "https://jespear.com/dont-wait-navigate-process-safety-management-psm-standards-amid-pending-regulatory-updates/",
  matterport:
    "https://matterport.com/industries/case-studies/rimkus-utilizes-matterport-streamline-forensic-consulting-engineering",
  nist: "https://www.nist.gov/adlp/spo/organization-scientific-area-committees-forensic-science/strengthening-fire-and-explosion",
}

function Cite({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>
}

export default function Page() {
  return (
    <ArticleLayout
      slug="documenting-industrial-fire-explosion-scenes-3d"
      wordCount={1928}
      cta={{
        heading: "A record of what remained",
        body: "SterFlies can document physical conditions at a fire or explosion scene when access is authorized and the method fits the limits of the site. Origin and cause findings remain with the specialists qualified to make them.",
      }}
    >
      <p>
        A serious fire can transform an industrial facility in minutes. Wall panels buckle, piping
        loses support, ceiling materials fall, and equipment may be displaced. Then the scene
        changes again. Emergency crews move through the facility, damaged structures are stabilized,
        and eventually someone has to clear debris so the facility can be repaired or demolished.
      </p>
      <p>
        Investigators need a reliable picture of what remained after the event, including features
        that might not survive the next stage of work. Photographs and written observations are
        essential. In some situations, aerial mapping, 3D scanning, and carefully planned ground
        photography can also help document the arrangement of damaged equipment, structural
        openings, access routes, and debris. These records support examination, not explanation of
        the fire by themselves.
      </p>
      <p>
        The National Fire Protection Association’s <Cite href={sources.nfpa}>NFPA 921</Cite> provides
        a systematic approach to fire and explosion investigation, including the documentation and
        evaluation of physical evidence (<Cite href={sources.nfpa}>National Fire Protection Association</Cite>). A scan is one method for collecting spatial observations within that broader
        process.
      </p>

      <h2>Scene Control Comes Before the Camera</h2>
      <p>
        The first decision is not which camera to use. It is whether documentation can proceed
        without interfering with emergency operations or exposing personnel to uncontrolled hazards.
        After an industrial fire, a structure may contain energized equipment, damaged pressure
        systems, unstable floors, hazardous residues, or an atmosphere that has not been assessed. A
        fire may be extinguished while the site remains unsafe to enter.
      </p>
      <p>
        OSHA’s incident response guidance warns personnel against accessing structures or equipment
        when structural integrity is uncertain, unless the necessary evaluation and controls are in
        place. That principle applies to a documentation crew just as it does to other site visitors
        (Occupational Safety and Health Administration,{" "}
        <Cite href={sources.oshaField}>“Field Safety and Health Management System”</Cite>).
      </p>
      <p>
        The lead investigator, incident command, site owner, and appropriate safety specialists
        determine where access is authorized and what activities are permitted. The operator then
        selects a method that fits those limits. A drone may provide useful exterior imagery from an
        approved location, but smoke, emergency aircraft, electrical hazards, or flammable vapors can
        make a flight inappropriate. A terrestrial scanner does not make entry into a compromised
        building safe.
      </p>
      <p>
        Access restrictions should be documented. If a room, mezzanine, or process enclosure cannot
        be examined, the final deliverable should state this rather than leaving reviewers to assume
        the entire space was captured.
      </p>

      <h2>Start With the Equipment and the Surrounding Arrangement</h2>
      <p>
        Consider a manufacturing facility with a dust collector, conveying equipment, storage bins,
        and several connected process lines. A fire or explosion damages a portion of the system. The
        investigation may require a clear record of the locations of these components relative to
        openings, adjacent machinery, platforms, and building boundaries.
      </p>
      <p>
        The field team should obtain a capture plan from the qualified investigator. The plan might
        call for an overview of the affected building, photographs of equipment identification
        plates, close-up views of damaged connections, and wider images that show how the individual
        components relate to one another. Capturing the entire facility at the expense of those
        specific details would be a poor use of time.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794500563/Fire-Damaged_Industrial_Plant_Interior_libqgp.png"
          alt="Illustrative interior of a fire damaged industrial facility showing machinery, pipework, debris, and damaged structural components."
          caption="Illustrative industrial fire scene showing machinery, piping, and surrounding structural conditions that may require detailed documentation during an investigation."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794501014/Screenshot_2026-11-12_102936_ygvurj.png"
          alt="Illustrative close view of fire damaged industrial machinery showing a pump assembly, connected piping, and surrounding equipment."
          caption="Detailed equipment photographs can preserve visible component conditions that may not be sufficiently represented in a broader 3D model."
        />
      </ArticleFigureRow>
      <p>
        A model can help orient reviewers who were not present, especially when equipment spans
        multiple levels or when lines of sight are blocked by pipe racks. However, a model based on
        exterior imagery will not show the condition inside a closed vessel or reveal components
        behind sheet metal. Openings and inaccessible interiors may require separate examination by
        authorized specialists.
      </p>
      <p>
        Spear &amp; Lancaster’s process safety publications emphasize the importance of understanding
        industrial equipment, hazardous materials, and mechanical integrity to prevent major
        incidents (<Cite href={sources.spear}>Spear &amp; Lancaster</Cite>). The physical
        documentation described here can support that work, while the interpretation of mechanical
        failures and process conditions remains with appropriately qualified professionals.
      </p>

      <h2>Recording Structural Damage Without Guessing at Its Cause</h2>
      <p>
        Fire-damaged buildings can present unfamiliar geometry. Roof framing may have sagged; walls
        may no longer be plumb; parts of a platform may have dropped into another work area.
        Wide-angle photographs show the extent of the scene, but individual images can make it
        difficult to follow the arrangement of structural features across a large building.
      </p>
      <p>
        Ground scans or photogrammetry may provide a record of accessible surfaces and their relative
        positions. An exterior drone survey can show visible roof loss, wall openings, areas of
        collapse, and the relationship between the damaged structure and nearby buildings. Interior
        capture, when permitted, may record support members, equipment foundations, floor levels, and
        accessible debris fields.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794501013/Screenshot_2026-11-12_102843_l7i6mc.png"
          alt="Illustrative ground level exterior view of a fire damaged industrial warehouse showing exposed steel framing and damaged building materials."
          caption="An exterior view can document visible structural damage, access conditions, and the arrangement of debris before significant changes are made to the site."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794501013/Screenshot_2026-11-12_102918_khiayr.png"
          alt="Illustrative exterior view of a fire damaged industrial process facility with exposed structural steel, piping, and machinery."
          caption="Fire damage can leave industrial structures, piping, and equipment exposed. Their visible positions and conditions may be relevant to subsequent technical review."
        />
      </ArticleFigureRow>
      <p>
        The resulting geometry should be described carefully. A visibly bent beam is an observation.
        Determining why it bent, when it moved, or whether it failed before or after a particular
        event requires additional evidence and analysis. Heat effects, impact, firefighting activity,
        and structural collapse can all complicate what a postincident scene appears to show.
      </p>
      <p>
        For work involving demolition or removal of fire-damaged structures, OSHA identifies
        structural evaluation, appropriate bracing or shoring, and potential hazardous materials as
        relevant safety concerns (Occupational Safety and Health Administration,{" "}
        <Cite href={sources.oshaManual}>“OSHA Technical Manual”</Cite>). Those decisions fall to the
        qualified project team, not the scanning operator.
      </p>

      <h2>Debris Locations Matter, but Timing Matters More</h2>
      <p>
        A piece of displaced ductwork may be found on the floor, far from its original position. A
        failed wall section might conceal equipment that was visible earlier. Investigators may need
        to document those locations before recovery work begins.
      </p>
      <p>
        Photographs should show each significant item in context before collecting close-up details.
        A spatial model can help place an annotated image within the overall scene and preserve
        approximate relationships among visible objects. Each annotation needs to distinguish what
        the camera recorded from what an investigator later determined.
      </p>
      <p>
        One problem is easy to miss: the scene captured by a scanner is the scene at the time of
        scanning. It is not automatically the scene as it existed at ignition, during an explosion, or
        immediately after suppression. Equipment may have been moved to reach a fire, debris may have
        been disturbed during rescue operations, and walls may have been opened to complete
        extinguishment.
      </p>
      <p>
        If capture sessions occur before and after major scene work, keep them separate and identify
        the dates and stages. A chronological set of records is often more informative than combining
        all observations into a single model that appears to depict a single moment.
      </p>

      <h2>How Aerial and Interior Documentation Work Together</h2>
      <p>
        No single imaging method covers every industrial fire scene well. Aerial photography can
        establish the overall scene and identify visible exterior damage. A 3D interior scan may help
        reviewers navigate accessible rooms, platforms, and corridors. Close-up photographs remain
        the better choice for labels, connections, small damaged parts, and detailed surface
        observations.
      </p>
      <p>
        For a large plant, an exterior orthomosaic may serve as a reference for building locations,
        access routes, and equipment yard locations. Oblique drone photographs provide perspective on
        elevations and overhead structures. An interior walkthrough then helps reviewers understand
        how accessible rooms and equipment spaces connect.
      </p>
      <ArticleFigureRow>
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794501013/Screenshot_2026-11-12_102848_wdhjgk.png"
          alt="Illustrative aerial view of a fire damaged industrial warehouse with a drone documenting the site from above."
          caption="Aerial documentation may provide additional views of damaged roofing, exposed framing, and surrounding site conditions without requiring personnel to approach certain hazardous areas."
        />
        <ArticleFigure
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794501013/Screenshot_2026-11-12_102911_nti8j5.png"
          alt="Illustrative overhead aerial view of a fire damaged industrial facility showing exposed roofing structures and surrounding site conditions."
          caption="An overhead perspective can document the arrangement of damaged roof sections, structural framing, and adjacent site features."
        />
      </ArticleFigureRow>
      <p>
        The two records may not share the same coordinate system or level of measurement accuracy.
        They should not be treated as a single verified survey simply because they can be displayed
        together. If distance or elevation is relevant to the investigation, the capture method and
        verification requirements should be established before relying on the value.
      </p>
      <p>
        Matterport’s <Cite href={sources.matterport}>published case study</Cite> on the forensic
        consulting firm Rimkus describes using 3D spaces after property losses so technical
        specialists can revisit documented rooms and review conditions after cleanup (<Cite href={sources.matterport}>Matterport</Cite>). That is a useful example of how a
        navigable record fits into a consulting workflow, not evidence that every damaged building
        can be safely or completely scanned.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794505489/Matterport_Scanner_in_Burnt_Industrial_Plant_k0b6bz.png"
        alt="Illustrative Matterport scanning camera positioned inside an industrial building."
        caption="Three dimensional scanning equipment can document accessible interior spaces once the site has been evaluated and cleared for the intended documentation activities."
      />

      <h2>Deciding Whether a Model Is Detailed Enough</h2>
      <p>
        A visually convincing reconstruction can still omit the detail an investigator needs.
        Charred, low-texture surfaces, reflective sheet metal, standing water, smoke residue, and
        blocked camera views can all affect image-based reconstruction or optical scanning. Large
        openings, dark corners, and damaged surfaces may leave gaps.
      </p>
      <p>
        Coverage checks should be performed on site when conditions permit. Review the model for any
        incomplete areas. Compare the available views with the investigator’s capture list.
        Photograph important damaged connections and identification labels separately, even if the
        surrounding space appears complete in the model.
      </p>
      <p>
        The operator should also explain the types of measurements the deliverable supports. A
        browser-based measurement taken in a general visualization should not be presented as a
        verified engineering dimension. Instrument characteristics, scene conditions, control,
        registration, and independent checks determine whether a particular measurement is suitable
        for technical use.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794505481/Annotated_Damaged_Industrial_Facility_Cutaway_dlaau8.png"
        alt="Illustrative three dimensional model of a fire damaged industrial building with machinery, structural framing, and measurement annotations."
        caption="Illustrative 3D model showing documented industrial equipment, structural features, and example spatial measurements within a fire damaged facility."
      />
      <p>
        When precision is critical, a qualified surveyor, engineer, or other appropriate specialist
        may need to establish and verify the dimensions using methods suited to the question.
      </p>

      <h2>Preserving the Source Files and the Story of the Capture</h2>
      <p>
        The final deliverable is more than a link to a virtual tour. A reviewer should be able to
        determine when the scene was recorded, who collected it, which areas were accessible, and
        what processing was performed before the result was delivered.
      </p>
      <p>
        A practical handover may include original photographs and video, an organized 3D model or
        point cloud, selected annotated views, a record of capture date and location, and notes on
        excluded or incomplete areas. If multiple site visits occurred, keep each version
        identifiable. Do not overwrite an earlier record with a later one.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1794505482/Fire-Damaged_Industrial_Facility_Isometric_Render_gz9bku.png"
        alt="Illustrative three dimensional model of an industrial facility showing machinery, exposed structural framing, and interior equipment arrangements."
        caption="Illustrative 3D facility model demonstrating how structural features, equipment locations, and surrounding physical conditions can be organized within a spatial record."
      />
      <p>
        Original media should remain distinguishable from edited images, interpretive labels,
        illustrative reconstructions, and presentation graphics. File integrity procedures,
        permissions, retention, and formal chain of custody should be agreed upon with the
        investigative team when the material may be used as evidence.
      </p>
      <p>
        The NIST-hosted technical guidance from the Organization of Scientific Area Committees
        emphasizes systematic documentation of evidence and careful forensic practices in fire and
        explosion investigations (<Cite href={sources.nist}>OSAC Fire &amp; Explosion Investigation Subcommittee</Cite>). Spatial records can help, but they require the same attention to
        provenance and limitations as any other evidence collection method.
      </p>

      <h2>A Record That Can Survive the Cleanup</h2>
      <p>
        Cleanup, stabilization, and reconstruction are essential to recovering from an industrial
        incident. They also remove or alter features that a later reviewer may want to examine. The
        documentation team’s job is to collect the requested visual and spatial record while those
        features can still be safely observed.
      </p>
      <p>
        For a fire or explosion scene, this means starting with a clearly defined investigative need,
        coordinating access, documenting critical equipment and structural relationships, identifying
        gaps in coverage, and protecting the original files. Detailed photographs may be sufficient
        for some assignments. Others warrant aerial mapping, interior 3D capture, or a combination of
        methods.
      </p>
      <p>
        SterFlies provides aerial and ground-based site documentation to support professional review.
        The company’s role is to document physical conditions using methods appropriate to the
        assignment. Origin and cause findings, structural evaluations, process analysis, and legal
        conclusions remain the responsibility of the specialists qualified to make them.
      </p>
      <p>
        A good model cannot tell an investigator what happened. It can help preserve the scene&apos;s
        appearance as it looked when the field team was finally able to document it.
      </p>

      <h2>Works Cited</h2>
      <p>
        Matterport. “Rimkus Utilizes Matterport to Streamline Forensic Consulting, Engineering
        Design, and Technical Services.” Matterport.{" "}
        <a href={sources.matterport} target="_blank" rel="noreferrer">https://matterport.com/industries/case-studies/rimkus-utilizes-matterport-streamline-forensic-consulting-engineering</a>.
      </p>
      <p>
        National Fire Protection Association. <em>NFPA 921: Guide for Fire and Explosion Investigations</em>. 2024 ed., NFPA.{" "}
        <a href={sources.nfpa} target="_blank" rel="noreferrer">https://www.nfpa.org/codes-and-standards/nfpa-921-standard-development/921</a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “Field Safety and Health Management System
        Manual: Chapter 23.” U.S. Department of Labor.{" "}
        <a href={sources.oshaField} target="_blank" rel="noreferrer">https://www.osha.gov/shms/chapter-23</a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “OSHA Technical Manual: Section V, Chapter
        1.” U.S. Department of Labor.{" "}
        <a href={sources.oshaManual} target="_blank" rel="noreferrer">https://www.osha.gov/otm/section-5-construction-operations/chapter-1</a>.
      </p>
      <p>
        OSAC Fire &amp; Explosion Investigation Subcommittee. <em>Strengthening Fire and Explosion Investigation in the United States: A Strategic Vision for Moving Forward</em>. National Institute of Standards and Technology, Apr. 2021.{" "}
        <a href={sources.nist} target="_blank" rel="noreferrer">https://www.nist.gov/adlp/spo/organization-scientific-area-committees-forensic-science/strengthening-fire-and-explosion</a>.
      </p>
      <p>
        Spear &amp; Lancaster. “Don’t Wait: Navigate Process Safety Management (PSM) Standards Amid
        Pending Regulatory Updates.” Spear &amp; Lancaster.{" "}
        <a href={sources.spear} target="_blank" rel="noreferrer">https://jespear.com/dont-wait-navigate-process-safety-management-psm-standards-amid-pending-regulatory-updates/</a>.
      </p>
    </ArticleLayout>
  )
}
