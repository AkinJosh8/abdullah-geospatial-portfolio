import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const contactDetails = [
  {
    label: "Email",
    value: "abdazeezabdullah1@gmail.com",
    href: "mailto:abdazeezabdullah1@gmail.com",
    icon: SiGmail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdazeez-abdullah",
    href: "https://www.linkedin.com/in/abdazeez-abdullah-4b814719a/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    value: "github.com/Abdullahabdazeez",
    href: "https://github.com/Abdullahabdazeez",
    icon: FaGithub,
  },
];

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-card">
            <div className="contact-header">
              <p className="contact-label">CONTACT</p>
            </div>

            <p className="contact-copy">
              I work across geospatial analysis, urban planning, and environmental research,
              and I&apos;m open to collaborations, research support, and project-based work.
            </p>

            <div className="contact-links">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  className="contact-social"
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`${label}: ${value}`}
                  title={value}
                >
                  <span className="contact-social-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
