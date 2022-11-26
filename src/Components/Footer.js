import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="myContainer">
        <div className="info">
          <div className="name">KHALED HAJIJ</div>
          <div className="text">Inspiring and creative frontend developer</div>
        </div>
        <div className="socail">
          <p>SOCIAL</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
