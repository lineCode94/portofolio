import React from "react";
import "./experience.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileText } from "lucide-react";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faReact, faVuejs, faSass } from "@fortawesome/free-brands-svg-icons";
import cvFile from "../../assets/Mohamed_Zakaria_CV.pdf";
const Experience = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Muhammad-Zakaria-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="experience-page">
      <div className="experience-heading">
        <div className="experience-heading__copy">
          <p className="experience-heading__eyebrow">Work / Experience</p>
          <h1>Professional experience</h1>
        </div>
        <a
          className="download-cv-button"
          onClick={handleDownload}
          style={{ cursor: "pointer" }}
          aria-label="Download CV"
        >
          <FileText size={18} />
          DOWNLOAD CV
        </a>
      </div>

      <VerticalTimeline className="ver-timeline" lineColor="rgba(255, 255, 255, 0.08)">
        <VerticalTimelineElement
          date="Oct. 2023 - Present"
          iconStyle={{
            background: "rgba(139, 92, 246, 0.15)",
            color: "var(--accent-purple)",
          }}
          icon={<FontAwesomeIcon icon={faReact} />}
        >
          <div className="timeline-content">
            <h3>Senior Frontend Developer — Content Clouds</h3>
            <h4>Riyadh, Saudi Arabia</h4>
            <p className="desc">
              Built scalable healthcare and marketing platforms using React ecosystem,
              focusing on performance, UX, and scalable architecture.
            </p>
            <p className="desc">
              Developed multiple production-grade systems including a healthcare web app,
              a marketing website, and an AI recruitment platform with strong emphasis on
              performance optimization, reusable components, and secure authentication.
            </p>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Performance</span>
              <span>AI Integration</span>
              <span>RBAC</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Nov. 2022 - Current"
          iconStyle={{
            background: "rgba(94, 212, 244, 0.15)",
            color: "#5ed4f4",
          }}
          icon={<FontAwesomeIcon icon={faReact} />}
        >
          <div className="timeline-content">
            <h3>Frontend Developer — Iksib Sell</h3>
            <h4>Kuwait</h4>
            <p className="desc">
              Built an ecommerce admin dashboard using React and Tailwind CSS with
              dynamic UI and scalable structure.
            </p>
            <div className="tags">
              <span>React</span>
              <span>Tailwind</span>
              <span>Dashboard</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Aug. 2022 - Nov. 2022"
          iconStyle={{
            background: "rgba(65, 184, 131, 0.15)",
            color: "#41b883",
          }}
          icon={<FontAwesomeIcon icon={faVuejs} />}
        >
          <div className="timeline-content">
            <h3>Frontend Developer — FreshFilter</h3>
            <h4>Netherlands</h4>
            <p className="desc">
              Vue.js and Quasar application integrated with Odoo ERP system,
              focused on business workflows and data-driven UI.
            </p>
            <div className="tags">
              <span>Vue.js</span>
              <span>Quasar</span>
              <span>ERP</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan. 2022 - Aug. 2022"
          iconStyle={{
            background: "rgba(139, 92, 246, 0.15)",
            color: "var(--accent-purple)",
          }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <div className="timeline-content">
            <h3>Frontend Developer — One Health Network</h3>
            <h4>Cairo, Egypt</h4>
            <p className="desc">
              Healthcare platform built with Bootstrap and Syncfusion, with backend
              integration using ASP.NET Core.
            </p>
            <div className="tags">
              <span>Bootstrap</span>
              <span>ASP.NET</span>
              <span>Syncfusion</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2018 - 2022"
          iconStyle={{
            background: "rgba(6, 182, 212, 0.15)",
            color: "var(--accent-cyan)",
          }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <div className="timeline-content">
            <h3>Frontend Developer — Global App Tech</h3>
            <h4>Cairo, Egypt</h4>
            <p className="desc">
              Developed enterprise systems including CRM, HRM, and automotive service
              management platforms.
            </p>
            <div className="tags">
              <span>CRM</span>
              <span>HRM</span>
              <span>Enterprise</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019"
          iconStyle={{
            background: "rgba(204, 102, 153, 0.15)",
            color: "#cc6699",
          }}
          icon={<FontAwesomeIcon icon={faSass} />}
        >
          <div className="timeline-content">
            <h3>Freelance — Islamic Academy</h3>
            <h4>Cairo, Egypt</h4>
            <p className="desc">
              Built responsive website using HTML, CSS, JavaScript, Sass, and jQuery.
            </p>
            <div className="tags">
              <span>HTML</span>
              <span>Sass</span>
              <span>JavaScript</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2016 - 2017"
          iconStyle={{
            background: "rgba(251, 191, 36, 0.15)",
            color: "var(--accent-gold)",
          }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <div className="timeline-content">
            <h3>Research Assistant — AUC</h3>
            <h4>New Cairo</h4>
            <p className="desc">
              Research work on nanotechnology and its impact on global warming.
            </p>
            <div className="tags">
              <span>Research</span>
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
