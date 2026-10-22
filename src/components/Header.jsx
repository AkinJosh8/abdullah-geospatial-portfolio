import { useEffect, useState } from "react";

function Header({ onMenuOpen }) {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-inner-container">
                <a href="/" className="site-brand" aria-label="Go to homepage">
                    <span className="brand-mark">&#169;</span>
                    <span className="brand-text">GIS PORTFOLIO</span>
                </a>
                <button type="button" className="menu-trigger" onClick={onMenuOpen}
                    aria-label="Open navigation menu">
                    <span>01 / MENU</span>
                    <span>+</span>
                </button>
            </div>
        </header>
    );
}

export default Header;