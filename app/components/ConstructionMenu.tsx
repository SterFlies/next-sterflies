// components/ConstructionMenu.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ClockIcon,
  MapIcon,
  RulerIcon,
  FileTextIcon,
  CameraIcon,
} from 'lucide-react'

// menu configuration
const menuItems = [
  {
    id: 'progress',
    title: 'Progress Monitoring',
    Icon: ClockIcon,
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768942786/week-to-week-ortho_jephtz.jpg',
  },
  {
    id: 'mapping',
    title: 'Site Mapping',
    Icon: MapIcon,
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768943315/Screenshot_2026-01-20_150808_wnmf26.png',
  },
  {
    id: 'video&photography',
    title: 'Aerial Video & Photos',
    Icon: CameraIcon,
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769102135/DJI_20250831081054_0001_V_uxuneh.jpg',
  },
  {
    id: 'measurements',
    title: 'Area & Distance Measurements',
    Icon: RulerIcon,
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768943757/Screenshot_2026-01-20_151530_obdglx.png',
  },
  {
    id: 'cutfill',
    title: 'Cut & Fill Reports',
    Icon: FileTextIcon,
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768928902/Screenshot_2026-01-20_110713_in25xr.png',
  },
]


export default function ConstructionMenu() {
  const [active, setActive] = useState(menuItems[0].id)

  return (
    <>
      {/* Interactive menu buttons */}
      <div className="overflow-x-auto mb-12">
        <ul className="flex justify-center space-x-4">
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
              <img
                src={item.image}
                alt={`${item.title} example`}
                className="w-full max-w-2xl mx-auto mb-6 rounded-lg shadow"
              />
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {item.title}
              </h2>
              <p className="text-black mb-6">
                {item.id === 'progress' && (
                  'We capture high-resolution aerial imagery at scheduled intervals to document site progress over time. Using consistent flight paths, we produce orthomosaics and time-lapse visuals that create a clear, chronological record for progress updates reporting, and stakeholder communication'
                )}
                {item.id === 'mapping' && (
                  'We produce accurate site maps that document layout, access paths, and surface features across large areas. These maps provide spatial context that supports planning, coordination, and reference throughout a project.'
                )}
                {item.id === 'video&photography' && (
                  'We also include high resolution aerial photography and video footage to complement our mapping services. These visuals offer additional perspectives that enhance site understanding and communication.'
                )}
                {item.id === 'measurements' && (
                  'We generate reliable area and distance measurements directly from spatial site data. These measurements help teams understand dimensions, clearances, and coverage without needing to interpret raw imagery.'
                )}
                {item.id === 'cutfill' && (
                  'We analyze surface changes between capture dates to quantify material added or removed across a site. These reports provide clear volume comparisons and visual context to support earthwork planning and progress verification.'
                )}
              </p>
            <div className="text-center">
                <Link href="/contact">
                    <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition mx-auto">
                    Schedule Mission
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
