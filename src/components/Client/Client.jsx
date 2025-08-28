import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import Carousel
import crouselImg1 from "../../assets/ClinetCrousel.svg";
import crouselimg from "../../assets/crouselimg.png";
import Check from "../../assets/Check.png";
import line from "../../assets/accounts-step-top-image.png";
import Contact from "../Contact.jsx";
import SignUp from "../../assets/SignUp.png";
import Matched from "../../assets/Matched.png";
import office from "../../assets/office.png";
import calendar from "../../assets/calendar.png";
import roundimage1 from "../../assets/roundimage1.png";
import roundimage2 from "../../assets/roundimage2.png";
import roundimage3 from "../../assets/roundimage3.png";
import roundimage4 from "../../assets/roundimage4.png";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi"; // ✅ FIXED IMPORT
import zigzag from "../../assets/zigzag.png";
import single from "../../assets/single.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import tickimag from "../../assets/tickimag.svg";
import technologyimage from "../../assets/technologyimage.png";
import left1 from "../../assets/left1.svg";
import left2 from "../../assets/left2.svg";
import Loginimage from "../../assets/Loginimage.svg";
import calendarimage from "../../assets/calendarimage.svg";
import Dashboard1 from "../../assets/Dashboard Version 3.png";
import { FaCheckCircle } from "react-icons/fa";
import Cofounder from "../../assets/Cofounder.png";
import Laptop from "../../assets/Laptop.svg";
import "./Body.css";

const BulletList = ({ items }) => (
  <div className="row row-cols-2 mt-2 fw-semibold g-2 gy-md-2">
    {items.map((point, idx) => (
      <div key={idx} className="col d-flex align-items-start pb-lg-1">
        <img
          src={Check}
          alt="check"
          style={{
            width: "18px",
            height: "18px",
            marginTop: "4px",
            marginRight: "8px",
          }}
        />
        <span>{point}</span>
      </div>
    ))}
  </div>
);
const Client = () => {
  const [openItem, setOpenItem] = useState("faq1");
  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* SECTION 1 */}
      
      <section>
        <div className="container banner-section2 shadow">
          <div
            className="row justify-content-center align-items-center text-center"
            style={{ minHeight: "100%" }}
          >
            <div className="col-lg-12 sec1">
              <p className="banner-heading mb-2 pt-0">
                Simplifying Accounting: Smart Technology
                <br />
                Meets Human Experties
              </p>
              <p className="banner-para mb-4">
                Matching you with professional accountants powered by innovative
                technology
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="https://client.accountspro.eu/client/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn accounted-btn rounded-pill text-white px-4"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "9px",
                    backgroundColor: "#7487E6",
                    borderColor: "#7487E6",
                  }}
                >
                  Find Your Accountant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION (Replacing Carousel) */}
      <div
        className="container pt-lg-4 web-sider2"
        style={{
          zIndex: 999,
          position: "relative",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <img
              src={crouselImg1} // Replace with your desired image
              alt="Banner"
              className="img-fluid rounded w-100"
            />
          </div>
        </div>
      </div>

      <section
        className="text-white section3 accounts-bg-img px-0"
        style={{
          marginTop: "25px",
          position: "relative",
          zIndex: 998,
          paddingBottom: "78px",
        }}
      >
        <div className="zigzag2 p-0">
          <div className="container">
            <div className="row mt-5">
              {/* LEFT TEXT */}
              <div className="col-lg-7 mb-4 mb-lg-0 mt-lg-4 pe-lg-5 text-center text-lg-start">
                <div className="mt-lg-5">
                  <h3 className="accounts-heading text-white mb-4">
                    Why Choose Us
                  </h3>
                  <p className="text-light banner-para">
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              {/* RIGHT FEATURES */}
              <div className="col-lg-5 mt-lg-4">
                <div className="d-flex flex-column gap-4 mt-lg-5 ps-lg-5">
                  {[
                    {
                      title: "Expert Accountant",
                      desc: "Access top-rated professionals for you needs.",
                      icon: roundimage1,
                    },
                    {
                      title: "Process Monotring",
                      desc: "Track profress with our user-friendly dashboard.",
                      icon: roundimage2,
                    },
                    {
                      title: "Time Saving",
                      desc: "Spend more time doing business and less time  monotring it.",
                      icon: roundimage3,
                    },
                    {
                      title: "Your Business Sectratary",
                      desc: "24x7 assistant to keep your accounting on track",
                      icon: roundimage4,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-start text-start mb-1"
                    >
                      {/* Icon Box */}
                      <div
                        className="me-4 d-flex align-items-center justify-content-center bg-white"
                        style={{
                          width: "48px",
                          height: "54px",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          className="icon-img"
                          src={item.icon}
                          alt={item.title}
                          width={55}
                          height={55}
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h6 className="pt-2 mb-1 text-white feature-heading">
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

      <section className="how py-2 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <p className="accounts-heading mb-2 mt-4 mt-md-0">
                How AccountsPro Platform Works
              </p>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <button
                className="main_button accounted-btn text-white px-4 py-1 mt-3 mb-2"
                style={{ cursor: "default" }}
              >
                Start Today
              </button>
            </div>


            <div className="row justify-content-center align-items-start">
              {/* Left Column */}
              <div className="col-12 col-md-5 mt-lg-2 ">
                <div className="pt-4">
                  <h3 className="work-sub mb-3">Sign Up</h3>
                  <p className="footer_color hparra lh-sm">
                    Quick & Easy: Create your account in just a few minutes.
                  </p>
                  <div className="d-flex align-items-start">
                    <img src={tickimag} alt="" className="tick_image" />
                    <p className="footer_color second-para ms-2 lh-sm">
                      Provide your details and set your preferences for a tailored
                      experience.
                    </p>
                  </div>
                  <div className="mt-4 text-center text-md-start">
                    <img src={left1} alt="" className="img-fluid  how-img  how-bottom" />
                  </div>

                  <h3 className="footer_color heading1 mb-3 mt-5">
                    Schedule Interviews
                  </h3>
                  <p className="footer_color hparra lh-sm">
                    Multiple Options: Schedule interviews with multiple accountants.
                  </p>
                  <div className="d-flex align-items-start">
                    <img src={tickimag} alt="" className="tick_image" />
                    <p className="footer_color second-para ms-2 lh-sm">
                      Ask questions, assess compatibility, and choose the best fit
                      for your business.
                    </p>
                  </div>
                  <div className="mt-4 text-center text-md-start">
                    <img src={left2} alt="" className="img-fluid how-img how-bottom" />
                  </div>
                </div>
              </div>

              {/* Timeline Column */}
              <div className="col-md-1 d-none d-md-block position-relative">
                {/* Vertical Line (behind icons) */}
                <div
                  className="position-absolute top-0 bottom-0 start-50 translate-middle-x"
                  style={{ width: "4px", height: "1420px", backgroundColor: "#33333324" }}
                ></div>

                {/* Icons (above line) */}
                <div
                  className="d-flex flex-column align-items-center mt-5 position-relative"
                  style={{ gap: "20rem" }}  // change 6rem to any value
                >
                  {[SignUp, Matched, calendar, office].map((icon, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded-circle shadow"
                      style={{ zIndex: 2 }}
                    >
                      <img src={icon} alt="" style={{ width: "32px", height: "35px" }} />
                    </div>
                  ))}
                </div>

              </div>


              {/* Right Column */}
              <div className="col-12 col-md-5 ">
                <div className="text-center text-md-start">
                  <img src={Loginimage} alt="LoginImage" className="img-fluid how-bottom " />
                </div>
                <h3 className="footer_color heading1 mb-3 mt-4">
                  Find Your Perfect Accountant
                </h3>
                <p className="footer_color hparra lh-sm">
                  Smart Matching: Our platform connects you with
                  industry-specialized accountants.
                </p>
                <div className="d-flex align-items-start">
                  <img src={tickimag} alt="" className="tick_image" />
                  <p className="footer_color second-para ms-2 lh-sm">
                    Get matched with real accountants that fit your business needs
                    and preferences.
                  </p>
                </div>

                <div className="mt-4 text-center text-md-start">
                  <img src={calendarimage} alt="" className="img-fluid how-img how-bottom" />
                </div>

                <h3 className="footer_color heading1 mb-3 mt-5">
                  Hire & Get Started
                </h3>
                <p className="footer_color hparra lh-sm">
                  Seamless Contracting: Automate the hiring process with just a few
                  clicks.
                </p>
                <div className="d-flex align-items-start">
                  <img src={tickimag} alt="" className="tick_image mt-1" />
                  <p className="footer_color second-para ms-2 lh-sm">
                    Start working with your chosen accountant right away.
                  </p>
                </div>
              </div>
            </div>

            {/* End Button */}
            <div className="d-flex  align-items-center justify-content-center " style={{ transform: "translateY(-4px)" }}>
              <button
                className="main_button accounted-btn text-white px-5 py-1"
                style={{ cursor: "default" }}
              >
                End
              </button>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid third_background mt-2">
          <div className="container">
            <div className="row mx-lg-auto">
              <div className="col-12">
                <div className="row align-items-start mt-lg-3">
                  {/* Image Column */}
                  <div className="col-12 col-md-6 mt-4 mt-md-4 text-center text-md-start">
                    <img
                      src={technologyimage}
                      alt="techimage"
                      className="technology_image img-fluid"
                    />
                  </div>

                  {/* Text Column */}
                  <div className="col-12 col-md-6 mt-4 mt-md-5">
                    <span className="about-badge">About AccountPro</span>
                    <div className="mt-3">
                      <h1 className="text-white   text-center banner-heading text-md-start">
                        Simplifying Accounting with Technology & Expertise
                      </h1>
                      <p className="text-light text-start banner-para text-md-start mb-lg-5">
                        AccountsPro bridges the gap between clients and
                        professional accountants, combining the best of human
                        expertise with cutting-edge technology. Whether you're a
                        client seeking personalized financial guidance or an
                        accountant looking to grow your business, AccountsPro
                        empowers you to achieve your goals seamlessly.
                      </p>
                      <div className="text-center text-md-start">
                        <a
                          href="https://client.accountspro.eu/client/login"
                          className="t-btn text-white px-4 fw-medium accounted-btn py-2 mt-1 text-decoration-none"
                        >
                          Know More
                          <span className="ms-2">
                            <MdArrowOutward />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="col-md-7 px-4 px-md-4">
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
              <span className="curved-badge">About  Accounts Pro</span>
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

      <section className="mt-md-5 mb-md-5 mb-4 mt-5 plans-section">
        <div className="container">
          <div className="text-center mb-md-5 mb-2">
            <p className="accounts-heading">Plans And Pricing</p>
            <p className="text-muted para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-9 h-100">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* Base Plan */}
                <div className="col">
                  <div className="plan-card p-lg-4 p-3 pt-0    text-start rounded-4   bg-transparent">
                    <div className="d-flex flex-column align-items-stretch ">
                      <div className="mb-2 pricing ps-lg-2 mt-4">
                        <p className="fw-lg-bold fw-semibold price-heading mb-0 ">
                          €50{" "}
                          <span className="fw-normal price-span">/month</span>
                        </p>
                        <p className="mt-2 fw-lg-semibold fs-lg-5 fs-6 mb-1 mb-lg-2">
                          Base
                        </p>
                        <p className="text-muted small pricing-para">
                          For most businesses that want to optimize web queries
                        </p>
                      </div>
                      <ul className="list-unstyled text-start ps-2 mb-4 flex-grow-1">
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            All limited links
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Own analytics platform
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Chat support
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Optimize hashtags
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Unlimited users
                          </span>
                        </li>
                      </ul>
                      <a
                        href="https://client.accountspro.eu/client/login"
                        className="btn btn-light plan-btn rounded-pill choose-btn mt-auto d-flex justify-content-center align-items-center ms-lg-3"
                      >
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="plan-card p-lg-4 p-3 pt-0    text-start rounded-4   bg-transparent">
                    <div className="d-flex flex-column align-items-stretch ">
                      <div className="mb-2 pricing ps-lg-2  mt-2 mt-lg-0">
                        <p className=" popular align-items-end text-end mt-1 mb-lg-0 me-3">
                          MOST POPULAR{" "}
                        </p>
                        <p className="fw-lg-bold fw-semibold  price-heading mb-0">
                          €100{" "}
                          <span className="fw-normal price-span">/month</span>
                        </p>
                        <p className="mt-2 fw-lg-semibold fs-lg-5 fs-6 mb-1 mb-lg-2">
                          Pro
                        </p>
                        <p className="text-muted small pricing-para">
                          For most businesses that want to optimize web queries
                        </p>
                      </div>
                      <ul className="list-unstyled text-start ps-2 mb-4 flex-grow-1">
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            All limited links
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Own analytics platform
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Chat support
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Optimize hashtags
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Unlimited users
                          </span>
                        </li>
                      </ul>
                      <a
                        href="https://client.accountspro.eu/client/login"
                        className=" ms-lg-3 btn btn-light plan-btn rounded-pill choose-btn mt-auto d-flex justify-content-center align-items-center"
                      >
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
                {/* Enterprise Plan */}
                <div className="col">
                  <div className="plan-card p-lg-4 p-3 pt-0    text-start rounded-4   bg-transparent">
                    <div className="d-flex flex-column align-items-stretch ">
                      <div className="mb-2 pricing ps-lg-2 mt-4">
                        <p className="fw-lg-bold fw-semibold  price-heading mb-0 ">
                          €200{" "}
                          <span className="fw-normal price-span">/month</span>
                        </p>
                        <p className="mt-2 fw-lg-semibold fs-6  fs-lg-5 mb-1 mb-lg-2">
                          Enterprise
                        </p>
                        <p className="text-muted small pricing-para">
                          For most businesses that want to optimize web queries
                        </p>
                      </div>
                      <ul className="list-unstyled text-start ps-2 mb-4 flex-grow-1">
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            All limited links
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Own analytics platform
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Chat support
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-2">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Optimize hashtags
                          </span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <div className="check-icon">
                            <FaCheck />
                          </div>
                          <span className="ms-2 text-muted list">
                            Unlimited users
                          </span>
                        </li>
                      </ul>
                      <a
                        href="https://client.accountspro.eu/client/login"
                        className="btn btn-light plan-btn rounded-pill choose-btn mt-auto d-flex justify-content-center align-items-center ms-lg-3"
                      >
                        Choose plan
                      </a>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default Client;

{
  /* 
  * CAROUSEL SECTION *
  <div
  className="container pt-lg-4  web-sider"
  style={{
    zIndex: 999,
    position: "relative", // Important if overlapping
  }}
>
  <div className="row justify-content-center">
    <div className="col-lg-10">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        swipeable
        emulateTouch
        className="rounded "
      >
        <div>
          <img
            src={crouselImg1}
            alt="Slide 1"
            className="img-fluid carousel-img rounded"
          />
        </div>
        <div>
          <img
            src={crouselimg}
            alt="Slide 2"
            className="img-fluid carousel-img rounded"
          />
        </div>
      </Carousel>
    </div>
  </div>
</div>

*/
}
