// components/MarketingDeliverables.tsx
import React from 'react'
import {
  CameraIcon,
  VideoIcon,
  TrendingUpIcon,
  GiftIcon,
  Globe2Icon,
  MoreHorizontalIcon,
  Clapperboard,
  StarIcon
} from 'lucide-react'

interface Deliverable {
  name: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  highlight?: boolean
}

const marketingDeliverables: Deliverable[] = [
  { name: 'JPEG/RAW Photos', Icon: CameraIcon },
  { name: 'FPV Fly‑throughs', Icon: TrendingUpIcon },
  { name: 'MP4 Raw Footage', Icon: VideoIcon },
  { name: 'Short-form video Production', Icon: Clapperboard},
  { name: 'Branding Videos', Icon: GiftIcon },
  { name: 'Tourism & Hospitality Promos', Icon: Globe2Icon },
  { name: 'Final Post-Production Product', Icon: StarIcon},
  { name: 'And More…', Icon: MoreHorizontalIcon, highlight: true },
]

export default function MarketingDeliverables() {
  return (
    <section className="mt-16">
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-extrabold">
          <span className="text-blue-900">TYPES OF</span>{' '}
          <span className="text-blue-300">DELIVERABLES</span>
        </h2>

        {/* here’s the magic for equal columns: */}
        <div className="mt-8 w-full grid grid-flow-col auto-cols-fr gap-px bg-gray-200">
          {marketingDeliverables.map(({ name, Icon, highlight }) => (
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