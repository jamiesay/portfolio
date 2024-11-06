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
          <h1 className="text-4xl font-bold">Snapchat</h1>
        </div>
        <p className="text-l italic mb-4">Aiming to increase the impact and engagement with DEI onboarding trainings, Snapchat employed my team to devise a comprehensive gamified curriculum to replace their current system. By evaluating employee feedback and incorporating gamified elements, I led the redesign and crafted pivotal recommendations that informed the interactive DEI modules in Snapchat’s latest onboarding experience, fostering a more impactful and engaging introduction for employees worldwide.
        </p>
        {/* Center the image */}
        <div className="flex justify-center mb-8">
          <img src="/assets/snapchat_comp.png" alt="Snapchat" className="max-w-sm w-full" />
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
            <p className="text-sm">Aug 2023 - Jan 2024</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Team</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Berkeley Business Society<br/ >2 Project Managers<br/>5 Consultants</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <hr className="my-2 border-gray-200" />
            <p className="text-sm">Product Design<br />User Research<br />A/B Testing<br />Prototyping</p>
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
            <p>Snapchat sought to improve its employee onboarding process by making Diversity, Equity, and Inclusion (DEI) training more engaging and impactful. However, the existing DEI onboarding experience was static and lacked the interactive qualities that would resonate with employees globally. This gap resulted in limited engagement, with employees often completing the training without deep involvement or retention of its core values. Snapchat aimed to address this to foster a culture of inclusivity and engagement from day one.


            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Solution</h2>
            <p>
              <strong>User-Centric Research and Empathy Building:</strong> Conducted surveys with over 300 employees and 32 in-depth interviews to understand their needs and perspectives on DEI training. This research informed the design strategy, emphasizing empathy and interactive learning as essential elements for an effective onboarding experience.<br/ >
              <strong>Development of Gamified DEI Modules:</strong> Prototyped three gamified DEI training modules, using segmentation based on different employee demographics and roles. This included interactive scenarios, role-playing activities, and branching storylines to make the learning experience more immersive and relatable.<br />
              <strong>Figma Prototyping and A/B Testing:</strong> Built high-fidelity Figma mockups of the new onboarding flow and conducted A/B testing against the original platform. This allowed us to gauge the engagement impact of the gamified approach and refine the design based on employee feedback and performance data.<br />
              <strong>Integration of Emotion-Driven Design Elements:</strong> Designed features such as progress badges and feedback forms that encouraged employees to reflect on what they had learned. These elements created a sense of accomplishment and encouraged a personal connection to DEI values, making the experience more memorable.<br />
              <strong>Iterative Feedback Loops:</strong> Established continuous feedback loops through in-app surveys and post-training assessments, allowing employees to share thoughts on their onboarding experience and suggesting improvements for future iterations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Result</h2>
            <p>The redesigned DEI onboarding experience led to significant improvements in employee engagement and satisfaction:<br/ >
            <br />
            <strong>30% Increase in Training Completion Rates:</strong> The interactive and gamified elements contributed to a 30% boost in completion rates, as employees were more motivated to engage fully with the training modules.<br/ >
            <strong>Higher Employee Satisfaction and Positive Feedback:</strong> Employees provided overwhelmingly positive feedback, noting that the new onboarding experience felt relevant, immersive, and aligned with Snapchat’s values. Many expressed feeling more connected to the company’s DEI initiatives as a result.<br/ >
            <strong>Enhanced Retention of DEI Concepts:</strong> Surveys showed that employees retained more DEI concepts post-training, with 85% of participants able to recall key learnings two months after completion. The gamified approach made the training both impactful and memorable, strengthening Snapchat’s inclusive culture.<br/ >
            <br />
            <strong>Through a combination of empathy-driven research, gamification, and iterative design, this DEI onboarding project successfully transformed Snapchat’s approach, making the training more engaging and aligned with the company’s mission.</strong></p>
          </div>
        </div>
        {/* <p className="mb-4">Detailed information about the Flip App project...</p> */}
      </main>
    </>
  );
}
