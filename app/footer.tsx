// components/Footer.tsx

import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: contact + socials */}
        <div className="space-y-4 text-center lg:text-left">
          <p>10515 Weser Ln, Helotes, TX 78023</p>
          <p>
            <a href="mailto:jerome.sterling@sterflies.com" className="hover:text-white">
              jerome.sterling@sterflies.com
            </a>
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/jeromesterling/" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://youtube.com/@SterFlies" aria-label="YouTube" className="hover:text-white">
              <FaYoutube size={20} />
            </a>
            <a href="https://instagram.com/sterflies" aria-label="Instagram" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/SterFlies" aria-label="Facebook" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Right: quick links */}
        <div className="text-center lg:text-right">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms_conditions" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} SterFlies LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
