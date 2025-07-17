// app/services/construction/page.tsx
import React from 'react'
import DeliverablesGrid from '@/app/components/DeliverablesGrid/DeliverablesGrid'
import ConstructionMenu from "@/app/components/ConstructionMenu"
import {
  ClockIcon,
  FilmIcon,
  MapIcon,
  BoxIcon,
  FileTextIcon,
  ShieldIcon,
  TargetIcon,
  ZapIcon,
  EyeIcon,
} from 'lucide-react'

export const metadata = {
  title: 'Construction Progression Updates | SterFlies',
  description: 'High-resolution aerial imagery and time-lapse videos for documenting site development.',
}

export default function ConstructionPage() {
  // "What We Offer" features
  const features = [
    { title: 'Routine Flights', desc: 'Weekly or bi-weekly aerial photography sessions', icon: ClockIcon },
    { title: 'Time-lapse Milestones', desc: 'Time-lapse video production showcasing milestones', icon: FilmIcon },
    { title: 'Orthomosaic Maps', desc: 'Orthomosaic maps for detailed site analysis', icon: MapIcon },
    { title: '3D Progress Models', desc: '3D progress models and volumetric measurements', icon: BoxIcon },
    { title: 'Custom Reporting', desc: 'Customizable reporting packages', icon: FileTextIcon },
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
          <h1 className="text-5xl font-bold">Construction Progression Updates</h1>
          <p className="mt-4 text-lg">
            At SterFlies, we capture every stage of your construction project with precision. Our high-resolution aerial imagery combined with time-lapse videos gives you a comprehensive visual record for stakeholder presentations, progress tracking, and marketing materials.
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

