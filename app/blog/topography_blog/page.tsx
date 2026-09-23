import Link from "next/link"
import ArticleCallout from "@/app/components/article/ArticleCallout"
import ArticleFigure from "@/app/components/article/ArticleFigure"
import ArticleLayout from "@/app/components/article/ArticleLayout"
import { articleMetadata } from "@/app/lib/articles"

export const metadata = articleMetadata("topography_blog")

export default function Page() {
  return (
    <ArticleLayout slug="topography_blog" wordCount={780}>
      <h2>Introduction</h2>
      <p>
        Elevation is easier to discuss than to see in a single photograph. A site can look flat and
        still fall enough to move water, change a pad, or alter an earthwork quantity. Reality
        capture, for terrain, means recording the visible ground surface at a stated time so a
        later reviewer can read that shape. Photogrammetry does the reconstruction from overlapping
        photographs, producing a surface rather than one perspective frame.
      </p>
      <p>
        Topographic maps show elevation and landform on a flat sheet or screen. Contour lines
        connect points of equal elevation so a reviewer can see slopes, ridges, drainage paths, and
        relative height.
      </p>
      <p>
        Photogrammetry can produce terrain and elevation context from overlapping images. That is
        not the same product as a licensed land survey or a stamped topographic survey.
      </p>

      <ArticleFigure
        src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754482412/STERFLIES_TOPODEMO_aiokyp.png"
        alt="Photogrammetric topographic context derived from overlapping aerial images"
        caption="A photogrammetric elevation product can provide terrain context. It is not a legal survey."
      />
      <p>
        This article explains how contours and a photogrammetric elevation surface show landform,
        and how that product differs from a licensed topographic survey. It is for reviewers who
        need to read slope, drainage direction, and relative height. It does not decide design
        grades, construction staking, drainage calculations, or a boundary.
      </p>

      <h2>What a topographic map is showing</h2>
      <p>
        The figure above is an elevation product of that kind. Reading it starts with the
        conventions the lines already use.
      </p>
      <p>
        Closely spaced contours usually indicate steeper ground. Wider spacing usually indicates
        gentler slopes. V-shaped contours often follow drainage. Concentric contours can indicate a
        hill or a depression, depending on how they are drawn. Those reading conventions are
        educational. They do not make any particular map a survey.
      </p>
      <p>
        The conventions are geometric. In a valley, contours often form a V that points upstream,
        toward higher ground. On a ridge, the V tends to point downhill. Closed contours can mark a
        hill or a depression, and the elevation labels distinguish the two. None of this tells a
        reviewer whether the lines came from a survey, from photogrammetry, or from a design. The
        source of the lines is a separate fact, and it should be stated on the product.
      </p>
      <p>
        Contours are also a generalization. They are drawn at an interval, so a ridge or a rut
        narrower than that interval may not appear. A photogrammetric surface can hold more detail
        than the contour sheet derived from it, and it can hold noise: vegetation, debris, and
        mismatched points that look like ground. The interval, the date, and what was treated as
        the ground surface belong with the map.
      </p>

      <h2>Photogrammetric elevation versus a legal survey</h2>
      <p>
        Reading conventions do not decide who is entitled to sign the map.
      </p>
      <p>
        A photogrammetric surface or contour set is derived from images, processing, and whatever
        control was used. A licensed topographic survey is a professional work product prepared
        under surveying standards and, when required, stamped by a licensed surveyor.
      </p>
      <p>
        SterFlies can document terrain context when a project is scoped for that output. SterFlies
        does not replace a licensed surveyor. If a legal description, boundary, or stamped survey is
        required, that work belongs to a licensed professional.
      </p>
      <ArticleCallout>
        Use photogrammetric elevation outputs as documentation and planning context. Use a licensed
        survey when the task is a legal survey.
      </ArticleCallout>
      <p>
        The photogrammetric surface is built from a point cloud, the three-dimensional points
        estimated where the same ground features appear in overlapping frames. Those points can be
        gridded into a digital elevation model, and contours can be traced from that grid.
        Real-time kinematic (RTK) camera positions, when used, help place the grid in coordinates.
        Ground sample distance (GSD), the ground width of one pixel, influences how small a terrain
        break the photographs can record. Placement and detail still depend on overlap, on whether
        the camera saw bare ground, and on the control the plan included. The contours are a
        rendering of that surface.
      </p>

      <h2>Where photogrammetric terrain context is useful</h2>
      <p>
        The difference between context and a legal survey is what makes the useful cases specific.
      </p>
      <p>
        It can help later reviewers see grade, drainage direction, and relative elevation across a
        site. It can also support later{" "}
        <Link href="/blog/volumetric_blog">volume context</Link> when surfaces are compared. Map
        geometry is discussed in{" "}
        <Link href="/blog/orthomosaic_blog">understanding orthomosaic mapping</Link>.
      </p>
      <p>
        Usefulness still depends on coverage, visibility, processing, and control. Dense vegetation
        and steep faces are common limits.{" "}
        <Link href="/services/mapping">Mapping and photogrammetry</Link> describes when this
        output is in scope.
      </p>
      <p>
        On an earthwork site, a reviewer can see which way a pad falls, where water would tend to
        travel along a ditch, and how a stockpile sits against a slope. On a larger layout, the
        same surface shows access, structures, and grade together. A safety reviewer or an
        industrial hygienist can use that geometry to understand where a work area sat relative to
        a slope or a drainage path. The surface does not identify a hazard by itself, and it does
        not calculate a flow. It shows the visible shape those later judgments have to account for.
      </p>

      <h2>Limitations</h2>
      <p>
        The common limits are visibility and interpolation. Trees, tall grass, and stockpiles hide
        the ground. Steep faces are seen from above at a shallow angle, so they are often thinner
        in the point cloud than open ground. Where points are missing, software fills a surface.
        That fill can look as smooth as measured ground. A reviewer should know which areas were
        matched from photographs and which were bridged.
      </p>
      <p>
        Photogrammetric elevation also does not locate a property line, an easement, or a benchmark
        that was not part of the capture. Relative shape across a well-seen, open site can be clear
        while the absolute height of that shape still depends on control. Stakeout, a flood study,
        or a pay quantity is work this product does not complete.
      </p>

      <h2>Conclusion</h2>
      <p>
        Contours and a photogrammetric surface are two views of elevation. The contours are a
        readable summary. The surface is the grid they came from, built from overlapping
        photographs and the points matched in those photographs. Ground sample distance, RTK or
        other control, and bare-ground visibility govern what that grid contains.
      </p>
      <p>
        Reviewers in construction, safety, insurance, and engineering can use the product to see
        slope, drainage direction, and the setting of a site layout. Volume comparisons can follow
        when two such surfaces are subtracted under a stated plan. An orthomosaic from the same
        frames shows the picture that goes with the heights. The map remains context for those
        uses.
      </p>
      <p>
        It is not a survey, not a diagnosis, not a finding of causation, and not inventory control.
        A licensed topographic survey is a different work product. When the task is that survey,
        the photogrammetric record can show what the site looked like. It does not take the
        survey’s place.
      </p>
    </ArticleLayout>
  )
}
