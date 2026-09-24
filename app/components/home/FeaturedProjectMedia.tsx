"use client"

import { useEffect, useRef } from "react"

const SRC =
  "https://res.cloudinary.com/dzlmoyomq/video/upload/v1770754376/picture-context_qk2ysu.mp4"

export default function FeaturedProjectMedia() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const apply = () => {
      if (motion.matches) {
        video.pause()
        return
      }
      video.play().catch(() => {})
    }

    apply()
    motion.addEventListener("change", apply)
    return () => motion.removeEventListener("change", apply)
  }, [])

  return (
    <video
      ref={videoRef}
      className="aspect-[16/10] w-full bg-[#111] object-cover object-[center_62%]"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Existing-conditions reality capture for the IAQ and mold documentation project"
    >
      <source src={SRC} type="video/mp4" />
    </video>
  )
}
