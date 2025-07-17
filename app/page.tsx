/* eslint-disable @next/next/no-img-element */
// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
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
            A Higher Perspective on Every Project
          </h1>
          <h2 className="mt-2 text-2xl text-gray-200">
            San Antonio&apos;s Premier Thermal &amp; Aerial Media Provider
          </h2>
          <Link href="/contact" passHref>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
              Call Us Today!
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
          <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
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
          </h1>

          <p className="max-w-prose mx-auto text-lg md:text-xl font-medium text-black-800 leading-relaxed mb-8">
            We capture high-resolution aerial imagery, thermal insights, and
            dynamic FPV fly-throughs to help you streamline projects, capture data, and tell your story from a whole new angle.
          </p>

          <Link href="/contact" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md shadow hover:bg-orange-600">
            Let’s Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
