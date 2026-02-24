// components/Certifications.tsx
import Image from "next/image"


const certifications = [
  {
    id: "faa",
    title: "FAA Part 107 Certified",
    src: "Part 107.png", // local image
    alt: "FAA Part 107 Certified Remote Pilot",
  },
  {
    id: "osha",
    title: "OSHA 10-Hour Construction Safety",
    src: `https://res.cloudinary.com/dzlmoyomq/image/upload/v1771954912/OSHA-10hr-Logo-150x150_g3q3jp.png`,
    alt: "OSHA 10 Hour Construction Safety Certification",
  },
]

export default function Certifications() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="flex items-center justify-center gap-12 sm:gap-16">
          
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center text-center">
              
              <Image
                src={cert.src}
                alt={cert.alt}
                width={100}
                height={100}
                className="object-contain"
              />

              <p className="mt-2 text-[11px] tracking-widest text-slate-500 uppercase">
                {cert.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}