import { Suspense } from "react"
import SiteContainer from "@/app/components/SiteContainer"
import { pageMetadata } from "@/app/config/site"
import { getFeaturedArticle } from "@/app/lib/articles"
import BlogArchive from "@/app/blog/BlogArchive"

const featuredArticle = getFeaturedArticle()

export const metadata = pageMetadata({
  title: "Articles | SterFlies",
  description:
    "Technical articles on forensic mapping, reality capture, site documentation, photogrammetry, thermal documentation, construction documentation, and spatial data.",
  path: "/blog",
  image: {
    url: featuredArticle.heroImage,
    width: 1200,
    height: 630,
    alt: featuredArticle.heroAlt,
  },
})

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <SiteContainer className="py-10">
          <h1 className="text-[2rem] font-semibold tracking-tight">Articles</h1>
        </SiteContainer>
      }
    >
      <BlogArchive />
    </Suspense>
  )
}
