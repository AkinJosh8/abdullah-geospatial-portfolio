import { AnimatePresence, easeInOut, motion } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

function SideMenu ({ isOpen, onClose, theme, onThemeToggle}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <> 
                    <motion.div className="menu-backdrop" initial={{ opacity: 0}} animate={{ opacity: 1}}
                        exit={{ opacity: 0 }} onClick={onClose} />
                    <motion.aside className="side-menu" initial={{ x: "100%" }} animate={{ x:0 }}
                        exit={{ x: "100%" }} transition={{ duration: 0.35, ease: easeInOut}} aria-label="Main navigation">
                        <div className="side-menu-header">
                            <span>01 / NAVIGATION</span>
                            <button type="button" onClick={onClose} aria-label="navigation menu">x</button>
                        </div>

                        <nav className="side-menu-nav">
                            <a href="/#home" onClick={onClose}>Home</a>
                            <a href="/#regional" onClick={onClose}>Regional</a>
                            <a href="/#projects" onClick={onClose}>Projects</a>
                            <a href="/#about" onClick={onClose}>About</a>
                            <a href="/#experience" onClick={onClose}>Experience</a>
                            <a href="/#contact" onClick={onClose}>Contact</a>
                        </nav>

                        <div className="side-menu-footer">
                            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    )
}

export default SideMenu