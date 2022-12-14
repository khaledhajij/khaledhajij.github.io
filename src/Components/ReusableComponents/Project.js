import React from "react";

const Project = (props) => {
  return (
    <div className="Project">
      <div className="img-container">
        <img src="" alt="" />
      </div>
      <div className="description">
        <h3>{props.title || "project title"}</h3>
        <p>
          {props.description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit."}
        </p>
        <p>
          Made with love using:
          <br/> 
          {props.tools || " HTML CSS JS"}
        </p>
        <button className="btn primary-btn">
          {props.button || "learn more"}
        </button>
      </div>
    </div>
  );
};

export default Project;
