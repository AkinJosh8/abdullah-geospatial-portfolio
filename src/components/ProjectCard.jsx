import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true, amount: 0.15, }}
      transition={{ duration: 0.5 }}>
      <div className="project-info">
        <span className="project-number">
          {project.number} / {project.category}
        </span>

        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.location}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-abstract">  {project.abstract}</p>
      </div>

      <div className="project-map">
        <img src={project.map} alt={`${project.title} project visual`}/>
      </div>

      <div className="project-info project-info-bottom">
        <div className="project-highlights">
          {project.highlights.map((highlight) => (
            <div className="project-highlight"  key={highlight.label} >
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>

        <div className="project-bottom">
          <div className="project-tools">
            {project.tools.map((tool) => (
              <span key={tool}> {tool} </span>
            ))}
          </div>

          <div className="project-actions">
            <Link  to={`/projects/${project.slug}`}  className="project-view"  >
              <span>View project details</span>
              <span>&#10132;</span>
            </Link>
            {project.github ? (
              <a
                href={project.github}
                className="project-github"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span>&#10132;</span>
              </a>
            ) : null}
            <a  href={project.document} className="project-download"  download>
              <span>Download document</span>
              <span>&#10132;</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;