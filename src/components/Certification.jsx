import certificateOne from "../assets/images/certificates/Certificate-01.jpeg";
import certificateTwo from "../assets/images/certificates/Certificate-02.jpeg";
import certificateThree from "../assets/images/certificates/Certificate-03.jpeg";
import certificateFour from "../assets/images/certificates/Certificate-04.jpeg";
import certificateFive from "../assets/images/certificates/Certificate-05.jpeg";
import certificateSix from "../assets/images/certificates/Certificate-06.jpeg";
import certificateSeven from "../assets/images/certificates/Certificate-07.jpeg";

const certificates = [
  { image: certificateOne, number: "01" },
  { image: certificateTwo, number: "02" },
  { image: certificateThree, number: "03" },
  { image: certificateFour, number: "04" },
  { image: certificateFive, number: "05" },
  { image: certificateSix, number: "06" },
  { image: certificateSeven, number: "07" },
];

function Certification() {
  return (
    <section className="certification-section section" id="certification">
      <div className="container">
        <div className="certification-heading">
          <p className="certification-label">CERTIFICATION</p>
        </div>

        <div className="certification-grid">
          {certificates.map((certificate) => (
            <article className="certification-card" key={certificate.number}>
              <div className="certification-card-number">{certificate.number}</div>
              <div className="certification-card-image">
                <img
                  src={certificate.image}
                  alt={`Certificate ${certificate.number}`}
                  className="certificate-image"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
