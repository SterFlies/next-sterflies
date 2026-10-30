import type { CSSProperties } from "react"
import Image from "next/image"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { cloudinaryUrl } from "@/app/config/site"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("sterflies-joins-spear-lancaster")

function ArticleMedia({
  src,
  alt,
  width,
  height,
  className = "h-auto w-full",
  style,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <figure className="article-figure">
      <Image
        src={cloudinaryUrl(src, 1600)}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
      />
    </figure>
  )
}

export default function Page() {
  return (
    <ArticleLayout
      slug="sterflies-joins-spear-lancaster"
      wordCount={1446}
      cta={{
        heading: "Document the site while access is available",
        body: "SterFlies documents conditions for later review. Qualified professionals interpret those records and form their own technical opinions.",
      }}
    >
      <p>
        SterFlies, a San Antonio-based technical field documentation company, is now a division of
        Spear + Lancaster. The addition brings aerial mapping, thermal imaging, 3D scanning, and
        other reality capture methods into closer alignment with the firm’s established safety,
        industrial hygiene, and investigation work. The objective is straightforward: document a
        site thoroughly while access is available, then make that record useful for later review.
      </p>
      <p>
        For an investigation, the first visit to a location can be one of the few, if not the only,
        opportunities to observe conditions as they exist. Equipment may be moved, repairs may
        begin, time has passed, and the site itself may change. Photographs remain essential, but
        they show only what was in the frame. SterFlies provides additional ways to capture
        relationships among rooms, structures, terrain, and other physical features, so later
        review doesn&apos;t rely solely on notes and isolated images.
      </p>

      <h2>How SterFlies Began</h2>
      <p>
        SterFlies was founded in July 2024 by Sterling Spear, driven by an interest in
        photogrammetry and drone mapping. What began as a way to turn drone flying into a career
        quickly evolved into a broader interest in the information a site can yield. By processing
        overlapping photos, Sterling could create 3D models, 2D maps, and terrain representations
        that revealed far more than a collection of individual aerial images.
      </p>
      <p>
        Early assignments for Jerome E. Spear, a founding partner of Spear + Lancaster and
        Sterling’s father, demonstrated how those tools could support real investigative work.
        Mapping and reality capture added visual context to cases that would otherwise have relied
        heavily on conventional photographs, video, field notes, and observations from an initial
        visit. Over time, the work expanded beyond drones to include ground scanning, thermal
        imaging, and more systematic site documentation.
      </p>
      <p>
        Today, the drone is just one of several tools. The focus is on selecting a practical method
        for the conditions being documented and producing a record that others can navigate,
        inspect, and understand.
      </p>

      <h2>Meet Sterling Spear</h2>
      <p>
        Sterling leads field documentation for the SterFlies division. Depending on the assignment,
        he may collect aerial photographs, record interior spaces with a 3D scanner, capture thermal
        images, or develop maps and models that put individual observations in context. He is an FAA
        Part 107 remote pilot and works with a range of aerial and ground-based capture systems.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077084/matterportthumb_rosrlb.png"
        alt="Field documentation image associated with Sterling Spear’s reality capture work."
        width={3024}
        height={4032}
        className="h-auto w-full"
        style={{ maxWidth: "28rem", marginInline: "auto" }}
      />
      <p>
        Sterling is most interested in making a real place accessible again after fieldwork ends and
        in turning a real site into a digital scene. A virtual walkthrough can show how one room
        connects to another. A reconstructed 3D model can provide an overall view of a structure or
        outdoor work area. An annotated map can link a photograph, location, or observation to the
        part of the site it describes. He enjoys building these records because they let a reviewer
        go beyond simply looking at pictures.
      </p>

      <h2>Aerial Photography and Video</h2>
      <p>
        Aerial photographs and video help establish a site&apos;s broader context. On outdoor
        assignments, they can show the placement of structures, access roads, equipment, work areas,
        and surrounding terrain in ways ground photography often cannot. They can then collect more
        detailed photographs from relevant angles and elevations, subject to site conditions and
        safe flight operations.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1786294038/Screenshot_2026-08-09_114704_r2zpcr.png"
        alt="Aerial photograph showing structures, terrain, and the surrounding site."
        width={2536}
        height={1345}
      />
      <figure className="article-figure">
        <video
          src="https://res.cloudinary.com/dzlmoyomq/video/upload/v1770831771/DJI_20250915035256_0002_S_lv6q4k.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-auto w-full"
          aria-label="Aerial site documentation footage captured by SterFlies"
        />
      </figure>
      <p>
        SterFlies uses aerial imaging at outdoor investigation sites and as part of broader
        documentation for construction and industrial locations. The same photographs can also serve
        as input for photogrammetry, allowing a series of overlapping views to be reconstructed into
        a 3D model. Aerial views do not replace ground-level detail, but the two can work together
        to make the site easier to understand.
      </p>

      <h2>Thermal Imaging</h2>
      <p>
        Thermal cameras record differences in apparent surface temperature rather than the visible
        color and texture captured by a standard camera. During indoor air quality and mold-related
        assignments, SterFlies has used aerial thermal imagery to document roof areas and identify
        temperature patterns that warrant closer examination. A handheld thermal camera can also
        provide additional ground-level views of building surfaces or equipment.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793376586/SterFlies_Thermal_Imaging_Collage_ummfem.png"
        alt="Examples of aerial thermal imaging and thermal documentation integrated into a virtual site walkthrough."
        width={2402}
        height={675}
      />
      <p>
        Thermal imaging can also be useful when a project requires documenting potential
        moisture-related conditions or unusual heat patterns in electrical equipment. These patterns
        require careful interpretation. Sun exposure, reflections, material properties, and
        operating conditions can affect what appears in a thermal image. A thermal image alone does
        not prove moisture, mold, or an electrical fault. Its value lies in recording a location and
        a condition that a qualified professional can evaluate alongside other evidence and testing.
      </p>

      <h2>3D Scanning and Virtual Walkthroughs</h2>
      <p>
        Not every site can be understood from above. Inside a building, the relationships among
        rooms, corridors, workspaces, and equipment can be as important as the exterior layout.
        Using the Matterport Pro3, SterFlies creates navigable spatial records of residential,
        commercial, and industrial properties. Reviewers can move through a captured space, revisit
        points of interest, and better understand where observations were made.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793376631/SterFlies_3D_Scanning_Virtual_Tours_mcl9xk.png"
        alt="Examples of interior 3D scanning, virtual walkthroughs, and annotated spatial documentation."
        width={2400}
        height={800}
      />
      <p>
        These records have already been used by Spear + Lancaster investigators for remote site
        reviews. That matters when an expert needs to revisit a room layout or verify the location
        of a feature after the original visit, especially when travel is difficult or the property
        has changed. Photographs, notes, and other relevant information can also be linked to the
        appropriate locations in the digital record.
      </p>

      <h2>Orthomosaic Maps, 3D Models, and Point Clouds</h2>
      <p>
        For larger outdoor areas, SterFlies can process overlapping aerial photographs into an
        orthomosaic. An orthomosaic is a continuous overhead image corrected for perspective and
        terrain, providing a maplike view of the site rather than a patchwork of separate
        photographs. It can help investigators understand the overall arrangement of structures,
        paths, equipment, and other features across a location. With appropriate control and
        verification, mapping products can also support defined measurement tasks. They are not a
        substitute for a licensed land survey when one is required.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793376727/SterFlies_Orthomosaic_3DModel_PointCloud_c54blr.png"
        alt="Examples of an aerial orthomosaic map, a measured 3D site model, and a point cloud visualization."
        width={2400}
        height={800}
      />
      <p>
        The same capture workflow may produce a textured 3D model or a point cloud. These outputs
        preserve different aspects of site geometry and help reviewers examine spatial relationships
        from multiple viewpoints. Sterling uses applications such as Pix4D, RealityScan, Matterport,
        and Blender to process, refine, and organize the resulting material. The deliverables depend
        on the assignment. Some cases call for a clear overhead map, while others benefit more from
        an interior walkthrough, a 3D reconstruction, or a combination of records.
      </p>

      <h2>Supporting Site Investigations and Expert Review</h2>
      <p>
        SterFlies has contributed documentation for assignments involving confined spaces, indoor air
        quality and mold assessments, trench collapse, and chemical exposure. These projects differ
        substantially, but the documentation question is often the same: What physical conditions
        should we record now so we can review them later with as much context as possible?
      </p>
      <p>
        For a trench incident, the investigation may involve the excavation, nearby equipment, access
        points, and the surrounding work area. On a chemical exposure assignment, a facility&apos;s layout
        and the location of relevant areas may be important. During an indoor air quality assessment,
        a room-based walkthrough can help link observations and sampling locations to the space where
        they were collected. No single capture method fits every case, so the approach depends on the
        site and the investigation&apos;s needs.
      </p>
      <p>
        SterFlies documents conditions. Safety professionals, industrial hygienists, engineers,
        investigators, and other qualified experts interpret those records and form discipline-specific
        technical opinions. That distinction is important. Reality capture is not meant to replace
        expert judgment. It gives those exercising that judgment a more complete, accessible picture
        of the place they are evaluating.
      </p>

      <h2>A New Chapter with Spear + Lancaster</h2>
      <p>
        As a division of Spear + Lancaster, SterFlies will support the firm’s work in workplace
        incident investigations, construction safety, industrial hygiene, fatalities, and other
        matters requiring detailed site documentation. It will also continue to accept independent
        documentation projects. Based in San Antonio, SterFlies serves clients throughout Texas and
        can travel elsewhere for assignments.
      </p>
      <p>
        The equipment includes the DJI Matrice 4T, DJI Air 3S, DJI Avata 2, Matterport Pro3, FLIR
        E95, and conventional ground photography tools. Each serves a distinct purpose, and not every
        assignment requires all of them. The decision starts with what needs to be documented, not
        with a particular device.
      </p>
      <ArticleMedia
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1793376767/equipment-image_olxtkp.png"
        alt="SterFlies field documentation equipment, including DJI drones, a Matterport scanner, a FLIR thermal camera, and ground photography equipment."
        width={1920}
        height={819}
      />
      <p>
        “I’m excited to join the Spear + Lancaster team and work alongside professionals who have
        spent their careers helping people understand safety and workplace conditions,” Sterling
        said. “My goal is to provide useful, detailed site documentation to support the team with
        the cases they take on.”
      </p>
      <p>
        The next chapter gives SterFlies an opportunity to support additional investigations while
        continuing to improve how field information is captured, organized, and shared. Technology
        will continue to evolve. The purpose of the work will remain the same: to create a reliable
        visual record of a site while there is still an opportunity to document it.
      </p>
    </ArticleLayout>
  )
}
