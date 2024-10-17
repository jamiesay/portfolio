import ProjectPreview from "./ui/project-preview";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4"
    >
      <ProjectPreview
        name="Flip App"
        description="Next-gen social media"
        imageUrl="/assets/project-1.png"
        bgColor="#685cdd"
        dark
        link="/projects/flip-app"
      />
      <ProjectPreview
        name="Moneyscape"
        description="Lend and borrow dashboard"
        imageUrl="/assets/project-2.png"
        bgColor="#313442"
        dark
        link="/projects/moneyscape"
      />
      <ProjectPreview
        name="Admin Onboarding"
        description="Increase user engagement"
        imageUrl="/assets/project-3.png"
        link="/projects/admin-onboarding"
      />
      <ProjectPreview
        name="Craftwork"
        description="Design resources that will boost your creative workflow"
        imageUrl="/assets/project-6.png"
        link="/projects/craftwork"
      />
      <ProjectPreview
        name="Newsy App"
        description="News aggregator app"
        imageUrl="/assets/project-4.png"
        bgColor="#171717"
        dark
        link="/projects/newsy-app"
      />
      <ProjectPreview
        name="Krypto"
        description="Analyze crypto currency"
        imageUrl="/assets/project-5.png"
        link="/projects/krypto"
      />
    </section>
  );
};

export default Projects;
