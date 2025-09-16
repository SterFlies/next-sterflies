'use client';

import React from 'react';
import Image, { ImageLoaderProps } from 'next/image';

/** Cloudinary config */
const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your_cloud_name';

/** Next.js <Image> loader for Cloudinary
 * - If you pass a full Cloudinary URL, we inject consistent transforms so both images crop/scale the same.
 * - If you pass a non-Cloudinary URL, we pass it through untouched.
 * - If you pass a public ID (e.g., 'folder/asset'), we build a Cloudinary URL.
 */
const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const q = quality || 'auto';

  // Full Cloudinary URL? Inject consistent transforms after "/upload/"
  const isCloudinaryUrl = /^https?:\/\/res\.cloudinary\.com\/[^/]+\/(image|video)\/upload\/.*$/i.test(
    src
  );
  if (isCloudinaryUrl) {
    return src.replace(
      /(\/upload\/)(?!.*\/upload\/)/i,
      `$1f_auto,q_${q},c_fill,g_auto,w_${width}/`
    );
  }

  // Other full URL? Pass through.
  if (/^https?:\/\//i.test(src)) return src;

  // Public ID -> build URL
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_${q},c_fill,g_auto,w_${width}/${src}`;
};

/** Video URL helper
 * Accepts either a full URL or a Cloudinary public ID.
 */
const cldVideo = (publicId: string) => {
  if (/^https?:\/\//i.test(publicId)) return publicId;
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`;
};

/** 🔁 Your assets (URLs OR public IDs) */
const media = {
  heroVideo:
    'https://res.cloudinary.com/dzlmoyomq/video/upload/v1757964961/roofpv_adkqfe.mp4',
  mosaicRGB:
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757966482/heb-roofpv-ortho_ywek9f.jpg',
  mosaicThermal:
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757970946/HEB-RGB-ORTHO_xvcvyf.jpg',
  anomalyCloseups: [
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967249/Screenshot_2025-09-15_144716_tatheq.png',
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967248/Screenshot_2025-09-15_144518_y3rdko.png',
    'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976235/Screenshot_2025-09-15_174340_dxylfu.png',
  ],
  exampleHotspotPanels: [
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144810_adwvht.png',
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965898/Screenshot_2025-09-15_144751_dtuqyx.png',
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144800_pkvjwn.png',
],
exampleMultiDiodePanels: [
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144845_wn9eqo.png',
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976032/Screenshot_2025-09-15_174021_rsjae4.png',
],

exampleStringAnomalyPanels: [
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965884/Screenshot_2025-09-15_144948_cjf5j3.png',
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976235/Screenshot_2025-09-15_174340_dxylfu.png',
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976338/Screenshot_2025-09-15_174435_xx890o.png',
],
  /** Optional extras for the Severity 4 + ΔT section (replace with your Cloudinary assets) */
  multiDiodeAnnotated: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png',
  tempSpreadGraphic: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967074/Screenshot_2025-09-15_145057_bn0hpr.png',
  conclusionPlaceholder: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757974109/Screenshot_2025-09-15_170815_tqwdqq.png',
  extraThinTempPhoto: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1757974109/Screenshot_2025-09-15_170815_tqwdqq.png',
};

/** Overlay before/after slider (seamless wipe + easy drag) */
function CompareSlider({
  leftSrc,
  rightSrc,
  leftLabel = 'Left',
  rightLabel = 'Right',
  aspectWidth = 3,
  aspectHeight = 2,
}: {
  leftSrc: string;
  rightSrc: string;
  leftLabel?: string;
  rightLabel?: string;
  aspectWidth?: number;
  aspectHeight?: number;
}) {
  const [x, setX] = React.useState(50); // 0..100
  const draggingRef = React.useRef(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const updateByClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setX(Math.round((px / rect.width) * 100));
  };

  // window-level safety
  React.useEffect(() => {
    const up = () => (draggingRef.current = false);
    window.addEventListener('pointerup', up);
    return () => window.removeEventListener('pointerup', up);
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
        style={{ aspectRatio: `${aspectWidth} / ${aspectHeight}` }}
      >
        {/* BASE (LEFT) */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            loader={cloudinaryLoader}
            src={leftSrc}
            alt={leftLabel}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* TOP (RIGHT) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}
        >
          <Image
            loader={cloudinaryLoader}
            src={rightSrc}
            alt={rightLabel}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* INTERACTION LAYER (below handle) */}
        <div
          className="absolute inset-0 cursor-col-resize select-none touch-none z-10"
          onPointerDown={(e) => {
            draggingRef.current = true;
            (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
            updateByClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!draggingRef.current) return;
            updateByClientX(e.clientX);
          }}
          onPointerUp={(e) => {
            draggingRef.current = false;
            (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
          }}
          onPointerLeave={() => (draggingRef.current = false)}
        />

        {/* HANDLE (on top; can be grabbed directly) */}
        <div
          role="slider"
          aria-label="Comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={x}
          tabIndex={0}
          className="absolute top-0 bottom-0 z-20 focus:outline-none"
          style={{ left: `calc(${x}% - 1px)` }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setX((v) => Math.max(0, v - 2));
            if (e.key === 'ArrowRight') setX((v) => Math.min(100, v + 2));
          }}
          onPointerDown={(e) => {
            draggingRef.current = true;
            (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
            updateByClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (!draggingRef.current) return;
            updateByClientX(e.clientX);
          }}
          onPointerUp={(e) => {
            draggingRef.current = false;
            (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
          }}
        >
          {/* Divider line */}
          <div className="absolute inset-y-0 w-[2px] bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" />
          {/* Big pill button */}
          <button
            type="button"
            className="absolute top-1/2 -translate-y-1/2 -ml-5 px-4 py-3 rounded-full bg-white shadow hover:shadow-lg active:scale-95 transition
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <span className="text-base font-semibold">⇆</span>
          </button>
        </div>

        {/* Labels */}
        <div className="absolute left-3 top-3 text-xs md:text-sm bg-white/85 backdrop-blur px-2 py-1 rounded-full z-30">
          {leftLabel}
        </div>
        <div className="absolute right-3 top-3 text-xs md:text-sm bg-white/85 backdrop-blur px-2 py-1 rounded-full z-30">
          {rightLabel}
        </div>
      </div>
    </div>
  );
}


export default function CaseStudiesPage() {
  return (
    <main className="w-full bg-white text-gray-900">
      {/* Spacious layout: large fonts + double-spaced leading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14 text-lg md:text-xl leading-loose">
        {/* HERO */}
        <section className="relative mb-14 rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              src={cldVideo(media.heroVideo)}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
          </div>
          <div className="relative z-10 p-8 sm:p-12 md:p-16 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Detecting Over 160 Anomalies in Minutes
            </h1>
            <p className="max-w-3xl text-white/90">
              A commercial facilities manager needed an effective way to identify issues across their rooftop PV
              system. SterFlies’ thermal drone inspection revealed over 160 anomalies—including multi-diode issues—
              within minutes of arrival.
            </p>
          </div>
        </section>

        {/* THERMAL ↔ RGB COMPARE */}
<section className="mb-14">
  <h2 className="text-2xl md:text-3xl font-semibold mb-3">Thermal ↔ RGB Compare</h2>
  <p className="mb-6">
    Slide to compare the thermal orthomosaic against the RGB (visual) context. This makes it easy to see how heat
    signatures align with physical features on the roof—without walking every row.
  </p>

  {/* Wrap slider in a max-width container */}
  <div className="max-w-5xl mx-auto">
    <CompareSlider
      leftLabel="RGB"
      rightLabel="Thermal"
      leftSrc={media.mosaicRGB}
      rightSrc={media.mosaicThermal}
      // aspectWidth={4}
      // aspectHeight={3}
    />
  </div>
</section>


        {/* PROBLEM → SOLUTION: FINDINGS */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Problem → Solution: What We Found</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Hotspots & Multi-Hotspots</h3>
              <p>
                Single-Hotspots indicate overheating in individual cells or modules. Multi-hotspots amplify this risk,
                pointing to widespread stress. With drones, these are detected instantly across the roof.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                {media.exampleHotspotPanels.map((src, i) => (
                  <figure
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm p-2 flex flex-col items-center"
                  >
                  <Image
                    loader={cloudinaryLoader}
                    src={src}
                    alt={`Hotspot panel example ${i + 1}`}
                    width={100}
                    height={200}
                    className="object-contain"
                  />
                  <figcaption className="mt-2 text-sm text-gray-600 text-center">
                    {i === 0 && 'Hotspot'}
                    {i === 1 && 'Multi-hotspot'}
                    {i === 2 && 'Multi-hotspot'}
                 </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Multi-Diode Issues (Severity 4)</h3>
              <p>
                One of the most severe findings was multiple panels with multi-diode failures. This creates
                significant production loss and poses long-term risks. Highlighting these high-severity issues
                allowed the facilities team to prioritize repairs.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                {media.exampleMultiDiodePanels.map((src, i) => (
                  <figure
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm p-2 flex flex-col items-center"
                  >
                  <Image
                    loader={cloudinaryLoader}
                    src={src}
                    alt={`Multi-diode anomaly panel ${i + 1}`}
                    width={100}
                    height={200}
                    className="object-contain"
                  />
                    <figcaption className="mt-2 text-sm text-gray-600 text-center">
                    {i === 0 && 'Multi-Diode Issues'}
                    {i === 1 && 'Sinle-diode Issue'}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">String Anomaly</h3>
              <p>
                In PV terminology, if multiple modules in the same electrical string are behaving abnormally, it usually indicates a string-level electrical issue: a faulty inverter, a damaged combiner box, or wiring problems. Identifying these string anomalies helps target systemic issues that affect multiple panels. Uneven heating across a string can lead to significant energy loss and increased wear on the system.
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                {media.exampleStringAnomalyPanels.map((src, i) => (
                  <figure
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm p-2 flex flex-col items-center"
                  >
                  <Image
                    loader={cloudinaryLoader}
                    src={src}
                    alt={`String anomaly panel ${i + 1}`}
                    width={100}
                    height={200}
                    className="object-contain"
                  />
                    <figcaption className="mt-2 text-sm text-gray-600 text-center">
                      {i === 0 && 'String Anamoly'}
                      {i === 1 && 'Uneven heating across one string'}
                      {i === 2 && 'Another actual example'}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Temperature Spread Matters</h3>
              <p>
                The difference between the highest and lowest module temperatures (ΔT) tells a deeper story. Large
                deltas surface true outliers and point to electrical or physical faults—not just normal variation.
              </p>
            </div>
          </div>
        </section>

        {/* SEVERITY 4 FOCUS: MULTI-DIODE & ΔT */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Severity 4 Focus: Multi-Diode Issues & Temperature Spread
          </h2>
          <p className="mb-6">
            A cluster of <span className="font-semibold">multi-diode issues</span> was identified across multiple
            panels—repeatable hot blocks within modules that correlate with measurable production loss. To prioritize
            action, we measured the <span className="font-semibold">temperature spread (ΔT)</span> between the warmest
            and coolest nearby modules under the same conditions—larger ΔT highlights outliers that deserve immediate
            attention.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <figure className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <Image
                loader={cloudinaryLoader}
                src={media.multiDiodeAnnotated}
                alt="Annotated thermal frame showing multiple multi-diode issues"
                width={1600}
                height={1200}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 px-4 py-3">
                Multi-diode issues highlighted across adjacent strings. Repeated patterns indicate severity and route
                technicians to exact rows.
              </figcaption>
            </figure>

            <figure>
              <Image
                loader={cloudinaryLoader}
                src={media.tempSpreadGraphic}
                alt="Illustration of temperature spread across modules"
                width={1600}
                height={1200}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption className="text-sm text-gray-600 px-4 py-3">
                Temperature spread (ΔT): comparing warmest vs. coolest modules under the same irradiance surfaces true
                outliers.
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 rounded-3xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Problem → Solution</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <span className="font-semibold">Problem:</span> Over 160 anomalies across a large rooftop PV system,
                including multiple multi-diode issues.
              </li>
              <li>
                <span className="font-semibold">Solution:</span> Thermal mapping flags all occurrences at once in minutes, records by
                ΔT, and geo-tags each panel for fast on-roof verification.  Warranty claims are simplified with clear documentation.
              </li>
              <li>
                <span className="font-semibold">Why ΔT matters:</span> A larger ΔT between modules under the same
                conditions indicates a true outlier, helping prioritize the most critical issues. In this case, we
                found ΔT values exceeding 20°C, signaling significant performance loss and risk.
              </li>
              <li>
                <span className="font-semibold">Next steps:</span> Prioritize Severity 4 panels for immediate
                testing/replacement; schedule a follow-up mini-scan to confirm remediation.
              </li>
            </ul>
          </div>
        </section>

        {/* CLOSE-UPS */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Close up</h2>
          <p className="mb-6">
            Several anomalies were captured in detail, helping the facilities team understand exact locations and
            severity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {media.anomalyCloseups.map((id) => (
              <Image
                key={id}
                loader={cloudinaryLoader}
                src={id}
                alt="Thermal anomaly close-up"
                width={800}
                height={600}
                className="rounded-2xl border border-gray-200 shadow-sm bg-white"
              />
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Thankfully,</h2>
          <p>
            We identified <span className="font-semibold">160+ anomalies</span> within minutes of arriving
            on site and generated a inspection report 24hrs post flight, in accordance with IEC 62446-3 guidelines. Critical defects—including multi-diode failures—were
            surfaced for immediate attention, giving the facilities manager clear, actionable next steps and protecting
            long-term performance. 
          </p>
          <figure className="mt-6 rounded-2xl border border-white overflow-hidden bg-white">
            <Image
              loader={cloudinaryLoader}
              src={media.conclusionPlaceholder}
              alt="Thermal Map of Annotated Defects"
              width={600}
              height={300}
              className="w-1/2 h-auto object-cover mx-auto"
            />
            <figcaption className="text-sm text-gray-600 px-4 py-2 text-center">
              Annotated Orthomosaic Highlighting Detected Anomalies
            </figcaption>
          </figure>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 sm:p-12 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Need clear answers from your PV system?
              </h2>
              <p className="mb-6 text-white/90 max-w-3xl">
                We uncover hidden issues quickly and deliver reports that highlight what matters most.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-2xl bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-md transition"
                >
                  Schedule a Call for a Free Consultation!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}



