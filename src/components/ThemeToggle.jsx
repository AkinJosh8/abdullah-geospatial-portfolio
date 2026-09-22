function ThemeToggle({theme, onToggle}) {
    const isDark = theme === "dark"

    return (
        <div className="theme-control">
            <span className="theme-label">THEME </span>

            <button type="button" className={`theme-switch ${isDark ? "is-dark" : "is-light"}`}
                onClick={onToggle} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
                <span className="theme-option"> 
                    <span className="theme-indicator"> {isDark ? "" : "" }</span>
                    VECTOR MAP / LIGHT
                </span>

                <span className="theme-option">
                    <span className="theme-indicator"> {isDark ? "" : "" } </span>
                    SATELLITE HUD / DARK
                </span>
            </button>
        </div>
    )
}

export default ThemeToggle