// components/ProcessFlow.tsx
import React from 'react'
import {
  MapPinIcon,
  FileTextIcon,
  CalendarIcon,
  CrosshairIcon,
  DatabaseIcon,
  ArrowRightIcon,
} from 'lucide-react'

interface Step {
  id: number
  title: string
  description: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Define Project Scope',
    description: 'We discuss location, deliverables, and project goals.',
    Icon: MapPinIcon,
  },
  {
    id: 2,
    title: 'Receive Proposal',
    description: 'You get a detailed plan with timeline and costs.',
    Icon: FileTextIcon,
  },
  {
    id: 3,
    title: 'Schedule Flight',
    description: 'Select your preferred date and confirm the site prep.',
    Icon: CalendarIcon,
  },
  {
    id: 4,
    title: 'Execute Mission',
    description: 'Our pilot captures high-quality data on the fly.',
    Icon: CrosshairIcon,
  },
  {
    id: 5,
    title: 'Deliver & Analyze',
    description: 'Receive actionable deliverables in your format.',
    Icon: DatabaseIcon,
  },
]

export default function ProcessFlow() {
  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-3xl font-bold text-blue-900">Our Process</h2>
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center lg:space-x-6 space-y-6 lg:space-y-0 px-4">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <div className="relative flex-shrink-0 w-64 bg-gray-50 border border-blue-900 rounded-lg p-6 text-center">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-semibold">
                  {step.id}
                </div>
              </div>
              <step.Icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
              <h3 className="font-semibold text-lg text-blue-800 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex flex-grow h-px bg-gray-300">
                <div className="relative top-1/2 w-full">
                  <div className="border-t-2 border-dashed border-gray-400 w-full"></div>
                   <ArrowRightIcon className="hidden lg:block w-6 h-6 text-gray-400 mx-4" aria-hidden="true" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
