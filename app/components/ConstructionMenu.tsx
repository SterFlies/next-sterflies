// components/ConstructionMenu.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ClockIcon,
  MapIcon,
  BoxIcon,
  TrendingUpIcon,
  FileTextIcon,
} from 'lucide-react'

// menu configuration
const menuItems = [
  { id: 'progress', title: 'Progress Monitoring', Icon: ClockIcon },
  { id: 'survey', title: 'Surveying & Mapping', Icon: MapIcon },
  { id: 'photogrammetry', title: 'Photogrammetry', Icon: BoxIcon },
  { id: 'stockpile', title: 'Stockpile Reports', Icon: TrendingUpIcon },
  { id: 'cutfill', title: 'Cut & Fill Reports', Icon: FileTextIcon },
]

export default function ConstructionMenu() {
  const [active, setActive] = useState(menuItems[0].id)

  return (
    <>
      {/* Interactive menu buttons */}
      <div className="overflow-x-auto mb-12">
        <ul className="flex space-x-4">
          {menuItems.map(item => (
            <li key={item.id} className="flex-shrink-0">
              <button
                onClick={() => setActive(item.id)}
                className={`px-6 py-4 rounded-lg flex flex-col items-center justify-center transition-shadow ${
                  active === item.id
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-800 hover:shadow-md'
                }`}
              >
                <item.Icon className="w-6 h-6 mb-2" aria-hidden="true" />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic content panels */}
      <div className="bg-white p-8 rounded-lg shadow mb-16">
        {menuItems.map(item => (
          active === item.id && (
            <section key={item.id}>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {item.title}
              </h2>
              <p className="text-black mb-6">
                {item.id === 'progress' && (
                  'We capture high-resolution aerial imagery at scheduled intervals using our drones like the DJI Matrice 4 series, collecting orthophotos and time-lapse videos to accurately track site progress and build a visual timeline for stakeholder updates.'
                )}
                {item.id === 'survey' && (
                  'Our team flies systematic grid-pattern missions to gather geotagged photographs, then processes them into precise orthomosaics and georeferenced point clouds, providing detailed mapping data for planning and analysis.'
                )}
                {item.id === 'photogrammetry' && (
                  'Using overlapping aerial images, we reconstruct detailed 3D point clouds and textured meshes in Pix4Dmapper, enabling accurate volumetric measurements and realistic visualizations of your site.'
                )}
                {item.id === 'stockpile' && (
                  'Focused overflights of stockpile areas capture high-overlap photos which we process to compute precise volumes and generate clear stockpile reports, helping you manage inventory and reconcile materials.'
                )}
                {item.id === 'cutfill' && (
                  'By comparing digital surface models from different flight dates, we calculate cut and fill volumes, producing contour maps and detailed reports to optimize earthmoving operations and budget planning.'
                )}
              </p>
            <div className="text-center">
                <Link href="/contact">
                    <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition mx-auto">
                    Request a Quote
                    </button>
                </Link>
            </div>
            </section>
          )
        ))}
      </div>
    </>
  )
}
