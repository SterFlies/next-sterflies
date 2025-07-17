'use client';

import React from 'react';
import Image from 'next/image';
import { Sun, Home, Zap, Droplet, Crop, Search } from 'lucide-react';

// Custom Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => {
  return src;
};

const applications = [
  {
    Icon: Sun,
    title: 'Solar Farm Inspections',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190608_gmv8aj.png',
    description: [
      `Thermal imaging excels at identifying underperforming or damaged solar panels by revealing temperature variations. With SterFlies, we quickly pinpoint hot spots and panel failures on large solar arrays, ensuring efficient maintenance and maximizing energy output.`,
      `In addition, our high-resolution thermal scans help operations teams plan cleaning schedules and detect shading issues before they impact performance. Regular thermal surveys can extend the lifespan of solar installations and improve ROI.`
    ]
  },
  {
    Icon: Home,
    title: 'Roof & Building Envelope Inspections',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190627_nktdiu.png',
    description: [
      `Heat leaks, missing insulation, and moisture intrusion become visible through thermal scans. Our drone surveys capture entire rooftops and façades, helping facility managers and homeowners detect issues before they escalate into costly repairs.`,
      `By integrating thermal data with 3D models, SterFlies delivers comprehensive reports that prioritize repairs, optimize energy audits, and support compliance with building standards.`
    ]
  },
  {
    Icon: Zap,
    title: 'Electrical System Diagnostics',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190633_vv1dmt.png',
    description: [
      `Overheated connections, overloaded circuits, and transformer faults are critical safety hazards. Thermal imaging from above reveals electrical hot spots in substations, switchgear, and power lines, enabling preventative repairs and reducing downtime.`,
      `Our detailed thermal inspections include trend analysis and heat map visualizations, providing asset managers with actionable insights to schedule maintenance and avoid failures.`
    ]
  },
  {
    Icon: Droplet,
    title: 'Plumbing & Leak Detection',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712055/Screenshot_2025-07-16_190648_nfdiqw.png',
    description: [
      `Hidden leaks in pipes and HVAC systems often lead to structural damage. Our thermal flights rapidly locate moisture intrusion and pipe failures in commercial and residential properties, guiding precise repairs without invasive demolition.`,
      `With synchronized thermal and visual imaging, SterFlies delivers georeferenced leak maps and moisture profiles, reducing repair time and minimizing disruption.`
    ]
  },
  {
    Icon: Crop,
    title: 'Agriculture & Crop Monitoring',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712056/Screenshot_2025-07-16_190704_gu3jul.png',
    description: [
      `Stress, disease, and irrigation issues manifest as temperature anomalies in crops. By mapping large fields, SterFlies delivers actionable insights on plant health, water management, and yield optimization for farmers and agronomists.`,
      `Our NDVI and thermal data fusion supports precision agriculture workflows, enabling targeted interventions and efficient resource management.`
    ]
  },
  {
    Icon: Search,
    title: 'Search & Rescue / Wildlife Monitoring',
    imageUrl: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712055/Screenshot_2025-07-16_190639_uqio4u.png',
    description: [
      `Thermal cameras detect warm-bodied subjects in low-light or obscured environments. From locating lost hikers to tracking wildlife movements, our drones provide critical data for first responders and conservationists alike.`,
      `Real-time thermal feeds and GPS tagging accelerate response times and improve mission success rates, whether in emergency scenarios or ecological studies.`
    ]
  }
];

export default function ThermalApplicationsPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <header className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Applications & Services</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Unlock insights beyond visible sight. Thermal imaging reveals hidden anomalies,
          improves safety, and optimizes performance across a broad range of industries.
        </p>
      </header>

      {/* Application Sections with Cloudinary Images */}
      {applications.map(({ Icon, title, description, imageUrl }, index) => (
        <article
          key={title}
          className="space-y-6"
          style={{ pageBreakAfter: index < applications.length - 1 ? 'always' : 'auto' }}
        >
          <div className="flex items-center space-x-4">
            <Icon className="w-10 h-10 text-blue-600" />
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>

          <div className="md:grid md:grid-cols-2 gap-8 items-start">
            {/* Text Column */}
            <div className="space-y-4">
              {description.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
              ))}
            </div>

             {/* Image Column: maintain aspect ratio and show full image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                loader={cloudinaryLoader}
                src={imageUrl}
                alt={`Thermal ${title}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}

