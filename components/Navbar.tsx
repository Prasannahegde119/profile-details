import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faTint } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img
          src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png"
          alt="Student"
          className="student-photo"
        />
        <div className="leftid">
          <span className="student-id bold">CHNADAN M R</span>
          <span className="student-id">Student ID: 12345</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="contact-info">
          <div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> student@example.com
            </span>{" "}
          </div>
          <div>
            <span>
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7890
            </span>{" "}
          </div>
        </div>
        <div className="leftid">
          <span className="bold">Male</span>
          <span className="red">
            <FontAwesomeIcon icon={faTint} /> O+
          </span>{" "}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
