import heroImage from "../assets/images/abdullah-hero.png"

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-banner">
                <img src={heroImage} alt="Geospatial portfolio visual" className="hero-image" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <p className="hero-label">GEOSPATIAL / GIS / REMOTE SENSING </p>
                    <p className="hero-name"> ABDULLAH <br /> ABDAZEEZ {" "} <span className="hero-name-accent">AYOMIDE</span>  </p>
                    <h1 className="hero-title">Mapping the Unseen Data. </h1>
                    <p className="hero-description"> Applying geospatial intelligence to understand urban and
                        environmental challenges through spatial analysis, remote
                        sensing and data-driven solutions.
                    </p>
                    <a href="/projects" className="hero-button">
                        <span>EXPLORE MY WORK</span>
                        <span>&#8599;</span>
                    </a>
                </div>
                <div className="hero-telemetry">
                    <span className="telemetry-title"> SATELLITE / ORBITAL DATA </span>
                    <span>ALT&nbsp;&nbsp;&nbsp;&nbsp;408.2 km</span>
                    <span>VEL&nbsp;&nbsp;&nbsp;&nbsp;7.66 km/s</span>
                    <span>SENSOR&nbsp;&nbsp;SENTINEL-1 (SAR)</span>
                </div>
                <div className="hero-coordinates">  
                    [ CURSOR / GRID: 06.52° N | 03.38° E ]
                </div>
            </div>
        </section>
    )
}

export default Hero