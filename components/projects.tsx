import ProjectPreview from "./ui/project-preview";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col space-y-8 my-4">
      <ProjectPreview
        name="Favor"
        description={{
          summary: "Favor is a bartering app for college students, designed to create a platform for exchanging goods and services within campus communities. As the founder, I led the design and development process, from concept to launch. My goal was to enable a user-friendly and efficient bartering experience tailored for college students' needs.\n\nThrough extensive research, I conducted over 300 surveys to understand the market and identify essential features, which informed the app's design and boosted engagement by 32%.\n\nFavor will focus on expanding features, enhancing the UI/UX, and exploring partnerships to scale across campuses.",
          details: {
            date: "2023 - Present",
            role: "Product Designer & Founder",
            overview: "Full-stack Development & Design"
          }
        }}
        imageUrl="/assets/another.png"
        bgColor="#F1F1F1"
        nameClassName="text-2xl md:text-4xl lg:text-4xl"
      />
      <ProjectPreview
        name="Discord"
        description={{
          summary: "In my role with Discord, I aimed to enhance collegiate engagement through a user-centered approach. By conducting 32 interviews and surveying over 300 students, I gathered insights into the unique needs of college users and pinpointed seven key pain points. Using this feedback, I prioritized 10+ feature recommendations and designed engagement strategies through MOSCOW analysis, ensuring relevance and appeal.\n\nI also analyzed 15 competitor apps, drawing inspiration for features tailored to the college experience. These enhancements focused on fostering a welcoming environment on Discord, building long-term loyalty among college students.",
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
        name="Admin Onboarding"
        description={{
          summary: "Next gen bartering app for college students. A platform designed to revolutionize how students exchange goods and services on campus.",
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
