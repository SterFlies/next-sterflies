// app/blog/page.tsx
import React from 'react'
import Image from 'next/image'
import BlogList from '@/app/components/BlogList'

export const metadata = {
  title: 'Blog | SterFlies',
  description: 'Read our latest articles on drone services, best practices, and industry insights.',
}

export default function BlogPage() {
  return (
    <main className="flex-grow">
      {/* Hero Banner */}
      <div className="relative h-60 bg-gray-800 mb-8">
        <Image
          src="/articlebanner.png"
          alt="Blog Hero"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Articles</h1>
        </div>
      </div>

      {/* Filter/Search + Posts */}
      <section className="mt-16">
      <BlogList />
      </section>
    </main>
  )
}
