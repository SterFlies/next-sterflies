import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import ThreeDViewer from "@/app/components/ThreeDViewer"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("3d_model")

export default function Page() {
  return (
    <ArticleLayout slug="3d_model">
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

      <div className="my-8 h-[min(32rem,70vh)] w-full border border-[var(--color-line)] bg-[var(--color-surface)]">
        <ThreeDViewer src="/Untitled-draco.glb" />
      </div>
      <p className="!mt-0 mb-8 text-[0.9375rem] text-[var(--color-muted)]">
        Interactive 3D mesh reconstructed from overlapping stills.{" "}
        <a
          href="https://cloud.pix4d.com/dataset/2296493/model?shareToken=09060804-7968-40ea-894e-03333aebe539"
          target="_blank"
          rel="noreferrer"
        >
          Open the Pix4D dataset preview
        </a>
        .
      </p>

      <h2>How photogrammetric 3D models are made</h2>
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

      <h2>Where 3D reconstruction is useful</h2>
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

      <h2>What affects model quality</h2>
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

      <h2>Field practices that help</h2>
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
    </ArticleLayout>
  )
}
