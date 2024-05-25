import React from "react";
import "./ContactUsForm.css";

const ContactUsForm = () => {
  return (
    <div className="contactUsDetailsFormContainer">
      <div className="contactUsDetailsFormWrapper">
        <div className="contactUsDetailsFormMain">
          <div className="contactUsDetailsFormTextFirst">
            <div className="contactUsDetailsFormHeader">Contact Info</div>
          </div>
          <div className="contactUsDetailsForm">
            <form className="contact-form" method="post" action="/">
              <div className="form-field">
                <input
                  type="text"
                  id="contact-name"
                  className="input-field"
                  name="contactName"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  id="contact-email"
                  className="input-field"
                  name="contactEmail"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-field">
                <textarea
                  id="contact-message"
                  className="textarea-field"
                  name="contactMessage"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button"
                aria-live="assertive"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="contactUsDetailsLogo">
            <div className="contactUsDetailsLogoContainer">
              <div className="contactUsDetailsLogoHour">
                <div className="contactUsDetailsLogoHourHeader">OUR HOURS</div>
                <div className="contactUsDetailsLogoHourTime">
                  SAT-TRUS 09:00 – 19:00
                </div>
              </div>
              <div className="contactUsDetailsLogoImg">
                <div className="contactUsDetailsLogoImgHeader">FOLLOW US</div>
                <div className="contactUsDetailsLogoImgIcon">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
