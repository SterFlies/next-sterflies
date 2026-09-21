import React from "react"

export default function SiteContainer({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[80rem] px-[var(--page-pad-x)] ${className}`}>
      {children}
    </div>
  )
}
