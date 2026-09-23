import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import BrandMark from './components/BrandMark'
import SiteContainer from './components/SiteContainer'
import { serviceNav, siteConfig } from './config/site'

const companyLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms_conditions', label: 'Terms' },
  { href: '/faq', label: 'FAQs' },
]

const socialIcons = {
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
} as const

export default function Footer() {
  return (
    <footer className="site-chrome mt-auto border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[#c8cdd3]">
      <SiteContainer className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div>
          <div className="text-white">
            <BrandMark showTagline />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            {siteConfig.companyRelationship || siteConfig.relationshipFallback}
          </p>
          <p className="mt-5 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-1 text-sm">{siteConfig.location}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceNav.filter((item) => item.href !== '/services').map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <form
            action={siteConfig.newsletter.action}
            method="post"
            target="_blank"
            className="relative mt-8"
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
        </div>
      </SiteContainer>

      <div className="border-t border-white/10">
        <SiteContainer className="flex flex-col gap-4 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
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
        </SiteContainer>
      </div>
    </footer>
  )
}
