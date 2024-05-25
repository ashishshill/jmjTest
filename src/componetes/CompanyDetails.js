import React from "react";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  return (
    <div className="companyDetailsContainer">
      <div className="companyDetailsWrapper">
        <div className="companyDetailsMain">
          <div className="compayFirstContent">
            <div className="aboutUsContent">
              <div className="aboutUsHeader">About Us</div>
              <div className="aboutUsSubheader">
                Trust group was established by Advocate Kazi Shafiqul Alam
                (CIP). Trust group is one of the biggest group in Bangladesh
                that is involved in Construction, Real Estate, Education,
                E-commerce, Shopping malls, Import & Export, Agro and
                Restaurants.
              </div>
            </div>
            <div className="missionContent">
              <div className="missionHeader">Mission</div>
              <div className="missionSubheader">
                Mission at Trust Group Our mission at Trust Group is to play a
                pivotal role in the development and progress of Bangladesh. We
                are dedicated to fostering an ecosystem of trust, collaboration,
                and innovation that empowers individuals, businesses, and
                communities across the nation. By providing cutting-edge
                solutions, transparent platforms, and ethical practices, we aim
                to enhance economic growth, social harmony, and sustainable
                development in Bangladesh. Through strategic partnerships,
                knowledge sharing, and resource allocation, we aspire to
                contribute to a thriving Bangladesh where trust is the
                cornerstone of progress, and every citizen has the opportunity
                to reach their full potential.
              </div>
            </div>
            <div className="visionContent">
              <div className="visionHeader">Vision</div>
              <div className="visionSubheader">
                At Trust Group, our vision is to create a world where trust
                flourishes in every interaction. We envision a future where
                individuals, businesses, and communities can rely on each other
                with unwavering confidence. We strive to be the catalyst that
                transforms uncertain relationships into solid partnerships,
                driving growth, collaboration, and shared success. Through
                innovative solutions, transparent communication, and a
                commitment to ethical practices, we aim to build a global
                ecosystem where trust is the foundation upon which progress is
                built.
              </div>
            </div>
            <div className="findWrapper">
              <div className="findOutCtaMain">
                <a className="findOutCta" href="#d">
                  Find Out More
                </a>
                {/* <div className="findOutCta">Find Out More</div> */}
              </div>
            </div>
          </div>
          <div className="companyLastContent">
            <div className="companyProfileWrapper">
              <div className="companyProfileMain">
                <div className="compayChairman">
                  <img
                    src="https://trustgroupofcomapnies.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-11.24.59-PM.jpeg"
                    alt="Chairman"
                  />
                  <div className="chairmanDetails">
                    Chairman <br />
                    Advocate Kazi Shafiqul Alam (CIP)
                  </div>
                </div>
                <div className="compayMD">
                  <img
                    src="https://trustgroupofcomapnies.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-21-at-11.25.01-PM.jpeg"
                    alt="MD"
                  />
                  <div className="mdDetails">
                    Managing Director <br />
                    Rafiqul Alam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
