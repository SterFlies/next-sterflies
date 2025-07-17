"use client";
import React from "react";
import Image from 'next/image';

// Loader for Cloudinary-hosted images
const cloudinaryLoader = ({ src }: { src: string }) => src;

export default function OrthomosaicBlogPage() {
  return (
    <main className="container mx-auto px-4 py-16 prose prose-neutral prose-lg">
      {/* Article Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Understanding Orthomosaic Mapping</h1>
        <p className="text-gray-500 mt-2">July 15, 2025 • By Jerome Sterling- Chief Pilot</p>
      </header>

      {/* What is an Orthomosaic? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Is an Orthomosaic Map?</h2>
        <p>
          An orthomosaic is a single, seamless aerial image created by
          stitching together multiple overlapping photos. By correcting for
          camera tilt and terrain elevation, the result is a geometrically
          accurate, distortion-free map. This technology allows stakeholders
          to view large areas at high resolution, measure distances and
          areas directly on the map, and overlay GIS data for advanced
          analysis.
        </p>
      </section>

      {/* Importance and Uses */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Orthomosaics Matter</h2>
        <p>
          Orthomosaic maps are invaluable in industries from land surveying
          to agriculture and construction. They enable precise area
          calculations, volume estimations for stockpiles, and change
          detection over time. With an orthomosaic, project managers can
          monitor progress remotely—reducing field visits—while landowners
          gain clear insights into property boundaries and site features.
        </p>
      </section>

      {/* Flight Planning Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Flight Planning Factors</h2>
        <p>
          Achieving a high-quality orthomosaic starts with careful flight
          planning. Maintaining 70–80% overlap ensures each ground point
          appears in multiple images, which is critical for stitching.
          Flying at a consistent 200 ft altitude balances coverage area with
          ground sampling distance (GSD), delivering clear textures without
          excessive flight time. Grid or lawnmower patterns help capture
          uniform data, while perimeter passes fill in edge details.
        </p>
      </section>

      {/* Post-Processing Workflow */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">From Photos to Final Map</h2>
        <p>
          Once images are collected, photogrammetry software aligns key
          features across photos to build a 3D point cloud. Bundle
          adjustment refines camera positions and corrects lens distortion.
          From this point cloud, a digital elevation model (DEM) and
          orthorectified image are generated. The final export is a map
          where each pixel corresponds to true ground coordinates,
          ensuring accurate measurements.
        </p>
      </section>

      {/* Example Image */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example: 36‑Acre Survey at 200 ft</h2>
        <p>
          Below is an orthomosaic covering 36 acres of mixed terrain, flown
          at 200 ft altitude. Notice how property lines, vegetation zones,
          and access roads appear with crisp detail. This level of clarity
          helps landowners make informed decisions about site development,
          crop planning, or conservation efforts.
        </p>
        <Image
          loader={cloudinaryLoader}
          src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg"
          alt="Orthomosaic of 36-acre property"
          width={800}
          height={450}
          className="w-full max-w-xl h-auto rounded-lg shadow-lg mx-auto"
        />
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>
          Orthomosaic mapping transforms drone imagery into actionable maps.
          By adhering to best practices in flight planning and processing,
          you unlock precise, high-resolution data that supports surveying,
          planning, and monitoring tasks. Ready to see an orthomosaic in
          action? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> for a demo today.
        </p>
      </section>
    </main>
  );
}

