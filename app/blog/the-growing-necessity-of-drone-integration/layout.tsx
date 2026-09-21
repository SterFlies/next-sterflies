import { pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Aerial Capture as One Documentation Method | SterFlies",
  description:
    "A legacy industry overview of aerial systems as one capture method. Kept live for existing links and removed from the current article index.",
  path: "/blog/the-growing-necessity-of-drone-integration",
  noindex: true,
})

export default function LegacyDroneArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
