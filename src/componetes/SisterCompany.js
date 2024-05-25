import React from "react";
import "./SisterCompany.css";

const logoJson = [
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-university.png",
    logoText: "Trust University",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Family-Needs.png",
    logoText: "Trust Family Needs",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Real-Estate.png",
    logoText: "Trust Real Estate Limited",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Builders-Limited.png",
    logoText: "Trust Builders Limited",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Agro.png",
    logoText: "Trust Agro Industries Limited",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Design.png",
    logoText: "Trust Design Limited",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Trust-Iron-and-Steel-Stones.png",
    logoText: "Trust Iron and Steel Stones",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_SRL-trading-Corporation.png",
    logoText: "S.R.L Trading Corporation",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Ruoatoli-Builders-Ltd.png",
    logoText: "Trust Ruptoli Builders Ltd",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Kazi-Medical-House.png",
    logoText: "Kazi Medical House",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Makeup-World.png",
    logoText: "Make Up World Limited",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Cafe-Family-Resturant.png",
    logoText: "La Cafe Restaurant",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_Hotel-Paradise.png",
    logoText: "Hotel Paradise",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2023/01/Logo_trust-Foundation.png",
    logoText: "Trust Foundation",
  },
  {
    imageUrl:
      "https://trustgroupofcomapnies.com/wp-content/uploads/2021/11/WhatsApp-Image-2023-02-07-at-7.42.45-PM.jpeg",
    logoText: "Trust Medical College & Hospital (Proposed)",
  },
];

const SisterCompany = () => {
  return (
    <div className="sisterCompanyContainer">
      <div className="sisterCompanyWrapper">
        <div className="sisterCompanyMain">
          <div className="sisterCompanyFirstContent">
            <div className="sisterCompanyHeader">Sister Concern</div>
            <div className="sisterCompanyBoder"></div>
          </div>
          <div className="sisterCompanyLastContent">
            <div className="sisterCompanyProfileLogoWrapper">
              {logoJson.map((logo, index) => (
                <div key={index} className="sisterCompanyProfileLogo">
                  <img src={logo.imageUrl} alt={logo.logoText} />
                  <div className="logoContent">{logo.logoText}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SisterCompany;
