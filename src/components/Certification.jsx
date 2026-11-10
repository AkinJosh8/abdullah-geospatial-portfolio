import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import certificateOne from "../assets/images/certificates/Certificate-01.jpeg";
import certificateTwo from "../assets/images/certificates/Certificate-02.jpeg";
import certificateThree from "../assets/images/certificates/Certificate-03.jpeg";
import certificateFour from "../assets/images/certificates/Certificate-04.jpeg";

const certificates = [certificateOne, certificateTwo, certificateThree, certificateFour];

function Certification() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % certificates.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToNext = () => {
    setActiveIndex((previous) => (previous + 1) % certificates.length);
  };

  const goToPrev = () => {
    setActiveIndex((previous) => (previous - 1 + certificates.length) % certificates.length);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX;
    const delta = touchStartX - endX;

    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section className="certification-section section" id="certification">
      <div className="container">
        <div className="experience-heading certification-heading">
          <p className="experience-label">CERTIFICATION</p>
        </div>

        <div className="certification-shell">
          <button
            type="button"
            className="certification-nav certification-nav--prev"
            onClick={goToPrev}
            aria-label="Previous certificate"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>

          <div
            className="certification-slider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="certification-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certificates.map((certificate, index) => (
                <article
                  key={`${certificate}-${index}`}
                  className={`certification-card ${index === activeIndex ? "is-active" : ""}`}
                >
                  <img
                    src={certificate}
                    alt={`Certificate ${index + 1}`}
                    className="certificate-image"
                  />
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="certification-nav certification-nav--next"
            onClick={goToNext}
            aria-label="Next certificate"
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>

        <div className="certification-dots" aria-label="Certificate slide indicators">
          {certificates.map((certificate, index) => (
            <button
              key={`${certificate}-dot-${index}`}
              type="button"
              className={`certification-dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
