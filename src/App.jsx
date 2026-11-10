import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { setPageSeo } from "./utils/seo";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

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
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setPageSeo({
        title: "Abdullah Azeez | Geospatial Analyst Portfolio",
        description: "Geospatial analyst portfolio showcasing urban planning, GIS, climate risk, and land-use modelling projects.",
        canonicalPath: "/",
        image: "/favicon.jpg",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abdullah Azeez",
          jobTitle: "Geospatial Analyst",
          description: "Urban planning and geospatial analyst focused on climate risk, land-use change, and spatial analytics.",
          url: `${window.location.origin}/`,
          sameAs: [
            "https://www.linkedin.com/in/abdullah-ayomide",
            "https://github.com/Abdullahabdazeez"
          ]
        }
      });
    }
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}
        theme={theme} onThemeToggle={toggleTheme}
      />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;