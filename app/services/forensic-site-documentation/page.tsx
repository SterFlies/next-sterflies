// app/services/vacant-land-photography/page.tsx
import React from 'react'
import VacantLandDeliverables from '@/app/components/DeliverablesGrid/VacantLandDeliverables'
import {
  CameraIcon,
  MapIcon,
  BoxIcon,
  FileTextIcon,
  EyeIcon,
  ShieldIcon,
  TargetIcon,
  ZapIcon,
  Layers2Icon
} from 'lucide-react'
import ForensicMenu from '@/app/components/ForensicMenu';

export const metadata = {
  title: 'Forensic Site Documentation | SterFlies',
  description: 'High-accuracy 3D site documentation using aerial and ground-based reality capture to preserve conditions, timelines, and visual records for investigations, disputes, and project analysis.',
}

// Assets
  const CLOUDINARY_Forensic_MP4 =
  "https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/IAQ_-_DEMO_showcase_qo4nav.mp4";

  const CLOUDINARY_Forensic_POSTER =
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png";

  // AspectBox with mobile-only height boost + optional mobile bleed
function AspectBox({
  aspect = "16/9",
  mobileTall = false,   // 4:3 on phones (taller), unchanged on sm+
  bleedMobile = false,  // edge-to-edge on phones, normal on sm+
  children,
}: {
  aspect?: "16/9" | "4/3" | "1/1" | "21/9" | "3/2";
  mobileTall?: boolean;
  bleedMobile?: boolean;
  children: React.ReactNode;
}) {
  const desktop =
    aspect === "4/3" ? "sm:aspect-[4/3]" :
    aspect === "1/1" ? "sm:aspect-square" :
    aspect === "21/9" ? "sm:aspect-[21/9]" :
    aspect === "3/2" ? "sm:aspect-[3/2]" :
    "sm:aspect-[16/9]";

  const mobile = mobileTall ? "aspect-[4/3]" : "aspect-[16/9]";
  const bleed = bleedMobile ? "-mx-4 sm:mx-0" : "";

  return (
    <div className={`${bleed} relative w-full ${mobile} ${desktop} rounded-2xl overflow-hidden bg-black`}>
      {children}
    </div>
  );
}

function SectionCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-white rounded-2xl border p-6 md:p-8 space-y-4 md:space-y-5">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
      <div className="text-[17px] md:text-lg leading-relaxed text-gray-800 space-y-4">{children}</div>
    </section>
  );
}

export default function VacantLandPage() {
  // "What We Offer" features
  const features = [
    { title: 'High-Res Photos & or Videos', desc: 'High-Res photos to capture specifics', icon: CameraIcon },
    { title: 'Thermal Imaging', desc: 'Infrared (IR) scanning included if needed.', icon: MapIcon },
    { title: '3D Site Models', desc: 'Interior & Exterior 3D scanning for full visual context.', icon: BoxIcon },
    { title: 'Detailed Reports', desc: 'Structured reports including measurements, annotations, and visual references for documentation and review.', icon: FileTextIcon },
    { title: 'Virtual Tours', desc: 'Ground-level 3D walkthroughs that allow remote review of interior and exterior site conditions with annotations.', icon: EyeIcon },
    { title: 'Custom Services', icon:Layers2Icon}
  ]


  // "Why Choose SterFlies?" benefits
  const benefits = [
    { title: 'Context-Aware Documentation', desc: 'Documentation informed by site layout, access constraints, and physical conditions to ensure clarity and consistency.', icon: ShieldIcon },
    { title: 'Pinpoint Accuracy', desc: 'LiDar and RTK-enabled positioning used to improve spatial consistency and measurement reliability.', icon: TargetIcon },
    { title: 'Quick Turnaround', desc: 'Efficient turnaround times based on project scope and documentation requirements.', icon: ZapIcon },
    { title: 'Full Support', desc: 'End-to-end coordination and technical support throughout the documentation process.', icon: EyeIcon },
  ]

  return (
    <main className="bg-green-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-10 rounded-xl shadow-xl text-white text-center mb-16">
          <h1 className="text-5xl font-bold">Forensic Site Documentation</h1>
          <p className="mt-4 text-lg">
           From active construction sites to post-incident locations, our forensic site documentation services preserve site conditions exactly as they exist at a specific point in time.

           Using aerial and ground-based capture, we create accurate visual and spatial records that support investigation, verification, and dispute review. Whether documenting progress, existing conditions, or physical evidence, our deliverables provide a clear, reviewable record that remains usable long after conditions change.
          </p>
        </div>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f => (
              <div key={f.title} className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition flex flex-col items-center text-center">
                <f.icon className="w-12 h-12 text-green-500 mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cloudinary Video loop - example */}
        <div className="mb-16">
          <SectionCard id="exterior-interior" title="Exterior Model and Interior Walkthrough Example">
            <p> Example of an exterior-to-interior site capture used during an indoor air quality assessment (IAQ). 
              This walkthrough preserves spatial context, room relationships, and observed conditions at the time of inspection,
               creating a reviewable visual record that supports analysis and reporting.</p>
            <AspectBox>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={CLOUDINARY_Forensic_POSTER}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={CLOUDINARY_Forensic_MP4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectBox>
          </SectionCard>
        </div>

        {/* ForensicMenu component */}
        <ForensicMenu />

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
            <VacantLandDeliverables />
        </section>
      </div>
    </main>
  )
}
