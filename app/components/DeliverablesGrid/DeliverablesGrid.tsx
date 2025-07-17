import React from 'react'

import {
  CameraIcon,
  FileTextIcon,
  BarChart2Icon,
  TrendingUpIcon,
  LayersIcon,
  CloudIcon,
  MapIcon,
  RulerIcon,
  TriangleIcon,
  SquareIcon,
  MoreHorizontalIcon,
  Box
} from 'lucide-react'


interface Deliverable {
  name: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  highlight?: boolean
}

const deliverables: Deliverable[] = [
  { name: 'Photos & Videos', Icon: CameraIcon },
  { name: 'Progress Reports', Icon: FileTextIcon },
  { name: 'Volumetric & Stockpile Reports', Icon: BarChart2Icon },
  { name: 'Cut/Fill Reports', Icon: TrendingUpIcon },
  { name: 'DTM & DSM Models', Icon: LayersIcon },
  { name: '.LAS Point Clouds', Icon: CloudIcon },
  { name: 'GeoTIFF Maps', Icon: MapIcon },
  { name: 'Planimetrics & Linework', Icon: RulerIcon },
  { name: '.TIN Surfaces', Icon: TriangleIcon },
  { name: '.OBJ 3D Models', Icon: Box },
  { name: '.DWG Contours', Icon: SquareIcon },
  { name: 'And More...', Icon: MoreHorizontalIcon, highlight: true}
]

 export default function DeliverablesGrid() {
  return (
    <section className="mt-16">
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-blue-900">TYPES OF</span>{' '}
          <span className="text-blue-300">DELIVERABLES</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-px bg-gray-200">
          {deliverables.map(({ name, Icon, highlight }) => (
            <div
              key={name}
              className={`p-6 flex flex-col items-center text-center bg-white ${
                highlight ? 'bg-yellow-500 text-white' : ''
              }`}
            >
              <Icon className="w-12 h-12 mb-3" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 