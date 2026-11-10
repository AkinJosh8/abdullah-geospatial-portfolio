import clientImage from "../assets/images/Hayzed.jpeg"

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-banner">
                <div className="hero-overlay"></div>
                <div className="hero-content hero-content-split">
                    <div className="hero-identity">
                        <div className="hero-portrait-wrap">
                            <img src={clientImage} alt="Abdullah Abdazeez Ayomide" className="hero-portrait" />
                        </div>
                    </div>

                    <div className="hero-profile">
                        <div className="hero-profile-intro">
                            <p className="hero-label hero-profile-label">GEOSPATIAL / GIS / REMOTE SENSING </p>
                            <p className="hero-name">
                                <span className="hero-name-primary">ABDULLAH</span>
                                <span className="hero-name-line">
                                    <span className="hero-name-accent">ABDAZEEZ</span>
                                    <span className="hero-name-plain"> AYOMIDE</span>
                                </span>
                            </p>
                        </div>
                        <p className="hero-profile-copy">
                            I am an Urban and Regional Planner specializing in geospatial science, Earth observation,
                            and spatial data analysis, with research experience across land-cover change, urban growth,
                            flood and coastal risk, drought, and accessibility.
                        </p>
                        <p className="hero-profile-copy">
                            I use GIS, Google Earth Engine, and Python to analyze Sentinel-2, Landsat, and MODIS datasets,
                            applying methods such as Random Forest and Extra Trees classification, CA–Markov modelling,
                            2SFCA, and AHP/MCDA to support resilient and sustainable planning.
                        </p>
                        <div className="hero-focus-row">
                            <span>Urban planning</span>
                            <span>GIS</span>
                            <span>Earth observation</span>
                        </div>

                        <a href="#projects" className="hero-button">
                            <span>EXPLORE MY WORK</span>
                            <span>&#8599;</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero