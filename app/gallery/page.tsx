"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// Custom loader for Cloudinary images
const cloudinaryLoader = ({ src }: { src: string }) => src;

// Categories for filtering photos and videos
const categories = [
  { key: 'all', label: 'Show All' },
  { key: 'real-estate', label: 'Real Estate' },
  { key: 'construction', label: 'Construction' },
  { key: 'mapping', label: 'Mapping' },
  { key: 'promos', label: 'Business Promos' },
  { key: 'thermal', label: 'Thermal' },
  { key: 'misc', label: 'Miscellaneous' },
];

// Photo gallery items
const items = [
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1742397256/Back_view_of_Property_with_Boundary_Overlay_abzf9m.jpg',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1742397256/Back_view_of_Property_with_Boundary_Overlay_abzf9m.jpg',
    title: 'Vacant Land with Boundary Overlay',
    category: 'real-estate',
  },
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1742397050/Orthomosaic_Map_with_Boundary_Overlay_ysxgcz.png',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1742397050/Orthomosaic_Map_with_Boundary_Overlay_ysxgcz.png',
    title: 'Orthomosaic map of 7.5 acres w Overlay',
    category: 'mapping',
  },
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1741107796/Property_Map_Large_pcuwt9.jpg',
    title: 'Orthomosaic map of 36 acres for land owner',
    category: 'mapping',
  },
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1740842232/BackView_with_Property_Lines_tqcmkw.jpg',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/c_scale,w_400/v1740842232/BackView_with_Property_Lines_tqcmkw.jpg',
    title: 'Vacant Land with Property Line',
    category: 'real-estate',
  },
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1740842242/BirdsEye_SideView_with_Property_Lines_zgshju.jpg',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1740842242/BirdsEye_SideView_with_Property_Lines_zgshju.jpg',
    title: 'Vacant Land with Property Line',
    category: 'real-estate',
  },
  {
    src: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752625251/website_sample_photo_hdcf0b.jpg',
    thumb: 'https://res.cloudinary.com/dzlmoyomq/image/upload/v1752625251/website_sample_photo_hdcf0b.jpg',
    title: 'Scenic Overview Shot',
    category: 'promos',
  },
  // ... add other items here
];

// Video embed items
const videos = [
  {
    url: 'https://www.youtube.com/embed/2MaRlsLcMck?si=QuSp3IdQL97T2Eqk',
    title: 'Newly Built Home Showcase in La Vernia Tx',
    category: 'construction',
  },
  {
    url: 'https://www.youtube.com/embed/7MaC9C4X_bI?si=wW9XUv86gmi_mgI9',
    title: 'Sojourn Lodging Promo',
    category: 'promos',
  },
  {
    url: 'https://www.youtube.com/embed/y5j7r_UP4bU',
    title: 'Small Business Promo',
    category: 'promos',
  },
  {
    url: 'https://www.youtube.com/embed/FqwcYSAEBg0?si=HAyMmLDvy76Srg8r',
    title: 'New Roof Build Showcase',
    category: 'construction',
  },
  {
    url: 'https://www.youtube.com/embed/Kn4Il4G_K9Y?si=ygJUPbXz-N4PfblQ',
    title: 'Press Coffee Co Farmers Market',
    category: 'promos',
  },
  // ... additional videos here
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter photos
  const filteredPhotos =
    filter === 'all' ? items : items.filter(item => item.category === filter);

  // Filter videos using the same filter
  const filteredVideos =
    filter === 'all' ? videos : videos.filter(video => video.category === filter);

  const openViewer = (i: number) => setSelectedIndex(i);
  const closeViewer = () => setSelectedIndex(null);
  const prev = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex + filteredPhotos.length - 1) % filteredPhotos.length);
  const next = () =>
    selectedIndex !== null &&
    setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Gallery
      </h1>

      {/* Shared Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`px-4 py-2 rounded-full border font-medium ${
              filter === cat.key
                ? 'bg-[#00a2ff] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {filteredPhotos.map((item, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-lg bg-gray-100 cursor-pointer"
            onClick={() => openViewer(idx)}
          >
            <Image
              loader={cloudinaryLoader}
              src={item.thumb}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
            />
            <div className="p-2 text-center font-semibold text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Photo Lightbox Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="relative bg-black border-4 border-white p-4 max-w-3xl w-full max-h-[80vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] mb-4">
              <Image
                loader={cloudinaryLoader}
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white text-sm mb-4">
              {filteredPhotos[selectedIndex].title}
            </div>
            <div className="flex items-center gap-8">
              <button
                onClick={prev}
                className="p-2 text-white text-3xl hover:bg-white/10 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={closeViewer}
                className="px-4 py-2 bg-white text-black rounded-full font-medium"
              >
                Close
              </button>
              <button
                onClick={next}
                className="p-2 text-white text-3xl hover:bg-white/10 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Separator */}
      <hr className="my-16 border-gray-300" />

      {/* Video Section - hidden when Thermal category selected */}
      {filter !== 'thermal' && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Videos</h2>
          <h3 className="text-lg md:text-xl text-center mb-8">Click 4K on YouTube to truly see the quality</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video, idx) => (
              <div key={idx}>
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {video.title && (
                  <div className="mt-2 text-center font-medium">{video.title}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
