import "./About.scss";
import React from "react";
import "../Layout/layout.scss";
import { useEffect, useState } from "react";
import Animated from "./../AnimatedLatters/Animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    };
  }, []);
  // const strArr = ["A", "b", "o", "u", "t", " ", "m", "e"];
  return (
    <>
      {/* <Loader type="pacman" /> */}

      <div className="page contanier about-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
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
          </p>

          <p>
            Proficient: React.js, Next.js, ES6, Tailwind, Shadcn/ui, Sass,
            HTML5, CSS3.<br /> Familiar: TypeScript, Node.js,
            Express, Redux, C#, ASP.NET Core MVC.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
