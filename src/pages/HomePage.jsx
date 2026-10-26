import Hero from "../components/Hero";
import RegionalMap from "../components/RegionalMap";
import ProjectsSection from "../components/ProjectsSection";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <RegionalMap />
        <ProjectsSection />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
