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
    <section id="projects" className="flex flex-col space-y-4 sm:space-y-8 my-2 sm:my-4 px-4 sm:px-0">
      <ProjectPreview
        name="Favor"
        description={{
          subtitle: "Bartering platform for students",
          summary: "I founded and led the primary development of Favor, a bartering app targeted at college students. I took the main role in conducting user resarch and validation.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/favor_phone2.png"
        imageOffset={{
          top: '0px',
          horizontal: '110px'  // Moves 30px inward from the aligned side
        }}
        imageHeight="300px"
        rightAligned={true}
        nameClassName="text-lg sm:text-xl md:text-2xl lg:text-4xl"
        descriptionClassName="hidden sm:block"
        link="/projects/favor"
      />
      <ProjectPreview
        name="Discord"
        description={{
          subtitle: "Increasing intuition for all types of users",
          summary: "I led the research and design behind Discord's beta mobile app, focusing on increasing user intuition and maximizing user interaction with 8 new features.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/discord_phone2.png"
        imageOffset={{
          top: '0px',
          horizontal: '30px'  // Moves 30px inward from the aligned side
        }}
        imageHeight="280px"  // Add this line to control the image height
        rightAligned={false}
        nameClassName="text-2xl md:text-3xl lg:text-4xl"
        link="/projects/discord"
      />
      <ProjectPreview
        name="Snapchat"
        description={{
          subtitle: "Streamlining onboarding process for new admins",
          summary: "I gamified and digitized the DEI onboarding process for all Snapchat employees globally. The new three stage process increases employee engagement by 30%.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Developer",
            overview: "Full-stack Development"
          }
        }}
        imageUrl="/assets/snapchat_comp.png"
        imageOffset={{
          top: '0px',
          horizontal: '30px'  // Moves 30px inward from the aligned side
        }}
        imageHeight="300px"
        rightAligned={true}
        nameClassName="text-2xl md:text-4xl lg:text-4xl"
        link="/projects/snapchat"
      />
    </section>
  );
};

export default Projects;
