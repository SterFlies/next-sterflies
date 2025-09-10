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
  title: "Professional Drone & Thermal Imaging Services in San Antonio | SterFlies",
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
 

  // Local SEO
  "San Antonio drone services",
  "Texas drone inspections",
  "San Antonio thermal imaging",
  
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
    { title: "Project Documentation", Icon: Camera },
    { title: "Site-Reconsctruction", Icon: LandPlot },
    { title: "Thermal Inspections", Icon: Radiation },
  ];

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
            Aerial & Thermal Drone Services
          </h1>
          <h2 className="mt-2 text-2xl text-black">
            from inspections to progress tracking to marketing visuals, we make your project clear.
          </h2>
          <Link href="/contact" passHref>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
              Schedule a Call!
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
            Reliable aerial data and imagery that help you spot issues early, showcase your work, and keep projects moving forward.
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
          With precision drone scanning, we capture every detail—providing maps, 3D models, and volume calculations that help you plan smarter and reduce costly mistakes.
        </p>
        <Link href="/blog" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
            Read more!
          </Link>
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
