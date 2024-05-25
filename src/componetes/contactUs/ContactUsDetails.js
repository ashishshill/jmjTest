import React from "react";
import "./ContactUsDetails.css";
import GoogleMapComponent from "./GoogleMapComponent";

const ContactUsDetails = () => {
  return (
    <div className="contactUsDetailsContainer">
      <div className="contactUsDetailsWrapper">
        <div className="contactUsDetailsMain">
          <div className="contactUsDetailsTextFirst">
            <div className="contactUsDetailsContent">LOCATION</div>
            <div className="contactUsDetailsAddress">
              Rd 15, House, 07 Rabindra Sarani, Dhaka 1230
            </div>
          </div>
          <div className="contactUsDetailsTextSecond">
            <div className="contactUsDetailsContent">CONTACT US</div>
            <div className="contactUsDetailsAddress">
              <div className="phoneNumber">Phone : +880 1730-179117</div>
              <div className="phoneNumber">
                Email: info@trustgroupofcompany.com
              </div>
            </div>
          </div>
        </div>
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default ContactUsDetails;
