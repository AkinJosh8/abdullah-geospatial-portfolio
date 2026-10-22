const contactDetails = [
  {
    label: "Email",
    value: "abdazeezabdullah1@gmail.com",
    href: "mailto:abdazeezabdullah1@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdullah-ayomide",
    href: "https://www.linkedin.com/in/abdullah-ayomide",
  },
  {
    label: "GitHub",
    value: "github.com/abdullah-ayomide",
    href: "https://github.com/Abdullahabdazeez",
  },
  {
    label: "Location",
    value: "Akure, Ondo State, Nigeria",
    href: "https://maps.google.com/?q=Akure%20Ondo%20State%20Nigeria",
  },
];

function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-intro">
            <p className="contact-label">06 / CONTACT</p>
            <h2 className="contact-title">
              LET&apos;S BUILD
              <br />
              <span>WITH SPATIAL CLARITY.</span>
            </h2>
            <p className="contact-copy">
              I work across spatial analysis, urban planning, and environmental research,
              and I&apos;m open to collaborations, consulting, research support, and project-based work.
            </p>
          </div>
          <div className="contact-panel">
            <ul className="contact-list">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact-actions">
              <a className="contact-primary" href="mailto:abdazeezabdullah1@gmail.com">
                <span className="cta-label">Email</span>
                <span className="cta-main">Start a conversation</span>
                <span className="cta-arrow" aria-hidden="true">&#8599;</span>
              </a>
              <a className="contact-secondary" href="/projects">
                <span className="cta-label">Archive</span>
                <span className="cta-main">View projects</span>
                <span className="cta-arrow" aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
