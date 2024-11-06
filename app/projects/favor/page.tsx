import { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Flip App Project',
  description: 'Next-gen social media project',
};

export default function FavorProject() {
  return (
    <>
      <Navbar showLinks={false} />
      <main className="container mx-auto px-4 py-8">

        <div className="flex items-center gap-4 mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </Link>
          <h1 className="text-4xl font-bold">Favor</h1>
        </div>
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
            <p>
              <strong>Enhanced Onboarding Process:</strong> Introduced an onboarding flow designed to familiarize new users with Favor's core features quickly and intuitively, emphasizing the ease of listing requests and offers. This included a simplified, visually engaging step-by-step guide for new users to list their first favor or browse existing offers.<br/ >
              <strong>Interactive Tutorial on Posting and Searching for Favors:</strong> Added interactive tooltips and prompts to help users explore how to post, search, and respond to favors, highlighting popular and community-centric exchanges like tutoring and study material sharing.<br />
              <strong>In-App Gamification to Boost Engagement:</strong> Designed a reward system that incentivizes users to complete various actions, such as listing or completing their first favor, to build early engagement and establish a habit of activity on the platform.<br />
              <strong>Improved UI for Service Discovery:</strong> Optimized the interface to make browsing and searching for services more intuitive, ensuring that users could quickly connect with peers needing similar services.<br />
              <strong>Backend Enhancements for Real-Time Updates:</strong> Built and integrated real-time notifications for responses to posted favors, helping users stay engaged and respond promptly, enhancing user interaction and satisfaction.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>The introduction of these solutions yielded significant improvements in engagement metrics:<br/ >
            <br />
            <strong>32% Increase in Active Engagement:</strong> The percentage of active users increased by 32% post-launch, with more users posting and completing favors.<br/ >
            <strong>Improved Feature Discoverability:</strong> Feedback indicated that the interactive tutorial and onboarding flow helped users understand and use core features, reducing the learning curve.<br/ >
            <strong>Positive User Feedback on Usability:</strong> Surveyed users reported higher satisfaction with Favor’s ease of use and accessibility, noting that they were more likely to recommend it to peers due to its simplicity and utility.<br/ >
            <br />
            <strong>These changes helped position Favor as a compelling, community-oriented platform that made peer exchanges easy and accessible, leading to higher user satisfaction and activity.</strong></p>
          </div>
        </div>
        {/* <p className="mb-4">Detailed information about the Flip App project...</p> */}
      </main>
    </>
  );
}
