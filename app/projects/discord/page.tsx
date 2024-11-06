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
          <h1 className="text-4xl font-bold">Discord</h1>
        </div>
        <p className="text-l italic mb-4">With the launch of their new beta version of their mobile app, Discord needed to ensure their new features maintained intuition and increased college student engagement. Analyzing each interactive feature on impact and usability, I led the redesign and key recommendations that influenced features in Discord’s most recent mobile application update.</p>
        {/* Center the image */}
        <div className="flex justify-center mb-8">
          <img src="/assets/discord_phone2.png" alt="Discord" className="max-w-sm w-full" />
        </div>
         {/* Five-column section */}
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Role</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Contract Design Consultant</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Timeline</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Jan 2023 - May 2023</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Team</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Berkeley Business Society<br/ >2 Project Managers<br/>5 Consultants</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Product Design<br />User Research<br />MOSCOW Analysis<br />Prototyping</p>
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
            <p>Discord aimed to strengthen its collegiate user base, but the current app experience lacked features specifically tailored to increase engagement among college students. Despite a robust user base, Discord faced a key challenge: low retention and limited interaction from college students who needed more targeted features to foster community connection. This gap hindered Discord’s goal of becoming a go-to platform for students looking to connect over shared academic and social interests. 
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Solution</h2>
            <p>
              <strong>Comprehensive Competitor Analysis:</strong> Conducted in-depth analysis of 15 mobile applications popular with college students to identify unique engagement tactics and UI elements. From this, I developed insights into what students valued most in community and interaction features.<br/ >
              <strong>User-Centric Feature Prioritization via MOSCOW Analysis:</strong> Used MOSCOW (Must-have, Should-have, Could-have, Won’t-have) prioritization to outline eight feature ideas based on feedback from student surveys and interviews. This prioritization helped us focus on the high-impact features that would immediately resonate with collegiate users.<br />
              <strong>Persona-Driven Design of Key Engagement Features:</strong> Designed and prototyped three student-centric features to encourage interactions, such as a ‘Campus Hubs’ section that allowed students to create or join channels based on their school, and an ‘Event Planner’ for organizing study groups or campus events, making Discord more relevant to their college experience.<br />
              <strong>Integration of Tooltips and Tutorials:</strong> Implemented tooltips and an onboarding tutorial specifically designed for first-time collegiate users, guiding them through creating and managing groups, customizing channels, and joining campus events. This feature made the app more accessible and engaging for new users.<br />
              <strong>Proactive Feedback Loops:</strong> Created a feedback collection mechanism to allow students to provide input on new features, enabling continuous improvements based on real user needs. This included brief in-app surveys and optional feedback forms after onboarding.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>The redesigned collegiate engagement experience led to measurable increases in student activity on Discord:<br/ >
            <br />
            <strong>25% Increase in Collegiate Retention Rate:</strong> Campus-based channels and the ‘Event Planner’ feature contributed to a 25% boost in retention among college users, who now had relevant spaces to interact and engage with their peers.<br/ >
            <strong>Higher Engagement in User Feedback Loops:</strong> With in-app feedback mechanisms, we collected actionable insights that informed subsequent updates, achieving a high response rate and helping refine the user experience further.<br/ >
            <strong>Enhanced Feature Discoverability:</strong> The addition of tooltips and tailored onboarding helped students quickly understand and leverage Discord’s community features, leading to more consistent usage and interaction.<br/ >
            <br />
            <strong>By aligning the platform’s offerings with the specific needs of college students, Discord succeeded in creating a more engaging and relevant experience for this demographic, ultimately reinforcing its presence as a community platform for students.</strong></p>
          </div>
        </div>
        {/* <p className="mb-4">Detailed information about the Flip App project...</p> */}
      </main>
    </>
  );
}
