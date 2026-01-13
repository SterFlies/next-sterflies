// app/projects/matterport-drone/page.tsx
import Image from "next/image";
import Link from "next/link";

// Local meta (plain const so Next.js build stays clean)
const meta = {
  slug: "Indoor Air Quality Assessment Documentation", // this value doesn't affect routing
  title: "IAQ - Mold Survey Documentation DEMO (Matterport)",
  date: "2025-08-15",
  cover: {
    src: "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077581/Screenshot_2025-09-05_080609_q3q6nk.png",
    alt: "Custom home interior/exterior capture (Matterport + drone)",
  },
  excerpt:
    "Walk the interior in 3D with Matterport and review the exterior from above with drone imagery—one link, full context for owners and trades.",
  tags: ["matterport", "interior", "exterior", "construction"],
} as const;

// Embeds & assets
const MATTERPORT_URL = "https://my.matterport.com/show/?m=gB2RVDfqLvW";
const PIX4D_MESH_URL =
  "https://cloud.pix4d.com/dataset/2349141/model?shareToken=4a7c62ac-8c56-462a-af0e-68711a2d00bc";

const CLOUDINARY_VIDEO_MP4 =
  "https://res.cloudinary.com/dzlmoyomq/video/upload/v1757075500/reelmatter_vzpkqo.mp4";
const CLOUDINARY_VIDEO_POSTER =
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757090021/Screenshot_2025-09-05_113308_yh4rz0.png";
const CLOUDINARY_FIELD_PHOTO =
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077084/matterportthumb_rosrlb.png";

const CLOUDINARY_DATA_PHOTO =
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

export default function ProjectPage() {
  const pills = [
    { id: "overview", label: "Overview" },
    { id: "tour", label: "Interior Tour" },
    { id: "exterior3d", label: "Exterior 3D Model" },
    { id: "pro3video", label: "Pro3 Video" },
    { id: "fieldphoto", label: "Field Photo" },
    { id: "qa", label: "Capture & QA" },
    { id: "next", label: "Next Steps" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-500">
        <Link href="/projects" className="hover:underline">Projects</Link>
        <span className="mx-2">/</span>
        <span>{meta.title}</span>
      </nav>

      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{meta.title}</h1>
        <div className="mt-3 text-gray-600 text-sm">{"San Antonio Area, TX • " + meta.date}</div>
      </header>

      {/* HERO — Matterport embed (unchanged desktop/mobile) */}
      <AspectBox>
        <iframe
          src={MATTERPORT_URL}
          className="absolute inset-0 w-full h-full"
          title="IAQ - Mold Survey Documentation DEMO (Matterport)"
          frameBorder={0}
          allow="autoplay; fullscreen; web-share; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
        />
      </AspectBox>

      {/* Jump Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {pills.map((p) => (
          <a key={p.id} href={`#${p.id}`} className="px-3 py-1.5 rounded-full border text-sm hover:bg-gray-50">
            {p.label}
          </a>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main column */}
        <div className="lg:col-span-8 space-y-8">
          <SectionCard id="overview" title="Executive Summary">
            <p>
              This demo project illustrates how interior Matterport scanning paired with an exterior drone-based 3D model supports indoor air quality (IAQ) and mold investigations by preserving site conditions at the time of assessment.
            </p>
            <p>
              The interior model provides a navigable record of room layout and sampling locations, while the exterior model documents building envelope context, access conditions, grading, and roof geometry. Together, they form a single, time-stamped visual reference that supports sampling documentation, reporting clarity, and third-party review without repeated site visits.
            </p>
          </SectionCard>

          <SectionCard id="tour" title="Important Disclaimer">
            <p className="text-sm text-gray-600">
              This project is a <strong>demonstration example only</strong> and does <strong>not represent an active or ongoing investigation or case.</strong>
            </p>
            <p className="text-sm text-gray-600">
             Any sampling information, spore types, laboratory results, or data visualizations shown within the models or supporting materials are <strong>entirely fictional and provided for illustrative purposes only.</strong> They are intended solely to demonstrate how environmental data may be visually referenced within site documentation.
            </p>
            <p className="text-sm text-gray-600">
              No mold identification, air quality conclusions, moisture diagnosis, or causation analysis is provided or implied. All real-world assessments, interpretations, and findings must be performed by a licensed consultant, industrial hygienist, or accredited laboratory.
            </p>
          </SectionCard>

          {/* Exterior 3D Model (Pix4D) — bigger on phones only */}
          <SectionCard id="exterior3d" title="Exterior 3D Model">
            <AspectBox mobileTall bleedMobile>
              <iframe
                src={PIX4D_MESH_URL}
                className="absolute inset-0 w-full h-full"
                title="Custom Home — Exterior 3D Model (Pix4D)"
                frameBorder={0}
                allowFullScreen
                loading="lazy"
              />
            </AspectBox>
            <p className="text-sm text-gray-600">
              Rotate, zoom, and inspect roof planes, elevation transitions, and site access directly in the browser.
            </p>
            <p className="text-sm text-gray-600">
              Right mouse drag to rotate, scroll to zoom, and left mouse drag to pan the view.
            </p>
          </SectionCard>

          {/* Cloudinary Video with Pro3 paragraph */}
          <SectionCard id="pro3video" title="Interior Scanning with Matterport Pro3">
            <p>
              For interiors, we use the <strong>Matterport Pro3</strong>—it combines fast capture with high-quality depth data, making it ideal for virtual tours, as-built documentation, and quick stakeholder reviews. The result is a clean, navigable model that anyone can open on a phone or laptop without installing software. When questions come up about layout, clearances, or finish choices, the Pro3 tour answers them in seconds.
            </p>
            <AspectBox>
              <video
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={CLOUDINARY_VIDEO_POSTER}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={CLOUDINARY_VIDEO_MP4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectBox>
          </SectionCard>

          {/* Annotated data Picture */}
          <SectionCard id="pictureannotation" title="Added a photo annotation example">
            <p>
             High-resolution imagery and data can be <strong>annotated directly within the 3D tour</strong> to visually reference <strong>areas of observed concern,</strong> access points, and sampling locations. Annotations preserve what was documented, where it was documented, and when, without interpreting cause or severity.
            </p>
            <p>
              This approach allows consultants, reviewers, and attorneys to quickly understand <strong>spatial context</strong>—such as the relationship between HVAC components, wall cavities, and adjacent rooms—while maintaining a clear separation between <strong>visual documentation</strong> and <strong>professional findings</strong>.
            </p>
            <figure className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={CLOUDINARY_DATA_PHOTO}
                alt="Example annotation demonstrating how observed conditions may be visually referenced within the tour."
                fill
                className="object-cover"
              />
            </figure>
          </SectionCard>

          {/* Cloudinary Photo (me + Pro3) */}
          <SectionCard id="fieldphoto" title="On Site with the Pro3">
            <p>
             Interior capture is planned around <strong>clear line-of-sight, minimal occlusion, and consistent scan spacing</strong> to ensure rooms, corridors, and transitions stitch accurately. The Pro3 is used on a tripod for stable, repeatable capture, while live tablet feedback confirms coverage and alignment.
            </p>
            <p>
              The resulting model creates a <strong>navigable visual baseline</strong> that allows consultants to reference <strong>sampling locations, room relationships, and observed conditions</strong> during analysis, reporting, and follow-up—reducing ambiguity and improving documentation quality.
            </p>
            <figure className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={CLOUDINARY_FIELD_PHOTO}
                alt="Scanning with the Matterport Pro3 during capture"
                fill
                className="object-cover"
              />
            </figure>
          </SectionCard>

          <SectionCard id="3D" title="Exterior Drone Capture & 3D Model">
            <p className="text-lg text-black-600">
              Exterior drone capture provides <strong>contextual documentation</strong> that can inform IAQ and moisture-related investigations. High-resolution visual imagery and thermal imaging are used to record building orientation, roof geometry, drainage patterns, exterior material transitions, and adjacent structures at the time of assessment.
            </p>
            <p>
              The exterior 3D model does <strong>not diagnose conditions</strong>, but preserves spatial relationships that can be correlated with interior observations, sampling data, and historical findings.
            </p>
          </SectionCard>

          <SectionCard id="qa" title="Capture & QA">
            <ul className="list-disc pl-5">
              <li>Matterport interior capture with control scans to ensure accurate alignment across rooms and levels.</li>
              <li>Exterior drone and thermal capture at appropriate altitudes to document roof geometry, drainage features, and exterior context relevant to moisture and IAQ considerations.</li>
              <li>Consistent camera geometry and capture parameters so repeat documentation can be compared over time if follow-up surveys are required.</li>
              <li>Quality checks to confirm clear visibility of sampling locations, room transitions, material interfaces, and access points prior to delivery.</li>
            </ul>
          </SectionCard>

          <SectionCard id="next" title="Next Steps (Plain English)">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Edit and add annotations to scan</strong> to visually document sampling locations, room conditions, and observed areas of interest as a permanent visual record.</li>
              <li><strong>Share one secure link</strong> with consultants, clients, or third parties, including brief notes for “Areas documented” and “Purpose of follow-up”. Supports investigation reports.</li>
              <li><strong>Pin sampling points or reference markers</strong> inside the tour (air samples, surface samples, moisture readings) to maintain clear spatial context between data and location.</li>
              <li><strong>Attach exterior context (visual, thermal, ortho, or 3D)</strong> when roof conditions, drainage patterns, or envelope-related factors are relevant to the investigation.</li>
            </ul>
          </SectionCard>
        </div>

        {/* Sidebar (no Photo Highlights per request) */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold">Quick Facts</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><span className="font-medium">Type:</span> Custom single-family home, Construction defect documentation</li>
                <li><span className="font-medium">Primary:</span> Matterport interior tour</li>
                <li><span className="font-medium">Secondary:</span> Exterior 3D model</li>
                <li><span className="font-medium">Best viewing:</span> Fullscreen on laptop/desktop, tablet/iPad</li>
                <li><span className="font-medium">Use case:</span> Owner/trade coordination, mold consultation, Industrial hygienist report support, remote review</li>
                <li><span className="font-medium">Outputs:</span> Virtual tour, 3D model, MP4 videos, Still Images, Thermal Images</li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-block px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800"
              >
                Start a project
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <Link href="/contact" className="inline-block px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800">
          Start a project
        </Link>
      </div>
    </main>
  );
}

