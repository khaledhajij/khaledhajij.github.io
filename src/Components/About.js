import React from "react";
import Section from "./ReusableComponents/Section";
import { sectionsData, myCertifications, mySkills } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  const renderedSkills = mySkills.map((skill) => (
    <li className="skill">{skill.toUpperCase()}</li>
  ));
  const renderedCertifications = myCertifications.map((cert) => (
    <a href={cert.url} target='_blank' rel="noreferrer">
      <li className="skill">
        {cert.name} <FontAwesomeIcon icon={faMeta} />
      </li>
    </a>
  ));
  return (
    <div className="About" id="about">
      <div className="myContainer">
        <Section h2={sectionsData.about.h2} p={sectionsData.about.p} />
        <div className="qualifiers">
          <div className="my-skills">
            <h3>My Skills</h3>
            <p>Good knowledge in lots of the needed skills</p>
            <ul className="my-skills">{renderedSkills}</ul>
          </div>
          <div className="my-certifications">
            <h3>My Certifications</h3>
            <p>
              Certified by META, Coursera and other well-known institutions. Click on the
              following items to verify
            </p>

            <ul className="my-certfications">{renderedCertifications}</ul>
          </div>
        </div>
        <div className="cert-details"></div>
      </div>
    </div>
  );
};

export default About;
