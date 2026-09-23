import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import ThreeDViewer from "@/app/components/ThreeDViewer"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("3d_model")

export default function Page() {
  return (
    <ArticleLayout slug="3d_model">
      <h2>Introduction</h2>
      <p>
        A site review often needs more than still photographs taken from the ground. Reality
        capture is the practice of recording visible conditions at a stated time so someone who was
        not there can examine geometry and relationships. Photogrammetry is the part of that
        practice that reconstructs shape from overlapping photographs.
      </p>
      <p>
        Photogrammetry can turn overlapping still photographs into a navigable 3D record. The
        result is not a cinematic visualization first. It is a way to preserve site geometry so
        later reviewers can look around, check relationships, and compare conditions without
        standing on the site.
      </p>
      <p>
        The viewer below is a photogrammetric mesh from the{" "}
        <Link href="/projects/custom-home-3d-model">custom-home 3D reconstruction project</Link>.
        Rotate and zoom to inspect the structure. A browser-based Pix4D preview of the same dataset
        is also available for comparison.
      </p>

      <figure className="article-figure">
        <div className="my-8 h-[min(32rem,70vh)] w-full border border-[var(--color-line)] bg-[var(--color-surface)]">
          <ThreeDViewer src="/Untitled-draco.glb" />
        </div>
        <figcaption className="article-caption">
          Interactive 3D mesh reconstructed from overlapping stills.{" "}
          <a
            href="https://cloud.pix4d.com/dataset/2296493/model?shareToken=09060804-7968-40ea-894e-03333aebe539"
            target="_blank"
            rel="noreferrer"
          >
            Open the Pix4D dataset preview
          </a>
          .
        </figcaption>
      </figure>
      <p>
        This article explains how those photographs become a point cloud and then a textured mesh,
        and what affects whether the mesh is complete enough to inspect. The model above is an
        example of that product. The article does not decide whether a measurement from a model is
        appropriate for design, fabrication, or a survey, and it does not report dimensions or
        findings for the house shown here.
      </p>

      <h2>How photogrammetric 3D models are made</h2>
      <p>
        The viewer shows a finished mesh. The sequence below is how a mesh of that kind is
        produced.
      </p>
      <p>
        Capture follows a planned pattern with high overlap so the same surfaces appear in many
        photographs. Processing software identifies common features, estimates camera positions, and
        builds a point cloud. That cloud can be converted into a mesh, then textured with the
        original photographs.
      </p>
      <ol>
        <li>
          <strong>Image capture.</strong> Grid or orbital passes collect overlapping stills. Speed,
          altitude, and camera settings are kept consistent to reduce gaps.
        </li>
        <li>
          <strong>Point cloud.</strong> Photogrammetry software aligns the photographs and
          triangulates tie points into a dense 3D point set.
        </li>
        <li>
          <strong>Mesh and texture.</strong> The point cloud becomes a surface, and photographic
          texture is applied so the model can be inspected visually as well as spatially.
        </li>
      </ol>
      <p>
        The same image set can also produce an orthomosaic.{" "}
        <Link href="/blog/orthomosaic_blog">Understanding orthomosaic mapping</Link> covers that 2D
        output. <Link href="/services/mapping">Mapping and photogrammetry</Link> describes when
        SterFlies uses these methods on a project.
      </p>
      <p>
        A point cloud is a set of positions in three-dimensional space, each estimated where the
        same surface detail was seen from more than one photograph. The mesh connects those points
        into faces, and the texture paints the faces with the photographs. A surface that appears
        in only one or two frames may never become a reliable set of points, so the mesh can contain
        a hole or a stretched face there. Glass, standing water, and objects that moved between
        frames are common causes. Visual smoothness is not the same thing as a well-sampled
        surface.
      </p>

      <h2>Where 3D reconstruction is useful</h2>
      <p>
        The processing sequence explains the file. Usefulness depends on whether a later reviewer
        needed geometry rather than a single viewpoint.
      </p>
      <p>
        A navigable model is most useful when later reviewers need geometry, not just a selected
        viewpoint:
      </p>
      <ul>
        <li>
          <strong>Construction and existing conditions.</strong> As-built context, progress
          comparison, and coordination when the site is changing.
        </li>
        <li>
          <strong>Site layout and terrain.</strong> Relating structures, grades, and access in three
          dimensions.
        </li>
        <li>
          <strong>Volume context.</strong> Surfaces derived from photogrammetry can support volume
          discussion when a capture is scoped for that output. Reported tolerances vary with method
          and control; they are not a guaranteed inventory accuracy.
        </li>
      </ul>
      <p>
        On a building or a site layout, the useful question is often relational. A reviewer can
        look at how a roof meets a wall, how grade approaches an entry, or how a piece of equipment
        sat beside an access path, without being limited to the camera angles chosen in the field.
        The house model above is that kind of inspection. Volume context is a further product: the
        space between two surfaces, estimated only when the capture was planned for the comparison.
        That estimate does not identify material type, compaction, or ownership, and it does not
        become a payment quantity merely because a mesh exists.
      </p>

      <h2>What affects model quality</h2>
      <p>
        Relational inspection still fails where the photographs were thin, blurred, or poorly
        placed.
      </p>
      <p>
        More well-placed photographs usually produce a denser, more complete surface. Overlap,
        ground sample distance, lighting, and camera stability all matter. RTK positioning can
        improve the geospatial placement of a model when it is part of the capture plan. It does
        not, by itself, make every measurement “centimeter accurate.”
      </p>
      <ul>
        <li>
          <strong>Overlap.</strong> Surfaces seen in many photographs reconstruct more reliably than
          surfaces seen in one or two frames.
        </li>
        <li>
          <strong>Ground sample distance.</strong> Lower altitude or a higher-resolution sensor
          records finer texture. That is a resolution choice, not a survey specification.
        </li>
        <li>
          <strong>Lighting and motion.</strong> Harsh shadows, blur, and mixed exposures reduce
          feature matching.
        </li>
      </ul>
      <ArticleCallout>
        Model completeness and measurement usefulness depend on the capture plan. They are not
        automatic properties of having a 3D file.
      </ArticleCallout>
      <p>
        Ground sample distance (GSD) is the ground width represented by one pixel. It depends
        mainly on how far the camera is from the surface and on the sensor and lens. A finer GSD
        records smaller texture, which gives feature matching more detail. It does not state how
        far a point in the model may lie from a position established by a surveyor.
      </p>
      <p>
        Real-time kinematic (RTK) positioning corrects the camera’s satellite position during
        capture, using a base station or a network correction, and stores that position with the
        photographs. Those positions help place the model in a coordinate system. Placement and
        surface detail are different properties. A model can sit in a useful coordinate frame and
        still miss a wall the camera never saw.
      </p>

      <h2>Field practices that help</h2>
      <p>
        The factors above are properties of the capture. Field habits are how they are held steady
        on the day.
      </p>
      <ol>
        <li>
          <strong>Plan the flight or capture path</strong> for the surfaces that matter, including
          edges and vertical faces when those are in scope.
        </li>
        <li>
          <strong>Lock camera settings</strong> so exposure stays consistent across the set.
        </li>
        <li>
          <strong>Avoid wind, rain, and rapidly changing light</strong> when possible.
        </li>
        <li>
          <strong>Review the image set</strong> before processing and exclude frames that are
          blurred or unusable.
        </li>
      </ol>
      <p>
        The practical benefit is later review: people who were not on site can still inspect the
        captured geometry. That can reduce some return visits. It does not replace field
        verification when a decision requires it.
      </p>
      <p>
        Consistent exposure matters because matching compares patterns from frame to frame. A set
        that swings from deep shadow to blown highlights gives the software fewer stable marks.
        Reviewing the set before processing is the chance to remove frames that would pull the
        solution toward a bad camera position. Later inspection can be thorough only for the
        surfaces the remaining frames contain.
      </p>

      <h2>Limitations</h2>
      <p>
        A photogrammetric mesh is a model of visible surfaces sampled from the photographs that
        were kept. It omits interiors unless those spaces were photographed with their own overlap.
        It omits the far side of objects, the ground under a stockpile or a vehicle, and any face
        seen too few times to reconstruct. A browser model may also be simplified so it can load.
        The viewer is for inspection of shape and appearance, and a simplified mesh can drop small
        geometry that still exists in the original processing project.
      </p>
      <p>
        The model does not explain why a condition exists, and it does not grade the work. A gap or
        an uneven surface can be looked at in context. Where a dimension has to be checked, the
        model is a guide to where to look and a record of what was visible. The check follows the
        method the decision requires.
      </p>

      <h2>Conclusion</h2>
      <p>
        Overlapping photographs, aligned by photogrammetry, produce a point cloud. That cloud can
        be meshed and textured so a later reviewer can move through the captured geometry instead
        of assembling the site from separate stills. Overlap, ground sample distance, lighting, and
        camera position, including RTK when the plan uses it, govern how complete that geometry is
        and how it sits in coordinates.
      </p>
      <p>
        The practical result is shared inspection. Construction, safety, and design reviewers can
        see relationships among structure, grade, and access, and they can return to the same model
        after the site has changed. An orthomosaic from the same frames provides the map view.
        Close photographs and, when a decision requires them, field measurements still carry the
        determinations a surface cannot make.
      </p>
      <p>
        The model is not a survey, not a diagnosis, not a finding of causation, and not inventory
        control. It is a record of visible geometry under a stated capture plan. Reviewers use it
        to see that geometry. The determination their role requires stays with them.
      </p>
    </ArticleLayout>
  )
}
