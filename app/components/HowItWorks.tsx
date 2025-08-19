// app/components/HowItWorks.tsx
import { MessageCircle, CalendarCheck, DownloadCloud } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: 'Tell Us About Your Project',
    description:
      'Tell us what you’re looking for—whether it’s a specific project, data requirement, or marketing idea. We’ll help shape the perfect aerial shoot to match your goals.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: 'We’ll Schedule a Flight',
    description:
      'Once we’ve got the details, we’ll schedule your drone flight with a certified pilot. We come to you—on time, every time.',
  },
  {
    icon: <DownloadCloud className="w-8 h-8 text-white" />,
    title: 'Download Your Aerial Imagery',
    description:
      'Your visuals are edited and delivered within 24 hours of the shoot—ready for download and ready to use.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {steps.map(({ icon, title, description }, i) => (
          <div key={i}>
            <div className="mx-auto bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
