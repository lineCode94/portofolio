import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./projects.scss";

import jobsImg from "../../assets/images/projects/jobs.png";
import onestepImg from "../../assets/images/projects/onestep.png";
import healthImg from "../../assets/images/projects/onehealth.png";
import reefImg from "../../assets/images/projects/elreef2.png";
import mohm from "../../assets/images/projects/mohm.png"
import ikseb from "../../assets/images/projects/iksib.png"

const projectsData = [
  {
    id: "onestep",
    link: "https://onestep-sa.com/",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    image: onestepImg
  },
  {
    id: "mohm",
    link: null,
    tags: ["React", "Authentication", "Dashboard"],
    image: mohm
  },
  {
    id: "jobsai",
    link: "https://jobzai.net/index.html",
    tags: ["React", "REST API", "Responsive UI"],
    image: jobsImg
  },
  {
    id: "ikseb",
    link: null,
    tags: ["Next.js", "E-Commerce", "REST API"],
    image: ikseb
  },
  {
    id: "health",
    link: null,
    tags: ["React", "Healthcare", "Admin Panel"],
    image: healthImg
  },
  {
    id: "reef",
    link: "https://www.elreefelmasry.com/",
    tags: ["Automation", "CRM", "Business Platform"],
    image: reefImg
  },
];

const ProjectCardSkeleton = () => (
  <article className="skeleton-card">
    <div className="skeleton-img skeleton-base" />
    <div className="skeleton-content">
      <div className="skeleton-top">
        <div className="skeleton-badge skeleton-base" />
        <div className="skeleton-badge skeleton-base" />
      </div>
      <div className="skeleton-title skeleton-base" />
      <div className="skeleton-text-container">
        <div className="skeleton-text skeleton-base" />
        <div className="skeleton-text skeleton-base" />
        <div className="skeleton-text skeleton-base short" />
      </div>
      <div className="skeleton-tags">
        <div className="skeleton-tag skeleton-base" />
        <div className="skeleton-tag skeleton-base" />
        <div className="skeleton-tag skeleton-base" />
      </div>
    </div>
  </article>
);

const Projects = () => {
  const { t } = useTranslation();
  const [isFetching, setIsFetching] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    // Simulate API fetch delay to show premium skeleton loader
    const timer = setTimeout(() => {
      setIsFetching(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (id) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <motion.div 
      className="projects-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="projects-hero">
        <div className="projects-hero__content">
          <p className="projects-hero__eyebrow">{t("projects.title")}</p>
          <h1>{t("projects.subtitle")}</h1>
          <p>{t("projects.description")}</p>
        </div>
      </section>

      <div className="projects-grid">
        {isFetching ? (
          // Render Skeleton Cards during "API fetch"
          [...Array(6)].map((_, index) => (
            <motion.div
              key={`skeleton-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ProjectCardSkeleton />
            </motion.div>
          ))
        ) : (
          // Render Actual Project Cards
          projectsData.map((project, index) => {
            const title = t(`projects.list.${project.id}.title`);
            const type = t(`projects.list.${project.id}.type`);
            const category = t(`projects.list.${project.id}.category`);
            const description = t(`projects.list.${project.id}.description`);

            const isClickable = !!project.link;

            const CardWrapper = isClickable ? "a" : "div";
            const wrapperProps = isClickable 
              ? { href: project.link, target: "_blank", rel: "noreferrer" } 
              : {};

            const isImageLoaded = imagesLoaded[project.id];

            return (
              <motion.article
                key={project.id}
                className={`project-card ${isClickable ? "project-card--clickable" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <CardWrapper {...wrapperProps} className="project-card__wrapper">
                  
                  {/* Image Preview Container */}
                  <div className="project-card__image-container">
                    <div className="project-card__image-overlay">
                      {isClickable ? <ExternalLink size={24} /> : <Info size={24} />}
                    </div>
                    {project.image ? (
                      <>
                        <AnimatePresence>
                          {!isImageLoaded && (
                            <motion.div
                              initial={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="skeleton-img skeleton-base image-skeleton-overlay"
                            />
                          )}
                        </AnimatePresence>
                        <img 
                          className={`project-card__image ${!isImageLoaded ? "loading" : ""}`} 
                          src={project.image}
                          alt={title}
                          loading="lazy"
                          onLoad={() => handleImageLoad(project.id)}
                        />
                      </>
                    ) : (
                      <div className="project-card__placeholder">
                        <span className="project-card__placeholder-text">
                          Screenshot coming soon
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__top">
                      <span className="project-card__type">{type}</span>
                      <span className="project-card__category">{category}</span>
                    </div>
                    
                    <h2>{title}</h2>
                    <p>{description}</p>
                    
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-card__tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </motion.article>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default Projects;