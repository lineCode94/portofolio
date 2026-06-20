import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal__container">
        <div className="footer-minimal__left">
          <span className="footer-minimal__logo">Mohamed Zakaria</span>
        </div>
        
        <div className="footer-minimal__center">
          <p>Crafting digital experiences that matter</p>
        </div>
        
        <div className="footer-minimal__right">
          <p>&copy; 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
