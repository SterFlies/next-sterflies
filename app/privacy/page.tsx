'use client';

import React from 'react';
import Link from 'next/link';



export default function privacy() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-lg leading-relaxed">
          Welcome to SterFlies. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Personal Information: Name, email address, phone number when you contact us via forms.</li>
          <li>Usage Data: Pages visited, time spent on pages, and click-through analytics.</li>
          <li>Cookies: We use cookies to improve site experience. You can disable them in your browser settings.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>Providing and maintaining our services.</li>
          <li>Responding to inquiries and support requests.</li>
          <li>Analyzing site traffic and improving user experience.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
        <p className="text-lg leading-relaxed">
          We do not sell or rent your personal information. We may share data with third-party service providers for analytics and hosting, under strict confidentiality agreements.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p className="text-lg leading-relaxed">
          You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at <a href="mailto:jerome.sterling@sterflies.com" className="text-blue-600 underline">privacy@sterflies.com</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p className="text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date.
        </p>
      </section>

      <section className="text-center">
        <Link href="/">
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
            Return to Home
          </button>
        </Link>
      </section>
    </main>
  );
}
