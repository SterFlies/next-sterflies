"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: React.ReactNode
}

/**
 * Conditionally wraps content in a white "paper" container on non-home pages.
 */
export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Home page: render full-width content
  if (isHome) {
    return (
      <main className="flex-grow w-full">
        {children}
      </main>
    )
  }

  // Other pages: centered white paper container
  return (
    <div className="flex-grow bg-white max-w-7xl mx-auto w-full px-4 py-8">
      <main>{children}</main>
    </div>
  )
}
