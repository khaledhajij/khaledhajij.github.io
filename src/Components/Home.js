import React from "react";

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
        <button className="btn">{"see my projects".toUpperCase()}</button>
      </div>
    </div>
  );
};

export default Home;
