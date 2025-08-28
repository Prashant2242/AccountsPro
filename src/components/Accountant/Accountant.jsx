import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel
import crouselImg1 from "../../assets/crouselImg1.png";
import crouselimg from "../../assets/crouselimg.png";
import line from "../../assets/accounts-step-top-image.png";
import girl from "../../assets/girl.png";
import Contact from "../Contact.jsx";
import SignUp from "../../assets/SignUp.png";
import Matched from "../../assets/Matched.png";
import office from "../../assets/office.png";
import calendar from "../../assets/calendar.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; // ✅ FIXED IMPORT
import zigzag from "../../assets/zigzag.png";
import single from "../../assets/single.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Cofounder from "../../assets/Cofounder.png";
import Laptop from "../../assets/Laptop.svg";
import Check from "../../assets/Check.png";
import "./Body.css";
const BulletList = ({ items }) => (
  <div className="row row-cols-2 mt-2 fw-semibold g-2 gy-md-2">
    {items.map((point, idx) => (
      <div key={idx} className="col d-flex align-items-start pb-lg-1">
        <img
          src={Check} // Adjust path based on your setup
          alt="Tick icon"
          className="custom-tick-icon me-2 mt-1"
        />
        <span>{point}</span>
      </div>
    ))}
  </div>
);
const Accountant = () => {
  const [openItem, setOpenItem] = useState("faq1");
  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        {/* SECTION 1 */}
        {/* HERO SECTION */}
        <section>
          <div className="container banner-section new-banner shadow">
            <div
              className="row justify-content-center align-items-center text-center"
              style={{ minHeight: "100%" }}
            >
              <div className="col-lg-12 sec1">
                <p className="banner-heading mb-2 pt-0">
                  Supercharge Your Accounting Career with <br />
                  Technology-Powered Opportunities
                </p>
                <p className="banner-para mb-4">
                  Connect with top clients, streamline your workflow, and grow
                  your practice with AccountsPro
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button
                    className="btn accounted-btn rounded-pill text-white px-4"
                    style={{
                    
                      backgroundColor: "#7487E6",
                      borderColor: "#7487E6",
                    }}
                    onClick={() => window.open("https://accountant.accountspro.eu/accountant/signup", "_blank")}
                  >
                    Join as an Accountant
                  </button>


                  <a href="#how-it-works" className="learn-more-link">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE SECTION (Replacing Carousel) */}
        <div
          className="container pt-lg-4 web-sider"
          style={{
            zIndex: 999,
            position: "relative",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-10 mt-lg-5">
              <img
                src={crouselImg1} // Replace with your desired image
                alt="Banner"
                className="img-fluid rounded w-100"
              />
            </div>
          </div>
        </div>

        {/* WHY JOIN ACCOUNTS SECTION */}
        <section
          className="text-white accounts-bg-img px-0"
          style={{
            marginTop: "-80px",
            position: "relative",
            zIndex: 998,
          }}
        >
          <div className="zigzag2 p-0">
            <div className="container">
              <div className="row mt-5">
                {/* LEFT TEXT */}
                <div className="col-lg-7 mb-4 mb-lg-0 text-center text-lg-start">
                  <div className="mt-lg-5">
                    <span className="d-inline-block bg-light text-dark join-accounts mb-3 px-3 py-2">
                      Why Join AccountsPro?
                    </span>
                    <h3 className="accounts-heading text-white mb-2">
                      Why Accountants
                    </h3>
                    <h3 className="accounts-heading mb-3">
                      Love Working with Us
                    </h3>
                    <a
                      href="https://accountant.accountspro.eu/accountant/signup"
                      className="btn accounted-btn rounded-pill px-4 py-2 text-white"
                      style={{
                        backgroundColor: "#7487E6",
                        borderColor: "#7487E6",
                        cursor: "pointer",
                        zIndex: 999,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Start Your Journey with AccountsPro"
                    >
                      Start Your Journey Today
                    </a>
                  </div>
                </div>

                {/* RIGHT FEATURES */}
                <div className="col-lg-5">
                  <div className="d-flex flex-column gap-4 mt-lg-5 ps-lg-5">
                    {[
                      {
                        title: "Opportunities, Less Effort",
                        desc: "Get matched with high-quality clients automatically.",
                        icon: one,
                      },
                      {
                        title: "Work Smarter, Not Harder",
                        desc: "Leverage cutting-edge tools to streamline your workflow.",
                        icon: two,
                      },
                      {
                        title: "Earn More, Save Time",
                        desc: "Focus on your work while we handle client onboarding and contracts.",
                        icon: three,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-start text-start mb-1"
                      >
                        {/* Icon Box */}
                        <div
                          className="me-3 d-flex align-items-center justify-content-center bg-white"
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            width={24}
                            height={24}
                          />
                        </div>

                        {/* Text */}
                        <div>
                          <h6 className="pt-1 mb-2 text-white feature-heading">
                            {item.title}
                          </h6>
                          <p
                            className="mb-0 banner-para"
                            style={{ color: "#FFFFFFC7" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="how-it-works" className="py-5 bg-white text-center">
          <div className="container">
            <h2 className="banner-heading m-0">How it Works</h2>
            <p className="text-muted banner-para mb-3">
              Your Path to Success in 4 Simple Steps
            </p>

            <div className="position-relative mb-3">
              <img
                src={line}
                alt="timeline"
                className="img-fluid d-none d-md-block mx-auto"
                style={{ maxWidth: "75%" }}
              />
            </div>
            <div className="row g-4 mx-auto">
              {[
                {
                  step: "Step ",
                  title: "Sign Up",
                  desc: "Create your profile and highlight your expertise.",
                  icon: SignUp,
                },
                {
                  step: "Step ",
                  title: "Get Matched",
                  desc: "Our system finds clients that fit your industry and skills.",
                  icon: Matched,
                  icon2: single,
                },
                {
                  step: "Step ",
                  title: "Interview & Get Hired",
                  desc: "Connect, discuss, and secure your next opportunity.",
                  icon: calendar,
                  icon2: single,
                },
                {
                  step: "Step ",
                  title: "Start Working",
                  desc: "Focus on accounting while we handle contracts and payments.",
                  icon: office,
                },
              ].map((item, index) => (
                <div className="col-12 col-md-6 col-lg-3 " key={index}>
                  <p className=" mb-lg-2 mb-3 me-lg-3  ">
                    {item.step} <b>{index + 1}</b>
                  </p>

                  <div className="d-flex justify-content-center align-items-center">
                    <div className="p-4 bg-light step-card ">
                      <div className="d-flex justify-content-center  align-items-center">
                        <div className="align-items-center d-flex justify-content-center">
                          <div
                            className="bg-white rounded-circle d-flex align-items-center justify-content-center "
                            style={{
                              width: "62px",
                              height: "62px",
                              top: "0", // Adjust as needed
                              transform: "translateY(-50%)",
                            }}
                          >
                            <div
                              className="rounded-circle"
                              style={{
                                width: "14px",
                                height: "14px",
                                border: "1px solid red",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="pb-5  pt-3">
                        <img
                          src={item.icon}
                          alt={item.title}
                          style={{ width: "48px", height: "48px" }}
                        />
                        <h6
                          className=" mt-4 feature-heading border-0 "
                          style={{ color: "#7487E6" }}
                        >
                          {item.title}
                        </h6>
                        <p className="text-muted step-para ">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <a
                href="https://accountant.accountspro.eu/accountant/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 text-white accounted-btn rounded-pill"
              >
                Signup with AccountsPro
              </a>
            </div>
          </div>
        </section>

        <section
          className=" text-white py-5 pt-1 position-relative"
          style={{ backgroundColor: "#1C2842" }}
        >
          <div className="zigzag ">
            <div className="container">
              {/* Header */}
              <div className="row mb-5 text-center">
                <div className="col-12 mt-5">
                  <span className="d-inline-block bg-light text-dark join-accounts mb-3 px-3 py-2">
                    Key Featuring
                  </span>

                  <h2 className="banner-heading text-white mt-2">
                    Tools That Help You Do Your
                    <br className="d-none d-md-block" />
                    Best Work
                  </h2>
                </div>
              </div>

              {/* Features Grid */}
              <div className="row gy-4 ms-lg-5 px-lg-2">
                {[
                  {
                    title: "Client Matching",
                    desc: "Let AI connect you with the best clients.",
                  },
                  {
                    title: "Secure Payments",
                    desc: "Get paid on time with transparent payment tracking.",
                  },
                  {
                    title: "Seamless Contracting",
                    desc: "Automatic digital contracts make onboarding simple.",
                  },
                  {
                    title: "Smart Communication & Notification",
                    desc: "Alerts for timely document submission from clients, ensuring quality accounting for each client.",
                  },
                  {
                    title: "Dashboard & Insights",
                    desc: "Get real-time performance tracking and business insights.",
                  },
                  {
                    title: "Smooth Help & Support Automation",
                    desc: "Access fast and efficient support for any inquiries or issues.",
                  },
                ].map((feature, index) => (
                  <div className="col-md-6 " key={index}>
                    <div className="d-flex align-items-start ">
                      <div className="feature-circle me-3 flex-shrink-0 fw-bold ">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="mb-1 feature-heading">{feature.title}</h5>
                        <p className="mb-0 text-light banner-para">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about-section" className="founder-section py-5">
          <div className="container">
            <div className="row mb-5 mt-3 me-lg-5">
              <div className="col-md-5 text-center text-md-end mb-4 mb-md-0 pe-lg-4">
                <img
                  src={Cofounder}
                  alt="Portrait of Ravi Kaushik"
                  className="founder-img"
                />
              </div>
              <div className="col-md-7">
                <span className="curved-badge">About Founder</span>
                <h3 className="mt-3 fw-bold">Ravi Kaushik</h3>
                <p className="text-muted founder-desc">
                  Co-founder | Digital Transformation Leader | Lean Six Sigma
                  Black Belt
                  <br />
                  With over two decades of experience at the intersection of
                  business strategy and information technology, Ravi brings a
                  wealth of global expertise in
                  <strong> corporate banking</strong>,{" "}
                  <strong>payment systems</strong>,{" "}
                  <strong>pricing-to-billing</strong>
                  systems, and <strong>digital transformation</strong>. He has
                  provided leadership to global organizations such as GE, HP, and
                  BNP Paribas (Fortis), where he led large-scale change
                  initiatives across complex enterprise environments.
                  <a href="#" className="ms-1 text-decoration-none">
                    Read More.
                  </a>
                </p>
                <h5 className="fw-semibold">Core Expertise:</h5>
                <BulletList
                  items={[
                    "Corporate Banking",
                    "Data Analytics",
                    "Payment Systems",
                    "Change Management",
                    "Pricing-to-Billing",
                    "Lean Six Sigma",
                    "Digital Transformation",
                    "Entrepreneurship",
                  ]}
                />
              </div>
            </div>

            <div
              className="row align-items-center flex-md-row-reverse ms-lg-1"
              style={{ marginTop: "40px" }}
            >
              <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
                <img
                  src={Laptop}
                  alt="Laptop with financial dashboard"
                  className="laptop-img rounded-4"
                />
              </div>
              <div className="col-md-7 px-lg-5 px-4">
                <span className="curved-badge">About Accounts Pro</span>
                <h3 className="mt-3 fw-bold">
                  Smart, Secure, and Effortless Financial Connections
                </h3>
                <p className="text-muted founder-desc">
                  At Accounts Pro, we bridge the gap between individuals,
                  businesses, and trusted accounting professionals. Our mission is
                  to make financial management simple, secure, and transparent for
                  everyone—whether you're a small business, freelancer, or just
                  someone looking to stay on top of your finances.
                </p>
                <h5 className="fw-semibold">What we Offer:</h5>
                <BulletList
                  items={[
                    "Seamless Connection",
                    "Secure & Confidential",
                    "Comprehensive Services",
                    "Easy-to-Use Tools",
                    "Real-Time Communication",
                    "Accessible Anytime, Anywhere",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 mb-lg-5 bg-white">
          <div className="container">
            <div className="row">
              {/* Left image */}
              <div className="col-md-5 col-12 text-center mb-4 mb-md-0 pe-0 ps-5 pt-lg-4">
                <img
                  src={girl}
                  alt="FAQ"
                  className="img-fluid"
                  style={{ maxWidth: "54%", height: "auto", objectFit: "cover" }}
                />
              </div>

              {/* Right FAQ */}
              <div className="col-md-7 col-12">
                <span className="faq-badge mb-2">FAQ</span>
                <h2 className=" mb-4 girl-heading">
                  Got Questions? We’ve Got Answers
                </h2>
                <hr
                  className="bg-body-secondary"
                  style={{ height: "4px", border: "none" }}
                />

                <div className="accordion" id="faqAccordion">
                  {[
                    {
                      id: "faq1",
                      question: "What types of clients can I expect?",
                      answer:
                        "AccountsPro works with businesses and individuals across various industries.",
                    },
                    {
                      id: "faq2",
                      question: "How secure are payments?",
                      answer:
                        "All payments are processed securely with end-to-end encryption.",
                    },
                    {
                      id: "faq3",
                      question: "Is there a cost to join?",
                      answer: "Joining is completely free with no hidden fees.",
                    },
                  ].map((item) => (
                    <div
                      className="accordion-item mb-4 border-0 border-bottom border-2 pb-2"
                      key={item.id}
                    >
                      <div className="accordion-header">
                        <button
                          className="bg-white mb-2 shadow-none px-0 fw-bold d-flex justify-content-between align-items-center w-100 border-0"
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          style={{ background: "none" }}
                        >
                          <h1 className="mb-0 text-start faq-heading">
                            {item.question}
                          </h1>
                          <span className="ms-auto ps-3">
                            {openItem === item.id ? (
                              <FiX size={18} />
                            ) : (
                              <FiPlus size={18} />
                            )}
                          </span>
                        </button>
                      </div>

                      {openItem === item.id && (
                        <div className="accordion-collapse show">
                          <div className="accordion-body px-0 banner-para pt-2 pb-0 text-muted">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-section">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );
};

export default Accountant;
