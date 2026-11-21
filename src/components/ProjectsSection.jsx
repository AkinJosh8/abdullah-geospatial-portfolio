import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow"> MY WORK </p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;