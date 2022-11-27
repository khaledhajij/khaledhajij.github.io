import React from "react";
import {
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="myContainer">
        <h1>
          HEY, MY NAME IS
          <br /> KHALED HAJIJ
        </h1>
        <p>
          I am a passionate frontend developer. I love building apps that are
          delightful to use.
        </p>
        <button className="btn">
          <a href="#projects">{"see my projects".toUpperCase()}</a>
        </button>
        <ul className="socail-list firstOne">
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
  );
};

export default Home;
