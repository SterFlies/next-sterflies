// components/BlogList.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Categories for filtering
const categories = ['All', 'Construction', 'Land', 'Marketing', 'Thermal Solutions', 'Data Collection']

// For now, only one 3D model post
const posts = [
  {
    id: 1,
    title: 'Exploring 3D Models',
    excerpt: 'Dive into how we generate accurate 3D models of your site using photogrammetry.',
    category: 'Data Collection',
    image: '/3DThumbnail.png', // replace with your actual asset
    slug: '/blog/3d_model',
  },
  {
    id: 2,
    title: 'What is an Orthomosaic (2D) Map?',
    excerpt: 'An underrated asset people tend to look past.',
    category: 'Data Collection',
    image: '/orthothumbnail.jpg', // replace with your actual asset
    slug: '/blog/orthomosaic_blog',
  },
]

export default function BlogList() {
  const [filter, setFilter] = useState<string>('All')
  const [search, setSearch] = useState<string>('')

  // Filter and search logic
  const visiblePosts = posts.filter(
    (p) => (filter === 'All' || p.category === filter) &&
           p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filter + Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div>
          <label className="mr-2 font-medium">Filter by Category:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border rounded"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePosts.map((post) => (
          <Link
            key={post.id}
            href={post.slug}
            className="block bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-40 bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">{post.title}</h2>
              <p className="text-gray-700 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}