export default function ProjectEmbed({
  src,
  title,
  tall = false,
}: {
  src: string
  title: string
  tall?: boolean
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111] ${
        tall ? "aspect-[4/3] sm:aspect-[16/10]" : "aspect-[16/10]"
      }`}
    >
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="fullscreen; xr-spatial-tracking; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
