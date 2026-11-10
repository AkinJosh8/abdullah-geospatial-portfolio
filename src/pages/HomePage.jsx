import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Experience from "../components/Experience";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ProjectsSection />
        <Experience />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
