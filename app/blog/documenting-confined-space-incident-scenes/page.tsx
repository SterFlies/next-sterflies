import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("documenting-confined-space-incident-scenes")

export default function Page() {
  return (
    <ArticleLayout
      slug="documenting-confined-space-incident-scenes"
      wordCount={1520}
      cta={{
        heading: "A record of what could be observed",
        body: "SterFlies can document the physical arrangement of a site when the work is authorized and the method is suitable. The record supports later review. It does not replace hazard evaluation or professional judgment.",
      }}
    >
      <p>
        After an incident in an industrial tank, utility vault, or processing vessel, investigators may
        have only a partial view of the work site. The opening is visible from outside, but the route
        to the work location may not be. Internal piping, ladders, partitions, and equipment can make
        even a short distance difficult to describe accurately. Before anyone tries to photograph the
        interior, the team has to address a more immediate question: can the space be approached or
        entered safely at all?
      </p>
      <p>
        Reality capture can help document the physical arrangement of a space once the work is
        authorized and the selected equipment is suitable. This may involve photographs taken from an
        opening, a terrestrial scanner positioned in a safe location, or specialized remote inspection
        equipment. The useful outcome is not necessarily a complete 3D model. Sometimes the most
        important result is a well-documented access opening or a clear record of the area that could
        not be reached.
      </p>

      <h2>A confined space is not simply a small room</h2>
      <p>
        Under OSHA’s general industry standard, a confined space is large enough for a worker to enter
        and perform work, has limited or restricted entry or exit, and is not designed for continuous
        occupancy. Tanks, vessels, pits, and vaults can meet those criteria. A permit-required
        confined space has an additional serious or potential hazard, such as a hazardous atmosphere,
        engulfment, an entrapment configuration, or another recognized serious safety or health hazard
        (Occupational Safety and Health Administration, “1910.146”).
      </p>
      <p>
        That distinction matters for documentation crews. A comfortable-looking equipment room does
        not automatically fall under the rule; a large vessel may. Construction work has its own
        confined spaces standard under 29 CFR Part 1926, Subpart AA. Applicable requirements depend
        on the activity and setting (Occupational Safety and Health Administration, “Confined Spaces
        in Construction”). A camera assignment does not change the space’s classification or the
        employer’s responsibility to assess its hazards.
      </p>

      <h2>Begin with the access points and the route inside</h2>
      <p>
        A useful record begins outside the space. Photograph the entry location relative to nearby
        equipment, work surfaces, and fixed structures. Record the size and visible configuration of
        the opening using an appropriate measuring method. Note the positions of ladders, steps,
        platforms, handholds, and any obstructions that affect movement into or out of the space.
        When there is more than one opening, identify each one clearly rather than relying on names
        such as “north hatch” without a site reference.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793379537/confined_space_-_2_tqov3t.jpg"
        alt="Interior view of an industrial confined space showing access features and surrounding structural conditions."
        caption="Interior of an industrial confined space showing restricted access and internal features relevant to documenting entry and exit conditions."
      />
      <p>
        Inside an industrial vessel, the route may turn around baffles or pass through a series of
        compartments. Investigators may need to determine where a worker was assigned, which passages
        connected the work area to the exit, and whether fixed equipment narrowed those passages. A
        navigable model can illustrate the visible arrangement, but the underlying record should still
        include photographs, measurements, and a description of any missing areas.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793379617/confined_space_-3_nmqmpg.png"
        alt="Illustrative three dimensional industrial vessel model with labeled access openings, fixed ladder, piping, internal partition, and measurement annotations."
        caption="Illustrative 3D model of an industrial vessel showing access points, internal equipment, structural features, and example spatial measurements."
      />
      <p>
        Distances in these settings warrant particular care. The straight-line distance between a
        work area and an opening may differ substantially from the route a person could actually
        travel. Neither distance, standing alone, establishes the time required to exit or whether
        rescue could have succeeded. Such questions require a broader investigation.
      </p>

      <h2>What can be captured before anyone enters?</h2>
      <p>
        The first photographs may be taken from outside the opening. A camera or inspection device
        can sometimes reveal accessible interior surfaces without placing an operator inside. Whether
        that is feasible depends on the geometry, lighting, equipment reach, and the hazards at the
        location. An opening that provides a clear view in one direction may leave equipment and
        recesses completely hidden in another.
      </p>
      <p>
        When entry is not authorized, it is better to document the available view and identify the
        limitations than to imply that the full interior was examined. A specialized remote system
        may be appropriate for some locations, but it must be evaluated for the environment. A
        conventional drone, consumer camera, or standard 3D scanner should not be assumed suitable
        for an atmosphere where flammable substances could be present. Equipment selection is both a
        safety and a documentation decision.
      </p>
      {/*
        Image 5 insertion point: aerial view in "What can be captured before anyone enters?"
        The supplied URL duplicated Image 4, so no image is shown here until a distinct Cloudinary URL is available.
        Caption: Aerial perspective of an industrial vessel and surrounding equipment illustrating how exterior site documentation can support investigations when interior access is restricted.
        Alt: Aerial view of an industrial storage vessel showing access platforms, piping, surrounding equipment, and the broader facility layout.
      */}
      <p>
        If entry later becomes permissible under the applicable program, the capture plan can be
        expanded. The photography or scanning team should operate within the established permit,
        isolation, monitoring, communication, and rescue arrangements. OSHA’s permit-space
        requirements address these controls; an attractive 3D deliverable is not a reason to bypass
        them (Occupational Safety and Health Administration, “1910.146”).
      </p>

      <h2>Choose the instrument around the question</h2>
      <p>
        Documenting a wide view of a tank interior and precisely measuring a ladder rung require
        different methods. Ground photography is often the clearest way to record labels, surface
        damage, connections, and other small details. A terrestrial scanner may be useful for more
        extensive interior geometry when access, visibility, and equipment conditions permit. A
        360-degree walkthrough can show how areas connect, but the ability to navigate a model does
        not establish that its measurements meet a particular tolerance.
      </p>
      <p>
        Reflective metal, standing water, dark surfaces, cramped corners, and repeated patterns can
        complicate optical capture. Pipes and structural members create occlusions that a scanner
        cannot penetrate. Multiple viewpoints may be needed, and some spaces may remain incomplete
        even after careful work. These are not merely processing problems. They affect what an
        investigator can reasonably conclude from the result.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793379761/confined_space_4_zco4lh.png"
        alt="Illustrative three dimensional industrial utility vault with annotated piping, pump equipment, access ladder, and spatial measurements."
        caption="Illustrative 3D documentation of an industrial utility vault identifying piping, equipment, access points, and example measurements."
      />
      <p>
        Before capture begins, the investigator and documentation operator should agree on the
        observations to be recorded. Is the task to record the position of a valve relative to a
        walkway? To establish the width of an opening? To show the route between a platform and a
        hatch? If a dimension may be used in engineering or forensic analysis, define the required
        accuracy and how the measurement will be verified. A visually convincing model is not a
        substitute for that step.
      </p>

      <h2>Separate the physical scene from the hazardous conditions</h2>
      <p>
        A scan can show a pipe, a ventilation duct, a drain, or a work platform. It cannot reveal the
        oxygen concentration at the time of an incident or determine whether a toxic gas was present.
        Nor can the appearance of a ventilation opening prove that effective airflow was present
        during the work. Atmospheric readings, instrument records, operating procedures, witness
        accounts, and other evidence may be needed to address those questions.
      </p>
      <p>
        The same principle applies to a worker’s location. A model can record a vessel’s documented
        geometry, but it does not independently establish where a person was at a particular moment.
        If that location is inferred from testimony or other evidence, the article or investigative
        exhibit should state that. Physical documentation and incident reconstruction are related but
        not interchangeable tasks.
      </p>

      <h2>Keep the source record useful to the next reviewer</h2>
      <p>
        Confined-space imagery can be confusing when every frame looks like another section of the
        same pipe or wall. A practical delivery should identify the entry point, orientation, capture
        locations where known, the acquisition date, and the areas that were not documented. A simple
        location diagram can help readers connect detailed photographs to the larger interior. When a
        3D model is provided, annotations should identify relevant features without covering or
        altering the original observations.
      </p>
      <p>
        Original photographs and scan files should remain distinguishable from processed models and
        marked-up exhibits. If equipment was moved, the space was cleaned, or other changes occurred
        before capture, document what is known about those changes. For assignments involving
        litigation or sensitive operations, the parties should establish expectations for access,
        retention, and distribution before the files are circulated.
      </p>
      <p>
        One useful practice is to pair each important spatial observation with its source. If an
        annotation identifies a ladder&apos;s location, provide the corresponding photograph or the
        viewpoint from which the scan was taken. If a measurement is called out, include the method
        and any verification record. That approach makes the documentation easier to assess without
        asking reviewers to accept the model based on appearance alone.
      </p>

      <h2>A limited record can still answer an important question</h2>
      <p>
        An incident site need not be scanned in its entirety to yield useful information. A properly
        documented hatch opening, an accessible portion of a tunnel, or a set of views showing
        internal obstructions may answer a specific investigative question. In other cases, the
        available access will not support meaningful 3D coverage, and that conclusion should be
        recorded plainly.
      </p>
      <p>
        For SterFlies, confined-space documentation is best understood as a carefully planned
        field-recording service that supports qualified investigators. The investigator determines
        which physical information is relevant. The responsible site and entry personnel determine
        whether and how the work may proceed. The documentation operator selects an appropriate
        method and records what was actually observed. The resulting photographs, measurements, and
        spatial views can support technical review, but they do not replace hazard evaluation,
        testimony, testing, or professional judgment.
      </p>

      <h2>Works Cited</h2>
      <p>
        Occupational Safety and Health Administration. “1910.146: Permit Required Confined Spaces.”
        U.S. Department of Labor,{" "}
        <a
          href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146"
          target="_blank"
          rel="noreferrer"
        >
          https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.146
        </a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “Confined Spaces in Construction.” U.S.
        Department of Labor,{" "}
        <a
          href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926subpartAA"
          target="_blank"
          rel="noreferrer"
        >
          https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926subpartAA
        </a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “Confined Spaces.” U.S. Department of Labor,{" "}
        <a href="https://www.osha.gov/confined-spaces/" target="_blank" rel="noreferrer">
          https://www.osha.gov/confined-spaces/
        </a>.
      </p>
      <p>
        Occupational Safety and Health Administration. “1926.1203: General Requirements.” U.S.
        Department of Labor,{" "}
        <a
          href="https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1203"
          target="_blank"
          rel="noreferrer"
        >
          https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1203
        </a>.
      </p>
    </ArticleLayout>
  )
}
