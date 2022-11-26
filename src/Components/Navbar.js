import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [mood, setMood] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const ulElements = ["home", "projects", "about", "contact"];
  const ulRendered = ulElements.map((li) => (
    <li>
      <a href={"#" + li}>{li.toUpperCase()}</a>
    </li>
  ));
  useEffect(() => {
    window.onscroll = function (e) {
      if (this.oldScroll > this.scrollY) {
        setShowNav(true);
      } else if (this.oldScroll < this.scrollY) {
        setShowNav(false);
      }
      this.oldScroll = this.scrollY;
      delete window.onscroll;
    };
  }, []);
  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .classList.add(mood ? "light" : "dark-theme-variables");
      document
      .getElementsByTagName("body")[0]
      .classList.remove(!mood ? "light" : "dark-theme-variables");
  }, [mood]);
  const toggleMood = () => {
    setMood((prevalue) => !prevalue);
  };
  return (
    <div
      className="Navbar"
      style={!showNav ? { transform: "translateY(-100px)" } : null}
    >
      <div className="myContainer">
        <div className="profile">
          <img src="https://simgbb.com/avatar/4RchmfPDWsDd.jpg" alt="" />
          <p className="name">{"Khaled Hajij".toUpperCase()}</p>
        </div>
        <div className="mod-toggler">
          <input type="checkbox" class="checkbox" id="checkbox" onClick={toggleMood} />
          <label for="checkbox" class="checkbox-label">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <span class="ball"></span>
          </label>
        </div>
        <ul>{ulRendered}</ul>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
