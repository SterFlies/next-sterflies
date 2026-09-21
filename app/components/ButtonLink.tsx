import Link from "next/link"
import React from "react"

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    >
      {children}
    </Link>
  )
}
