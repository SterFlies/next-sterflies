import React from 'react'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main id="main-content" tabIndex={-1} className="w-full min-w-0 flex-1">
      {children}
    </main>
  )
}
