// app/monthly-vloumetric-reporting_blog/page.tsx
'use client'
import Image from "next/image";
import Link from "next/link";

export default function MonthlyVolumetricReportingBlogPage() {
  return (
    <div className="bg-white py-20">
      <article className="mx-auto px-4 max-w-3xl prose prose-blue prose-xl leading-relaxed">
        {/* Typography spacing overrides (scoped globally so they apply to .prose descendants) */}
        <style jsx>{`
          :global(.prose h1) { margin-bottom: 0.6em; line-height: 1.2; }
          :global(.prose h2) { margin-top: 2.2em; margin-bottom: 0.7em; line-height: 1.25; }
          :global(.prose p),
          :global(.prose blockquote),
          :global(.prose li) { line-height: 2; }
          :global(.prose blockquote) { margin-top: 1.25em; margin-bottom: 1.25em; }
          :global(.prose ul), :global(.prose ol) { margin-top: 1em; margin-bottom: 1.5em; }
          :global(.prose figure) { margin-top: 2rem; margin-bottom: 2rem; }
          /* Extra space between the header (title/author/date) and the first paragraph */
          :global(header + div) { margin-top: 1.25rem; }
        `}</style>

        {/* Header */}
        <header className="space-y-4 mb-10">
          <Image
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755284644/VThumbnail_spcyfg.png"
            alt="Drone view of aggregate stockpiles ready for volumetric measurement"
            width={1200}
            height={630}
            className="rounded-lg shadow-md"
            priority
          />

          <hr className="my-16 border-gray-300" />

          <h1 className="text-4xl font-bold leading-tight">
            Why Monthly Stockpile Reporting Beats the “Once-a-Year” Mindset
          </h1>

          <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling — Chief Pilot</p>
            <time dateTime="2025-08-15">August 15, 2025</time>
          </div>
        </header>

        {/* Lead */}
        <div>
          <p className="text-gray-700">
            Stop waiting 12 months to find out what you’ve lost. In conversations with
            yard managers, quarry supervisors, and material suppliers, we hear the same thing:
          </p>
        </div>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-lg text-gray-700">
          “We only measure our stockpiles once a year — usually at year-end.”
        </blockquote>

        <p>
          Annual reporting might satisfy your accountant, but it won’t protect your margins
          the other 11 months of the year.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* Hidden Costs */}
        <h2 className="text-center text-4xl font-bold">The Hidden Costs of Annual Reporting</h2>
        <p>
          Material shrinkage, overuse, wind, or moisture swings don’t wait for December.
          By the time you see the numbers, it’s too late to correct course — the cost is
          already baked into your year.
        </p>
        <p>
          Even a “small” discrepancy of <strong>2%</strong> on a <strong>$1M</strong> aggregate
          stockpile equals <strong>$20,000</strong> gone without a trace — and you’ll only
          discover it months after it happened. Meanwhile, over-purchasing to compensate for
          perceived shortages quietly inflates spend all year.
        </p>

        <figure className="my-16">
          <Image
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755283328/v1_nfpjos.png"
            alt="Costs graphic"
            width={700}
            height={400}
            className="rounded border-2 border-blue-500"
          />
        </figure>

        <hr className="my-16 border-gray-300" />

        {/* Monthly Control */}
        <h2 className="text-center text-4xl font-bold">Monthly Reporting = Monthly Control</h2>
        <p>
          Switching to monthly reporting turns stockpile measurement from a passive accounting
          step into an active management tool.
        </p>
        <ul>
          <li>
            <strong>Spot usage trends early</strong> → Identify spikes in demand or waste before
            they balloon into budget problems.
          </li>
          <li>
            <strong>Avoid emergency orders</strong> → Prevent costly downtime when material
            unexpectedly runs out.
          </li>
          <li>
            <strong>Catch measurement errors</strong> → Detect loading miscounts, environmental
            loss, or quality issues while they can still be corrected.
          </li>
          <li>
            <strong>Support better forecasting</strong> → Align inventory with upcoming projects
            and seasonal changes.
          </li>
        </ul>
        <p>
          Monthly numbers aren’t just a “nice to have” — they’re a <strong>strategic advantage</strong>.
        </p>

        <figure className="my-16">
          <Image
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1753656043/Screenshot_2025-07-27_123735_qjb0jh.png"
            alt="Map of stockpile volumes"
            width={400}
            height={200}
            className="mx-auto rounded border-2 border-green-500"
          />
        </figure>

        <hr className="my-16 border-gray-300"/>

        {/* Bottom Line Benefits */}
        <h2 className="text-center text-4xl font-bold">Better for Your Bottom Line</h2>
        <ul>
          <li><strong>Reduce overstock</strong> that ties up capital and yard space.</li>
          <li><strong>Order with precision</strong> so you’re never under- or over-supplied.</li>
          <li><strong>Lower handling costs</strong> by moving only what you actually need.</li>
        </ul>
        <p>
          One operation reduced year-end write-offs by <strong>85%</strong> after switching to
          drone-based monthly reporting — saving over <strong>$40,000</strong> in one year.
          Another site identified recurring overloading errors that were costing an estimated{" "}
          <strong>$12,000 per quarter</strong> in lost material.
        </p>

        <hr className="my-16 border-gray-300" />

        {/* Ops & Safety */}
        <h2 className="text-center text-4xl font-bold">Operational &amp; Safety Gains</h2>
        <p>
          Accurate, frequent reporting improves day-to-day operations in ways that go far beyond accounting.
        </p>
        <ul>
          <li>Optimize haul routes and loader assignments.</li>
          <li>Keep piles organized and avoid dangerous overfills.</li>
          <li>Maintain a yard layout that reduces wasted time and fuel.</li>
          <li>Document inventory for insurance or compliance needs in case of a dispute.</li>
        </ul>

        <hr className="my-16 border-gray-300" />

        {/* Technology */}
        <h2 className="text-center text-4xl font-bold">Technology Makes It Simple</h2>
        <p>
          The days of shutting down operations for manual measurements are over. Modern drone and photogrammetry
          workflows can scan your site in under an hour without interrupting production. Within the same day, you’ll
          have a highly accurate volumetric report — with clear charts and historical comparisons — ready to share with
          management, accounting, or your clients.
        </p>
        <figure>
          <Image
            src="https://res.cloudinary.com/dzlmoyomq/image/upload/v1755283537/v3_adjqru.png"
            alt="Sample monthly stockpile volumetric report with trendlines and comparisons"
            width={1200}
            height={720}
            className="rounded-md border"
          />
        </figure>

        <hr className="my-16 border-gray-300" />

        {/* Bottom Line */}
        <h2 className="text-center text-4xl font-bold">The Bottom Line</h2>
        <p>
          Annual reporting may check the compliance box, but it doesn’t help your operations or your profits. Monthly
          reporting gives you real-time control over inventory, costs, and efficiency. If your piles are worth hundreds
          of thousands of dollars, isn’t it worth checking them more than once a year?
        </p>

        <hr className="my-16 border-gray-300" />

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">Tell Us About Your Project!</h3>
            <p className="text-gray-700">We will respond within 24hrs</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="mailto:jerome.sterling@sterflies.com?subject=Inquiry"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
              >
                Email Us!
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border px-5 py-3 font-medium hover:bg-gray-50"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}



