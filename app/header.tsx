'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './components/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [thermalOpen, setThermalOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLLIElement>(null)

  const links: Array<[string, string]> = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/projects', 'Our Projects'],
    ['/blog', 'Blog'],
    ['/contact', 'Contact'],
  ]

  const closeAll = () => {
    setMenuOpen(false)
    setThermalOpen(false)
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
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  return (
    <header ref={headerRef} className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" onClick={closeAll} className={styles.logo}>
          <Image
            src="/logo.png"
            alt="SterFlies Logo"
            width={140}
            height={48}
            priority
          />
        </Link>

        <button
          type="button"
          className={styles.burger}
          onClick={() => { setMenuOpen(o => !o); setThermalOpen(false) }}
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
          {links.slice(0, 3).map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={closeAll}>{label}</Link>
            </li>
          ))}

          <li ref={dropdownRef} className={styles.dropdown}>
            <button
              type="button"
              onClick={() => setThermalOpen(o => !o)}
              aria-expanded={thermalOpen}
              aria-controls="thermal-submenu"
            >
              Thermal ▾
            </button>
            <ul id="thermal-submenu" className={styles.submenu}>
              <li>
                <Link href="/thermal/case-studies" onClick={closeAll}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/thermal/Applications" onClick={closeAll}>
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/thermal/method" onClick={closeAll}>
                  Process &amp; Method
                </Link>
              </li>
            </ul>
          </li>

          {links.slice(3).map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={closeAll}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
