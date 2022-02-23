import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Vishal Jain
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        
        <a href="https://www.linkedin.com/in/vishal-jain-8581aa150/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        
      </div>
    </div>
  );
};

export default Footer;