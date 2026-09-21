"use client"

import Image from "next/image"
import React from "react"

export default function CompareSlider({
  leftSrc,
  rightSrc,
  leftLabel = "RGB",
  rightLabel = "Thermal",
}: {
  leftSrc: string
  rightSrc: string
  leftLabel?: string
  rightLabel?: string
}) {
  const [x, setX] = React.useState(50)
  const dragging = React.useRef(false)
  const container = React.useRef<HTMLDivElement>(null)

  const update = (clientX: number) => {
    const el = container.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setX(Math.round((px / rect.width) * 100))
  }

  React.useEffect(() => {
    const up = () => {
      dragging.current = false
    }
    window.addEventListener("pointerup", up)
    return () => window.removeEventListener("pointerup", up)
  }, [])

  return (
    <div
      ref={container}
      className="relative w-full overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]"
      style={{ aspectRatio: "3 / 2" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <Image src={leftSrc} alt={leftLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: `inset(0 ${100 - x}% 0 0)` }}>
        <Image src={rightSrc} alt={rightLabel} fill sizes="(max-width: 1024px) 100vw, 960px" className="object-cover" />
      </div>
      <div
        className="absolute inset-0 z-10 cursor-col-resize touch-none select-none"
        onPointerDown={(e) => {
          dragging.current = true
          update(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) update(e.clientX)
        }}
      />
      <div
        role="slider"
        aria-label="Compare RGB and thermal imagery"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={x}
        tabIndex={0}
        className="absolute top-0 bottom-0 z-20"
        style={{ left: `calc(${x}% - 1px)` }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setX((v) => Math.max(0, v - 2))
          if (e.key === "ArrowRight") setX((v) => Math.min(100, v + 2))
        }}
      >
        <div className="absolute inset-y-0 w-px bg-white" />
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          className="absolute top-1/2 -ml-5 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-sm font-semibold text-[var(--color-ink)]"
        >
          ⇆
        </button>
      </div>
      <p className="absolute left-3 top-3 z-30 rounded-[4px] bg-[var(--color-surface)] px-2 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
        {leftLabel}
      </p>
      <p className="absolute right-3 top-3 z-30 rounded-[4px] bg-[var(--color-surface)] px-2 py-1 text-xs font-medium uppercase tracking-[0.08em] text-[var(--color-muted)]">
        {rightLabel}
      </p>
    </div>
  )
}
