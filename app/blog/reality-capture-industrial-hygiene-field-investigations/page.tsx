import Link from "next/link"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata(
  "reality-capture-industrial-hygiene-field-investigations",
)

const references = [
  {
    href: "https://www.osha.gov/sampling-analysis/",
    label: "Occupational Safety and Health Administration. “Sampling and Analysis.”",
  },
  {
    href: "https://www.osha.gov/sampling-analysis/sampling",
    label: "Occupational Safety and Health Administration. “Sampling and Analysis: Sampling.”",
  },
  {
    href: "https://www.osha.gov/opengov/health-samples",
    label: "Occupational Safety and Health Administration. “Chemical Exposure Health Data.”",
  },
  {
    href: "https://www.osha.gov/enforcement/directives/ted-01-00-015-5",
    label: "Occupational Safety and Health Administration. “OSHA Technical Manual.”",
  },
  {
    href: "https://www.cdc.gov/niosh/nmam/",
    label: "National Institute for Occupational Safety and Health. “NIOSH Manual of Analytical Methods.”",
  },
  {
    href: "https://www.cdc.gov/niosh/publications/numbered/2014-118.html",
    label:
      "National Institute for Occupational Safety and Health. “Health Hazard Evaluations: Sampling for Exposures.”",
  },
  {
    href: "https://jespear.com/industrial-hygiene-houston/",
    label: "Spear & Lancaster LLC. “Industrial Hygiene.”",
  },
  {
    href: "https://jespear.com/exposure-assessments-protect-your-company-and-your-employees/",
    label:
      "Spear & Lancaster LLC. “Exposure Assessments: Protect Your Company and Your Employees.”",
  },
  {
    href: "https://jespear.com/industrial-hygiene-jespear-consulting/",
    label: "Spear & Lancaster LLC. “5 Steps to Successful Exposure Assessments.”",
  },
  {
    href: "https://jespear.com/what-is-industrial-hygiene/",
    label: "Spear & Lancaster LLC. “What is Industrial Hygiene?”",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="reality-capture-industrial-hygiene-field-investigations"
      references={references}
      referencesTitle="References"
      wordCount={1600}
      cta={{
        heading: "Document the setting around the assessment",
        body: "SterFlies can preserve sampling locations, work areas, ventilation context, and the physical layout around an industrial hygiene investigation. Sampling, analysis, and technical conclusions remain with the qualified professionals responsible for that work.",
      }}
    >
      <h2>Introduction</h2>
      <p>
        Industrial hygiene work is not just about the number that comes back from a sample. That
        result has to be understood in relation to the worker, the task, the process, the equipment,
        the location, the ventilation, and the time the sample represents.
      </p>
      <p>
        Spear &amp; Lancaster already approaches exposure assessment this way. The field team has to
        understand the facility, the work being done, the people involved, the agents present, and
        the controls in place before the data can be interpreted correctly.
      </p>
      <p>
        <Link href="/blog/remote-site-review-spatial-context-reality-capture">Reality capture</Link>{" "}
        can help preserve that physical setting. It does not replace sampling, laboratory analysis,
        exposure limits, or the judgment of an industrial hygienist. Its job is simpler: document
        where things were, what the area looked like, and how the important parts of the site
        related to one another at the time of the assessment.
      </p>
      <p>
        That can mean a Matterport model of an interior, a floor plan with sample locations, an
        aerial view of a larger facility,{" "}
        <Link href="/blog/thermal101_blog">thermal imagery</Link> when it fits the assignment, or a
        structured set of photographs tied to actual locations.
      </p>

      <h2>Industrial hygiene data needs site context</h2>
      <p>
        A sample location that makes perfect sense during the field visit can become hard to explain
        later. A note that says &quot;north side of production&quot; may be enough for the person who
        was standing there, but it may not be enough for someone reviewing the work months later.
      </p>
      <p>
        That reviewer may need to know where the sample was in relation to a process line, doorway,
        exhaust hood, fan, partition, workstation, or nearby operation. The more complicated the
        facility is, the more useful that physical context becomes.
      </p>
      <p>
        A simple spatial record can make the field notes easier to understand. A sample point can be
        tied to a floor plan, room, model, photograph, or labeled location instead of existing only
        as text in a report.
      </p>

      <h2>Document sampling locations so they can be reviewed later</h2>
      <p>
        One of the most practical uses of reality capture in industrial hygiene is showing where the
        sampling actually took place. This does not replace field notes or chain of custody records.
        It gives those records a location that someone can come back to.
      </p>
      <p>Depending on the project, the site record may identify:</p>
      <ul>
        <li>personal monitoring start areas and major task locations</li>
        <li>area sampling locations</li>
        <li>direct reading instrument locations</li>
        <li>surface or bulk sampling locations when they are part of the scope</li>
        <li>process equipment</li>
        <li>workstations and employee positions</li>
        <li>doors, partitions, openings, and room boundaries</li>
        <li>visible exhaust, supply, return air, fans, or ventilation features</li>
        <li>temporary controls or containment</li>
        <li>adjacent work that may affect the area being evaluated</li>
      </ul>
      <p>
        A point on a floor plan or 3D model can be paired with a sample ID, photograph, or note. The
        industrial hygienist still decides what to sample and what the result means. The map or
        model simply makes the location easier to understand.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790966296/Screenshot_2026-01-07_135645_qljsni.png"
        alt="Matterport interior capture with environmental sampling data linked to a specific room location"
        caption="Example of a Matterport based site record with environmental sampling information tied to a specific location within the space."
      />

      <h2>Keep the worker, source, and work area connected</h2>
      <p>
        Exposure assessment is often about relationships. Where is the source? Where is the worker?
        What task is being performed? What controls are running? What else is happening nearby?
      </p>
      <p>
        A welding fume assessment, for example, may include personal monitoring, but the room still
        matters. It can be useful to document where the welding happened, where the extraction
        equipment was located, whether the work was inside an enclosure, and what other work was
        taking place nearby.
      </p>
      <p>
        The same idea applies to silica work, indoor air quality, mold, noise, or other field
        investigations. The goal is not to guess exposure from a picture. The goal is to preserve
        the physical setting around the work.
      </p>

      <h2>Ventilation is hard to explain after the fact</h2>
      <p>
        Ventilation can be one of the hardest parts of a site visit to recreate later. Doors may be
        opened or closed. Fans may be moved. Temporary ducting may be removed. Equipment may be
        turned off. Production may change.
      </p>
      <p>
        Reality capture does not measure airflow. That still requires the right industrial hygiene
        methods and instruments. What it can show is the visible setup around that airflow: supply
        diffusers, return grilles, exhaust hoods, doors, windows, fans, curtains, enclosures,
        temporary ducting, and equipment position.
      </p>
      <p>
        That gives the industrial hygienist a better record of the room or work area they were
        evaluating.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790966309/Screenshot_2026-10-02_133600_xbfgm2.png"
        alt="FLIR thermal image linked to a location inside a Matterport interior capture"
        caption="Thermal imagery can be tied to a specific location within the site record to document visible temperature patterns for later review."
      />

      <h2>Capture the work, not just the empty room</h2>
      <p>
        An empty room can be useful for orientation, but industrial hygiene work usually depends on
        what people are actually doing in that space.
      </p>
      <p>
        When the project allows it, documentation should be planned around the task. That may mean
        capturing the area before work begins, during a representative part of the task, and again
        after the work is complete.
      </p>
      <p>
        Short video clips, still photos, and spatial capture can each show something different. This
        is especially useful when equipment, barriers, or worker positions change throughout the
        day.
      </p>

      <h2>Interior work needs a different approach than outdoor mapping</h2>
      <p>
        A lot of industrial hygiene work happens inside offices, plants, warehouses, schools,
        mechanical rooms, hospitals, and manufacturing spaces. A drone is not the main tool in those
        environments.
      </p>
      <p>
        <Link href="/blog/exterior-photogrammetry-interior-reality-capture">Matterport</Link>, ground
        photography, panoramic imagery, floor plans, close range photogrammetry, or laser based
        capture may be more useful. The tool should fit the space and the question being asked.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790966269/Massive_manufacturing_plant_02_Pro3_1960x1080px_d9uhto.png"
        alt="Matterport Pro3 camera inside a manufacturing facility"
        caption="Matterport Pro3 can be used to document complex indoor environments where room layout, equipment, and work areas may need to be reviewed later."
      />
      <p>
        For a large outdoor facility, an aerial overview may still help show buildings, process
        areas, access, and neighboring operations. For a packed mechanical room, the better answer
        may be a room level capture that lets the reviewer move through the space later.
      </p>

      <h2>Remote review becomes much easier</h2>
      <p>
        Industrial hygiene projects are often reviewed by more than the person who was in the field.
        A senior hygienist, safety professional, engineer, attorney, property representative, or
        another consultant may need to understand the site later.
      </p>
      <p>
        A structured site record gives that person something more useful than a folder of
        disconnected photos. They can return to the room, compare notes to the documented location,
        and see how nearby features were arranged.
      </p>
      <p>
        That does not remove the need for a return visit when conditions change or more data is
        needed. It simply makes the original visit easier to review.
      </p>

      <h2>Where this is actually useful</h2>
      <p>
        Reality capture should be added when it improves the field record, not just because the
        technology is available.
      </p>
      <p>Good examples include:</p>
      <ul>
        <li>indoor air quality investigations with several rooms or building systems</li>
        <li>mold and moisture assessments where affected areas need to be located and tracked</li>
        <li>silica, welding fume, abrasive blasting, or other task based assessments</li>
        <li>manufacturing assessments involving several processes or work groups</li>
        <li>noise surveys where equipment and worker locations matter</li>
        <li>confined or enclosed spaces where access and equipment arrangement are hard to describe</li>
        <li>heat stress work where shade, equipment, and work areas vary across a site</li>
        <li>follow up or retrospective investigations where the physical area may change</li>
      </ul>
      <p>The common need is simple: technical observations have to be connected to a real place.</p>

      <h2>A simple field workflow</h2>
      <p>
        The easiest way to make this useful is to plan the documentation around the industrial
        hygiene scope from the beginning.
      </p>
      <ol>
        <li>Define what the industrial hygiene investigation is trying to answer.</li>
        <li>Identify which locations and physical relationships matter.</li>
        <li>Choose the capture method that fits the site.</li>
        <li>Capture the overall area first, then the specific work zones and details.</li>
        <li>Tie sample IDs, photographs, notes, and measurements back to the correct location.</li>
        <li>
          Keep the original data and provide a review copy that is easy for the technical team to
          use.
        </li>
      </ol>

      <h2>Know what the documentation can and cannot show</h2>
      <p>
        A model, map, or thermal image does not determine whether someone was overexposed. It does
        not replace validated sampling methods, laboratory analysis, calibration, exposure limits,
        or professional judgment.
      </p>
      <p>
        It also cannot prove conditions that were never captured. The value is in preserving the
        physical setting around the work so the industrial hygienist has a better record to review.
      </p>

      <h2>Adding better site documentation to industrial hygiene work</h2>
      <p>
        Spear &amp; Lancaster already provides exposure monitoring, risk assessments, indoor air
        quality investigations, mold assessments, OSHA related support, exposure modeling, and other
        industrial hygiene services.
      </p>
      <p>
        SterFlies can support that work by adding a stronger visual and spatial record around the
        field investigation. Depending on the project, that may include aerial context, Matterport
        capture, mapped photography, sample location graphics, thermal documentation, or measurable
        site models.
      </p>
      <p>
        The goal is not to turn every industrial hygiene job into a mapping project. The goal is to
        use better documentation when it helps explain the site, preserve the field conditions, and
        make the technical work easier to review later.
      </p>

      <h2>Conclusion</h2>
      <p>
        Industrial hygiene depends on good sampling and good judgment, but the physical setting
        around the data matters too.
      </p>
      <p>
        Reality capture gives the field team a practical way to preserve that setting. It can show
        where samples were collected, where processes and ventilation features were located, how
        work areas were arranged, and how different parts of a facility connected at the time of the
        visit.
      </p>
      <p>
        For Spear &amp; Lancaster, that creates a simple connection between established industrial
        hygiene work and{" "}
        <Link href="/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations">
          stronger field documentation
        </Link>. SterFlies can preserve the site. The industrial hygienist can decide what the site
        means.
      </p>
    </ArticleLayout>
  )
}
