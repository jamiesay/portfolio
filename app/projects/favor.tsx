import { Metadata } from 'next';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Favor Project',
  description: 'Next gen bartering app for college students',
};

export default function FavorProject() {
  return (
    <>
      <Navbar showLinks={false} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Favor</h1>
        <p className="text-xl mb-4">Next gen bartering app for college students</p>
        <div className="flex justify-center mb-8">
          <img src="/assets/another.png" alt="Favor" className="max-w-2xl w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project</h2>
            <p>Favor is an innovative bartering platform designed specifically for college students to exchange services and items.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Solution</h2>
            <p>We developed a user-friendly interface that allows students to easily list their skills or items and find what they need, promoting a collaborative and resourceful community.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>Favor has been adopted by over 50 college campuses, with a 90% user satisfaction rate and an average of 5,000 successful trades per month.</p>
          </div>
        </div>
        <p className="mb-4">Detailed information about the Favor project...</p>
      </main>
    </>
  );
}
