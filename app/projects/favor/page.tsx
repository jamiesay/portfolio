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
        <p className="text-l italic mb-4">Favor is a bartering app designed specifically for college students to exchange services and goods within their campus community. Improving peer-to-peer exchange efficiency and promoting a sense of community engagement were primary goals from the outset. Favor's unique approach centers on a streamlined, user-friendly interface tailored to student needs, making it easy to request and offer services on a flexible basis.</p>
        {/* Center the image */}
        <div className="flex justify-center mb-8">
          <img src="/assets/favor_phone2.png" alt="Favor" className="max-w-sm w-full" />
        </div>
         {/* Five-column section */}
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Role</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Founder<br/ > Lead Product Designer</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">July 2024 - Now</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Team</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Business Lead<br/ >Marketing Lead<br/>Financial Manager</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Product Design<br />User Research<br />Visual Design</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Tools</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Figma<br /> React<br />Typescript</p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Three-column section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Project</h2>
            <p>While Favor was a successfully developed concept, we faced the challenge of creating the most effective user interface for our customers. The goal of the platform is to create an online space for the exchange of goods and services between college students in the same geographical area. In the product design, I needed to create an interface that was easy to navigate for college students, supported browsing of goods and services, and the point of exchange itself. 
            </p>
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
