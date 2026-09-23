"use client"

import { useEffect, useState } from "react"

type TocItem = { id: string; label: string }

function slugify(value: string) {
  const base = value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return base || "section"
}

export default function ArticleToc() {
  const [items, setItems] = useState<TocItem[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const root = document.querySelector(".article-body")
      if (!root) return
      const used = new Set<string>()
      const next: TocItem[] = []
      root.querySelectorAll("h2").forEach((heading) => {
        const label = heading.textContent?.replace(/\s+/g, " ").trim()
        if (!label) return
        let id = heading.id || slugify(label)
        if (used.has(id)) {
          let n = 2
          while (used.has(`${id}-${n}`)) n += 1
          id = `${id}-${n}`
        }
        used.add(id)
        heading.id = id
        next.push({ id, label })
      })
      if (next.length >= 3) setItems(next)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!items.length) return null

  return (
    <nav className="article-toc context-module" aria-label="In this article">
      <div className="article-toc-head">
        <h2 className="context-kicker">In this article</h2>
        <button
          type="button"
          className="toc-toggle"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <ol className={`toc-list${open ? " is-open" : ""}`}>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
