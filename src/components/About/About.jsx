import "./About.scss";
import React from "react";
import "../Layout/layout.scss";
import { useEffect, useState } from "react";
import Animated from "../AnimatedLatters/Animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import { motion } from "framer-motion";

import {
  faGithub,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import { SiNextdotjs, SiTypescript, SiNodedotjs } from "react-icons/si";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const skills = [
    { name: "React.js", icon: faReact, color: "#5ED4F4" },
    { name: "Next.js", componentIcon: SiNextdotjs, color: "#fff" },
    { name: "TypeScript", componentIcon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: faJsSquare, color: "#EFD81D" },
    { name: "Tailwind", icon: faTailwindCss, color: "#38B2AC" },
    { name: "Sass", icon: faSass, color: "#C76494" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "Git", icon: faGitAlt, color: "#EC4D28" },
    { name: "Node.js", componentIcon: SiNodedotjs, color: "#339933" },
  ];

  return (
    <>
      <div className="page contanier about-page">
        <motion.div 
          className="text-zone"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1 variants={itemVariants}>
            <Animated
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </motion.h1>
          <motion.p variants={itemVariants}>
            Senior Frontend Developer with over 7 years of experience building
            scalable and high-performance web applications using modern
            technologies such as React, Next.js, JavaScript (ES6+), TypeScript,
            HTML5, and CSS3. Experienced in delivering responsive, user-focused
            interfaces with strong emphasis on performance, scalability, and
            clean architecture. Worked across multiple industries and
            contributed to major projects for leading companies including IDH,
            Toyota, Grohe, and the Egyptian Countryside Development projects.
            Strong ability to translate business requirements into efficient and
            reusable frontend solutions while continuously adopting modern tools
            and best practices.
          </motion.p>

          <motion.p variants={itemVariants}>
            Proficient: React.js, Next.js, ES6, Tailwind, Shadcn/ui, Sass,
            HTML5, CSS3.<br /> Familiar: TypeScript, Node.js,
            Express, Redux, C#, ASP.NET Core MVC.
          </motion.p>

          <motion.div className="skills-container" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-badge"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill.icon && <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />}
                {skill.componentIcon && <skill.componentIcon style={{ color: skill.color, fontSize: "18px" }} />}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faTailwindCss} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#333" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#C76494" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
