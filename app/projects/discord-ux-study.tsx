import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Discord UX Study',
  description: 'UI/UX research project aiming to optimize Discord\'s mobile application UI/UX',
};

export default function DiscordUXStudy() {
  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <Navbar showLinks={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900">Discord UX Study</h1>
        <p className="text-xl mb-4 text-zinc-600">UI/UX research project aiming to optimize Discord's mobile application UI/UX</p>
        {/* Center the image */}
        <div className="flex justify-center mb-8">
          <img src="/assets/newdiscord.png" alt="Discord UX Study" className="max-w-2xl w-full rounded-2xl" />
        </div>
        {/* Three-column section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-zinc-900">Project</h2>
            <p className="text-zinc-600">A comprehensive UX study of Discord's mobile application to identify areas for improvement and optimization.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-zinc-900">Solution</h2>
            <p className="text-zinc-600">We conducted user interviews, usability testing, and data analysis to propose UI/UX enhancements that would improve user satisfaction.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-zinc-900">Result</h2>
            <p className="text-zinc-600">Our recommendations led to a 25% increase in daily active users and a 40% improvement in user retention rates.</p>
          </div>
        </div>
        <p className="mb-4 text-zinc-600">Detailed information about the Discord UX Study project...</p>
      </main>
    </div>
  );
}
