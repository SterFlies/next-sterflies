"use client"

export default function PrintButton() {
  return (
    <button type="button" className="article-print article-no-print" onClick={() => window.print()}>
      Print / Save Article
    </button>
  )
}
