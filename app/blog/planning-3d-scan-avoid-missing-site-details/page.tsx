import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("planning-3d-scan-avoid-missing-site-details")

const sources = {
  completeModel:
    "https://matterport.com/matterport-academy/using-pro-series-cameras/generate-a-complete-model",
  scanPositions:
    "https://matterport.com/matterport-academy/using-pro-series-cameras/fix-scan-position-issues",
  pro3Faq: "https://support.matterport.com/s/article/FAQ-Pro3-Camera?language=en_US",
  spear: "https://jespear.com/expert-witness-houston/",
}

function Cite({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <ArticleLayout
      slug="planning-3d-scan-avoid-missing-site-details"
      wordCount={1616}
      cta={{
        heading: "A record that can answer the question",
        body: "SterFlies can plan a scan around the features a later reviewer needs to see, and record what could not be captured. The documentation supports technical review. It does not replace the professional responsible for interpreting it.",
      }}
    >
      <p>
        A mechanical room can be scanned from wall to wall and still be missing the one connection an
        investigator wants to examine. The walkthrough opens, the floor plan looks complete, and the
        equipment is easy to find. Then someone asks to see the pipe entering the back of a pump. In
        the model, that part of the assembly is hidden behind a cabinet. No amount of rotating the
        finished view will reveal a surface the camera never captured.
      </p>
      <p>
        That is a capture planning problem, not a processing problem. The practical question before a
        site visit is not simply how many scans to take. It is which physical details must remain
        visible when the documentation is handed to someone who was not present.
      </p>

      <h2>Give the Capture Crew a Short List of Questions</h2>
      <p>
        The first discussion should be with the person who will use the record. An industrial
        hygienist may need the positions of supply and return openings relative to sample locations.
        A safety investigator may need a view beneath an elevated platform or behind a fixed guard.
        An engineer may want photographs of connections, labels, and clearances around a piece of
        equipment. These requests sound similar until the camera is on its tripod, at which point
        they lead to very different choices in the field.
      </p>
      <p>
        Before mobilizing, identify the priority features, the intended deliverable, and whether any
        dimensions must be verified. Ask whether the result is intended for orientation, condition
        review, a measured drawing, or detailed inspection of a specific assembly. A navigable model
        can handle the first two well under suitable conditions. A request for critical dimensions
        may require independent measurements or a different capture specification.
      </p>
      <p>
        For a busy facility, it helps to identify a few key locations that cannot be missed rather
        than asking for every possible surface. The camera operator can then plan the route around
        those locations and reserve time for additional views. If the assignment changes on site, the
        new request should be recorded rather than quietly expanding the scope of the finished model.
      </p>

      <h2>Plan Around What Blocks the View</h2>
      <p>
        A 3D camera captures visible surfaces from each setup position. Objects can block other
        objects. In a plant, pipe racks, structural columns, tanks, stored materials, and machine
        enclosures can divide a small room into many separate sight lines. Even an area with good
        floor coverage may have poor coverage behind equipment or above an overhead platform.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793826734/matterport_scan_yniega.jpg"
        alt="Industrial machinery and equipment showing complex structures that can obstruct three dimensional scanning coverage."
        caption="Complex industrial equipment can obstruct portions of a scan. Additional camera positions may be required to document concealed surfaces and equipment connections."
      />
      <p>
        A useful first pass follows the path a person would take through the room. The second pass is
        different: walk around the items that matter and look for surfaces missing from the first set
        of views. Check both sides of a large machine, openings between equipment, the undersides of
        accessible platforms, and the areas around identified measurement points. Do not assume that a
        wider view from farther away will capture a small feature that remains obstructed.
      </p>
      <p>
        Matterport’s Pro Series training explicitly recommends looking for missing geometry and
        scanning from additional positions, including lower ones, when occlusion prevents a complete
        model (Matterport, <Cite href={sources.completeModel}>“Generate a Complete Model”</Cite>). That is a useful operating principle, although actual scan positions still depend on
        available clearance, site permissions, and the feature being documented.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793827045/Screenshot_2026-11-04_151659_spdlbj.png"
        alt="Technical illustration showing multiple scanning positions arranged around industrial machinery to improve coverage and reduce blind spots."
        caption="Illustrative scan planning diagram showing how multiple capture positions can improve coverage around industrial equipment and reduce areas hidden from view."
      />

      <h2>Use Overlap to Keep the Route Coherent</h2>
      <p>
        Individual scan positions need sufficient shared information for the software to place them
        relative to one another. A long corridor of nearly identical doors, a row of matching storage
        tanks, or a large open warehouse can make alignment harder than in a compact room with
        distinctive features. There is no universal spacing rule. Operators need to monitor the live
        alignment results and shorten the distance between positions when the geometry provides few
        reliable references.
      </p>
      <p>
        Matterport recommends reducing scan distance, maximizing overlap, and verifying scan
        positions in the capture application when alignment is uncertain (Matterport, <Cite href={sources.scanPositions}>“Fix Scan Position Issues”</Cite>). The manufacturer also notes that the Pro3 can scan relatively large open spaces, but the
        appropriate indoor spacing depends on the required level of detail and the navigation
        experience (Matterport, <Cite href={sources.pro3Faq}>“FAQ: Pro3 Camera”</Cite>).
      </p>
      <p>
        At a doorway or a turn, place enough views on both sides of the transition to maintain a
        continuous path. If an important room is connected only by a thin or confusing sequence of
        scans, correct it while still on site. A later reviewer should not have to guess whether a
        misplaced room in the model represents the building or an alignment issue.
      </p>

      <h2>Treat Reflective Surfaces and Moving Equipment as Special Cases</h2>
      <p>
        Industrial facilities offer no shortage of surfaces that are difficult to capture: polished
        stainless steel, glass, dark recesses, and repeating sections of metal piping. Depending on
        the sensor and processing method, those materials can contribute incomplete or misleading
        geometry. The scan may remain useful for orientation without accurately representing every
        pipe edge or reflective panel.
      </p>
      <p>
        Moving equipment raises a separate problem. A forklift passing between positions, an
        operating conveyor, or workers moving through the scene can produce inconsistent
        observations. Matterport’s Pro3 guidance recommends minimizing motion where practicable
        because dynamic objects may be blurred, omitted, or represented inconsistently in the
        processed result (Matterport, <Cite href={sources.pro3Faq}>“FAQ: Pro3 Camera”</Cite>).
      </p>
      <p>
        Rather than promise perfect results, note the limitations and collect supporting photographs.
        Equipment nameplates, control markings, small cracks, fasteners, and tight connections often
        need close views. Those photographs may be more valuable to the eventual reviewer than
        another scan position taken solely to make the overall model look fuller.
      </p>

      <h2>Separate Navigable Coverage From Measurable Detail</h2>
      <p>
        A camera position may be sufficient for moving through a digital walkthrough but inadequate
        for measuring a specific clearance. The fact that two objects appear in one virtual room does
        not establish that the distance between them has been captured with the accuracy an
        investigator needs.
      </p>
      <p>
        The <Cite href={sources.pro3Faq}>Matterport Pro3 FAQ</Cite> describes the performance of its raw depth data and cautions that
        close range points are more reliable for measurement than distant points (Matterport, <Cite href={sources.pro3Faq}>“FAQ: Pro3 Camera”</Cite>). Those specifications are not a guarantee of accuracy for every field condition, processed
        model, or individual measurement. If a dimension could materially affect the investigation,
        agree on the required method and verification before the visit. Sometimes that means a tape
        or laser distance measurement made by authorized personnel. Sometimes it means a separately
        controlled survey or another specialist instrument.
      </p>
      <p>
        The aim is not to turn every walkthrough into a survey. It is to prevent a reviewer from
        treating a convenient on-screen measurement as though its uncertainty had already been
        evaluated.
      </p>

      <h2>Make the Coverage Check Before Packing Up</h2>
      <p>
        The last few minutes on site may be the most valuable part of the capture. Open the capture
        application and trace the route from entry to the last room. Look for isolated positions,
        missing transitions, misaligned areas, and obvious holes around the priority subjects.
        Compare the model against the capture list, not merely against the building’s floor area.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793826800/matterport_scan_facility_dj2xf2.jpg"
        alt="Three dimensional industrial facility model displayed in an overall view for reviewing scanning coverage and spatial relationships."
        caption="A three dimensional facility overview can help operators review captured areas and identify locations that may require additional scanning."
      />
      <p>
        Then ask a more demanding question: Can the next person actually see the detail they
        requested? If the task was to document ladder access to a platform, check that the ladder
        landing and surrounding area are legible. If it was to identify equipment locations, confirm
        that labels and nearby connections are covered by suitable photographs. Where a feature
        cannot be reached or safely viewed, record that limitation.
      </p>
      <p>A concise departure check may include the following:</p>
      <ul>
        <li>Each priority feature has a usable view or a documented reason for not having one.</li>
        <li>The path through doors, stairs, and large rooms is continuous and properly aligned.</li>
        <li>
          Critical close details have supporting photographs, with filenames linked to locations.
        </li>
        <li>
          Requested dimensions have an agreed measurement method rather than an assumed model
          accuracy.
        </li>
        <li>
          Restricted rooms, blocked surfaces, and changes from the original capture scope are noted.
        </li>
      </ul>

      <h2>When a Complete Scan Is Not Possible</h2>
      <p>
        An active facility may not permit access behind machinery or into a guarded enclosure. A
        confined space may be unsafe or subject to entry controls. A process cannot always be paused
        for documentation. These are not invitations to move equipment or cross barriers for a better
        angle. They are limits that the team should identify and communicate.
      </p>
      <p>
        Keep a short record of inaccessible areas and what alternative views were collected. A model
        that clearly identifies a missing section can be more dependable than one that looks
        continuous but leaves its missing coverage unexplained. An interpolated surface is not a field
        observation. Nor should an image generated later be substituted for an actual photograph of
        the site.
      </p>

      <h2>The Deliverable Should Explain Its Own Boundaries</h2>
      <p>
        A useful handoff contains more than a model link. It identifies when the scan was collected,
        what areas were covered, any relevant restrictions, the supporting photographs, and the
        intended use of measurements. The reviewer should be able to tell whether a particular view
        comes from a scan, an ordinary photograph, or an illustrative drawing.
      </p>
      <p>
        For investigative work, the person responsible for interpretation may be an industrial
        hygienist, safety consultant, engineer, or another qualified professional. Spear &amp;
        Lancaster’s published practice areas include workplace safety, industrial hygiene, and
        incident investigations (<Cite href={sources.spear}>Spear &amp; Lancaster</Cite>). Documentation supports those inquiries; it does not answer the professional questions by
        itself.
      </p>
      <p>
        The best test of a 3D capture is simple: when someone asks a reasonable question about the
        documented site, can the record show the relevant condition? A carefully planned, smaller
        scan with good supporting photographs may answer that question better than a large
        walkthrough assembled without knowing what mattered.
      </p>

      <h2>Works Cited</h2>
      <p>
        Matterport. “FAQ: Pro3 Camera.” Matterport Support,{" "}
        <a href={sources.pro3Faq} target="_blank" rel="noreferrer">https://support.matterport.com/s/article/FAQ-Pro3-Camera?language=en_US</a>. Accessed 4 Nov. 2026.
      </p>
      <p>
        Matterport. “Fix Scan Position Issues.” Matterport Academy,{" "}
        <a href={sources.scanPositions} target="_blank" rel="noreferrer">https://matterport.com/matterport-academy/using-pro-series-cameras/fix-scan-position-issues</a>. Accessed 4 Nov. 2026.
      </p>
      <p>
        Matterport. “Generate a Complete Model.” Matterport Academy,{" "}
        <a href={sources.completeModel} target="_blank" rel="noreferrer">https://matterport.com/matterport-academy/using-pro-series-cameras/generate-a-complete-model</a>. Accessed 4 Nov. 2026.
      </p>
      <p>
        Spear &amp; Lancaster. “Expert Witness.” Spear &amp; Lancaster,{" "}
        <a href={sources.spear} target="_blank" rel="noreferrer">https://jespear.com/expert-witness-houston/</a>. Accessed 4 Nov. 2026.
      </p>
    </ArticleLayout>
  )
}
