import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("point-clouds-site-documentation")

const references = [
  {
    href: "https://old.asprs.org/archives/asprs-approves-edition-2-version-2-of-the-asprs-positional-accuracy-standards-for-digital-geospatial-data-2024.html",
    label:
      "ASPRS, announcement of the Positional Accuracy Standards for Digital Geospatial Data, Edition 2, Version 2 (2024). The standard is the Society’s reference for reporting positional accuracy of a digital geospatial product. It is not a sensor specification.",
  },
  {
    href: "https://pubs.usgs.gov/of/2021/1039/ofr20211039.pdf",
    label:
      "U.S. Geological Survey, Processing Coastal Imagery With Agisoft Metashape, Open-File Report 2021–1039. Documents a structure-from-motion workflow from overlapping photographs to a point cloud, elevation model, and orthomosaic, and notes that overlap, control, and surface visibility affect the result.",
  },
  {
    href: "https://support.pix4d.com/hc/en-us/articles/206455126",
    label:
      "Pix4D, “What is a densified point cloud? An orthomosaic?” Describes a densified point cloud as reconstructed 3D points that can store position and color, and an orthomosaic as a scaled 2D map. Vendor descriptions of measurement quality are not a SterFlies accuracy claim.",
  },
]

export default function Page() {
  return (
    <ArticleLayout
      slug="point-clouds-site-documentation"
      references={references}
      wordCount={2071}
    >
      <h2>Introduction</h2>
      <p>
        A point cloud is one of the files people receive when a site has been mapped, and it is
        also one of the easiest to misread. It looks like a picture that can be rotated. It is not
        a picture. It is a set of estimated positions on surfaces the camera, or another sensor,
        was able to see.
      </p>
      <p>
        Forensic consultants, construction teams, industrial hygienists, and facility reviewers
        encounter that file when they need geometry: how far a feature sat from another, what the
        visible surface of a pile or a roof looked like, or how an exterior related to the rest of
        a site. The file can support that review when the capture was planned for it. It does not
        arrive with a universal accuracy, a survey certification, or a conclusion about cause.
      </p>
      <p>
        This article explains what a photogrammetric point cloud is, how it differs from a mesh and
        from an orthomosaic, what kinds of measurements it may support, and where the record stops.
        The practice that produces these files is described under{" "}
        <Link href="/services/mapping">mapping and photogrammetry</Link>. How a mesh is built from
        the same photographs is covered in{" "}
        <Link href="/blog/3d_model">exploring interactive 3D models</Link>.
      </p>

      <h2>What a point cloud is</h2>
      <p>
        A point cloud is a collection of points in three-dimensional space. Each point has a
        position. In a colorized cloud, many points also carry a color taken from the photographs
        used to reconstruct them. Together, the points sample the surfaces that were visible during
        capture: ground, a roof, a wall, a stockpile, equipment that did not move, or the face of
        an excavation.
      </p>
      <p>
        The useful thing about the cloud is that those samples can be rotated, sectioned, and
        compared. A reviewer can look at the relationship between a pad and an access road, or
        between a building face and the yard in front of it, without being limited to the
        viewpoint of one photograph. The cloud is a spatial record of what was visible. Empty space
        between points is not a measured surface. Software may later connect the points into a
        mesh or a grid, and that connection is a further product, not a fact already stored in
        every gap.
      </p>

      <h2>How a photogrammetric point cloud is created</h2>
      <ArticleFigure
        src="/pointclouds-camerapoints.png"
        alt="Camera positions shown over a photogrammetric point cloud of a mapped site"
        caption="Camera positions over a reconstructed cloud. The points exist where overlapping photographs could be matched."
      />
      <p>
        Photogrammetric clouds used in site documentation usually start as overlapping still
        photographs. Processing software finds features that appear in more than one frame, estimates
        where the cameras were, and then estimates where those features sit in space. A first,
        sparse set of tie points is enough to align the cameras. A denser cloud is then built by
        estimating many more positions across the surfaces the photographs actually show.
      </p>
      <p>
        That sequence is the ordinary structure-from-motion path described in technical processing
        literature, including U.S. Geological Survey workflow documentation for overlapping aerial
        imagery. The details of the software settings change. The dependency does not. If two
        photographs do not share enough visible surface, there is nothing to match, and that part
        of the site does not become points. Pix4D’s own product description is consistent with
        this: a densified cloud is a reconstructed set of 3D points, computed from the earlier tie
        points, and color can be stored with position. That description defines the file. It is
        not a statement that every cloud supports the same measurement.
      </p>
      <p>
        SterFlies produces this kind of cloud when the engagement asks for a spatial dataset, not
        as an automatic attachment to every flight. The capture plan—overlap, altitude, surface,
        and any control—is what makes the later file usable or not.
      </p>

      <h2>Density, color, and coordinates</h2>
      <p>
        Point density is how closely those samples are spaced. A denser cloud can describe a small
        edge or a narrow trench more clearly than a sparse one, provided the surface was visible
        and the photographs could support the extra points. Density is not accuracy. A cloud can
        be dense and still sit in the wrong place relative to a map grid, or dense on the near
        face of an object and empty on the far face.
      </p>
      <p>
        A colorized, or RGB, cloud paints those points with color from the source photographs. Color
        helps a reviewer recognize a material, a marking, or a piece of equipment. It does not add
        a measurement. A gray cloud and a colorized cloud can describe the same geometry. Color is
        a viewing aid and, sometimes, a way to connect the geometry back to the photographs.
      </p>
      <p>
        Coordinates are the other half of the file. Each point is stored in some coordinate
        reference system, or in a local frame that has not been tied to one. A projected grid, a
        horizontal datum, and a vertical datum are different choices. Mixing a cloud from one
        system with a drawing from another shifts the model even when both files look correct on
        their own. At the level that matters for review, the question is simple: what frame was
        this cloud placed in, and was that frame the one the rest of the project uses? The answer
        belongs in the delivery notes for that engagement. It is not implied by the file extension.
      </p>

      <h2>Point clouds, meshes, and orthomosaics</h2>
      <ArticleFigure
        src="/3DThumbnail.png"
        alt="Textured 3D mesh reconstructed from site photographs"
        caption="A mesh connects points into a surface and can be textured for viewing. It is a derived model, not the cloud itself."
      />
      <p>
        A mesh takes the cloud, or the same photographs, and builds a continuous surface of
        triangles. That surface is easier to walk through in a viewer, and it is what most people
        mean by a 3D model. The mesh can hide how sparse or noisy the underlying points were. Where
        the cloud had a hole, the mesh may still show a face, because the software interpolated
        one. For review of form and context, the mesh is often the right deliverable. For a
        question about what was actually sampled, the cloud is the more direct record.
      </p>
      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png"
        alt="Orthomosaic map of a documented site"
        caption="An orthomosaic is a scaled plan-view map. It is a different product from the three-dimensional cloud, even when both come from the same capture."
      />
      <p>
        An orthomosaic is a scaled, plan-view image. Relief displacement is reduced so the map can
        be read from above. Distances and areas on that map are two-dimensional questions. The
        cloud is the three-dimensional sample those map pixels were built from, or built alongside.
        A reviewer who needs layout across a site often starts with the orthomosaic, described in{" "}
        <Link href="/blog/orthomosaic_blog">understanding orthomosaic mapping</Link>. A reviewer who
        needs height, a section, or the shape of a surface goes to the cloud or to a surface made
        from it. Neither product replaces the other, and neither is a photograph’s substitute for
        a licensed survey.
      </p>

      <h2>What measurements may be possible</h2>
      <p>
        When the capture was planned for measurement, a cloud can support distances, height
        differences, areas, and volumes on the surfaces it actually contains. A section through a
        stockpile, a clearance between two visible objects, or a comparison of two clouds from
        compatible visits are the ordinary uses. Volume work, in particular, depends on a defined
        base and on a surface that was visible. That limit is discussed in{" "}
        <Link href="/blog/volumetric_blog">volumetric data from photogrammetric surfaces</Link>.
      </p>
      <p>
        The measurement is only as good as the capture and the control behind it. Overlap, camera
        geometry, surface texture, and whether the cloud was tied to surveyed control or left in a
        relative frame all change the result. ASPRS positional-accuracy standards treat accuracy as
        a tested property of a geospatial product, not as a label that arrives with the sensor.
        SterFlies does not publish a universal accuracy for point clouds. A figure, if one is
        required, has to be defined for that project and checked by the method the project
        specified. How control and checkpoints fit that check is covered in{" "}
        <Link href="/blog/rtk-ground-control-checkpoints-drone-mapping">
          RTK, ground control, and checkpoints
        </Link>
        .
      </p>
      <ArticleCallout>
        A distance taken from a cloud is a measurement of the reconstructed surface, under the
        capture and control used for that file. It is not a survey certification.
      </ArticleCallout>

      <h2>Why surfaces go missing</h2>
      <p>
        The cloud contains surfaces the photographs could see from more than one position.
        Occlusion removes the rest. The underside of a slab, the ground beneath a vehicle, the back
        of a tank, and the interior of a building are absent unless something else captured them.
        A hole in the cloud is information. It means that surface was not sampled. Filling the hole
        for a prettier model does not create the missing observation.
      </p>
      <p>
        Some surfaces are visible and still reconstruct poorly. Vegetation moves and hides the
        ground, so a cloud of a tree canopy is not a cloud of the grade beneath it. Reflective
        glass, water, and polished metal give the matcher false or shifting features. A homogeneous
        surface—fresh snow, a blank wall, still water, or a textureless paved area—may not offer
        enough detail for the software to decide where one point ends and the next begins. The
        practical result is noise, a gap, or a surface that looks complete and is not reliable for
        a close measurement. Those limits should be stated with the delivery, not discovered when
        someone tries to measure across them.
      </p>

      <h2>A point cloud is not a survey</h2>
      <p>
        A mapped point cloud can be useful and still not be a land survey. A survey, in the sense
        that determines boundaries, easements, or other legal location, is the work of a licensed
        surveyor under the rules of that jurisdiction. Photogrammetry can document visible
        surfaces and, when controlled and checked, support measurements the project defined. It
        does not stamp a boundary, certify an as-built, or establish a property corner because the
        file contains coordinates.
      </p>
      <p>
        The same restraint applies to forensic and industrial use. The cloud can show where visible
        features sat relative to one another at the time of capture. It cannot determine how an
        incident occurred, whether a condition was defective, or who was responsible. Those
        questions stay with the qualified reviewer. The documentation role is described under{" "}
        <Link href="/services/forensic-site-documentation">
          forensic mapping and site documentation
        </Link>
        .
      </p>

      <h2>How the record is used</h2>
      <p>
        In ordinary site review, the cloud is a way to look at geometry after the site has changed
        or after the reviewer has left. Teams use it to see layout, to check a visible clearance,
        or to compare a later visit with an earlier one when both captures were planned to be
        compared. The{" "}
        <Link href="/projects/65acresite">65-acre site mapping project</Link> is an example of
        repeat aerial mapping used as a shared spatial record of grading, utilities, pads, and
        access. The delivered map for that work was an orthomosaic and a web map. A cloud is the
        related spatial dataset when the scope asks for one, not a result that project claimed on
        its own.
      </p>
      <p>
        On construction and industrial sites, the same file can hold the visible shape of earthwork,
        material piles, equipment surroundings, and large exterior surfaces while they still exist.
        It is a record of those surfaces. It is not a pay quantity, a safety determination, or an
        inventory system. In a forensic or existing-conditions context, the cloud preserves spatial
        relationships that scattered photographs lose: how an excavation sat in a yard, how a roof
        plane met a wall, or how access approached a work area. Interior rooms still need a
        ground-based method. An overhead cloud does not see them.
      </p>

      <h2>Exports and limitations</h2>
      <p>
        When the processing method and the engagement specify them, SterFlies can provide technical
        exports such as LAS for the cloud, GeoTIFF for raster map products, or OBJ for a mesh.
        The format does not improve the geometry. A LAS file of a poorly controlled cloud is still
        a poorly controlled cloud. A viewer or a web model may be the agreed way to look at the
        same data. The delivery should say which file is the cloud, which coordinate frame it uses,
        and what was not captured.
      </p>
      <p>
        The standing limitations are the ones already described. The cloud samples visible surfaces
        only. Density is not accuracy. Color is not a measurement. Control, overlap, and surface
        conditions decide whether a distance is meaningful. Occlusion, vegetation, reflection, and
        textureless areas leave gaps or noise. The file is not a boundary survey, not a causation
        finding, and not evidence merely because it is three-dimensional.
      </p>

      <h2>Conclusion</h2>
      <p>
        A point cloud is a set of estimated positions on surfaces a capture could see. Photogrammetry
        builds it from overlapping photographs. A mesh makes those points easier to view. An
        orthomosaic makes the same site easier to read from above. Measurements are possible when
        the capture and the control were planned for them, and they remain measurements of that
        reconstruction, not a licensed survey.
      </p>
      <p>
        Used with those limits stated, the cloud is a serious site record for construction,
        industrial, and forensic review. Used as if every point were a surveyed coordinate, it
        overstates what the method did. If a project needs a cloud, a mesh, or a map,{" "}
        <Link href="/contact">discuss the documentation objective</Link> before the capture is
        planned. The file should follow from that objective.
      </p>
    </ArticleLayout>
  )
}
