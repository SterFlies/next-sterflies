'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './components/Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [thermalOpen, setThermalOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Close the thermal submenu if you click outside it
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThermalOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const links: Array<[string, string]> = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/gallery', 'Gallery'],
    ['/blog', 'Blog'],
    ['/contact', 'Contact'],
  ]

  const closeAll = () => {
    setMenuOpen(false)
    setThermalOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" onClick={closeAll} className={styles.logo}>
          <Image src="/logo.png" alt="SterFlies Logo" width={160} height={64} />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          className={styles.burger}
          onClick={() => { setMenuOpen(o => !o); setThermalOpen(false) }}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation links */}
        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          {links.slice(0, 3).map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={closeAll}>{label}</Link>
            </li>
          ))}

          {/* Thermal dropdown */}
          <li ref={dropdownRef} className={styles.dropdown}>
            <button
              onClick={() => setThermalOpen(o => !o)}
              aria-expanded={thermalOpen}
            >
              Thermal ▾
            </button>
            <ul className={styles.submenu}>
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
