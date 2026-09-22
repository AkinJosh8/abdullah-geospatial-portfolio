import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import Hero from "./components/Hero";
import RegionalMap from "./components/RegionalMap";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}
        theme={theme} onThemeToggle={toggleTheme}
        />

      <main>
        <Hero />

        <RegionalMap />
      </main>
    </>
  );
}

export default App;