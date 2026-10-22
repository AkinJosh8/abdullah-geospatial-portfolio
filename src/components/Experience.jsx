const experiences = [
  {
    number: "01",
    period: "2025-2026",
    type: "PROFESSIONAL EXPERIENCE",
    role: "GIS Analyst / Geospatial Researcher",
    organisation: "Current Organisation",
    location: "Akure",
    description: "A concise overview of your role, analytical responsibilities, tools, and contributions.",
    skills: ["GIS", "Spatial Analysis", "Remote Sensing"],
  },
  {
    number: "02",
    period: "2023-24",
    type: "INTERNSHIP",
    role: "Town Planning Intern",
    organisation: "Planning organisation",
    location: "Ibadan",
    description: "Practical experience supporting planning documentation, spatial information, and regulatory processes.",
    skills: ["Urban Planning", "GIS", "Documentation"],
  },
  {
    number: "03",
    period: "2018-2024",
    type: "EDUCATION",
    role: "B.Tech. Urban and Regional Planning",
    organisation: "Federal University of Technology, Akure (FUTA)",
    location: "Akure",
    description: "Focused on planning theory, urban systems, geospatial methods, and applied research in environmental and infrastructure planning.",
    skills: ["Urban Planning", "Research", "GIS"],
  },
  {
    number: "04",
    period: "2024",
    type: "AWARDS",
    role: "Best Student Research Presentation",
    organisation: "Federal University of Technology, Akure (FUTA)",
    location: "Akure",
    description: "Recognised for a spatial planning research presentation linking land-use change, vulnerability, and local decision-making.",
    skills: ["Research", "Presentation", "Spatial Planning"],
  },
]

function Experience() {
    return (
        <section className="experience-section section" id="experience">
            <div className="container">
                <div className="experience-heading">
                    <p className="experience-label ">05 / EXPERIENCE</p>
                    <h2 className="experience-title">WORK THAT MOVES <br /> <span>IDEAS FORWARD.</span> </h2>
                    <p className="experience-intro">A record of my professional experience, practical responsibilities, and continued development.</p>
                </div>

                <div className="experience-list">
                    {experiences.map((item) => (
                        <article className="experience-item" key={item.number}>
                            <div className="experience-period">
                                <span>{item.number}</span>
                                <span>{item.period}</span>
                            </div>
                            <div className="experience-details">
                                <p className="experience-type">{item.type}</p>
                                <h3>{item.role}</h3>
                                <p className="experience-organisation" >{item.organisation} / {item.location} </p>
                                <p className="experience-description">{item.description}</p>
                                <div className="experience-skills">
                                    {item.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <span className="experience-arrow" aria-label="Read more">&#8593;</span>
                        </article>
                    ))}
                </div> 
            </div>
        </section>
    )
}

export default Experience;