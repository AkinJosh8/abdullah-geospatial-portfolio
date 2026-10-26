import { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { setPageSeo } from "./utils/seo";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Projects = lazy(() => import("./pages/Projects"));

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
    const isProjectDetail = pathname.startsWith("/projects/") && pathname.split("/").filter(Boolean).length > 1;

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

    if (pathname === "/projects" && !isProjectDetail) {
      setPageSeo({
        title: "Project Archive | Abdullah Azeez",
        description: "Browse the project archive of geospatial studies covering land-use change, urban planning, accessibility, flood risk, and climate analytics.",
        canonicalPath: "/projects",
        image: "/favicon.jpg",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Project Archive",
          description: "Archive of geospatial and environmental projects by Abdullah Azeez.",
          url: `${window.location.origin}/projects`
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;