// components/ProcessFlow.tsx
import React from "react"
import {
  MapPinIcon,
  FileTextIcon,
  CalendarIcon,
  CrosshairIcon,
  DatabaseIcon,
} from "lucide-react"

interface Step {
  id: number
  title: string
  description: string
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const steps: Step[] = [
  {
    id: 1,
    title: "Define Project Scope",
    description: "We discuss location, deliverables, and project goals.",
    Icon: MapPinIcon,
  },
  {
    id: 2,
    title: "Receive Proposal",
    description: "You get a detailed plan with timeline and costs.",
    Icon: FileTextIcon,
  },
  {
    id: 3,
    title: "Schedule Mission",
    description: "Select your preferred date and confirm the site prep.",
    Icon: CalendarIcon,
  },
  {
    id: 4,
    title: "Execute Mission",
    description: "Our pilot captures high-quality data on the fly.",
    Icon: CrosshairIcon,
  },
  {
    id: 5,
    title: "Deliver & Analyze",
    description: "Receive actionable deliverables in your format.",
    Icon: DatabaseIcon,
  },
]

export default function ProcessFlow() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-blue-900">Our Process</h2>

        {/* 
          Mobile: stack
          Desktop: ALWAYS one row, 5 columns, auto-shrinks to fit any screen width
        */}
        <div className="mt-12 relative">
          {/* dashed connector line behind cards (desktop only) */}
          <div className="hidden lg:block absolute left-0 right-0 top-[44px] border-t-2 border-dashed border-gray-300" />

          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.id}
                className="
                  relative min-w-0
                  bg-gray-50 border border-blue-900 rounded-lg
                  p-6 text-center
                "
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-semibold">
                    {step.id}
                  </div>
                </div>

                <step.Icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                <h3 className="font-semibold text-lg text-blue-800 mb-1 break-words">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 break-words">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

