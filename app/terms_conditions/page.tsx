import Link from 'next/link'



export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-8">
      {/* ——— Title ——— */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="text-lg leading-relaxed">
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of SterFlies’ services and products (the &quot;Services&quot;). By visiting our website, using our Services, or purchasing our products, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, you must not access or use the Services.
        </p>
      </section>

      {/* ——— Eligibility / Age Requirement ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Eligibility</h2>
        <p className="text-lg leading-relaxed">
          You must be at least 18 years old to use our Services. By accessing or using the Services, you represent and warrant that you are 18 years of age or older. If you use the Services on behalf of an organization, you further represent and warrant that you have the authority to bind that organization to these Terms.
        </p>
      </section>

      {/* ——— User Accounts ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">User Accounts</h2>
        <p className="text-lg leading-relaxed">
          To access certain features, you may be required to register for an account and provide accurate information. You agree to maintain the confidentiality of your account credentials and are responsible for all activity under your account. You must notify us immediately of any unauthorized use.
        </p>
      </section>

      {/* ——— Payment & Refund Terms ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Payment &amp; Refunds</h2>
        <p className="text-lg leading-relaxed">
          All fees are quoted in USD unless otherwise indicated. Payments are due upon receipt of invoice. You agree to provide accurate billing information. Refunds, if any, are granted at our sole discretion and governed by our <a href="/refund-policy" className="text-blue-600 underline">Refund Policy</a>.
        </p>
      </section>

      {/* ——— User-Generated Content ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">User-Generated Content</h2>
        <p className="text-lg leading-relaxed">
          You retain ownership of any content you submit (photos, videos, feedback). By submitting content, you grant us a perpetual, worldwide, royalty-free license to use, reproduce, and display such content in connection with our Services. You represent that you own or have permission to use the content and that it does not violate any rights of third parties.
        </p>
      </section>

      {/* ——— Prohibited Conduct ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Prohibited Conduct</h2>
        <p className="text-lg leading-relaxed">
          You agree not to:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Interfere with or disrupt our Services or servers;</li>
          <li>Upload malware or malicious code;</li>
          <li>Use robots, spiders, or other automated means to access or scrape data;</li>
          <li>Impersonate any person or entity or misrepresent your affiliation;</li>
          <li>Violate any applicable law, regulation, or third-party rights.</li>
        </ul>
      </section>

      {/* ——— Third-Party Links & Services ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Third-Party Links</h2>
        <p className="text-lg leading-relaxed">
          Our Services may contain links to third-party websites or services that we do not control. We are not responsible for their content or practices. Your use of third-party links is at your own risk, and we encourage you to review their terms and privacy policies.
        </p>
      </section>

      {/* ——— Modifications to Service ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Modifications to Service</h2>
        <p className="text-lg leading-relaxed">
          We reserve the right to update, modify, or discontinue any aspect of the Services at any time, without notice. We will not be liable for any changes or interruptions.
        </p>
      </section>

      {/* ——— Intellectual Property ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Intellectual Property</h2>
        <p className="text-lg leading-relaxed">
          All rights, title, and interest in and to the Services, including all content, trademarks, and software, are owned by SterFlies or its licensors. You may not copy, modify, distribute, or create derivative works without our express permission.
        </p>
      </section>

      {/* ——— Disclaimer of Warranties ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
        <p className="text-lg leading-relaxed">
          The Services are provided &quot;AS IS,&quot; without warranties of any kind, express or implied. To the fullest extent permitted by law, we disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      {/* ——— Limitation of Liability ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
        <p className="text-lg leading-relaxed">
          In no event shall SterFlies, its officers, directors, or employees be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with your use of the Services.
        </p>
      </section>

      {/* ——— Indemnification ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Indemnification</h2>
        <p className="text-lg leading-relaxed">
          You agree to indemnify and hold harmless SterFlies from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising from your use of the Services or violation of these Terms.
        </p>
      </section>

      {/* ——— Termination ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Termination</h2>
        <p className="text-lg leading-relaxed">
          We may suspend or terminate your access to the Services at any time, with or without cause or notice, if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
        </p>
      </section>

      {/* ——— Governing Law ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Governing Law</h2>
        <p className="text-lg leading-relaxed">
          These Terms shall be governed by the laws of the State of Texas, without regard to conflict of law principles.
        </p>
      </section>

      {/* ——— Dispute Resolution ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dispute Resolution</h2>
        <p className="text-lg leading-relaxed">
          Any dispute arising under these Terms will be resolved by binding arbitration in Travis County, Texas, under the rules of the American Arbitration Association. You waive any right to a jury trial.
        </p>
      </section>

      {/* ——— Changes to These Terms ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
        <p className="text-lg leading-relaxed">
          We may revise these Terms from time to time. Updated Terms will be effective when posted. Your continued use of the Services after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      {/* ——— Contact ——— */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          If you have questions or concerns about these Terms, please contact us at <a href="mailto: jerome.sterling@sterflies.com" className="text-blue-600 underline">legal@sterflies.com</a>.
        </p>
      </section>
      
      <Link href="/">
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
            Return to Home
          </button>
        </Link>
    </main>
  );
}
