// app/contact/page.tsx
'use client';

import Script from 'next/script';
import { Mail, MapPin, CalendarClock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 to-white">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900">
            Get In Touch
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Pick a time that works for you—schedule a call or send an email. We&apos;re here to help with your next project!
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: Info card */}
          <aside className="rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-50 p-2">
                  <Mail className="size-5 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Email</h2>
                  <a
                    href="mailto:jerome.sterling@sterflies.com"
                    className="text-blue-600 hover:underline break-all"
                  >
                    jerome.sterling@sterflies.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-50 p-2">
                  <MapPin className="size-5 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Location</h2>
                  <p className="text-gray-700">San Antonio, TX</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-50 p-2">
                  <CalendarClock className="size-5 text-blue-700" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Response Time</h2>
                  <p className="text-gray-700">Usually within one business day.</p>
                </div>
              </div>

              <hr className="my-4 border-gray-200" />

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-green-600" />
                  No spam—ever. We only use your info to reply.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-green-600" />
                  Clear scope & deliverables on every engagement.
                </li>
              </ul>
            </div>
          </aside>

          {/* Right: Calendly card */}
          <div className="rounded-2xl bg-white p-2 md:p-3 shadow-sm ring-1 ring-black/5">
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
            <div
              className="calendly-inline-widget rounded-xl"
              data-url="https://calendly.com/sterling-spear74?hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '100%', height: '740px' }} // adjust height if you like
              aria-label="Calendly scheduling widget"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
