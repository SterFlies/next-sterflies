// app/services/vacant-land-photography/page.tsx
import React from 'react'
import VacantLandDeliverables from '@/app/components/DeliverablesGrid/VacantLandDeliverables'
import {
  CameraIcon,
  MapIcon,
  BoxIcon,
  FileTextIcon,
  EyeIcon,
  ShieldIcon,
  TargetIcon,
  ZapIcon,
  Layers2Icon
} from 'lucide-react'

export const metadata = {
  title: 'Vacant Land Photography | SterFlies',
  description: 'High-resolution aerial photos and videos to showcase land properties for sale.',
}

export default function VacantLandPage() {
  // "What We Offer" features
  const features = [
    { title: 'High-Res Photos', desc: 'Stunning aerial imagery for property listings.', icon: CameraIcon },
    { title: 'Interactive Maps', desc: 'Georeferenced maps with parcel boundaries.', icon: MapIcon },
    { title: '3D Parcels', desc: 'Photogrammetric 3D models for terrain visualization.', icon: BoxIcon },
    { title: 'Detailed Reports', desc: 'Property reports with measurements and annotations.', icon: FileTextIcon },
    { title: 'Virtual Tours', desc: 'Branded video walkthroughs and flyovers.', icon: EyeIcon },
    { title: 'Boundary OverLays', desc:'Boundary Overlay to Showcase the property boundary.', icon:Layers2Icon}
  ]

  // "Why Choose SterFlies?" benefits
  const benefits = [
    { title: 'Local Expertise', desc: 'In-depth knowledge of land parcels and zoning.', icon: ShieldIcon },
    { title: 'Pinpoint Accuracy', desc: 'RTK-enabled GPS for centimeter precision.', icon: TargetIcon },
    { title: 'Quick Turnaround', desc: 'Processed deliverables within 24 hours.', icon: ZapIcon },
    { title: 'Full Support', desc: 'End-to-end project management and consultation.', icon: EyeIcon },
  ]

  return (
    <main className="bg-green-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-10 rounded-xl shadow-xl text-white text-center mb-16">
          <h1 className="text-5xl font-bold">Vacant Land Photography</h1>
          <p className="mt-4 text-lg">
            Capture the potential of your land listings with high-resolution aerial imagery and immersive video tours.
          </p>
        </div>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition flex flex-col items-center text-center">
                <f.icon className="w-12 h-12 text-green-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
            <VacantLandDeliverables />
        </section>
      </div>
    </main>
  )
}
