import React from 'react';
import MarketingDeliverables from '@/app/components/DeliverablesGrid/MarketingDeliverables';
import {
  Camera,
  BoxIcon,
  Smartphone,
  Film,
  ChartNoAxesCombined,
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  Eye,
} from 'lucide-react';

export default function Page() {
  return (
    <main>
      {/* Business Marketing Content Section */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          {/* Gradient Banner */}
          <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg shadow-lg p-12 mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Business Marketing Content</h2>
            <p className="text-lg">
              Elevate your brand with custom aerial & ground-based video content that captivates
              and converts across every platform.
            </p>
          </div>

          {/* What We Offer */}
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Camera className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Aerial Content Creation</h4>
              <p className="text-gray-600 text-sm">
                High-res drone footage for dynamic brand storytelling.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <BoxIcon className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">FPV Fly-Throughs</h4>
              <p className="text-gray-600 text-sm">
                Immersive first-person-view tours to showcase spaces and experiences.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Smartphone className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Short-Form Social Clips</h4>
              <p className="text-gray-600 text-sm">
                Ready-to-post, snackable videos optimized for Instagram, TikTok & Reels.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <ChartNoAxesCombined className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Brand Promo Videos</h4>
              <p className="text-gray-600 text-sm">
                Polished, on-brand films for your website, pitch decks, and events.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Sparkles className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">High-End Cinematics</h4>
              <p className="text-gray-600 text-sm">
                Cinematic storytelling with music, motion graphics, and color grading.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Film className="h-8 w-8 mx-auto text-teal-500 mb-4" />
              <h4 className="font-semibold mb-2">Tourism & Hospitality</h4>
              <p className="text-gray-600 text-sm">
                Showcase destinations, venues, and guest experiences in style.
              </p>
            </div>
          </div>

          {/* Why Choose SterFlies? */}
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Why Choose SterFlies?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow flex items-center p-6 border-l-4 border-teal-500">
              <ShieldCheck className="h-6 w-6 text-teal-500 mr-4" />
              <div>
                <h4 className="font-semibold">Creative Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Years of multimedia production & marketing know-how.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow flex items-center p-6 border-l-4 border-teal-500">
              <Target className="h-6 w-6 text-teal-500 mr-4" />
              <div>
                <h4 className="font-semibold">Audience Targeting</h4>
                <p className="text-gray-600 text-sm">
                  Content tailored to your ideal customer personas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow flex items-center p-6 border-l-4 border-teal-500">
              <Zap className="h-6 w-6 text-teal-500 mr-4" />
              <div>
                <h4 className="font-semibold">Fast Turnaround</h4>
                <p className="text-gray-600 text-sm">
                  Edited deliverables in 24–48 hrs to keep campaigns on schedule.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow flex items-center p-6 border-l-4 border-teal-500">
              <Eye className="h-6 w-6 text-teal-500 mr-4" />
              <div>
                <h4 className="font-semibold">Data-Driven</h4>
                <p className="text-gray-600 text-sm">
                  Viewer analytics & engagement insights to optimize performance.
                </p>
              </div>
            </div>
          </div>

          {/* Youtube embedded */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-blue-900 text-center mb-4">
              Watch an Example
            </h3>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7MaC9C4X_bI?si=wW9XUv86gmi_mgI9"
                title="SterFlies Demo Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Deliverables Grid from Vacant Land */}
          <MarketingDeliverables />
        </div>
      </section>
    </main>
  );
}
