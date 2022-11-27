import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
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
          <ul className="socail-list">
            <li>
              <a href="https://www.linkedin.com/in/khaled-hajij-40872222a">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/963938825058">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="https://t.me/Khaled_Hajij">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
            <li>
              <a href="https://github.com/khaledhajij">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
