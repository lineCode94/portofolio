import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./themeswitcher.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-switcher ${theme === "dark" ? "theme-switcher--dark" : "theme-switcher--light"}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="theme-switcher__icon-wrapper">
        <Sun className="theme-switcher__icon theme-switcher__icon--sun" size={18} strokeWidth={2} />
        <Moon className="theme-switcher__icon theme-switcher__icon--moon" size={18} strokeWidth={2} />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
