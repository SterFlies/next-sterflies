import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import BrandMark from './components/BrandMark'
import SiteContainer from './components/SiteContainer'
import { capabilityLinks, serviceLinks, siteConfig } from './config/site'

const resourceLinks = [
  { href: '/blog', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/faq', label: 'FAQ' },
]

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms_conditions', label: 'Terms' },
]

const socialIcons = {
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
} as const

function LinkGroup({
  title,
  links,
}: {
  title: string
  links: readonly { href: string; label: string }[]
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="site-chrome mt-auto border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[#c8cdd3]">
      <SiteContainer className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8 lg:py-16">
        <div className="sm:col-span-2">
          <div className="text-white">
            <BrandMark showTagline />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {siteConfig.companyRelationship || siteConfig.relationshipFallback}
          </p>
          <p className="mt-5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-1 text-sm">{siteConfig.location}</p>
        </div>

        <LinkGroup title="Services" links={serviceLinks} />
        <LinkGroup title="Capabilities" links={capabilityLinks} />
        <LinkGroup title="Resources" links={resourceLinks} />
        <LinkGroup title="Company" links={companyLinks} />
      </SiteContainer>

      <div className="border-t border-white/10">
        <SiteContainer className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <form
            action={siteConfig.newsletter.action}
            method="post"
            target="_blank"
            className="relative max-w-xl"
          >
            <label htmlFor="footer-email" className="block text-sm font-medium text-white">
              Technical notes
            </label>
            <p className="mt-1 text-xs leading-relaxed">
              Occasional updates on field documentation methods. No promotional cadence.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                id="footer-email"
                type="email"
                name="EMAIL"
                required
                placeholder="Email address"
                className="min-h-11 w-full rounded-[6px] border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-[#8b929b]"
              />
              <button
                type="submit"
                name="subscribe"
                className="min-h-11 shrink-0 rounded-[6px] bg-white px-4 text-sm font-semibold text-[var(--color-ink)]"
              >
                Subscribe
              </button>
            </div>
            <div aria-hidden="true" className="absolute left-[-5000px]">
              <input type="text" name={siteConfig.newsletter.honeypot} tabIndex={-1} defaultValue="" />
            </div>
          </form>
          <div className="flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end">
            <ul className="flex gap-4">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons]
                return (
                  <li key={item.label}>
                    <a href={item.href} aria-label={item.label} className="hover:text-white">
                      <Icon size={16} />
                    </a>
                  </li>
                )
              })}
            </ul>
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </SiteContainer>
      </div>
    </footer>
  )
}
