
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Understanding Orthomosaic Mapping | SterFlies',
  description:
    'An in-depth guide to orthomosaic mapping: how SterFlies creates geometrically accurate, high-resolution aerial maps for surveying, construction, and land management.',
  keywords: ['orthomosaic mapping', 'drone mapping', 'aerial maps', 'GIS', 'SterFlies'],
  openGraph: {
    title: 'Understanding Orthomosaic Mapping | SterFlies',
    description:
      'Explore SterFlies’ orthomosaic workflow—from high-overlap drone flights to orthorectified exports—enabling precise measurements and GIS-ready maps.',
    url: 'https://sterflies.com/blog/orthomosaic_blog',
    siteName: 'SterFlies',
    images: [
      {
        url: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg',
        width: 1200,
        height: 630,
        alt: '36-acre orthomosaic map by SterFlies',
      },
    ],
    type: 'article',
  },
}

export default function OrthomosaicBlogPage() {
  return (
    <div className="bg-white py-20">
      <article
        className="
          mx-auto px-4 max-w-3xl
          prose prose-blue prose-xl
          prose-img:mx-auto prose-figure:my-16
        "
      >
        {/* Header */}
        <header className="space-y-6">
          <Image
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1754424448/TOPO_DEMO_transparent_mosaic_group1_yeqeyn.png"
            alt="Orthomosaic of a survey area"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />

          <h1 className="text-4xl font-bold leading-tight">
            Understanding Orthomosaic Mapping
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling — Chief Pilot</p>
            <time dateTime="2025-07-15">July 15, 2025</time>
          </div>
        </header>

        {/* Intro */}
        <p>
          Orthomosaic mapping has transformed aerial surveying by converting dozens—or even thousands—of overlapping drone photographs into one seamless, distortion-free map. Unlike traditional aerial imagery, which suffers from perspective and terrain tilt, an orthomosaic corrects for camera angle and ground elevation. The result is a geometrically accurate raster file that can be used for precise measurement, GIS overlays, and web-based map services. At SterFlies, we leverage this technology to deliver turnkey solutions for land surveyors, construction managers, and environmental planners.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* What Is an Orthomosaic Map? */}
        <h2 className="text-center text-4x1 font-bold">What Is an Orthomosaic Map?</h2>
        <p>
          An orthomosaic is generated when photogrammetry software stitches together high-overlap images and applies orthorectification algorithms. First, Structure-from-Motion (SfM) aligns each photo into a precise 3D point cloud. Then bundle adjustment refines the camera positions and corrects for lens distortion. Finally, a Digital Elevation Model (DEM) is generated and each pixel remapped to its true ground coordinate. The final image has uniform scale throughout, enabling you to draw accurate lines, measure areas, and calculate volumes just as you would on a traditional map.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* Why Orthomosaics Matter */}
        <h2 className="text-center text-4x1 font-bold">Why Orthomosaics Matter</h2>
        <p>
          Orthomosaic maps aren’t just pretty pictures—they’re powerful tools for decision-making. In construction, project managers overlay design plans to track earthwork progress and verify contractor payments. In agriculture, farmers use NDVI and other index layers atop orthomosaics to monitor crop health and irrigation coverage. Environmental consultants quantify erosion, wetland changes, and habitat restoration over time. And utility companies inspect transmission corridors and pipeline routes without setting foot in the field. By providing a single, high-resolution source of truth, orthomosaics reduce field visits, cut costs, and accelerate timelines.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* Key Flight Planning Factors */}
        <h2 className="text-center text-4x1 font-bold">Key Flight Planning Factors</h2>
        <p>
          The quality of your orthomosaic starts before takeoff. We recommend flying at a constant altitude—typically between 150 and 300 feet AGL—to achieve a ground sampling distance (GSD) of 3–5 cm/pixel. Plan for at least 75% forward overlap and 65% side overlap, using a lawnmower grid pattern for uniform coverage. For areas with tall vegetation or vertical structures, add perimeter passes at a slightly higher overlap to ensure no gaps appear along the edges.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* From Photos to Final Map */}
        <h2 className="text-center text-4x1 font-bold">From Photos to Final Map</h2>
        <p>
          After data collection, we upload images to our cloud-based photogrammetry pipeline. Automated bundle adjustment refines camera poses, while dense Multi-View Stereo (MVS) generates a high-density point cloud. From this we derive both a DEM and the final orthomosaic raster. Outputs are delivered as GeoTIFFs—ready for ArcGIS, QGIS, AutoCAD, or any modern GIS/CAD platform—or as tiled web maps for integration into online dashboards.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* Example: 36-Acre Survey */}
        <h2>Example: 36-Acre Survey at 200 ft</h2>
        <Image
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg"
          alt="Orthomosaic of 36-acre property"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
        />

        <hr className="my-16 border-gray-300" />

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Tell Us About Your Project!
            </h3>
            <p className="text-gray-700">
              We will respond within 24hrs
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:jerome.sterling@sterflies.com?subject=Inquiry"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
              >
                Email us!
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50"
              >
                Blogs
             </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}


