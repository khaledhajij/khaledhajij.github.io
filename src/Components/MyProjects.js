import React from "react";
import Section from "./ReusableComponents/Section";
import { sectionsData, projcetsData } from "../data";
import Project from "./ReusableComponents/Project";

const MyProjects = () => {
  const projectsRendered = projcetsData.map((project) => <Project />);
  return (
    <div className="MyProjects" >
      <div className="myContainer" id="projects">
        <Section h2={sectionsData.projects.h2} p={sectionsData.projects.p} />
        {projectsRendered}
      </div>
    </div>
  );
};

export default MyProjects;
