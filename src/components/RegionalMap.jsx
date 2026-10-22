import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, } from "react-simple-maps";
import worldData from "world-atlas/countries-110m.json";

function RegionalMap() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;
  const mapCenter = isMobile ? [8, 9] : isTablet ? [8, 9] : [-8, 9];
  const mapScale = isMobile ? 1400 : isTablet ? 1200 : 1800;

  return (
    <section className="regional-map section" id="regional">
      <div className="container">
        <div className="regional-map-visual">
          <div className="regional-map-background">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: mapCenter, scale: mapScale,}}
              width={900} height={520} className="regional-map-svg" >
              <Geographies geography={worldData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isNigeria = geo.properties.name === "Nigeria";

                    return (
                      <Geography key={geo.rsmKey} geography={geo}
                        className={ isNigeria ? "country nigeria" : "country"} />
                    );
                  })
                }
               </Geographies>
              <Marker coordinates={[8.6753, 9.082]}>
                <circle className="nigeria-marker-ring" r="12" />
                <circle className="nigeria-marker-dot" r="5" />
              </Marker>
            </ComposableMap>
            <span className="map-label map-mali"> MALI </span>
            <span className="map-label map-niger"> NIGER </span>
            <span className="map-label map-chad"> CHAD </span>
            <span className="map-label map-cameroon"> CAMEROON </span>
            <span className="map-label map-nigeria"> NIGERIA </span>
          </div>
          <div className="regional-map-content">
            <p className="regional-map-label">  02 / REGIONAL ANALYSIS </p>
            <h2 className="regional-map-title">
              PLACES LEAVE <br /> PATTERNS. <br />  DATA HELPS US <br /> READ THEM.
            </h2>
            <p className="regional-map-status"> <span className="status-dot"></span> 
              SCANNING REGIONAL PROJECTS &#8595;
            </p>
          </div>
          <div className="map-coordinate"> 09.0820° N / 08.6753° E </div>
          <div className="map-scan-line"></div>
        </div>
      </div>
    </section>
  );
}

export default RegionalMap;