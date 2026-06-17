import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Home.scss";
import "./../Layout/layout.scss";
import Logo from "./logo/Logo";
import { Link } from "react-router-dom";
import { Download, ArrowRight, Mail } from "lucide-react";
import Animated from "../AnimatedLatters/Animated";
import { motion } from "framer-motion";
import cvFile from "../../assets/Mohamed_Zakaria_CV.pdf";

const Home = () => {
  const { t } = useTranslation();
  const [letterClass, setLetterClass] = useState("text-animate");
  const [showTextZone, setShowTextZone] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowTextZone(true);
    }, 4500);

    const letterTimer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 7000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(letterTimer);
    };
  }, []);

  const hiArray = ["H", "i", ","];
  
  const nameArray = [
    "I",
    "'",
    "m",
    " ",
    "M",
    "o",
    "h",
    "a",
    "m",
    "e",
    "d",
    " ",
    "Z",
    "a",
    "k",
    "a",
    "r",
    "i",
    "a",
  ];

  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Muhammad-Zakaria-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container home-page page">
        <div className="particles-container" aria-hidden="true">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`hero-particle hero-particle--${i + 1}`} />
          ))}
        </div>
        {showTextZone && (
          <div className="text-zone">
            <h1>
              <Animated
                letterClass={letterClass}
                strArray={hiArray}
                idx={1}
              />
              <br />
              <Animated
                letterClass={letterClass}
                strArray={nameArray}
                idx={4}
              />
              <br />
              <Animated
                letterClass={letterClass}
                strArray={jobArray}
                idx={24}
              />
            </h1>

            <h2>{t("hero.subtitle")}</h2>

            <div className="cta-group">
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className="btn-primary">
                  <Mail size={18} />
                  {t("hero.cta.touch")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
                <Link to="/projects" className="btn-secondary">
                  {t("hero.cta.work")}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.button 
                whileHover={{ y: -4 }} 
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadCV} 
                className="btn-tertiary"
              >
                <Download size={18} />
                {t("hero.cta.cv")}
              </motion.button>
            </div>
          </div>
        )}

        <Logo />
      </div>
    </>
  );
};

export default Home;