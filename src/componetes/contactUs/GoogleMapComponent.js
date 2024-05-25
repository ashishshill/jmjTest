import React from "react";
import "./GoogleMapComponent.css";

const GoogleMapComponent = () => {
  return (
    <div className="mapContainer">
      <div className="mapWrapper">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Rd%2015%2C%20House%2C%2007%20Rabindra%20Sarani%2C%20Dhaka%201230&t=m&z=18&output=embed&iwloc=near"
          title="Rd 15, House, 07 Rabindra Sarani, Dhaka 1230"
          aria-label="Rd 15, House, 07 Rabindra Sarani, Dhaka 1230"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
