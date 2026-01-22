// components/ForensicMenu.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  BoxIcon,
  MapIcon,
  ThermometerIcon,
  ProportionsIcon,
  CameraIcon,
} from 'lucide-react'

// menu config

type menuItems = {
  id: string
  title: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  media: {
    type: 'image' | 'video'
    src: string
    poster?: string 
  }
}

const menuItems = [
  {
    id: '3Dimaging',
    title: '3D Imaging',
    Icon: BoxIcon,
    media: {
      type: 'image',
      src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg',
    },
  },
  {
    id: 'VirtualTouring',
    title: 'Virtual Touring',
    Icon: MapIcon,
    media: {
      type: 'image',
      src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769105926/Screenshot_2026-01-22_121829_htkuyc.png',
    },
  },
  {
    id: 'thermalimaging',
    title: 'Thermal Imaging',
    Icon: ThermometerIcon,
    media: {
      type: 'image',
      src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104187/FLIR0101_vq7irp.jpg',
    },
  },
  {
    id: 'annotations',
    title: 'Annotations',
    Icon: CameraIcon,
    media: {
      type: 'image',
      src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767905302/Screenshot_2026-01-08_144800_qrzymb.png',
    },
  },
  {
    id: 'floorplans',
    title: 'Floor Plans',
    Icon: ProportionsIcon,
    media: {
      type: 'image',
      src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1769104726/Matterport_FloorplanSample_FLOOR2_aflqkk.png',
    },
  },
]


export default function ForensicMenu() {
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
                src={item.media.src}
                alt={`${item.title} example`}
                className="w-full max-w-2xl mx-auto mb-6 rounded-lg shadow"
              />
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {item.title}
              </h2>
              <p className="text-black mb-6">
                {item.id === '3Dimaging' && (
                  'We capture high-resolution aerial & ground imagery to create detailed 3D models of sites. These models allow for immersive virtual exploration and accurate measurements.'
                )}
                {item.id === 'VirtualTouring' && (
                  'We create navigable virtual tours from 3D site data. These allow professionals & stakeholders to view, reference, and revisit sites remotely, preserving conditions and context.'
                )}
                {item.id === 'thermalimaging' && (
                  'We incorporate thermal imaging into our site documentation to identify temperature variations, moisture intrusion, and hidden issues that may not be visible in standard imagery.'
                )}
                {item.id === 'annotations' && (
                  'We generate annotated site documentation, allowing users to add notes, measurements, and observations directly onto the visual records for enhanced clarity and communication.'
                )}
                {item.id === 'floorplans' && (
                  'We produce measured floor plans from 3D site models, providing accurate spatial layouts for planning and documentation.'
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