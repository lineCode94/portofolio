import "./sidebar.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, User, Mail, Briefcase, Folder } from "lucide-react"; 
const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: User, label: "About" },
  { to: "/projects", icon: Folder, label: "Projects" },
  { to: "/experience", icon: Briefcase, label: "Work" },
  { to: "/contact", icon: Mail, label: "Contact" },
];

const downloadUrl = process.env.PUBLIC_URL + "/assets/Mohamed_Zakaria_CV.pdf";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mohammed-zakaria-javascript-developer/",
    label: "LinkedIn",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    href: "https://github.com/lineCode94",
    label: "GitHub",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    href: "https://twitter.com/zekoJs",
    label: "Twitter",
    renderIcon: () => (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      {/* Logo */}
      <Link className="sidebar__logo" to="/" aria-label="Home">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar__logo-svg">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-purple)" />
              <stop offset="100%" stopColor="var(--accent-cyan)" />
            </linearGradient>
          </defs>
          <text x="3" y="27" fontFamily="var(--font-display)" fontWeight="700" fontSize="24" fill="url(#logoGrad)">
            MZ
          </text>
        </svg>
      </Link>

      {/* Navigation */}
      <nav className="sidebar__nav">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `sidebar__nav-link ${isActive ? "sidebar__nav-link--active" : ""}`
            }
            aria-label={label}
          >
            <Icon size={20} strokeWidth={1.8} />
            <span className="sidebar__tooltip">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Social & Tools */}
      <div className="sidebar__footer">
        <div className="sidebar__social">
          {socialLinks.map(({ href, renderIcon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__social-link"
              aria-label={label}
            >
              {renderIcon()}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;