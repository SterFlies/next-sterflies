"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [thermalOpen, setThermalOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThermalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto grid grid-cols-3 items-center py-4">
        {/* Logo on the left */}
        <div className="justify-self-start">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="SterFlies Logo"
              width={200}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Centered nav links */}
        <ul className="col-span-1 flex justify-center space-x-8 text-gray-700 justify-self-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setThermalOpen(o => !o)}
              className="flex items-center hover:text-blue-600 focus:outline-none"
              aria-expanded={thermalOpen}
            >
              Thermal
              <span
                className={`ml-1 transform transition-transform duration-200 ${
                  thermalOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            {thermalOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray shadow-lg rounded z-50 divide-y divide-gray-100">
                <li>
                  <Link
                    href="/thermal/case-studies"
                    className="block px-6 py-2 hover:text-blue-600"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/thermal/Applications"
                    className="block px-6 py-2 hover:text-blue-600"
                  >
                    Applications 
                  </Link>  
                </li>
                <li>
                  <Link
                    href="/thermal/method"
                    className="block px-6 py-2 hover:text-blue-600"
                  >
                    Process & Method 
                  </Link>  
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/gallery" className="hover:text-blue-600">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right placeholder for symmetry */}
        <div className="justify-self-end" />
      </nav>
    </header>
);
}