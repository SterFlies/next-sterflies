'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import BrandMark from './components/BrandMark'
import { primaryNav, serviceMenu, siteConfig } from './config/site'
import styles from './components/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAll()
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        const wasOpen = menuOpen || servicesOpen
        closeAll()
        if (wasOpen) burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen, servicesOpen])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const root = headerRef.current
    if (!root) return
    const focusable = Array.from(
      root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    ).filter((el) => el.offsetParent !== null)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !first || !last) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header ref={headerRef} className={`${styles.header} site-chrome`}>
      {menuOpen ? (
        <div className={styles.overlay} onClick={closeAll} aria-hidden="true" />
      ) : null}

      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" onClick={closeAll} className={styles.logo}>
          <BrandMark />
          <span className="sr-only"> home</span>
        </Link>

        <button
          ref={burgerRef}
          type="button"
          className={styles.burger}
          onClick={() => {
            setMenuOpen((open) => !open)
            setServicesOpen(false)
          }}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className={styles.burgerIcon} aria-hidden="true">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>

        <ul
          id="primary-navigation"
          className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
        >
          <li>
            <Link href="/" onClick={closeAll}>Home</Link>
          </li>

          <li ref={servicesRef} className={styles.dropdown}>
            <span className={styles.groupLabel}>Services</span>
            <button
              type="button"
              className={styles.dropdownToggle}
              aria-expanded={servicesOpen}
              aria-controls="services-submenu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services
              <span className={styles.chevron} aria-hidden="true">▾</span>
            </button>
            <ul
              id="services-submenu"
              className={styles.submenu}
              data-open={servicesOpen ? 'true' : 'false'}
            >
              {serviceMenu.map((group) => (
                <li key={group.label}>
                  <span className={styles.submenuLabel}>{group.label}</span>
                  <ul className={styles.submenuGroup}>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeAll}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          {primaryNav.filter((item) => item.href !== '/').map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeAll}>
                {item.label}
              </Link>
            </li>
          ))}

          <li className={styles.ctaItem}>
            <Link href={siteConfig.cta.href} onClick={closeAll} className={styles.cta}>
              {siteConfig.cta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
