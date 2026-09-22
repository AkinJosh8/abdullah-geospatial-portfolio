function RegionalMap() {
    return (
         <section className="regional-map section">
      <div className="container">
        <div className="regional-map-layout">

          <div className="regional-map-content">
            <p className="regional-map-label">
              02 / REGIONAL ANALYSIS
            </p>

            <h2 className="regional-map-title">
              PLACES LEAVE PATTERNS.
              <br />
              DATA HELPS US READ THEM.
            </h2>

           
          </div>

          <div className="regional-map-visual">
            <div className="map-grid"></div>

            <div className="map-region-label map-mali">
              MALI
            </div>

            <div className="map-region-label map-niger">
              NIGER
            </div>

            <div className="map-region-label map-chad">
              CHAD
            </div>

            <div className="map-region-label map-cameroon">
              CAMEROON
            </div>

            <div className="map-country-highlight">
              <span className="map-pulse"></span>

              <span className="map-country-name">
                NIGERIA
              </span>
            </div>

            <div className="map-coordinate">
              09.0820° N / 08.6753° E
            </div>

            <div className="map-scan-line"></div>
          </div>

        </div>
      </div>
    </section>
    )
}

export default RegionalMap