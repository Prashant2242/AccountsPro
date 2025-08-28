import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Vector from "../assets/account-logo.png";
import { PersonCircle, BoxArrowInRight } from "react-bootstrap-icons";
import "../App.css";
import Translation from "./Translation.jsx";

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const langRef = useRef();
  const loginRef = useRef();
  const location = useLocation();

  const toggleLangMenu = () => setLangOpen((prev) => !prev);
  const toggleLoginDropdown = () => setLoginDropdown((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-md-3 py-0 ms-0 me-0 bg-white p-0">
      <div className="container p-0">
        <div className="row mx-auto">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-0">
              <div className="container-fluid d-flex">
                {/* Logo */}
                <Link
                  className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 me-0"
                  to="/"
                >
                  <img className="logo-img" src={Vector} alt="Logo" />
                </Link>

                {/* Right icons - Mobile */}
                <div className="d-flex d-lg-none align-items-center gap-3 ms-auto">
                  <Translation />

                  {/* Mobile Switch Button with Icon */}
                  {location.pathname === "/client" ? (
                    <Link to="/" className="text-dark">
                      <BoxArrowInRight
                        size={22}
                        className="cursor-pointer"
                        title="Switch to Accountant"
                      />
                    </Link>
                  ) : (
                    <Link to="/client" className="text-dark">
                      <BoxArrowInRight
                        size={22}
                        className="cursor-pointer"
                        title="Switch to Client"
                      />
                    </Link>
                  )}

                  <div className="position-relative" ref={loginRef}>
                    <PersonCircle
                      size={20}
                      className="text-dark cursor-pointer"
                      onClick={toggleLoginDropdown}
                    />
                    {loginDropdown && (
                      <div
                        className="position-absolute bg-white shadow rounded mt-2"
                        style={{
                          right: 0,
                          zIndex: 999,
                          minWidth: "180px",
                          fontSize: "14px",
                        }}
                      >
                        <a
                          href="https://accountant.accountspro.eu/accountant/login"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dropdown-item text-dark text-decoration-none px-3 py-2"
                        >
                          Login as Accountant
                        </a>
                        <div className="dropdown-divider my-0" />
                        <a
                          href="https://client.accountspro.eu/client/login"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dropdown-item text-dark text-decoration-none px-3 py-2"
                        >
                          Login as Client
                        </a>
                      </div>
                    )}
                  </div>

                  <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>

                {/* Main Nav Links */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="w-100 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
                    <ul className="navbar-nav me-lg-2 ms-lg-auto mb-2 mb-lg-0 align-items-lg-center">
                      <li className="nav-item">
                        <a
                          className="nav-link header-link text-dark"
                          href="#about-section"
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link text-dark header-link"
                          href="#contact-section"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>

                    {/* Right Section - Desktop */}
                    <div className="d-md-block d-none">
                      <div className="d-flex align-items-center gap-3">
                        <div className="position-relative" ref={langRef}>
                          <Translation />
                        </div>

                        <div className="position-relative" ref={loginRef}>
                          <button
                            className="btn accounted-btn learn rounded-pill px-3"
                            onClick={toggleLoginDropdown}
                          >
                            Login
                          </button>
                          {loginDropdown && (
                            <div
                              className="position-absolute bg-white shadow rounded mt-2"
                              style={{
                                right: 0,
                                zIndex: 999,
                                minWidth: "180px",
                                fontSize: "14px",
                                paddingTop: "10px",
                              }}
                            >
                              <a
                                href="https://accountant.accountspro.eu/accountant/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item text-dark text-decoration-none px-3 py-2"
                              >
                                Login as Accountant
                              </a>
                              <div className="dropdown-divider my-0" />
                              <a
                                href="https://client.accountspro.eu/client/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item text-dark text-decoration-none px-3 py-2"
                              >
                                Login as Client
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Desktop Switch */}
                        {location.pathname === "/client" ? (
                          <Link
                            to="/"
                            className="btn accounted-btn rounded-pill"
                          >
                            Switch to Accountant
                          </Link>
                        ) : (
                          <Link
                            to="/client"
                            className="btn accounted-btn rounded-pill"
                          >
                            Switch to Client
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;



