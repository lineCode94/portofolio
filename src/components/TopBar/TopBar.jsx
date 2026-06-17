import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, User, Mail, Briefcase, Folder } from "lucide-react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import LanguageSwitcher from "../common/LanguageSwitcher";
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

  return (
    <header className="topbar">
      <div className="topbar__container">
        
        {/* Logo */}
        <Link className="topbar__logo" to="/" aria-label="Home">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="topbar__logo-svg">
            <defs>
              <linearGradient id="topbarLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-purple)" />
                <stop offset="100%" stopColor="var(--accent-cyan)" />
              </linearGradient>
            </defs>
            <text x="3" y="27" fontFamily="var(--font-display)" fontWeight="700" fontSize="24" fill="url(#topbarLogoGrad)">
              MZ
            </text>
          </svg>
        </Link>

        {/* Navigation - Centered */}
        <nav className="topbar__nav">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `topbar__nav-link ${isActive ? "topbar__nav-link--active" : ""}`
              }
              aria-label={label}
            >
              <span className="topbar__nav-text">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Tools - Right Side */}
        <div className="topbar__tools">
          {/* <LanguageSwitcher /> */}
          <ThemeSwitcher />
        </div>

      </div>
    </header>
  );
};

export default TopBar;
