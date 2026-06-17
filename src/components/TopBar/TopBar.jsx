import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, User, Mail, Briefcase, Folder, Menu, X } from "lucide-react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import { useTranslation } from "react-i18next";
import "./topbar.scss";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: User, label: "About" },
  { to: "/projects", icon: Folder, label: "Projects" },
  { to: "/experience", icon: Briefcase, label: "Work" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

const TopBar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="topbar">
      <div className="topbar__container">

        {/* Logo */}
        <Link className="topbar__logo" to="/" onClick={closeMenu}>
          <svg viewBox="0 0 36 36" className="topbar__logo-svg">
            <defs>
              <linearGradient id="topbarLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-purple)" />
                <stop offset="100%" stopColor="var(--accent-cyan)" />
              </linearGradient>
            </defs>
            <text x="3" y="27" fontSize="24" fill="url(#topbarLogoGrad)">
              MZ
            </text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className="topbar__nav">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `topbar__nav-link ${isActive ? "active" : ""}`
              }
            >
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Tools */}
        <div className="topbar__tools">
          <ThemeSwitcher />

          {/* Mobile Menu Button */}
          <button
            className="topbar__menu-btn"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`topbar__overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <aside className={`topbar__drawer ${menuOpen ? "open" : ""}`}>
        <button className="topbar__close" onClick={closeMenu}>
          <X size={22} />
        </button>

        <nav className="topbar__mobile-nav">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default TopBar;