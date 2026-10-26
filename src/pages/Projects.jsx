import { useEffect } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { setPageSeo } from "../utils/seo";

function Projects() {
  useEffect(() => {
    setPageSeo({
      title: "Project Archive | Abdullah Azeez",
      description: "Browse the project archive of geospatial studies covering land-use change, urban planning, accessibility, flood risk, and climate analytics.",
      canonicalPath: "/projects",
      image: "/favicon.jpg",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Project Archive",
        description: "Archive of geospatial and environmental projects by Abdullah Azeez.",
        url: `${window.location.origin}/projects`
      }
    });
  }, []);

  return (
    <main className="projects-page">
      <section className="projects-hero section">
        <div className="container">
          <div className="projects-heading">
            <p className="projects-label">
              PROJECT ARCHIVE
            </p>

            <p className="projects-intro">
              A collection of geospatial projects exploring land-use
              change, urban growth, environmental risk, accessibility,
              and spatial decision-making.
            </p>
          </div>

          <div className="projects-count">
            <strong>
              {String(projects.length).padStart(2, "0")}
            </strong>
            <span>PROJECT ARCHIVE</span>
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