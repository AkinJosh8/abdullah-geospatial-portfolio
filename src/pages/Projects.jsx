import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <div className="projects-heading">
            <p className="projects-label">
              03 / PROJECT ARCHIVE
            </p>

            <p className="projects-intro">
              A collection of geospatial projects exploring land-use
              change, urban growth, environmental risk, accessibility,
              and spatial decision-making.
            </p>
          </div>

          <div className="projects-count">
            <span>PROJECT ARCHIVE</span>
            <strong>
              {String(projects.length).padStart(2, "0")}
            </strong>
          </div>
        </div>
      </section>

      <section className="projects-list section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;