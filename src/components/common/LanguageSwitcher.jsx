import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./languageswitcher.scss";

const LanguageSwitcher = () => {
  const { changeLanguage, currentLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language Switcher">
      <button
        className={`language-switcher__option ${currentLanguage === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`language-switcher__option ${currentLanguage === "ar" ? "active" : ""}`}
        onClick={() => changeLanguage("ar")}
        aria-label="Switch to Arabic"
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
