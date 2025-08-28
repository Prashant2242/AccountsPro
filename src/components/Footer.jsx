import React from "react";
import { Link } from "react-router-dom";

import belgiumflag from "../assets/belgiumflag.png";
import germany from "../assets/germany.png";
import facebookicon from "../assets/facebookicon.png";
import instagramicon from "../assets/instagramicon.png";
import linkdinicon from "../assets/linkedinicon.png";
import locationicon from "../assets/locationicon.png";
import mailicon from "../assets/mailicon.png";
import Vector from "../assets/account-logo.png";
import phoneicon from "../assets/phoneicon.png";

const Footer = () => {
  const quickLinks = [
    "Become self-employed",
    "Accounting services",
    "Features - Invoicing",
    "Features - Expenses",
    "Features - Credit note",
  ];

  const companyLinks = [
    { name: "Jobs" },
    { name: "Privacy policy", link: "/privacy" },
    { name: "Cookie policy" },
    { name: "Terms & Conditions", link: "/terms" },
  ];

  const helpLinks = [
    "Free webinars",
    "Help center",
    { name: "Contact us", anchor: "#contact-section" },
    "Web Access",
  ];

  return (
    <div className="container pt-5">
      <div className="row gx-5 gy-4 justify-content-between">
        {/* Column 1: Logo & Social */}
        <div className="col-md-2 col-6 pe-0">
          <Link
            to="/"
            className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2"
          >
            <img className="logo-img mb-2" src={Vector} alt="Logo" />
          </Link>
          <div className="mt-2 d-flex gap-2">
            {[facebookicon, instagramicon, linkdinicon].map((icon, i) => (
              <img key={i} src={icon} alt="social" className="social_logo" />
            ))}
          </div>
          <div className="mt-4">
            <img src={belgiumflag} alt="Belgium" className="social_logo" />
            <span className="footer-text ms-2" style={{ color: "#28004B" }}>
              AccountsPro in Belgium
            </span>
          </div>
          <div className="mt-2">
            <img src={germany} alt="Germany" className="social_logo" />
            <span className="footer-text ms-2" style={{ color: "#28004B" }}>
              AccountsPro in Germany
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-md-2 col-6">
          <p className="fw-bold">Quick Links</p>
          {quickLinks.map((text, i) => (
            <p key={i} className="footer-text mb-1" style={{ color: "#28004B" }}>
              {text}
            </p>
          ))}
        </div>

        {/* Column 3: Company */}
        <div className="col-md-2 col-6">
          <p className="fw-bold">Company</p>
          {companyLinks.map(({ name, link }, i) => (
            <p key={i} className="footer-text mb-1" style={{ color: "#28004B" }}>
              {link ? (
                <Link to={link} className="footer-link">
                  {name}
                </Link>
              ) : (
                name
              )}
            </p>
          ))}
        </div>

        {/* Column 4: Help & Support */}
        <div className="col-md-2 col-6">
          <p className="fw-bold">Help & Support</p>
          {helpLinks.map((item, i) =>
            typeof item === "string" ? (
              <p key={i} className="footer-text mb-1" style={{ color: "#28004B" }}>
                {item}
              </p>
            ) : (
              <a
                key={i}
                href={item.anchor}
                className="contact-link mb-1 d-block"
              >
                {item.name}
              </a>
            )
          )}
        </div>

        {/* Column 5: Contact Info */}
        <div className="col-md-3 col-12">
          <p className="fw-bold mb-3">Contact Us</p>
          <div className="d-flex align-items-start">
            <img src={locationicon} alt="Location" className="me-2 mt-1" />
            <p className="footer_para mb-0 pt-1">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          <div className="d-flex align-items-start mb-1 pt-2 ps-1">
            <img src={phoneicon} alt="Phone" className="me-2" />
            <p className="footer_para mb-0 mt-1">(629) 555-0129</p>
          </div>
          <div className="d-flex align-items-start">
            <img src={mailicon} alt="Mail" className="me-2 mt-1 ps-2" />
            <p className="footer_para mb-0 mt-1">alma.lawson@example.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center mt-4">
        <p style={{ fontSize: "12px", fontWeight: "400" }}>
          Account Pro All Rights Reserved Powered By{" "}
          <span style={{ color: "#7487E6", textDecoration: "underline" }}>
            Rowthtech
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
