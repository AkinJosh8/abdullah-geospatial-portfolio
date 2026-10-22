import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import RegionalMap from "./components/RegionalMap";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
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
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}
        theme={theme} onThemeToggle={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects /> }/>
        <Route path="/projects/:slug" element={<ProjectDetails />} />

      </Routes>
    </>
  );
}

export default App;