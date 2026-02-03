// components/BlogList.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ✅ Cloudinary loader (returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// ✅ helper: detect Cloudinary URL
const isCloudinaryUrl = (src: string) =>
  src.startsWith('https://res.cloudinary.com/')

// Categories for filtering
const categories = [
  'All',
  'Construction',
  'Land',
  'Marketing',
  'Thermal Solutions',
  'Data Collection',
  'Forensic Documentation', 
]

// list
const posts = [
  {
    id: 1,
    title: 'Exploring 3D Models',
    excerpt: 'Dive into how we generate accurate 3D models of your site using photogrammetry.',
    category: 'Data Collection',
    // ✅ Swap to Cloudinary whenever you’re ready:
    // image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/f_auto,q_auto,w_1200/blog/thumbs/3DThumbnail.png',
    image: '/3DThumbnail.png',
    slug: '/blog/3d_model',
  },
  {
    id: 2,
    title: 'What is an Orthomosaic (2D) Map?',
    excerpt: 'An underrated asset people tend to look past.',
    category: 'Data Collection',
    image: '/TOPO_DEMO_transparent_mosaic_group1.png',
    slug: '/blog/orthomosaic_blog',
  },
  {
    id: 3,
    title: 'Volumetric Data Explained: Aerial Insights for Smarter Site Decisions',
    excerpt: 'Understanding how drone data can save time and resources',
    category: 'Data Collection',
    image: '/stockpile.png',
    slug: '/blog/volumetric_blog',
  },
  {
    id: 4,
    title: 'Topographic Maps: Unlocking Knowledge with Topographic Maps',
    excerpt: 'Undertsanding Topographic Maps',
    category: 'Data Collection',
    image: '/STERFLIES_TOPODEMO.png',
    slug: '/blog/topography_blog',
  },
  {
    id: 5,
    title: "Thermal Imaging 101: How to Spot What the Eye Can't See",
    excerpt: 'Thermal Data Saves Time & Resources',
    category: 'Thermal Solutions',
    image: '/ThermalThumb.png',
    slug: '/blog/thermal101_blog',
  },
  {
    id: 6,
    title: 'Why Monthly Stockpile Reporting Beats the "Once-a-Year" Mindset',
    excerpt: `Stop waiting 12 months to find out what you've lost`,
    category: 'Data Collection',
    image: '/VThumbnail.png',
    slug: '/blog/monthly-volumetric-reporting_blog',
  },
  {
    id: 7,
    title: 'Why Site Conditions Should Be Documented Before they are Altered',
    excerpt: 'Document to support your findings',
    category: 'Forensic Documentation',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1767906103/Screenshot_2026-01-08_145836_zgatsw.png',
    slug: '/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog',
  },
  {
    id: 8,
    title: 'Why Existing Conditions Documentation is Critical for Environmental & IH Investigations',
    excerpt: 'Preserve site conditions with objective visual records',
    category: 'Forensic Documentation',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768151899/Mold-Inspection-image-5_ceiqaj.webp',
    slug: '/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations',
  },
  {
    id: 9,
    title: 'Documenting Site Conditions for Mold Assessments and Supporting Safety Decisions',
    excerpt: 'How visual records can enhance your mold assessment process',
    category: 'Forensic Documentation',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png',
    slug: '/blog/documenting-mold-assessments-and-supporting-safety-decisions',
  },
  {
    id: 10,
    title: '10 Places to Visit in San Antonio',
    excerpt: 'Discover the top attractions and hidden gems in San Antonio, Texas.',
    category: 'Land',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770054988/csm_favorite_alamo_29649f9bee_t6c95f.jpg',
    slug: '/blog/10-places-to-visit-in-san-antonio',
  },
  {
    id: 11,
    title: 'Documenting Site Conditions for Construction Defect Litigation',
    excerpt: 'How interactive scans can provide crucial evidence in construction disputes',
    category: 'Construction',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770059287/constructiondelay_gfs4si.png',
    slug: '/blog/documenting-site-conditions-for-construction-defect-litigation',
  },
  {
    id: 12,
    title: 'Construction Progress Monitoring Best Practices',
    excerpt: 'Maximizing Efficiency and Accuracy with Drone Technology',
    category: 'Construction',
    image: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770156435/drone_iomryo.webp',
    slug: '/blog/construction-progress-monitoring-best-practices',
  }
]

export default function BlogList() {
  const [filter, setFilter] = useState<string>('All')
  const [search, setSearch] = useState<string>('')

  // Filter and search logic
  const visiblePosts = posts.filter(
    (p) =>
      (filter === 'All' || p.category === filter) &&
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
              <option key={cat} value={cat}>
                {cat}
              </option>
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
                // ✅ Only use Cloudinary loader when it’s a Cloudinary URL
                loader={isCloudinaryUrl(post.image) ? cloudinaryLoader : undefined}
                // ✅ Small perf boost (optional)
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
