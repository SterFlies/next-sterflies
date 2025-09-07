// app/projects/matterport-drone/page.tsx
import Image from "next/image";
import Link from "next/link";

// Local meta (plain const so Next.js build stays clean)
const meta = {
  slug: "custom-home-matterport-drone", // this value doesn't affect routing
  title: "Custom Home – Matterport + Drone Combo",
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
          title="Custom Home — Matterport Interior Tour"
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
              This project pairs a <strong>Matterport interior scan</strong> with an <strong>exterior drone-based 3D model</strong> so owners and trades can see the entire build—inside and out—from a single link. The interior tour makes it easy to confirm room flow and rough-in locations, while the exterior model shows access, grading, and roof geometry. It’s a simple digital handoff that reduces site visits and speeds decisions.
            </p>
          </SectionCard>

          <SectionCard id="tour" title="Interactive Interior Tour (Matterport)">
            <p className="text-sm text-gray-600">
              Use the viewer above: click to move, drag to look around, and open full screen for the sharpest detail.
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
          </SectionCard>

          {/* Cloudinary Video with Pro3 paragraph */}
          <SectionCard id="pro3video" title="Interior Scanning with Matterport Pro3">
            <p>
              For interiors, we use the <strong>Matterport Pro3</strong>—it combines fast capture with high-quality depth data, making it ideal for <em>virtual tours, as-built documentation,</em> and quick stakeholder reviews. The result is a clean, navigable model that anyone can open on a phone or laptop without installing software. When questions come up about layout, clearances, or finish choices, the Pro3 tour answers them in seconds.
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

          {/* Cloudinary Photo (you + Pro3) */}
          <SectionCard id="fieldphoto" title="On Site with the Pro3">
            <p>
              We plan each interior loop for clear line-of-sight and minimal occlusion, then use the Pro3 on a tripod for stable, repeatable captures. Live feedback on the tablet confirms alignment and fill so every space stitches cleanly. The outcome is a highly accurate, navigable model that speeds RFIs and punch-list decisions.
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

          <SectionCard id="qa" title="Capture & QA">
            <ul className="list-disc pl-5">
              <li>Matterport interior with control scan for accuracy across floors.</li>
              <li>Exterior flown at low altitude for crisp roof planes and site context.</li>
              <li>Consistent camera geometry so repeat scans compare cleanly.</li>
              <li>Quick QC: door/window rough-in positions, stair openings, soffit clearances.</li>
            </ul>
          </SectionCard>

          <SectionCard id="next" title="Next Steps (Plain English)">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Edit and add annotations to tour</strong> (interactive and annotated features) to keep a visual record.</li>
              <li><strong>Share one link</strong> in owner updates; add two bullets: “What changed / What’s next.”</li>
              <li><strong>Pin 2–3 decisions</strong> inside the tour (fixtures, switches, cabinets) for faster sign-off.</li>
              <li><strong>Add an exterior map</strong> (ortho or 3D) here when grading/roof geometry changes.</li>
            </ul>
          </SectionCard>
        </div>

        {/* Sidebar (no Photo Highlights per request) */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border p-6 bg-white">
              <h3 className="text-base font-semibold">Quick Facts</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><span className="font-medium">Type:</span> Custom single-family home</li>
                <li><span className="font-medium">Primary:</span> Matterport interior tour</li>
                <li><span className="font-medium">Secondary:</span> Exterior 3D model</li>
                <li><span className="font-medium">Best viewing:</span> Fullscreen on laptop/desktop</li>
                <li><span className="font-medium">Use case:</span> Owner/trade coordination, remote review</li>
                <li><span className="font-medium">Outputs:</span> Virtual tour, 3D model, MP4 videos, Still Images</li>
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

