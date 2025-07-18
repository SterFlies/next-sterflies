// app/components/PageWrapper.tsx
'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './PageWrapper.module.css'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const isHome = usePathname() === '/'

  return isHome ? (
    <main className={styles.home}>
      {children}
    </main>
  ) : (
    <div className={styles.inner}>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

