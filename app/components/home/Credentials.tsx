import Image from "next/image"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"

const credentials = [
  {
    title: "FAA Part 107",
    text: "Commercial aerial operations are conducted under an FAA Part 107 remote pilot certificate.",
    image: { src: "/Part 107.png", alt: "" },
  },
  {
    title: "OSHA 10",
    text: "Field work on construction and industrial sites is supported by OSHA 10 construction safety training.",
    image: {
      src: "https://res.cloudinary.com/dzlmoyomq/image/upload/f_auto,q_auto,c_limit,w_160/v1771954912/OSHA-10hr-Logo-150x150_g3q3jp.png",
      alt: "",
    },
  },
  {
    title: "Insured operations",
    text: "SterFlies maintains insurance appropriate to its field operations. Proof can be provided for an engagement upon request.",
  },
]

export default function Credentials() {
  return (
    <section className="border-b border-[var(--color-line)] py-12 md:py-16">
      <SiteContainer>
        <SectionHeader
          eyebrow="Qualifications"
          title="Field credentials"
          description="These credentials support field access and flight operations. They are not industrial-hygiene, engineering, or surveying licenses."
        />
        <ul className="mt-8 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3">
          {credentials.map((item) => (
            <li key={item.title} className="bg-[var(--color-surface)] px-5 py-5">
              <div className="flex items-center gap-3">
                {item.image ? (
                  <Image src={item.image.src} alt={item.image.alt} width={32} height={32} className="h-8 w-8 object-contain" />
                ) : null}
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  )
}
