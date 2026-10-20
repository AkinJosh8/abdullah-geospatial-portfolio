import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="project-details">
        <div className="container">
          <h1>Project not found.</h1>

          <Link to="/">
            &#8592; Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="project-details">
      <section className="project-details-hero section">
        <div className="container">
          <Link to="/" className="project-back">
            &#8592; BACK TO PROJECTS
          </Link>

          <div className="project-details-heading">
            <p className="project-details-label"> 
              {project.number} / {project.category} 
            </p>
            <h1> {project.title} </h1>
            <div className="project-details-meta">
              <span>{project.year}</span>
              <span>{project.location}</span>
            </div>
            <div className="project-details-abstract-block">
              <p className="project-details-kicker">  01 / ABSTRACT </p>
              <p className="project-details-abstract"> {project.abstract} </p>
            </div>
          </div>
          <div className="project-details-visual">
            <img src={project.map} alt={`${project.title} project visual`} />
          </div>
        </div>
      </section>

      <section className="project-details-content section">
        <div className="container">
          <div className="project-details-section">
            <p className="project-details-kicker">
              02 / TOOLS & SOFTWARE
            </p>

            <div className="project-details-tools">
              {project.tools.map((tool) => (
                <span key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="project-details-section">
            <p className="project-details-kicker">
              03 / TASKS
            </p>

            <div className="project-task-list">
              {project.tasks.map((task, index) => (
                <div className="project-task" key={task} >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{task}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="project-details-section">
            <p className="project-details-kicker">
              04 / RESULTS & CONCLUSIONS
            </p>

            <div className="project-result-list">
              {project.results.map((result, index) => (
                <div className="project-result" key={result}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="project-details-download">
            <div>
              <p>FULL PROJECT DOCUMENTATION</p>
              <span> Download the complete project report. </span>
            </div>
            <a href={project.document} download className="project-download">
              <span>DOWNLOAD FULL PROJECT</span>
              <span>&#10132;</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectDetails