import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialFlow.css";
import {
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container">
        <a
          href="https://ro.linkedin.com/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </p>
    </div>
  );
}
