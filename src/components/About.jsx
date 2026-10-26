import clientImage from "../assets/images/Hayzed.jpeg";

function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-intro">
            <div className="about-intro-copy">
              <p className="about-label"> 04 / ABOUT </p>
              <h2 className="about-title">
                <span className="about-title-line">SPATIAL THINKING.</span> <br />
                <span className="about-title-line about-title-line--tight">PLANNING WITH DATA</span>
              </h2>
              <div className="about-focus-row">
                <span>Urban planning</span>
                <span>GIS</span>
                <span>Earth observation</span>
              </div>
            </div>
            <div className="about-image">
              <img src={clientImage} alt="Abdullah Abdazeez Ayomide" />
            </div>
          </div>
          <div className="about-copy">
            <p> I am an Urban and Regional Planner specialising in
              geospatial science, Earth observation, and spatial data
              analysis, with research experience spanning land-cover
              change, urban growth, flood and coastal risk, drought,
              and accessibility. 
            </p>
            <p> I use GIS, Google Earth Engine, and Python to analyse
              Sentinel-2, Landsat, and MODIS datasets, applying methods
              such as Random Forest and Extra Trees classification,
              CA–Markov modelling, 2SFCA, and AHP/MCDA.
            </p>
            <p> Through my studies, I have developed a strong interest
              in using spatial evidence and environmental data to
              understand climate and urban risks, assess vulnerability,
              and support sustainable and resilient planning.
            </p>
          </div>
          <div className="about-capabilities">
            <p className="about-capabilities-label"> TECHNICAL FOCUS</p>
            <div className="about-capability-group">
              <span className="about-group-label">  CORE TOOLS </span>
              <div className="about-tags">
                <span>GIS</span>
                <span>GOOGLE EARTH ENGINE</span>
                <span>PYTHON</span>
              </div>
            </div>
            <div className="about-capability-group">
              <span className="about-group-label"> DATA</span>
              <div className="about-tags">
                <span>SENTINEL-2</span>
                <span>LANDSAT</span>
                <span>MODIS</span>
              </div>
            </div>
            <div className="about-capability-group">
              <span className="about-group-label"> METHODS </span>
              <div className="about-tags">
                <span>RANDOM FOREST</span>
                <span>EXTRA TREES</span>
                <span>CA–MARKOV</span>
                <span>2SFCA</span>
                <span>AHP / MCDA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;