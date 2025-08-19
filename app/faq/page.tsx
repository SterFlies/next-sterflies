import React from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Are you insured?',
    answer: 'Absolutley! At SterFlies, we are covered by SkyWatch.AI Drone Insurance up to $2 million. We are fully trained and livensed under the FAA Part 107 Remote Pilot Certificate, which is mandatory for commercial drone operations. We will provide proof of insurance and license upon request.'
  },
  {
    question: 'What service areas do you cover?',
    answer: 'We operate throughout San Antonio and the Greater Texas Hill Country. Contact us for custom coverage needs.'
  },
  {
    question: 'How long is the turnaround time?',
    answer: 'Standard delivery for deliverables is within 5 business days after the flight. Rush orders can be accommodated on request.'
  },
  
  {
    question: 'Can you fly indoors?',
    answer: 'Yes! Due to FPV drones that are small and compact with prop guards that cover the entire propellar. Guarenteeing no damage to your property.'
  },
  {
  question: 'How do you send all the deliverables?',
  answer: 'Depends on the clients request. Google drive, dropbox, or even sending a zip file'
}
];

export default function FAQ() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Banner */}
      <div className="flex justify-center">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md inline-block">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-900">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
{/* FAQ Banner Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border rounded-lg p-4 shadow-sm">
                <summary className="cursor-pointer font-medium text-lg text-gray-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
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