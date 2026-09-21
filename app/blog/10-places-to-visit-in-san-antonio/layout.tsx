import { pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "10 Places to Visit in San Antonio | SterFlies",
  description:
    "A legacy San Antonio travel note kept live for existing links. It is not part of the current SterFlies technical documentation library.",
  path: "/blog/10-places-to-visit-in-san-antonio",
  noindex: true,
})

export default function TourismArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
