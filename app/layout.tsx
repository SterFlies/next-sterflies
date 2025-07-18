// app/layout.tsx
import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import PageWrapper from '@/app/components/PageWrapper'
import './globals.css'
import ScalableContainer from '@/app/components/ScalableContainer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SterFlies',
  description: 'Professional Drone & Thermal Imaging Services',
  icons: {
    icon: '/Logo-no-background_edited.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-300 min-h-screen`}
      >
        {/* ClientWrapper handles the useIsMobile hook and scaling */}
        <ScalableContainer>
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <Footer />
          </ScalableContainer>
      </body>
    </html>
  )
}
