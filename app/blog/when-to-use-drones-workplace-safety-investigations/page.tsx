import Link from "next/link"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "when-to-use-drones-workplace-safety-investigations",
)

const references = [
  {
    href: "https://www.osha.gov/enforcement/directives/cpl-02-01-169",
    label:
      "OSHA. “OSHA’s Use of Small Unmanned Aircraft Systems.” Directive CPL 02-01-169 (December 22, 2021).",
  },
  {
    href: "https://www.faa.gov/uas/commercial_operators",
    label: "FAA. “Certificated Remote Pilots including Commercial Operators.”",
  },
  {
    href: "https://www.faa.gov/uas/getting_started/remote_id",
    label: "FAA. “Remote Identification of Drones.”",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="when-to-use-drones-workplace-safety-investigations"
      references={references}
      referencesTitle="References"
      wordCount={1208}
      cta={{
        heading: "When the aerial view is worth the flight",
        body: "SterFlies can document a site from the air or from the ground when a team has a defined question and the work can be managed safely. The record is for later review. It does not establish why an incident happened, and it does not replace the professionals responsible for that analysis.",
      }}
    >
      <p>
        A workplace incident can leave investigators with a practical problem: they need to look
        closely at something they cannot safely approach yet. It might be a damaged platform, a roof
        edge, or equipment above an active work area. Emergency response and hazard control come
        first. Once the site is ready for documentation, an aerial view may help the team decide
        what needs closer attention.
      </p>
      <p>
        That does not mean putting a drone in the air at every incident. The more useful goal is to
        make aerial documentation an option that safety professionals can request for a specific
        reason. A clear question should come before a flight plan.
      </p>

      <h2>First, decide what the investigator needs to see</h2>
      <p>
        “Get some drone footage” leaves too much to chance. A better request is: “Can we see the
        landing and guardrail on the upper platform without sending someone onto it?” That tells the
        pilot what matters and gives the investigator a way to judge whether the photographs are
        useful.
      </p>
      <p>
        Consider an incident near elevated process equipment. The investigator may need to see where
        a ladder meets a platform, whether access is obstructed, and what can be observed of the
        surrounding structure. Still photographs from two or three deliberate angles might be
        enough. A full mapping flight could add time and files without answering anything new.
      </p>
      <p>
        If the question involves a dimension—such as a clearance or distance between two
        features—the team should choose a measurement method and required accuracy before capture. A
        photograph can show a relationship; it cannot, by itself, establish a verified measurement.
        This article focuses on the decision to use a drone, rather than the photogrammetric
        products discussed in SterFlies’ existing{" "}
        <Link href="/blog/drone-mapping-forensic-site-investigations">
          forensic mapping article
        </Link>.
      </p>

      <h2>A closer look without an unnecessary approach</h2>
      <p>
        One of the clearest reasons to consider a drone is restricted access. An initial exterior
        view may help investigators examine visible damage on an elevated structure, check a
        difficult roofline, or survey an area where walking access has been limited. The aircraft
        can keep a person out of a particular location while still providing useful observations.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1792775732/Screenshot_2026-10-23_121029_xxkazk.png"
        alt="Excavation site with trench shoring, heavy equipment, and a worker positioned within the supported excavation."
        caption="Excavation environments can present access and documentation challenges. Aerial imagery may help investigators examine visible site conditions without requiring additional entry into the excavation."
      />
      <p>
        But the aircraft introduces its own risks. Power lines, cranes, moving equipment, emergency
        aircraft, and people on the ground all affect whether a flight is appropriate. At a facility
        where flammable gas or vapors may be present, an ordinary drone should not be treated as
        safe to operate near the release. The operator and site team need to assess those hazards
        first. No photograph is worth complicating the incident response.
      </p>

      <h2>What the aerial view changes on a large site</h2>
      <p>
        On a spread-out construction site, investigators may spend considerable time moving between
        accessible observation points. An aerial look can help identify which exterior locations
        deserve a closer inspection and whether equipment, barriers, or ongoing operations affect
        access. That information is most helpful early, while the team is deciding where to focus
        its fieldwork.
      </p>
      <p>
        The advantage is not guaranteed speed or lower cost. Wind, airspace restrictions, nearby
        operations, site permissions, and obstructions can make a flight impractical. Sometimes a
        ground camera gets the needed view. Sometimes a qualified lift crew is the right choice. A
        useful drone program makes room for those answers.
      </p>

      <h2>OSHA’s drone guidance is a precedent, not a requirement</h2>
      <p>
        OSHA issued Directive CPL 02-01-169 in December 2021 to address its own use of small
        unmanned aircraft systems in inspections and related activities. The directive is useful
        here because it treats flight as a planned inspection activity with operational
        requirements, rather than an informal request for aerial pictures. [1]
      </p>
      <p>
        It does not require private consultants to use drones or give them special permission to
        fly. A consulting team still needs authorization to access the site, a qualified operator,
        and a mission that complies with applicable aviation rules. For typical commercial
        small-drone operations in the United States, that generally means FAA Part 107, together
        with any required airspace authorization and Remote ID compliance. [2][3]
      </p>

      <h2>Four questions to settle before anyone launches</h2>
      <ul>
        <li>
          What specific feature or condition needs to be seen, and why is an aerial view the right
          method?
        </li>
        <li>
          Can the flight be conducted safely around workers, equipment, airspace users, weather, and
          site-specific hazards?
        </li>
        <li>Who authorizes site access, and who has the final aviation go/no-go decision?</li>
        <li>
          How will original files, capture times, locations, and camera viewpoints be preserved and
          delivered?
        </li>
      </ul>
      <p>
        If the team cannot answer one of these questions, it should resolve the issue, change the
        plan, or use a different method. A flight should not become the default simply because an
        aircraft is available.
      </p>

      <h2>Keep the investigator and pilot in their respective roles</h2>
      <p>
        The investigator identifies the observations that matter and decides whether more evidence
        is needed. The remote pilot is responsible for the operation of the aircraft. Those
        responsibilities should meet in a short field briefing: what to capture, what areas to
        avoid, where personnel will be working, who can stop the flight, and what files will be
        handed over.
      </p>
      <p>
        Original photographs and video should remain identifiable and traceable to the mission. A
        delivery folder with consistent filenames, a capture log where appropriate, and a clear
        description of each viewpoint is more useful than an unlabeled collection of clips. The team
        should establish file retention and access arrangements before flying, particularly when
        litigation or confidential facility information is involved.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790270345/interiorscan_nu3jqu.png"
        alt="Three-dimensional industrial facility model displayed with equipment annotations, location markers, and measurement tools."
        caption="Example of a three-dimensional industrial site model with location markers and supporting spatial information for technical review."
      />

      <h2>Know what the camera cannot tell you</h2>
      <p>
        An overhead image only shows what the sensor can see. It will not reveal a failed component
        inside a closed machine, conditions beneath an opaque roof, or details hidden behind a wall.
        Poor lighting, reflective surfaces, distance, and motion can also limit what reviewers can
        make out. Thermal imagery has its own constraints; it does not identify an unknown chemical
        or determine a person’s exposure dose.
      </p>
      <p>
        Nor does video establish why an incident happened. It is one observation among others, which
        may include physical examination, witness interviews, technical records, testing, and
        verified measurements. Drone documentation is most useful when its limits are understood
        before it is collected.
      </p>

      <h2>Start with access to the capability, not a shopping list</h2>
      <p>
        A safety consulting firm does not have to purchase an aircraft to make aerial documentation
        available. A practical first step is to establish when an investigator can request a
        qualified operator, who approves the work, and what a usable deliverable looks like.
      </p>
      <p>
        A small trial on a suitable exterior project can test that process. Give the operator one or
        two defined questions, document the restrictions, and review whether the finished images
        answered them. If aerial requests become frequent, an internal program may be worth
        considering. That decision brings training, maintenance, operating policies, and
        oversight—not just the cost of the aircraft.
      </p>
      <p>
        The standard should be simple: launch when the aerial perspective is likely to help answer a
        meaningful question and the flight can be managed safely. Otherwise, keep the aircraft on
        the ground.
      </p>
      <p>
        Related: SterFlies.{" "}
        <Link href="/blog/drone-mapping-forensic-site-investigations">
          How Drone Mapping Can Support Forensic Site Investigations
        </Link>.
      </p>
    </ArticleLayout>
  )
}
