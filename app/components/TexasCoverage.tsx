// components/TexasCoverage.tsx
import Image from "next/image";

export default function TexasCoverage() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 py-20">
        {/* Left: Headline */}
        <div className="max-w-xl">
          <p className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-700">
            SERVICING{" "}
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-tight">
            {"SAN ANTONIO".split("").map((char, i) => (
              <span
                key={i}
                className={`shine-letter inline-block ${char === " " ? "w-3" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
            </span>
            
            <span className="text-orange-500">&amp; SURROUNDING AREAS</span>
          </p>

          <p className="mt-5 text-lg text-slate-600">
            With <span className="font-semibold">statewide coverage available</span> for
            large‑scale projects.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• San Antonio Metro (Bexar, Comal, Guadalupe, Kendall)</li>
            <li>• Austin–San Marcos corridor</li>
            <li>• South & Central Texas</li>
          </ul>
        </div>

        {/* Right: Map */}
        <div className="relative w-full max-w-2xl lg:ml-auto">
          {/* Map image (replace with your own file or Cloudinary URL) */}
          <div className="relative aspect-[16/11]">
            <Image
              src="/texas.svg"                // <-- put a Texas outline SVG/PNG in /public
              alt="Texas coverage map"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
            {/* San Antonio pin (tweak top/left percentages to match your map image) */}
            <div className="absolute"
                 style={{ top: "66%", left: "56%" }}>
              {/* pulse ring */}
              <span className="absolute -inset-3 rounded-full bg-blue-600/10 animate-ping" />
              {/* dot */}
              <span className="relative block h-3 w-3 rounded-full bg-blue-700 ring-2 ring-white" />
              {/* label */}
              <span className="absolute left-4 top-1 text-xs font-semibold text-blue-900 bg-white/90 px-2 py-0.5 rounded">
                San Antonio
              </span>
            </div>
          </div>

          {/* Legend badge */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 text-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
            Primary service area
          </div>
        </div>
      </div>
    </section>
  );
}
