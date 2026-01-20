/* eslint-disable @next/next/no-img-element */
// app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, LandPlot, Radiation } from "lucide-react";
import HowItWorks from './components/HowItWorks';
import TexasCoverage from "./components/TexasCoverage";
import SignUpForm from "./components/SignUpForm";

export const metadata = {
  title: "3D Forensic Site Documentation & Aerial Data Capture | SterFlies",
  description:
    "SterFlies provides expert drone photography and thermal imaging solutions in San Antonio.",
  keywords: [
  // Core services
  "drone site scanning",
  "drone thermal inspections",
  "construction site drone mapping",
  "photogrammetry drone services",
  "3D site documentation",
  "orthomosaic mapping",
  "volumetric drone surveys",
  "aerial drone photography",
  "thermal imaging drone services",
  "3D site modeling",
  "2D site mapping",
  "drone data analysis",
  "drone site monitoring",
  "drone topographic surveys",
  "drone stockpile measurements",
  "aerial site documentation",
  "drone land surveys",
  "forensic site documentation",
  "forensic site mapping",
  "forensic site imaging",
  "forensic site reconstruction",
  "forensic site analysis",
  "forensic site modeling",
  "forensic site data collection",

  // Industry-specific
  "solar panel thermal inspection Texas",
  "construction progress drone scans",
  "insurance and legal site documentation",
  "real estate 3D virtual tours",
  "roof thermal drone inspection",
  "agricultural drone surveys Texas",
  "land development drone mapping",
  "environmental monitoring drones",
  "infrastructure inspection drones",
  "forensic site documentation drones",
  "environmental safety site surveys",
  "3D forensic reconstruction Texas",
  "3D forensic site modeling",
  "3D forensic site mapping",
  "2D forensic site documentation",
  "forensic site data capture Texas",
  "forensic site imaging services",
  "forensic site analysis Texas",
  "forensic site reconstruction services",
  "forensic site modeling Texas",
  "forensic site documentation services",
  "forensic site data collection services",
  "forensic site surveys Texas",
  "forensic site monitoring services",
  "forensic site mapping services",
  "forensic site imaging Texas",
  "forensic site reconstruction Texas",
  "forensic site analysis services",
  "forensic site modeling services",
  "forensic site documentation Texas",
  "forensic site data collection Texas",
  "forensic site surveys services",
  "forensic site monitoring Texas",
  "forensic site mapping Texas",
  "forensic site imaging services Texas",
  "forensic site reconstruction services Texas",
  "forensic site analysis Texas",
  "forensic site modeling Texas",
  "forensic site documentation services Texas",
  "forensic site data collection services Texas",
  "forensic site surveys Texas services",
  "forensic site monitoring services Texas",
  "forensic site mapping services Texas",
  "forensic site imaging Texas services",
  "forensic site reconstruction Texas services",
  "forensic site analysis services Texas",
  "forensic site modeling services Texas",
 

  // Local SEO
  "San Antonio drone services",
  "Texas drone inspections",
  "San Antonio thermal imaging",
  "San Antonio aerial photography",
  "Texas construction drone surveys",
  "San Antonio site documentation",
  "drone services near me San Antonio",
  "drone mapping Texas",
  "drone inspection services San Antonio",
  "thermal drone services Texas",
  "drone surveying San Antonio",
  "aerial site surveys Texas",
  "drone imaging services San Antonio",
  "drone data collection Texas",
  "drone site analysis San Antonio",
  "drone project documentation Texas",
  "drone site monitoring San Antonio",
  "drone topographic mapping Texas",
  "drone stockpile measurement San Antonio",
  "drone volumetric analysis Texas",
  "drone land surveying San Antonio",
  "San Antonio 3D forensic documentation",
  "Texas forensic site surveys",
  "San Antonio forensic site mapping",
  "Texas forensic site imaging",
  "San Antonio forensic site reconstruction",
  "Texas forensic site analysis",
  "San Antonio forensic site modeling",
  "Texas forensic site documentation",
  "San Antonio forensic site data collection",
  "drone services San Antonio",
  "drone services Texas",
  "aerial drone services San Antonio",
  "aerial drone services Texas",
  "3D forensic mold documentation San Antonio",
  "3D forensic mold documentation Texas",
  "forensic site drone services San Antonio",
  "forensic site drone services Texas",
  "3D forensic asbestos documentation San Antonio",
  "3D forensic asbestos documentation Texas",
  "3D forensic fire damage documentation San Antonio",
  "3D forensic fire damage documentation Texas",
  "3D forensic accident site documentation San Antonio",
  "3D forensic accident site documentation Texas",
  "3D forensic environmental site documentation San Antonio",
  "3D forensic environmental site documentation Texas",
  "3D forensic crime scene documentation San Antonio",
  "3D forensic crime scene documentation Texas",
  "3D forensic structural damage documentation San Antonio",
  "3D forensic structural damage documentation Texas",
  "3D forensic industrial site documentation San Antonio",
  "3D forensic industrial site documentation Texas",
  
  // Brand
  "SterFlies",
],
  openGraph: {
    title: "SterFlies | Aerial-to-Ground Site Solutions",
    description: "Elevate your project with aerial visuals and thermal insights from SterFlies.",
    url: "https://sterflies.com",
    siteName: "SterFlies",
    images: [
      {
        url: "https://sterflies.com/website-sample-photo.JPG",
        width: 1200,
        height: 630,
        alt: "SterFlies drone in action",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  const industries = [
    { title: "Forensic Site Documentation", Icon: Camera },
    { title: "Site-Reconsctruction", Icon: LandPlot },
    { title: "Thermal Inspections", Icon: Radiation },
  ];

  // Cloudinary video loop URL)
  const CLOUDINARY_SITE_WALKTHROUGH_LOOP =
    "https://res.cloudinary.com/dzlmoyomq/video/upload/v1767667626/IAQ_-_DEMO_showcase_qo4nav.mp4";


  return (
    <>
      {/* Hero Section with drone animation */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-sky-300 to-sky-500">
        {/* Clouds (make sure your globals.css or a module defines .cloud, .cloud1, etc.) */}
        <div className="absolute inset-0">
          <div className="cloud cloud1" />
          <div className="cloud cloud2" />
          <div className="cloud cloud3" />
          <div className="cloud cloud4" />
          <div className="cloud cloud5" />
        </div>

        {/* Flying Drone */}
        <img
          src="/Drone picture (1).png"
          alt="Flying Drone"
          className="absolute top-[20%] left-0 w-[100px]"
          style={{ animation: "fly 20s linear infinite", zIndex: 10 }}
        />

        {/* Hero text & CTA */}
        <div className="relative z-20 bg-transparent border-4 border-blue-900/70 backdrop-blur-md p-8 rounded text-center shadow-[0_0_4px_rgba(96,165,250,0.8),0_0_8px_rgba(96,165,250,0.6),0_0_16px_rgba(96,165,250,0.4)]">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Professional Aerial & Ground-Based Site Documentation
          </h1>
          <h2 className="mt-2 text-2xl text-black">
            We capture real-world sites in accurate 2D and 3D for documentation, review, and record-keeping
          </h2>
          <Link href="/contact" passHref>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
              Schedule a Consultation!
            </button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-8 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side: sample photo */}
        <div className="lg:w-1/2">
          <Image
            src="/website-sample-photo.JPG"
            alt="SterFlies drone in action"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: Mission & “Elevate” slogan */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
            {"Elevate".split("").map((char, i) => (
              <span
                key={i}
                className="shine-letter inline-block"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
            <br />
            <span className="text-orange-500">your vision with SterFlies</span>
          </h2>

          <p className="max-w-prose mx-auto text-lg md:text-xl font-medium text-black-800 leading-relaxed mb-8">
            Reliable aerial and ground data and imagery for clear, accurate site documentation.
          </p>

          <Link href="/services" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
            Let’s Get Started
          </Link>
        </div>
      </section>

      {/* Data Left side photo */}
       <section className="flex flex-col-reverse lg:flex-row items-center gap-8 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side: sample photo */}
        <div className="lg:w-1/2">
          <Image
            src="/pointclouds-camerapoints.png"
            alt="point clouds and camera positions from a drone survey"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        


        {/* Data Capture */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
            {"Data Captured".split("").map((char, i) => (
              <span
                key={i}
                className={`shine-letter inline-block ${char === " " ? "w-3" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
          <br />
          <span className="text-orange-500">for Your Current Project</span>
        </h2>

        <p className="max-w-prose mx-auto text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8">
         Aerial and ground-based scanning using drones and 3D capture to document sites in accurate 2D and 3D.
        </p>
        <Link href="/blog" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
            Read more!
          </Link>
      </div>
     </section>

     {/* Data Left side photo */}
       <section className="flex flex-col-reverse lg:flex-row items-center gap-8 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side: sample photo */}
        <div className="lg:w-1/2">
          <Image
            src="/3D-website-data.png"
            alt="3D model generated from drone data"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 3D Models */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
            {"Site Conditions".split("").map((char, i) => (
              <span
                key={i}
                className={`shine-letter inline-block ${char === " " ? "w-3" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
          <br />
          <span className="text-orange-500">Captured as Measurable 3D Data</span>
        </h2>

        <p className="max-w-prose mx-auto text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8">
         We capture sites as structured 3D data rather than simple imagery, producing accurate visual records that can be measured, revisited, and referenced long after site conditions change.
        </p>
        <Link href="/blog" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
            Read more!
          </Link>
      </div>
     </section>

     {/* NEW SECTION: Cloudinary Video Loop for Interior + Exterior Context */}
      <section className="flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left side: video loop */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <video
              className="w-full h-auto rounded-lg"
              src={CLOUDINARY_SITE_WALKTHROUGH_LOOP}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* Right side: copy + CTA */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
            {"Full Site Context".split("").map((char, i) => (
              <span
                key={i}
                className={`shine-letter inline-block ${char === " " ? "w-3" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
            <br />
            <span className="text-orange-500">Interior and Exterior Connected</span>
          </h2>

          <p className="max-w-prose mx-auto text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8">
            We document sites as one navigable spatial record, combining exterior aerial capture with interior 3D scanning to preserve full context across spaces, structures, and conditions.
          </p>

          <Link
            href="/projects/iaq-mold-documentation"
            className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600"
          >
            See How It Works
          </Link>
        </div>
      </section>

     {/* YouTube Embedded Video - Homepage */}
     <section className="mb-12">
  <div className="w-full px-6 flex flex-col items-center">
    <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">
      Watch This Short Infomercial
    </h3>

    <div className="w-full max-w-3xl">
      <div className="relative aspect-video max-h-[360px] overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/-FxpLibvKiM?si=xIhyd42UPvfZCo7v"
          title="SterFlies Infomercial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>


      <TexasCoverage />

      {/* Specialty */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Proudly Specializing In
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map(({ title, Icon }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-8 shadow hover:shadow-lg transition flex flex-col items-center text-center"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              </div>
            ))}
          </div>
        </div>
        <HowItWorks/>
      </section>
      {/* My Newsleter*/}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SignUpForm />
          </div>
        </div>
      </section>
    </>
  );
}
