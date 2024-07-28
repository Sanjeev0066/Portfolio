const projects = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "https://example.com/project-two",
  },
];

const Projects = () => {
  return (
    <div>
      <header>
        <h1>My Projects</h1>
      </header>
      <main>
        <section>
          {projects.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Projects;
