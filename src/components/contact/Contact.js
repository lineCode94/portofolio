import "./contact.scss";
import React, { useEffect, useState, useRef } from "react";
import Animated from "../AnimatedLatters/Animated";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
delete L.Icon.Default.prototype._getIconUrl;

  const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

 
  const refForm = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ppyni8g",
        "template_5o7e49s",
        refForm.current,
        "ln7JqLbNvleHp2vft",
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
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animated
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

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

        {/* Contact Card */}
        <div className="info-map">
          <div className="contact-card">
            <h3>Let's Connect</h3>

            <p>
              Mohamed Zakaria <br />
              Cairo, Egypt <br />
              +20 111 866 2916
            </p>

            <span>m.zakariaa06@gmail.com</span>

            <div className="social-links">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=m.zakariaa06@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Gmail"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-zakaria-javascript-developer/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/201118662916"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-wrap">
          <MapContainer
            center={[30.10170250438035, 31.29597416611229]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker
              position={[30.10170250438035, 31.29597416611229]}
              icon={customIcon}
            >
              <Popup>Mohamed Zakaria lives here 🙂</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;
