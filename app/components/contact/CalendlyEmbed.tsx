"use client"

import Script from "next/script"

export default function CalendlyEmbed() {
  return (
    <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/sterling-spear74?hide_landing_page_details=1&hide_gdpr_banner=1"
        style={{ minWidth: "100%", height: "740px" }}
        aria-label="Schedule a consultation"
      />
    </div>
  )
}
