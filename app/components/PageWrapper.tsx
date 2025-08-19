'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const isHome = usePathname() === '/'

  return (
    <main
      className={
        isHome
          ? 'w-full'
          : 'container mx-auto px-4 py-8' /* centered + spacing on sub‑pages */
      }
    >
      {children}
    </main>
  )
}

