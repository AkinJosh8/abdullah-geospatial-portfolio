function Header({ onMenuOpen }) {
    return (
        <header className="site-header">
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