'use client';

import React from 'react';
import Image from 'next/image';
import { Settings, MapPin, Drone, Cpu, FileText } from 'lucide-react';

// Cloudinary loader (reuse from Applications page)
const cloudinaryLoader = ({ src }: { src: string }) => src;

export default function ProcessMethodPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <header className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Process & Method</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          At SterFlies, we follow a rigorous workflow to ensure accurate, reliable, and actionable thermal data. From mission planning to final report delivery, our approach leverages cutting-edge DJI Matrice 4T hardware and advanced analytics software.
        </p>
      </header>

      {/* Equipment & Platform Section */}
      <section className="space-y-6">
        <div className="flex items-center space-x-4">
          <Drone className="w-10 h-10 text-blue-600" />
          <h2 className="text-2xl font-semibold">Equipment & Platform</h2>
        </div>

        <div className="md:grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We deploy the DJI Matrice 4T—our flagship thermal drone platform—equipped with 640x512 resolution thermal camera. Key specifications include:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Max Flight Time:</strong> up to 38 minutes per battery</li>
              <li><strong>RTK Module:</strong> Built in RTK Module that delivers centimeter-level positional accuracy—keeping thermal overlays aligned within just ±2 cm of real-world coordinates. </li>
              <li><strong>Sensor:</strong> DJI Matrice 4T: uncooled vanadium oxide (VOx) (640×512 thermal resolution, 20 MP RGB)</li>
              <li><strong>Transmission Range:</strong>  Up to 15.5 miles with DJI O4 Enterprise system. </li>
              <li><strong>Laser Rangefinder:</strong> Measurement Range: 1800 m (1 Hz) @20% reflectivity target. Blind Zone: 1 m. Distance Measurement Accuracy: 1-3 m: System Error less than 0.3 m, Random Error less than 0.1 meters @1σ</li>
              <li><strong>Operational Temp:</strong> –20 °C to 50 °C</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This robust setup enables high-altitude, stable flights even in challenging environments—capturing crisp thermal data for every job.
            </p>
          </div>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow">
            {/* Placeholder for Matrice 4T image */}
            <Image
              loader={cloudinaryLoader}
              src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1752714517/Screenshot_2025-07-16_200823_otr7os.png"
              alt="DJI Matrice 4T Drone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="space-y-16">
        {/* Step 1: Mission Planning */}
        <article className="space-y-6">
          <div className="flex items-center space-x-4">
            <MapPin className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Step 1: Mission Planning</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our team analyzes site maps, client objectives, and environmental factors to design flight paths that ensure full coverage and optimal thermal resolution. We consider altitude, emissivity, reflectivity, overlap, and speed to balance image detail with efficient operation.
          </p>
        </article>

        {/* Step 2: Data Acquisition */}
        <article className="space-y-6">
          <div className="flex items-center space-x-4">
            <Settings className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Step 2: Data Acquisition</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Using the Matrice 4T and Zenmuse H20T, we execute pre-approved flight plans in compliance with FAA regulations. Real-time telemetry and thermal preview allow us to adjust camera settings on-the-fly and confirm data quality before concluding the mission.
          </p>
        </article>

        {/* Step 3: Processing & Analysis */}
        <article className="space-y-6">
          <div className="flex items-center space-x-4">
            <Cpu className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Step 3: Processing & Analysis</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Raw thermal footage and stills are imported into our analysis suite for georeferencing, radiometric calibration, and heat-map generation. We integrate GIS layers and NDVI indices when crop or vegetation metrics are required.
          </p>
        </article>

        {/* Step 4: Reporting & Delivery */}
        <article className="space-y-6">
          <div className="flex items-center space-x-4">
            <FileText className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">Step 4: Reporting & Delivery</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Clients receive a comprehensive report featuring high-resolution thermal images, annotated maps, trend analysis, and clear action items. Reports are delivered as interactive PDFs and optional web dashboards for ongoing monitoring.
          </p>
        </article>
      </section>
    </main>
  );
}