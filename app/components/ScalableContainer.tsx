// app/components/ScalableContainer.tsx
'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function ScalableContainer({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current) return
      const contentWidth = wrapperRef.current.scrollWidth
      const viewportWidth = window.innerWidth
      // only shrink (never upscale above 1)
      const newScale = Math.min(1, viewportWidth / contentWidth)
      setScale(newScale)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: wrapperRef.current?.scrollWidth ?? '100%',
      }}
    >
      {children}
    </div>
  )
}


