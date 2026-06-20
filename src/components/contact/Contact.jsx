import "./contact.scss";
import React, { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ppyni8g",
        "template_5o7e49s",
        refForm.current,
        "ln7JqLbNvleHp2vft"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });

          refForm.current.reset();
        },
        () => {
          toast.error("Something went wrong!", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="contact-split">
          
          {/* LEFT SIDE: Original form and text */}
          <div className="text-zone">
            <div className="contact-heading">
              <div className="contact-heading__copy">
                <p className="contact-heading__eyebrow">GET IN TOUCH</p>
                <h1>Contact Me</h1>
              </div>
            </div>

            <p>
              I am interested in freelance opportunities - especially on ambitious
              or large projects. However, if you have any other requests or
              questions, don't hesitate to contact me using the form below.
            </p>

            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>

                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>

                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>

                  <li>
                    <textarea placeholder="Message" name="message" required />
                  </li>

                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: Hero Social Icons (Replaced Map) */}
          <div className="map-wrap hero-socials-wrap">
            <div className="hero-socials">
              <a
                href="https://www.linkedin.com/in/mohammed-zakaria-javascript-developer/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=m.zakariaa06@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/mohammed-zakaria"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://twitter.com/your-twitter-handle"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn twitter"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>
      </div>
      <Loader type="pacman" />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;
