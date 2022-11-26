import React from "react";
const Section = (props) => {
  return (
    <div className="Section">
        <h2>{props.h2.toUpperCase() || "Title".toUpperCase()}</h2>
        <p>{props.p}</p>
    </div>
  );
};

export default Section;
