import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import RegionalMap from "./components/RegionalMap";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import About from "./components/About";

function Home() {
  return (
    <main>
      <Hero />
      <RegionalMap />
      <ProjectsSection />
      <About />
    </main>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
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