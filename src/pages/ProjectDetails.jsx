import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import { loadProjectDocument, loadProjectMap } from "../data/projectAssets";

function ProjectDetails() {
  const { slug } = useParams();
  const [projectMap, setProjectMap] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");

  const project = projects.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    if (!project) return;

    let isMounted = true;

    loadProjectMap(project).then((mapUrl) => {
      if (isMounted) setProjectMap(mapUrl ?? "");
    });

    loadProjectDocument(project).then((pdfUrl) => {
      if (isMounted) setDocumentUrl(pdfUrl ?? "");
    });

    return () => {
      isMounted = false;
    };
  }, [project]);

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
            {projectMap ? <img src={projectMap} alt={`${project.title} project visual`} /> : null}
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
            <a href={documentUrl || "#"} download={Boolean(documentUrl)} className="project-download">
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