import ProjectPreview from "./ui/project-preview";

// Update interface
interface Description {
  subtitle: string;  // New field
  summary: string;
  details: {
    date: string;
    role: string;
    overview: string;
  };
}

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col space-y-8 my-4">
      <ProjectPreview
        name="Favor"
        description={{
          subtitle: "Bartering platform for students",  // New subtitle
          summary: "I founded and led the primary development of Favor, a bartering app targeted at college students. I took the main role in conducting user resarch and validation.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/another.png"
        bgColor="#F1F1F1"
        nameClassName="text-2xl md:text-4xl lg:text-4xl"
      />
      <ProjectPreview
        name="Discord"
        description={{
          subtitle: "Increasing intuition for all types of users",  // New subtitle
          summary: "I led the research and design behind Discord's beta mobile app, focusing on increasing user intuition and maximizing user interaction with 8 new features.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/newdiscord.png"
        bgColor="#F1F1F1"
        rightAligned={true}
        nameClassName="text-2xl md:text-3xl lg:text-4xl"
      />
      <ProjectPreview
        name="Snapchat"
        description={{
          subtitle: "Streamlining onboarding process for new admins",  // New subtitle
          summary: "I gamified and digitized the DEI onboarding process for all Snapchat employees globally. The new three stage process increases employee engagement by 30%.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/Frame 6.png"
        bgColor="#F1F1F1"
        nameClassName="text-2xl md:text-4xl lg:text-4xl"
      />
      {/* <ProjectPreview
        name="Craftwork"
        description="Design resources that will boost your creative workflow"
        imageUrl="/assets/project-6.png"
      />
      <ProjectPreview
        name="Newsy App"
        description="News aggregator app"
        imageUrl="/assets/project-4.png"
        bgColor="#171717"
        dark
      />
      <ProjectPreview
        name="Krypto"
        description="Analyze crypto currency"
        imageUrl="/assets/project-5.png" */}
      {/* >/ */}
    </section>
  );
};

export default Projects;
