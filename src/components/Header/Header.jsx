import React from "react";
import resumeSvg from "../../assets/header_img.png";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="left">
          <p className="heading">
            It is time to update your <span>Resume</span>
          </p>
          <p className="heading">
            Make your resume for <span>Free</span>
          </p>
        </div>
        <div className="right">
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
}
