// app/blog/what-is-forensic-site-documentation/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

// Cloudinary loader
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ Cloudinary assets (swap with your real uploads)
const CLOUDINARY_TOP_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768153123/indoor-mapping-pix4d-pix4dmapper-spherical-camera-360_puyy1y.jpg'

const CLOUDINARY_CASUAL_PHOTOS_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228126/m7rTOtj--q0oymRcXD5FypQgvK-fgS4x_lH3uI1oX8ah1onEae7wpuT3w2v66lzKYME4larYw4FnPm1blkXcLSnii9rwZ06E8bJ6Qo8ZE4w_is1wlm.jpg'
const CLOUDINARY_CASUAL_PHOTOS_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228126/COLOURBOX50168201_y6knrd.webp'

const CLOUDINARY_3D_DOCS_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228255/construction_model_point_cloud_zjshmk.webp'
const CLOUDINARY_3D_DOCS_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228740/b47f1f_612e3db647214dfe948d4d5a00f5626e_mv2_xijic8.gif'

const CLOUDINARY_SPATIAL_ACCURACY_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767906103/Screenshot_2026-01-08_145836_zgatsw.png'
const CLOUDINARY_SPATIAL_ACCURACY_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228342/1_wGbfxeMEBJPPMIQ1H9QtVw_zdc22a.jpg'

const CLOUDINARY_TIME_CONTEXT_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228868/Pp7aD0wbRZvIQdTegO1IAKM-j7VgsoFJQV2iOUupYYtMVlwCQpvMEjhHOVf2rtGNkvsFHCPq6HVbafJzYDjFcUR8qbZPOzpw3DA_G78fYAs_x5cjql.jpg'
const CLOUDINARY_TIME_CONTEXT_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228706/HEA_BLO_GEO_Dronelink_wyr6ro.jpg'

const CLOUDINARY_HIGH_STAKES_1 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228919/75caa67a79f341c79e274dc8b2f45b1a_iykzbm.jpg'
const CLOUDINARY_HIGH_STAKES_2 =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770228919/data-analysts-in-office_ubsxso.jpg'

export default function Page() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_TOP_HERO}
            alt="Drone and ground scanning used for forensic site documentation"
            width={900}
            height={900}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl text-center">
            What Is Forensic Site Documentation
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-700 md:text-2xl">
            And Why Photos Alone Are Not Enough
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-04">February 4, 2026</time>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-700">
            In many industries, site documentation is treated as an afterthought. Someone walks the site,
            takes a few photos on their phone, maybe records a short video, and assumes that record will be
            enough if questions ever arise later.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            In reality, that kind of documentation rarely holds up when it matters most. Forensic site
            documentation is a different approach. It is not about capturing what looks interesting in the
            moment. It is about preserving a site as it existed in space and time, in a way that can be
            revisited, measured, and understood long after conditions have changed.
          </p>
        </header>
      </section>

      {/* Image pair 1 */}
      <section className="mx-auto max-w-5xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_CASUAL_PHOTOS_1}
            alt="Close up jobsite photo showing a condition without context"
            caption="Close up photos can show a detail, but they often fail to show where that detail exists in the broader site."
          />
          <Figure
            src={CLOUDINARY_CASUAL_PHOTOS_2}
            alt="Folder of mixed jobsite photos taken from the ground"
            caption="When photos are captured inconsistently, it becomes difficult to verify orientation, scale, and relationships later."
          />
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-5xl px-6 pb-20">
        <Section title="The Problem With Casual Photos">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Casual photos are easy to capture, but they come with serious limitations. They often lack
            spatial context. A close up image of a crack, stain, or surface condition tells you very little
            about where it exists within the broader site. Without reference points, scale, or orientation,
            it becomes difficult for anyone who was not physically present to understand what they are
            looking at.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            They are subjective by nature. Photos are taken based on what someone thought was important at
            the time. Anything not noticed, misunderstood, or deemed insignificant simply goes undocumented.
            Even when photos are plentiful, they usually do not provide a consistent structure that ties
            everything together.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Once a site changes, casual photos become difficult to verify. There is often no reliable way to
            confirm the exact location a photo was taken, how it relates to other areas, or whether nearby
            conditions contributed to the issue being discussed. In short, casual photos capture moments.
            They do not preserve reality.
          </p>
        </Section>

        {/* Image pair 2 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_3D_DOCS_1}
            alt="3D point cloud or mesh created from drone and ground capture"
            caption="Forensic documentation turns visual capture into a navigable record that preserves how everything relates in space."
          />
          <Figure
            src={CLOUDINARY_3D_DOCS_2}
            alt="Professional reviewing a 3D model of a site on a computer"
            caption="When the site becomes a structured digital record, stakeholders can revisit conditions without returning to the field."
          />
        </div>

        <Section title="What Forensic Site Documentation Actually Means">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Forensic site documentation is the practice of creating a spatially accurate, comprehensive
            record of a site that can be analyzed long after physical access is no longer possible. Instead
            of isolated images, the output is a measurable digital representation of the site itself.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This typically includes high overlap aerial imagery, ground based scanning, and structured
            capture workflows that allow the site to be reconstructed as a navigable 3D environment. Every
            image, scan, and data point exists within a shared coordinate space, preserving scale, distance,
            and relationships between elements.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Rather than asking what a single photo shows, the question becomes where exactly a condition is
            located and how it relates to everything around it. That shift changes how professionals interpret
            evidence, how teams communicate, and how decisions get made.
          </p>
        </Section>

        {/* Image pair 3 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_SPATIAL_ACCURACY_1}
            alt="Georeferenced orthomosaic or map used for accurate site documentation"
            caption="Interact with Interior 3D tours to view the site from anywhere."
          />
          <Figure
            src={CLOUDINARY_SPATIAL_ACCURACY_2}
            alt="Measured distances and annotations on a site model or map"
            caption="Spatially accurate deliverables allow verification, measurement, and repeatable review."
          />
        </div>

        <Section title="Spatial Accuracy Is the Difference Maker">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Spatial accuracy is what separates documentation from evidence. In forensic site documentation,
            imagery can be processed into orthomosaics, point clouds, and 3D models that are geometrically
            correct, not visually approximated. Distances can be measured. Locations can be verified.
            Relationships between features can be preserved and reviewed later with confidence.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            This allows professionals to revisit the site virtually and answer questions that were never
            asked at the time of capture. Where was a condition located relative to a structure, pathway, or
            system. How far apart were two features. What existed nearby that may have contributed to the
            issue being discussed. These are questions photos alone simply cannot answer.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            If you publish orthomosaic outputs as part of your documentation workflow, you can also link to
            your dedicated orthomosaic explainer for deeper context.{' '}
            <Link
              href="/blog/orthomosaic_blog"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              Learn what an orthomosaic is
            </Link>
            .
          </p>
        </Section>

        {/* Image pair 4 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_TIME_CONTEXT_1}
            alt="Construction or industrial site before conditions change"
            caption="Sites evolve quickly. The moment conditions change, the original reality is gone."
          />
          <Figure
            src={CLOUDINARY_TIME_CONTEXT_2}
            alt="Same site after changes or work has progressed"
            caption="Time stamped capture preserves what existed at a specific point in time for future review."
          />
        </div>

        <Section title="Context Over Time Matters">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Sites are not static. They change constantly. Materials are removed, surfaces are altered,
            systems are repaired, and environments evolve. Once those changes occur, the original conditions
            are often lost forever.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Forensic site documentation preserves a time stamped snapshot of reality, allowing stakeholders
            to see what existed before alterations were made. This becomes invaluable when evaluating
            responsibility, understanding causation, or reconstructing events accurately.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Without this level of documentation, teams are left relying on memory, assumptions, and incomplete
            visual records. That gap is where confusion grows and disputes thrive.
          </p>
        </Section>

        {/* Image pair 5 */}
        <div className="my-10 grid gap-4 md:grid-cols-2">
          <Figure
            src={CLOUDINARY_HIGH_STAKES_1}
            alt="Stakeholders reviewing site documentation for claims, safety, or investigation"
            caption="When multiple stakeholders need the same truth, a structured site record becomes the common ground."
          />
          <Figure
            src={CLOUDINARY_HIGH_STAKES_2}
            alt="Attorney or consultant reviewing visual evidence and site record"
            caption="A neutral record helps reduce interpretation disputes and supports informed decisions."
          />
        </div>

        <Section title="Why This Matters in High Stake Situations">
          <p className="mt-4 text-base leading-7 text-slate-700">
            In construction defect matters, environmental assessments, safety incidents, and legal disputes,
            clarity matters more than opinion. Forensic site documentation provides a neutral, objective record
            that can be reviewed by engineers, consultants, attorneys, and decision makers without needing to
            physically return to the site.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Instead of debating what might have been present, teams can point to a shared visual and spatial
            reference that everyone can evaluate independently. This reduces misinterpretation, strengthens
            analysis, and supports informed decisions based on actual conditions, not recollections.
          </p>
        </Section>

        <Section title="Why Photos Alone Will Never Be Enough">
          <p className="mt-4 text-base leading-7 text-slate-700">
            Photos are still useful. They capture details, textures, and specific conditions. But without
            spatial structure, photos are fragments of information floating without context.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-700">
            Forensic site documentation brings those fragments together into a coherent whole. It transforms
            images into data, sites into digital records, and documentation into something that can stand up
            over time. That is the difference between having pictures and having proof.
          </p>
        </Section>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-base font-semibold text-slate-900">
            Want a site record you can revisit from anywhere
          </p>
          <p className="mt-2 text-base leading-7 text-slate-700">
            SterFlies creates reliable aerial and ground based documentation that preserves site context for
            construction, environmental health, and high stake decision making.
          </p>
          <p className="mt-4">
            <Link href="/blog" className="font-semibold text-blue-700 hover:text-blue-900 button inline-flex items-center rounded-lg border px-5 py-3">
              Explore more articles
            </Link>
            <Link href="/contact" className="ml-4 font-semibold text-blue-700 hover:text-blue-900 button inline-flex items-center rounded-lg border px-5 py-3">
              Contact
            </Link>
          </p>
        </div>
      </article>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      {children}
    </section>
  )
}

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full">
        <Image loader={cloudinaryLoader} src={src} alt={alt} fill className="object-cover" />
      </div>
      <figcaption className="px-4 py-3 text-sm text-slate-600">{caption}</figcaption>
    </figure>
  )
}