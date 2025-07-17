// components/VacantLandDeliverables.tsx
import React from 'react'
import {
  FilmIcon,
  CameraIcon,
  MapIcon,
  FileTextIcon,
  DatabaseIcon,
  BoxIcon,
  MoreHorizontalIcon
} from 'lucide-react'

const deliverables = [
  { name: 'MP4 Video', Icon: FilmIcon },
  { name: 'JPEG Images', Icon: CameraIcon },
  { name: 'GeoTIFF Maps', Icon: MapIcon },
  { name: 'PDF Reports', Icon: FileTextIcon },
  { name: '.LAS Point Clouds', Icon: DatabaseIcon },
  { name: '.OBJ 3D Models', Icon: BoxIcon },
  { name: 'And More...', Icon: MoreHorizontalIcon, highlight: true}
]

export default function VacantLandPage() {
  return (
    <section className="mt-16">
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-blue-900">TYPES OF</span>{' '}
          <span className="text-blue-300">DELIVERABLES</span>
        </h2>
        <div className="mt-8 w-full grid grid-flow-col auto-cols-fr gap-px bg-gray-200">
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