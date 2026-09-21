import Image from "next/image"
import { cloudinaryUrl } from "@/app/config/site"

export default function ArticleFigure({
  src,
  alt,
  caption,
  credit,
  priority = false,
  video = false,
}: {
  src: string
  alt: string
  caption?: string
  credit?: string
  priority?: boolean
  video?: boolean
}) {
  const imageSrc = src.startsWith("https://res.cloudinary.com/") ? cloudinaryUrl(src, 1400) : src

  return (
    <figure className="my-8">
      {video ? (
        <video
          src={src}
          controls
          preload="metadata"
          playsInline
          className="w-full bg-[var(--color-surface)]"
          aria-label={alt}
        />
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          width={1400}
          height={900}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      )}
      {caption || credit ? (
        <figcaption className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
          {caption}
          {credit ? (
            <span className="mt-1 block text-sm">
              Source: {credit}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  )
}

export function ArticleFigureRow({ children }: { children: React.ReactNode }) {
  return <div className="my-8 grid gap-6 md:grid-cols-2 [&_figure]:my-0">{children}</div>
}
