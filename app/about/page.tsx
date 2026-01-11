import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About SterFlies | Aerial & Thermal Drone Services",
  description: "Learn about Jerome Sterling and the mission of SterFlies: delivering precision aerial imagery, thermal inspections, and cinematic FPV fly-overs across San Antonio and the Hill Country.",
  keywords: ["about SterFlies","drone services","thermal imaging","FPV","San Antonio drone"],
  openGraph: {
    title: "About SterFlies | Aerial & Thermal Drone Services",
    description: "Discover Jerome Sterling's expertise and SterFlies' mission to empower clients with actionable drone-based insights and stunning visuals.",
    url: "https://sterflies.com/about",
    siteName: "SterFlies",
    images: [
      {
        url: "https://sterflies.com/headshot.png",
        width: 1200,
        height: 630,
        alt: "Jerome Sterling, Chief Pilot at SterFlies",
      },
    ],
    type: "website",
  },
};

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Are you insured?',
    answer: 'At SterFlies, we hold the FAA Part 107 Remote Pilot Certificate and carry $2M in general liability insurance for your peace of mind, and will show proof upon client request.',
  },
  {
    question: 'What service areas do you cover?',
    answer: 'We operate throughout San Antonio and the Greater Texas Hill Country. Contact us for custom coverage needs.',
  },
  {
    question: 'How long is the turnaround time?',
    answer: 'Standard delivery for deliverables is within 5 business days after the flight. Rush orders can be accommodated on request.',
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Banner */}
      <div className="flex justify-center">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md inline-block">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
            When Data Takes Flight, Insights Land in Sight
          </h1>
        </div>
      </div>

      {/* Profile + Drone Overlay Section */}
      <section className="relative mb-16">
        <Image
          src="/drone-pic.png"
          alt="Drone behind profile"
          width={192}
          height={192}
          className="pointer-events-none absolute top-[60%] left-3 transform translate-y-20 w-80 opacity-100 z-0"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-48 h-100 mb-8 md:mb-0 md:mr-12 mx-auto">
            <Image
              src="/headshot.png"
              alt="Jerome Sterling"
              width={192}
              height={192}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="max-w-2xl text-black text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Jerome Sterling</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-4">
              Jerome Sterling is the founder of SterFlies, specializing in forensic 3D site documentation 
              and reality capture. With experience working alongside industrial hygienists and forensic experts, 
              he focuses on accurately preserving site conditions through repeatable, high-fidelity visual documentation.
            </p>
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Jerome’s work supports professionals who require objective visual records for analysis, 
              reporting, and dispute resolution. By combining precise capture methods with disciplined workflows, 
              SterFlies delivers reliable documentation designed to stand up to professional review.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-sky-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg font-medium leading-relaxed mb-6">
         SterFlies provides high-accuracy forensic site documentation through aerial and ground-level reality capture. 
         Our mission is to preserve site conditions, spatial context, and timelines with objective, 
         repeatable visual records that support investigations, analysis, and dispute resolution.
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Thermal inspections for energy efficiency and preventative maintenance</li>
          <li>High-resolution aerial photography & videography</li>
          <li>Visual context for expert reports and claims</li>
          <li>Forensic 3D site documentation and reality capture</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Link href="/contact">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
            Get in Touch
          </button>
        </Link>
      </div>

      {/* FAQ Banner Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border rounded-lg p-4 shadow-sm">
                <summary className="cursor-pointer font-medium text-lg text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

