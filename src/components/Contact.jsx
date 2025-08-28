import React, { useState } from "react";
import axios from "axios";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.phoneNumber = `${data.countryCode}${data.phoneNumber}`;

    try {
      setIsSubmitting(true);
      setFormStatus({ message: "", type: "" });
      const response = await axios.post("https://accountspro.eu/api/user/userContactDetail", data);
      if (response.data?.status === 200) {
        setFormStatus({ message: "Message sent successfully!", type: "success" });
        form.reset();
      } else {
        setFormStatus({ message: "Failed to send message. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("API error:", error);
      setFormStatus({ message: "Something went wrong.", type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus({ message: "", type: "" }), 6000);
    }
  };

  return (
    <div className="container mb-4">
      <style>
        {`
          .spinner {
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
            margin-right: 0.5rem;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @media (max-width: 576px) {
            #countryFlag {
              width: 14px !important;
              height: 12px !important;
              margin-bottom: 2px;
              margin-right: 4px;
            }
            .form-select {
              font-size: 13px;
            }
          }
        `}
      </style>

      <div className="row">
        {/* Contact Form */}
        <div className="col-12 col-md-8 text-start contact-form">
          <div className="p-md-5 p-0">
            <div className="row ms-lg-3">
              <div className="col-12 mt-4 mt-lg-0">
                <h2 className=" girl-heading">We're Here to Help</h2>
                <p className="text-muted banner-para">
                  Have questions or need assistance? Get in touch with us today.
                </p>
              </div>
              <div className="col-12">
                <form onSubmit={onSubmit}>
                  <FormGroup label="First Name" name="firstName" required />
                  <FormGroup label="Last Name" name="lastName" required />

                  {/* Phone with Country Code and Flag */}
                  <div className="row d-flex align-items-end mb-3">
                    <div className="col-12 col-md-2">
                      <label htmlFor="phoneNumber" className="text-dark banner-para mb-0 text-start">
                        Mobile No
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex align-items-center">
                        <img
                          id="countryFlag"
                          src="https://flagcdn.com/be.svg"
                          alt="flag"
                          width="17"
                          height="16"
                          style={{ borderRadius: "3px", objectFit: "cover" }}
                        />

                        <select
                          name="countryCode"
                          className="form-select border-0 bg-transparent border-bottom"
                          style={{ width: "75px", boxShadow: "none", fontSize: "14px" }}
                          required
                          onChange={(e) => {
                            const phoneInput = document.getElementById("phoneNumber");
                            const flag = document.getElementById("countryFlag");

                            if (e.target.value === "+32") {
                              phoneInput.pattern = "[0-9]{9}";
                              phoneInput.title = "Enter a 9-digit mobile number for Belgium";
                              flag.src = "https://flagcdn.com/be.svg";
                            } else {
                              phoneInput.pattern = "[0-9]{10}";
                              phoneInput.title = "Enter a 10-digit mobile number for Germany";
                              flag.src = "https://flagcdn.com/de.svg";
                            }
                          }}
                        >
                          <option value="+32">+32</option>
                          <option value="+49">+49</option>
                        </select>

                        <input
                          id="phoneNumber"
                          type="tel"
                          name="phoneNumber"
                          className="form-control border-0 bg-transparent border-bottom"
                          style={{ boxShadow: "none", minWidth: "150px" }}
                          pattern="[0-9]{9}"
                          title="Enter a 9-digit mobile number for Belgium"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <FormGroup label="Email" name="email" type="email" required />
                  <FormGroup label="Job Title" name="jobTitle" required />
                  <FormGroup label="Company" name="company" required />
                  <FormGroup label="Message" name="message" required />

                  <div className="col-md-8 col-12 mb-4 mb-md-0 mt-5">
                    <button
                      type="submit"
                      className="w-100 text-white accounted-btn py-2 rounded-pill border-0 d-flex align-items-center justify-content-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && <span className="spinner"></span>}
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>
                  </div>

                  {formStatus.type !== "info" && formStatus.message && (
                    <div className="col-12 mt-3 ms-5">
                      <p className={`text-${formStatus.type === "success" ? "success" : "danger"}`}>
                        {formStatus.message}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-12 col-md-4 d-none d-md-block liner_backgorund p-0 position-relative">
          <div className="contact-info mt-lg-5 px-4 py-5 text-white rounded position-absolute d-flex flex-column justify-content-center outer_main_div_navy_color">
            <div className="rounded position-absolute one_blue_div"></div>
            <ContactInfo
              iconSrc={location}
              text="Office Parc, Chausée de Tervuren 200/ Bâtiment Q, 1410 Waterloo, Belgium"
            />
            <ContactInfo iconSrc={phone} text="+32474796786" />
            <ContactInfo iconSrc={mail} text="support@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Form Field
const FormGroup = ({ label, name, type = "text", required }) => (
  <div className="row d-flex align-items-end mb-3">
    <div className="col-12 col-md-2">
      <label htmlFor={name} className="text-dark banner-para mb-0 text-start">
        {label}
      </label>
    </div>
    <div className="col-md-6 col-12">
      <input
        id={name}
        type={type}
        name={name}
        className="form-control border-0 bg-transparent border-bottom ms-lg-4 ms-0"
        style={{ boxShadow: "none" }}
        required={required}
      />
    </div>
  </div>
);

// Reusable Contact Info with image
const ContactInfo = ({ iconSrc, text }) => (
  <div className="d-flex align-items-start ">
    <img
      src={iconSrc}
      alt="icon"
      width="20"
      height="20"
      className="me-2"
      style={{ objectFit: "contain", marginTop: "5px" }}
    />
    <p className="contact_paragraph mt-1">{text}</p>
  </div>
);

export default Contact;


