"use client"

import { useEffect, useRef } from "react"

export default function LoopVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    let visible = false

    const apply = () => {
      if (motion.matches || !visible) {
        video.pause()
        return
      }
      video.play().catch(() => {})
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        apply()
      },
      { threshold: 0.25 }
    )

    observer.observe(video)
    apply()
    motion.addEventListener("change", apply)
    return () => {
      observer.disconnect()
      motion.removeEventListener("change", apply)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="h-auto w-full"
      aria-label={label}
    />
  )
}
