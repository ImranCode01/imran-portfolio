import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

type HeaderProps = { theme: string; onToggleTheme: () => void };

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary/10 hover:text-primary ${isActive ? "text-primary" : "text-base-content/75"}`;

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/70 bg-base-100/90 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto min-h-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start gap-2">
          <button className="btn btn-ghost btn-square lg:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link to="/" className="rounded-md" onClick={closeMenu} aria-label="Imran Yaqobi home">
            <img className={theme === "dark" ? "w-40 sm:w-40" : "h-[65px] w-auto sm:h-[66px]"} src={theme === "dark" ? "/white logo.png" : "/dark logo.png"} alt="Imran Yaqobi" />
          </Link>
        </div>

        <nav className="navbar-center hidden lg:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            <li><NavLink end to="/" className={navClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="navbar-end gap-2 sm:gap-3">
          <button type="button" onClick={onToggleTheme} className="btn btn-ghost btn-circle border border-base-300" aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <NavLink to="/contact" className="btn btn-primary hidden rounded-full px-6 text-white sm:inline-flex">Contact me</NavLink>
        </div>
      </div>

      {menuOpen && <nav className="border-t border-base-300 bg-base-100 px-4 py-3 shadow-lg lg:hidden" aria-label="Mobile navigation">
        <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          <li><NavLink end to="/" className={navClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className={navClass} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/contact" className={navClass} onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </nav>}
    </header>
  );
}
