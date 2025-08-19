import React from "react";
import ThreeDViewer from "@/app/components/ThreeDViewer";
import Link from "next/link";
import { Camera, LayersIcon, RulerIcon, DatabaseIcon, BoxIcon, Eye } from "lucide-react";


export const metadata = {
  title: "Exploring Interactive 3D Models | SterFlies",
  description:
    "Learn how SterFlies leverages drone photogrammetry to create interactive 3D models, enabling detailed analysis, measurements, and digital twin capabilities.",
  keywords: ["3D modeling", "interactive 3D", "drone photogrammetry", "SterFlies"],
  openGraph: {
    title: "Exploring Interactive 3D Models | SterFlies",
    description:
      "Learn how SterFlies leverages drone photogrammetry to create interactive 3D models, enabling detailed analysis, measurements, and digital twin capabilities.",
    url: "https://sterflies.com/blog/3d_model",
    siteName: "SterFlies",
    images: [
      {
        url: "https://sterflies.com/3DThumbnail.png",
        width: 1200,
        height: 630,
        alt: "Interactive 3D model by SterFlies",
      },
    ],
    type: "article",
  },
};

export default function ThreeDModelPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">3D Model Sample</h2>
      {/* Viewer at a fixed height */}
      <div className="w-full h-[600px]">
        <ThreeDViewer src="/Untitled-draco.glb" />
      </div>

       {/* Section: Client Preview Link */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Client Preview</h2>
        <p className="text-gray-700 mb-4">
          See how a client would see it for quick viewing. Click below to open it in a new tab.
        </p>
        <a
          href="https://cloud.pix4d.com/dataset/2296493/model?shareToken=09060804-7968-40ea-894e-03333aebe539"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
        >
          Open
        </a>
      </section>

      {/* Article Content */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Exploring Interactive 3D Models</h1>
        <p className="text-gray-500 mt-2">
          July 15, 2025 • By Jerome Sterling - Chief Pilot
        </p>
      </header>
      <article className="bg-white p-6 rounded-lg prose lg:prose-xl mx-auto space-y-16">
        {/* Intro Section */}
        <section>
          <h2 className="text-center text-4x1 font-bold">Interactive 3D Models: Unlocking New Perspectives</h2>
          <div>
            <Camera className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <p>
              Drone photogrammetry and 3D mapping have revolutionized how industries visualize and analyze real-world environments. Interactive 3D models generated from high-overlap aerial imagery create detailed point clouds and textured meshes that serve as digital twins of physical sites. These models empower stakeholders to explore, measure, and annotate spatial data in a browser—eliminating guesswork and reducing site visits.
            </p>
            <p>
              By embedding interactive 3D content into your planning and reporting workflows, you can streamline project approvals, enhance collaboration, and deliver more value. With no specialized software required, anyone from project managers to field technicians can access accurate 3D data on desktop or mobile devices.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-center text-4x1 font-bold">How Drone-based 3D Modeling Works</h2>
          <div>
            <LayersIcon className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <ol>
              <li>
                <strong>Image Capture (Photogrammetry):</strong> A drone follows a grid or lawn-mower flight pattern, capturing 70–80% overlap images from multiple angles. Consistent speed, altitude, and camera settings ensure uniform coverage and minimize gaps in the dataset.
              </li>
              <li>
                <strong>Processing & Point Cloud Generation:</strong> Specialized software like Pix4D, Agisoft Metashape, or DroneDeploy aligns common features across overlapping photos, triangulating millions of tie points to build a dense 3D point cloud with centimeter-level accuracy.
              </li>
              <li>
                <strong>Mesh & Texture Creation:</strong> The point cloud is converted into a polygon mesh, and high-resolution photographic textures are draped over the model. This step produces a photorealistic 3D surface ideal for measurements, volumetric analysis, and visual presentations.
              </li>
            </ol>
            <p>
              This end-to-end workflow—from drone flight planning to mesh generation—leverages automated algorithms and GPU acceleration to reduce processing time, delivering shareable 3D models in hours instead of days.
            </p>
          </div>
        </section>

        {/* Applications */}
        <section>
          <h2 className="text-center text-4x1 font-bold">Top Applications for 3D Modeling</h2>
          <div>
            <BoxIcon className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <p>
              Interactive 3D models have become indispensable across multiple industries. Here are the most common use cases:
            </p>
            <ul>
              <li>
                <strong>Construction & Engineering:</strong> Monitor site progress with volumetric cut/fill reports, verify as-built conditions against plans, and automate earthwork calculations. Detailed 3D data improves scheduling, cost estimation, and safety compliance.
              </li>
              <li>
                <strong>Surveying & GIS:</strong> Generate accurate digital terrain models (DTM/DSM), contour maps, and planimetric linework for land management. Track environmental changes like shoreline erosion, flood impact, or vegetation growth over time with repeat flights.
              </li>
              <li>
                <strong>Mining & Stockpile Management:</strong> Measure stockpile volumes with ±2% accuracy for inventory control. Conduct slope stability analysis and safety inspections to identify potential hazards and optimize material handling.
              </li>
              <li>
                <strong>Cultural Heritage & Conservation:</strong> Digitally archive historic monuments and archaeological sites in 3D. Offer virtual museum experiences or augmented reality overlays to promote public engagement and preservation efforts.
              </li>
            </ul>
          </div>
        </section>

        {/* Detail */}
        <section>
          <h2 className="text-center text-4x1 font-bold">Why More Photos = More Detail</h2>
          <div>
            <RulerIcon className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <ul>
              <li>
                <strong>High Overlap:</strong> Capturing each ground point in at least 5–10 photos ensures a dense point cloud and robust tie-point matching, leading to cleaner mesh reconstruction and fewer artifacts.
              </li>
              <li>
                <strong>Ground Sample Distance (GSD):</strong> Flying at lower altitudes (30–50 ft AGL) or using cameras with higher megapixel counts reduces GSD, which directly improves texture resolution and geometric precision.
              </li>
              <li>
                <strong>RTK (Real-Time Kinematic):</strong> Employing RTK-equipped drones ensures centimeter-level positional accuracy during capture, making your models highly precise for GIS applications.
              </li>
              <li>
                <strong>Optimal Lighting Conditions:</strong> Overcast skies provide diffuse lighting, minimizing harsh shadows that can interfere with feature detection. Golden hours offer warm, directional light useful for highlighting terrain contours.
              </li>
            </ul>
            <p>
              Investing in high-quality image capture—balanced overlap, proper altitude, and reliable RTK positioning—ensures your 3D models are accurate, detailed, and immediately actionable.
            </p>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-center text-4x1 font-bold">Best Practices for Capturing High-Quality Data</h2>
          <div>
            <DatabaseIcon className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <ol>
              <li>
                <strong>Flight Planning:</strong> Use flight planning apps to design grid or double-grid patterns, set consistent altitude and speed, and preview image overlap.
              </li>
              <li>
                <strong>Camera Settings:</strong> Shoot in manual mode—lock ISO, shutter speed, and aperture. Use RAW format if available for maximum dynamic range and post-processing flexibility.
              </li>
              <li>
                <strong>Environmental Factors:</strong> Avoid high winds and precipitation. Schedule flights on overcast days or during early morning/late afternoon to optimize lighting.
              </li>
              <li>
                <strong>Image Quality Control:</strong> Before processing, review and exclude blurry or improperly exposed images. Leverage GPU and multi-threading in your photogrammetry software to accelerate model generation.
              </li>
            </ol>
          </div>
        </section>

        {/* Business Benefits */}
        <section>
          <h2 className="text-center text-4x1 font-bold">The Business Benefits of Interactive 3D Models</h2>
          <div>
            <Eye className="float-left h-12 w-12 mr-4 mt-1 text-blue-500" />
            <p>
              Integrating interactive 3D deliverables into your service offerings can drive significant ROI and competitive advantage:
            </p>
            <ul>
              <li>
                <strong>Faster Decision-Making:</strong> Stakeholders can remotely inspect sites in 3D, reducing the need for on-site visits by up to 50% and accelerating project approvals.
              </li>
              <li>
                <strong>Enhanced Client Engagement:</strong> Interactive models and annotated fly-throughs deliver clearer insights than static 2D photos, leading to higher customer satisfaction and repeat business.
              </li>
              <li>
                <strong>New Revenue Streams:</strong> Upsell advanced volumetric analyses, subscription-based progress reports, and immersive VR/AR experiences to expand your service portfolio.
              </li>
              <li>
                <strong>Brand Differentiation:</strong> Offering cutting-edge 3D modeling positions you as an innovative, tech-forward provider, helping you win more bids and premium contracts.
              </li>
            </ul>
            <p>
              By leveraging high-precision 3D data, you can optimize workflows, improve safety, and showcase your expertise—driving growth across construction, surveying, real estate, and beyond.
            </p>
          </div>
        </section>
      </article>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          Call Today! 
        </Link>
      </div>
    </main>
  );
}


