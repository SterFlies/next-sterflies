import Link from "next/link"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("remote-site-review-spatial-context-reality-capture")

const references = [
  {
    href: "https://isprs-archives.copernicus.org/articles/XLVIII-1-W2-2023/275/2023/",
    label:
      "Becker, S., et al. “Reality Capture Methods for Remote Inspection of Building Work.” International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences, vol. XLVIII-1/W2-2023, 2023, https://doi.org/10.5194/isprs-archives-XLVIII-1-W2-2023-275-2023. A case study in which professional building inspectors reviewed terrestrial laser scanning, mobile scanning, RGB-D imaging, and aerial photogrammetry remotely, and found image viewing and measurement on images useful.",
  },
  {
    href: "https://pubs.usgs.gov/publication/tm11C11",
    label:
      "DeWitt, Jessica D., et al. Creating 3D Point Clouds, Digital Elevation Models, and Orthomosaics from Historical Aerial Imagery through Structure from Motion Aided Photogrammetry. U.S. Geological Survey Techniques and Methods 11-C11, 2026, https://doi.org/10.3133/tm11C11. Describes a structure-from-motion workflow that produces point clouds, elevation models, and orthomosaics from overlapping photographs, and treats camera information, overlap, occlusion, and ground control as factors in the quality of those products.",
  },
  {
    href: "https://www.nist.gov/programs-projects/terrestrial-laser-scanner-performance-evaluation-and-documentary-standard-forensic",
    label:
      "National Institute of Standards and Technology. “Terrestrial Laser Scanner Performance Evaluation and Documentary Standard for Forensic Practice.” NIST, 2026, https://www.nist.gov/programs-projects/terrestrial-laser-scanner-performance-evaluation-and-documentary-standard-forensic. Describes terrestrial laser scanners as instruments that record distance and angles to visible surfaces, and treats periodic performance testing as necessary because transport and use can affect measurement quality.",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="remote-site-review-spatial-context-reality-capture"
      references={references}
      referencesTitle="Works Cited"
      wordCount={4340}
      cta={{
        heading: "Need to preserve a site for later review?",
        body: "SterFlies can help define a documentation approach based on the conditions, relationships, and deliverables that need to remain reviewable after the site changes.",
      }}
    >
      <p>
        Physical sites do not stay still. A repair covers a surface that was visible in the morning.
        Equipment is rolled to another bay. Construction continues overnight. An excavation is
        backfilled. A room is cleaned, refinished, or demolished. Weather changes the appearance of
        a yard. Temporary conditions, the ones that often matter most to a later question, disappear
        because they were temporary. Access that existed on the day of a visit may be closed the
        next week. The person who reviews the matter months later may never have stood in the
        original environment at all.
      </p>
      <p>
        That is a documentation problem, not only a photography problem. Once the original condition
        is gone, later work depends on whatever record was made while the condition could still be
        seen.{" "}
        <Link href="/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog">
          Documenting site conditions before they are altered
        </Link>{" "}
        is the practical reason the visit exists. The harder question is what kind of record still
        lets someone understand the place after the visit is over. A folder of photographs can
        preserve a great deal of visible detail and still leave the reviewer to reconstruct, from
        memory, filenames, and notes, how those details related to one another.
      </p>
      <p>
        Each photograph is a view from one camera position, looking in one direction, at one moment.
        Anything outside that frame has to be supplied by another image, a sketch, a caption, or
        the recollection of someone who was there. When the photographs are numerous, the visual
        information can be excellent and the spatial information still incomplete. The reviewer can
        see a stain, a label, a piece of equipment, or a damaged surface, and still be unable to say
        with confidence which room contained it, what stood beside it, how a person reached it, or
        how the interior related to the exterior of the same property.
      </p>
      <p>
        Spatial documentation is a way of preserving those relationships, not a substitute for the
        photographs themselves. Reality capture, as used here, means recording a physical
        environment so that rooms, structures, equipment, terrain, access, and surrounding objects
        can be revisited as a place rather than as a pile of separate files. The methods can include
        systematic photography, interior walkthroughs, photogrammetry, orthomosaics, 3D models, and
        point clouds. The method is not the service.{" "}
        <Link href="/services/forensic-site-documentation">
          Forensic mapping and site documentation
        </Link>{" "}
        is the work of making a structured record of physical conditions that other qualified people
        can review.
      </p>
      <p>
        This article examines what happens after a site has been captured. It asks what disappears
        when physical conditions change, what spatial context means in ordinary language, where
        photographs remain strong and where they leave orientation unfinished, and how interior and
        exterior records can be used together. It then looks at remote review, annotations, and
        measurements, including the limits of each. It closes on what a digital record cannot
        preserve, and on the difference between a documented environment and a professional
        conclusion drawn from it.
      </p>

      <h2>Spatial Context Is More Than Visual Detail</h2>
      <p>
        Spatial context is the set of relationships that tell a later reviewer where something was.
        It includes the room that contained an object, the objects around it, the doorway used to
        reach that room, the floor it sat on, and the part of the building or property that room
        belonged to. Outdoors, it includes nearby structures, access roads, staging areas, grade,
        terrain, and the difference in elevation between one part of a site and another. Seeing an
        object clearly is not the same thing as understanding where that object existed inside a
        larger environment.
      </p>
      <p>
        Technical review often depends on that second kind of understanding. An investigator may
        need to know whether equipment was in a particular bay or in a corridor outside it. An
        engineer may need to know which opening faced an excavation, and which wall did not. An
        industrial hygienist may need to know how a sampling location related to an air handler, a
        doorway, and the rooms on either side. A construction professional may need to know which
        materials were still in place beside a work area, and which access path connected that area
        to the rest of the site. None of those questions is answered by a sharp close photograph
        alone. Each one asks where a visible fact sat among other visible facts.
      </p>
      <p>
        The need becomes sharper once direct access to the original condition is impossible. Repairs
        alter surfaces. Cleanup removes staining, debris, and temporary protection. Demolition
        removes the room itself. Materials are taken away. Weather changes exterior ground, standing
        water, and the appearance of unfinished work. Construction that continues after the visit
        replaces the condition that was documented with a later condition that looks more finished
        and is, for the original question, less informative. A reviewer who arrives after those
        changes cannot walk the original path. The record has to carry the path, or the path is
        gone.
      </p>
      <p>
        That is why documentation is not less important after the site changes. It is the remaining
        access.{" "}
        <Link href="/blog/forensic-mapping-incident-investigations">
          Forensic mapping for incident investigations
        </Link>{" "}
        is one setting in which this happens quickly, because scenes are cleared, equipment is
        moved, and access is restricted. The same problem appears in ordinary construction,
        property, and industrial work, where no incident is required for the site to become a
        different place. The record is useful when it still answers where something was, what
        surrounded it, and how the documented areas connected.
      </p>

      <h2>Why Disconnected Photographs Can Leave Important Questions</h2>
      <p>
        Photographs deserve a fair account. They remain one of the most useful tools in field
        documentation because they preserve visible detail at a scale a wide view often loses. A
        photograph can show damage, materials, labels, stains, workmanship, surface condition, and
        the identity of a piece of equipment. A careful set of photographs can preserve more visual
        information than a person could reliably describe from memory. Nothing in a spatial record
        makes that detail unimportant. Many later questions still begin with a photograph.
      </p>
      <p>
        The limitation is geometric, not a criticism of the medium. A photograph is made from one
        position and one direction. The frame is a boundary. Features outside the frame are not in
        that image, and a later viewer cannot recover them from the image itself. A second
        photograph can supply some of what the first left out, but only if someone can tell how the
        two frames relate. Without that relationship, the second image is another isolated view. It
        may be equally sharp and equally difficult to place.
      </p>
      <p>
        Hundreds of photographs can therefore preserve enormous visual detail while still forcing a
        later reviewer to rebuild the site in their head. Filenames can suggest an order.
        Folder names can suggest a room or a date. Handwritten notes can say which wall was
        photographed. Captions can identify a subject. The sequence of the camera roll can hint at
        the path the photographer walked. Memory can fill gaps when the photographer is available
        and the visit is recent. All of those aids are legitimate. None of them is the site. A
        filename does not show a doorway. A folder does not show which room was beyond it. A note
        that says “north wall” still depends on someone knowing which way north was, and on the
        reviewer trusting that the note and the file still match.
      </p>
      <p>
        Orientation is the part that slips. A reviewer can know that a photograph shows cracking
        and still not know whether that cracking was in the mechanical room, in a closet beside it,
        or on the exterior face of the same wall. The difference matters.{" "}
        <Link href="/blog/why-expert-witnesses-need-more-than-photos-to-analyze-a-site">
          Expert witnesses often need more than photographs
        </Link>{" "}
        for exactly this reason. The photograph can be accurate as a picture and still leave the
        surrounding layout to be inferred. Inference is not the same as a preserved relationship.
        When several professionals infer separately, they can describe the same file and still be
        picturing different places.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png"
        alt="Site documentation viewed within a spatial project environment to preserve the location and context of recorded conditions."
        caption="Individual photographs preserve detail, while spatial organization helps preserve where that detail existed within the larger environment."
      />

      <h2>Building a Record of Interior and Exterior Conditions</h2>
      <p>
        Interior documentation starts to answer the orientation problem when it is systematic
        rather than incidental. A useful interior record follows the way the building is actually
        organized. It includes the sequence of rooms, the hallways that connect them, the doorways
        between them, and the entrances a person would use. Equipment rooms matter because they
        often explain conditions in the rooms they serve, and because they are easy to lose in a
        set of unlabeled photographs. Floor layout matters because a later reviewer who was never
        in the building needs a way to know which spaces shared a wall, which spaces were stacked,
        and which spaces were only near each other in a file list.
      </p>
      <p>
        Pathways are part of the record, not a courtesy. If the photographs of a mechanical room
        are not connected to the corridor that reached it, a later reviewer has the room and not
        the route. If visible building conditions are photographed without a way to tell which room
        they belonged to, the conditions float. An interior walkthrough, including the kind of
        navigable capture associated with Matterport and similar systems, keeps those connections
        available as movement through a documented space. The reviewer can pass from an entrance to
        a hallway, from the hallway to a room, and from that room to the equipment that was in it.
        The walkthrough does not interpret the equipment. It keeps the equipment in the room where
        it was documented.
      </p>
      <p>
        That is especially useful for someone who was never physically present. A consultant
        retained later, an attorney preparing a question, or a professional who could not attend
        the original visit can learn the layout by moving through it rather than by assembling it
        from a contact sheet. Interior existing-conditions work, such as the{" "}
        <Link href="/projects/iaq-mold-documentation">
          IAQ and mold documentation
        </Link>{" "}
        recorded as a navigable interior, is one example of this use. The walkthrough preserves
        rooms, routes, and visible conditions for later review. It does not determine a cause, a
        contaminant, or a safety conclusion. Those questions remain with the qualified people who
        use the record.
      </p>
      <p>
        Exterior documentation answers a different set of orientation questions. It can preserve
        the property as a whole: structures in relation to one another, excavations before they are
        filled, equipment yards, access roads, staging areas, surrounding objects, grade, and
        terrain. An orthomosaic is a map-like image assembled from overlapping photographs so that
        the site can be viewed in plan without the perspective of a single camera. An exterior 3D
        model or a point cloud can preserve the shape of visible surfaces so a reviewer can turn
        the site and see how a building face, a slope, or a piece of equipment sat relative to the
        rest of the property. Systematic ground photography still belongs in that record when a
        detail needs a closer view than the wide products provide.
      </p>
      <p>
        Aerial mapping is one way to collect the overlapping photographs an exterior product needs.
        It is not the subject of this article, and it is not a complete exterior record by itself.
        Readers who want the aerial method, and the places where ground documentation is still
        required, can find that discussion in{" "}
        <Link href="/blog/drone-mapping-forensic-site-investigations">
          how drone mapping can support forensic site investigations
        </Link>
        . The point here is narrower. Exterior products are useful after the site changes because
        they keep property layout, access, and surrounding relationships available when the ground
        itself has been regraded, built on, or cleaned up.
      </p>
      <p>
        Many matters are not purely interior or purely exterior. A mechanical room and the exterior
        side of the same building are one question split across two kinds of space. Interior water
        staining and the grade, roof, or drainage outside that wall are another. Interior equipment
        and the exterior service yard that fed it may need to be understood together. A building
        interior beside an excavation, an entry and the access path that reached it, or an
        industrial process that moves between an enclosed room and an outdoor work area, all ask
        for both records.{" "}
        <Link href="/blog/exterior-photogrammetry-interior-reality-capture">
          Exterior photogrammetry and interior reality capture
        </Link>{" "}
        preserve different parts of the same site. Used together, they let a reviewer hold those
        parts in mind as related places.
      </p>
      <p>
        Different capture methods can complement one another without becoming a single mathematical
        model. An interior walkthrough and an exterior orthomosaic may remain separate datasets,
        aligned by the building they both document rather than by a shared coordinate system. That
        conceptual relationship is often enough. The reviewer can look at the room, then look at
        the exterior face and the site around it, and understand that both views belong to the same
        visit and the same place. Claiming that every file has been fused into one survey-grade
        dataset would overstate a workflow that does not always do that, and it is not required for
        the record to be useful.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1772731752/19be7347-df64-4f29-94c2-940d9465d7ac_bacvhr.png"
        alt="Reality capture documentation preserving spatial context across documented site conditions."
        caption="Interior and exterior documentation can preserve different parts of the same environment and help later reviewers understand how documented areas relate to the larger site."
      />

      <h2>Returning to the Site Without Returning to Its Original Condition</h2>
      <p>
        Opening a folder of photographs and returning to an organized spatial environment are
        different kinds of work. The folder asks the reviewer to choose a file, guess its place,
        open another file, and keep the relationship in working memory. The spatial environment
        asks the reviewer to move. In a 3D representation, movement can mean orbiting an exterior
        model, walking an interior capture from room to room, or dropping back from a detail to the
        wider site and then returning to the same location. An orthomosaic lets the reviewer scan
        the property in plan. A point cloud, where the capture produced one, lets the reviewer look
        at the shape of visible surfaces rather than at a single picture of them. Photographs
        associated with a location can still be opened, but they open from the place they belong to
        instead of from a filename.
      </p>
      <p>
        Becker and colleagues studied this kind of remote inspection on building work. Professional
        inspectors reviewed terrestrial and mobile laser scanning, RGB-D imaging, and aerial
        photogrammetry, and compared that remote review with being on site. They reported that
        image visualization, and the ability to measure on images, were useful to the inspectors
        (Becker et al.). The study does not say that every capture method is interchangeable, or
        that a remote review replaces every site visit. It does support a more limited point. A
        structured spatial record can give a qualified person a way to inspect documented work
        without standing in the original condition.
      </p>
      <p>
        That difference matters in ordinary professional timelines. The original site may be
        unavailable because it was repaired, occupied, demolished, or simply because access was
        granted once. The reviewer may not have been present. Months may have passed, and memory of
        the visit, even a careful memory, is a weaker guide than a record that can be opened again.
        Several professionals may need the same environment at different times. A matter may evolve,
        so that a question asked in the third month is not the question the photographer was
        answering on the day of capture. A navigable record does not invent the answer. It lets
        each of those people return to the documented place and look again.
      </p>
      <p>
        <Link href="/capabilities#reality-capture">Reality capture</Link> is the name for this kind
        of record when the deliverable is a space that can be moved through, not only a set of
        files that can be listed. The value shows up after the capture, when someone who was not
        on site uses the model, the walkthrough, the orthomosaic, or the cloud to understand rooms,
        equipment, structures, and access that no longer exist in the same form. The technology is
        the method. The result that matters is a site that can still be reviewed as a site.
      </p>

      <h2>Annotations Turn Locations Into Organized References</h2>
      <p>
        Annotations organize information by putting it on the location it describes. A note in a
        separate document can say that cracking was visible. An annotation can say that the note
        belongs to a particular place in the documented environment. The subjects are usually
        plain. An area of interest. A room. A piece of equipment. An opening. A damaged area. A
        sampling location. The position from which a photograph was taken. An access route. A
        visible condition. A feature that needs further review by someone qualified to review it.
        The annotation is a pointer. It keeps the pointer attached to the geometry or the
        walkthrough instead of leaving it in a list that has to be matched by hand.
      </p>
      <p>
        The same mark can link an observation, a photograph, a note, or a file to that location.
        A later reviewer can select the mark and find the material that was associated with it,
        then look at the surrounding space without leaving the record. That is different from
        searching a folder for a filename that someone remembers as relevant. The search still
        works. The spatial mark reduces the chance that the relevant file is reviewed as if it
        had no neighbors.
      </p>
      <p>
        The wording of the mark should stay on the observation side of a line that is easy to
        cross. “Visible cracking at the documented location” is documentation. It reports what the
        capture shows at a defined place. A statement that the cracking was caused by settlement,
        overload, moisture, or defective work is an interpretation. It may be a reasonable question
        for an engineer. It is not established by the act of placing a pin. The same distinction
        applies to staining, equipment condition, and apparent damage. The record can preserve the
        visible fact and its location. The explanation of why the fact exists belongs to the
        professional whose discipline covers that explanation.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1770397444/25f3b31b-cda2-471b-b1c6-e34b7283f52b_olagrs.png"
        alt="Interactive site documentation used to review and organize specific locations within a spatial record."
        caption="Annotations and interactive project tools can connect observations and supporting information to defined locations within the documented environment."
      />

      <h2>Measurements Can Be Useful Only When the Capture Supports Them</h2>
      <p>
        Some spatial datasets can be measured later. A reviewer may be able to look at the distance
        between two objects, the width of an area, the spacing of equipment, the relationship
        between structures, or the approximate dimensions of a room or a work zone. Those numbers
        can be useful when the original site is gone and a tape can no longer be put on the same
        surfaces. They are useful as measurements of the documented record, within the limits of
        how that record was made.
      </p>
      <p>
        Reliability is not a property of the picture. It depends on the equipment, the geometry of
        the capture, calibration, control, image quality, processing, and whether the surfaces
        being measured were actually visible. It also depends on the project requirements and on
        whether anyone checked the result against known points. A model that looks convincing on a
        screen can still be a poor source of dimensions. Visual continuity is not the same thing as
        a tested accuracy.
      </p>
      <p>
        The U.S. Geological Survey’s techniques report on structure-from-motion photogrammetry is
        instructive here even though it addresses historical aerial photographs rather than a
        modern site visit. Overlapping images can be processed into point clouds, elevation models,
        and orthomosaics. The same report treats focal length, overlap, occlusion, and ground
        control as factors that affect whether those products are suitable for quantitative use
        (DeWitt et al.). The lesson transfers. A photogrammetric product is the result of a
        specific capture and a specific process. It does not arrive with a universal accuracy.
      </p>
      <p>
        Laser scanning makes the same point from the instrument side. The National Institute of
        Standards and Technology describes terrestrial laser scanners as systems that record
        distance and two angles to points on visible surfaces, and it treats periodic testing as
        necessary because transport and use can disturb that measurement performance (National
        Institute of Standards and Technology). A dense cloud is not, by itself, evidence that the
        instrument was performing as assumed on the day of the scan.
      </p>
      <p>
        Reality capture does not replace licensed surveying. A visually coherent 3D model is not a
        survey. Photogrammetry is not survey grade merely because it produces coordinates. When a
        project needs a boundary, a stamped elevation, or another product that the law or the
        contract assigns to a licensed surveyor, that product has to come from that practice. Site
        documentation can still offer dimensional context inside its stated limits. Those limits
        should be visible to the person using the number, not implied by the fact that the software
        displayed a distance.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1790115766/trench_3d_model_xqdpek.png"
        alt="Three dimensional trench site model preserving geometry and spatial relationships for later technical review."
        caption="Three dimensional site records can preserve geometry for later review, while measurement reliability remains dependent on the capture method, processing, control, and project requirements."
      />

      <h2>Remote Collaboration Changes Who Can Understand the Original Environment</h2>
      <p>
        A site visit is attended by whoever can be there on that day. The list of people who later
        need to understand the site is usually longer. Investigators, attorneys, expert witnesses,
        engineers, industrial hygienists, safety professionals, construction professionals,
        consultants, insurers, property professionals, and contractors may join after the initial
        capture. Some of them will never see the original condition. Their first view of the place
        is the record. If the record is only a shared drive of photographs, each person builds a
        private layout and then tries to talk about it.
      </p>
      <p>
        A spatial record gives those people a common reference. The difference is concrete. One
        version of the conversation is an attempt to understand “photo 184,” with each participant
        guessing the camera direction and the off-frame surroundings. The other version is a review
        of the same location inside the documented environment, where the room, the adjacent
        opening, and the path to the entrance are already there to be looked at. People can still
        disagree about what the location means. They are less likely to disagree about which
        location they are discussing, because they are looking at the same one.
      </p>
      <p>
        Shared context is not shared interpretation. Two engineers can examine the same model and
        reach different technical opinions. An industrial hygienist and a contractor can look at
        the same walkthrough and care about different features. An attorney can use the record to
        understand the place without being the person who explains causation.{" "}
        <Link href="/blog/digital-evidence-3d-reality-capture-legal-disputes">
          Digital site documentation in legal disputes
        </Link>{" "}
        can support that kind of later review. It does not make the record self-proving, and it
        does not make every participant’s conclusion the same. The documentation preserves the
        environment. The professions interpret it.
      </p>
      <p>
        The practical gain is access to the original condition by people who were not given access
        to the original site. A spatial record can be opened more than once, by more than one
        person, after the excavation has been filled and the room has been repainted. That does not
        enlarge the record beyond what was captured. It does let the people who joined late work
        from the same documented place instead of from secondhand description alone.
      </p>

      <h2>What the Digital Record Cannot Preserve</h2>
      <p>
        A spatial record is a record of what the capture could see. Occlusion is the first limit.
        A surface hidden behind equipment, a wall, a vehicle, or a person is not in the model
        because the sensor never observed it. Hidden surfaces, inaccessible rooms, and areas behind
        locked doors are absent in the same way. Reflective and transparent materials can confuse
        photographic reconstruction. Repetitive textures can be difficult to match from one frame
        to the next. Vegetation can cover the ground a later question cares about. Dark areas can
        leave gaps. Movement during capture, whether of people, equipment, or branches, can produce
        artifacts or leave a subject poorly defined. Incomplete coverage is not repaired by a
        confident mesh. The gap remains a gap.
      </p>
      <p>
        The record is also limited in time and in extent. Conditions that changed before the
        documentation visit are not recovered by processing photographs of the later state.
        Information outside the captured area is not implied by the area that was captured. Physical
        properties that cannot be seen are not stored in a walkthrough. Sound and odor are not in
        an orthomosaic. Temperature, humidity, and other environmental conditions are not
        established by a 3D model unless a separate instrument recorded them and that record was
        kept. Hidden assemblies, the layers inside a wall or under a slab, are not documented by a
        view of the finished face. Material testing, sampling results, and laboratory analysis are
        different work. A pin marking a sample location does not contain the laboratory result
        unless that result was deliberately attached, and even then the attachment is a reference,
        not a new test.
      </p>
      <p>
        Processing cannot reliably recreate something that was never observed. Software can fill a
        hole with an interpolated surface, and that surface can look continuous. Continuity on the
        screen is not an observation. The digital record documents the captured condition. It does
        not document the site in general, the site as it was before the visit, or the site as it
        became afterward. Those distinctions should stay visible when the record is used.
      </p>
      <p>
        The same restraint applies to what the record is sometimes asked to prove. Reality capture
        does not prove what happened. It does not determine causation. It does not establish
        liability or negligence. It does not replace engineering analysis, industrial hygiene
        analysis, laboratory testing, surveying, or an expert opinion. It does not guarantee
        accuracy or completeness. It does not, by itself, establish chain of custody, and it does
        not make a file admissible. Admissibility is a legal determination made in a particular
        proceeding. The capture preserves documented conditions and the spatial relationships among
        them. Qualified professionals interpret the resulting records. The interpretation is theirs.
      </p>

      <h2>Preserving a Site as a Place That Can Still Be Understood</h2>
      <p>
        The value of technical documentation is not the count of photographs. A large set of images
        can still leave a later reviewer unable to say where a condition was. A useful record helps
        with a shorter list of questions. Where was this. What was around it. How did it connect to
        the rest of the site. What was nearby. How could someone reach this location. How did the
        interior relate to the exterior. Can someone who was not physically present understand the
        documented environment well enough to review it.
      </p>
      <p>
        Those questions are spatial. They are the reason a walkthrough, a model, an orthomosaic, or
        a point cloud can do work that a contact sheet does not do, even when the contact sheet is
        excellent. Photographs keep the detail. The spatial record keeps the detail in a place.
        Annotations keep notes and files attached to that place. Measurements, when the capture
        supports them, keep selected dimensions available after the tape can no longer be used.
        None of those products finishes the professional work. They give the professional work a
        site to return to.
      </p>
      <p>
        Physical conditions are often temporary. Repairs, demolition, backfill, cleanup, and
        ordinary construction see to that. Spatial understanding does not have to be temporary in
        the same way. Careful documentation can preserve the relationships that made the site
        intelligible, so that a qualified person can still move through the documented environment,
        look at what was around a feature, and tell the difference between an observation and an
        interpretation. The site changes. The record, if it was built to be a place and not only a
        set of pictures, can remain a place that can still be understood.
      </p>
    </ArticleLayout>
  )
}
