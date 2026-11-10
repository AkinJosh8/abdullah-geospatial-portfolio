import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <p className="section-intro">
            Selection of geospatial projects combining spatial
            analysis, remote sensing, and data-driven
            approaches to investigate real-world problems.
          </p>
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