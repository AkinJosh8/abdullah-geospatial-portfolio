const experiences = [
  {
    number: "01",
    period: "Jan 2026 – Present",
    type: "PROFESSIONAL EXPERIENCE",
    role: "GIS Technologist",
    organisation: "Gbolabs Environmental Agency",
    location: "Akure, Ondo State, Nigeria",
    points: [
      "Conduct spatial analysis and geographic assessments to support planning, environmental screening and development-assessment decisions for commercial and residential projects.",
      "Co-authored the land-use analysis report for the proposed Sunshine Mall, Akure, integrating zoning compliance review, traffic impact assessment and environmental screening.",
      "Contributed to Environmental Impact Assessment reports (Judicial Complex, Cabinet Quarters, H-Tech International College) and to neighbourhood planning for a large residential estate, integrating field assessment, baseline survey and inventory data.",
      "Produce maps, spatial reports and planning products for technical and non-technical stakeholders.",
      "Supervise and mentor student IT trainees in GIS operations and deliver GIS training, including a lecture series for 20+ students at Rufus Giwa Polytechnic, Owo.",
    ],
    skills: ["GIS", "Spatial Analysis", "Environmental Planning"],
  },
  {
    number: "02",
    period: "Dec 2024 – Dec 2025",
    type: "INTERNSHIP",
    role: "Planning Intern (NYSC)",
    organisation: "Ondo State Ministry of Physical Planning and Urban Development",
    location: "Ondo State",
    points: [
      "Supported physical-planning and development-control activities through field data collection, mapping, site inspections and preparation of planning reports.",
      "Contributed geospatial inputs and maintained spatial inventory data for the Ministry’s urban planning database.",
      "Supported infrastructure and site assessments for proposed public and private development projects across the state.",
      "Participated in stakeholder engagement and community consultations on development-control matters.",
    ],
    skills: ["Urban Planning", "GIS", "Field Survey"],
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
    role: "Top 2% Best Thesis Research",
    organisation: "Federal University of Technology, Akure (FUTA)",
    location: "Akure",
    description: "Recognised for a spatial planning research presentation linking land-use change, vulnerability, and local decision-making.",
    skills: ["Research", "Presentation", "Spatial Planning"],
  },
];

function Experience() {
    return (
        <section className="experience-section section" id="experience">
            <div className="container">
                <div className="experience-heading">
                    <p className="experience-label "> EXPERIENCE</p>
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
                                {item.points ? (
                                    <ul className="experience-points">
                                        {item.points.map((point, index) => (
                                            <li key={`${item.number}-${index}`}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="experience-description">{item.description}</p>
                                )}
                                <div className="experience-skills">
                                    {item.skills.map((skill) => (
                                        <span key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div> 
            </div>
        </section>
    )
}

export default Experience;