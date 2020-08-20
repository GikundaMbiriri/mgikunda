import React from "react";
import "./home.css";
import Typed from "react-typed";
import mgikunda from "./mgikunda.jpg";
const home = () => {
  return (
    <div className="hero">
      <img src={mgikunda} alt="the devs pic" className="pic" />
      <div className="hero-text">
        <h1>I am Mgikunda</h1>
        <Typed
          strings={[
            "I am a fullstack Web Developer",
            "I am an IOT enthusiast",
            "I enjoy writing code",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default home;
