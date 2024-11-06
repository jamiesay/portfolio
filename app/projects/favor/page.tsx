import { Metadata } from 'next';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Flip App Project',
  description: 'Next-gen social media project',
};

export default function FavorProject() {
  return (
    <>
      <Navbar showLinks={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Favor</h1>
        <p className="text-xl mb-4">Bartering platform for students</p>
        {/* Center the image */}
        <div className="flex justify-center mb-8">
          <img src="/assets/favor_phone2.png" alt="Favor" className="max-w-sm w-full" />
        </div>
        {/* Three-column section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project</h2>
            <p>Flip App is a revolutionary social media platform designed to transform the way people connect and share content online.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Solution</h2>
            <p>We developed a unique algorithm that prioritizes meaningful interactions and promotes diverse content discovery, addressing common issues in traditional social media.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>Flip App has gained over 1 million active users within its first year, with engagement rates 3x higher than industry averages and a 95% user satisfaction rate.</p>
          </div>
        </div>
        <p className="mb-4">Detailed information about the Flip App project...</p>
      </main>
    </>
  );
}
