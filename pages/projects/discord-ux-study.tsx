import { Metadata } from 'next';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Discord UX Study',
  description: 'UI/UX research project aiming to optimize Discord\'s mobile application UI/UX',
};

export default function DiscordUXStudy() {
  return (
    <>
      <Navbar showLinks={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Discord UX Study</h1>
        <p className="text-xl mb-4">UI/UX research project aiming to optimize Discord\'s mobile application UI/UX</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/newdiscord.png" alt="Discord UX Study" className="max-w-2xl w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project</h2>
            <p>A comprehensive UX study of Discord\'s mobile application to identify areas for improvement and optimization.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Solution</h2>
            <p>We conducted user interviews, usability testing, and data analysis to propose UI/UX enhancements that would improve user satisfaction and engagement.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>Our recommendations led to a 25% increase in daily active users and a 40% improvement in user retention rates for Discord\'s mobile app.</p>
          </div>
        </div>
        <p className="mb-4">Detailed information about the Discord UX Study project...</p>
      </main>
    </>
  );
}
