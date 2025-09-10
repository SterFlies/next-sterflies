import React from 'react'
import Link from 'next/link'
import ProcessFlow from '@/app/components/ProcessFlow'
import SignUpForm from "@/app/components/SignUpForm";
import {
  Camera,
  LandPlot,
  CircleDollarSign,
} from 'lucide-react'

interface Service {
  title: string
  slug: string
  description: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const services: Service[] = [
  {
    title: 'Project Documentation',
    slug: 'on-track',
    description: 'Detailed aerial & ground-level scanning.',
    Icon: Camera,
  },
  {
    title: 'Mapping & Site-Scanning',
    slug: 'mapping',
    description: 'High-resolution aerial data (orthomosaics, 3D maps/models, volumetrics, cut/fill, topography).',
    Icon: LandPlot,
  },
  {
    title: 'Business Marketing Content',
    slug: 'marketing',
    description: 'Professional drone cinematography to enhance your brand’s marketing strategy.',
    Icon: CircleDollarSign,
  },
]

export const metadata = {
  title: 'Our Services | SterFlies',
  description: 'Explore our construction, land photography, and marketing content services.',
}

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-center text-4xl font-bold mb-6">Our Services</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(service => (
          <div
            key={service.slug}
            className="flex flex-col items-center p-6 bg-white border rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <service.Icon className="w-10 h-10 text-blue-700 mb-4" aria-hidden="true" />
            <h2 className="text-center text-2xl font-semibold mb-4 text-blue-700">
              {service.title}
            </h2>
            <Link
              href={`/services/${service.slug}`}
              className="mt-auto inline-block px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <hr className="my-12 border-t border-gray-300" />

      <ProcessFlow />
    {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SignUpForm />
          </div>
        </div>
      </section>
    </main>
  )
}
