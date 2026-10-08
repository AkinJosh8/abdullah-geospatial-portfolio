import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section className="projects-section section" id="projects">
      <div className="container">

        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              03 / SELECTED PROJECTS
            </p>

            <h2>
              SPATIAL QUESTIONS.
              <br />
              <span>ANALYTICAL ANSWERS.</span>
            </h2>
          </div>

          <p className="section-intro">
            A selection of geospatial projects combining spatial
            analysis, remote sensing, cartography and data-driven
            approaches to investigate real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} >
          <span>10 PROJECTS / SPATIAL WORKFLOW</span>
          <span>VIEW PROJECT ARCHIVE &#10132; </span>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;