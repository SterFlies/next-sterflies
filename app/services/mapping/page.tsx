// app/services/construction/page.tsx
import React from 'react'
import DeliverablesGrid from '@/app/components/DeliverablesGrid/DeliverablesGrid'
import ConstructionMenu from "@/app/components/ConstructionMenu"

import {
  ClockIcon,
  MapIcon,
  BoxIcon,
  FileTextIcon,
  ShieldIcon,
  TargetIcon,
  ZapIcon,
  EyeIcon,
  FileText,
  FilmIcon,
} from 'lucide-react'
import Link from 'next/link'




export const metadata = {
  title: 'Site Progress Tracking & Measurements | SterFlies',
  description: 'High-resolution aerial imagery stitched into orthomosaics, 3D models, volumetrics, cut/fill, and topographic maps.',
}

export default function ConstructionPage() {
  // "What We Offer" features
  const features = [
    { title: 'Routine Flights', desc: 'Weekly or bi-weekly aerial photography sessions', icon: ClockIcon },
    { title: 'Still image & Video Capture', desc: 'High-resolution photos and 4K videos for progress documentation.', icon: FilmIcon },
    { title: 'Topographic Mapping', desc: 'Detailed elevation and contour models for surveying and planning.', icon: MapIcon },
    { title: 'Orthomosaic Maps (2D)', desc: 'Orthomosaic maps for detailed site analysis', icon: MapIcon },
    { title: '3D Models & Digital Twins', desc: 'Interactive site models for planning, visualization, and presentations.', icon: BoxIcon },
    { title: 'Volumetric & Cut/Fill Analysis', desc: 'Accurate volume calculations and cut/fill reports for earthworks.', icon: FileTextIcon },
    { title: 'Custom Deliverables', desc: 'Tailored reporting packages in formats like GeoTIFF, LAS, OBJ, and DWG.', icon: FileText },
  ]

  // "Why Choose SterFlies?" benefits
  const benefits = [
    { title: 'Safety First', desc: 'Fully FAA Part 107 certified pilots and $2M liability insurance.', icon: ShieldIcon },
    { title: 'Centimeter Accuracy', desc: 'RTK-enabled GPS for sub-inch precision.', icon: TargetIcon },
    { title: 'Fast Turnaround', desc: 'Deliverables within 24–48 hours of flight.', icon: ZapIcon },
    { title: 'Insightful Data', desc: 'Actionable insights tailored to your needs.', icon: EyeIcon },
  ]

  return (
    <main className="bg-blue-50 py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-10 rounded-xl shadow-xl text-white text-center mb-16">
          <h1 className="text-5xl font-bold">Site Progress Tracking & Measurements</h1>
          <p className="mt-4 text-lg">
            At SterFlies, we transform aerial imagery into precise, actionable data. From 2D and 3D models to volumetric and cut/fill reports, our photogrammetry services provide the clarity you need to plan, monitor, and analyze your projects with confidence.
          </p>
        </div>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition flex flex-col items-center text-center">
                <f.icon className="w-12 h-12 text-blue-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3D Model Embed & CTA */}
        <section className="py-16 bg-gray-100 rounded-lg mb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Interact with our 2D Map</h3>
            <div className="w-full h-[400px] mb-6">
              <iframe
                title="Construction Progress Map"
                src="https://cloud.pix4d.com/dataset/2343984/map?shareToken=9dc76459-aab0-4309-8d9f-5d8e89f663cc"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; vr"
                className="rounded-lg shadow"
              />
            </div>
            <Link href="/blog/orthomosaic_blog" passHref>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
                Read our Blog!
              </button>
            </Link>
          </div>
        </section>

        {/* Construction Menu*/}
        <ConstructionMenu />

        {/* Why Choose SterFlies? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Why Choose SterFlies?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map(b => (
              <div key={b.title} className="p-6 bg-white border-l-4 border-green-500 rounded-lg shadow flex items-start gap-4">
                <b.icon className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h4 className="font-semibold mb-1">{b.title}</h4>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="mt-16">
          <DeliverablesGrid />
        </section>

      </div>
    </main>
  )
}

