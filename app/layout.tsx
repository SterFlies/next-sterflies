// app/layout.tsx
import React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import PageWrapper from '@/app/components/PageWrapper'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-blue-300`}
      >
        {/* site-wide header */}
        <Header />

        {/* wrap pages except home via PageWrapper */}
        <PageWrapper>{children}</PageWrapper>

        {/* site-wide footer */}
        <Footer />
      </body>
    </html>
  )
}
