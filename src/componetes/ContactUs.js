import React from "react";
import "./ContactUs.css";

import ContactUsDetails from "./contactUs/ContactUsDetails";
import ContactUsForm from "./contactUs/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="contactUsWrapper">
        <div className="contactUsMain">
          <ContactUsDetails />
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
